import { Component, OnInit } from '@angular/core';
import { ElectronicService } from 'src/app/services/Electronic/electronic.service';
import { Observable } from 'rxjs';
import { Electronic } from 'src/app/models/electronic';

@Component({
  selector: 'app-electronic-list',
  templateUrl: './electronic-list.component.html',
  styleUrls: ['./electronic-list.component.css']
})
export class ElectronicListComponent implements OnInit {

  electronics$: Observable<Electronic[]>;

  constructor(private electronicService: ElectronicService) { }

  ngOnInit(): void {
    this.electronics$ = this.electronicService.eletronics$;
  }

}
