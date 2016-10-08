import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import './rxjs-extensions';
import { AppComponent } from './app.component';
import { routing, routedComponents } from './app.routing';
import { NavBarComponent } from './navbar.component';
import { MatchesContainerComponent } from './matches-container.component';
import { UsersComponent } from './users.component';
import { UserService } from './users.service';
import { UserFormComponent } from './user-form.component';
import { NotFoundComponent } from './not-found.component';
import { SpinnerComponent } from './spinner.component';
import { PostsComponent } from './posts.component';
import { MyDatePickerModule } from 'mydatepicker';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpModule,
    MyDatePickerModule
  ],
  declarations: [
    AppComponent,
    NavBarComponent,
    MatchesContainerComponent,
    UsersComponent,
    UserFormComponent,
    NotFoundComponent,
    PostsComponent,
    SpinnerComponent,
    routedComponents
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
