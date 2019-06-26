import {Component, Input, OnInit} from '@angular/core';
import {Data} from '../Data';
import {DataService} from '../../data.service';

@Component({
  selector: 'app-node-tree',
  templateUrl: './node-tree.component.html',
  styleUrls: ['./node-tree.component.css']
})
export class NodeTreeComponent implements OnInit {

  @Input() nodes;
  @Input() child;

  public repositories: Data[] = [];
  public commits: Data[] = [];
  public countItemsOnPage;
  public counterItemOnPage: number;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.countItemsOnPage = this.dataService.getCountItemsOnPage();
    this.counterItemOnPage = this.dataService.getCounterItemOnPage();
  }

  openChildren(node) {
    if (node.type === 'isUser') {
      this.getGitHubRepositories(node.name);
    } else {
      this.getGitHubCommits(node.parent, node.name);
    }
    this.setCounterItemOnPage(0);

    node.isOpened = !node.isOpened;
  }

  getGitHubCommits(parent: string, name: string) {
    this.dataService.getCommits(parent, name)
      .subscribe((res) => {
        this.commits = res;
      });
  }

  getGitHubRepositories(name: string) {
    this.dataService.getRepositories(name)
      .subscribe((res) => {
        this.repositories = res;
      });
  }

  setCounterItemOnPage(counter: number) {
    this.dataService.setCounterItemOnPage(counter);
    this.counterItemOnPage = this.dataService.getCounterItemOnPage();
  }

  /*
  displayItem() {
    this.setCounterItemOnPage(++this.counterItemOnPage);
    console.log(this.gitHubDataService.getCounterItemOnPage());

    if (this.counterItemOnPage <= this.countItemsOnPage) {
      return true;
    } else {
      return false;
    }
  }
*/
}
