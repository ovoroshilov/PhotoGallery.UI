import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AlbumModel } from '../models/album.model';
import { AlbumService } from '../services/album.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CreateAlbumComponent } from '../create-album/create-album.component';
import { GetAlbumPage } from '../models/get-album-request.model';

@Component({
  selector: 'album-list',
  standalone: true,
  templateUrl: './album-list.component.html',
  styleUrl: './album-list.component.css',
  imports: [CommonModule, RouterModule, CreateAlbumComponent]
})
export class AlbumListComponent implements OnInit {
  request?: GetAlbumPage
  albums: AlbumModel[] = []
  page = 1
  constructor(private albumService: AlbumService) { }


  ngOnInit(): void {
    this.loadImages()
  }
  loadImages() {
    this.request = {
      page: this.page,
      pageSize: 5,
    };
    this.albumService.getAlbumPage(this.request.page, this.request.pageSize).subscribe({
      next: (res) => {
        this.albums = res
      },
    });
  }

  nextPage() {
    this.page++;
    this.loadImages();
  }
}
