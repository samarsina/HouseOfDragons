import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EncryptionService } from '../services/encryption.service';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: any = FormGroup;

  constructor(private fb: FormBuilder,private encryptSvc:EncryptionService,
    private toast: NgToastService,private router:Router) {
    this.loginForm = this.fb.group({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }

  ngOnInit() {

  }

  save(): void {
    const userData = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    }
    console.log("userdata",userData)
    debugger
    if(userData  && userData.email !== "" && userData.password !== ""){
    // without encryptedData 
    localStorage.setItem("userData", JSON.stringify(userData))
    // with encryptedData 
    // const encryptedData = this.encryptSvc.encrypt(userData);
    // localStorage.setItem('encryptedData', encryptedData);
    
    this.router.navigate(['/dashboard'])
   
    }else{     
      this.toast.error({detail:"",summary:'Please enter Username and password',sticky:true});
   
    }

  }


  getData(){
    const encryptedData = localStorage.getItem('encryptedData');
    if (encryptedData) {
      const decryptedData = this.encryptSvc.decrypt(encryptedData);
      console.log('Decrypted Data:', decryptedData);
    } else {
      console.log('No data found in local storage.');
    }
  }
}
