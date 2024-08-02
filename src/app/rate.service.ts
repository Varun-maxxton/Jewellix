import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import axios from 'axios';
@Injectable({
  providedIn: 'root'
})
export class RateService {
  private apiUrl = 'https://data-asg.goldprice.org/dbXRates/USD';
  constructor(private http: HttpClient) {}

  // getUsers(): Observable<any> {
  //   return this
  //           .http
  //             .get("https://data-asg.goldprice.org/dbXRates/USD")
  //           .pipe(
  //             map(res => res)
  //         );
  //     }
  getGoldPrice(): Observable<any> {
    return this
            .http
              .get<any>("https://data-asg.goldprice.org/dbXRates/USD")
            .pipe(
              map((data) => data)
            );

  }
  loginApi(logindetails:any){
    return axios.get("http://localhost:5000/api/login",logindetails)
  }
}
