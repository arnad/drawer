import React              from 'react';
import { shallow, mount } from 'enzyme';

import { Drawer, BasicView, DetailView } from '../index';
import DrawerPortal from '../src/js/DrawerPortal';

const text = {
                headerTitle       : "Basic Title",
                closeButtonSRText : "Close",
                backButtonText    : "Back",
             };


describe('Drawer Suite',() => {

  it('shallowly renders the component', () => {
    const wrapper = shallow(<Drawer drawerHandler={() => {}} appRootId="dummy"><BasicView><p>hi</p></BasicView><DetailView><p>there</p></DetailView></Drawer>);
    expect(wrapper.find(DrawerPortal).exists()).toEqual(true);
    expect(wrapper.find(BasicView).exists()).toEqual(true);
    expect(wrapper.find(DetailView).exists()).toEqual(true);
  });

  // it('shallowly renders the component', () => {
  //   const wrapper = mount( <Drawer
  //                             drawerTop     = "61px"
  //                             drawerOpen    = {true}
  //                             position      = "right"
  //                             text          = {text}
  //                             drawerHandler = {() => {}}>
  //                             <div>
  //                               <BasicView mapToDetail='detailView1' myKind="BasicView">
  //                                 <p>hi</p>
  //                               </BasicView>
  //                               <DetailView id="detailView1" myKind="BasicView">
  //                                 <p>there</p>
  //                               </DetailView>
  //                             </div>
  //                          </Drawer>);
  //
  //   console.log(wrapper.instance())
  // });
  //
  // it('should handle the inputKeyEvents esc key', function() {
  //     this.wrapper = mount(<Drawer drawerTop = "61px" drawerOpen = {true} position = "right" text = {text} drawerHandler = {() => {}}> <div> <BasicView mapToDetail='detailView1' myKind="BasicView"> <p>hi</p> </BasicView> <DetailView id="detailView1" myKind="BasicView"> <p>there</p> </DetailView> </div> </Drawer>);
  //     const e = {"which":27};
  //     this.wrapper.instance().drawerHandleKeys(e);
  //     // expect(this.wrapper.find('ul').exists()).toEqual(false);
  // });

});
