import { Component, Input } from '@angular/core';
import {ServiceService} from './service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  onUpdate(id, event){
    this.service.update(id, event)
  }

  constructor(private service:ServiceService){}
}
