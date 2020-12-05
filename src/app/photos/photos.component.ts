import { Photo } from './../interfaces';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  photos: Array<Photo> = []

  ngOnInit(): void {
    this.getPhotos()
  }

  getPhotos(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.dataService.getPhotosById(id).subscribe(data => {
      this.photos = data
    })
  }

  goBack(): void {
    this.location.back();
  }
}
