import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { emptyTodos, fetchTodos } from '../redux/slices/todoSlice';

const FetchPage = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todo)
    return (
        <div>
            <Link to="/"><button style={{ marginRight: '200px' }}>Home</button></Link>
            <button onClick={e => dispatch(fetchTodos())}>Fetch API Redux</button>
            <button onClick={e => dispatch(emptyTodos())}>Empty Todos</button>

            {
                todos.isLoading ?
                    <div>
                        <h3>isLoading...</h3>
                    </div>
                    :
                    todos.isError ?
                        <div>
                            <h3 style={{ color: 'red' }}>Error</h3>
                        </div>
                        :
                        <ol>
                            {
                                todos?.data?.map(todo => <li>{todo.title}</li>)
                            }
                        </ol>
            }
        </div>
    );
}

export default FetchPage;
