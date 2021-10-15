import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AllCollectionsModule } from '../layout/all-collections/all-collections.module';
import { ForgotPasswordService } from '../shared/services/forgot-password.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  public resetForm: FormGroup = new FormGroup({}); 
  public passwordForm: FormGroup = new FormGroup({}); 
  
  constructor(private toastr: ToastrService, private builder: FormBuilder,
  private forget: ForgotPasswordService , ) { }

  ngOnInit(): void {
   this.buildforgetPasswordForm();
  }
  
  buildforgetPasswordForm(){

    this.resetForm = this.builder.group({
      mobile: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(12),Validators.pattern("^[0-9]*$")]],
      otp: ['', [Validators.required, Validators.minLength(4)]],
    })

    
    //   this.passwordForm = this.builder.group({
    //   password: ['', [Validators.required, Validators.minLength(8),Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")]],
    //   confirm_password: ['', [Validators.required, Validators.minLength(8)]]
    // })
  }
  validationFormField(type)
  {
    if(type=='otp')
    {
      if(this.resetForm.value.otp=='' )
      {
        this.toastr.error("otp field is required")
      }else{
        if(!(/^[0-9]{4}/.test(this.resetForm.value.otp)))
        {
          this.toastr.error("You have entered an invalid opt!");
        }
      }
    }

    if(type=='number')
    {
      if(this.resetForm.value.mobile=='' )
      {
        this.toastr.error("number field is required")
      }else{
        if(!(/^[6-9]\d{9}$/.test(this.resetForm.value.mobile)))
        {
          this.toastr.error("You have entered an invalid number!");
        }
      }
    }


  }
  checkmob(num:number) {
    const payload = {
      mobile: this.resetForm.value.mobile,
    }
    console.log("the "+num);
     
    if (this.resetForm.valid) {
      console.log("valid");
      
      this.forget.generateOtp(payload).subscribe(res => {
        {
          console.log(res)
        }
      })
    }
  }

    checkotp() {
      const payload = {
        mobile: this.resetForm.value.mobile,
        otp: this.resetForm.value.otp,
      }
      console.log(payload);
    if (this.resetForm.valid) {
      console.log("valid");

      this.forget.verifyOtp(payload).subscribe(res => {
        if (res['token']) {
          console.log("sms");
        }
      })
    }
  }
    get pForm() {
      return this.resetForm;
    }

  }
