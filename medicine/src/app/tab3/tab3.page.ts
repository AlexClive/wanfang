import {Component} from '@angular/core';

declare var AlloyCrop;

@Component({
    selector: 'app-tab3',
    templateUrl: 'tab3.page.html',
    styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
    cropPicture = 'assets/icon/favicon.png';

    constructor() {
    }

    // 裁剪图片操作
    crop() {
        /*  //https://github.com/AlloyTeam/AlloyCrop*/
        new AlloyCrop({
            image_src: this.cropPicture,
            circle: true,   // 是否是圆形剪切，false为方形
            width: 320,     // 选区的宽
            height: 320,    // 选区的高
            output: 1,      // 输出的倍率。比如如果output为2，选区的宽300，选区的高100，输出的图像的分辨率为 (2×300，2×100）
            MaxZOOM: 1,
            imageBackgroundBorderWidth: 15,
            ok: (base64, canvas) => {   // 确定裁剪操作
                this.cropPicture = base64;
            },
            cancel: () => {     // 取消裁剪操作
            },
            ok_text: "确定",
            cancel_text: "取消"
        });
    }
}
