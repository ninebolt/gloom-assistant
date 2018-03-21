import { Component, OnInit } from '@angular/core';

import { SearchDropdownComponent } from "./components/search-dropdown/search-dropdown.component";
import { DeckComponent } from "./containers/deck/deck.component";

import { MonsterDeck } from "./models/deck.model";
import { MonsterCard } from './models/card.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ SearchDropdownComponent ]
})

export class AppComponent implements OnInit {
  title = 'app';

  deck: MonsterDeck = new MonsterDeck([]);

  decks: MonsterDeck[] = [this.deck];

  constructor(search: SearchDropdownComponent) {
    search.selected.subscribe((event) => {
      if (event.type === 'Monster') {
        this.decks.push(event.deck)
      }
    })
  }

  ngOnInit() {

    // generate some gloomy test cards

    for (let i = 0; i < 10; i++) {
        this.deck.insertCard(
            new MonsterCard(
                'Bandit Archer',
                4,
                [ `<span class="title">Bandit Archer - 4</span>`,
                  `<span class="initiative">initiative</span>`,
                  `<span class="large">body content here</span>`,
                  `<span class="small">body content here</span>`,
                  `<span class="shuffle">shuffle</span>`
                ],
                50,
                false
            )
        )
    }

    // add in a test shuffle card
    this.deck.cards[5].shuffle = true;
  }
}
