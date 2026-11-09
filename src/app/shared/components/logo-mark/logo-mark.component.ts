import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/**
 * Renders the Yusra logo (brand files live in public/images/brand): the heavy
 * Arabic word with its bar and diamond dots, and the Latin name tucked under
 * it at the left. `variant="full"` is the whole lockup (header/footer);
 * `variant="icon"` is the Arabic word alone.
 *
 * Letters are outlines, not live text. Colour follows `var(--nx-text)` (black
 * in light mode, white in dark mode); `inverse` forces white for surfaces that
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
