import { Photo } from './../interfaces';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'
import { DataService } from 'src/app/services/data.service';
import { Album } from '../interfaces';


@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  albums: Array<Album> = [];
  photos: Array<Photo> = [];

  ngOnInit(): void {
    this.getAlbumsComponentData()
  }

  getAlbumsComponentData(): void {
    const id = this.route.snapshot.paramMap.get('id')

    this.dataService.getAlbumsById(id).subscribe(data => {
      this.albums = data
      this.dataService.getPhotos().subscribe(data => {
        this.photos = data;
        this.assignRandomPhoto()
      });
    });
  }

  assignRandomPhoto(): void {    
    for (let i = 0; i < this.albums.length; i++) {
      let album = this.albums[i],
          albumPhotos: Array<string> = []

      this.photos.forEach((photo: Photo) => {
        if (photo.albumId === album.id) {
          albumPhotos.push(photo.thumbnailUrl)
        }
      })
      album.thumbnailUrl = albumPhotos[Math.floor(Math.random() * albumPhotos.length)];
    }
  }

  goBack(): void {
    this.location.back();
  }
}
