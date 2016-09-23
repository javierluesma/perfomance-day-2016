import {Component, OnInit} from 'angular2/core'
import {FormBuilder, ControlGroup, Validators} from 'angular2/common'
import {CanDeactivate, Router, RouteParams} from 'angular2/router'

import {User} from './user';
import {UserService} from './users.service';

import {EmailValidator} from './email.Validator';

@Component({

    templateUrl: 'app/user-form.component.html',
    providers: [UserService]

})

export class UserFormComponent implements OnInit, CanDeactivate {
    form: ControlGroup;

    title: string;
    user = new User();

    constructor(fb: FormBuilder, private _router: Router, private _routeParams: RouteParams, private _userService: UserService) {
        this.form = fb.group({
            name: ['', Validators.required],
            email: ['', EmailValidator.validEmail],
            phone: [],
            address: fb.group({
                street: [],
                suite: [],
                city: [],
                zipcode: []
            })
        });
    }

    ngOnInit() {

        var Id = this._routeParams.get("id");
        this.title = Id ? "Edit User" : "Add User";

        if (!Id)
            return

        this._userService.getUser(Id)
            .subscribe(user => this.user = user,
            response => {
                if (response.status == 404)
                    this._router.navigate(['NotFound']);
            })
    }

    routerCanDeactivate() {

        if (this.form.dirty)
            return confirm('You have unsaved changes. you really want to navigate from this page?')
        return true;
    }

    save() {
        if (this._routeParams.get("id")) {
            this._userService.editUser(this.form.value, this._routeParams.get("id"))
                .subscribe(x => {
                    this._router.navigate(['Users']);
                });
        } else {
            this._userService.addUser(this.form.value)
                .subscribe(x => {
                    this._router.navigate(['Users']);
                });
        }
    }
}



