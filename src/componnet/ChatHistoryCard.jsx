import { Stack, Box, Typography, Rating } from "@mui/material";
import human from "../assets/person.png";
import ai from "../assets/bot.png";
import { isToday,isYesterday,format } from "date-fns";

const ChatHistoryCard = ({ chat }) => {

    function formatDate(date) {
        if(isToday(date)){
            return "Today's Chats"
        }else if(isYesterday(date)){
            return "Yesterday's Chats"
        }else{
            return format(date, "MMMM dd, yyyy")+" Chats"
        }
    }
  return (
    <Box >
      <Typography mb={2} fontWeight={400} fontSize={20}>
        {formatDate(chat.date)}
      </Typography>
    
    <Box
      sx={{ background: "linear-gradient(90deg,#BFACE2,#D7C7F4)" }}
      borderRadius={5}
      py={4}
      px={2}
      width={"calc(100% - 100px)"}
      boxShadow={"0px 1px 4px rgba(0, 0, 0, 0.16)"}
    >
      <Stack spacing={5} alignItems={"flex-start"} width="100%">
        <Stack direction={"row"} spacing={2}>
          <Box
            component={"img"}
            src={human}
            borderRadius={"100%"}
            width={65.3}
            height={69}
          />
          <Stack>
          <span style={{fontWeight:700, fontSize:16}}>
            {chat.chat[0].type}
          </span>
            <Typography
              mb={3}
              fontFamily={"Open Sans"}
              fontWeight={400}
              fontSize={16}
              sx={{ flex: 1 }}
            >
              {chat.chat[0].text}
            </Typography>
            <Stack direction={"row"} spacing={0.5} alignItems={"center"}>
              <Typography
                color="rgba(0, 0, 0, 0.62)"
                fontFamily={"Open Sans"}
                fontWeight={400}
                fontSize={10}
              >
                {format(chat.chat[0].time, "hh:mm a")}
              </Typography>
            </Stack>
          </Stack>
        </Stack>
        <Stack spacing={1} alignItems={"flex-start"} width="100%">
          <Stack direction={"row"} spacing={2}>
            <Box
              component={"img"}
              src={ai}
              borderRadius={"100%"}
              width={65.3}
              height={69}
            />
            <Stack>
          <span style={{fontWeight:700, fontSize:16}}>
            {chat.chat[1].type}
          </span>
              <Typography
                mb={3}
                fontFamily={"Open Sans"}
                fontWeight={400}
                fontSize={16}
                sx={{ flex: 1 }}
              >
                {chat.chat[1].text}
              </Typography>
              <Stack direction={"row"} spacing={0.5} alignItems={"center"}>
                <Typography
                  color="rgba(0, 0, 0, 0.62)"
                  fontFamily={"Open Sans"}
                  fontWeight={400}
                  fontSize={10}
                >
                  {format(chat.chat[1].time, "hh:mm a")}
                </Typography>
                {chat.chat[1].rating && (
                  <Rating
                    value={chat.chat[1].rating}
                    readOnly
                    sx={{
                      color: "black",
                      "& .MuiRating-iconFilled": {
                        color: "black",
                      },
                      "& .MuiRating-iconEmpty": {
                        color: "black",
                      },
                    }}
                  />
                )}
              </Stack>
              {chat.chat[1].feedback && (
                <Typography fontFamily={"Open Sans"} fontSize={16} fontWeight={400} >
                    <span style={{fontWeight:700}}>Feedback: </span>{chat.chat[1].feedback}
                </Typography>
              )}
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Box>
    </Box>
  );
};

export default ChatHistoryCard;
