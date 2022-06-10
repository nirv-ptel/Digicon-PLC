import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ngx-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.scss']
})
export class AddCompanyComponent implements OnInit {

  companyForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.companyForm = this.fb.group({
      vendorName: ['',Validators.required],
      vendorAddress: ['',Validators.required],
      vendorcode: ['',[Validators.required,Validators.pattern]],
      gstno: [''],
      panno: [''],
    });
  }

  onCompanySubmit() {

  }

}
