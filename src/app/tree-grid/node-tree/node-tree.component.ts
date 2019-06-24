import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-node-tree',
  templateUrl: './node-tree.component.html',
  styleUrls: ['./node-tree.component.css']
})
export class NodeTreeComponent implements OnInit {


  @Input() users;

  constructor() { }

  ngOnInit() {
  }

}
