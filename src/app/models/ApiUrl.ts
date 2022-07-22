export class ApiUrl {
  static rawUrl: string = 'https://steam-ish.test-02.drosalys.net/api';
  static usersUrl: string = ApiUrl.rawUrl + '/account';
  static gamesUrl: string = ApiUrl.rawUrl + '/game';

  static urlUsersPaginate: string = ApiUrl.usersUrl + '?page=%s&limit=20';

  static urlGamesPaginate: string = ApiUrl.gamesUrl + '?page=%s&limit=6';

}
