import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient, private auth: AuthService) {

  }


  private itemsUrl = 'http://localhost:8082/items';
  private vendersUrl = 'http://localhost:8082/venders';
  private showItemFormUrl = 'http://localhost:8082/itemsdetails';
  private generateTokenUrl = 'http://localhost:8082/authenticate';

  public generateToken(request: any) {
    this.http.post(this.generateTokenUrl, request, { responseType: 'text' as 'json' });
  }



  getItems() {
    let token = localStorage.getItem("token");
    let headers = new HttpHeaders('Content-Type: application/json');
    headers.set("Authorization", 'Bearer ' + token);
    return this.http.get(this.itemsUrl, { headers });
  }
  getVenders() {
    // let auth_token = localStorage.getItem("token");
    // const headers = new HttpHeaders({'Content-Type': 'application/json','Authorization': `Bearer ${auth_token}`});
    //  const requestOptions = { headers: headers }
    //  console.log('checking headers : ',requestOptions.headers.get('Authorization'));
      return this.http.get(this.vendersUrl);
    }
  showAddItemForm(){
      return this.http.get(this.showItemFormUrl);
    }
}
