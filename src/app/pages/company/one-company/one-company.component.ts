import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NbMenuItem, NbMenuService, NbSidebarService } from '@nebular/theme';
import { COMPANY_ITEMS } from '../company-menu';

@Component({
  selector: 'ngx-one-company',
  templateUrl: './one-company.component.html',
  styleUrls: ['./one-company.component.scss']
})
export class OneCompanyComponent implements OnInit {

  CompanyId: any;
  menu = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private sidebarService: NbSidebarService,
    private menuService: NbMenuService
  ) { }

  ngOnInit(): void {
   this.CompanyId = this.activatedRoute.snapshot.params.id;
   this.menuService.addItems([
    {
      title: 'Company Dashboard',
      icon: 'home-outline',
      link: `/pages/company/one-company/${this.CompanyId}/company-details`,
      home: true,
    },
    {
      title: 'FEATURES',
      group: true,
    },
    {
    title: 'User',
    icon: 'layout-outline',
    children: [
      {
        title: 'Add User',
        link: `/pages/company/one-company/`,
      },
      {
        title: 'View User',
        pathMatch: 'prefix',
        link:`/pages/company/one-company/${this.CompanyId}/company-user`,
      },
    ],
  },
  {
    title: 'Add Panel',
    icon: 'layout-outline',
    children: [
      {
        title: 'Add Panel',
        link: '/pages/machine/add-machine',
      },
      {
        title: 'View Panel',
        pathMatch: 'prefix',
        link: '/pages/machine/view-machine',
      },
    ],
  }], 'companyManu');
    
  }

}
