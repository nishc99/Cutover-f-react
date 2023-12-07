import React, { useState } from 'react';
import styles from "../../styles/configurationgeneral.module.css";
import Generaltab from './Generaltab';

const ConfigurationGeneral = () => {
  const [activeTab, setActiveTab] = useState('Technical');
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className={styles.macbookPro16965}>
      <div className={styles.configurationParent}>
        <div className={styles.configuration}>Configuration</div>
        <div className={styles.homeParent}>
          <div className={styles.home}>Home</div>
          <img className={styles.frameChild} alt="" src="/polygon-6.svg" />
          <div className={styles.configuration1}>Configuration</div>
        </div>
      </div>

      <div className={styles.navigation}>
        <span
            className={`${styles.tab} ${activeTab === 'General' ? styles.active : ''}`}
            onClick={() => handleTabClick('General')}
          >
            
           General
          </span>
          <span
            className={`${styles.tab} ${activeTab === 'Technical' ? styles.active : ''}`}
            onClick={() => handleTabClick('Technical')}
          >
            Technical
          </span>
          <span
            className={`${styles.tab} ${activeTab === 'Business' ? styles.active : ''}`}
            onClick={() => handleTabClick('Business')}
          >
            Business
          </span>
        </div>


      {/* Content based on active tab */}
      {activeTab === 'Technical' && (
        <div className={styles.technicalContent}>
          {/* Your Technical content goes here */}
        </div>
)}
      {activeTab === 'Business' && (
        <div className={styles.businessContent}>
          {/* Your Business content goes here */}
        </div>
      )}
      {activeTab === 'General' && (
        <div>
          <Generaltab />
        </div>
        
      )}
    </div>
  );
};

export default ConfigurationGeneral;







