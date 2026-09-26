import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { LucideDynamicIcon } from '@lucide/angular';
import { WHO_WE_SERVE } from '../../core/data/who-we-serve.data';
import { SectionHeadingComponent } from '../../shared/components/section-heading/section-heading.component';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink, TranslatePipe, LucideDynamicIcon, SectionHeadingComponent, RevealDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {
  readonly whoWeServe = WHO_WE_SERVE;
}
