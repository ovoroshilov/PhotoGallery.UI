import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { GetImgsRequest } from '../models/get-imgs-request.model';
import { ImageModel } from '../../image/models/image.model';
import { ImageService } from '../../image/services/image.service';
import { UploadImageComponent } from "../../image/upload-image/upload-image.component";
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-album-imgs',
  standalone: true,
  templateUrl: './album-imgs.component.html',
  styleUrl: './album-imgs.component.css',
  imports: [UploadImageComponent, RouterModule, CommonModule]
})
export class AlbumImgsComponent implements OnInit {
  request: GetImgsRequest | undefined
  imgs?: ImageModel[]
  page = 1

  constructor(private activatedRoute: ActivatedRoute, private imgService: ImageService, private toastr: ToastrService) { }
  ngOnInit(): void {
    this.loadImages()
  }
  loadImages() {
    this.request = {
      page: this.page,
      pageSize: 5,
      albumId: this.activatedRoute.snapshot.params['id']
    };
    this.imgService.getImagesByAlbumId(this.request).subscribe({
    next:(res) => {
      this.imgs = res
    },
    });
  }

  nextPage() {
    this.page++;
    this.loadImages();
  }
}
