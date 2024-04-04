import { Routes } from '@angular/router';
import { AlbumImgsComponent } from './features/album/album-imgs/album-imgs.component';
import { AlbumListComponent } from './features/album/album-list/album-list.component';

export const routes: Routes = [
    {path: 'albumImgs/:id', component: AlbumImgsComponent},
    {path: '', component: AlbumListComponent}
];
