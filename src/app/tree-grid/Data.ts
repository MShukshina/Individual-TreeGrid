export class Data {
  parent: string;
  name: string;
  nodeId: string;
  url: string;
  level: number;
  child: Data [];

  constructor(parent, name, nodeId, url, level, child) {
    this.parent = parent;
    this.name = name;
    this.nodeId = nodeId;
    this.url = url;
    this.level = level;
    this.child = child;
  }
}
