import { v4 as uuid } from 'uuid';

// Interfaces
import { FetchItemsReturn, Items } from '../../interfaces';

// Misc
import { data } from '../../_tmp/_data';

// const fetchItems = async () => await fetchData(ITEMS_ENDPOINT);

export const mappedItems = (items: Items) => {
  console.log({ items });
  return items.map((item) => ({ ...item, id: uuid(), fav: false }));
};

export const useFetchItems = (): FetchItemsReturn => {
  // const { isLoading, isError, isSuccess, data } = useQuery(
  //   'items',
  //   fetchItems,
  //   { refetchOnWindowFocus: false }
  // );
  // let items = data;

  // if (isSuccess) {
  //   items = mappedItems(data.items);
  // }

  return { isLoading: false, isError: false, items: mappedItems(data.items) };
};
