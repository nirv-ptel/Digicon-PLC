import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbGlobalPhysicalPosition, NbToastrService } from '@nebular/theme';
import { CompanyService } from '../../../@service/company/company.service';

@Component({
  selector: 'ngx-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.scss']
})
export class AddCompanyComponent implements OnInit {

  companyForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private comService: CompanyService,
    private toastrService: NbToastrService
  ) { }

  ngOnInit() {
    this.companyForm = this.fb.group({
      companyName: ['', Validators.required],
      companyAdd: ['', Validators.required],
      companyEmail: ['', Validators.required],
      companyNumber: ['', Validators.required],
      companyGstNumber: ['', Validators.required],
      companyActive: [true, Validators.required]
    });
  }

  onCompanySubmit() {
    // console.warn(this.companyForm.value);
    this.comService.CreateCompany(this.companyForm.value).subscribe((data: any) => {
      this.companyForm.reset();
      this.allAlert('success', `Company Created !`, 'Successfully Create Company');
    },(error: any) => {
      this.allAlert('danger', `Not Created !`, `${error.error.message}`);
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
