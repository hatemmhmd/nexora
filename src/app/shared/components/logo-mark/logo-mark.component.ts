import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/**
 * Renders the Yusra wordmark: the Arabic name beside the spaced Latin caps,
 * as in the brand file. `variant="full"` is the lockup (header/footer);
 * `variant="icon"` is just the Latin "Y" monogram, for square placements.
 *
 * It is a single-color mark: `var(--nx-text)` (navy in light mode, cream in
 * dark mode) so a plain <app-logo-mark /> adapts to the site theme. `inverse`
 * forces cream for surfaces that are always dark (footer, the hero).
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
