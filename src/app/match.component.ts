import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, Params} from '@angular/router';

//import { Validators } from '@angular/forms';
//import {User} from './user';
//import {UserService} from './users.service';
import {Match, Matchchannels} from './match';

@Component({
    templateUrl: 'match.component.html',
    selector: 'match',
    // providers: [UserService]
})
export class MatchComponent implements OnInit {
    form: any;
    title: string;
    match = new Match();
    id: number;

    constructor(private _activatedRoute: ActivatedRoute, private _router: Router) { }

    ngOnInit() {
    //ngOnInit(currentMatch: Match) {
        //this.match=currentMatch;
        this.match.local="Zaragoza";
        this.match.visitor="Barcelona";
        
        this.match.local_shield="http:\/\/thumb.resfu.com\/img_data\/escudos\/medium\/4235.jpg?size=60x&ext=png&lossy=1&1";
        this.match.visitor_shield="http:\/\/thumb.resfu.com\/img_data\/escudos\/medium\/1535.jpg?size=60x&ext=png&lossy=1&1";
    
    this.match.date = "2016\/10\/01";
    this.match.hour = "13";
    this.match.minute = "00";
    
    //"minute":"00";
    this.match.result="0-1";
    this.match.live_minute="23";
    this.match.status=1;
    //"winner":"710098";
/*
    team1: string;
    team2: string;
    
    competition_name:string;
    local_abbr:string;
    visitor_abbr:string;
    local_shield:string;
    visitor_shield:string,
    date:string;
    hour:string;
    minute:string;
    result:string;
    live_minute:string;
    status:number  ;
    winner:string;
    channels = new Matchchannels()
*/
/*
        this._activatedRoute.params.forEach((params: Params) => {
            if (params['id'] !== undefined) {
                this.id = +params['id'];
            }
        });
        this.title = this.id ? "Edit User" : "Add User";
        if (!this.id) {
            return;
        }
        this._userService.getUser(this.id.toString())
            .then(user => {
                this.user = user;
                if (user === undefined) {
                    this._router.navigate(['/not-found']);
                }
            });
*/
    }


}