import React, { useState } from 'react';
import environstyles from '../../styles/environment.module.css';
import { FaPlus } from "react-icons/fa6";

const Environment = () => {
    const [teamDataList, setTeamDataList] = useState([
      {
        id: '01',
        environment: 'DMD',
      },
      {
        id: '02',
        environment: 'XMD',
      },
      {
        id: '03',
        environment: 'DXX',
      },
    ]);
  
    const [newTeam, setNewTeam] = useState({
        id: '',
        environment: '',
    });
  
    const [isAddingTeam, setIsAddingTeam] = useState(false);
  
    const handleAdd = () => {
      setIsAddingTeam(true);
    };
  
    const handleCancel = () => {
      setIsAddingTeam(false);
      setNewTeam({
        id: '',
        environment: '',
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
        environment: '',
      });
    };
  

  return (
    <div className={environstyles.teamList}>
      <h2 className={environstyles.topheading}>Environment List</h2>
      <button className={environstyles.addButton} onClick={handleAdd}>
        <FaPlus /> Add
      </button>
      <table className={environstyles.table}>
        <thead>
          <tr className={environstyles.tr001}>
            <th>ID</th>
            <th>Environment</th>
            <th className={environstyles.tr001action}>Action</th>
          </tr>
        </thead>
        <tbody>
          {teamDataList.map((teamData) => (
            <React.Fragment key={teamData.id}>
              <tr>
                <td>{teamData.id}</td>
                <td className={environstyles.cyclebox}>{teamData.environment}</td>
                <td className={environstyles.iconbox}>
                  <img
                    className={environstyles.filtersLinesIcon}
                    alt=""
                    src="/edit2.svg"
                  />
                  <img
                    className={environstyles.filtersLinesIcon}
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
                className={environstyles.inlineinput1}
                  type="text"
                  placeholder="Enter Id"
                  value={newTeam.id}
                  onChange={(e) => setNewTeam({ ...newTeam, id: e.target.value })}
                />
              </td>
              <td>
                <input
                className={environstyles.inlineinput2}
                  type="text"
                  placeholder="Enter Enviroment"
                  value={newTeam.environment}
                  onChange={(e) => setNewTeam({ ...newTeam, wave: e.target.value })}
                />
              </td>
              <td>
                <img
                    className={environstyles}
                    alt=""
                    src="/mdi_email-outline.png"
                    onClick={handleSave}
                  />
                  <img
                    className={environstyles}
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

export default Environment;