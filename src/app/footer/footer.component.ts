import {Component, Input, OnInit} from '@angular/core';
import {GitHubDataService} from '../gitHubData.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public countItems: number;
  public countItemsOnPage: number;
  public currentPage: number;

  constructor(private gitHubDataService: GitHubDataService) { }

  ngOnInit() {
    this.countItems = this.gitHubDataService.getCountItems();
    this.countItemsOnPage = this.gitHubDataService.getCountItemsOnPage();
    this.currentPage = this.gitHubDataService.getCurrentPage();
  }

}
