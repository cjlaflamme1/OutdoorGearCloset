import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {
  API = environment.backendUrl;

  addItem: FormGroup;
  floatLabelControl = new FormControl('auto');

  constructor(fb: FormBuilder, private http: HttpClient) { 
    this.addItem = fb.group({
      floatLabel: this.floatLabelControl,
      
    });
  }
  ngOnInit(): void {
  }

}
