import { Component } from '@angular/core';
import { Vender } from '../models/vender';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-vender',
  templateUrl: './vender.component.html',
  styleUrls: ['./vender.component.scss']
})
export class VenderComponent {
  venders!: Vender[];

  constructor(private api: ApiService){ 
    this.api.getVenders().subscribe((data: any) => {
      this.venders=data;
        console.log(this.venders);
      });
  }
}
