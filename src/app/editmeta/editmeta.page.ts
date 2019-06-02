import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-editmeta',
  templateUrl: './editmeta.page.html',
  styleUrls: ['./editmeta.page.scss'],
})
export class EditmetaPage implements OnInit {


  sonho: any;
  descricao: any;
  bens: any;
  url: any;
  id: any;

  constructor(private router: Router) {

  }

  ngOnInit() {
  }

  onVoltar(id: any) {
    this.router.navigate(['tabs/tab2']);
  }

    public createDream() {
    fetch('http://localhost:8080/my-dreams/v1/users/createDream/5cf3dea0c1796b3184fd2b95', {
      method: 'post',
      headers:{'content-type': 'application/json'},
      body: JSON.stringify({
        desc: "Sonho: " + this.sonho + ", descricao" + ", data que desejo conquistar o objetivo: " + this.bens,
        expiration_date: this.bens,
        done_date: this.bens,
        hide_flag: false,
        photo_id: this.url,
        done_flag: this.bens
      })
    }).then(function (response) {
      return response.json();

    }).then(function (data) {
      console.log(data);
    });
  }
  onConfirmar(){
    let teste = this.createDream.length ;
    if (teste = 0){
     alert("você deve preencher todos os campos")
    }else{
    this.createDream();
    }
   
  }


}
