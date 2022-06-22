import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbGlobalPhysicalPosition, NbToastrService } from '@nebular/theme';
import { CompanyService } from '../../../@service/company/company.service';
import { MachineService } from '../../../@service/machine/machine.service';

@Component({
  selector: 'ngx-add-machine',
  templateUrl: './add-machine.component.html',
  styleUrls: ['./add-machine.component.scss']
})
export class AddMachineComponent implements OnInit {

  machineForm: FormGroup;
  
  constructor(
    private fb: FormBuilder,
    private comService: CompanyService,
    private machineService: MachineService,
    private toastrService: NbToastrService
  ) { }

  ngOnInit(): void {
    this.machineForm = this.fb.group({
      machineName: ['', Validators.required],
      machineIp: ['', Validators.required],
      machinePort: ['', Validators.required],
      devId: ['', Validators.required],
      permissionn: ['', Validators.required],
      machineActive: [true, Validators.required],
      AddRegisterData: this.fb.array([this.AddRegister()]),
    });
  }

  
  RegisterAdd() {
    this.AddRegisterGet.push(this.AddRegister());
  }

  get AddRegisterGet() {
    return this.machineForm.get('AddRegisterData') as FormArray;
  }
  AddRegisterRemove(i: number) {
    if (i >= 1) {
      this.AddRegisterGet.removeAt(i);
    }
  }

  AddRegister() {
    return this.fb.group({
      registerAddress: [''],
      registerType: [''],
      registerTag: [''],
      registerPermissionn: [''],
      // register: [''],

    });
  }

  onMachineSubmit() {
    this.machineService.CreateMachine(this.machineForm.value).subscribe((data: any) => {
      this.machineForm.reset();
      this.allAlert('success', `Machine Created !`, 'Successfully Create Machine');
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
