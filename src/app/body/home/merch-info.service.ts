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
        return this.http.get<MerchInfo[]>(this.baseUrl + this.mergelistEndpoint);
    }
    modifyMerchInfo() {
        var temp: MerchInfo []= [
            {
                title: "Tesla Model3",
                cost: "$75000",
                locator: "Philadelphia, PA",
                imgPath: "./assets/car.jpg"
            },
            {
                title: "Hyundai Sonata",
                cost: "$1200000",
                locator: "Ibadan, Oyo",
                imgPath: "./assets/car.jpg"
            },
            {
                title: "Mercedes E-Class",
                cost: "$42000",
                locator: "Summerville, WV",
                imgPath: "./assets/car.jpg"
            },
            {
                title: "Toyota Highlander",
                cost: "$12000",
                locator: "Indianapolis, IL",
                imgPath: "./assets/car.jpg"
            },
            {
                title: "Hyundai Elantra",
                cost: "Free",
                locator: "Brooklyn, NY",
                imgPath: "./assets/car.jpg"
            },
            {
                title: "Hyundai Elantra",
                cost: "Free",
                locator: "Manhattan, NY",
                imgPath: "./assets/car.jpg"
            }
        ]

        return this.http.put(this.baseUrl + this.mergelistEndpoint, temp)
    }
}