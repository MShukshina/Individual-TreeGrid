import { Component, OnInit } from '@angular/core';
import {GitHubDataService} from '../gitHubData.service';
import {Data} from './Data';

@Component({
  selector: 'app-tree-grid',
  templateUrl: './tree-grid.component.html',
  styleUrls: ['./tree-grid.component.css']
})
export class TreeGridComponent implements OnInit {

  public gitHubUsers: Data[] = [];
  public countItemsOnChange: number;

  constructor(private gitHubDataService: GitHubDataService) { }

  ngOnInit() {
    this.gitHubUsers = this.gitHubDataService.getGitHubUsers();
    this.countItemsOnChange = this.gitHubDataService.getCountItemsOnPage();
  }
}
