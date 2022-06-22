import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../@service/user/user.service';

@Component({
  selector: 'ngx-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit {

  source: any = [];
  settings = {
    actions: false,
    columns: {
      id: {
        title: 'ID',
        type: 'number',
      },
      username: {
        title: 'Username',
        type: 'string',
      },
      email: {
        title: 'Email',
        type: 'string',
      },
      mobileNumber: {
        title: 'Mobile Number',
        type: 'number',
      },
      address: {
        title: 'Address',
        type: 'string',
      },
      city: {
        title: 'City',
        type: 'string',
      },
      // roles: {
      //   title: 'Role',
      //   type: 'string'
      // }
    },
  };

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.ViewAllUser().subscribe((data: any) => {
        this.source = data.Data;
    })
  }

}
