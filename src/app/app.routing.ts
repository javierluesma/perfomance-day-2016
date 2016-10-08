import { Routes, RouterModule } from '@angular/router';

import { MatchesContainerComponent } from './matches-container.component';
import { UsersComponent } from './users.component';
import { UserFormComponent } from './user-form.component';
import { NotFoundComponent } from './not-found.component';
import { PostsComponent } from './posts.component';

const appRoutes: Routes = [
  {
    path: '',
    component: MatchesContainerComponent
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  }
  , { path: '**', component: NotFoundComponent }
];

export const routing = RouterModule.forRoot(appRoutes);

export const routedComponents = [MatchesContainerComponent, UserFormComponent, NotFoundComponent, PostsComponent];
