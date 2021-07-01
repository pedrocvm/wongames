import { renderWithTheme } from 'utils/tests/helpers';

import Empty from '.';

describe('<Empty />', () => {
  it('should render correctly', () => {
    renderWithTheme(<Empty />);
  });
});
