import { Component, OnInit } from '@angular/core';
import {GithubDataService} from './githubData.service';

@Component({
  selector: 'app-tree-grid',
  templateUrl: './tree-grid.component.html',
  styleUrls: ['./tree-grid.component.css']
})
export class TreeGridComponent implements OnInit {

  public githubData;

  constructor(private tasksSer4vice: GithubDataService) { }

  ngOnInit() {
  }

}
