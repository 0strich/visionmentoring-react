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
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

// 회원가입
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const history = useHistory();
  const classes = useStyles();

  return (
    <Container component={"main"} maxWidth={"xs"}>
      <div className={classes.paper}>
        <Typography component={"h1"} variant={"h5"}>
          회원가입
        </Typography>
        <form style={{ marginTop: 30 }} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant={"outlined"}
                required
                fullWidth
                id={"email"}
                label={"이메일"}
                name={"email"}
                autoComplete={"email"}
                value={"email"}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant={"outlined"}
                required
                fullWidth
                name={"password"}
                label={"비밀번호"}
                type={"password"}
                id={"password"}
                autoComplete={"current-password"}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant={"outlined"}
                required
                fullWidth
                name={"password"}
                label={"비밀번호 확인"}
                type={"password"}
                id={"password"}
                autoComplete={"current-password"}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox value={"allowExtraEmails"} color={"primary"} />
                }
                label={
                  "I want to receive inspiration, marketing promotions and updates via email."
                }
              />
            </Grid>
          </Grid>
          <Button
            fullWidth
            variant={"contained"}
            color={"primary"}
            className={classes.submit}
          >
            <text style={{ color: "white" }}>회원가입</text>
          </Button>
          <Grid container justify={"flex-end"}>
            <Grid item>
              <Link href={"/login"} variant={"body2"}>
                계정이 있으신가요? 로그인
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Typography variant={"body2"} color={"textSecondary"} align={"center"}>
          Copyright {new Date().getFullYear()}. Vision Mentoring All rights
          reserved.
        </Typography>
      </Box>
    </Container>
  );
};

export default Register;
