import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchService } from './matches.service';
import { Match } from './match';

@Component({
    selector: 'Matches',
    template: `
        <h1>Matches</h1>
        <table class="table table-bordered">
            <tr *ngFor="let match of matches">
                <li>{{ match.name }}</li>
                <li>{{ match.local }}</li>
                <li>{{ match.visitor }}</li>
                <li>{{ user.result }}</li>
                <td>
                   <a (click)="detailMatch(match)"><i class="glyphicon glyphicon-edit"></i> </a>
                </td>      
            </tr>              
        </table>
    `,
    styles: [`
            .clickable{
                cursor:pointer;
            }
        `],
    providers: [MatchService]
})


export class MatchesComponent implements OnInit {
    matches: Match[];
    error: any;

    constructor(private _service: MatchService,  private router: Router) { }

    ngOnInit() {
        this._service.getMatches()
            .then(matches => this.matches = matches)
            .catch(error => this.error = error);
    }

    detailMatch(match: Match) {
        this.router.navigate(['/matches', match.id]);
    }

}