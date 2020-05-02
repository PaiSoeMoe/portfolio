import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { WorkComponent } from './work/work.component';
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';
import { SiteNavComponent } from './site-nav/site-nav.component';
import { ViewProjComponent } from './view-proj/view-proj.component';
import { RefectoringComponent } from './refectoring/refectoring.component';
import { UnitTestingComponent } from './unit-testing/unit-testing.component';
import { SocketComponent } from './socket/socket.component';
import { GraphQlComponent } from './graph-ql/graph-ql.component';
import { MobileMenuComponent } from './mobile-menu/mobile-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    WorkComponent,
    AboutComponent,
    ResumeComponent,
    SiteNavComponent,
    ViewProjComponent,
    RefectoringComponent,
    UnitTestingComponent,
    SocketComponent,
    GraphQlComponent,
    MobileMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
