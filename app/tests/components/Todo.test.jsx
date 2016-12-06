var React = require('react'),
    ReactDOM = require('react-dom'),
    expect = require('expect'),
    $ = require('jQuery'),
    TestUtils = require('react-addons-test-utils'),
    Todo = require('Todo');

// Start test
describe('Todo', () => {
  it('should exist', () => {
    expect(Todo).toExist();
  });

  it('should call onToggle prop with id onClick', () => {
    var todoData = {
      id: 199,
      text: 'Write todo.test.jsx test',
      completed: false
    };
    var spy = expect.createSpy();
    var todo = TestUtils.renderIntoDocument(<Todo {...todoData} onToggle={spy}/>);
    var $el = $(ReactDOM.findDOMNode(todo));

    TestUtils.Simulate.click($el[0]);
    expect(spy).toHaveBeenCalledWith(199);

  });
});
