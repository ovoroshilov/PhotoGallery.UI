import { Component } from '@angular/core';
import { AlbumService } from '../services/album.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-album',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-album.component.html',
  styleUrl: './create-album.component.css'
})
export class CreateAlbumComponent {
  albumName = ''

  constructor(private service: AlbumService) { }
  createAlbum() {
    this.service.createAlbum(this.albumName).subscribe({
      next: (res) => {
        window.location.reload()
      },
      error: (err) => {
        console.log(err)
      }
    })
  }
}
