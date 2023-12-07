import React, { useState } from 'react';
import cyclestyles from '../../styles/cycle.module.css';
import { FaPlus } from "react-icons/fa6";

const Cycle = () => {
    const [teamDataList, setTeamDataList] = useState([
      {
        id: '01',
        cycle: 'Cycle 1',
      },
      {
        id: '02',
        cycle: 'Cycle 2',
      },
      {
        id: '03',
        cycle: 'Cycle 3',
      },
    ]);
  
    const [newTeam, setNewTeam] = useState({
        id: '',
        cycle: '',
    });
  
    const [isAddingTeam, setIsAddingTeam] = useState(false);
  
  
    const handleAdd = () => {
      setIsAddingTeam(true);
    };
  
    const handleCancel = () => {
      setIsAddingTeam(false);
      setNewTeam({
        id: '',
        cycle: '',
      });
    };
  
    const handleSave = () => {
      const updatedTeamDataList = [
        ...teamDataList,
        {
          id: `${Math.floor(Math.random() * 1000)}`,
          ...newTeam,
          members: [],
        },
      ];
  
      setTeamDataList(updatedTeamDataList);
      setIsAddingTeam(false);
      setNewTeam({
        id: '',
        cycle: '',
      });
    };
  

  return (
    <div className={cyclestyles.teamList}>
      <h2 className={cyclestyles.topheading}>Cycle List</h2>
      <button className={cyclestyles.addButton} onClick={handleAdd}>
        <FaPlus /> Add
      </button>
      <table className={cyclestyles.table}>
        <thead>
          <tr className={cyclestyles.tr001}>
            <th>ID</th>
            <th>Cycle</th>
            <th className={cyclestyles.tr001action}>Action</th>
          </tr>
        </thead>
        <tbody>
          {teamDataList.map((teamData) => (
            <React.Fragment key={teamData.id}>
              <tr>
                <td>{teamData.id}</td>
                <td className={cyclestyles.cyclebox}>{teamData.cycle}</td>
                <td className={cyclestyles.iconbox}>
                  <img
                    className={cyclestyles.filtersLinesIcon}
                    alt=""
                    src="/edit2.svg"
                  />
                  <img
                    className={cyclestyles.filtersLinesIcon}
                    alt=""
                    src="/trash2.svg"
                  />
                </td>
              </tr>
            </React.Fragment>
          ))}
          {isAddingTeam && (
            <tr>
            <td>
                <input
                className={cyclestyles.inlineinput1}
                  type="text"
                  placeholder="Enter Id"
                  value={newTeam.id}
                  onChange={(e) => setNewTeam({ ...newTeam, id: e.target.value })}
                />
              </td>
              <td>
                <input
                className={cyclestyles.inlineinput2}
                  type="text"
                  placeholder="Enter Cycle"
                  value={newTeam.cycle}
                  onChange={(e) => setNewTeam({ ...newTeam, wave: e.target.value })}
                />
              </td>
              <td>
                <img
                    className={cyclestyles}
                    alt=""
                    src="/mdi_email-outline.png"
                    onClick={handleSave}
                  />
                  <img
                    className={cyclestyles}
                    alt=""
                    src="/charm_tick.png"
                    onClick={handleCancel}
                  />
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Cycle;