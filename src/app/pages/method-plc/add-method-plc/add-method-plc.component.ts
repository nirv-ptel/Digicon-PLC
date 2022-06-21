import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NbGlobalPhysicalPosition, NbToastrService } from '@nebular/theme';
import { MethodPlcService } from '../../../@service/method-plc/method-plc.service';

@Component({
  selector: 'ngx-add-method-plc',
  templateUrl: './add-method-plc.component.html',
  styleUrls: ['./add-method-plc.component.scss']
})
export class AddMethodPlcComponent implements OnInit {

  methodPlcForm: FormGroup;
  
  constructor(
    private fb: FormBuilder,
    private methodPlcService: MethodPlcService,
    private toastrService: NbToastrService
    ) { }

  ngOnInit(): void {
    this.methodPlcForm = this.fb.group({

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
