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
      .pipe(map((us: any) => us.items.map((user: any) => ({
        name: user.login, nodeId: user.node_id, url: user.html_url, type: 'isUser', child: []
      }))))
      .subscribe(res => {
        this.data = res;
        this.removeUsers();
        this.addUsers(this.data);
      });
    return this.users;
  }

  getGitHubRepositories(userName): Data[] {
    this.http.get(`https://api.github.com/users/${userName}/repos?q=a&per_page=5&page=1`)
      .pipe(map((rep: any) => rep.map((repos: any) => (
        {name: repos.name, nodeId: repos.node_id, url: repos.html_url, type: 'isRepos', child: []
        }))))
      .subscribe(res => {
        this.data = res;
        this.removeRepositories(userName);
        this.addRepositories(this.data, userName);
      });
    return this.repositories;
  }

  getGitHubCommits(userName: string, reposName: string): Data [] {
    this.http.get(`https://api.github.com/repos/${userName}/${reposName}/commits?q=a&per_page=5&page=1`)
      .pipe(map((rep: any) => rep.map((commit: any) => (
        {message: commit.message, node_id: commit.node_id, url: commit.url,  type: 'isCommit', child: []
        }))))
      .subscribe(res => {
        this.data = res;
        this.removeCommits(userName, reposName);
        this.addCommits(this.data, userName, reposName);
      });
    return this.commits;
  }

  addUsers(users: Data[]) {
    users.forEach(i => {
      this.users.push(i);
    });
  }

  removeUsers() {
    this.users.length = 0;
  }

  addRepositories(repositories: Data[], userName: string) {
    this.users.forEach(user => {
      if (user.name === userName) {
        repositories.forEach(repos => {
          user.child.push(repos);
        });
      }
    });
  }

  removeRepositories(userName: string) {
    this.users.forEach(user => {
      if (user.name === userName) {
        user.child.length = 0;
      }
    });
  }

  addCommits(commits: Data[], userName: string, reposName: string) {
    this.users.forEach(user => {
      if (user.name === userName) {
        user.child.forEach( repos => {
          if (repos.name === reposName) {
            commits.forEach(commit => {
              repos.child.push(commit);
            });
          }
        });
      }
    });
  }

  removeCommits(userName: string, reposName: string) {
    this.users.forEach(user => {
      if (user.name === userName) {
        user.child.forEach( repos => {
          if (repos.name === reposName) {
            repos.child.length = 0;
          }
        });
      }
    });
  }
}
