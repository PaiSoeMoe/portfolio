import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { GetRefService } from '../get-ref.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements AfterViewInit {





  constructor(private getRef: GetRefService) { }



  @ViewChild("resume", { static: false }) resume: ElementRef;

  ngAfterViewInit() {
    this.getRef.resume = this.resume;
  }


}
