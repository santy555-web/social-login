import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from '../notofication.service'
import { registerService } from "../services/service";
import { SocialAuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider, SocialUser } from "angularx-social-login";
import { Router } from '@angular/router';

@Component({
  selector: 'app-loging',
  templateUrl: './loging.component.html',
  styleUrls: ['./loging.component.css']
})
export class LogingComponent implements OnInit {
  signupForm: FormGroup;
  public user:any = SocialUser;
  public userPostData = {
   id :'',
  email: '',
  name: '',
  photoUrl:'',
  authToken:'',
  idToken: '',
  provider: ''
  };
  public userData = {
    id :'',
   email: '',
   name: '',
   photoUrl:'',
   authToken:'',
   idToken: '',
   provider: ''
   };

  constructor(
    private toastr : NotificationService,
    private userDataService : registerService,
    private socialAuth : SocialAuthService,
    private _router:Router
    ) { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      user_email: new FormControl(null, [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl(null, [
        Validators.required
      ]),
  })
  }

  onSignup() {
    console.log(this.signupForm);
  }


  facebookLogin(){
    this.socialAuth.signIn(FacebookLoginProvider.PROVIDER_ID).then((userData)=>{
      this.apiConnectionGoggle(userData);
      console.log(userData)
    })
  }
  googleLogin(){
    this.socialAuth.signIn(GoogleLoginProvider.PROVIDER_ID).then((userData)=>{
      this.apiConnectionFacebook(userData);
    })

  }
  apiConnectionGoggle(data){
    this.userPostData.id = data.id;
    this.userPostData.email = data.email;
    this.userPostData.name = data.name;
    this.userPostData.photoUrl = data.photoUrl;
    this.userPostData.authToken = data.authToken;
    this.userPostData.idToken = data.idToken;
    this.userPostData.provider = data.provider;
    this.userDataService.addUserForm(this.userPostData).subscribe((x:any)=>{
      this.toastr.showSuccess('login successful through Google', 'Success!');
      if(data.authToken) {
        sessionStorage.setItem('token', data.authToken);
        this._router.navigate(['/profile']);
      }

    }),
     (error) => {
      this.toastr.showError('Something went wrong', 'Error!');
    };
  }
  apiConnectionFacebook(data){
    this.userPostData.id = data.id;
    this.userPostData.email = data.email;
    this.userPostData.name = data.name;
    this.userPostData.photoUrl = data.photoUrl;
    this.userPostData.authToken = data.authToken;
    this.userPostData.idToken = null;
    this.userPostData.provider = data.provider;
    this.userDataService.addUserForm(this.userPostData).subscribe((x:any)=>{
      this.toastr.showSuccess('login successful through Facebook', 'Success!');
      if(data.authToken) {
        sessionStorage.setItem('token', data.authToken);
        this._router.navigate(['/profile']);
      }
    }),
     (error) => {
      this.toastr.showError('Something went wrong', 'Error!');
    };
  }
}
