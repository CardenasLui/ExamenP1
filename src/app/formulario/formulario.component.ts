import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonHeader, } from '@ionic/angular/standalone';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
  imports: [IonContent, IonHeader, CommonModule]
})
export class FormularioComponent implements OnInit {

  pelicula: { nombrePelicula: string; lanzamiento: string, productor: string, productora: string, protagonista: string }[] = [];

  addItem(nombrePelicula: string, lanzamiento: string, productor: string, productora: string, protagonista: string): void {
    if (nombrePelicula.trim() && lanzamiento.trim() && productor.trim() && productora.trim() && protagonista.trim()) {
      this.pelicula.push({
        nombrePelicula: nombrePelicula.trim(),
        lanzamiento: lanzamiento.trim(),
        productor: productor.trim(),
        productora: productora.trim(),
        protagonista: protagonista.trim()
      });
    } else {
      console.error('El nombre y la fecha deben estar completados')
    }
  }
  constructor() { }
  ngOnInit() { }
}