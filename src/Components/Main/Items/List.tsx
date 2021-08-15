import { FC } from 'react';

// Context
import { useGetDataContext } from '../ItemsContext/useGetDataContext';

// Components
import Message from '../../Message';
import ItemComp from './Item';

// Interfaces
import { Item, Items } from '../../../interfaces';

const List: FC<{ items?: Items; layout: string; notFoundMsg: string }> = ({
  items,
  layout,
  notFoundMsg,
}) => {
  const { setFavourites } = useGetDataContext();

  if (!items?.length) {
    return <Message message={notFoundMsg} />;
  }

  return (
    <ul className='items__list' data-testid='list-element'>
      {items?.map((item: Item) => (
        <ItemComp
          key={`${layout}-${item.id}`}
          item={item}
          layout={layout}
          isFavourite={item.fav}
          setFavourite={setFavourites}
        />
      ))}
    </ul>
  );
};

export default List;
