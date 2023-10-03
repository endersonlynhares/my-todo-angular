import {User} from "./User";

export interface TokenResponse {
  accessToken: string,
  expiresIn: string,
  user: User
}
