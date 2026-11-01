import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/**
 * Renders the Yusra logotype (brand files live in public/images/brand): the
 * Arabic name stacked over the spaced Latin caps, joined where they share a
 * sound — the sin and the S sit on one thin axis, in the quieter tone.
 * `variant="full"` is the logotype (header/footer); `variant="icon"` is just
 * that sin-over-S pair.
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
