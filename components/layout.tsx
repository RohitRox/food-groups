import { ReactNode } from 'react'
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import { alpha, styled } from '@mui/material/styles';
import InputBase from "@mui/material/InputBase";
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <Box>
      <Container maxWidth="md">
        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                HOME
              </Button>
            </Typography>
            <Search>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Toolbar>
        </AppBar>
        <Grid>
          <Grid item>{children}</Grid>
        </Grid>
      </Container>
    </Box>
  );
}
