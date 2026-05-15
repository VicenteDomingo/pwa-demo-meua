import { Component, signal } from '@angular/core';
import { PhotosService } from '../../services/photos';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Photo } from '../../models/photo.interface';

@Component({
  selector: 'app-photos-detail',
  imports: [RouterLink],
  templateUrl: './photos-detail.html',
  styleUrl: './photos-detail.scss',
})
export class PhotosDetail {
  photoDetail = signal<Photo> ({
    id: '',
    author: '',
    width: 0,
    height: 0,
    url: '',
    download_url: '',
  });

  constructor (
    private photosService: PhotosService,
    // Para leer parámetros de la url
    private activatedRoute: ActivatedRoute,
    // Para redireccionar a una vista determinada si no tenemos un identificador válido
    private router: Router
  ) {}

  ngOnInit(): void {
    const identifier = this.activatedRoute.snapshot.paramMap.get('id');
    console.log('identifier -->', identifier);
  

    if (identifier) {
      this.photosService.getPhotoById(identifier).subscribe((img) => {
        if(!img) {
          this.router.navigateByUrl('/');
        }

        this.photoDetail.set(img);
        console.log('photoDetail --> ', this.photoDetail());
      });
    }
  }
}
