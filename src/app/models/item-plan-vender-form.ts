import { Item } from "../item.model";
import { Plan } from "./plan";
import { Vender } from "./vender";

export class ItemPlanVenderForm {
    public items: Item[];
    public plans: Plan[];
    public item: Item;
    public plan: Plan;
    public vender: Vender;
   
    constructor(items: Item[],plans: Plan[],item:Item,plan:Plan,vender:Vender){
    this.items=items;
    this.plans=plans;
    this.item=item;
    this.plan=plan;
    this.vender=vender;
    
    }
}
