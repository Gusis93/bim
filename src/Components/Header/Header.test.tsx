import { fireEvent, render, screen } from '@testing-library/react';

// Context
import { useForm } from './SearchForm/useForm';

// Components
import Form from './SearchForm/SearchForm';

jest.mock('./SearchForm/useForm', () => ({
  useForm: jest.fn(),
}));

const inputs = {
  query: '',
  email: '',
  min: '',
  max: '',
};

describe('Render Header', () => {
  beforeEach(() => {
    (useForm as any).mockImplementation(() => ({}));
    jest.spyOn(console, 'error').mockImplementation(() => ({}));
  });

  it('Should have inputs rendered', () => {
    (useForm as any).mockImplementation(() => ({ inputs }));

    render(<Form />);

    const form = screen.getByRole('search');

    expect(form).toBeInTheDocument();
  });

  it('Should have expand the advanced search', () => {
    const handleCta = jest.fn();

    (useForm as any).mockImplementation(() => ({ inputs, handleCta }));

    render(<Form />);

    const button = screen.getByRole('button', { name: 'Advanced' });

    fireEvent.click(button);

    expect(handleCta).toHaveBeenCalledTimes(1);
  });

  it('Should submit correctly', () => {
    const submitHandler = jest.fn();

    (useForm as any).mockImplementation(() => ({ inputs, submitHandler }));

    render(<Form />);

    const form = screen.getByRole('search');

    fireEvent.submit(form);

    expect(submitHandler).toHaveBeenCalledTimes(1);
  });
});
