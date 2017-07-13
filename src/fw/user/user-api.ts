import { Observable } from 'rxjs/Observable';

export abstract class UserApi {
    signIn : (userName: string, password: string, rememberMe: boolean) => Observable<any>;
//signout
//change Pw

}