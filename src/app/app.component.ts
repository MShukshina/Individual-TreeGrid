import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {GitHubDataService} from './gitHubData.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'individual-tree-grid';

  public counterPage: number[];
  public countItems: number;
  public countItemsOnPage: number;

  constructor(private gitHubDataService: GitHubDataService) {}

  ngOnInit() {
    this.countItemsOnPage = this.gitHubDataService.getCountItemsOnPage();

    console.log('app OnInit');
    console.log('countItemsOnPage', this.countItemsOnPage);
  }

  onCountItemsOnPageChange() {
    this.countItemsOnPage = this.gitHubDataService.getCountItemsOnPage();
    /*this.setCountOnPage(countItemsOnPage);*/

    console.log('app change count');
    console.log('countItemsOnPage', this.countItemsOnPage);

    this.countItems = this.gitHubDataService.getCountItems();

    this.counterPage = this.gitHubDataService.getCounterPage();
    this.updateCounterPage();
  }

  updateCounterPage() {
    this.counterPage.length = 0;
    for (let i = 1; i <= this.countItems / this.countItemsOnPage; i++) {
      this.counterPage.push(i);
    }
  }

  /*setCountOnPage(countItemsOnPage: number) {
    this.gitHubDataService.setCountItemsOnPage(countItemsOnPage);
    this.countItemsOnPage = this.gitHubDataService.getCountItemsOnPage();
  }*/

}
