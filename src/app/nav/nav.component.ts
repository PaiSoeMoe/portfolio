import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GetRefService } from '../get-ref.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @Input("items") items
  @Output("onSelect") onSelect = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  handleClick(e, n) {
    e.stopPropagation();
    this.onSelect.emit(n);

  }

}
