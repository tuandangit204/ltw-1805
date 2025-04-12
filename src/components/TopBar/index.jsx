import {
    AppBar,
    Checkbox,
    FormControlLabel,
    Toolbar,
    Typography,
} from "@mui/material";
import React, { useMemo } from "react";

import { useLocation } from "react-router-dom";
import models from "../../modelData/models";
import "./styles.css";

/**
 * Define TopBar, a React component of Project 4.
 */
function TopBar({ advancedView, setAdvancedView }) {
  const { pathname } = useLocation();

  const title = useMemo(() => {
    if (pathname === "/") {
      return "Home";
    }

    if (pathname === "/users") {
      return "User List";
    }

    const userId = pathname.split("/").pop();
    if (pathname.includes("/users/")) {
      const userDetail = models.userModel(userId);
      return `${userDetail?.first_name} ${userDetail?.last_name}`;
    }

    if (pathname.includes("/photos/")) {
      const userDetail = models.userModel(userId);

      return `${userDetail?.first_name} ${userDetail?.last_name}'s Photos`;
    }
  }, [pathname]);

  return (
    <AppBar className="topbar-appBar" position="absolute">
      <Toolbar className="flex justify-between">
        <Typography variant="h5" color="inherit">
          {title}
        </Typography>

        {pathname.includes("/photos/") && (
          <FormControlLabel
            control={
              <Checkbox
                checked={advancedView}
                onChange={(e) => setAdvancedView(e.target.checked)}
                sx={{
                  color: "#fff",
                  "&.Mui-checked": {
                    color: "#fff",
                  },
                }}
              />
            }
            label="Enable Advanced Features"
          />
        )}
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
