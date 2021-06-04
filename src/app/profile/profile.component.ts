import { Component, OnInit } from '@angular/core';
import { AuthGuard } from '../auth.guard';
import { registerService } from '../services/service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user;
  id;
  imgUrl;
  constructor(private userDataService : registerService,
    private authService: AuthGuard) { }

  ngOnInit(): void {
   this.id= sessionStorage.getItem('token');
  // console.log(sessionStorage.getItem('token'))
    this.userDataService.getUserFormById(this.id).subscribe((data)=>
    {
      console.log(data)
      this.user = data;

    })
  }
  onLogout(){
    this.authService.logout();
  }
}
