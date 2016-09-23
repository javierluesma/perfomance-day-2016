import {Component, Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';
import {Observable}from 'rxjs/Rx';

@Injectable()

export class PostServices {

    private _url = "http://localhost:5000/posts";
    constructor(private _http: Http) {

    }

    getPosts(filter?) {
        var url = this._url;
        if (filter && filter.userId)
            url += "?userId=" + filter.userId;

        return this._http.get(url)
            .map(resp => resp.json());
    }

    getComments(postId) {
        return this._http.get(this._url + "/" + postId + "/comments")
            .map(resp => resp.json());
    }
}