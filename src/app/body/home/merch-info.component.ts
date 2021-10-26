import { HttpClient } from "@angular/common/http";
import { CompileShallowModuleMetadata } from "@angular/compiler";
import { Component, Injectable, OnInit } from "@angular/core";
import { Merch } from "../merch.model";
import { MerchInfo } from "./merch-info.model";
import { MerchInfoService } from "./merch-info.service";

@Injectable()
@Component({
    selector: "offerup-merch-info",
    templateUrl: "merch-info.component.html"
})
export class MerchInfoComponent implements OnInit {
    merchList: MerchInfo[] | undefined;
    merchcards: Merch[] = [];

    constructor(private merchInfoService: MerchInfoService) {
    }

    ngOnInit(): void {
        console.log("Registering showMerchInfo as a subscriber");
        this.showMerchInfo();
    }

    showMerchInfo() {
        this.merchInfoService.getMerchInfo().subscribe((data: MerchInfo[]) => {
            console.log(data);
            this.merchList = data;
            for (var item in data) {
                this.merchcards.push(new Merch(data[item]))
                console.log(data[item]);
            }
        })
    }

}