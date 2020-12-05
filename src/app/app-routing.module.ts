import { PhotosComponent } from './photos/photos.component';
import { AlbumsComponent } from './albums/albums.component';
import { UsersComponent } from './users/users.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/users', pathMatch: 'full'},
  {path: 'users', component: UsersComponent},
  {path: 'albums/:id', component: AlbumsComponent},
  {path: 'photos/:id', component: PhotosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
