import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {Data} from './Data';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-tree-grid',
  templateUrl: './tree-grid.component.html',
  styleUrls: ['./tree-grid.component.css']
})
export class TreeGridComponent implements OnInit {

  public users: Data[] = [];
 /* public gitHubUsers$: Observable<Data[]>;*/

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getUsers()
      .subscribe((res) => {
        this.users = res;
      });
  }
}
