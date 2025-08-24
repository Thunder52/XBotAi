import { Stack, Box, Typography } from "@mui/material";
import ChatHistoryCard from "../componnet/ChatHistoryCard";

const History = () => {
  const chats = JSON.parse(localStorage.getItem("chat") || "[]");
  return (
    <Stack height="100%" width="100%">
      <Stack
        flexGrow={1}
        p={2}
        spacing={2}
        alignItems={"center"}
        sx={{
          overflowY: "auto",
          "&::-webkit-scrollbar": { width: "6px" },
          "&::-webkit-scrollbar-thumb": {
            background: "#bbb",
            borderRadius: "10px",
          },
        }}
      >
        <Typography fontWeight={400} fontSize={28}>
          Conversation History
        </Typography>
        {chats.length === 0 && (
          <Stack bgcolor={'white'} width={'calc(100% - 100px)'} justifyContent={'center'} alignItems={'center'} p={5} borderRadius={2} boxShadow={'0 2px 4px rgba(0,0,0,0.1)'} spacing={2}> 
          <Typography
            fontWeight={400}
            fontSize={16}
            color="rgba(0, 0, 0, 0.62)"
          >
            No Saved chats.
          </Typography>
          </Stack>
        )}
        {chats.length > 0 && (
          <Stack spacing={1} alignItems={"center"} width={"100%"}>
            {chats.map((item, index) => (
              <ChatHistoryCard key={index} chat={item} />
            ))}
          </Stack>
        )}
      </Stack>
    </Stack>
  );
};

export default History;
