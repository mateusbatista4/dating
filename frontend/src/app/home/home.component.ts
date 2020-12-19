import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private accountService: AccountService ) { }

  users : any ;

  registerMode = false

  ngOnInit(): void {
  }

  
  
  registerToggle(event: boolean ){
      this.registerMode = event;
  }
}
