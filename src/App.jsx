import './App.css'
import WordCard from './components/WordCard'
import Login from './components/Login'
import TopContributors from './components/TopContributors'
import SideBar from './components/SideBar'
import Box from "@mui/system/Box";
import Grid from "@mui/system/Unstable_Grid";
import styled from "@mui/system/styled";

const Item = styled("div")(({ theme }) => ({
  backgroundColor: "#999999",
  padding: theme.spacing(1),
  // borderRadius: "4px",
  textAlign: "center",
  color: "#FFFFFF",
}));

function App() {

  return (
    <>
    <SideBar/>
    <h1>Online Digital Journal</h1>
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} columns={16}>
          <Grid xs={8}>
            <Item>
              User Login <Login/>
            </Item>
          </Grid>
          <Grid xs={8}>
            <Item>
              Inspiration <WordCard/>
            </Item>
          </Grid>
          <Grid xs={16}>
            <Item>ODJ Members <TopContributors/>
            </Item>
          </Grid>
          <Grid xs={8}>
            <Item>xs=8</Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default App
