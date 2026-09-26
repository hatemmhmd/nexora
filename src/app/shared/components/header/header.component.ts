import { ChangeDetectionStrategy, Component, HostListener, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { LucideDynamicIcon } from '@lucide/angular';
import { NAV_ITEMS } from '../../../core/data/nav-items.data';
import { LogoMarkComponent } from '../logo-mark/logo-mark.component';
import { LanguageSwitcherComponent } from '../language-switcher/language-switcher.component';
import { ThemeToggleComponent } from '../theme-toggle/theme-toggle.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    TranslatePipe,
    LucideDynamicIcon,
    LogoMarkComponent,
    LanguageSwitcherComponent,
    ThemeToggleComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  readonly navItems = NAV_ITEMS;
  readonly isMobileMenuOpen = signal(false);
  readonly isScrolled = signal(false);

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.isScrolled.set(window.scrollY > 8);
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update((v) => !v);
    this.syncBodyScrollLock();
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen.set(false);
    this.syncBodyScrollLock();
  }

  private syncBodyScrollLock(): void {
    document.body.classList.toggle('nx-no-scroll', this.isMobileMenuOpen());
  }
}
