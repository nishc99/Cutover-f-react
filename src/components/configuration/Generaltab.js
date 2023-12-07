import React, {useState} from 'react'
import generalstyles from "../../styles/general.module.css";
import Team from './Team';
import { Link } from 'react-router-dom';
import Wave from './Wave';

const Generaltab = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };
  return (
    <div className={generalstyles.technicaltab}>
        

    <div className={generalstyles.sidebar}>
      <div className={generalstyles.optionContainer}>
        <div
          className={`${generalstyles.option} ${selectedOption === 'Project' ? generalstyles.selectedOption : ''}`}
          onClick={() => handleOptionClick('Project')}
        >
        <Link to="/projectscreen">
          <span className={generalstyles.optionText}>Project</span>
          </Link>
        </div>
        <div
          className={`${generalstyles.option} ${selectedOption === 'Team' ? generalstyles.selectedOption : ''}`}
          onClick={() => handleOptionClick('Team')}
        >
        <Link to="/teamscreen">
          <span className={generalstyles.optionText}>Team</span>
          </Link>
        </div>
        <div
          className={`${generalstyles.option} ${selectedOption === 'Wave' ? generalstyles.selectedOption : ''}`}
          onClick={() => handleOptionClick('Wave')}
        >
        <Link to="/Wavescreen">
        <span className={generalstyles.optionText}>Wave</span>
        </Link>
          
        </div>
        <div
          className={`${generalstyles.option} ${selectedOption === 'Cycle' ? generalstyles.selectedOption : ''}`}
          onClick={() => handleOptionClick('Cycle')}
        >
        <Link to="/cyclescreen">
          <span className={generalstyles.optionText}>Cycle</span>
          </Link>
        </div>
        <div
          className={`${generalstyles.option} ${selectedOption === 'Environment' ? generalstyles.selectedOption : ''}`}
          onClick={() => handleOptionClick('Environment')}
        >
        <Link to="/environmentscreen">
          <span className={generalstyles.optionText}>Environment</span>
          </Link>
        </div>
        <div
          className={`${generalstyles.option} ${selectedOption === 'Client' ? generalstyles.selectedOption : ''}`}
          onClick={() => handleOptionClick('Client')}
        >
        <Link to="/clientscreen">
          <span className={generalstyles.optionText}>Client</span>
          </Link>
        </div>
      </div>
    </div>
    {/* <Team /> */}
    {/* <Wave /> */}
      
        </div>
  )
}

export default Generaltab;