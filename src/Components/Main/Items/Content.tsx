// Context
import { useGetDataContext } from '../ItemsContext/useGetDataContext';

// Components
import List from './List';
import Modal from '../Favourites/Modal';

// Styles
import './Items.scss';

const Content = () => {
  const { items, setNextSet, displayPagination, displayFavs } =
    useGetDataContext();

  const layout = 'full';
  const notFoundMsg =
    "Sorry we could't find what you were looking for, try another search";

  return (
    <>
      <div className='grid-container'>
        <List items={items} notFoundMsg={notFoundMsg} layout={layout} />

        {displayPagination && (
          <button
            type='button'
            name='Next Set'
            className='items__pagination'
            onClick={setNextSet}
          >
            Next set
          </button>
        )}
      </div>

      {displayFavs && <Modal />}
    </>
  );
};

export default Content;
