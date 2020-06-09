import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { DvdService } from 'src/app/services/Dvd/dvd.service';
import { Observable } from 'rxjs';
import { Dvd } from 'src/app/models/dvd';

@Component({
  selector: 'app-dvd-detail',
  templateUrl: './dvd-detail.component.html',
  styleUrls: ['./dvd-detail.component.css']
})
export class DvdDetailComponent implements OnInit {

  dvd$: Observable<Dvd>;
  title = null;

  constructor(
    private route: ActivatedRoute,
    private dvdService: DvdService,
    private router: Router) { }

  ngOnInit(): void {
    let index: number = +this.route.snapshot.paramMap.get('index');
    this.dvd$ = this.dvdService.get(index);

    this.route.paramMap
      .subscribe((params: ParamMap) => {
        if (params.has('title'))
          this.title = params.get('title');
      })

    /*
    console.log("Index: ", this.route.snapshot.paramMap.get('index'));

    this.route.paramMap
      .subscribe((params: ParamMap) => console.log("Index: ", params.get('index')));
    */
  }

  goBack () {
    this.router.navigate(['/dvds']);
  }

}
