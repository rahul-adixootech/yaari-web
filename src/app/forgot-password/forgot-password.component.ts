import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})

export class ForgotPasswordComponent implements OnInit {
  
  public mobileForm: FormGroup = new FormGroup({});
  public passwordForm: FormGroup = new FormGroup({});
  public otpForm: FormGroup = new FormGroup({});

  public procedeNumber:boolean=true;
  public procedeOpt:boolean=true;
  public isVisible: boolean = true;
  public pass_type: string = 'password';
  public pass_field: string = 'password';
  public showPassword: boolean = true;
  public procedeChange:boolean=false;
  public procedeSet:any={};
  public res:any;
  public password: boolean=false;
  public otp: boolean=false;

  constructor( private LoginService: LoginService,
    private Builder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private LocalService: LocalStorageService,
  ) { }

  ngOnInit(): void {
    this.buildForm();
    this.buildOtpForm();
    this.buildPasswordForm()
  }


  buildForm(){
    this.mobileForm = this.Builder.group({
     mobile: ['',[Validators.required, Validators.maxLength(12), Validators.minLength(10),Validators.pattern("^[7-9][0-9]{9}$")]],
    })
       }
  
       buildOtpForm(){
    this.otpForm = this.Builder.group({
      otp: ['',[Validators.required, Validators.maxLength(4),Validators.minLength(4)]],
    })
  }

  buildPasswordForm(){
    this.passwordForm = this.Builder.group({
      password: ['',[Validators.required, Validators.minLength(8)]],
      confirm_password: ['', [Validators.required, Validators.minLength(8)]],
    })
  }
  
  mobileUser() {
    const payload={
      mobile:this.mobileForm.value.mobile,
    }
    console.log(this.mobileForm.value.mobile);
    if(this.mobileForm.valid)
    {
      console.log('valid field');
      this.LoginService.mobileCheck(payload).subscribe(response=>{
        this.res=response;
        this.procedeOpt= !this.procedeOpt
         this.otp=true
        
        if(this.res['message'])
        {
          console.log('message');
        }


      })
    }
  }
   otpUser(){
    const payload=
    {
      mobile:this.mobileForm.value.mobile,
      otp:this.otpForm.value.otp,
    }
    if(this.otpForm.valid)
    {
      this.LoginService.otpCheck(payload).subscribe((res:any)=>{
        localStorage.setItem('user-detail', atob(res['token'].split('.')[1]));
        let user=JSON.parse(localStorage.getItem('user-detail')!);
        console.log(user);
        this.otpUser=user.id;
        console.log(this.otpUser);
        this.password=true
        if(res['token'])

        {
           this.procedeNumber=false;
           this.procedeOpt=false;
           this.procedeChange=true;
        }
      })
    }
  }

  passwordUser() {
  const payload = {
  password: this.passwordForm.value.password,
  } 

  console.log(this.passwordForm.value.confirm_password)

if (this.passwordForm.value.password != this.passwordForm.value.confirm_password) {
  this.toastr.error('Confirm password is incorrect');

} 
else {

  this.LoginService.passwordCheck(this.otpUser,payload).subscribe(response => {
    console.log(response)
    this.toastr.success('User Registered Successfully');
    this.passwordForm.reset();
    this.router.navigateByUrl("/login");

  }, (error) => {

    this.toastr.error('User already exist with this number');
  })
 }
}
    

validateFormField(type:any) {
    
      if (type == 'password') {

     
      if(this.mobileForm.value.password === '' )
      {
        this.toastr.error("password field is required")

      }
     else if(this.mobileForm.value.password.length < 8)
      {
        this.toastr.error('password must be of 8 characters');
        
       }
      
    } else if (type == 'confirm') {
     
      if(this.mobileForm.value.confirm_password === '' )
      {
        this.toastr.error("confirm-password field is required");

      }
    } 
    else if (type == 'mobile') {
      if(this.mobileForm.value.mobile === '' )
      {
        this.toastr.error("Mobile field is required");

      }
     
       else if(!(this.mobileForm.value.mobile.match("^([7-9]{1})([0-9]{9})$") ))
      {
       this.toastr.error("Please enter correct contact number")
      }

  }

  else if (type === 'otp') {
    if(this.otpForm.value.otp === '' )
    {
      this.toastr.error("otp field is required");

    }
   
     else if(!(this.otpForm.value.otp.match("^([7-9]{1})([0-9]{9})$") ))
    {
     this.toastr.error("Please enter correct contact otp")
    }

}
}
public submit(): void {
  this.router.navigate(['/login'])
}
}
