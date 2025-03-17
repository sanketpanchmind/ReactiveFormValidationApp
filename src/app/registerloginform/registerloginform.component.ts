import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registerloginform',
  templateUrl: './registerloginform.component.html',
  styleUrls: ['./registerloginform.component.scss']
})
export class RegisterloginformComponent {

  registerform: FormGroup | any;
  loginform: FormGroup | any;

  displayloginflag: boolean = false;
  registerdataArray: any = [];

  constructor(private fb: FormBuilder) { 

  }

  ngOnInit(){
    this.createregisterform();
    this.getloginform();
    this.passwordMatchValidator();

    const localdata = localStorage.getItem('registerformdata');

    if(localdata){
      this.registerdataArray = JSON.parse(localdata);
    }
  }

  get f(){
    return this.registerform.controls;
  }
  get f2(){
    return this.loginform.controls;
  }

  gotoLogin() {
    this.displayloginflag = true;
  }
 
  gotoregister(){
    this.displayloginflag = false;
  }

  createregisterform(){
    this.registerform = this.fb.group({
      username: new FormControl('',[Validators.required, Validators.pattern('^[a-zA-Z ]+$')]),
      email: new FormControl('', [Validators.required, Validators.email] ),
      password: new FormControl('', [Validators.required] ),
      confirmpassword: new FormControl('', [Validators.required])
    })
  }

  getloginform(){
    this.loginform = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email] ),
      password: new FormControl('', [Validators.required] ),
    })
  }

  passwordMatchValidator(){
    const password = this.registerform.get('password');
    const confirmPassword = this.registerform.get('confirmpassword');

    if(password.value !== confirmPassword.value){
      confirmPassword.setErrors({ passwordmismatch: true }); 
    }
    else {
      confirmPassword.setErrors(null);  
    }
  }

  validateForm(){
    if(this.registerform.invalid){
      this.registerform.markAllAsTouched();
      return;
    }
    console.log("Form validated", this.registerform.value);

    this.registerdataArray.push(this.registerform.value);

    localStorage.setItem('registerformdata', JSON.stringify(this.registerdataArray));
    this.registerform.reset();
  }

  clear(){
    this.registerform.reset();
  }
  validateloginform(){
    if(this.loginform.invalid){
      this.loginform.markAllAsTouched();
      return;
    }
    console.log("Login form validated", this.loginform.value);

    const localdata = localStorage.getItem('registerformdata'); 

    const logindata =  this.loginform.value;
    
    if(localdata){
      const registerdata = JSON.parse(localdata);
    }
  }
}
