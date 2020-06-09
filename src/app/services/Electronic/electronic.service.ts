import { Injectable } from '@angular/core';
import { BehaviorSubject, timer, Observable } from 'rxjs';
import { Electronic } from 'src/app/models/electronic';
import { map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ElectronicService {

  private eletronicSubject$: BehaviorSubject<Electronic[]> = new BehaviorSubject<Electronic[]>([]);

  public eletronics$ = this.eletronicSubject$.asObservable();

  constructor() {
    timer(1000)
      .subscribe(() => {
        this.eletronicSubject$.next([
          { name: "Headphone", brand: "Bose", price: 200, description: "Noise cancelling" },
          { name: "Portable HD", brand: "Samsung", price: 100, description: "2TB Hard disk" },
          { name: "Monitor 23''", brand: "AOC", price: 200, description: "HDMI/VGA" },
          { name: "Processor i7-8700k", brand: "Intel", price: 400, description: "12 MB Cache" },
          { name: "Mouse wireless", brand: "Logitech", price: 50, description: "For Gamers" },
        ])
      })
   }

   get(i: number): Observable<Electronic> {
    return this.eletronics$.pipe(
      map(eletronics => (i >= 0 && i < eletronics.length) ? eletronics[i] : null),
      delay(1000)
    )
  }
}
