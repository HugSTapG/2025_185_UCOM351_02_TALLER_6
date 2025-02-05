import { Component } from '@angular/core';
import { ContactoComponent } from './shared/contacto/contacto.component';
import { MainExampleComponent } from './shared/main-example/main-example.component';
import { CardsComponent } from './shared/cards/cards.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ContactoComponent, MainExampleComponent, CardsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '2025_185_UCOM351_02_TALLER_6';
}
