import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './components/counter-component/counter.component';

@NgModule({
  declarations: [CounterComponent],
  imports: [CommonModule],
  exports: [CounterComponent],
})
export class CounterModule {}
