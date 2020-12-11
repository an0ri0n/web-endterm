import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  constructor(private http: HttpClient) { }
  users: any;
  ngOnInit(): void {
    const response = this.http.get('https://jsonplaceholder.typicode.com/users');
    response.subscribe((data) => this.users = data );
    response.subscribe((data) => console.log(data));
  }

}
