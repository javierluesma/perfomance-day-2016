import {Component, OnInit} from 'angular2/core';
import {RouterLink} from 'angular2/router';
import {UserService} from './users.service';

@Component({
    selector: 'users',
    template: `
        <h1>Users</h1>
        <a [routerLink]="['NewUser']" class="btn btn-primary">Add User</a>
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="#user of users">
                    <td>{{ user.name }}</td>
                    <td>{{ user.email }}</td>
                    <td>
                        <a [routerLink]="['EditUser',{id:user.id}]"><i class="glyphicon glyphicon-edit"></i> </a>
                    </td>
                    <td>
                        <i class="glyphicon glyphicon-remove clickable" (click)="deleteUser(user)" ></i>
                    </td>
                </tr>
            </tbody>
        </table>
    `,
    styles: [`
            .clickable{
                cursor:pointer;
            }
        `],
    providers: [UserService],
    directives: [RouterLink]
})


export class UsersComponent implements OnInit {
    users: any[];
    constructor(private _service: UserService) {

    }

    ngOnInit() {
        this._service.getUsers()
            .subscribe(users => this.users = users);
    }

    deleteUser(user) {
        alert(JSON.stringify(user));

        confirm('Are you sure to delete the User :' + user.name + " ?");


        this._service.deleteUser(user.id)
            .subscribe(user => { this.users = user; window.location.reload(); });
    }

}