import { Component } from '@angular/core';
import { ContactoComponent, MainExampleComponent, CardsComponent } from './shared/index.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContactoComponent, MainExampleComponent, CardsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '2025_185_UCOM351_02_TALLER_6';
}
