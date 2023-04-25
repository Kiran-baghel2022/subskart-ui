import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ItemPlanVenderForm } from '../models/item-plan-vender-form';
import { Item } from '../item.model';
import { Plan } from '../models/plan';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {
  itemPlanVenderForm!:ItemPlanVenderForm;
  item!:Item;
  temp = new Item();
  constructor(private api:ApiService){
    this.showAddItemForm();
  }

  showAddItemForm(){
      this.api.showAddItemForm().subscribe((data: any) => {
        this.itemPlanVenderForm=data;
        this.temp = new Item({price:0.0});
        this.item=this.temp;
        this.itemPlanVenderForm.item=this.item;
        console.log(data);
        })};

  doAddItem(){

  }
  onOptionsSelected(value:string){
    if(value!=null){
    this.temp = new Item({price:parseInt(value)});
    this.item=this.temp;
    this.itemPlanVenderForm.item=this.item;
  
    console.log("the selected value is " + value);
    }
}
}

