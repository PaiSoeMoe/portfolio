import { Component, HostListener, AfterViewInit, ViewChildren } from '@angular/core';
import { GetRefService } from './get-ref.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  constructor(private getRef: GetRefService) {

  }


  title = 'mypage';
}