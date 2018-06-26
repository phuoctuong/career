import React from 'react';
import { mount } from 'enzyme';
import Header from '../../src/components/Header';

function setup() {
  const props = {
    addTodo: jest.fn()
  };

  const enzymeWrapper = mount(<Header {...props} />);
  return {
    props,
    enzymeWrapper
  };
}

describe('Components', () => {
  describe('Header', () => {
    it('should render self and subcomponents', () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper.find('header').hasClass('header')).toBe(true);
      expect(enzymeWrapper.find('h1').text()).toBe('todos');
      const spanUpdateProps = enzymeWrapper.find('SpanUpdate').props();
      expect(spanUpdateProps.placeholder).toEqual('Span Update placeholder');
    });

    it('should call handleChange if length of text is greater tha 0', () => {
      const { enzymeWrapper, props } = setup();
      const input = enzymeWrapper.find('SpanUpdate');
      input.props().handleChange('');
      expect(props.addTodo.mock.call).toHaveLength(0);
      input.props().handleChange('User Redux');
      expect(props.addTodo.mock.call).toHaveLength(1);
    });
  });
});
