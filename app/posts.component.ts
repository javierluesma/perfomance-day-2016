//Angular references
import {Component, OnInit} from 'angular2/core';

//Components Reference
import {SpinnerComponent} from './spinner.component';
import {UsersComponent} from './users.component';

// Services Reference
import {UserService} from './users.service';
import {PostServices} from './posts.services';

@Component({
    selector: 'posts',
    template: `
        <h1>Posts Page</h1>

        <div class="row">
            <div class="col-md-6">
                <select class="form-control" (change)="reloadPost({userId: u.value})" #u>
                    <option value="">select user..</option>
                    <option *ngFor="#user of users" value={{user.id}}> 
                        {{user.name}} 
                    </option>
                </select>

                <spinner [visible]="postsLoading"></spinner>
                <ul class="list-group">
                    <li class="list-group-item" [class.active]="currentPost == post" 
                        *ngFor="#post of posts" (click)="select(post)">{{ post.title }}</li>
                </ul>
            </div>

            <div class="col-md-6">
                <div class="panel panel-default" *ngIf="currentPost">
                    
                    <div class="panel-heading">
                        <h3 class="panel-title">{{ currentPost.title }} </h3>
                    </div>
                    <div class="panel-body"> {{ currentPost.body }} </div>

                    <hr>
                    <spinner [visible]="isLoadingComments"></spinner>
                    <div class="media" *ngFor="#comment of comments">
                        <div class="media-left">
                            <a href="#">
                            <img class="media-object img-circle" src="http://lorempixel.com/80/80/people?random={{ comment.id }}" alt="...">
                            </a>
                        </div>
                        <div class="media-body">
                            <h4 class="media-heading">{{ comment.name }}</h4>
                            {{comment.body}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    styles: [`
        .posts li { cursor: default; }
        .posts li:hover { background: #ecf0f1; } 
        .list-group-item.active, 
        .list-group-item.active:hover, 
        .list-group-item.active:focus { 
            background-color: #ecf0f1;
            border-color: #ecf0f1; 
            color: #2c3e50;
        }
    `],
    directives: [SpinnerComponent],
    providers: [PostServices, UserService]
})

export class PostsComponent implements OnInit {

    posts = [];
    users = [];
    postsLoading = true;
    isLoadingComments = true;
    currentPost;
    comments;

    constructor(private _postServices: PostServices, private _userService: UserService) {

    }

    ngOnInit() {
        this.loadPosts();
        this.loadUsers();
    }

    private loadUsers() {
        this._userService.getUsers()
            .subscribe(users => this.users = users);
    }
    private loadPosts(filter?) {
        this._postServices.getPosts(filter)
            .subscribe(
            posts => this.posts = posts,
            null,
            () => this.postsLoading = false
            );
    }

    reloadPost(userId) {
        this.postsLoading = true;
        this.currentPost = null;
        this.loadPosts(userId);
    }

    select(post) {
        this.currentPost = post;
        this.isLoadingComments = true;

        this._postServices.getComments(post.id)
            .subscribe(
            comments => this.comments = comments,
            null,
            () => this.isLoadingComments = false
            );

    }




}

