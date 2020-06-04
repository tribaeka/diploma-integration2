import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-registration-form-modal',
  templateUrl: './registration-form-modal.component.html',
  styleUrls: ['./registration-form-modal.component.scss']
})
export class RegistrationFormModalComponent implements OnInit {
  registrationForm: FormGroup;
  @ViewChild('closeBtn', { static: false }) closeBtn: ElementRef;

  constructor(private authService: AuthService, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.registrationForm = this.fb.group({
      username: ['', [ Validators.required, Validators.minLength(4) ] ],
      email: ['', [ Validators.email, Validators.minLength(4) ] ],
      phone: ['', [ Validators.minLength(6) ] ],
      password: ['', [ Validators.maxLength(20), Validators.minLength(6) ] ]
    });
  }

  onSubmit() {
    this.authService.registration(this.registrationForm.value)
      .subscribe(response => this.closeBtn.nativeElement.click());
  }
}
