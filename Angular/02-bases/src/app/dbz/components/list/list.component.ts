import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Input()
  public characterList: Character[] = [{ name: 'Trunks', power: 10 }];

  @Output()
  public onDeleteCharacter: EventEmitter<number> = new EventEmitter();

  onDelete(index: number): void {
    this.onDeleteCharacter.emit(index);
    console.log(index);
  }
}
