import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
 
  constructor(
    private router : Router
  ) { }

  onVoltar(){
    this.router.navigate(['']);
  }
  Ontab1(){
    this.router.navigate(['tab1']);
  }
  ngOnInit() {
  }

}
