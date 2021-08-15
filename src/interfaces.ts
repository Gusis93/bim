import React, { Dispatch } from 'react';

// Item
export interface Item {
  id?: string;
  title: string;
  description: string;
  price: string;
  email: string;
  fav?: boolean;
}

export type Items = Array<Item>;

// Hooks
export interface FetchItemsReturn {
  isLoading: boolean;
  isError: boolean;
  items: Items;
}

export interface UseFormReturn {
  advancedSearch: boolean;
  inputs: any;
  changeHandler: React.ChangeEventHandler<HTMLInputElement>;
  resetForm: () => void;
  submitHandler: React.FormEventHandler<HTMLFormElement>;
  handleCta: () => void;
}

export interface UseActionsReturn {
  onSort: React.ChangeEventHandler<HTMLSelectElement>;
  displayFavs: () => void;
}

// Context
export interface ItemsContextProps {
  items: Items;
}

export interface GetConfigurationReturn {
  conf: ConfState;
  dispatchConfiguration: Dispatch<ConfAction>;
}

// Reducer
export interface SearchPayload {
  query: string;
  email: string;
  price: {
    min: number;
    max: string | number;
  };
}

export interface SortPayload {
  sortBy: string;
  direction: string;
}
export interface ConfState {
  sort: SortPayload;
  search: SearchPayload;
  displayFavs: boolean;
}

export type ConfAction =
  | { type: 'search'; payload: SearchPayload }
  | { type: 'sort'; payload: SortPayload }
  | { type: 'reset' }
  | { type: 'displayFavs'; payload: boolean };

// Main
export interface DataPartial {
  items?: Items;
  favourites?: Items;
  setFavourites: (toFav: string) => void;
  setNextSet: () => void;
  displayPagination: boolean;
  displayFavs: boolean;
}

export interface ItemProps {
  item: Item;
  isFavourite: boolean | undefined;
  setFavourite: any;
  layout?: string;
}

// Form
export interface FormCTA {
  type: 'button' | 'submit' | 'reset' | undefined;
  value: string;
  Icon: any;
  text: string;
  clickHandler?: () => void;
  modifier?: string;
}

export interface InitialInput {
  query: string;
  email: string;
  min: string;
  max: string;
}

export interface InputInterface {
  changeHandler: React.ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
  value: string | number;
  label: string;
  type: string;
  id: string;
}
