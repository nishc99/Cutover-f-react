import React, { useState, useEffect, useContext } from "react";
import { GoX } from "react-icons/go";
import styles from "../../../styles/CutoverPlanPopup.module.css";
import axios from "axios";
import { Context } from "../../UserContext"; 

const CutoverPlanPopup = ({ handleClosePopup }) => {
  const { state: { user: userData } } = useContext(Context);
  const [projectOptions, setProjectOptions] = useState([]);
  const [teamOptions, setTeamOptions] = useState([]);
  const [waveOptions, setWaveOptions] = useState([]);
  const [cycleOptions, setCycleOptions] = useState([]);
  const [environmentOptions, setEnvironmentOptions] = useState([]);
  const [clientOptions, setClientOptions] = useState([]);

  useEffect(() => {
    const userId = userData ? userData.user._id : null;
  
    const fetchData = async () => {
      try {
        console.log(userId);
        const projectResponse = await axios.get(`http://localhost:1337/api/configurations/general/projects/${userId}`);
        setProjectOptions(projectResponse.data);
      } catch (error) {
        console.error("Error fetching project data:", error);
      }
  
      try {
        const teamResponse = await axios.get(`http://localhost:1337/api/configurations/general/teams/${userId}`);
        setTeamOptions(teamResponse.data);
      } catch (error) {
        console.error("Error fetching team data:", error);
      }
  
      try {
        const waveResponse = await axios.get(`http://localhost:1337/api/configurations/general/waves/${userId}`);
        setWaveOptions(waveResponse.data);
      } catch (error) {
        console.error("Error fetching wave data:", error);
      }
  
      try {
        const cycleResponse = await axios.get(`http://localhost:1337/api/configurations/general/cycles/${userId}`);
        setCycleOptions(cycleResponse.data);
      } catch (error) {
        console.error("Error fetching cycle data:", error);
      }
  
      try {
        const environmentResponse = await axios.get(`http://localhost:1337/api/configurations/general/enviornments/${userId}`);
        setEnvironmentOptions(environmentResponse.data);
      } catch (error) {
        console.error("Error fetching environment data:", error);
      }
  
      try {
        const clientResponse = await axios.get(`http://localhost:1337/api/configurations/general/clients/${userId}`);
        setClientOptions(clientResponse.data);
      } catch (error) {
        console.error("Error fetching client data:", error);
      }
    };
  
    fetchData();
  }, [userData]);
  

  const handleSaveAsDraft = async () => {
    try {
      const popupData = {
        projectName: document.getElementById("projectName").value,
        team: document.getElementById("team").value,
        wave: document.getElementById("wave").value,
        cycle: document.getElementById("cycle").value,
        baselineStartDate: document.getElementById("baselineStartDate").value,
        baselineFinishDate: document.getElementById("baselineFinishDate").value,
        environment: document.getElementById("environment").value,
        client: document.getElementById("client").value,
       
      };

      
      await axios.post("http://localhost:1337/api/cutover-profile-plans", { data: popupData, isDraft: true });

      
      handleClosePopup();
    } catch (error) {
      console.error("Error saving as draft:", error);
    }
  };

  const handleProceedToPlan = async () => {
    try {
      const popupData = {
        projectName: document.getElementById("projectName").value,
        team: document.getElementById("team").value,
        wave: document.getElementById("wave").value,
        cycle: document.getElementById("cycle").value,
        baselineStartDate: document.getElementById("baselineStartDate").value,
        baselineFinishDate: document.getElementById("baselineFinishDate").value,
        environment: document.getElementById("environment").value,
        client: document.getElementById("client").value,
       
      };

     
      await axios.post("http://localhost:1337/api/cutover-profile-plans", { data: popupData, isDraft: false });

      
      handleClosePopup();
    } catch (error) {
      console.error("Error proceeding to plan:", error);
    }
  };

  return (
    <div className={styles.popup}>
      <div className={styles.popupHeader}>
        <h2>Add New Cutover Plan Profile</h2>
        <button onClick={handleClosePopup}>
          <GoX />
        </button>
      </div>
      <div style={{ padding: "20px" }}>
        <div className={styles.dropdownContainer}>
          <div className={styles.column} style={{ width: "311px" }}>
            <label htmlFor="projectName">Project Name:</label>
            <select id="projectName">
              {projectOptions.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.name}
                </option>
              ))}
            </select>
          </div>
  
          <div className={styles.column} style={{ width: "311px" }}>
            <label htmlFor="team">Team:</label>
            <select id="team">
              {teamOptions.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.name}
                </option>
              ))}
            </select>
          </div>
  
          <div className={styles.row} style={{ marginTop: "20px" }}>
            <div className={styles.column}>
              <label htmlFor="wave">Wave:</label>
              <select id="wave">
                {waveOptions.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.name}
                  </option>
                ))}
              </select>
            </div>
  
            <div className={styles.column}>
              <label htmlFor="cycle">Cycle:</label>
              <select id="cycle">
                {cycleOptions.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
  
          <div className={styles.row}>
            <div className={styles.column}>
              <label htmlFor="baselineStartDate">Baseline Start Date:</label>
              <input type="date" id="baselineStartDate" />
            </div>
  
            <div className={styles.column}>
              <label htmlFor="baselineFinishDate">Baseline Finish Date:</label>
              <input type="date" id="baselineFinishDate" />
            </div>
          </div>
  
          <div className={styles.row}>
            <div className={styles.column}>
              <label htmlFor="environment">Environment:</label>
              <select id="environment">
                {environmentOptions.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.name}
                  </option>
                ))}
              </select>
            </div>
  
            <div className={styles.column}>
              <label htmlFor="client">Client:</label>
              <select id="client">
                {clientOptions.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div style={{ float: "right", margin: "20px", marginTop: "30px" }}>
          <button
            onClick={handleSaveAsDraft}
            style={{
              color: "#E92431",
              border: "1px solid",
              borderRadius: "5px",
              backgroundColor: "#FFF5F5",
              marginRight: "20px",
              fontSize: "12px",
              height: "30px",
              width: "120px",
            }}
          >
            Save as Draft
          </button>
          <button
            onClick={handleProceedToPlan}
            style={{
              color: "#FFF5F5",
              border: "1px solid",
              borderRadius: "5px",
              backgroundColor: "#E92431",
              fontSize: "12px",
              height: "30px",
              width: "120px",
            }}
          >
            Proceed to Plan
          </button>
        </div>
      </div>
    </div>
  );
  };

export default CutoverPlanPopup;







