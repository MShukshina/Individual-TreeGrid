import {Component, Input, OnInit} from '@angular/core';
import {Data} from '../Data';
import {GitHubDataService} from '../gitHubData.service';

@Component({
  selector: 'app-node-tree',
  templateUrl: './node-tree.component.html',
  styleUrls: ['./node-tree.component.css']
})
export class NodeTreeComponent implements OnInit {

  @Input() nodes;
  @Input() child;

  public gitHubRepositories: Data[] = [];
  public gitHubCommits: Data[] = [];

  constructor(private gitHubDataService: GitHubDataService) { }

  ngOnInit() {
  }

  openChildren(node) {
    if (node.type === 'isUser') {
      this.gitHubRepositories = this.gitHubDataService.getGitHubRepositories(node.name);
    } else {
      console.log(node);
      /*this.gitHubCommits = this.gitHubDataService.getGitHubCommits(node.name, node.name);*/
    }
    node.isOpened = !node.isOpened;
  }

}
