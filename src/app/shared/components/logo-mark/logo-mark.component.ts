import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/**
 * Renders the Yusra logo (brand files live in public/images/brand): a mark of
 * two arms that merge into one stem — two parties meeting at a single point —
 * beside the Arabic name and the spaced Latin caps. `variant="full"` is the
 * lockup (header/footer); `variant="icon"` is the mark alone.
 *
 * Words are outlines, not live text. Colour follows `var(--nx-text)` (black in
 * light mode, white in dark mode); `inverse` forces white for surfaces that
 * stay dark in both themes (footer, hero, the nav overlay).
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
