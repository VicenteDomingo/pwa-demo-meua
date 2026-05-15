import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Photo } from '../../models/photo.interface';
import { PhotosService } from '../../services/photos';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-photos-list',
  imports: [RouterLink],
  templateUrl: './photos-list.html',
  styleUrl: './photos-list.scss',
})
export class PhotosList {
  photos = signal<Photo[]>([]);

  constructor(private photosService: PhotosService) {}

  ngOnInit(): void {
    this.photosService
    .getPhotos()
    .subscribe((res) => this.photos.set(res.slice(0, 20)));
  }
}
