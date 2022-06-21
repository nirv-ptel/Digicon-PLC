import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../../@service/company/company.service';

@Component({
  selector: 'ngx-view-company',
  templateUrl: './view-company.component.html',
  styleUrls: ['./view-company.component.scss']
})
export class ViewCompanyComponent implements OnInit {

  source: any = [];
  settings = {
    actions: false,
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
  
  constructor(private comService: CompanyService) { }

  ngOnInit() {
    this.comService.ViewCompany().subscribe((data: any) => {
      this.source = data.Data;
    })
  }

}
