import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: "#F57C00",
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
  },
});

export default function Authentication() {
  const [username, setUsername] = React.useState();
  const [password, setPassword] = React.useState();
  const [name, setName] = React.useState();
  const [error, setError] = React.useState();
  const [messages, setMessages] = React.useState();

  const [formState, setFormState] = React.useState(0);
  const [open, setOpen] = React.useState(false);

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />

        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            flexBasis: { md: "47%", sm: "33%" },
            backgroundImage:
              "url('https://pbs.twimg.com/media/GtgO6LsaMAAuJaU.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background:
                "linear-gradient(135deg, rgba(245, 124, 0, 0.2) 0%, rgba(0, 0, 0, 0.3) 100%)",
            },
          }}
        />

        <Box
          sx={{
            position: "absolute",
            top: 50,
            left: 30,
            zIndex: 1,
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Box
            sx={{
              width: 50,
              height: 50,
              borderRadius: "12px",
              backgroundImage:
                "url('https://play-lh.googleusercontent.com/lCcbo_ss7BmepxbHvWwTB3nyWwXDlMDOKcufUcjvury4Pbq_l8SH-WHUrJYYKu0bpag')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 8px 24px rgba(245, 124, 0, 0.3)",
            }}
          ></Box>
          <Typography
            variant="h4"
            sx={{
              color: "white",
              fontWeight: 700,
              textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
            }}
          >
            PeerConnect
          </Typography>
        </Box>

        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar
              sx={{
                m: 1,
                bgcolor: "transparent",
                background: "linear-gradient(135deg, #F57C00 0%, #FF9800 100%)",
                width: 70,
                height: 70,
                boxShadow: "0 8px 24px rgba(245, 124, 0, 0.3)",
              }}
            >
              <LockOutlinedIcon sx={{ fontSize: 32 }} />
            </Avatar>

            <Typography
              component="h1"
              variant="h4"
              sx={{
                fontWeight: 700,
                color: "#333",
                mb: 1,
              }}
            >
              Welcome Back
            </Typography>

            <Typography
              component="h1"
              variant="body1"
              sx={{
                color: "#666",
                mb: 3,
              }}
            >
              Continue to PeerConnect
            </Typography>

            <div>
              <Button
                variant={formState === 0 ? "contained" : ""}
                onClick={() => {
                  setFormState(0);
                }}
              >
                SignIn
              </Button>
              <Button
                variant={formState === 1 ? "contained" : ""}
                onClick={() => {
                  setFormState(1);
                }}
              >
                SignUp
              </Button>
            </div>

            <Box component="form" noValidate sx={{ mt: 1 }}>
              {formState === 1 ? (
                <TextField
                  id="fullname"
                  margin="normal"
                  required
                  fullWidth
                  label="Full Name"
                  name="fullname"
                  onChange={(e) => setName(e.target.value)}
                />
              ) : (
                <></>
              )}
              <TextField
                id="username"
                margin="normal"
                required
                fullWidth
                label="Username"
                name="username"
                onChange={(e) => setUsername(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                label="Password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />

              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />

              <Button
                type="button"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  borderRadius: "12px",
                  fontWeight: 600,
                  fontSize: "16px",
                  textTransform: "none",
                  background:
                    "linear-gradient(135deg, #F57C00 0%, #FF9800 100%)",
                  boxShadow: "0 8px 24px rgba(245, 124, 0, 0.3)",
                  "&:hover": {
                    background:
                      "linear-gradient(135deg, #E65100 0%, #F57C00 100%)",
                    boxShadow: "0 12px 28px rgba(245, 124, 0, 0.4)",
                  },
                }}
              >
                Sign In
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
