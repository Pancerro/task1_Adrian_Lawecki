import {Component, Input, OnInit} from '@angular/core';
import {Airplane} from '../model/airplane';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {
  @Input() airplaneTable: Airplane[];
  constructor() { }

  ngOnInit(): void {
  }

}
