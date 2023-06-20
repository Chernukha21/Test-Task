import React from 'react';


const CourseGoalItem = (props) => {
    const deleteHandler = () => {
        props.onDelete(props.id);
    };

    return (
        <li >
            {props.children}
            <button onClick={deleteHandler}>X</button>
        </li>
    );
};

export default CourseGoalItem;
