import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {GitHubDataService} from '../../gitHubData.service';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {

  @Output() changeCurrentPage = new EventEmitter();

  public counterPage: number[];
  public countItems: number;
  public countItemsOnPage: number;
  public currentPage: number;

  constructor(private gitHubDataService: GitHubDataService) { }

  ngOnInit() {
    this.countItems = this.gitHubDataService.getCountItems();
    this.countItemsOnPage = this.gitHubDataService.getCountItemsOnPage();
    this.currentPage = this.gitHubDataService.getCurrentPage();

    this.counterPage = this.gitHubDataService.getCounterPage();
    this.createCounterPage();

    console.log('paginator OnInit');
    console.log('countItemsOnPage', this.countItemsOnPage);
    console.log('currentPage', this.currentPage);
  }

  createCounterPage() {
    for (let i = 1; i <= this.countItems / this.countItemsOnPage; i++) {
      this.counterPage.push(i);
    }
  }

  onChangeCurrentPage(target) {
    /*const countItemsOnPage = target.innerHTML;
    console.log(countItemsOnPage);*/
    this.gitHubDataService.setCurrentPage(target.innerHTML);
    this.currentPage = this.gitHubDataService.getCurrentPage();
    this.countItemsOnPage = this.gitHubDataService.getCountItemsOnPage();
  }

}
