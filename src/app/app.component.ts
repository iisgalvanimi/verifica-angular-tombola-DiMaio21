import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Empty-Project';


  numero : string = "inserisci un numero"
  numeri:string[] = []

  onClick() {
    this.numeri.push(this.numero);
  }
    
      constructor() { }
    
      ngOnInit(): void {
      }



}


