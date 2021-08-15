import { useState, createContext, FC, useEffect, useMemo } from 'react';

// Misc
import { getQueriedItems, getSortedItems } from '../../../utils/filterUtils';
import { PAGE_SIZE } from '../../../constants';

// Interfaces
import { ItemsContextProps, DataPartial } from '../../../interfaces';
import { useGetConfiguration } from '../../Configuration/useGetConfiguration';

export const FinalDataContext = createContext<Partial<DataPartial>>({});

export const FinalDataProvider: FC<ItemsContextProps> = ({
  children,
  items,
}) => {
  const { conf } = useGetConfiguration();
  const [originalItems, setOriginalItems] = useState(items);
  const [finalItems, setFinalItems] = useState(items);
  const [displayNumber, setDisplayNumber] = useState(PAGE_SIZE);

  useEffect(() => {
    const queriedItems = getQueriedItems(originalItems, conf);

    setFinalItems(queriedItems);
  }, [conf.search]);

  useEffect(() => {
    const sortedItems = [...getSortedItems(finalItems, conf)];
    setFinalItems(sortedItems);
  }, [conf.sort]);

  const setFavourites = (toFav: string) => {
    const favItems = originalItems.map((item) => {
      if (item.id === toFav) {
        item.fav = !item.fav;
      }

      return item;
    });

    setOriginalItems(favItems);
  };

  const getPaginatedItems = finalItems.slice(0, displayNumber);

  const setNextSet = () => setDisplayNumber(displayNumber + PAGE_SIZE);

  const displayPagination = displayNumber < finalItems.length;

  const favourites = useMemo(() => {
    return originalItems.filter((i) => i.fav);
  }, [originalItems]);

  return (
    <FinalDataContext.Provider
      value={{
        items: getPaginatedItems,
        favourites,
        setFavourites,
        displayPagination,
        setNextSet,
        displayFavs: conf.displayFavs,
      }}
    >
      {children}
    </FinalDataContext.Provider>
  );
};
