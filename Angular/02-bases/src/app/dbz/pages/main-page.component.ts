import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
  public characters: Character[] = [
    { name: 'Goku', power: 9500 },
    { name: 'Krillin', power: 1000 },
    { name: 'Vegeta', power: 8500 },
  ];

  newCharacter(character: Character): void {
    this.characters.push(character);
  }

  onDeleteCharacter(index: number): void {
    this.characters.splice(index, 1);
    console.log(this.characters);
  }
}
