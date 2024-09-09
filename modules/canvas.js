class Canvas {
  constructor(id, parent, width, height) {
    this.id = id;
    this.listId = null;
    this.parent = parent;
    this.width = width;
    this.height = height;
    this.ctx = null;
  }

  create() {
    const divWrapper = document.createElement('div');
    const canvasElement = document.createElement('canvas');
    this.parent.appendChild(divWrapper);
    divWrapper.appendChild(canvasElement);

    divWrapper.id = this.id;
    canvasElement.width = this.width;
    canvasElement.height = this.height;

    const ctx = canvasElement.getContext('2d');
    this.ctx = ctx;
  }

  createReportList() {
    const list = document.createElement('ul');
    list.id = this.id + '-reporter';

    let canvasWrapper = document.getElementById(this.id);
    canvasWrapper.appendChild(list);

    this.listId = list.id;
  }
}

export { Canvas };
