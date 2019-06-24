import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Data} from './Data';

@Injectable({
  providedIn: 'root'
})
export class GitHubDataService {

  private data;
  private users: Data[] = [];
  private repositories: Data[] = [];
  private commits: Data[] = [];

  constructor(private http: HttpClient) { }


  getGitHubUsers(): Data[] {
    this.http.get('https://api.github.com/search/users?q=a&per_page=5&page=1')
      .pipe(map((rep: any) => rep.items.map((user: any) => ({name: user.login, nodeId: user.node_id, url: user.html_url}))))
      .subscribe(res => {
        this.data = res;
        this.removeUsers();
        this.addUsers(this.data);
      });
    return this.users;
  }

  getGitHubRepositories(userName: string): Data[] {

    /*this.http.get(`https://api.github.com/users/${userName}/repos?q=a&per_page=5&page=1`)
      .pipe(map((rep: any) => rep.items.map((repos: any) => ({name: repos.name, node_id: repos.node_id, url: repos.url}))))
      .subscribe(res => {
        this.repositories = res;
      });*/

    return this.repositories;
  }

  addUsers(users: Data[]) {
    users.forEach(i => {
      this.users.push(i);
    });
  }

  removeUsers() {
    this.users.length = 0;
  }

  getGitHubCommits(userName: string, reposName: string): Data [] {
    /*this.http.get(`https://api.github.com/repos/${userName}/${reposName}/commits?q=a&per_page=10&page=20`)
      .pipe(map((rep: any) => rep.items.map((commit: any) => ({message: commit.message, node_id: commit.node_id, url: commit.url}))))
      .subscribe(res => {
        this.commits = res;
      });*/

    return this.commits;
  }
}
