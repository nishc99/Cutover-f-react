// App.js

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./components/signin";
import Dashborad from "./components/dashboard/dashboard";
import Sign from "./components/signup";

import Report from "./components/statusreport/report";
import Sidebar from "./components/sidebar";
import "./App.css";

import Bussniess from "./components/cutoverplan/buisness/buisness";
import Audit from "./components/audit/audit";
import ConfigurationGeneral from "./components/configuration/ConfigurationGeneral";
import Team from "./components/configuration/Team";
import Wave from "./components/configuration/Wave";
import Project from "./components/configuration/Project";
import Cycle from "./components/configuration/Cycle";
import Environment from "./components/configuration/Environment";
import Client from "./components/configuration/Client";
export default function App() {
  // random comment
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/SignUp" element={<Sign />} />
        <Route
          path="/*"
          element={
            <>
              <div className="app">
                <Sidebar />
                <div className="content">
                  <Routes>
                    <Route path="/dashboard" element={<Dashborad />} />
                    <Route path="/business-cutover" element={<Bussniess />} />
                    <Route path="/audit" element={<Audit />} />
                   
                    <Route path="/status-report" element={<Report />} />
                    <Route path="/configurations" element={<ConfigurationGeneral />} />
                    <Route path="/teamscreen" element={<Team />} />
                    <Route path="/wavescreen" element={<Wave /> } />
                    <Route path="/projectscreen" element={<Project /> } />
                    <Route path="/cyclescreen" element={<Cycle /> } />
                    <Route path="/environmentscreen" element={<Environment /> } />
                    <Route path="/clientscreen" element={<Client /> } />
                  </Routes>
                </div>
              </div>
            </>
          }
        />
      </Routes>
    </Router>
  );
}
