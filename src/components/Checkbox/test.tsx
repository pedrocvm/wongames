import { screen, waitFor } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';
import userEvent from '@testing-library/user-event';

import Checkbox from '.';

describe('<Checkbox />', () => {
  it('should render with label', () => {
    renderWithTheme(<Checkbox label="Checkbox" labelFor="check" />);

    expect(screen.getByRole('checkbox')).toBeInTheDocument();
    expect(screen.getByLabelText(/Checkbox/i)).toBeInTheDocument();
    expect(screen.getByText(/Checkbox/i)).toHaveAttribute('for', 'check');
  });

  it('should render without label', () => {
    const { container } = renderWithTheme(<Checkbox />);

    expect(container.querySelector('label')).not.toBeInTheDocument();
  });

  it('should render with white label by default', () => {
    renderWithTheme(<Checkbox label="Checkbox" labelFor="check" />);

    expect(screen.getByText(/Checkbox/i)).toHaveStyle({
      color: '#FAFAFA'
    });
  });

  it('should render with black label', () => {
    renderWithTheme(
      <Checkbox label="Checkbox" labelFor="check" labelColor="black" />
    );

    expect(screen.getByText(/Checkbox/i)).toHaveStyle({
      color: '#030517'
    });
  });

  it('should dispatch onCheck when status changes', async () => {
    const onCheck = jest.fn();

    renderWithTheme(
      <Checkbox label="Checkbox" labelFor="check" onCheck={onCheck} />
    );

    expect(onCheck).not.toHaveBeenCalled();

    // Mudanças de Estado sempre serão assíncronas.
    userEvent.click(screen.getByRole('checkbox'));
    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1);
    });
    expect(onCheck).toHaveBeenCalledWith(true);
  });

  it('should dispatch onCheck when status changes', async () => {
    const onCheck = jest.fn();

    renderWithTheme(
      <Checkbox label="Checkbox" labelFor="check" onCheck={onCheck} isChecked />
    );

    expect(onCheck).not.toHaveBeenCalled();

    // Mudanças de Estado sempre serão assíncronas.
    userEvent.click(screen.getByRole('checkbox'));
    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1);
    });
    expect(onCheck).toHaveBeenCalledWith(false);
  });

  it('should be accessible with tab', () => {
    renderWithTheme(<Checkbox label="Checkbox" labelFor="Checkbox" />);

    expect(document.body).toHaveFocus();

    userEvent.tab();

    expect(screen.getByLabelText(/checkbox/i)).toHaveFocus();
  });
});
