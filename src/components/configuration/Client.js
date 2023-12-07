import React, { useState } from 'react';
import clientstyles from '../../styles/client.module.css';
import { FaPlus } from "react-icons/fa6";

const Client = () => {
    const [teamDataList, setTeamDataList] = useState([
      {
        id: '01',
        client: '200',
      },
      {
        id: '02',
        client: '300',
      },
      {
        id: '03',
        client: '400',
      },
    ]);
  
    const [newTeam, setNewTeam] = useState({
        id: '',
        client: '',
    });
  
    const [isAddingTeam, setIsAddingTeam] = useState(false);
  
    const handleAdd = () => {
      setIsAddingTeam(true);
    };
  
    const handleCancel = () => {
      setIsAddingTeam(false);
      setNewTeam({
        id: '',
        client: '',
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
        client: '',
      });
    };
  

  return (
    <div className={clientstyles.teamList}>
      <h2 className={clientstyles.topheading}>Client List</h2>
      <button className={clientstyles.addButton} onClick={handleAdd}>
        <FaPlus /> Add
      </button>
      <table className={clientstyles.table}>
        <thead>
          <tr className={clientstyles.tr001}>
            <th>ID</th>
            <th>Client</th>
            <th className={clientstyles.tr001action}>Action</th>
          </tr>
        </thead>
        <tbody>
          {teamDataList.map((teamData) => (
            <React.Fragment key={teamData.id}>
              <tr>
                <td>{teamData.id}</td>
                <td className={clientstyles.cyclebox}>{teamData.client}</td>
                <td className={clientstyles.iconbox}>
                  <img
                    className={clientstyles.filtersLinesIcon}
                    alt=""
                    src="/edit2.svg"
                  />
                  <img
                    className={clientstyles.filtersLinesIcon}
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
                className={clientstyles.inlineinput1}
                  type="text"
                  placeholder="Enter Id"
                  value={newTeam.id}
                  onChange={(e) => setNewTeam({ ...newTeam, id: e.target.value })}
                />
              </td>
              <td>
                <input
                className={clientstyles.inlineinput2}
                  type="text"
                  placeholder="Enter Client"
                  value={newTeam.client}
                  onChange={(e) => setNewTeam({ ...newTeam, wave: e.target.value })}
                />
              </td>
              <td>
                <img
                    className={clientstyles}
                    alt=""
                    src="/mdi_email-outline.png"
                    onClick={handleSave}
                  />
                  <img
                    className={clientstyles}
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

export default Client;