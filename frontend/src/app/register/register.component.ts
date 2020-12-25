import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Output() cancelRegister = new EventEmitter();
  
  model: any = {}
  

  constructor(private accountService : AccountService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  

  register(){
    console.log(this.model);
    this.accountService.register(this.model).subscribe(
      response => {
        console.log('foi');
        this.cancel();
    }, error => {
      this.toastr.error("Impossible to register","Error");
    });
  }

  cancel() {
    this.cancelRegister.emit(false);
  }



}
