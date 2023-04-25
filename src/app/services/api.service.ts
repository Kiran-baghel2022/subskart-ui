import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  private itemsUrl = 'http://localhost:8082/items';
  private vendersUrl = 'http://localhost:8082/venders';
  private showItemFormUrl = 'http://localhost:8082/itemsdetails';
  private generateTokenUrl='http://localhost:8082/authenticate';

  public generateToken(request: any){
    this.http.post(this.generateTokenUrl,request,{responseType:'text' as 'json'});
  }


  getItems(){
    return this.http.get(this.itemsUrl);
  }
  getVenders(){
    return this.http.get(this.vendersUrl);
  }
  showAddItemForm(){
    return this.http.get(this.showItemFormUrl);
  }
}
