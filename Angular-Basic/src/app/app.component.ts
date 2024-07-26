import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Angular-Basic';
  
  currentvalue = 'test'
  
  changeTitle(newTitle: string){
    this.title = newTitle;   
  }
  changeTitle2(newTitle: string){
    this.title = newTitle+this.title;   
  }
}
