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
  public gitHubRepos: Data[] = [];
  public gitHubCommits: Data[] = [];

  public gitHubData;

  constructor(private http: HttpClient, private gitHubDataService: GitHubDataService) { }

  ngOnInit() {
    this.gitHubUsers = this.gitHubDataService.getGitHubUsers();
  }

  getUsers() {
    /*this.http.get('https://api.github.com/search/users?q=a&per_page=5&page=1')
      .pipe(map((rep: any) => rep.items.map((user: any) => ({login: user.login, node_id: user.node_id, url: user.url}))))
      .subscribe(res => {
        this.gitHubData = res;
        this.removeUsers();
        this.addUsers();
      });*/
  }

  addUsers() {
    this.gitHubDataService.addUsers(this.gitHubData);
    this.gitHubUsers = this.gitHubDataService.getGitHubUsers();
  }

  removeUsers() {
    this.gitHubDataService.removeUsers();
    this.gitHubUsers  = this.gitHubDataService.getGitHubUsers();
  }

}
