import { Component, OnInit } from '@angular/core';
import { MatchesContainerService } from './matches-container.service';

@Component({
    selector: 'matches',
    template: `
      <my-date-picker [options]="myDatePickerOptions"
           (dateChanged)="onDateChanged($event)"></my-date-picker>
    `,
    providers: [MatchesContainerService]
})

export class MatchesContainerComponent {
    matches: any;
    myDatePickerOptions = {
        todayBtnTxt: 'Today',
        dateFormat: 'yyyy-mm-dd',
        firstDayOfWeek: 'mo',
        sunHighlight: true,
        height: '34px',
        width: '260px',
        inline: false,
        disableUntil: { year: 2016, month: 8, day: 10 },
        selectionTxtFontSize: '16px'
    };

    constructor(private _matchesContainerServices: MatchesContainerService) { }

    onDateChanged(event: any) {
        this.loadMatches(event.formatted);
    }

    private loadMatches(day: string) {
        this._matchesContainerServices.getMatches(day)
          .then(matches => {
            this.matches = matches.matches;
            console.log(matches)
          });
    }
}
