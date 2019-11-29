import {Component} from '@angular/core';
import {FileTransfer, FileUploadOptions, FileTransferObject} from '@ionic-native/file-transfer/ngx';
import {File} from '@ionic-native/file/ngx';
import { DocumentViewer } from '@ionic-native/document-viewer/ngx';
@Component({
    selector: 'app-tab2',
    templateUrl: 'tab2.page.html',
    styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

    public startingTime = '选择';
    public searchText = '';

    constructor(private transfer: FileTransfer, private file: File, private document: DocumentViewer) {
        this.read();
    }

    selectFn(str) {
        console.log(str);
        this.startingTime = str;
    }

    getChange(eve) {
        console.log(eve.detail.value);
    }

    getText(text) {
        this.searchText = text;
    }

    download() {
        console.log('下载');
        const fileTransfer: FileTransferObject = this.transfer.create();
        const url = "http://temp2.med.wanfangdata.com.cn/web/viewer.html?file=/Pdf/251%e6%89%8b%e8%b6%b3%e5%8f%a3%e7%97%85%e4%b8%b4%e5%ba%8a%e8%b7%af%e5%be%84%ef%bc%882016%e5%b9%b4%e7%89%88%ef%bc%89.pdf";
        fileTransfer.download(url, this.file.dataDirectory + 'file.pdf').then((entry) => {
            console.log('download complete: ' + entry.toURL());
        }, (error) => {
            console.log(error);
            // handle error
        });
    }

    read() {
        const options = {
            title: 'My PDF'
        };

        this.document.viewDocument('http://temp2.med.wanfangdata.com.cn/web/viewer.html?file=/Pdf/251%e6%89%8b%e8%b6%b3%e5%8f%a3%e7%97%85%e4%b8%b4%e5%ba%8a%e8%b7%af%e5%be%84%ef%bc%882016%e5%b9%b4%e7%89%88%ef%bc%89.pdf', 'application/pdf', options);
    }
}
