import { ChangeDetectionStrategy, Component, HostListener, input, output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { LucideDynamicIcon } from '@lucide/angular';
import { NAV_ITEMS } from '../../../core/data/nav-items.data';
import { ThemeToggleComponent } from '../theme-toggle/theme-toggle.component';

/**
 * The navigation overlay opened by the header's burger: a soft sheet on phones
 * and tablets, a full-screen two-column takeover from the lg breakpoint up.
 *
 * It is always rendered and only toggles `.is-open`, so it can animate out as
 * well as in; the header owns the open state and the body scroll lock, and this
 * component just asks it to close (`closed`) on a link tap, a tap on the dimmed
 * page behind the sheet, or Escape.
 */
@Component({
  selector: 'app-mobile-menu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, TranslatePipe, LucideDynamicIcon, ThemeToggleComponent],
  templateUrl: './mobile-menu.component.html',
  styleUrl: './mobile-menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MobileMenuComponent {
  readonly open = input(false);
  readonly closed = output<void>();
  readonly navItems = NAV_ITEMS;

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.open()) {
      this.close();
    }
  }

  // Only a tap on the overlay itself counts: taps inside the sheet bubble up
  // with a different target.
  onOverlayClick(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      this.close();
    }
  }

  close(): void {
    this.closed.emit();
  }
}
