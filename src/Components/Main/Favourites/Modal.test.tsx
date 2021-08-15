import { fireEvent, render, screen } from '@testing-library/react';

// Context
import { useModal } from './useModal';

// Components
import Modal from './Modal';

// Mock
import { data } from '../../../mocks/items';

jest.mock('./useModal', () => ({
  useModal: jest.fn(),
}));
describe('Render Modal', () => {
  beforeEach(() => {
    (useModal as any).mockImplementation(() => ({}));
    jest.spyOn(console, 'error').mockImplementation(() => ({}));
  });

  it('Should open the modal with items', () => {
    (useModal as any).mockImplementation(() => ({ favourites: data.items }));

    render(<Modal />);

    const notFound = screen.queryByText(
      'If you favourite some items they will display here!'
    );

    expect(notFound).toBeNull();
  });

  it('Should open the modal without items', () => {
    (useModal as any).mockImplementation(() => ({ favourites: [] }));

    render(<Modal />);

    const notFound = screen.getByText(
      'If you favourite some items they will display here!'
    );

    expect(notFound).toBeInTheDocument();
  });

  it('Should close the modal when clicked', () => {
    const closeModal = jest.fn();

    (useModal as any).mockImplementation(() => ({
      favourites: [],
      closeModal,
    }));

    render(<Modal />);

    const button = screen.getByRole('button', { name: 'Close Modal' });

    fireEvent.click(button);

    expect(closeModal).toHaveBeenCalledTimes(1);
  });
});
