import { Injectable } from '@angular/core';
import {catchError, map} from 'rxjs/operators';
import {throwError} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: HttpClient) { }

  getGitHubCommits(userName: string, reposName: string, countCommitItems: number) {
    return this.http.get(`https://api.github.com/repos/${userName}/${reposName}/commits?q=a&per_page=${countCommitItems}&page=1`)
      .pipe(map((rep: any) => rep.map((commit: any) => ({
          parent: reposName, name: commit.commit.message, nodeId: commit.node_id, url: commit.html_url,  level: 3, child: []
        })),
        catchError((error) => {
          console.error(error.message);
          return throwError('Error thrown from catchError');
        })));
  }

  getGitHubRepositories(userName: string, countRepositoriesItems: number) {
    return this.http.get(`https://api.github.com/users/${userName}/repos?q=a&per_page=${countRepositoriesItems}&page=1`)
      .pipe(map((rep: any) => rep.map((repos: any) => ({
          parent: userName, name: repos.name, nodeId: repos.node_id, url: repos.html_url, level: 2, child: []
        })),
        catchError((error) => {
          console.error(error.message);
          return throwError('Error thrown from catchError');
        })));
  }

  getGitHubUsers(countUserItems: number) {
    return this.http.get(`https://api.github.com/search/users?q=a&per_page=${countUserItems}&page=1`)
      .pipe(map((us: any) => us.items.map((user: any) => ({
          parent: null, name: user.login, nodeId: user.node_id, url: user.html_url, level: 1, child: []
        })),
        catchError((error) => {
          console.error(error.message);
          return throwError('Error thrown from catchError');
        })));
  }
}
