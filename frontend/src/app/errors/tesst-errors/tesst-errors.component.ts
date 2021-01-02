import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tesst-errors',
  templateUrl: './tesst-errors.component.html',
  styleUrls: ['./tesst-errors.component.css']
})
export class TesstErrorsComponent implements OnInit {
  baseUrl = 'https://localhost:5001/api/'
  constructor() { }

  ngOnInit(): void {
  }

}
