import ListItem from "./ListItem";

interface List {
  list: ListItem[],
  load(): void,
  save(): void,
  clear(): void,
  addItem(itemObj: ListItem): void,
  removeItem(id: string): void
}