import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';
import {Data} from './tree-grid/Data';
import {Observable} from 'rxjs';
import {GitHubDataService} from './gitHubData.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private data;
  private users: Data[] = [];
  private repositories: Data[] = [];
  private commits: Data[] = [];
  private countItemsOnPage = 5;
  private countUserItems = 5;
  private countRepositoriesItems = 5;
  private countCommitItems = 5;
  private countItems = this.countUserItems * this.countRepositoriesItems * this.countCommitItems;
  private currentPage = 1;
  private counterItemOnPage = 0;

  public counterPage: number[] = [];

  constructor(private gitHubDataService: GitHubDataService) { }

  getCounterItemOnPage(): number {
    return this.counterItemOnPage;
  }

  setCounterItemOnPage(counterItemOnPage: number) {
     this.counterItemOnPage = counterItemOnPage;
  }

  getCounterPage(): number[] {
    return this.counterPage;
  }

  getCurrentPage(): number {
    return this.currentPage;
  }

  setCurrentPage(current: number) {
    this.currentPage = current;
  }

  getCountItems(): number {
    return this.countItems;
  }

  getCountItemsOnPage(): number {
    return this.countItemsOnPage;
  }

  setCountItemsOnPage(countItemsOnPage: number) {
    this.countItemsOnPage = countItemsOnPage;
  }

  getUsers(): Observable<Data[]> {
    return this.gitHubDataService.getGitHubUsers(this.countUserItems)
      .pipe(
        map((res) => {
          this.data = res;
          this.removeUsers();
          this.addUsers(this.data);
          return this.users;
        })
      );
  }

  getRepositories(userName: string): Observable<Data[]> {
    return this.gitHubDataService.getGitHubRepositories(userName, this.countRepositoriesItems)
      .pipe(
        map((res) => {
          this.data = res;
          this.removeRepositories(userName);
          this.addRepositories(this.data, userName);
          return this.repositories;
        })
      );
  }

  getCommits(userName: string, reposName: string): Observable<Data[]> {
    return this.gitHubDataService.getGitHubCommits(userName, reposName, this.countCommitItems)
      .pipe(
        map((res) => {
          this.data = res;
          this.removeCommits(userName, reposName);
          this.addCommits(this.data, userName, reposName);
          return this.commits;
        })
      );
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
