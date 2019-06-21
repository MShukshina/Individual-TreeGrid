import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubDataService {

  private users;
  private repositories;
  private commits;

  constructor(private http: HttpClient) { }


  getGitHubUsers(){
    return this.http.get('https://api.github.com/search/users?q=a&per_page=10&page=20')
      .pipe(map((rep: any) => rep.items.map((user: any) =>({login: user.login, id: user.id, node_id: user.node_id, url: user.url})))
          .subscribe(res => {
            this.users = res;
  }

  getGitHubRepositories() {
    return this.repositories;
  }

  getGitHubCommits() {
    return this.commits;
  }
}
