import React from 'react'
import NavBar from '../components/NavBar';
import TodoList from '../components/ActiveTodoList';
import CompletedTodoList from '../components/CompletedTodoList';

const CompletedTodos = () => {
  return (
		<div>
			<NavBar></NavBar>
			<h1 className=" text-center text-5xl p-4">Completed Todos</h1>
			<div className="container mb-2 flex mx-auto w-full items-center justify-center">
				<ul className="flex flex-col p-4">
					<CompletedTodoList
                        dateTime="dateTime"
                        deleteTodo={() => console.log('delete')}
                        id={1}
                        todo="todo"
                    ></CompletedTodoList>
				</ul>
			</div>
		</div>
  );
}

export default CompletedTodos