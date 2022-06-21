import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbGlobalPhysicalPosition, NbToastrService } from '@nebular/theme';
import { CompanyService } from '../../../@service/company/company.service';
import { UserService } from '../../../@service/user/user.service';

@Component({
  selector: 'ngx-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  roles: any;
  company: any;
  userForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private comService: CompanyService,
    private toastrService: NbToastrService
  ) { }

  ngOnInit() {

    this.userForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      address: ['', Validators.required],
      city: [null, Validators.required],
      companyEntityData: this.fb.group({
        company_id: [null, Validators.required],
      }),
      roles: this.fb.array([this.fb.control('',Validators.required)]) 
    });

    this.comService.ViewCompany().subscribe((data: any) => {
      this.company = data.Data;
    })
  }

  onUserSubmit() {
    console.warn(this.userForm.value);
    this.userService.CreateUser(this.userForm.value).subscribe((data: any) => {
      this.userService.UserAsignCompany(data.Data.id,this.userForm.get('companyEntityData').get('company_id').value).subscribe((data: any) => {
        this.userForm.reset();
        this.allAlert('success', `Company Created !`, 'Successfully Create Company');
      },(error: any) => {
        this.allAlert('danger', `Not Updated !`, `User Not Company Asign`);
      })
     
    },(error: any) => {
      this.allAlert('danger', `Not Updated !`, `${error.error.message}`);
    })
  }

  allAlert(alertMsg, headMsg, msg) {
    const config = {
      status: alertMsg,
      destroyByClick: true,
      duration: 3000,
      hasIcon: true,
      position: NbGlobalPhysicalPosition.BOTTOM_RIGHT,
      preventDuplicates: false,
    };
    this.toastrService.show(
      `${msg}`,
      `${headMsg}`,
      config);
  }
}
