import { Component, OnInit } from '@angular/core';
import { CompanyPlcService } from '../../../@service/company-plc/company-plc.service';

@Component({
  selector: 'ngx-view-company-plc',
  templateUrl: './view-company-plc.component.html',
  styleUrls: ['./view-company-plc.component.scss']
})
export class ViewCompanyPlcComponent implements OnInit {

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
      plcCompanyId: {
        title: 'ID',
        type: 'number',
      },
      plcName: {
        title: 'PLC Name',
        type: 'string',
      },
      plcMode: {
        title: 'PLC Mode',
        type: 'string',
      },
      active: {
        title: 'Active',
        type: 'string',
      }
    },
  };

  constructor(private comPlcService: CompanyPlcService) { }

  ngOnInit(): void {
    this.comPlcService.ViewCompanyPlc().subscribe((data: any) => {
      this.source = data.Data;
    })
  }



}
