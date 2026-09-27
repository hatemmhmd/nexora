import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/**
 * Renders the MADAD mark. `variant="full"` shows the icon + bilingual
 * wordmark lockup (header/footer); `variant="icon"` shows only the two
 * overlapping squares, used for the mobile collapsed state and anywhere a
 * square mark is needed (matches the brand assets at public/images/madad-logo-*.svg).
 *
 * The neutral square + "MADAD" default to `var(--nx-text)`, which already
 * flips with the site's light/dark theme — so a plain `<app-logo-mark />`
 * in the header just works in both modes. `inverse` forces the light-on-dark
 * brand color (#F3F5F9) for surfaces that are always dark regardless of site
 * theme (footer, the hero). The accent square + "مدد" stay the brand amber
 * in both cases.
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
