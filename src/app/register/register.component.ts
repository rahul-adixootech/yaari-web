import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../shared/services/register.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup = new FormGroup({});
  public isVisible: boolean = true;
  public pass_type: string = 'password';
  public pass_field: string = 'password';
  public showPassword: boolean = true;

  constructor(
    private builder: FormBuilder,
    private registerService: RegisterService,
    private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.buildRegistrationForm();
  }

  buildRegistrationForm() {
    this.registerForm = this.builder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")]],
      confirm_password: ['', [Validators.required, Validators.minLength(8)]],
      mobile: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(10),Validators.pattern("^[0-9]*$")]]
    })
  }

  showPass(type) {
    if (type == 'show') {
      this.showPassword = !this.showPassword;
      this.pass_field = 'text';
    } else if (type == 'hide') {
      this.showPassword = !this.showPassword;
      this.pass_field = 'password';
    }
  }

  showConfirmPass(type) {
    if (type == 'show') {
      this.isVisible = !this.isVisible;
      this.pass_type = 'text';
    } else if (type == "hide") {
      this.isVisible = !this.isVisible;
      this.pass_type = 'password';
    }
  }

  validateFormField(type) {
    if (type == 'name') {
      // console.log(this.registerForm.value.first_name.length)
      if(this.registerForm.value.first_name === '' )
      {
        this.toastr.error("Name field is required")

      }
      else if(!(this.registerForm.value.first_name.match("^[A-Za-z\s]{0,}$")))
      {
       this.toastr.error("Invalid First Name")
      }
      // if (this.registerForm.value.first_name.replace(/\s/g, "") === '') {
      //   this.registerForm.controls.first_name.patchValue(null)
      //   this.toastr.error("input is required")
      // }
      // console.log(this.registerForm.value.first_name.length);
      // if(this.registerForm.value.first_name.length== 0 )
      // {
      // }
    }
      
     else if (type == 'last_name') {
      // if (this.registerForm.value.last_name.replace(/\s/g, "") === '') {
      //   this.registerForm.controls.last_name.patchValue(null);
      // }
      if(this.registerForm.value.last_name === '' )
      {
        this.toastr.error("Last Name field is required")

      }
      else if( !(this.registerForm.value.last_name.match("^[A-Za-z\s]{0,}$")))
      {
       this.toastr.error("Invalid Last name")
      }
      
    } else if (type == 'email') {
      // if (this.registerForm.value.email.replace(/\s/g, "") === '') {
      //   this.registerForm.controls.email.patchValue(null);
      // }
      // let em=false;
      // console.log(em)
      console.log(this.registerForm.value.email)
      if(this.registerForm.value.email === '' )
      {
        this.toastr.error("Email field is required")

      }
      else  if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.registerForm.value.email)))
      {
        this.toastr.error("You have entered an invalid email address!");
        // return (true)
      }
    }
      // else if(!(this.registerForm.value.email.match('/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/')))
      // {
      //   this.toastr.error("email is wrong")
      //   em=true;
      // }
      // console.log(em)
      // if(email=false)
      // {
      //   this.toastr.error("email is wrong")
      // }
    
  
     else if (type == 'password') {

      // console.log(this.registerForm.value.password.length)
      // if (this.registerForm.value.password.replace(/\s/g, "") === '') {
      //   this.registerForm.controls.password.patchValue(null);

      // }
      if(this.registerForm.value.password === '' )
      {
        this.toastr.error("password field is required")

      }
     else if(this.registerForm.value.password.length < 8)
      {
        this.toastr.error(' password must be of 8 characters');
        
       }
      else if (!(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(this.registerForm.value.password))){
        this.toastr.error('one uppercharacter, lower character and one special character')
      }
  
      
    } else if (type == 'confirm') {
      // if (this.registerForm.value.confirm_password.replace(/\s/g, "") === '') {
      //   this.registerForm.controls.confirm_password.patchValue(null);
      // }
      if(this.registerForm.value.confirm_password === '' )
      {
        this.toastr.error("confirm-password field is required");

      }
    } else if (type == 'mobile') {
      if(this.registerForm.value.mobile === '' )
      {
        this.toastr.error("Mobile field is required");

      }
     
       else if(!(this.registerForm.value.mobile.match("^([6-9]{1})([0-9]{9})$") ))
      {
       this.toastr.error("Please enter correct contact number")
      }

  }
}

  
  createUser() {
    const payload = {
      firstName: this.registerForm.value.first_name,
      lastName: this.registerForm.value.last_name,
      email: this.registerForm.value.email,
      password: this.registerForm.value.password,
      mobile: this.registerForm.value.mobile
    }
    if (this.registerForm.value.password != this.registerForm.value.confirm_password) {
      this.toastr.error('Confirm password is incorrect');
    } else {
      this.registerService.createUser(payload).subscribe(response => {
        this.toastr.success('User Registered Successfully');
        this.registerForm.reset();
        this.router.navigateByUrl("/login");
      }, error => {
        if(error['error'].statusCode == 422){
          this.toastr.error('User already exist with this number');
        }else{
          this.toastr.error(error.error.message);
        }
      })
    }
  }
}
