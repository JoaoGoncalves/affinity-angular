import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './shared/components/footer';
import { BehaviorSubject, filter, from, interval, map, Observable, of, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  /* 
  constructor(){

    console.log("---------- of() ---------")

    const xpto$ = of(1,2,'joao', 'maria', true);

  
    of(1,2,'joao', 'maria', true).subscribe(
      val => console.log(val)
    );

    console.log("---------- from(array) ---------")

    let nomes = ['Joao', 'Manuel', 'Maria', 'Ana'];

    let nomes$ = from(nomes);

    nomes$.subscribe({
      next: val => console.log(val),
      error: err => console.log(err),
      complete: ()=> console.log("Fim da Stream de Dados...."),
    });


    console.log("---------- operators ---------")
    
    let cervejas = [
      {nome:'Sagres', pais:'Portugal', preco: 1.90},
      {nome:'Stella', pais:'Belgica', preco: 3.90},
      {nome:'Trappe', pais:'Belgica', preco: 4.90},
      {nome:'Guiness', pais:'Irlanda', preco: 2.90},
      {nome:'Brahma', pais:'Brasil', preco: 1.50},
    ];


    let cervejas$ = from(cervejas);

    cervejas$.pipe(
      filter( cerveja => cerveja.preco > 2.5),
      map( cerveja => `Cerveja : ${cerveja.nome} - ${cerveja.preco}` ),
    ).subscribe( val => console.log(val));
  }

 */

  constructor() {
    ///COLD observable, é criada uma instancia nova para cada subscriotr
    /* let random$ = new Observable((observer) => observer.next(Math.random()));

    random$.subscribe((num) => console.log('OBS1: ', num));
    random$.subscribe((num) => console.log('OBS2: ', num));
    random$.subscribe((num) => console.log('OBS3: ', num));

    /// HOT observable
    let random2$ = new BehaviorSubject(0);

    random2$.next(Math.random());

    random2$.subscribe((num) => console.log('ObserverSubject1 :', num));
    random2$.subscribe((num) => console.log('ObserverSubject2 :', num));
    random2$.subscribe((num) => console.log('ObserverSubject3 :', num)); */


    console.log('----------------------------------'); 

    let subject = new Subject();

    subject.next('a');
    subject.next('b');
    subject.subscribe( val => console.log("subscricao recebeu: ", val));
    subject.next('c');
    subject.next('d'); 


    console.log('----------------------------------');

    let bSubject = new BehaviorSubject('a');

    bSubject.next('a');
    bSubject.next('b');
    bSubject.subscribe( val => console.log("subscricao recebeu: ", val));
    bSubject.next('c');
    bSubject.next('d');

    console.log(bSubject.getValue());


    console.log('----------------------------------');
  }
}
