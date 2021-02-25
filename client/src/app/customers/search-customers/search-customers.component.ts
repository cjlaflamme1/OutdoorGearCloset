import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

export interface Customer {
  name: string;
  type: string;
}

let ELEMENT_DATA: Customer[] = [];

@Component({
  selector: 'app-search-customers',
  templateUrl: './search-customers.component.html',
  styleUrls: ['./search-customers.component.scss']
})
export class SearchCustomersComponent implements OnInit {
  constructor(private http: HttpClient) { }
  displayedColumns: string[] = ['name', 'type'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  API = environment.backendUrl;

  private fetchCustomers () {
    this.http.get(`${this.API}/customer`)
    .pipe(map((response) => {
      ELEMENT_DATA = [];
      for (const key in response) {
        if (response.hasOwnProperty(key)) {
          ELEMENT_DATA.push(response[key])

        }
      }
      return ELEMENT_DATA;
    }))
    .subscribe(posts => {
      console.log(posts);
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }



  ngOnInit(): void {
    this.fetchCustomers();
  }

}
