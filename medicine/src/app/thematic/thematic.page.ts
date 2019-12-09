import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-thematic',
    templateUrl: './thematic.page.html',
    styleUrls: ['./thematic.page.scss'],
})
export class ThematicPage implements OnInit {
    public tabsList: any = {
        list: ['结直肠癌', '遗传性非息肉型大肠癌', '结直肠癌', '大细胞癌', '易感性大肠癌', '遗传性非息肉型大肠癌', '结直肠癌', '大细胞癌', '易感性大肠癌', '遗传性非息肉型大肠癌', '结直肠癌', '大细胞癌', '易感性大肠癌', '遗传性非息肉型大肠癌', '结直肠癌', '大细胞癌', '易感性大肠癌', '遗传性非息肉型大肠癌', '结直肠癌', '大细胞癌', '易感性大肠癌', '遗传性非息肉型大肠癌', '结直肠癌', '大细胞癌', '易感性大肠癌', '遗传性非息肉型大肠癌', '结直肠癌', '大细胞癌', '易感性大肠癌', '遗传性非息肉型大肠癌', '结直肠癌', '大细胞癌', '易感性大肠癌']
        , IsActive: '结直肠癌'
    };
    public margin: any = 0;
    public width: number = 0;

    constructor() {
    }

    ngOnInit() {
        for (let i = 0; i < this.tabsList.list.length; i++) {
            this.width += Number((this.tabsList.list[i].length) * 16) + 27;
        }
        console.log((this.width));
    }

    tansFn(text) {
        this.tabsList.IsActive = text;
    }

    leftFn() {
        console.log('left');
        if (this.margin <= 0) {
            return;
        }
        this.margin = this.margin - 1088;
    }

    rightFn() {
        if (this.margin >= this.width - (this.margin) / 2) {
            return;
        }
        this.margin = this.margin + 1088;
    }

}
