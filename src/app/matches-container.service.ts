import { Component, OnInit, Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class MatchesContainerService {
    private _url = "https://apiclient.resultados-futbol.com/scripts/api/api.php?tz=Europe/Madrid&format=json&req=matchsday&{{day}}&key=607e335601429fd054456af183795c18";
    constructor(private _http: Http) { }

    getMatches(day: string): Promise<any[]> {
        var url = this._url.replace('{{day}}', day);
        
        return this._http.get(url)
            .toPromise()
            .then(resp => resp.json() as any[]);
    }
}
