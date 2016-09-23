
import {Component, Injectable} from 'angular2/core';
import {Http, Response, Headers, RequestOptions} from 'angular2/http';
import 'rxjs/add/operator/map';
import {Observable}from 'rxjs/Rx';

@Injectable()

export class UserService {
    private _url = "http://localhost:5000/users";

    constructor(private _http: Http) {
    }

    getUsers() {
        return this._http.get(this._url)
            .map(resp => resp.json());
    }

    getUser(userId) {
        return this._http.get(this._url + "/" + userId)
            .map(resp => resp.json());
    }

    editUser(user, userId) {
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers });
        user = JSON.stringify(user);
        return this._http.put(this._url + "/" + userId, user, options)
            .map(resp => {
                resp.json();
            });
    }

    addUser(user) {
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers });
        user = JSON.stringify(user);
        return this._http.post(this._url, user, options)
            .map(resp => resp.json());
    }

    deleteUser(userId) {
        alert('service delete UserId: ' + userId)
        return this._http.delete(this._url + "/" + userId)
            .map(resp => resp.json());
    }

}