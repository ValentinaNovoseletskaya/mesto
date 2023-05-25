export default class Section {
    constructor({items, renderer}, containerSelector) {
        this._renderedItems = items;
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }
    clear() {
        this._container.innerHTML = '';
    }
    
    renderItems() {
        this.clear();
        this._renderedItems.forEach(this._renderer);
    }

    addItem(item){
        this._container.prepend(item);
    }
}