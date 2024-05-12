import { Backdrop, Box, Button, TextField } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

export default function MovieDetailsEdit({ isEdit, toggleEdit, movie }) {
    const [initialState, setInitialState] = useState({
        title:movie.title,
        description:movie.description,
    });
    const [editValues, setEditValues] = useState(initialState);
    const dispatch = useDispatch();
    const handleChange = (type, e) => {
        const value = e.target.value;
        switch (type) {
            case "title":
                setEditValues({...editValues, title:value});
                break;
            case "description":
                setEditValues({...editValues, description:value});
                break;
            default:
                break;
        }
    }

    const handleSave = () => {
        const payload = {
            id:movie.id,
            title:editValues.title,
            description:editValues.description
        }
        dispatch({type:"UPDATE_MOVIE", payload:payload})
        toggleEdit();
    }

  return (
    <Backdrop
        open={isEdit}
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
        <Box style={{width:"700px", height:"fit-content", backgroundColor:"grey", display:"flex", flexDirection:"column", gap:10, borderRadius:"10px", padding:"10px"}}>
            <TextField value={editValues.title} onChange={(e) => handleChange("title",e)} variant="standard" label="Title" />
            <TextField value={editValues.description} onChange={(e) => handleChange("description",e)} variant="standard" label="Description" multiline />
            <Button onClick={handleSave} variant="contained">Save</Button>
            <Button variant="filled" onClick={toggleEdit}>Cancel</Button>
        </Box>
    </Backdrop>
  )
}
