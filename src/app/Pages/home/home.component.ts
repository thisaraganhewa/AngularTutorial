import { Component, signal, Signal } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  myVar = "Helloo"
  title = signal("yoo")

}
