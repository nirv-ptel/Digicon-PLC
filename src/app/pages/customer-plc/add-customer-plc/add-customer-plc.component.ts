import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NbGlobalPhysicalPosition, NbToastrService } from '@nebular/theme';
import { CustomerPlcService } from '../../../@service/customer-plc/customer-plc.service';
import { MethodPlcService } from '../../../@service/method-plc/method-plc.service';

@Component({
  selector: 'ngx-add-customer-plc',
  templateUrl: './add-customer-plc.component.html',
  styleUrls: ['./add-customer-plc.component.scss']
})
export class AddCustomerPlcComponent implements OnInit {

  customeryPlcForm: FormGroup;
  
  constructor(
    private fb: FormBuilder,
    private customerPlcService: CustomerPlcService,
    private toastrService: NbToastrService
    ) { }

  ngOnInit(): void {
    this.customeryPlcForm = this.fb.group({

    });
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
