import { useState } from "react";
import { Stack, Grid, Typography, Box } from "@mui/material";
import { useOutletContext } from "react-router-dom";
import aiRes from "../aiData/sampleData.json";
import icon from "../assets/bot.png";
import InitialChatBox from "../componnet/InitialChatBox";
import InputForm from "../componnet/InputForm";
import ChatMessageCard from "../componnet/ChatMessageCard";

const messages = [
  {
    message: "Hi, what is the weather",
    title: "Get immediate AI generated response",
  },
  {
    message: "Hi, what is my location",
    title: "Get immediate AI generated response",
  },
  {
    message:"Hi, what is the temperature",
    title: "Get immediate AI generated response",
  },
  {
    message:"Hi, how are you",
    title: "Get immediate AI generated response",
  }
];

const Home = () => {
  const { chat, setChat } = useOutletContext();
  const [isOpen, setIsOpen] = useState(false);
  const [chatID, setChatid] = useState(1);
  const [currChatId, setCurrChatId] = useState(null);

  const getResponse = (question) => {
    const res = aiRes.find(
      (item) => item.question.toLowerCase() === question.toLowerCase()
    );
    let ans = res.response;
    if (res === undefined) {
      ans = "Sorry, Did not understand your query!";
    }
    setChat((prev) => [
      ...prev,
      { type: "You", text: question, id: chatID, time: new Date() },
      { type: "Soul AI", text: ans, id: chatID + 1, time: new Date() },
    ]);
    setChatid(chatID + 2);
  };

  return (
    <Stack
      height={"88%"}
      justifyContent={"flex-end"}
      spacing={5}
      alignItems={"center"}
      m={2}
    >
      {chat.length===0 &&(
        <>
        <Stack spacing={1} alignItems={"center"}>
        <Typography mb={5} color="#000000" fontWeight={600} fontSize={28}>
          How Can I Help You Today?
        </Typography>
        <Box
          component={"img"}
          src={icon}
          borderRadius={"100%"}
          width={65}
          height={69}
        />
        </Stack>
        <Grid pt={5} container  rowSpacing={2} columnSpacing={2}>
        {messages.map((item,index)=>(
          <Grid key={index} size={{md:6,xs:12}}>
          <InitialChatBox message={item.message} title={item.title} getResponse={getResponse}/>
          </Grid> 
        ))}
        </Grid>
        </>
      )}
      {chat.length>0 && (
        <Stack spacing={2} width={'100%'} alignItems={'center'}> 
        {chat.map((item)=>(
          <ChatMessageCard message={item} key={item.id} open={isOpen} setOpen={setIsOpen} setChat={setChat} setCurrChatId={setCurrChatId}/>
        ))}
        </Stack>
      )}
        <InputForm getResponse={getResponse} chat={chat} setChat={setChat}  />
    </Stack>
  );
};

export default Home;
