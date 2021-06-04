import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LogingComponent } from "./loging/loging.component";
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './auth.guard';
import { PostDataComponent } from './post-data/post-data.component';
const routes: Routes = [
    { path:'',
      component:LogingComponent
    },
    { path:'home',
      canActivate:[AuthGuard],
      component:HomeComponent
    },
    { path:'profile',
    canActivate:[AuthGuard],
    component:ProfileComponent
    },
    { path:'postdata',
    canActivate:[AuthGuard],
    component:PostDataComponent
    },
    {
      path: "**",
      component:LogingComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
