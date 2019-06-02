import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HttpClient ,HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  users: any;
  listTimeLine: any;
  constructor(
    private router: Router, public httpClient: HttpClient
  ) {}

  ngOnInit() {
    this.loadDados();
  }

  loadDados(){
    const headers = new HttpHeaders();
    headers.set('Access-Control-Allow-Origin','*');
    this.users = this.httpClient.get('http://localhost:8080/my-dreams/v1/users/getDreams', {headers: headers});
    this.users
    .subscribe(data => {
      this.listTimeLine = data;
      console.log('my data: ', data);
    })
  }

  onDetail(id: any) {
    this.router.navigate(['details']);
  }
  myFunc() {
    console.log("function called");
  }




}

