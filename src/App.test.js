import React from 'react';
import App from './App';
import sinon from 'sinon';
import { mount } from 'enzyme';

describe('<App />', () => {

  const history = {
    push: jest.fn(),
  }

  it('calls componentDidMount', () => {
    sinon.spy(App.prototype, 'componentDidMount');
    const wrapper = mount(<App history={history} />);
    expect(App.prototype.componentDidMount.calledOnce).to.equal(true);
  });

});