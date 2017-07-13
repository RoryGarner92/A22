import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { UserApi } from '../../fw/user/user-api';

@Injectable()
export class UserService implements UserApi{

    isAuthenticated = true;
    constructor(){}

    signIn(userName: string, password: string, rememberMe: boolean): Observable<any>{
        console.log('UserService.signIn: '+ userName +' ' + password + ' ' +rememberMe);
        this.isAuthenticated = true;
        return Observable.of({}).delay(2000);

    }
}