import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { MessageModalComponent } from '../message-modal/message-modal.component';
import { SucessMessageComponent } from '../success-message/sucess-message.component';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-select-seat',
  templateUrl: './select-seat.component.html',
  styleUrls: ['./select-seat.component.scss']
})
export class SelectSeatComponent implements OnInit {
  bsModalRef: BsModalRef;
  constructor(private modal: BsModalService, private modalConfirm : BsModalService) { }

  openModal() {
    const initialState  = {
      title: 'The seat is taken?',
      subtitle: 'No worries, communicate with the user that had selected this seat, if he or she agrees, you can change places.',
      userId: 1
    };
    this.bsModalRef = this.modal.show(MessageModalComponent, {initialState });
    let subj = this.modal.onHidden.pipe(first());
    
    subj.subscribe((data) => {
      console.log(data);
      this.modalConfirm.show(SucessMessageComponent, {});
    })
    this.bsModalRef.content.closeBtnName = 'Close';
  }

  openSuccessModal(){

  } 

  ngOnInit() {
  }

}
