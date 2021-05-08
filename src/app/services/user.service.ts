import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

import { User } from '../models/user';

@Injectable()
export class UserService {

  userList: AngularFireList<any>;
  selectedUser: User = new User();

  constructor(private firebase: AngularFireDatabase) { }

  getUsers()
  {
    return this.userList = this.firebase.list('users');
  }

  insertUser(user: User)
  {
    this.userList.push({
      nombre: user.nombre,
      apellidos: user.apellidos,
      edad: user.edad,
      dni: user.dni,
      cumpleanos: user.cumpleanos,
      colorFavorito: user.colorFavorito,
      sexo: user.sexo
    });
  }

  updateUser(user: User)
  {
    this.userList.update(user.$key, {
      nombre: user.nombre,
      apellidos: user.apellidos,
      edad: user.edad,
      dni: user.dni,
      cumpleanos: user.cumpleanos,
      colorFavorito: user.colorFavorito,
      sexo: user.sexo
    });
  }

  deleteUser($key: string)
  {
    this.userList.remove($key);
  }
}
