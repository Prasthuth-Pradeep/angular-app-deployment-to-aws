import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { environment } from '../../environment';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'angular-app';

  constructor() {
    console.log(environment.apiUrl);
  }

  ngOnInit(): void {
    this.title = 'Angular Application - ' + (environment.production ? 'Production' : 'Development') + environment.apiUrl;
  }

}
