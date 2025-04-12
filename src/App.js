import "./App.css";

import { Grid, Paper } from "@mui/material";
import React, { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import TopBar from "./components/TopBar";
import UserDetail from "./components/UserDetail";
import UserList from "./components/UserList";
import UserPhotos from "./components/UserPhotos";
import Sidebar from "./components/Sidebar";

const App = (props) => {
  const [advancedView, setAdvancedView] = useState(false);

  return (
    <Router>
      <div className="p-4">
        <Grid container spacing={2}>
          <Grid item xs={12} className="fixed top-0 left-0 right-0 h-[70px]">
            <TopBar
              advancedView={advancedView}
              setAdvancedView={setAdvancedView}
            />
          </Grid>
          <div className="main-topbar-buffer" />
          <Grid item sm={3}>
            <Paper className="main-grid-item !p-5">
              <Sidebar />
            </Paper>
          </Grid>
          <Grid item sm={9}>
            <Paper className="main-grid-item">
              <Routes>
                <Route path="/users/:userId" element={<UserDetail />} />
                <Route
                  path="/photos/:userId"
                  element={<UserPhotos advancedView={advancedView} />}
                />
                <Route path="/users" element={<UserList />} />
              </Routes>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </Router>
  );
};

export default App;
