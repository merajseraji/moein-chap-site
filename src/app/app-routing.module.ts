import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MoeinChapComponent} from './moein-chap/moein-chap.component';

const routes: Routes = [
  {path: '', component: MoeinChapComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
