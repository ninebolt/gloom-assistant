import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { CombatDeck } from '../../models/deck.model';
import { CombatCard } from '../../models/card.model';

import { CombatCardService } from '../../services/combat-card.service';
import { CombatDeckComponent } from '../../components/combat-deck/combat-deck.component';

import 'rxjs/add/operator/map';

@Component({
  selector: 'combat-band',
  styleUrls: ['combat-band.component.scss'],
  template: `
    <div class="combat-band">
      <combat-deck></combat-deck>
      <div class="actions">
        <div class="icon curse" (click)="addTempCard('curse')"></div>
        <div class="icon bless" (click)="addTempCard('bless')"></div>
        <div class="icon shuffle" (click)="shuffleDeck()"></div>
        <div class="icon strengthen" (click)="drawTwo()"></div>
        <div class="icon muddle" (click)="resetDeck()"></div>
      </div>
    </div>
  `
})
export class CombatBandComponent implements OnInit {

  @ViewChild(CombatDeckComponent) combatDeck: CombatDeckComponent;

  constructor(private combatCardService: CombatCardService) { }

  ngOnInit() {
    this.combatDeck.deck = this.combatCardService.getCombatDeck();
    this.combatDeck.shuffle();
  }

  private addTempCard(type) {
    type === 'curse' ? this.combatDeck.deck.addCurse() : this.combatDeck.deck.addBless();
  }

  private shuffleDeck() {
    this.combatDeck.shuffle();
  }

  private drawTwo() {
    this.combatDeck.drawTwo();
  }

  private resetDeck() {
    this.combatDeck.resetDeck();
  }

}