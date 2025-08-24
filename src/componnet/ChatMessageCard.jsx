import { Box, IconButton, Stack, Typography, Rating } from "@mui/material";
import person from "../assets/person.png";
import bot from "../assets/bot.png";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import like from "../assets/Thumbs up.png";

const ChatMessageCard = ({
  message,
  setOpen,
  setChat,
  setCurrChatId,
}) => {
  const [isHover, setIshover] = useState(false);
  const [isRating, setisRating] = useState(false);
  const [rating, setRating] = useState(0);

  const handleHover = () => {
    if (message.type === "Soul AI") {
      setIshover(true);
    }
  };

  useEffect(() => {
if (isRating) {
    setChat((prev) =>
      prev.map((chat) =>
        chat.id === message.id
          ? { ...chat, rating: rating || 0 }
          : chat
      )
    );
  }
  }, [rating]);

  
  return (
    <Box
      onMouseEnter={handleHover}
      onMouseLeave={() => setIshover(false)}
      bgcolor={"rgba(215, 199, 244, 0.13)"}
      borderRadius={5}
      py={4}
      px={2}
      width={"calc(100% - 100px)"}
      boxShadow={"0px 1px 4px rgba(0, 0, 0, 0.16)"}
    >
      <Stack
        direction={"row"}
        spacing={2}
        justifyContent={"flex-start"}
        alignItems={"center"}
      >
        <Box
          component={"img"}
          src={message.type === "You" ? person : bot}
          borderRadius={"100%"}
          width={65.3}
          height={69}
        />
        <Stack>
          <span style={{fontWeight:700, fontSize:16}}>
            {message.type}
          </span>
          <Typography
            mb={3}
            fontFamily={"Open Sans"}
            fontWeight={400}
            fontSize={16}
          >
            {message.text}
          </Typography>
          <Stack direction={"row"} spacing={0.5} alignItems={"center"}>
            <Typography
              color="rgba(0, 0, 0, 0.62)"
              fontFamily={"Open Sans"}
              fontWeight={400}
              fontSize={10}
            >
              {format(message.time, "hh:mm a")}
            </Typography>
            {(isHover || isRating) && (
              <>
                <IconButton onClick={() => setisRating((prev) => !prev)}>
                  <Box component={"img"} src={like} width={16} height={16} />
                </IconButton>
                <IconButton
                  onClick={() => {
                    setCurrChatId(message.id);
                    setOpen(true);
                  }}
                >
                  <Box
                    component={"img"}
                    src={like}
                    width={16}
                    height={16}
                    sx={{ rotate: "180deg" }}
                  />
                </IconButton>
              </>
            )}
          </Stack>
          {isRating && (
            <Rating
              name="half-rating"
              value={rating}
              onChange={(event, newValue) => {
                setRating(newValue);
              }}
              defaultValue={rating}
              precision={1}
            />
          )}
          {message.feedback && (
            <Typography fontWeight={400} fontSize={16}>
              <span style={{fontWeight:700}}>Feedback: </span>{message.feedback}
            </Typography>
          )}
        </Stack>
      </Stack>
    </Box>
  );
};

export default ChatMessageCard;
