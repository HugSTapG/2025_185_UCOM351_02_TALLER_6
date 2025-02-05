import { Component } from '@angular/core';

interface CardItem {
  imageSrc: string;
  iAlt: string;
  description: string;
  viewButtonText: string;
  editButtonText: string;
  timeLabel: string;
}

@Component({
  selector: 'app-cards',
  imports: [],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  cards: CardItem[] = [
    {
      imageSrc: "path/to/thumbnail-image.jpg",
      iAlt: "Thumbnail 1",
      description: "Uno",
      viewButtonText: "View",
      editButtonText: "Edit",
      timeLabel: "9 mins"
    },
    {
      imageSrc: "path/to/thumbnail-image.jpg",
      iAlt: "Thumbnail 2",
      description: "Dos",
      viewButtonText: "View",
      editButtonText: "Edit",
      timeLabel: "10 mins"
    },
    {
      imageSrc: "path/to/thumbnail-image.jpg",
      iAlt: "Thumbnail 3",
      description: "Tres",
      viewButtonText: "View",
      editButtonText: "Edit",
      timeLabel: "11 mins"
    },
    {
      imageSrc: "path/to/thumbnail-image.jpg",
      iAlt: "Thumbnail 4",
      description: "Cuatro",
      viewButtonText: "View",
      editButtonText: "Edit",
      timeLabel: "12 mins"
    },
    {
      imageSrc: "path/to/thumbnail-image.jpg",
      iAlt: "Thumbnail 5",
      description: "Cinco",
      viewButtonText: "View",
      editButtonText: "Edit",
      timeLabel: "13 mins"
    },
    {
      imageSrc: "path/to/thumbnail-image.jpg",
      iAlt: "Thumbnail 6",
      description: "Seis",
      viewButtonText: "View",
      editButtonText: "Edit",
      timeLabel: "14 mins"
    },
    {
      imageSrc: "path/to/thumbnail-image.jpg",
      iAlt: "Thumbnail 7",
      description: "Siete",
      viewButtonText: "View",
      editButtonText: "Edit",
      timeLabel: "15 mins"
    },
    {
      imageSrc: "path/to/thumbnail-image.jpg",
      iAlt: "Thumbnail 8",
      description: "Ocho",
      viewButtonText: "View",
      editButtonText: "Edit",
      timeLabel: "16 mins"
    },
    {
      imageSrc: "path/to/thumbnail-image.jpg",
      iAlt: "Thumbnail 9",
      description: "Nueve",
      viewButtonText: "View",
      editButtonText: "Edit",
      timeLabel: "17 mins"
    }
  ]

}
