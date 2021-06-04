import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ApiConstant } from "./apiConstant";

@Injectable({
  providedIn: 'root'
})
export class registerService {
    url1=ApiConstant.LoginFormURL;
    url2=ApiConstant.UserDataFormURL;

  constructor(private data:HttpClient) { }

    getUserForm() {
    return this.data.get(this.url1);
    }
    getUserFormById(id) {
      return this.data.get(this.url1+id);
    }

    addUserForm(items) {
      let head = new HttpHeaders().set('Content-Type','application/json');
      let body=JSON.stringify(items);
      console.log(body);
      return this.data.post(this.url1, body, {headers:head}  );
    }

    deleteUserForm(id)
    {
      let head = new HttpHeaders().set('Content-Type','application/json');
      return this.data.delete(this.url1+id, {headers:head} );
    }

// for user data
       getUserDataForm() {
      return this.data.get(this.url2);
      }
      getUserDataById(id) {
        return this.data.get(this.url2+id);
      }

      addUserDataForm(items) {
        let head = new HttpHeaders().set('Content-Type','application/json');
        let body=JSON.stringify(items);
        console.log(body);
        return this.data.post(this.url2, body, {headers:head}  );
      }

      deleteUserDataForm(id)
      {
        let head = new HttpHeaders().set('Content-Type','application/json');
        return this.data.delete(this.url2+id, {headers:head} );
      }


}
