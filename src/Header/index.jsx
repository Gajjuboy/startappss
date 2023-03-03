import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

export default function Header() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {" "}
              <Link className="boxItem" to="/">
                Home
              </Link>
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {" "}
              <Link className="boxItem" to="/contact">
                Contact
              </Link>
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {" "}
              <Link className="boxItem" to="/pricing">
                Pricing
              </Link>
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {" "}
              <Link className="boxItem" to="/appfeature">
                App Feature
              </Link>
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {" "}
              <Link className="boxItem" to="/gallary">
                Gallary
              </Link>
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {" "}
              <Link className="btn" to="/button">
                <Button variant="contained" color="success">
                  LOGIN
                </Button>
              </Link>
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}
