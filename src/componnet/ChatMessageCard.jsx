import {Box,Stack, Typography} from '@mui/material'
import person from '../assets/person.png'
import bot from '../assets/bot.png'
import {format} from 'date-fns'
import { useState } from 'react'

const ChatMessageCard = ({message,open,setOpen,setChat,setCurrChatId}) => {
  const [isHover,setIshover]=useState(false);
  return (
    <Box onMouseOver={()=>setIshover(true)} bgcolor={'rgba(215, 199, 244, 0.13)'} borderRadius={5} py={4} px={2} width={'calc(100% - 100px)'} boxShadow={"0px 1px 4px rgba(0, 0, 0, 0.16)"}> 
    <Stack direction={'row'} spacing={2} justifyContent={'flex-start'} alignItems={'center'}>
      <Box component={'img'} src={message.type==='You'?person:bot} borderRadius={'100%'} width={65.3} height={69} />
      <Stack>
        <Typography fontWeight={700} fontSize={16}>{message.type}</Typography>
        <Typography mb={3} fontFamily={'Open Sans'} fontWeight={400} fontSize={16}>{message.text}</Typography>
        <Typography color='rgba(0, 0, 0, 0.62)' fontFamily={'Open Sans'} fontWeight={400} fontSize={10}>{format(message.time, 'hh:mm a')}</Typography>
      </Stack>
    </Stack>
    </Box>
  )
}

export default ChatMessageCard