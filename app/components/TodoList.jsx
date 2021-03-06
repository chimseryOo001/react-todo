var React = require('react'),
    {connect} = require('react-redux');

import Todo from 'Todo';
var TodoAPI = require('TodoAPI');

// Create Todolist component
export var TodoList = React.createClass({
  render: function() {
    // get todos array as a prop passed from TodoApp
    var {todos, showCompleted, searchText} = this.props;
    var renderTodos = () => {
      if(todos.length === 0) {
        return (
          <p className="container__message">Nothing To Do</p>
        );
      }
      return TodoAPI.filterTodos(todos, showCompleted, searchText).map((todo) => {
        return(
          <Todo key={todo.id} {...todo}/>
        )
      });
    };

    return(
      <div>
        {renderTodos()}
      </div>
    );
  }
});

// export TodoList component
export default connect(
  (state) => {
    return state;
  }
)(TodoList);
