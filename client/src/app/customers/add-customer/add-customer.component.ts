import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {
  addItem: FormGroup;
  floatLabelControl = new FormControl('auto');

  constructor(fb: FormBuilder) { 
    this.addItem = fb.group({
      floatLabel: this.floatLabelControl
    });
  }
  ngOnInit(): void {
  }

}
