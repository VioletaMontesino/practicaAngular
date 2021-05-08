import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { UserService } from '../../../services/user.service';

import { User, Sexo } from '../../../models/user';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public sexo:Sexo[];

  constructor(
    private userService: UserService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.userService.getUsers();
  
    this.sexo = [
      { id: 1, name: 'HOMBRE' },
      { id: 2, name: 'MUJER' },
      { id: 3, name: 'OTRO' },
      { id: 4, name: 'NO ESPECIFICADO' }
    ]

    this.resetForm();
  }

  onSubmit(userForm: NgForm)
  {
    if(userForm.value.$key == null)
      this.userService.insertUser(userForm.value);
    else
    this.userService.updateUser(userForm.value);
    
    this.resetForm(userForm);
    this.toastr.success('Sucessful Operation', 'Usuario creado');
  }

  resetForm(userForm?: NgForm)
  {
    if(userForm != null)
    userForm.reset();
      this.userService.selectedUser = new User();
  }

}
