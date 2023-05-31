export default class Section {
    constructor({renderer}, containerSelector) {
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }
    
    clear() {
        this._container.innerHTML = '';
    }
    
    renderItems(items) {
        this.clear();
        this._renderedItems = items;
        this._renderedItems.forEach(this._renderer);
    }

    addItem(item){
        this._container.prepend(item);
    }
}