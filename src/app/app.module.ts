import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SigninModule } from './signin/signin.module';
import { SignupModule } from './signup/signup.module';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { HomeModule } from './home/home.module';
import { CookieService } from 'ngx-cookie-service';
import { ToastrModule } from 'ngx-toastr';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { ForgotPasswordModule } from './forgot-password/forgot-password.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule, 
    ReactiveFormsModule,
    SigninModule,
    SignupModule,
    HeaderModule,
    FooterModule,
    HomeModule,
    MatMenuModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    ForgotPasswordModule,
   
    ToastrModule.forRoot(), 
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
