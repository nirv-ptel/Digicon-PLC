import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbGlobalPhysicalPosition, NbToastrService } from '@nebular/theme';
import { CompanyPlcService } from '../../../@service/company-plc/company-plc.service';
import { RegisterPlcService } from '../../../@service/regster-plc/register-plc.service';

@Component({
  selector: 'ngx-add-register-plc',
  templateUrl: './add-register-plc.component.html',
  styleUrls: ['./add-register-plc.component.scss']
})
export class AddRegisterPlcComponent implements OnInit {

  registerPlcForm: FormGroup;
  companyPlc: any;
  
  constructor(
    private comPlcService: CompanyPlcService,
    private fb: FormBuilder,
    private registerPlcService: RegisterPlcService,
    private toastrService: NbToastrService
    ) { }

  ngOnInit(): void {
    this.registerPlcForm = this.fb.group({
      plcRegister: [null, Validators.required],
      active: [true, Validators.required],
      companyPlcData: this.fb.group({
        plcCompanyId: [null, Validators.required],
      })
    });

    this.comPlcService.ViewCompanyPlc().subscribe((data: any) => {
      this.companyPlc = data.Data;
    })
  }

  onRegisterPlcSubmit() {
    console.warn(this.registerPlcForm.value);
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
