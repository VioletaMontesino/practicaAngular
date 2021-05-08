import { Component, OnInit } from '@angular/core';

import { User } from '../../../models/user';

import { UserService } from '../../../services/user.service';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  userList: User[];

  constructor(
    private userService: UserService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    return this.userService.getUsers()
      .snapshotChanges().subscribe(item => {
        this.userList = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x["$key"] = element.key;
          this.userList.push(x as User);
        });
      });
  }

  onEdit(user: User) {
    this.userService.selectedUser = Object.assign({}, user);
  }

  onDelete($key: string) {
    if(confirm('¿Estás seguro que quieres borrar este usuario?')) {
      this.userService.deleteUser($key);
      this.toastr.warning('Borrado correctamente', 'Usuario borrado');
    }
  }

}
