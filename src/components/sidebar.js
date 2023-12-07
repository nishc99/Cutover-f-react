import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "../styles/Sidebar.module.css";
import { GoHome } from "react-icons/go";
import { FaBars, FaSearch } from "react-icons/fa";
import { VscGraph } from "react-icons/vsc";
import { IoSettingsOutline } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import logoutIcon from "../Image/logout.png"
import profile from "../Image/Image.png"

const Sidebar = () => {
  const location = useLocation();
  const handleLogout = () => {
    localStorage.clear();
    window.location.href = '/';
  };

  return (
    <aside className={styles.sidebar}>
      <div className={styles["sidebar-links"]}>
        <Link
          to="/dashboard"
          className={location.pathname === "/dashboard" ? styles.active : ""}
        >
          <GoHome className={styles["icons"]} />
        </Link>
        <Link
          to="/business-cutover"
          className={
            location.pathname === "/business-cutover" ? styles.active : ""
          }
        >
          <FaBars className={styles["icons"]} />
        </Link>
        <Link
          to="/status-report"
          className={
            location.pathname === "/status-report" ? styles.active : ""
          }
        >
          <VscGraph className={styles["icons"]} />
        </Link>
        <Link
          to="/audit"
          className={location.pathname === "/audit" ? styles.active : ""}
        >
          <FaSearch className={styles["icons"]} />
        </Link>
        <Link
          to="/configurations"
          className={
            location.pathname === "/configurations" ? styles.active : ""
          }
        >
          <IoSettingsOutline className={styles["icons"]} />
        </Link>
        <Link
          to="/notifications"
          className={
            location.pathname === "/notitification" ? styles.active : ""
          }
        >
          <IoNotificationsOutline className={styles["icons"]} />
        </Link>
        <img
          src={logoutIcon}
          alt="Logout"
          className={styles["logout-button"]}
          onClick={handleLogout}
        />
        <img
          src={profile}
          
          className={styles["profile"]}
         
        />
      </div>
    </aside>
  );
};

export default Sidebar;
