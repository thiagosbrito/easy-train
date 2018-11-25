  import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-message-modal',
  templateUrl: './message-modal.component.html',
  styleUrls: ['./message-modal.component.scss']
})
export class MessageModalComponent implements OnInit {
  title: string;
  subtitle: string;
  message:string;
  userId: number;
  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit() {
  }

  close(){  
    this.bsModalRef.hide();
  }

}
