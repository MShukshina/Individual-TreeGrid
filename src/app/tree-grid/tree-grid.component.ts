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

  public users: Data[];
  public repositories: Data[];
  public commits: Data[];

  /*public users$: Observable<Data[]>;
  public repositories$: Observable<Data[]>;
  public commits$: Observable<Data[]>;*/

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getUsers();
  }

  openChild(node) {
    if (node.level === 1) {
      this.getRepositories(node);
    } else {
      this.getCommits(node);
    }
  }

  getUsers() {
    this.dataService.getGitHabUsers()
      .subscribe((res) => {
        this.users = res;
        }
      );
  }

  getRepositories(node) {
    this.dataService.getGitHabRepositories(node.name)
      .subscribe((res) => {
          this.repositories = res;
        }
      );
    this.users = this.dataService.getUsers();
  }

  getCommits(node) {
    this.dataService.getGitHabCommits(node.parent, node.name)
      .subscribe((res) => {
          this.commits = res;
        }
      );
    this.users = this.dataService.getUsers();
  }
}
