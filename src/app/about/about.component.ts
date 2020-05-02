import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { GetRefService } from '../get-ref.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements AfterViewInit {
  @Output("scrollTo") scrollTo = new EventEmitter
  @ViewChild("about", { static: false }) about: ElementRef;
  constructor(private getRef: GetRefService) { }


  ngAfterViewInit() {
    this.getRef.about = this.about;

  }

  onClick(n) {
    this.scrollTo.emit(n);
  }


}
