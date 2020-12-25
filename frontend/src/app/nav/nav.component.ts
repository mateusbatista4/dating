import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};

  token = ''


  constructor(public accountService: AccountService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {

  }

  login() {
    this.accountService.login(this.model).subscribe(
      response => {
        this.toastr.success('Bem vindo');
        this.router.navigate(['members/']);
      },
      error => {
        this.toastr.error(error.error,"Erro de login");
      }
    )
  }

  logout() {
    this.accountService.logout();
    this.router.navigate(['']);

  }


}
