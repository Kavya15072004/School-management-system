import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStudents } from './store';
import './App.css';

function App() {
    const dispatch = useDispatch();
    const students = useSelector(state => state.students.students);

    useEffect(() => { dispatch(fetchStudents()); }, [dispatch]);

    return (
        <div className="container">
            <h1 className="title">School Management System</h1>
            <div className="grid">
                {students.map(student => (
                    <div key={student._id} className="card">
                        <h2 className="name">{student.name}</h2>
                        <p className="age">Age: {student.age}</p>
                        <p className="grade">Grade: {student.grade}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
