// Buisness.js

import React, { useState } from "react";
import { FaCaretRight } from "react-icons/fa";

import styles from "../../../styles/buisness.module.css";

import CutoverPlanPopup from "./cutoverPlanPopup";
export default function Bussniess() {
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>Cutover Plan Profile</div>
        <div className={styles.headerItem}>
          <p>Home </p>
          <p
            style={{
              marginLeft: "5px ",
              marginRight: "5px",
            }}
          >
            <FaCaretRight />
          </p>
          <p style={{ color: "red" }}>Cutover Plan Profile</p>
        </div>
      </div>
      <hr className={styles.horizontalLine} />

      <button className={styles.modalButton} onClick={handleClick}>
        Add new plan
      </button>

      {showPopup && <CutoverPlanPopup handleClosePopup={handleClosePopup} />}
    </>
  );
}
