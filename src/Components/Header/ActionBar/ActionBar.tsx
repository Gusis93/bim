import { BsHeartFill } from 'react-icons/bs';

// Hooks
import { useActions } from './useActions';

// Components
import Sort from './Sort';

// Styles
import './ActionBar.scss';

const ActionBar = () => {
  const { onSort, displayFavs } = useActions();

  return (
    <div className='grid-container actionBar__base'>
      <Sort onSort={onSort} />

      <div className='actionBar__fav'>
        <span className='actionBar__favHl'>Favourites</span>
        <button
          type='button'
          name='Open Favourites'
          aria-label='Favourites'
          onClick={displayFavs}
        >
          <BsHeartFill className='actionBar__favIcon' />
        </button>
      </div>
    </div>
  );
};

export default ActionBar;
