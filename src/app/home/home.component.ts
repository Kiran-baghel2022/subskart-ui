import { Component, OnInit } from '@angular/core';

import { ApiService } from '../services/api.service';
import { Item } from '../item.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  items!: Item[];

  constructor(private api: ApiService){ 
    this.api.getItems().subscribe((data: any) => {
      this.items=data;
        console.log(this.items);
        console.log('Wrongly Hi');
      });
  }
}
