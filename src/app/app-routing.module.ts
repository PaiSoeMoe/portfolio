import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ViewProjComponent } from './view-proj/view-proj.component';
import { SocketComponent } from './socket/socket.component';
import { UnitTestingComponent } from './unit-testing/unit-testing.component';
import { RefectoringComponent } from './refectoring/refectoring.component';
import { GraphQlComponent } from './graph-ql/graph-ql.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'vasilio', component: ViewProjComponent },
  { path: 'the-lux', component: ViewProjComponent },
  { path: 'socket', component: SocketComponent },
  { path: 'unit-test', component: UnitTestingComponent },
  { path: 'refectoring', component: RefectoringComponent },
  { path: 'graphql', component: GraphQlComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
