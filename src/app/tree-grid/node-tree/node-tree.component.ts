import {Component, Input, OnInit} from '@angular/core';
import {Data} from '../Data';
import {GitHubDataService} from '../../gitHubData.service';

@Component({
  selector: 'app-node-tree',
  templateUrl: './node-tree.component.html',
  styleUrls: ['./node-tree.component.css']
})
export class NodeTreeComponent implements OnInit {

  @Input() nodes;
  @Input() child;
  @Input() countItemsOnPage;

  public gitHubRepositories: Data[] = [];
  public gitHubCommits: Data[] = [];

  constructor(private gitHubDataService: GitHubDataService) { }

  ngOnInit() {
  }

  openChildren(node, target) {
    if (node.type === 'isUser') {
      this.gitHubRepositories = this.gitHubDataService.getGitHubRepositories(node.name);
    } else {
      this.gitHubCommits = this.gitHubDataService.getGitHubCommits(node.parent, node.name);
    }
    node.isOpened = !node.isOpened;
  }

}
