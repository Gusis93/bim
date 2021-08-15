import { useEffect, useState } from 'react';

// Context
import { useGetDataContext } from '../ItemsContext/useGetDataContext';
import { useGetConfiguration } from '../../Configuration/useGetConfiguration';

// Misc
import { normalizeString } from '../../../utils/normalizeString';

export const useModal = () => {
  const { favourites } = useGetDataContext();
  const { dispatchConfiguration } = useGetConfiguration();
  const [modalFilter, setModalFilter] = useState('');

  const closeModal = () => {
    dispatchConfiguration({
      type: 'displayFavs',
      payload: false,
    });
  };

  useEffect(() => {
    // Set overflow to stop scroll
    document.body.style.overflow = 'hidden';

    // Close modal on escape key press
    const close = (e: any) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', close);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', close);
    };
  }, []);

  const filterFavs = (e: any) => {
    setModalFilter(e.target.value);
  };

  const finalFavourites = favourites?.filter((fav) =>
    normalizeString(fav.title).includes(normalizeString(modalFilter))
  );

  return {
    favourites: finalFavourites,
    modalFilter,
    filterFavs,
    closeModal,
  };
};
