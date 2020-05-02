import { Component, OnInit, HostListener, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-site-nav',
  templateUrl: './site-nav.component.html',
  styleUrls: ['./site-nav.component.scss']
})
export class SiteNavComponent implements OnInit {
  show = false;
  @Input("items") items
  @Output("onSelect") onSelect = new EventEmitter();

  @HostListener('window:scroll') onScroll() {
    if (window.pageYOffset > 100) {
      this.show = true;
    }
    else {
      this.show = false;
    }
  }
  constructor() { }

  ngOnInit() {
  }
  handleClick(e, n) {
    e.stopPropagation();
    this.onSelect.emit(n);
  }


}
