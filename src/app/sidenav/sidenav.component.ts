import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  loadSubCategory(category: any) {
    console.log("Category Selected: "+ category.name);
  }

  alert() {
    alert("dsadas");
  }

}
