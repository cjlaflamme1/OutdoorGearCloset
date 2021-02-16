import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})

export class AddItemComponent implements OnInit {
  API = environment.backendUrl;
  
  addItem: FormGroup;
  floatLabelControl = new FormControl('auto');

  constructor(fb: FormBuilder, private http: HttpClient) { 
    this.addItem = fb.group({
      floatLabel: this.floatLabelControl,
      name: '',
      quantity: '',
      category: ''
    });
  }

  onAddItem() {
    // console.log(this.addItem)
    this.http.post(`${this.API}/inventoryitems`, this.addItem.value).subscribe(responseData => {
      console.log(responseData);
    })
  }

  ngOnInit(): void {
  }

}
