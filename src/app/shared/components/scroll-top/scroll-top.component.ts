import { ChangeDetectionStrategy, Component, HostListener, signal } from '@angular/core';
import { LucideDynamicIcon } from '@lucide/angular';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-scroll-top',
  standalone: true,
  imports: [LucideDynamicIcon, TranslatePipe],
  templateUrl: './scroll-top.component.html',
  styleUrl: './scroll-top.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScrollTopComponent {
  readonly visible = signal(false);

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.visible.set(window.scrollY > 480);
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
