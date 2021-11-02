import { Injectable } from "@angular/core";
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from "rxjs";
import { MerchInfo } from "./merch-info.model";

@Injectable({
    providedIn: 'root'
})
export class DatabaseService {
    items: Observable <MerchInfo []>;

    constructor( private db:AngularFireDatabase) {
        console.log("Setting up Firebase communication");
        this.items = this.db.list<MerchInfo>('merch-list').valueChanges();
    }

    public showData() {
        this.items.subscribe((data:MerchInfo[]) => {
            console.log("Data received");
            for (let item of data) {
                console.log(item);
            }
        })
    }
}