import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ElectronicListComponent } from './electronic-list/electronic-list.component';
import { ElectronicDetailComponent } from './electronic-list/electronic-detail/electronic-detail.component';


const routes: Routes = [
  { path: '', component: ElectronicListComponent },
  { path: ':index', component: ElectronicDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElectronicsRoutingModule { }
