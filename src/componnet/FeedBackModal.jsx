import {Modal,Box,Stack, Typography,TextField,Button} from '@mui/material'
import bulb from '../assets/Bulb.png'
import { useState } from 'react';

const FeedBackModal = ({open, setChat, currChatId, handleClose}) => {
    const [feedback,setFeedback] = useState('');

 const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '95%',
  bgcolor: '#FAF7FF',
  boxShadow: 24,
  p: {xs:2,md:3},
  borderRadius:'10px',
  maxWidth:720
};

const handleSubmit=(e)=>{
    e.preventDefault();
    setChat((prev)=>prev.map(c=>c.id===currChatId ?{...c,feedback}:{...c}));
    setFeedback('');
    handleClose();
}
  return (
    <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
            <Stack>
            <Stack direction={'row'} justifyContent={'space-between'}>
                <Stack spacing={2} direction={'row'} alignItems={'center'}>
                    <Box component={'img'} src={bulb} height={42} width={40} />
                    <Typography fontFamily={'Open Sans'} fontWeight={400} fontSize={22}>Provide Additional Feedback</Typography>
                </Stack>
            <Typography sx={{cursor:'pointer'}} onClick={handleClose} fontWeight={500} fontSize={28}>X</Typography>
            </Stack>
            <Box pt={3} sx={{display:'flex',flexDirection:'column',alignItems:'flex-end', gap:'12px'}} component={'form'} onSubmit={handleSubmit}>
                <TextField
                multiline
                rows={6}
                value={feedback}
                sx={{width:1, bgcolor:'white'}}
                onChange={(e) => setFeedback(e.target.value)}
                required
                />
                <Button variant='contained' size='large' type='submit' sx={{bgcolor:'#D7C7F4',color:'black',fontWeight:400,fontSize:20,paddingX:3}}>Submit</Button>
            </Box>
            </Stack>
        </Box>
    </Modal>
  )
}

export default FeedBackModal