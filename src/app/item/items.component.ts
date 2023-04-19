import { Component, OnInit } from '@angular/core'

import { Item } from './item'
import { ItemService } from './item.service'

@Component({
  selector: 'ns-items',
  templateUrl: './items.component.html',
})
export class ItemsComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
  }

  textChange(event){
    console.log(`textChange: ${event.value}`);
  }
}
