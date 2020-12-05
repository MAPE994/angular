import { Album, User } from './../interfaces';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  constructor(
    private dataService: DataService
  ) { }

  users: Array<User> = []
  albums: Array<Album> = []

  ngOnInit(): void {
    this.getUsersComponentData()
  }

  getUsersComponentData(): void {
    this.dataService.getUsers().subscribe(data => {
      this.users = data
      this.dataService.getAlbums().subscribe(data => {
        this.albums = data
        this.assignNumberOfAlbums()
      });
    });
  }

  assignNumberOfAlbums(): void {    
    let count: {[userid: string]: number}= {}

    for (let i = 0; i < this.albums.length; i++) {
      let album = this.albums[i]

      if (count[album.userId] === undefined) {
        count[album.userId] = 0
      }
      count[album.userId] += 1;
    }
    this.users.forEach((user: User) => user.nAlbums = count[user.id])
  }
}
