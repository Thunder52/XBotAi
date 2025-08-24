import { useState, useEffect, useRef } from "react";
import { TextField, Stack, Button,Box,Snackbar,Alert } from "@mui/material";

const InputForm = ({ getResponse,chat,setChat }) => {
  const inputRef = useRef(null);
  const [input, setInput] = useState("");
  const [openSnackbar,setOpen]=useState(false);

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    getResponse(input);
    setInput("");
  };

  const handleSave=()=>{
    const prevChat=JSON.parse(localStorage.getItem('chat')||'[]');
    const date=new Date();
    localStorage.setItem('chat',JSON.stringify([{chat,date:date},...prevChat]));
    setChat([]);
    setOpen(true);
  }
  return (
    <Box width={'100%'}>
    <Box component="form" onSubmit={handleSubmit}>
      <Stack direction={'row'} spacing={{ md: 1, xs: 0.5 }}>
        <TextField
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Message Bot AI..."
          inputRef={inputRef}
          fullWidth
          required
          sx={{bgcolor:'white',borderRadius:1,border:'1px solid rgba(0, 0, 0, 0.45)'}}
        />
        <Button size="samll" sx={{bgcolor:'#D7C7F4',color:'#000000'}} variant="contained" type="submit">Ask</Button>
        <Button onClick={handleSave} size="small" sx={{bgcolor:'#D7C7F4',color:'#000000'}} variant="contained">save</Button>
      </Stack>
    </Box>
<Snackbar open={openSnackbar} autoHideDuration={5000} onClose={()=>setOpen(false)}>
  <Alert
    onClose={()=>setOpen(false)}
    severity="success"
    variant="filled"
    sx={{ width: '100%' }}
  >
    Successfully saved the chat!
  </Alert>
</Snackbar>
    </Box>
  );
};

export default InputForm;
