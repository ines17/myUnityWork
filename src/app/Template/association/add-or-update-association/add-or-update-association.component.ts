import { Component, OnInit } from '@angular/core';
import {AssociationService} from '../../../Services/association.service';
import {Subject} from 'rxjs';
import {ToastrService} from 'ngx-toastr';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {takeUntil} from 'rxjs/operators';
import {ConfirmDeleteComponent} from '../../confirm-delete/confirm-delete.component';
import {Association} from '../../../Model/Association';
import {EventService} from '../../../Services/event.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-or-update-association',
  templateUrl: './add-or-update-association.component.html',
  styleUrls: ['./add-or-update-association.component.css']
})
export class AddOrUpdateAssociationComponent implements OnInit {

  loading: boolean;
  logo: any;

  constructor(private modalService: NgbModal,
              private toastr: ToastrService,
              private route: Router,
              private associationService: AssociationService) { }

  ngOnInit(): void {
  }

  onSubmit(association) {
    association.validationCertif = '';
    association.validation = false;
    if (this.logo) {
      association.logo = this.logo;
    }
    this.loading = true;
    this.associationService.create(association)
      .subscribe((res: any) => {
        this.loading = false;
        this.route.navigate(['/associations']);
      }, err => {
        console.log(err);
      });
  }

  handleUpload(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.logo = reader.result;
    };
  }
}
