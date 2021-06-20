import React, { useState, useEffect } from "react";
import { Container, Text, Button } from "../../styled";
import { useSelector, useDispatch } from "react-redux";
import history from "../../utils/createHistory";
import IconButtons from "../materialui/IconButtons";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { signOut } from "../../redux/actions/user";

const Header = () => {
  const dispatch = useDispatch();
  const [isLogin, setIsLogin] = useState(false);
  const [name, setName] = useState("noname");
  const user = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    if (user) {
      setIsLogin(true);
      setName(user.name);
    } else {
      setIsLogin(false);
      setName("noname");
    }
  }, [user]);

  return (
    <Container
      direction="row"
      align="center"
      width="100%"
      justify="space-between"
      background="#47926E"
      height="50px"
    >
      <Container flex="0.8">
        <Text size="25px" color="#F3EA16" margin="0 0 0 3vw">
          Products Inventory Management
        </Text>
      </Container>

      <Container
        direction="row"
        justify="flex-end"
        align="center"
        flex="0.2"
        margin="0px 10px 0px 0px"
      >
        {isLogin ? (
          <>
            <Text family="IBM Plex Sans" size="15px" color="white">
              Welcome <b>{name}</b>
            </Text>
            <IconButtons
              onClick={() => {
                dispatch(signOut());
              }}
              tooltipTitle="Log Out"
            >
              <ExitToAppIcon style={{ color: "#eb7d34" }} />
            </IconButtons>
          </>
        ) : (
          <>
            <Button
              height="35px"
              margin="0px 10px 0px 0px"
              width="90px"
              background={
                history.location.pathname === "/signup" ? "#D24C4C" : "#963B3B"
              }
              onClick={() => {
                history.push("/signin");
              }}
            >
              Sign In
            </Button>
            <Button
              height="35px"
              width="90px"
              background={
                history.location.pathname === "/signin" ? "#D24C4C" : "#963B3B"
              }
              onClick={() => {
                history.push("/signup");
              }}
            >
              Sign Up
            </Button>
          </>
        )}
      </Container>
    </Container>
  );
};

export default Header;
