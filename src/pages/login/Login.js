import React, { useState } from "react";
// router
import { useHistory } from "react-router-dom";
// material-ui
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
}));

// 로그인
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();
  const classes = useStyles();

  return (
    <Container component={"main"} maxWidth={"xs"}>
      <div className={classes.paper}>
        <Typography component={"h1"} variant={"h5"}>
          Vision Mentoring
        </Typography>
        <form style={{ marginTop: 30 }} noValidate>
          <TextField
            variant={"outlined"}
            margin={"normal"}
            required
            fullWidth
            id={"email"}
            label={"이메일"}
            name={"email"}
            autoComplete={"email"}
            autoFocus
          />
          <TextField
            variant={"outlined"}
            margin={"normal"}
            required
            fullWidth
            name={"password"}
            label={"비밀번호"}
            type={"password"}
            id={"password"}
            autoComplete={"current-password"}
          />
          <FormControlLabel
            control={<Checkbox value={"remember"} color={"primary"} />}
            label="자동 로그인"
          />
          <Button
            fullWidth
            variant={"contained"}
            color={"primary"}
            style={{ marginTop: 10, marginBottom: 20 }}
            onClick={() => history.push("/home")}
          >
            <text style={{ color: "white" }}>로그인</text>
          </Button>
          <Button
            fullWidth
            variant={"contained"}
            color={"primary"}
            style={{ marginBottom: 20 }}
            onClick={() => history.push("/register")}
          >
            <text style={{ color: "white" }}>회원가입</text>
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href={"#"} variant={"body2"}>
                비밀번호를 잊으셨나요?
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Typography variant={"body2"} color={"textSecondary"} align={"center"}>
          Copyright {new Date().getFullYear()}. Vision Mentoring All rights
          reserved.
        </Typography>
      </Box>
    </Container>
  );
};

export default Login;
