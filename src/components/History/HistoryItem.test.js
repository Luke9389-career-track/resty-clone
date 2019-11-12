import React from 'react';
import { shallow } from 'enzyme';
import HistoryItem from './HistoryItem';

describe('HistoryItem component', () => {
  const props = {
    handleClick: () => { },
    history: {
      url: 'ghj',
      method: 'hjk',
      headers: {},
      response: {}
    }
  };
  it('renders HistoryItem', () => {
    const wrapper = shallow(<HistoryItem {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
