import { useState } from "react";
import { Grid, Stack,useMediaQuery,Typography } from "@mui/material";
import "./App.css";
import Sidebar from "./componnet/Sidebar";
import { Outlet } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from "react-router-dom";

function App() {
  const [chat, setChat] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:800px)");

  return (
    <Grid
      container
      sx={{minHeight:"100vh", background: "linear-gradient(rgba(215, 199, 244, 0.2), rgba(151, 133, 186, 0.2))" }}
    >
       <Grid
        size={{ xs: 12, md: 2.5 }}
        sx={{
          bgcolor: "white",
          boxShadow: "2px 0 10px rgba(0,0,0,0.05)",
            '@media (max-width:800px)': {
                width: '70%',
                transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
                zIndex:1000,
                transition: 'transform 400ms ease',
                height:'100%'
              },
        }}
        position={{ xs: 'fixed', md: 'relative' }}
        zIndex={{xs:999,md:1}}
        boxShadow={{ xs: isOpen ? 10 : 0, md: 0 }}
      >
        <Sidebar setChat={setChat} Close={() => setIsOpen(false)} />
      </Grid>
      <Grid size={{xs:12,md:9.5}}>
        <Stack spacing={2} m={2} direction={'row'} alignItems={'center'}>
          {isMobile&&(
            <MenuIcon onClick={() => setIsOpen((prev)=>!prev)} />
          )}
          <Link to={'/'} style={{textDecoration:'none'}}>
          <Typography color="#9785BA" fontWeight={700} fontSize={28}>
            Bot AI
          </Typography>
          </Link>
        </Stack>
        <Outlet context={{chat:chat,setChat:setChat}} />
      </Grid>
    </Grid>
  );
}

export default App;
