import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


  public registerForm !: FormGroup;
  

  
  constructor(private formBuilder : FormBuilder, private http:HttpClient, private router: Router){}
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      Username: [''],
      email: [''],
      password: [''],
      mobile: ['']
        })
   
  }
  register(){
    this.http.post<any>("http://localhost:3000/RegisteredUsers", this.registerForm.value)
    .subscribe((res) =>{
      alert("Register successfull");
      this.registerForm.reset();
      this.router.navigate(['login']);
    },(err: { message: any; }) => {
      alert(err.message );
      this.router.navigate(['/login']);
  })

  }

}
