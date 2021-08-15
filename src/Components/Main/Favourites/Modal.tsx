import { BsX } from 'react-icons/bs';

// Hooks
import { useModal } from './useModal';

// Components
import List from '../Items/List';

// Styles
import './Modal.scss';

const Modal = () => {
  const { favourites, modalFilter, filterFavs, closeModal } = useModal();

  return (
    <div className='modal__base' role='dialog' aria-labelledby='modal-hl'>
      <div className='modal__overlay'></div>
      <div className='modal__content'>
        <h1 className='is-visuallyHidden' id='modal-hl'>
          Favourites Modal
        </h1>

        <button
          type='button'
          name='Close Modal'
          aria-label="Close Modal"
          className='modal__close'
          onClick={closeModal}
        >
          <BsX />
        </button>

        <div className='grid-container'>
          <input
            type='text'
            value={modalFilter}
            onChange={filterFavs}
            placeholder='Filter Favourites'
            aria-label='Filter Favourites'
            className='modal__search'
          />

          <List
            items={favourites}
            layout='compact'
            notFoundMsg='If you favourite some items they will display here!'
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
