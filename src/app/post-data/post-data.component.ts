import { Component, OnInit } from '@angular/core';
import { AuthGuard } from '../auth.guard';
import { registerService } from '../services/service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from '../notofication.service';
@Component({
  selector: 'app-post-data',
  templateUrl: './post-data.component.html',
  styleUrls: ['./post-data.component.scss']
})
export class PostDataComponent implements OnInit {
  user;
  arr;
  id;
  name;
  email;
  imgUrl;
  signupForm: FormGroup;
  mydate = Date.now()
postMessage = [];
  constructor(private userDataService : registerService,
    private authService: AuthGuard,
    private toastr : NotificationService,

    ) { }


  ngOnInit(): void {
  this.id= sessionStorage.getItem('token');
     this.userDataService.getUserFormById(this.id).subscribe((data)=>
     {
       this.user = data;
       for(let i=0; i<=this.user.length;i++ )
         {
            this.name = this.user[0].name;
            this.email = this.user[0].email;
         }
      });

      this.userDataService.getUserDataById(this.id).subscribe((data)=>
      {
        this.arr = data;
       });

    this.signupForm = new FormGroup({
      id: new FormControl(null),
      postMessage: new FormControl(null, [
        Validators.required
      ]),
  })
  this.signupForm.get('id').setValue(this.id);
}


  onSignup() {
    this.userDataService.addUserDataForm(this.signupForm.value).subscribe((x:any)=>{
      this.toastr.showSuccess('Post successful', 'Success!');
      location.reload();
    }),
    (error) => {
      this.toastr.showError('Something went wrong', 'Error!');
    };

  }

}
