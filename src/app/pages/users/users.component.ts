import { Component, OnInit } from '@angular/core';
import {HttpClientService} from "../../service/http-client.service";
import {ApiUrl} from "../../models/ApiUrl";
import {Users} from "../../models/Users";
import {sprintf} from "sprintf-js";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  usersApiRequest : Users | undefined;

  constructor(private _httpService : HttpClientService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(url: string = ApiUrl.urlUsersPaginate) : void {
    this._httpService.getRequest<Users>(url).subscribe((jsonResponse) => {
      this.usersApiRequest = jsonResponse;
    })
  }

  getIndexUsers(page: number) {
    this.getUsers(sprintf(ApiUrl.urlUsersPaginate, page));
  }


}
