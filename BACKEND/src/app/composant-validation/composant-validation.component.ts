import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-composant-validation',
  templateUrl: './composant-validation.component.html',
  styleUrls: ['./composant-validation.component.css'],
})
export class ComposantValidationComponent implements OnInit {
  constructor() {}

  @Input() firstname: String = '';
  @Input() lastname: String = '';
  @Input() adress: String = '';
  @Input() pc: number = 67000;
  @Input() city: String = '';
  @Input() phone: number = 0;
  @Input() mail: String = '';
  @Input() civ: String = '';
  @Input() pass: String = '';
  @Input() userid: String = '';
  @Input() country: String = '';

  @Output() change: EventEmitter<String> = new EventEmitter<String>();

  ngOnInit(): void {}
  clic() {
    this.change.emit(
      'Votre Prénom : ' +
        this.firstname +
        ' ***** Votre nom : ' +
        this.lastname +
        ' ***** Votre adresse : ' +
        this.adress +
        ' ***** Votre code postal : ' +
        this.pc +
        ' ***** Votre ville : ' +
        this.city +
        ' ***** Votre pays : ' +
        this.country +
        ' ***** Votre numéro de téléphone : ' +
        this.phone +
        ' ***** Votre adresse mail : ' +
        this.mail +
        ' ***** Vous êtes : ' +
        this.civ +
        ' ***** Votre identifiant : ' +
        this.userid +
        ' ***** Votre mot de passe : ' +
        this.pass
    );
  }
}
