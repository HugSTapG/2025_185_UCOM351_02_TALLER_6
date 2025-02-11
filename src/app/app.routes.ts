import { Routes } from '@angular/router';
import { CardsComponent, PostsComponent } from './shared/index.component';

export const routes: Routes = [
  {
    path: '',
    component: CardsComponent
  },
  {
    path: 'posts',
    component: PostsComponent
  }
];
