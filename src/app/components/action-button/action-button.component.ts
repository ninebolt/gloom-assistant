import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../models/character.model';
import { Observable } from 'rxjs/Observable';

import { ClickOutsideDirective } from '../../directives/clickOutside.directive';

@Component({
  selector: 'action-button',
  styleUrls: ['action-button.component.scss'],
  template: `
    <button type="button" *ngIf="!selected" (click)="showInput()">
      <ng-content></ng-content>
    </button>
    <search-dropdown *ngIf="selected" [placeholder]="placeholder" [searchTerms]="searchTerms" (clickOutside)="hideInput()" (selected)="characterSelected($event)" (close)="hideInput()"></search-dropdown>
  `
})
export class ActionButtonComponent {

  @Input() placeholder = '';
  @Input('searchTerms') searchTerms: string[];

  @Output('selected') characterEmitter: EventEmitter<Character> = new EventEmitter();

  selected = false;

  characterSelected(character: Character) {
    this.characterEmitter.emit(character);
    this.hideInput();
  }

  showInput() {
    setTimeout(() => {
      this.selected = true;
    }, 50);
  }

  hideInput() {
    this.selected = false;
  }
}
