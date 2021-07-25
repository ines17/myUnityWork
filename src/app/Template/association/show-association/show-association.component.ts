import { Component, OnInit } from '@angular/core';
import {AssociationService} from '../../../Services/association.service';
import {Subject} from 'rxjs';
import {ToastrService} from 'ngx-toastr';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {takeUntil} from 'rxjs/operators';
import {ConfirmDeleteComponent} from '../../confirm-delete/confirm-delete.component';
import {Association} from '../../../Model/Association';

@Component({
  selector: 'app-show-association',
  templateUrl: './show-association.component.html',
  styleUrls: ['./show-association.component.css']
})
export class ShowAssociationComponent implements OnInit {

  association: Association;
  loading: boolean;

  constructor(private modalService: NgbModal,
              private toastr: ToastrService,
              private associationService: AssociationService) { }

  ngOnInit(): void {
    this.loading = true;
    this.associationService.getById(1)
      .subscribe((res: any) => {
        this.loading = false;
        this.association = res;
        console.log(this.association);
      }, err => {
        console.log(err);
      });
  }
}
