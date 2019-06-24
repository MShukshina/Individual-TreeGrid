export class Data {
  name: string;
  nodeId: string;
  url: string;
  type: string;
  child: Data [];

  constructor(name, nodeId, url, type, child) {
    this.name = name;
    this.nodeId = nodeId;
    this.url = url;
    this.type = type;
    this.child = child;
  }
}
