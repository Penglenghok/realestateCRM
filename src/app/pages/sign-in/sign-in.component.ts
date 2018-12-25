import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  form:FormGroup;
  email:AbstractControl;
  password:AbstractControl;
  error=null;
  constructor(private fb:FormBuilder,
    private router:Router,
    private auth:AuthService) {
   }

  ngOnInit() {
    this.form=this.fb.group({
      email:[null,Validators.required],
      password:[null,Validators.required]
    })
    this.email=this.form.controls['email'];
    this.password=this.form.controls['password'];
  }
  _onSignIn(f:any){
    if(this.form.valid){
      this.form.disable();
      const {email,password}=f;
      this.auth.login(email,password).then(()=>{
        this.router.navigate(['/app']);
      }).catch(error=>{
        this.error="*Invalid Username or Password";
        this.form.enable();
        this.form.reset();
      })
    }
  }


}
