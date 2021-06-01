import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Email } from '@styled-icons/material-outlined/Email';
import { renderWithTheme } from 'utils/tests/helpers';

import TextField from '.';

describe('<TextField />', () => {
  it('Should render with Label', () => {
    renderWithTheme(<TextField label="Label" labelFor="Field" id="Field" />);

    expect(screen.getByLabelText('Label')).toBeInTheDocument();
  });

  it('Should render without Label', () => {
    renderWithTheme(<TextField />);

    expect(screen.queryByLabelText('Label')).not.toBeInTheDocument();
  });

  it('Should render with placeholder', () => {
    renderWithTheme(<TextField placeholder="hey you" />);

    expect(screen.getByPlaceholderText('hey you')).toBeInTheDocument();
  });

  it('Should changes its value when typing', async () => {
    const onInput = jest.fn();
    renderWithTheme(
      <TextField
        onInput={onInput}
        label="TextField"
        labelFor="TextField"
        id="TextField"
      />
    );

    const input = screen.getByRole('textbox');
    const text = 'This is my new text';
    userEvent.type(input, text);

    await waitFor(() => {
      expect(input).toHaveValue(text);
      expect(onInput).toHaveBeenCalledTimes(text.length);
    });
    expect(onInput).toHaveBeenCalledWith(text);
  });

  it('Should render with Icon', () => {
    renderWithTheme(<TextField icon={<Email data-testid="icon" />} />);

    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  it('Should render with Icon on the right side', () => {
    renderWithTheme(
      <TextField icon={<Email data-testid="icon" />} iconPosition="right" />
    );

    expect(screen.getByTestId('icon').parentElement).toHaveStyle({ order: 1 });
  });

  it('Should render a disabled input', async () => {
    const onInput = jest.fn();

    renderWithTheme(
      <TextField
        onInput={onInput}
        label="TextField"
        name="TextField"
        disabled
      />
    );

    const input = screen.getByRole('textbox');
    expect(input).toBeDisabled();

    const text = 'This is my new text';
    userEvent.type(input, text);

    await waitFor(() => {
      expect(input).not.toHaveValue(text);
    });

    expect(onInput).not.toHaveBeenCalled();
  });

  it('Should render a input accessible by tab', () => {
    renderWithTheme(
      <TextField label="TextField" labelFor="TextField" id="TextField" />
    );

    const input = screen.getByRole('textbox');
    expect(document.body).toHaveFocus();

    userEvent.tab();
    expect(input).toHaveFocus();
  });

  it('Should render a input not accessible by tab when disabled', () => {
    renderWithTheme(<TextField label="TextField" name="TextField" disabled />);

    const input = screen.getByRole('textbox');
    expect(document.body).toHaveFocus();

    userEvent.tab();
    expect(input).not.toHaveFocus();
  });

  it('Should render a error message', () => {
    const errorMessage = 'Ops... Something is wrong';

    const { container } = renderWithTheme(
      <TextField
        label="TextField"
        labelFor="TextField"
        icon={<Email data-testid="icon" />}
        error={errorMessage}
      />
    );

    expect(screen.queryByText(errorMessage)).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
