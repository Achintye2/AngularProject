import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BlogsService } from '../blogs.service';

@Component({
  selector: 'app-blog-create',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.css']
})
export class CreateBlog implements OnInit {

  constructor(public blogService: BlogsService) { }

  ngOnInit(): void {
  }

  onBlogAdded(Form :NgForm){
    if(Form.invalid){
      return
    }
    this.blogService.addBlog(Form.value.title,Form.value.description,Form.value.dateTime);
    Form.resetForm()
  }


}
