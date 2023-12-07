import React, { useState } from 'react';
import projectstyles from '../../styles/project.module.css';
import { FaPlus } from "react-icons/fa6";

const Project = () => {
    const [teamDataList, setTeamDataList] = useState([
      {
        id: '01',
        projectname: 'GET',
      },
      {
        id: '02',
        projectname: 'MAG',
      },
      {
        id: '03',
        projectname: 'DAG',
      },
    ]);
  
    const [newTeam, setNewTeam] = useState({
        id: '',
        projectname: '',
    });
  
    const [isAddingTeam, setIsAddingTeam] = useState(false);
  
  
    const handleAdd = () => {
      setIsAddingTeam(true);
    };
  
    const handleCancel = () => {
      setIsAddingTeam(false);
      setNewTeam({
        id: '',
        projectname: '',
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
        projectname: '',
      });
    };
  

  return (
    <div className={projectstyles.teamList}>
      <h2 className={projectstyles.topheading}>Project List</h2>
      <button className={projectstyles.addButton} onClick={handleAdd}>
        <FaPlus /> Add
      </button>
      <table className={projectstyles.table}>
        <thead>
          <tr className={projectstyles.tr001}>
            <th>ID</th>
            <th>Project Name</th>
            <th className={projectstyles.tr001action}>Action</th>
          </tr>
        </thead>
        <tbody>
          {teamDataList.map((teamData) => (
            <React.Fragment key={teamData.id}>
              <tr>
                <td>{teamData.id}</td>
                <td className={projectstyles.projectnamebox}>{teamData.projectname}</td>
                <td className={projectstyles.iconbox}>
                  <img
                    className={projectstyles.filtersLinesIcon}
                    alt=""
                    src="/edit2.svg"
                  />
                  <img
                    className={projectstyles.filtersLinesIcon}
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
                className={projectstyles.inlineinput1}
                  type="text"
                  placeholder="Enter Id"
                  value={newTeam.id}
                  onChange={(e) => setNewTeam({ ...newTeam, id: e.target.value })}
                />
              </td>
              <td>
                <input
                className={projectstyles.inlineinput2}
                  type="text"
                  placeholder="Enter Project Name"
                  value={newTeam.projectname}
                  onChange={(e) => setNewTeam({ ...newTeam, wave: e.target.value })}
                />
              </td>
              <td>
                <img
                    className={projectstyles}
                    alt=""
                    src="/mdi_email-outline.png"
                    onClick={handleSave}
                  />
                  <img
                    className={projectstyles}
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

export default Project;