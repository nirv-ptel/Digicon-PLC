import { Component, OnInit } from '@angular/core';
import { MachineService } from '../../../@service/machine/machine.service';

@Component({
  selector: 'ngx-view-machine',
  templateUrl: './view-machine.component.html',
  styleUrls: ['./view-machine.component.scss']
})
export class ViewMachineComponent implements OnInit {

  source: any = [];
  settings = {
    actions: false,
    columns: {
      machine_id: {
        title: 'ID',
        type: 'number',
      },
      machineName: {
        title: 'Machine Name',
        type: 'string',
      },
      machineIp: {
        title: 'Machine IP',
        type: 'string',
      },
      machinePort: {
        title: 'Machine Port',
        type: 'number',
      },
      devId: {
        title: 'Dev Id',
        type: 'string',
      },
      permissionn: {
        title: 'Permission',
        type: 'string',
      },
      machineActive: {
        title: 'Machine Active',
        type: 'string',
      }
    },
  };

  constructor(private machineService: MachineService) { }

  ngOnInit(): void {
    this.machineService.ViewMachine().subscribe((data: any) => {
      this.source = data.Data;
    })
  }

}
