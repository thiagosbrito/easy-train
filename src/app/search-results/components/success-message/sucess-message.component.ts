import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
@Component({
    selector: 'sucess-message',
    templateUrl: './sucess-message.component.html'
})
export class SucessMessageComponent implements OnInit {
    title: string;
    subtitle: string;
    message: string;
    userId: number;
    constructor(public bsModalRef: BsModalRef) { }

    ngOnInit() {
    }

    close() {
        this.bsModalRef.content = "test";
        this.bsModalRef.hide();
    }


}
