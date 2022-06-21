import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbGlobalPhysicalPosition, NbToastrService } from '@nebular/theme';
import { CompanyPlcService } from '../../../@service/company-plc/company-plc.service';

@Component({
  selector: 'ngx-add-company-plc',
  templateUrl: './add-company-plc.component.html',
  styleUrls: ['./add-company-plc.component.scss']
})
export class AddCompanyPlcComponent implements OnInit {

  companyPlcForm: FormGroup;
  
  constructor(
    private fb: FormBuilder,
    private comPlcService: CompanyPlcService,
    private toastrService: NbToastrService
  ) { }

  ngOnInit(): void {
    this.companyPlcForm = this.fb.group({
      plcName: ['', Validators.required],
      plcMode: ['', Validators.required],
      active: [true, Validators.required]
    });
  }

  onCompanyPlcSubmit() {
    this.comPlcService.CreateCompanyPlc(this.companyPlcForm.value).subscribe((data: any) => {
      this.companyPlcForm.reset();
      this.allAlert('success', `Company PLC Created !`, 'Successfully Create Company PLC');
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
