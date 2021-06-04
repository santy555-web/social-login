import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule,FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogingComponent } from './loging/loging.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
//import {AuthServiceConfig,GoogleLoginProvider,FacebookLoginProvider, LinkedinLoginProvider } from "ng4-social-login";
//import { AuthServiceConfig,GoogleLoginProvider,FacebookLoginProvider, LinkedinLoginProvider, SocialLoginModule } from "ng-social-login-module";
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider
} from 'angularx-social-login';
import { PostDataComponent } from './post-data/post-data.component'

// const config = new AuthServiceConfig([
//   {
//     id:GoogleLoginProvider.PROVIDER_ID,
//     provider: new GoogleLoginProvider('145783274776-tdgoq3ndj9eto0m9210kjujbu0u1hcrd.apps.googleusercontent.com')

//   },
//   {
//     id:FacebookLoginProvider.PROVIDER_ID,
//     provider: new FacebookLoginProvider('515588639800986')
//   },
//   {
//     id:LinkedinLoginProvider.PROVIDER_ID,
//     provider: new LinkedinLoginProvider('78lpyhnfujtgl3')
//   }
// ], false)

// export function provideConfig(){
//   return config;
// }
@NgModule({
  declarations: [
    AppComponent,
    LogingComponent,
    HomeComponent,
    ProfileComponent,
    SidebarComponent,
    PostDataComponent,
  ],
  imports: [
    SocialLoginModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),

  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '145783274776-tdgoq3ndj9eto0m9210kjujbu0u1hcrd.apps.googleusercontent.com'
            )
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('515588639800986')
          }

        ]
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
