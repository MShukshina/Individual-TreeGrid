export class Data {
  parent: string;
  name: string;
  nodeId: string;
  url: string;
  type: string;
  child: Data [];

  constructor(parent, name, nodeId, url, type, child) {
    this.parent = parent;
    this.name = name;
    this.nodeId = nodeId;
    this.url = url;
    this.type = type;
    this.child = child;
  }
}
