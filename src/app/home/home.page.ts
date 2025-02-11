import { Component } from '@angular/core';
import { ExamenService } from '../examen.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  frase: any;

  constructor(private ExamenService: ExamenService) {

  }
  ngOnInit() {
    this.ExamenService.getFrase().subscribe((data) => { this.frase = data, console.log(data.results) });
  }

}