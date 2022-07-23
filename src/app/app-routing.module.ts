import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateBlog} from './Blogging/create-blog/create-blog.component';
import { CreateBlogList} from './Blogging/blog-list/blog-list.component';

const routes: Routes = [
 { path:'createblog',component :CreateBlog},
 {path :'bloglist', component :CreateBlogList},
 {path :'manageblogs', component :CreateBlogList},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
