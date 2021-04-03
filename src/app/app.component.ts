import {Component, OnInit} from '@angular/core';
import {AirlinesService} from './service/airlines.service';
import {Airplane} from './model/airplane';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public airPlaneTable: Airplane[];
  public error = null;
  private title = 'banditrekrutacja';
  constructor(private airplanesService: AirlinesService) {}
  ngOnInit(): void {
    this.airplanesService.getAirlines().subscribe((airplanes: Airplane[]) => {
      this.airPlaneTable = airplanes
          .filter((airplane: Airplane) => airplane.icao_code != null)
          .filter((airplane: Airplane) => airplane.name.startsWith('A', 0));
    }, err => this.error = err);
  }

}
