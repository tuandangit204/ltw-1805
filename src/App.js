import "./App.css";

import { Grid, Paper } from "@mui/material";
import React, { createContext, useContext, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import TopBar from "./components/TopBar";
import UserDetail from "./components/UserDetail";
import UserList from "./components/UserList";
import UserPhotos from "./components/UserPhotos";
import Sidebar from "./components/Sidebar";
import CommentList from "./components/CommentList";


const GlobalContext = createContext();

export const useGlobalContext = () => {
    const context = useContext(GlobalContext);
    if (!context) {
        throw new Error("useGlobalContext must be used within a GlobalProvider");
    }
    return { advancedView: context?.advancedView, setAdvancedView: context?.setAdvancedView };
}

const App = (props) => {
    const [advancedView, setAdvancedView] = useState(false);

    return (
        <Router>
            <GlobalContext.Provider value={{ advancedView, setAdvancedView }}>
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
                                    <Route path="/" element={<UserList />} />
                                    <Route path="/users/:userId" element={<UserDetail />} />
                                    <Route
                                        path="/photos/:userId"
                                        element={<UserPhotos advancedView={advancedView} />}
                                    />
                                    <Route path="/users" element={<UserList />} />
                                    <Route path="/comments/:userId" element={<CommentList />} />
                                </Routes>
                            </Paper>
                        </Grid>
                    </Grid>
                </div>
            </GlobalContext.Provider>
        </Router>
    );
};

export default App;
