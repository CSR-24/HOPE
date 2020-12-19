import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-panel',
  templateUrl: './category-panel.component.html',
  styleUrls: ['./category-panel.component.scss']
})
export class CategoryPanelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  categories = [{
    name: "Organic Fruits",
    id: 1,
    hide: false,
    subcategory: [{
      name: "All Fruits",
      id: 0,
      hide: false
    },{
      name: "Organic Banana",
      id: 2,
      hide: false
    },{
      name: "Organic Mangos",
      id: 3,
      hide: false
    }]
  }, {
    name: "Organic Vegetables",
    id: 4,
    hide: false,
    subHeadDesc: `
      100% original.Vegetables for life.
      Eat fresh, stay healthy.
    `,
    subcategory: [{
      name: "All Vegitables",
      id: 0,
      hide: false
    },{
      name: "Organic Onions",
      id: 5,
      hide: false
    },{
      name: "Organic Tomatoes",
      id: 6,
      hide: false
    }]
  }, {
    name: "Organic Dry Fruits",
    subHeadDesc: "Organic dried fruits",
    id: 7,
    hide: false,
    subcategory: [{
      name: "All Dry Fruits",
      id: 0,
      hide: false
    },{
      name: "Organic Cashew",
      id: 8,
      hide: false
    },{
      name: "Organic Almond",
      id: 9,
      hide: false
    }]
  }, {
    name: "Organic Beverages",
    id: 10,
    hide: false
  }, {
    name: "Organic Healthy Breakfast",
    id: 11,
    hide: false
  }];

}
