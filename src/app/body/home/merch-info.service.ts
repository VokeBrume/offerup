import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MerchInfo } from "./merch-info.model";

@Injectable({ providedIn: 'root' })
export class MerchInfoService {
    private baseUrl: string = "https://offerup-app-b0852-default-rtdb.firebaseio.com/";
    private mergelistEndpoint: string = 'merch-list.json';


    constructor(private http: HttpClient) {
    }

    getMerchInfo() {
        console.log(this.baseUrl + this.mergelistEndpoint);
        return this.http.get<MerchInfo>(this.baseUrl + this.mergelistEndpoint);
    }

    modifyMerchInfo(data: MerchInfo) {
        
        return this.http.put(this.baseUrl + this.mergelistEndpoint, data)
    }
}