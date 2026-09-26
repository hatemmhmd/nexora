import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/**
 * Renders the NEXORA mark. `variant="full"` shows the icon + wordmark
 * lockup (header/footer); `variant="icon"` shows only the connection-ring
 * symbol, used for the mobile collapsed state and anywhere a square mark
 * is needed (matches the brand assets at public/images/nexora-logo-*.svg).
 *
 * Color defaults to `var(--nx-text)`, which already flips with the site's
 * light/dark theme — so a plain `<app-logo-mark />` in the header just
 * works in both modes. `inverse` forces the light-on-dark brand color
 * (#F3F5F9) for surfaces that are always dark regardless of site theme
 * (footer, the hero).
 */
@Component({
  selector: 'app-logo-mark',
  standalone: true,
  templateUrl: './logo-mark.component.html',
  styleUrl: './logo-mark.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoMarkComponent {
  readonly variant = input<'full' | 'icon'>('full');
  readonly inverse = input(false);
}
