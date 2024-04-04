import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ImageService } from '../services/image.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-upload-image',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './upload-image.component.html',
  styleUrl: './upload-image.component.css'
})
export class UploadImageComponent {

  private file?: File
  fileName: string = ''
  albumId = ''
  @ViewChild('form', { static: false }) imageUploadForm?: NgForm

  constructor(private imageService: ImageService, private activatedRoute: ActivatedRoute, private toastr: ToastrService) {
    this.albumId = activatedRoute.snapshot.params['id']
  }

  onFileUploadChange(event: Event): void {
    const element = event.currentTarget as HTMLInputElement
    this.file = element.files?.[0]
  }

  uploadImage(): void {
    if (this.file && this.fileName != '') {
      this.imageService.uploadImage(this.file, this.fileName, this.albumId).subscribe({
        next: () => {
          window.location.reload()
        }
      })
    }
    else {
      this.toastr.error('Please fill all inputs', 'Fill inputs', {
        positionClass: 'toast-bottom-right'
      })
    }
  }
}
