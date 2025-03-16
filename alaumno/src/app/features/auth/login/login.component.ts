import { Component } from '@angular/core';
import { AutService } from '../../../core/service/aut.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm : FormGroup

  constructor(private autService : AutService, private fb : FormBuilder){

    this.loginForm = this.fb.group({
      emai:['',[Validators.required, Validators.email]],
      password:['',[Validators.required]],
      role:['ADMIN',[Validators.required]]
    })
  }

  onSubmit():void{
    if(this.loginForm.invalid){
      alert('formulario invalido')
    }else{
      this.autService.login()
    }
  }

}
