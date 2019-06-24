import { Component, OnInit } from '@angular/core';
import {GitHubDataService} from './gitHubData.service';
import {Data} from './Data';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-tree-grid',
  templateUrl: './tree-grid.component.html',
  styleUrls: ['./tree-grid.component.css']
})
export class TreeGridComponent implements OnInit {

  public gitHubUsers: Data[] = [];

  constructor(private gitHubDataService: GitHubDataService) { }

  ngOnInit() {
    this.gitHubUsers = this.gitHubDataService.getGitHubUsers();
  }
}
