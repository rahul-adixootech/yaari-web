import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { CookieService } from 'ngx-cookie-service';
import { ToastrService } from 'ngx-toastr';
import { PreviousRouteService } from '../services/previous-route.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({

  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']

})
export class SigninComponent implements OnInit {
  
  public signinForm: FormGroup = new FormGroup({});
  public previousUrl: any = '';
  public loginResponse: any='';

  constructor(private LoginService: LoginService, 
              private Builder: FormBuilder,
              private CookieService: CookieService,
              private toastr: ToastrService,
              private previousRouteService: PreviousRouteService,
              private router: Router) { }

  ngOnInit(): void {

    this.previousUrl = this.previousRouteService.getPreviousUrl();
    console.log('this.previousUrl: ', this.previousUrl);
    this.buildSigninForm();
  }

   buildSigninForm(){
     this.signinForm = this.Builder.group({
      email: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
      password:new FormControl('',Validators.required )
      
      })
    }
     checkUser(){
     const payload = {
      email: this.signinForm.value.email,
      password: this.signinForm.value.password
    }
     this.LoginService.loginUser(payload).subscribe(Response =>{
       console.log(Response)
       this.loginResponse=Response;
       if(this.loginResponse['token'])
       {
         console.log("hi i am if condition ");
         this.router.navigate(['/home'])
       }
       
     })

    console.log(payload.email);
    console.log(payload.password)
  }

  get sForm() {
    return this.signinForm;
  }

  validateFormField(type:any) {
    if (type == 'email') {
      
      if(this.signinForm.value.email === '' )
      {
        this.toastr.error("Email field is required")

      }
      else  if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.signinForm.value.email)))
      {
        this.toastr.error("You have entered an invalid email address!");
      }
    
      } else if (type == 'password') {
      
      if(this.signinForm.value.password === '' )
      {
        this.toastr.error("password field is required")

      }
    }
  }
}
