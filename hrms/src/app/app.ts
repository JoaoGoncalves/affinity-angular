import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from "./shared/components/footer";
import { of } from 'rxjs';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  constructor(){

    console.log("---------- of() ---------")

    const xpto$ = of(1,2,'joao', 'maria', true);

    xpto$.subscribe({
      next: val => console.log(val),
      error: err => console.log(err),
      complete: ()=> console.log("Fim da Stream de Dados...."),
    });
    /* of(1,2,'joao', 'maria', true).subscribe(
      val => console.log(val)
    ); */





  }
  
}

