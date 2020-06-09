import { Component, OnInit } from '@angular/core';
import { DvdService } from 'src/app/services/Dvd/dvd.service';
import { Observable } from 'rxjs';
import { Dvd } from 'src/app/models/dvd';

@Component({
  selector: 'app-dvd',
  templateUrl: './dvd.component.html',
  styleUrls: ['./dvd.component.css']
})
export class DvdComponent implements OnInit {

  dvds$: Observable<Dvd[]>;

  constructor(private dvdService: DvdService) { }

  ngOnInit(): void {
    this.dvds$ = this.dvdService.dvd$;
  }

}
