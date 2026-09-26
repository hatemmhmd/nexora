import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  forwardRef,
  inject,
  input,
  signal,
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';
import { LucideDynamicIcon } from '@lucide/angular';
import { SelectOption } from '../../../core/models';

/**
 * Custom-styled, keyboard-accessible dropdown that stands in for a native
 * `<select>` wherever `formControlName` is used. A native select's open
 * list is OS-rendered and can't be restyled, so this renders its own
 * listbox panel instead.
 */
@Component({
  selector: 'app-select',
  standalone: true,
  imports: [TranslatePipe, LucideDynamicIcon],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true,
    },
  ],
})
export class SelectComponent implements ControlValueAccessor {
  readonly options = input.required<SelectOption[]>();
  readonly placeholder = input<string>('');
  readonly id = input<string>('');

  readonly isOpen = signal(false);
  readonly value = signal<string>('');
  readonly disabled = signal(false);
  readonly activeIndex = signal(-1);
  readonly openUpward = signal(false);

  private static readonly PANEL_MAX_HEIGHT = 268; // matches the panel's max-height + gap

  private readonly host = inject(ElementRef<HTMLElement>);
  private onChange: (value: string) => void = () => {};
  private onTouched: () => void = () => {};

  get selectedOption(): SelectOption | undefined {
    return this.options().find((o) => o.value === this.value());
  }

  /** Resolved by the `translate` pipe in the template, not here — that keeps
   * the trigger label reactive to language changes under OnPush. */
  get triggerLabelKey(): string | null {
    return this.selectedOption?.labelKey ?? null;
  }

  writeValue(value: string): void {
    this.value.set(value ?? '');
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled.set(isDisabled);
  }

  toggle(): void {
    if (this.disabled()) return;
    this.isOpen.update((open) => !open);
    if (this.isOpen()) {
      const idx = this.options().findIndex((o) => o.value === this.value());
      this.activeIndex.set(idx >= 0 ? idx : 0);
      this.updatePanelDirection();
    } else {
      this.onTouched();
    }
  }

  private updatePanelDirection(): void {
    const rect = this.host.nativeElement.getBoundingClientRect();
    const spaceBelow = window.innerHeight - rect.bottom;
    const spaceAbove = rect.top;
    this.openUpward.set(spaceBelow < SelectComponent.PANEL_MAX_HEIGHT && spaceAbove > spaceBelow);
  }

  selectOption(option: SelectOption): void {
    this.value.set(option.value);
    this.onChange(option.value);
    this.onTouched();
    this.isOpen.set(false);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!this.host.nativeElement.contains(event.target as Node)) {
      if (this.isOpen()) this.onTouched();
      this.isOpen.set(false);
    }
  }

  @HostListener('keydown', ['$event'])
  onKeydown(event: KeyboardEvent): void {
    const opts = this.options();

    if (event.key === 'Escape') {
      this.isOpen.set(false);
      return;
    }

    if (!this.isOpen()) {
      if (event.key === 'Enter' || event.key === ' ' || event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        event.preventDefault();
        this.toggle();
      }
      return;
    }

    if (event.key === 'ArrowDown') {
      event.preventDefault();
      this.activeIndex.update((i) => Math.min(i + 1, opts.length - 1));
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      this.activeIndex.update((i) => Math.max(i - 1, 0));
    } else if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      const opt = opts[this.activeIndex()];
      if (opt) this.selectOption(opt);
    } else if (event.key === 'Tab') {
      this.isOpen.set(false);
    }
  }
}
