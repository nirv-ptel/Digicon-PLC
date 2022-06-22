import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../../@service/auth/login.service';
import { CompanyService } from '../../../@service/company/company.service';

@Component({
  selector: 'ngx-view-company',
  templateUrl: './view-company.component.html',
  styleUrls: ['./view-company.component.scss']
})
export class ViewCompanyComponent implements OnInit {

  source: any = [];
  settings = {
    actions: {
      delete: false,
      add: false,
      edit: false,
      custom: [
        {
          name: 'Button',
          title: '<i class="nb-list" title="View"></i>',
        }],
      position: 'right'
    },
    columns: {
      company_id: {
        title: 'ID',
        type: 'number',
      },
      companyName: {
        title: 'Company Name',
        type: 'string',
      },
      companyEmail: {
        title: 'Company Email',
        type: 'string',
      },
      companyNumber: {
        title: 'Company Number',
        type: 'number',
      },
      companyAdd: {
        title: 'Company Address',
        type: 'string',
      },
      companyGstNumber: {
        title: 'Company Gst Number',
        type: 'string',
      }
    },
  };

  constructor(private comService: CompanyService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.comService.ViewCompany().subscribe((data: any) => {
      this.source = data.Data;
    })
  }

  ViewCompanyDetails(event) {
    this._router.navigateByUrl(`pages/company/one-company/${event.company_id}`);
  }

}
