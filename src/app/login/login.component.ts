import { Component } from '@angular/core';
import { User } from '../../../user.interface';
import { NgForm } from '@angular/forms';
import { RateService } from '../rate.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  public user!: User; 


ngOnInit() {
  this.user = {
  email: '',
  password:''
  }
}
constructor(private service: RateService){}

async onSubmit(form: NgForm) {
  if (form.valid) {
    // Handle the login logic here
    const formData:User=this.user;
    console.log("dormdata",formData);
    
    try{
      const response= await this.service.loginApi(formData);
      console.log('response',response.data);
      
    }
    catch(error){
      console.error('error',error);
    }
    console.log(this.user);
    
  } else {
    console.log('Form is invalid');
  }
}

}
