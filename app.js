let allTodos = [
    {title},
    {dueDate},
    {description},
    {isComplete}
  ];
  
function createElementFromTodo(todo) {
    // builds an element and returns it


  }
  
  function renderTodos() {
    // uses allTodos


  }

function createTodoFromForm() {

}

$('main .content').empty();


todoElement.data("todo", todo);

$('main').on('click', '.action.complete', function () {

});

$('main').on('click', '.action.complete', function () {
  // your code here

  todoElement.slideUp(function () {
    renderTodos();
  });
});

let allTodos = [
  // Already done! Your dummy todos should already be here


];

let pendingTodos, completedTodos, expiredTodos; 


// this is new

// ... 

function isCurrent(todo) {

}

function splitTodos() {

}

function isCurrent(todo) {
  const todoDueDate = new Date(todo.dueDate);
  const now = new Date();

  return now < todoDueDate;
}

let allTodos = [
  // stuff stuff stuff...
];

// ... all your beautiful code, then:

splitTodos();
renderTodos();

function createElementFromTodo(todo) {
  // no more if statement
  return $(`<div class="todo">
  <!-- your html template here, now using ternary -->
  </div>`).data('todo', todo);
}