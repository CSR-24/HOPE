import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() search = new EventEmitter();

  @Input() query: string = "";
  
  constructor() {}

  ngOnInit(): void {

  }

  searchOrganicShop() {
    if (this.query) {
      this.search.emit(this.query);
    }
  }

}
