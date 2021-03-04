import React, { useState } from 'react';
import Player from '../Player/Player';
import './../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import fakeData from './../../fakeData/fakeData';
import './Team.css'
import AddPlayer from './../AddPlayer/AddPlayer';

const Team = () => {
    const topPlayers = fakeData.slice(0, 10);
    const [players, setPlayers] = useState(topPlayers);
    const [add, setAdd] = useState([]);

    const handleAdded = (player) => {
        const newAdd = [...add, player];
        setAdd(newAdd);
        console.log(player);
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-8">
                    {players.map(player =>
                        <Player
                            player={player}
                            handleAdded={handleAdded}                        >
                        </Player>
                    )}
                </div>
                <div className="col-4">
                    <AddPlayer add={add}></AddPlayer>
                </div>
            </div>
        </div>
    );
};

export default Team;