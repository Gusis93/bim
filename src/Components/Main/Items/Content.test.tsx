import { render, screen } from '@testing-library/react';

// Context
import { getQueriedItems, getSortedItems } from '../../../utils/filterUtils';

// Components
import List from './List';

// Mock
import { data } from '../../../mocks/items';
import { initialState } from '../../Configuration/reducer';

describe('Content rendering', () => {
  it('Should filter when searched', () => {
    const search = {
      query: 'iphone',
      email: '',
      price: {
        min: 0,
        max: 'no-limit',
      },
    };

    const queriedItems = getQueriedItems(data.items, {
      ...initialState,
      search,
    });

    render(<List items={queriedItems} layout='full' notFoundMsg='Not Found' />);
    const items = screen.getAllByRole('listitem');
    expect(items).toHaveLength(1);
  });

  it('Should sort by price', () => {
    const sort = {
      sortBy: 'price',
      direction: 'asc',
    };

    const sortedItems = getSortedItems(data.items, {
      ...initialState,
      sort,
    });

    render(<List items={sortedItems} layout='full' notFoundMsg='Not Found' />);
    const items = screen.getAllByRole('listitem');
    expect(items[0]).toHaveTextContent('Polaroid 635');
  });

  it('Should render a not found message', () => {
    const search = {
      query: 'not included',
      email: '',
      price: {
        min: 0,
        max: 'no-limit',
      },
    };

    const queriedItems = getQueriedItems(data.items, {
      ...initialState,
      search,
    });

    render(<List items={queriedItems} layout='full' notFoundMsg='Not Found' />);
    const notFound = screen.getByText('Not Found');
    expect(notFound).toBeInTheDocument();
  });
});
