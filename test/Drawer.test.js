import React              from 'react';
import { shallow, mount } from 'enzyme';

import { Drawer, BasicView, DetailView } from '../index';

const text = {
                headerTitle       : "Basic Title",
                closeButtonSRText : "Close",
                backButtonText    : "Back",
             };


describe('Drawer Suite',() => {

  it('shallowly renders the component', () => {
    const wrapper = shallow(<Drawer drawerHandler={() => {}}><BasicView><p>hi</p></BasicView><DetailView><p>there</p></DetailView></Drawer>);
    expect(wrapper.getElement(0).type).toEqual('div');
  });

  it('shallowly renders the component', () => {
    const wrapper = mount( <Drawer
                              drawerTop     = "61px"
                              drawerOpen    = {true}
                              position      = "right"
                              text          = {text}
                              drawerHandler = {() => {}}>
                              <div>
                                <BasicView mapToDetail='detailView1' myKind="BasicView">
                                  <p>hi</p>
                                </BasicView>
                                <DetailView id="detailView1" myKind="BasicView">
                                  <p>there</p>
                                </DetailView>
                              </div>
                           </Drawer>);

    console.log(wrapper.instance())
  });

});
