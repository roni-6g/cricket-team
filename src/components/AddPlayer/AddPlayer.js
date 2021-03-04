import React from 'react';

const AddPlayer = (props) => {
    const add = props.add;
    console.log(props.add);
    const totalSalary = add.reduce((total, pl) => total + pl.salary, 0);

    return (
        <div>
            <h3>Team Summery</h3>
            <h5>Player Added: {add.length}</h5>
            {
                add.map(pl => <h5><small><b>Name:</b> {pl.name} <b>Salary:</b> {pl.salary}</small> </h5>)
            }
            <h5><small> <b>Total Budget : {totalSalary}</b></small></h5>
        </div>
    );
};

export default AddPlayer;