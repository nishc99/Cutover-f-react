import React, { useState } from 'react';
import teamstyles from '../../styles/team.module.css';
import { FaPlus } from "react-icons/fa6";

const Team = () => {
    const [showMembers, setShowMembers] = useState({});
    const [teamDataList, setTeamDataList] = useState([
      {
        id: '01',
        teamName: 'Azure',
        resource: 'Darrell Steward',
        project: 'Castor',
        members: [
          { id: '001', name: 'John Doe' },
          { id: '002', name: 'Jane Doe' },
        ],
      },
      {
        id: '02',
        teamName: 'Finance',
        resource: 'Cameron Williamson',
        project: 'Mag',
        members: [
          { id: '005', name: 'Bob Smith' },
          { id: '006', name: 'Eva Martinez' },
        ],
      },
      {
        id: '03',
        teamName: 'Mulesoft',
        resource: 'Devon Lane',
        project: 'GET, Castor',
        members: [
          { id: '003', name: 'Bob Smith' },
          { id: '004', name: 'Eva Martinez' },
        ],
      },
    ]);
  
    const [newTeam, setNewTeam] = useState({
        id: '',
      teamName: '',
      resource: '',
      project: '',
    });
  
    const [isAddingTeam, setIsAddingTeam] = useState(false);
  
    const toggleMembers = (teamId) => {
      setShowMembers((prevShowMembers) => ({
        ...prevShowMembers,
        [teamId]: !prevShowMembers[teamId],
      }));
    };
  
    const handleAdd = () => {
      setIsAddingTeam(true);
    };
  
    const handleCancel = () => {
      setIsAddingTeam(false);
      setNewTeam({
        id: '',
        teamName: '',
        resource: '',
        project: '',
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
        teamName: '',
        resource: '',
        project: '',
      });
    };
  

  return (
    <div className={teamstyles.teamList}>
      <h2 className={teamstyles.topheading}>Team List</h2>
      <button className={teamstyles.addButton} onClick={handleAdd}>
        <FaPlus /> Add
      </button>
      <table className={teamstyles.table}>
        <thead>
          <tr className={teamstyles.tr001}>
            <th>ID</th>
            <th>Team Name</th>
            <th>Resource</th>
            <th>Project</th>
            <th className={teamstyles.tr001action}>Action</th>
          </tr>
        </thead>
        <tbody>
          {teamDataList.map((teamData) => (
            <React.Fragment key={teamData.id}>
              <tr>
                <td>{teamData.id}</td>
                <td>{teamData.teamName}</td>
                <td>{teamData.resource}</td>
                <td>{teamData.project}</td>
                <td >
                  <img
                    className={teamstyles.filtersLinesIcon}
                    alt=""
                    src="/edit2.svg"
                  />
                  <img
                    className={teamstyles.filtersLinesIcon}
                    alt=""
                    src="/trash2.svg"
                  />
                  <span
                    className={teamstyles.arrowIcon}
                    onClick={() => toggleMembers(teamData.id)}
                  >
                    {showMembers[teamData.id] ? '▼' : '►'}
                  </span>
                </td>
              </tr>
              {showMembers[teamData.id] && (
                <tr className={teamstyles.collapsibleRow}>
                  <td colSpan="5">
                    <table className={teamstyles.table}>
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {teamData.members.map((member) => (
                          <tr key={member.id}>
                            <td>
                              <input type="checkbox" />
                              {member.name}
                            </td>
                            <td>
                              <img
                                className={teamstyles.filtersLinesIcon}
                                alt=""
                                src="/edit2.svg"
                              />
                              <img
                                className={teamstyles.filtersLinesIcon}
                                alt=""
                                src="/trash2.svg"
                              />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
          {isAddingTeam && (
            <tr>
            <td>
                <input
                className={teamstyles.inlineinput1}
                  type="text"
                  placeholder="Enter Id"
                  value={newTeam.id}
                  onChange={(e) => setNewTeam({ ...newTeam, id: e.target.value })}
                />
              </td>
              <td>
                <input
                className={teamstyles.inlineinput2}
                  type="text"
                  placeholder="Team Name"
                  value={newTeam.teamName}
                  onChange={(e) => setNewTeam({ ...newTeam, teamName: e.target.value })}
                />
              </td>
              <td>
                <input
                className={teamstyles.inlineinput3}
                  type="text"
                  placeholder="Resource"
                  value={newTeam.resource}
                  onChange={(e) => setNewTeam({ ...newTeam, resource: e.target.value })}
                />
              </td>
              <td>
                <input
                className={teamstyles.inlineinput4}
                  type="text"
                  placeholder="Project"
                  value={newTeam.project}
                  onChange={(e) => setNewTeam({ ...newTeam, project: e.target.value })}
                />
              </td>
              <td>
                <img
                    className={teamstyles}
                    alt=""
                    src="/mdi_email-outline.png"
                    onClick={handleSave}
                  />
                  <img
                    className={teamstyles}
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

export default Team;




