import React from 'react'
import AddTodoModal from './AddTodoModal.jsx';
import moment from 'moment/moment';
import { MarkTodoApi, deleteTodoApi } from '../../services/api.js';
import { toast } from 'react-toastify';

function Todo({ todo, setRefreshList }) {

    const handleDelete = async () => {
        const result = await deleteTodoApi({
            todo_id: todo._id
        });

        if (result.data.status === 200) {
            setRefreshList(new Date());
            toast('Todo deleted successfully');
        } else {
            toast('Failed to delete todo, please try again');
        }
    };

    const handleMarkTodo = async () => {
        const result = await MarkTodoApi({
            todo_id: todo._id
        });

        if (result.data.status === 200) {
            setRefreshList(new Date());
            toast(result.data.message);
        } else {
            toast('Failed to mark todo, please try again');
        }
    };

    return (
        <div className='col-sm-3 mx-3 my-2 alert bg-light'>
            <div className="card-header">
                {
                    todo.isCompleted ? 'Completed' : 'Not Completed'
                }
            </div>
            <hr></hr>
            <div className="card-body">
                <h4 className='card-title' style={{ textDecoration: todo.isCompleted ? 'line-through' : 'none' }}>{todo.desc}</h4>
                <p className='card-text' style={{ paddingTop: '10px' }}>{moment(todo.date).fromNow()}</p>

            </div>
            <hr style={{ border: '0px' }}></hr>
            <div className="actionButtons" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div className="deleteButton" >
                    <button style={{ background: 'lightyellow', borderRadius: '10px' }} onClick={handleDelete} >Delete</button>
                </div>

                <div className="markTodo">
                    <button onClick={handleMarkTodo} style={{ background: 'lightgreen ', borderRadius: '10px' }}>{todo.isCompleted ? 'Mark Incomplete' : 'Mark Completed'}</button>
                </div>
            </div>
        </div>
    )
}

export default Todo;
