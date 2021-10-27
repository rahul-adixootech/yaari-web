import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { RegisterService } from '../services/register.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  public signupForm: FormGroup = new FormGroup({});
  public isVisible: boolean = true;
  public pass_type: string = 'password';
  public pass_field: string = 'password';
  public showPassword: boolean = true;

  constructor( private RegisterService: RegisterService,
    private Builder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
     ) { }

  ngOnInit(): void {
    this.buildSignupForm();
  }


  buildSignupForm(){
    this.signupForm = this.Builder.group({
     first_name: new FormControl('', Validators.required),
     last_name : new FormControl('', Validators.required),
     email: new FormControl ('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
     password:new FormControl ('', [Validators.required, Validators.minLength(8)]),
     confirm_password:new FormControl ('', [Validators.required, Validators.minLength(8)]),
     mobile:new FormControl ('', [Validators.required, Validators.maxLength(12), Validators.minLength(10),Validators.pattern("^[7-9][0-9]{9}$")]),

    })
    
  }
    createUser() {
    const payload = {
      firstName:this.signupForm.value.first_name,
      lastName:this.signupForm.value.last_name,
      email: this.signupForm.value.email,
      password: this.signupForm.value.password,
      // confirm_password: this.signupForm.value.confirm_password,
      mobile: this.signupForm.value.mobile,
    }
    console.log("payload working");
    console.log(payload);
    
     

      this.RegisterService.registerUser(payload).subscribe(response => {
        console.log("the res");
        console.log(response);

        this.toastr.success('User Registered Successfully');
        this.router.navigate(['/signin']);
       // this.signupForm.reset();
        

      }, error => {

        if(error['error'].statusCode == 422){
          this.toastr.error('User already exist with this number');
        }else{
          this.toastr.error(error.error.message);
        }
      })
    }
  
    validateFormField(type:any) {
    if (type == 'name') {
     
      if(this.signupForm.value.first_name === '' )
      {
        this.toastr.error("Name field is required")

      }
      else if(!(this.signupForm.value.first_name.match("^[A-Za-z\s]{0,}$")))
      {
       this.toastr.error("Invalid First Name")
      }
     
    }
      
     else if (type == 'last_name') {
    
      if(this.signupForm.value.last_name === '' )
      {
        this.toastr.error("Last Name field is required")

      }
      else if( !(this.signupForm.value.last_name.match("^[A-Za-z\s]{0,}$")))
      {
       this.toastr.error("Invalid Last name")
      }
      
    } else if (type == 'email') {
     
      console.log(this.signupForm.value.email)
      if(this.signupForm.value.email === '' )
      {
        this.toastr.error("Email field is required")

      }
      else  if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.signupForm.value.email)))
      {
        this.toastr.error("You have entered an invalid email address!");
        
      }
    }
      
    else if (type == 'password') {

     
      if(this.signupForm.value.password === '' )
      {
        this.toastr.error("password field is required")

      }
     else if(this.signupForm.value.password.length < 8)
      {
        this.toastr.error('password must be of 8 characters');
        
       }
      
    } else if (type == 'confirm') {
     
      if(this.signupForm.value.confirm_password === '' )
      {
        this.toastr.error("confirm-password field is required");

      }
    } 
    else if (type == 'mobile') {
      if(this.signupForm.value.mobile === '' )
      {
        this.toastr.error("Mobile field is required");

      }
     
       else if(!(this.signupForm.value.mobile.match("^([7-9]{1})([0-9]{9})$") ))
      {
       this.toastr.error("Please enter correct contact number")
      }

  }
}
public submit(): void {
  this.router.navigate(['/login'])
}
}
