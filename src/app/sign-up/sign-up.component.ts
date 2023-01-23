import { Component } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { User } from '../models/user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  model : User= new User('','','','');

onSubmit():void{
   
  console.log(this.model)
}
}
