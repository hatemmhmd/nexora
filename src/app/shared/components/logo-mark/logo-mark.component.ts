import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/**
 * Renders the Wisla mark. `variant="full"` shows the icon + bilingual
 * wordmark lockup (header/footer); `variant="icon"` shows only the two
 * interlinked rings, used anywhere a square mark is needed (matches the
 * brand assets at public/images/wisla-logo-*.svg).
 *
 * The first ring and the wordmark default to `var(--nx-text)`, which already
 * flips with the site's light/dark theme — so a plain `<app-logo-mark />`
 * in the header just works in both modes. `inverse` forces the light-on-dark
 * colors for surfaces that are always dark regardless of site theme (footer,
 * the hero). The second ring is always the brand teal.
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
