import { Component } from '@angular/core';
import { CardItem, Foto } from '../../interfaz/index.interface';
import { RecursosService } from '../../servicios/recursos.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css',
  providers: [RecursosService]
})
export class CardsComponent {
  fotos: Foto[] = [];
  cards: CardItem[] = [];

  constructor(private readonly recursosService: RecursosService) {
    this.obtenerFotos();
  }

  obtenerFotos() {
    this.recursosService.obtenerDatos().subscribe((respuesta) => {
      this.fotos = respuesta as Foto[];

      this.cards = this.fotos.map((foto, index) => ({
        imageSrc: foto.url,
        iAlt: `Thumbnail ${index + 1}`,
        description: `Imagen ${index + 1}`,
        viewButtonText: "View",
        editButtonText: "Edit",
        timeLabel: `${index + 9} mins`
      }));
    });
  }
}
