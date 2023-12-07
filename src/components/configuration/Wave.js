import React, { useState } from 'react';
import wavestyles from '../../styles/wave.module.css';
import { FaPlus } from "react-icons/fa6";

const Wave = () => {
    const [teamDataList, setTeamDataList] = useState([
      {
        id: '01',
        wave: 'Wave 1',
        release: 'Release 1',
      },
      {
        id: '02',
        wave: 'Wave 2',
        release: 'Release 2',
      },
      {
        id: '03',
        wave: 'Wave 3',
        release: 'Release 3',
      },
    ]);
  
    const [newTeam, setNewTeam] = useState({
        id: '',
      wave: '',
      release: '',
    });
  
    const [isAddingTeam, setIsAddingTeam] = useState(false);
  
    const handleAdd = () => {
      setIsAddingTeam(true);
    };
  
    const handleCancel = () => {
      setIsAddingTeam(false);
      setNewTeam({
        id: '',
        wave: '',
        release: '',
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
        wave: '',
        release: '',
      });
    };
  

  return (
    <div className={wavestyles.teamList}>
      <h2 className={wavestyles.topheading}>Wave List</h2>
      <button className={wavestyles.addButton} onClick={handleAdd}>
        <FaPlus /> Add
      </button>
      <table className={wavestyles.table}>
        <thead>
          <tr className={wavestyles.tr001}>
            <th>ID</th>
            <th>Wave</th>
            <th>Release</th>
            <th className={wavestyles.tr001action}>Action</th>
          </tr>
        </thead>
        <tbody>
          {teamDataList.map((teamData) => (
            <React.Fragment key={teamData.id}>
              <tr>
                <td>{teamData.id}</td>
                <td>{teamData.wave}</td>
                <td>{teamData.release}</td>
                <td>{teamData.project}</td>
                <td>
                  <img
                    className={wavestyles.filtersLinesIcon}
                    alt=""
                    src="/edit2.svg"
                  />
                  <img
                    className={wavestyles.filtersLinesIcon}
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
                className={wavestyles.inlineinput1}
                  type="text"
                  placeholder="Enter Id"
                  value={newTeam.id}
                  onChange={(e) => setNewTeam({ ...newTeam, id: e.target.value })}
                />
              </td>
              <td>
                <input
                className={wavestyles.inlineinput2}
                  type="text"
                  placeholder="Enter Wave"
                  value={newTeam.wave}
                  onChange={(e) => setNewTeam({ ...newTeam, wave: e.target.value })}
                />
              </td>
              <td>
                <input
                className={wavestyles.inlineinput3}
                  type="text"
                  placeholder="Enter Release"
                  value={newTeam.release}
                  onChange={(e) => setNewTeam({ ...newTeam, release: e.target.value })}
                />
              </td>
              <td>
                <img
                    className={wavestyles}
                    alt=""
                    src="/mdi_email-outline.png"
                    onClick={handleSave}
                  />
                  <img
                    className={wavestyles}
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

export default Wave;