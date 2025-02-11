import { Component } from '@angular/core';
import { ContactoComponent,
         MainExampleComponent,
         FooterComponent } from './shared/index.component';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
            RouterModule,
            ContactoComponent,
            MainExampleComponent,
            FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '2025_185_UCOM351_02_TALLER_6';
}
