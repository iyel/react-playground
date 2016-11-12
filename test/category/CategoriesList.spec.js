import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import CategoriesList from '../../src/category/components/CategoriesList';

describe('<CategoriesList />', () => {
  it('should have a header called \'Categories List\'', () => {
    const props = {
      categories: []
    };
    const wrapper = shallow(<CategoriesList {...props} />);
    const actual = wrapper.find('h2').text();
    const expected = 'Categories List';

    expect(actual).to.equal(expected);
  });

  it('should have a header with \'alt-header\' class', () => {
    const props = {
      categories: []
    };
    const wrapper = shallow(<CategoriesList {...props} />);
    const actual = wrapper.find('h2').prop('className');
    const expected = 'alt-header';

    expect(actual).to.equal(expected);
  });

  it('should render categories in list', () => {
    const props = {
      categories: [
        { id: '1d7e5732-3e84-4377-bf6c-5a9651f27f53', name: 'Bank'},
        { id: '9b2ca1f4-d59a-4740-bce4-132702b81cd2', name: 'Bar'},
        { id: 'd1fbf0a1-5c18-4be8-8025-518516429432', name: 'Gym'}
      ]
    };
    const wrapper = shallow(<CategoriesList {...props} />);
    const actual = wrapper.find('#categories-list').children().length;
    const expected = 3;

    expect(actual).to.be.equal(expected);
  });
});
