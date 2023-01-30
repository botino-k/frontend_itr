import React from "react";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export const Header = () => {
  const isAuth = false;

  const onClickLogout = () => {};

  return (
    <div className={styles.root}>
      <Container maxWidth="lg">
        <div className={styles.inner}>
          <Link className={styles.logo} to="/">
            <div>Task </div>
          </Link>
          <div className={styles.buttons}>
            {isAuth ? (
              <>
                <Button
                  onClick={onClickLogout}
                  variant="contained"
                  color="error"
                >
                  LogOut
                </Button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="outlined">LogIn</Button>
                </Link>
                <Link to="/signup">
                  <Button variant="contained">SignUp</Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};
