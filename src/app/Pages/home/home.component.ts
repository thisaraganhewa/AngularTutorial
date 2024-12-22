import { Component, signal, Signal } from '@angular/core';
import { GreetingComponent } from '../../components/greeting/greeting.component';

@Component({
  selector: 'app-home',
  imports: [GreetingComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  myVar = "Helloo"
  title = signal("yoo")
  greet = "helooouuu"

  keyUpHandler(){

    this.title = signal("he doing something");

    this.greet = "what the hell is going on"

    console.log("he did something!!")

  }


}
