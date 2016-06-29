import {Component, OnInit} from '@angular/core';
import {Http, HTTP_PROVIDERS} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {SchedulerComponent} from '../app/scheduler.component';

@Component({
   selector: 'ds-app',
   templateUrl: './app/app.component.html',
   directives: [SchedulerComponent],
   providers: [HTTP_PROVIDERS]
})

export class AppComponent implements OnInit {
    events: any [];
    resources: any[];
    constructor(private http: Http) {}

    getEvents() {
        return this.http.get('../app/data/events.json')
                    .toPromise()
                    .then(res => { return res.json(); });
    }

    ngOnInit() {
        this.resources = [
        {
            id: '1',
            title: 'Room A'
        },
        {
            id: '2',
            title: 'Room B'
        }
        ];

        this.getEvents().then(events => {
            this.events = events;
            console.log(this.events);
        }
        );
    }
}
