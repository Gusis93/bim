export const initialInputs = [
  {
    id: 'query',
    label: 'Search Query',
    placeholder: 'Search',
    type: 'text',
  },
];

export const hiddenInputs = [
  {
    id: 'email',
    type: 'text',
    label: 'Email',
    placeholder: 'Created by',
  },
  {
    id: 'min',
    placeholder: 'Min Price',
    min: 0,
    label: 'Min Price',
    type: 'number',
  },
  {
    id: 'max',
    type: 'number',
    min: 0,
    label: 'Max Price',
    placeholder: 'Max price',
  },
];
