import { UserModel } from './../../models/user/user';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Storage } from '@ionic/storage';

@Injectable()
export class UserProvider {
  private PATH = 'users/';

  constructor(
    private storage: Storage,
    private firebase: AngularFireDatabase) {
  }
  
  public async get(username) {
  }

  public async save(user: UserModel){
  }

} 
