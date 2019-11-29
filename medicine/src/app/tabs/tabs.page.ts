import {Component} from '@angular/core';
import {StorageService} from "../service/storage.service";

@Component({
    selector: 'app-tabs',
    templateUrl: 'tabs.page.html',
    styleUrls: ['tabs.page.scss']
})
export class TabsPage {
    public IsHide: boolean = false;

    // tslint:disable-next-line:no-shadowed-variable
    constructor(public StorageService: StorageService) {
        this.initialize();
    }

    initialize() {
        let wasp: number = Number(this.StorageService.getStorage('wasp'));
        console.log(this.StorageService.getStorage('wasp'));
        if (wasp == 1) {
            this.IsHide = true;
        }else {
            this.IsHide = false;
        }
    }
}
