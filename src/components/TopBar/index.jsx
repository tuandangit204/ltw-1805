import {
    AppBar,
    Checkbox,
    FormControlLabel,
    Toolbar,
    Typography,
} from "@mui/material";
import { useMemo } from "react";

import { useLocation } from "react-router-dom";
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

    if (pathname.includes("/users/")) {
      return `User Detail`;
    }

    if (pathname.includes("/photos/")) {
      return `User's Photos`;
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
