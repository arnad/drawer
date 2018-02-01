import React      from 'react';
import enzyme     from 'enzyme';

import { Drawer, BasicView, DetailView } from '../index';

const { shallow } = enzyme;

describe('Drawer Suite',() => {

  const wrapper = shallow(<Drawer drawerHandler={() => {}}><BasicView><p>hi</p></BasicView><DetailView><p>there</p></DetailView></Drawer>);

  it('shallowly renders the component', function () {
    expect(wrapper.getElement(0).type).toEqual('div');
  });

});
