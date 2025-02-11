import { Component, AfterViewInit, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Popover } from 'bootstrap';
import { Post } from '../../interfaz/post.interface';
import { PostsService } from '../../servicios/posts.service';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit, AfterViewInit {
  posts: Post[] = [];

  constructor(private readonly postsService: PostsService) { }

  ngOnInit() {
    this.postsService.getPosts().subscribe(data => {
      this.posts = data;
    });
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.initializePopovers();
    }, 0);
  }

  private initializePopovers() {
    const observer = new MutationObserver((mutations, obs) => {
      console.log('DOM changed, reinitializing popovers');
      this.enablePopovers();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    this.enablePopovers();

    setTimeout(() => observer.disconnect(), 5000);
  }

  private enablePopovers() {
    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');

    console.log('Initializing popovers, elements found:', popoverTriggerList.length);

    popoverTriggerList.forEach(popoverTriggerEl => {
      Popover.getOrCreateInstance(popoverTriggerEl, {
        container: 'body'
      });
    });
  }
}
