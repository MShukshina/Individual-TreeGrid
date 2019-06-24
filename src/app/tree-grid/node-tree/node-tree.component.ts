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

  openChildren(node, target) {
    if (node.type === 'isUser') {
      this.gitHubRepositories = this.gitHubDataService.getGitHubRepositories(node.name);
    } else {
      /*const tr = target.parentElement;
      const div = tr.parentElement;
      const repos = div.parentElement;
      const user = repos.parentElement;
      console.log(user);*/
      this.gitHubCommits = this.gitHubDataService.getGitHubCommits('A', node.name);
    }
    node.isOpened = !node.isOpened;
  }

}
