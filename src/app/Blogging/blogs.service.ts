import { Injectable } from "@angular/core";
import { Blog } from "./blogs.model";
import { Subject } from "rxjs";

@Injectable({providedIn:'root'})
export class BlogsService{
    private blogs: Blog[]=[];
    private postUpdated=new Subject<Blog[]>();

    getUpdateListener(){
        return this.postUpdated.asObservable();
    }

    addBlog(title :String, description :String, dateTime:any){
        const blog:Blog ={Title:title, desc : description, dateT: new Date()};  
        this.blogs.push(blog);
        this.postUpdated.next([...this.blogs])

    }

    getBlog(){
        return [...this.blogs]
    }
}