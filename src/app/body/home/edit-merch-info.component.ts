import { Component } from "@angular/core";
import { DatabaseService } from "./database.service";
import { MerchInfo } from "./merch-info.model";
import { MerchInfoService } from "./merch-info.service";

@Component ({
    selector: 'offerup-edit-merch-info',
    templateUrl: 'edit-merch-info.component.html'
})
export class EditMerchInfoComponent {
constructor (private infoService:MerchInfoService, private dbService:DatabaseService) {
    this.dbService.showData();
}
onModifyMerchInfo(data: MerchInfo) {

    this.infoService.modifyMerchInfo(data).subscribe(data => {
        console.log("Data posted successfully");
        // console.log(data);
    });
}
}