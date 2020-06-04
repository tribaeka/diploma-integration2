import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {TokenStorageService} from '../../services/token-storage.service';
import {HttpClient} from '@angular/common/http';
import {User} from '../../model/user';
import {ResourceService} from '../../services/resource.service';

@Component({
  selector: 'app-upload-image-modal',
  templateUrl: './upload-image-modal.component.html',
  styleUrls: ['./upload-image-modal.component.scss']
})
export class UploadImageModalComponent implements OnInit {
  uploadImageForm: FormGroup;
  file: any;
  @ViewChild('fileInput', { static: false }) fileInput: ElementRef;
  @ViewChild('closeBtn', { static: false }) closeBtn: ElementRef;
  constructor(private formBuilder: FormBuilder,
              private tokenStorage: TokenStorageService,
              private resource: ResourceService
  ) {
    this.uploadImageForm = this.formBuilder.group({
      file: ['']
    });
  }

  ngOnInit() {
  }

  handleFileInputChanges() {
    const selectedFile = this.fileInput.nativeElement.files[0];
    this.file = selectedFile;
    this.uploadImageForm.patchValue({
      file: selectedFile.name
    });
  }

  onSubmit() {
    const fd = new FormData();
    fd.append('file', this.file, this.uploadImageForm.get('file').value);
    fd.append('user', this.tokenStorage.getUser().userId.toString());

    this.resource.uploadImageToUser(fd)
      .subscribe(updatedUser => {
        this.closeBtn.nativeElement.click();
        this.uploadImageForm.reset();
        this.tokenStorage.saveUser(updatedUser);
      });
  }
}
