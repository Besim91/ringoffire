import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Game } from './../../models/game';
import { PlayerComponent } from './../player/player.component';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, PlayerComponent],
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'] 
})
export class GameComponent implements OnInit {
  pickCardAnimation = false;
  game!: Game;
  currentCard: string = '';  

  constructor() {}

  ngOnInit(): void {
    this.newGame();
    console.log(this.game);
  }

  takeCard() {
    if (!this.pickCardAnimation) {  
      let card = this.game.stack.pop();

      if (card !== undefined) {  
        this.currentCard = card;
      }
    }
    this.pickCardAnimation = true;

    setTimeout(() => {
      this.game.playedCards.push(this.currentCard);
      this.pickCardAnimation = false;
    }, 1000);
  }

  newGame() {
    this.game = new Game();
  }
}
