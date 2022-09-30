import { DecimalPipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-composant-formulaire',
  templateUrl: './composant-formulaire.component.html',
  styleUrls: ['./composant-formulaire.component.css'],
})
export class ComposantFormulaireComponent implements OnInit {
  constructor() {}

  title: String = 'Titre du Composant 1';
  valid: Boolean = true;
  prenom: String = '';
  nom: String = '';
  adresse: String = '';
  cp: number = 67000;
  ville: String = '';
  tel: number = +33;
  email: String = '';
  civilite: String = '';
  pays: String = '';
  login: String = '';
  password: String = '';

  recap: String = '';

  ngOnInit(): void {}

  clic() {
    console.log('clic activé');

    this.valid = false;
  }

  clicChange(val: String) {
    this.recap = val;
    console.log(this.recap);
  }
  ngOnDestroy() {}
}
