import { HttpClient } from "@angular/common/http";
import { CompileShallowModuleMetadata } from "@angular/compiler";
import { Component, Injectable, OnInit } from "@angular/core";
import { Merch } from "../merch.model";
import { MerchInfo } from "./merch-info.model";

@Injectable()
@Component({
    selector: "offerup-merch-info",
    templateUrl: "merch-info.component.html"
})
export class MerchInfoComponent implements OnInit{
    merchList: MerchInfo | undefined;
    merchcards: Merch [] = [];
    constructor(private http: HttpClient) {
    }
    ngOnInit(): void {
        console.log("Sending a get request to the server");
        this.getMerchInfo();
        console.log("Registering showMerchInfo as a subscriber");
        this.showMerchInfo();
    }

    getMerchInfo() {
        return this.http.get<MerchInfo>('https://offerup-app-b0852-default-rtdb.firebaseio.com/merch-list.json')
    }
    showMerchInfo() {
        this.getMerchInfo().subscribe((data: MerchInfo) => {
            console.log(data);
            this.merchList = data;
        })
    }
}