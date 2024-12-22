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


}
