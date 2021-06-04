
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { registerService } from '../services/service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation:ViewEncapsulation.ShadowDom
})
export class HomeComponent implements OnInit {

  user;
  constructor(private authService: AuthGuard,
    private userDataService : registerService,
    private _router: Router
    ) { }

  ngOnInit(): void {
    this.userDataService.getUserForm().subscribe((data)=>
    {
      this.user=data;
    });
  }
  onLogout(){
    this.authService.logout();
  }
  // onbuttonClick(item)
  // {
  //   this._router.navigate(['/trail', item.id]);
  // }
}
