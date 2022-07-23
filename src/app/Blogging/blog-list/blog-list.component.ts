import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Blog } from '../blogs.model';
import { BlogsService } from '../blogs.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class CreateBlogList implements OnInit,OnDestroy {

  Blogs:Blog[]=[];
  private blogsSub: Subscription;

  constructor(public blogService:BlogsService) { }

  ngOnInit(): void {
    this.Blogs=this.blogService.getBlog();
    this.blogsSub=this.blogService.getUpdateListener().subscribe((blogs:Blog[])=>{
      this.Blogs=blogs;
    })
  }

  ngOnDestroy(): void {
    this.blogsSub.unsubscribe();
  }

}
