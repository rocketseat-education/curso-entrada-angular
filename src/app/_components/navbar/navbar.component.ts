import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  ngOnInit(): void {
      this.mensagem();
  }
  mensagem(){
    console.log('Meu componente navbar inicializou(dentro de uma função)');
  }

 }
