import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ScrollTopComponent } from './shared/components/scroll-top/scroll-top.component';
import { LanguageService } from './core/services/language.service';
import { ThemeService } from './core/services/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TranslatePipe, HeaderComponent, FooterComponent, ScrollTopComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  // Instantiated here so the language/direction is applied to <html>/<body>
  // as soon as the app boots, before any route renders.
  private readonly language = inject(LanguageService);
  private readonly theme = inject(ThemeService);
}
