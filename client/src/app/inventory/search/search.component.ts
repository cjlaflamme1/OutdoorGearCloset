import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';

export interface InventoryItem {
  name: string;
  quantity: number;
  category: string;
  
}

let ELEMENT_DATA: InventoryItem[] = [];
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private http: HttpClient) { }

  displayedColumns: string[] = ['name', 'quantity', 'category'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  API = environment.backendUrl;

  private fetchPosts () {
    this.http.get(`${this.API}/inventoryitems`)
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
    this.fetchPosts();
  }

}
