import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {GitHubDataService} from '../gitHubData.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() countItemsOnPageChange = new EventEmitter();

  public countItemsOnPage: number;

  constructor(private gitHubDataService: GitHubDataService) { }

  ngOnInit() {
  }

  onCountItemsOnPageChange(target) {
    const countItemsOnPage = target.value;
    this.setCountOnPage(countItemsOnPage);

    this.countItemsOnPageChange.emit();
  }


  setCountOnPage(countItemsOnPage: number) {
    this.gitHubDataService.setCountItemsOnPage(countItemsOnPage);
    this.countItemsOnPage = this.gitHubDataService.getCountItemsOnPage();

    this.gitHubDataService.setCurrentPage(1);
  }

}
