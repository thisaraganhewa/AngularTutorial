import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {

  count = 0;

  increament(){

    this.count += 1;

  }

  decrement(){

    this.count -= 1;

  }

  reset(){

    this.count = 0;

  }

}
