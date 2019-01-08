import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EventListener } from '@angular/core/src/debug/debug_node';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input() items;
  @Output() update = new EventEmitter();



  constructor() { }

  ngOnInit() {
  }

}
