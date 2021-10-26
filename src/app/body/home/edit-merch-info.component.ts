import { Component } from "@angular/core";
import { MerchInfo } from "./merch-info.model";
import { MerchInfoService } from "./merch-info.service";

@Component ({
    selector: 'offerup-edit-merch-info',
    templateUrl: 'edit-merch-info.component.html'
})
export class EditMerchInfoComponent {
constructor (private infoService:MerchInfoService) {

}
onModifyMerchInfo(data: MerchInfo) {

    this.infoService.modifyMerchInfo(data).subscribe(data => {
        console.log("Data posted successfully");
        console.log(data);
    });
}
}