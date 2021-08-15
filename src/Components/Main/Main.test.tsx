import { render, screen } from '@testing-library/react';

// Hooks
import { useFetchItems } from './useFetchItems';
import { useGetConfiguration } from '../Configuration/useGetConfiguration';

// Components
import MainComp from './Main';

// Mock
import { data } from '../../mocks/items';
import { initialState } from '../Configuration/reducer';

jest.mock('./useFetchItems', () => ({
  useFetchItems: jest.fn(),
}));

jest.mock('../Configuration/useGetConfiguration', () => ({
  useGetConfiguration: jest.fn(),
}));

describe('Render Items', () => {
  beforeEach(() => {
    (useFetchItems as any).mockImplementation(() => ({}));
    (useGetConfiguration as any).mockImplementation(() => ({}));
    jest.spyOn(console, 'error').mockImplementation(() => ({}));
  });

  it('Should render a loading message', () => {
    (useFetchItems as any).mockImplementation(() => ({
      isLoading: true,
    }));

    render(<MainComp />);

    const loadingMessage = screen.getByText('Loading');
    expect(loadingMessage).toBeInTheDocument();
  });

  it('Should render an error message', () => {
    (useFetchItems as any).mockImplementation(() => ({
      isLoading: false,
      isError: true,
    }));

    render(<MainComp />);

    const loadingMessage = screen.getByText(
      'There has been an error loading the data, please refresh to try again'
    );
    expect(loadingMessage).toBeInTheDocument();
  });

  it('Should render a full List', () => {
    (useFetchItems as any).mockImplementation(() => ({
      isLoading: false,
      isError: false,
      items: data.items,
    }));

    (useGetConfiguration as any).mockImplementation(() => ({
      conf: initialState,
    }));

    render(<MainComp />);

    const listEl = screen.getByTestId('list-element');

    expect(listEl).toBeInTheDocument();
  });
});
