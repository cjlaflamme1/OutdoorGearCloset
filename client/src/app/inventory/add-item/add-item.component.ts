import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {
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
