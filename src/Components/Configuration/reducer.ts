// Interfaces
import { ConfState, ConfAction } from '../../interfaces';

export const initialState = {
  search: {
    query: '',
    email: '',
    price: {
      min: 0,
      max: 'no-limit',
    },
  },
  sort: {
    sortBy: '',
    direction: 'asc',
  },
  displayFavs: false,
};

export const confReducer = (state: ConfState, action: ConfAction) => {
  switch (action.type) {
    case 'search':
      return {
        ...state,
        search: { ...action.payload },
      };
    case 'sort':
      return {
        ...state,
        sort: { ...action.payload },
      };
    case 'reset':
      return {
        ...state,
        search: { ...initialState.search },
      };
    case 'displayFavs':
      return {
        ...state,
        displayFavs: action.payload,
      };
    default:
      return state;
  }
};
