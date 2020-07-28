import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router} from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    
  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit(): void {
  }
  
  registerUser(event){
    event.preventDefault()
    const target=event.target
    const errors=[]
    const username=target.querySelector('#username').value
    const password=target.querySelector('#password').value
    const cpassword=target.querySelector('#cpassword').value
    
    if(password!=cpassword){
        errors.push("password not match")
    }


    if(errors.length===0){
      this.auth.registerUser(username,password).subscribe(data =>{
        console.log(data)
        if(data.success){
          this.router.navigate(['dashboard'])
        }
      })
    }
    console.log(username,password);
  }


}
