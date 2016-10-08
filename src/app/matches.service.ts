import { Component } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { Match } from './match';

@Injectable()
export class MatchService {
    private _matches_json = "http://localhost:5000/users";  //TODO change to actual json retrieved from API

    constructor(private http: Http) { }

    getMatches(): Promise<Match[]> {
        return this.http.get(this._matches_json)
            .toPromise()
            .then(resp => resp.json() as Match[])
            .catch(this.handleError);
    }

    getMatch(matchId: string): Promise<Match> {
        return this.getMatches().then((matches => {
            var user = matches.find(match => match.id == matchId);
            return user;
        }))
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}