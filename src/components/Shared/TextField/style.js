import { styled } from '@mui/material/styles';
import TextField from "@mui/material/TextField";

export const ValidationTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: '30px',
    width: '100% !important',
  },
  '& .MuiOutlinedInput-input': {
    height: '20px',
  },
  'fieldset': {
    borderWidth: '3.5px !important',
  },
  'input': {
    width: '100%',
    color: '#fff',
  },
  'input::placeholder': {
    color: '#ccc',
  }
}));
