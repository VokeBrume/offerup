export class Merch {
    title: string;
    cost: string;
    locator: string;
    imgPath: string;

    constructor({title, cost, locator, imgPath} : {title: string, cost: string, locator: string, imgPath: string}) {
        this.title = title;
        this.cost = cost;
        this.locator = locator;
        this.imgPath = imgPath;
    }
}