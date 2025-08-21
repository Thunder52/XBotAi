import {Typography,Stack,Box} from '@mui/material'

const InitialChatBox = ({message,title,getResponse}) => {
  return (
    <Box sx={{cursor:'pointer'}} onClick={()=>getResponse(message)} bgcolor={'white'} p={2} borderRadius={1} boxShadow={'0 2px 4px rgba(0,0,0,0.1)'}>
        <Stack spacing={1} alignItems={'flex-start'}>
            <Typography fontWeight={700} fontSize={20}>{message}</Typography>
            <Typography color='rgba(0, 0, 0, 0.5)' fontFamily={'Open Sans'} fontSize={16} fontWeight={400}>{title}</Typography>
        </Stack>
    </Box>
  )
}

export default InitialChatBox