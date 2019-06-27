import {Component, EventEmitter, Input, OnInit, Output, ɵgetDebugNode__POST_R3__} from '@angular/core';

@Component({
  selector: 'app-node-tree',
  templateUrl: './node-tree.component.html',
  styleUrls: ['./node-tree.component.css']
})
export class NodeTreeComponent implements OnInit {

  @Input() nodes;
  @Output() openedChild = new EventEmitter<NodeTreeComponent>();

  constructor() {
  }

  ngOnInit() {
  }

  openChildren(node) {
    this.openedChild.emit(node);
  }

  openOrCloseChildren(node, isOpend) {
    if (!isOpend) {
      this.openChildren(node);
    }
    node.isOpened = !node.isOpened;
  }
}
