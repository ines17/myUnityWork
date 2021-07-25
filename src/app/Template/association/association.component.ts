import { Component, OnInit } from '@angular/core';
import {AssociationService} from '../../Services/association.service';
import {Subject} from 'rxjs';
import {ToastrService} from 'ngx-toastr';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {takeUntil} from 'rxjs/operators';
import {ConfirmDeleteComponent} from '../confirm-delete/confirm-delete.component';

@Component({
  selector: 'app-association',
  templateUrl: './association.component.html',
  styleUrls: ['./association.component.css']
})
export class AssociationComponent implements OnInit {

  associationsList = [];
  filter: any;
  loading: boolean;
  destroy$: Subject<boolean> = new Subject<boolean>();

  page = 1;
  itemsPerPage = 3;
  totalItems: any;

  constructor(private modalService: NgbModal,
              private toastr: ToastrService,
              private associationService: AssociationService) { }

  ngOnInit(): void {
    this.getPage(0);
  }


  getPage(page: number) {
    this.loading = true;
    //this.associationService.findByPage(page, this.pageSize, this.filter)
    this.associationService.findAll()
      .subscribe((res: any) => {
        this.loading = false;
        this.associationsList = res;
      }, err => {
        console.log(err);
      });
  }

  delete(association: any) {
    const modalRef = this.modalService.open(ConfirmDeleteComponent);
    modalRef.result.then((res) => {
      if (res === true) {
        this.associationService.delete(association.id).pipe(takeUntil(this.destroy$)).subscribe(
          () => {
            this.toastr.success('Supprimé avec succès', 'Succès');
            this.getPage(0);
          },
          err => {
            this.toastr.error( 'Une erreur s\'est produite Veuillez essayer de nouveau.',  'Erreur');
          });
      }
    });
  }
}
