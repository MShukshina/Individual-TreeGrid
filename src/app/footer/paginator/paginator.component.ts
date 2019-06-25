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
  }

  createCounterPage() {
    for (let i = 1; i <= this.countItems / this.countItemsOnPage; i++) {
      this.counterPage.push(i);
    }
  }

  onChangeCurrentPage(target) {
    if (target.firstChild.innerHTML === undefined) {
      this.gitHubDataService.setCurrentPage(target.innerHTML);
    } else {
      this.gitHubDataService.setCurrentPage(target.firstChild.innerHTML);
    }
    this.currentPage = this.gitHubDataService.getCurrentPage();
    this.countItemsOnPage = this.gitHubDataService.getCountItemsOnPage();
    this.changeCurrentPage.emit();
  }

  onChangeCurrentPageStart() {
    this.gitHubDataService.setCurrentPage(1);
    this.currentPage = this.gitHubDataService.getCurrentPage();
    this.changeCurrentPage.emit();
  }

  onChangeCurrentPageEnd() {
    this.gitHubDataService.setCurrentPage(this.countItems / this.countItemsOnPage);
    this.currentPage = this.gitHubDataService.getCurrentPage();
    this.changeCurrentPage.emit();
  }

  onChangeCurrentPagePrev() {
    this.gitHubDataService.setCurrentPage(this.currentPage - 1);
    this.currentPage = this.gitHubDataService.getCurrentPage();
    this.changeCurrentPage.emit();
  }

  onChangeCurrentPageNext() {
    this.gitHubDataService.setCurrentPage(+this.currentPage + 1);
    this.currentPage = this.gitHubDataService.getCurrentPage();
    this.changeCurrentPage.emit();
  }

}
