import React from 'react';

const AddPlayer = (props) => {
    const add = props.add;
    const totalSalary = add.reduce((total, pl)=> total + pl.salary , 0);
    console.log(totalSalary);
    console.log(add.name);
    return (        
        <div>
            <h3>Team Summery</h3>
            <h5>Added Player: {add.length} </h5>
            <h5>Total Salary: {totalSalary}</h5>
        </div>
    );
};

export default AddPlayer;