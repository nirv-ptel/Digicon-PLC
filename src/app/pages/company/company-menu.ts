import { NbMenuItem } from '@nebular/theme';

export let COMPANY_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'home-outline',
    link: '/pages/dashboard',
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
        link: '/pages/comapny/one-comapny//company-details',
      },
      {
        title: 'View User',
        pathMatch: 'prefix',
        link: '/pages/user/view-user',
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
  },
];
