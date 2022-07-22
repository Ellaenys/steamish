export interface User {
  name: string;
  email: string;
  nickname: string;
  librariesCount: number;
  createdAt: string;
  country: {
    urlFlag: string;
  }
}
