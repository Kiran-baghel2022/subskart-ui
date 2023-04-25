export class Item {
        public itemId: number=0;
        public itemName: string='';
        public price: number=0.0;

        public constructor(init?:Partial<Item>) {
                Object.assign(this, init);
            }


        // constructor(itemId: number,itemName: string,price: number){
        // this.itemId=itemId;
        // this.itemName=itemName;
        // this.price=price;
        // }
}
