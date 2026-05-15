import { Routes } from '@angular/router';
import { PhotosDetail } from './pages/photos-detail/photos-detail';
import { PhotosList } from './pages/photos-list/photos-list';

export const routes: Routes = [
  { path: '', redirectTo: 'photos', pathMatch: 'full'}, // La ruta buida redirecciona al llistat d'imatges
  { path: 'photos', component: PhotosList},
  { path: 'photos/:id', component: PhotosDetail}, // Pasamos el id de la imagen determinada
];
