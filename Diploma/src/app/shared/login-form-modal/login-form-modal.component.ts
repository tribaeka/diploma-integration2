import {AfterContentInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {TokenStorageService} from '../../services/token-storage.service';

@Component({
  selector: 'app-login-form-modal',
  templateUrl: './login-form-modal.component.html',
  styleUrls: ['./login-form-modal.component.scss']
})
export class LoginFormModalComponent implements OnInit {
  loginForm: FormGroup;
  isLoading: boolean;
  errorFrameIsVisible: boolean;
  @ViewChild('closeBtn', { static: false }) closeBtn: ElementRef;
  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private tokenStorage: TokenStorageService) {
    this.loginForm = this.formBuilder.group({
      username: [''],
      password: ['']
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    this.isLoading = true;
    this.authService.login(this.loginForm.value).subscribe(
      data => {
        this.tokenStorage.saveToken(data.token);
        this.tokenStorage.saveUser(data);
        this.isLoading = false;
        this.errorFrameIsVisible = false;
        this.closeBtn.nativeElement.click();
        this.loginForm.reset();
      },
      reject => {
        this.errorFrameIsVisible = true;
        this.isLoading = false;
        this.loginForm.controls.password.reset();
      }
    );
  }
}
