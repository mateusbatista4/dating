import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'frontend';

  url = 'https://localhost:5001';

  users: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.http.get(this.url + '/api/users').subscribe(
      response => {
        this.users = response;
      },
      error => {
        console.log(error)
      }
    )
  }


}
