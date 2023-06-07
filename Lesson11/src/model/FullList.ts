import ListItem from "./ListItem";

interface List {
  list: ListItem[],
  load(): void,
  save(): void,
  clearList(): void,
  addItem(itemObj: ListItem): void,
  removeItem(id: string): void
}

export default class FullList implements List {

static instance: FullList = new FullList()

  private constructor(
    private _list: ListItem[] =[]
  ) {}

  get list(): ListItem[] {
    return this._list;
  }

 save(): void {
    localStorage.setItem('myList', JSON.stringify(this._list));
  }

  clearList(): void {
    this._list = [];
    this.save();
  }
  addItem(itemObj: ListItem): void {
    this._list.push(itemObj);
    this.save();
  }
}