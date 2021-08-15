import { Item, Items, ConfState } from '../interfaces';
import { normalizeString } from './normalizeString';

const matchPrice = (item: Item, price: any) => {
  const itemPrice = item.price;
  const { min, max } = price;
  const isAboveMin = itemPrice > min;

  if (max !== 'no-limit') {
    return itemPrice >= min && itemPrice <= max;
  }

  return isAboveMin;
};

const matchTitleAndDescription = (item: Item, query: string) => {
  const normalizedTitle = normalizeString(item.title);
  const normalizedDescription = normalizeString(item.description);

  return (
    normalizedTitle.includes(query) || normalizedDescription.includes(query)
  );
};

const matchEmail = (item: Item, email: string) => item.email.includes(email);

export const getQueriedItems = (items: Items, conf: ConfState) => {
  const {
    search: { query, email, price },
  } = conf;

  const filterItems = items.filter((item: Item) => {
    const matchesTitleAndDescription = matchTitleAndDescription(item, query);
    const matchesEmail = matchEmail(item, email);
    const matchesPrice = matchPrice(item, price);

    return matchesTitleAndDescription && matchesEmail && matchesPrice;
  });

  return filterItems;
};

export const getSortedItems = (items: Items, conf: ConfState) => {
  const {
    sort: { sortBy, direction },
  } = conf;

  const sortByPrice = (a: any, b: any) =>
    parseInt(a[sortBy]) - parseInt(b[sortBy]);

  let sortFunction = sortByPrice;

  if (sortBy !== 'price') {
    sortFunction = (a: any, b: any) =>
      a[sortBy] < b[sortBy] ? -1 : a > b ? 1 : 0;
  }

  const sortedItems = [...items].sort(sortFunction);

  return direction === 'asc' ? sortedItems : sortedItems.reverse();
};
