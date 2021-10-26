import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MerchInfo } from "./merch-info.model";

@Injectable({providedIn: 'root'})
export class UserInfoService {
    url: string = "https://offerup-app-b0852-default-rtdb.firebaseio.com/merch-list.json";
    constructor(private http:HttpClient) {
       
    }
    getUserInfo() {
            return this.http.get<MerchInfo>(this.url);
    }
}