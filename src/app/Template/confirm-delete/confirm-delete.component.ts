import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-confirm-delete',
  templateUrl: './confirm-delete.component.html',
  styleUrls: ['./confirm-delete.component.scss']
})
export class ConfirmDeleteComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal,
              private toastr: ToastrService) { }

  ngOnInit(): void {

  }

  confirmDelete(): void {
    this.activeModal.close(true);
  }

}
