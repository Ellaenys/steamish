import { Component, OnInit } from '@angular/core';
import {ApiUrl} from "../../models/ApiUrl";
import {HttpClientService} from "../../service/http-client.service";
import {Games} from "../../models/Games";
import {sprintf} from "sprintf-js";

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

  gameApiRequest : Games | undefined;

  constructor(private _httpService : HttpClientService) { }

  ngOnInit(): void {

    this.getGames();
  }

  getGames(url: string = ApiUrl.urlGamesPaginate) : void {
    this._httpService.getRequest<Games>(url).subscribe((jsonResponse) => {
      this.gameApiRequest = jsonResponse;
    })
  }

  getIndexGames(page: number) {
    this.getGames(sprintf(ApiUrl.urlGamesPaginate, page));
  }

}
