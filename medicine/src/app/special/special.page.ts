import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-special',
    templateUrl: './special.page.html',
    styleUrls: ['./special.page.scss'],
})
export class SpecialPage implements OnInit {

    public height: any;

    constructor() {
        if (document.body.clientHeight > 788) {
            this.height = document.body.clientHeight - 104 - 179 - 107 + 'px';
            console.log(this.height);
        }
    }

    ngOnInit() {
    }

}
