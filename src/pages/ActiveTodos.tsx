import React from 'react';
import NavBar from '../components/NavBar';
import ActiveTodoList from '../components/ActiveTodoList';


const ActiveTodos = () => {
  return (
		<div>
			<NavBar></NavBar>
			<div className="container mb-2 flex mx-auto w-full items-center justify-center">
				<ul className="flex flex-col p-4">
					<span className="text-black text-2xl ">Enter Todo : </span>
					<input type="text" className="mt-2 p-2 border-2 rounded-xl" />
					<button className="w-36 px-2 py-4 text-white mx-auto mb-12 mt-2 bg-green-400 rounded-xl hover:bg-green-500 text-2xl" >
						Save
					</button>

					<ActiveTodoList
                        dateTime="dateTime"
                        deleteTodo={() => console.log('delete')}
                        markCompelte={() => console.log('mark')}
                        id={1}
                        todo="todo"
                    ></ActiveTodoList>
				</ul>
			</div>
		</div>
  );
}

export default ActiveTodos;