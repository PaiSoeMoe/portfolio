import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { GetRefService } from '../get-ref.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements AfterViewInit {
  @ViewChild("work", { static: false }) work: ElementRef;
  @Output("scrollTo") scrollTo = new EventEmitter
  constructor(private getRef: GetRefService) { }

  ngAfterViewInit() {
    this.getRef.work = this.work
  }

  onClick(n) {
    this.scrollTo.emit(n);
  }

}
