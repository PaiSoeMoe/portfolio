import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, Output, EventEmitter, HostListener } from '@angular/core';
import { Observable } from 'rxjs';
import { GetRefService } from '../get-ref.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {


  @HostListener("window:scroll", ['$event']) onScroll(e) {
    let wofs = window.pageYOffset;
    console.log(wofs);
    if (wofs < this.getRef.work.nativeElement.offsetTop - 100) {
      this.onActive("Home");
    } else if (wofs > this.getRef.work.nativeElement.offsetTop - 100 && wofs < this.getRef.about.nativeElement.offsetTop - 100) {
      this.onActive("My Work");
    } else if (wofs > this.getRef.about.nativeElement.offsetTop - 100 && wofs < this.getRef.resume.nativeElement.offsetTop - 100) {
      this.onActive("About Me");
    } else if (wofs > this.getRef.resume.nativeElement.offsetTop - 100) {
      this.onActive("Resume");
    }
  }


  constructor(private getRef: GetRefService) { }

  ngAfterViewInit() {

  }
  items =
    [
      {
        name: "Home", active: true
      },
      {
        name: "My Work",
        active: false
      },
      {
        name: "About Me",
        active: false
      },
      {
        name: "Resume",
        active: false
      }
    ]

  //leobae111

  scrollTo() {
    window.scrollTo(0, 1638);
  }


  onActivate(e) {
    console.log("i got fired")
    if (e.constructor.name === "HomeComponent") {
      let n = this.items.find(i => i.active === true).name;
    }
  }


  onActive(n) {
    this.items.forEach((i) => {
      if (i.name === n) {
        i.active = true;
      } else {
        i.active = false;
      }
    })
  }


  onSelect(n) {
    this.items.forEach((i) => {
      if (i.name === n) {
        i.active = true;
        if (i.name === "My Work") {
          console.log("i am hereeeeeeeeeeeeeee");
          console.log(this.getRef.work);
          this.getRef.work.nativeElement.scrollIntoView({ behavior: 'smooth' });
        } else if (i.name === "About Me") {
          this.getRef.about.nativeElement.scrollIntoView({ behavior: 'smooth' });
        } else if (i.name === "Resume") {
          this.getRef.resume.nativeElement.scrollIntoView({ behavior: 'smooth' });
        } else if (i.name === "Home") {
          window.scroll(0, 0);
        }
      } else {
        i.active = false;
      }
    })
  }
}




