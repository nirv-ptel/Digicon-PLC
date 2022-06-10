import { Component, OnInit } from '@angular/core';

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
      id: {
        title: 'ID',
        type: 'number',
      },
      vendorName: {
        title: 'vendor Name',
        type: 'string',
      },
      vendorAddress: {
        title: 'vendor Address',
        type: 'string',
      },
      vendorcode: {
        title: 'vendor Code',
        type: 'number',
      },
      gstno: {
        title: 'vendor GST',
        type: 'string',
      },
      panno: {
        title: 'vendor PAN No.',
        type: 'string',
      }
    },
  };
  
  constructor() { }

  ngOnInit(): void {
  }

}
