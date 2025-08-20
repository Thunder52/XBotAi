import { Button, Typography, useMediaQuery } from "@mui/material";
import { Box, Stack } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import img from "../assets/newchat.png";
import icon from "../assets/edit.png";
import { Link } from "react-router-dom";

const Sidebar = ({ setChat, Close }) => {
  const isMobile = useMediaQuery("(max-width:800px)");
  return (
    <Stack spacing={3} alignItems={'center'} sx={{width:'100%'}} >
      {isMobile && (
        <Button
          onClick={Close}
          sx={{ color: "#D7C7F4", justifyContent: "flex-end", width: 1 }}
          endIcon={<CloseIcon />}
        >
          Close
        </Button>
      )}
      <Link to={"/"} style={{ textDecoration: "none", color: "#000000",width:'100%' }}>
        <Stack
          bgcolor={"#D7C7F4"}
          direction={"row"}
          sx={{ cursor: "pointer", "&:hover": { bgcolor: "#AF9FCD" } }}
          onClick={() => {
            setChat([]);
            Close();
          }}
          py={2}
          alignItems={"center"}
          justifyContent={"space-between"}
          px={{ xs: 2, md: 3 }}
        >
            <Box
              component={"img"}
              src={img}
              height={40}
              width={40}
              borderRadius={2}
            />
            <Typography
              fontSize={20}
              fontWeight={400}
              color="#000000"
            >
              New Chat
            </Typography>
            <Box component={'img'} src={icon} height={30} width={30} />
          </Stack>
      </Link>
      <Link to={"/history"}>
        <Button
          size="large"
          variant="contained"
          sx={{ backgroundColor: "#D7C7F4", borderRadius: 2,width:1 }}
        >
          <Typography
            fontSize={16}
            fontWeight={700}
            color="#414146"
          >
            Past Conversations
          </Typography>
        </Button>
      </Link>
    </Stack>
  );
};

export default Sidebar;
