import { PostService } from './../service/post.service';
import { Component, OnInit } from '@angular/core';
import { Post } from './../model/Post';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  listPost: Post[];
  post: Post = new Post;

  constructor(private PostService: PostService) { }

  ngOnInit(): void {
    this.findPosts();
  }

  findPosts() {
    this.PostService.getPosts().subscribe((data: any) => {
      this.listPost = data;
    })
  }

   salvarMensagem() {
    this.PostService.postMensagem(this.post).subscribe((data: any) => {
      this.post = data;
      location.assign('/feed');//dar refresh na página quando o método salavar for clicado
    })
   }
}
