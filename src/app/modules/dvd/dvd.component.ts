import { Component, OnInit } from '@angular/core';
import { DvdService } from 'src/app/services/Dvd/dvd.service';
import { Observable } from 'rxjs';
import { Dvd } from 'src/app/models/dvd';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dvd',
  templateUrl: './dvd.component.html',
  styleUrls: ['./dvd.component.css']
})
export class DvdComponent implements OnInit {

  dvds$: Observable<Dvd[]>;

  constructor(
    private dvdService: DvdService,
    private router: Router) { }

  ngOnInit(): void {
    this.dvds$ = this.dvdService.dvd$;
  }

  goDetails(i: number, dvd: Dvd) {
    this.router.navigate([`dvds/${i}`, { title: dvd.title }])
  }

  remove(i: number) {
    this.dvdService.remove(i);
  }
}
