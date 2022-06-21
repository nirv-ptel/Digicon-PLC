import { DatePipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators';
import { SolarData } from '../../@core/data/solar';
import { JsonService } from '../../@service/json/json.service';

interface CardSettings {
  title: string;
  iconClass: string;
  type: string;
}

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {

  time = new Date();
  source: any = [];
  settings = {
    actions: false,
    columns: {
      // id: {
      //   title: 'ID',
      //   type: 'number',
      // },
      ipAddress: {
        title: 'IP Address',
        type: 'string',
      },
      status: {
        title: 'Status',
        type: 'string',
      },
      actualTimer: {
        title: 'Actual Timer',
        type: 'number',
      },
      setTimer: {
        title: 'Set Timer',
        type: 'string',
      },
    },
  };

  constructor(private jsonService: JsonService,
    private datePipe: DatePipe
  ) { }

  ngOnInit() {
    setInterval(() => {
      // this.time = new Date();
    }, 1000);

    this.jsonService.ViewJson().subscribe((data: any) => {
      this.source = data;
    })
  }


}
