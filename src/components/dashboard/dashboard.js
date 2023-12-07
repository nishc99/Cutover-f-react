// Dashboard.js
import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineBars } from "react-icons/ai";
import { VscGraph } from "react-icons/vsc";
import { LuSearch } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import styles from "../../styles/Dashboard.module.css";
import { FaChevronRight } from "react-icons/fa";

const cardData = [
  {
    name: "Technical Cutover Plan",
    icon: <AiOutlineBars />,
    backgroundColor: "#3179BE",
    textColor: "#FFFFFF",
    link: "/technical-cutover",
  },
  {
    name: "Business Cutover Plan",
    icon: <AiOutlineBars />,
    backgroundColor: "#099D58",
    textColor: "#FFFFFF",
    link: "/business-cutover",
  },
  {
    name: "Status Report",
    icon: <VscGraph />,
    backgroundColor: "#E48B22",
    textColor: "#FFFFFF",
    link: "/status-report",
  },
  {
    name: "Adult",
    icon: <LuSearch />,
    backgroundColor: "#A43AB7",
    textColor: "#FFFFFF",
    link: "/adult",
  },
  {
    name: "Configurations",
    icon: <IoSettingsOutline />,
    backgroundColor: "#D71500",
    textColor: "#FFFFFF",
    link: "/configurations",
  },
];

const Dashboard = () => {
  return (
    <>
      <h1 className={styles.heading}>Home</h1>
      <div className={styles.dashboardContainer}>
        {cardData.map((card, index) => (
          <Link key={index} to={card.link} className={styles.cardLink}>
            <div
              className={styles.card}
              style={{
                backgroundColor: card.backgroundColor,
                color: card.textColor,
              }}
            >
              <div className={styles.cardContent}>
                <div className={styles.icon}>{card.icon}</div>
                {index !== cardData.length - 1 && (
                  <FaChevronRight className={styles.chevron} />
                )}
                <div className={styles.name}>{card.name}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Dashboard;
