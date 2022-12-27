import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function SendAllModal({open,setOpen}) {
  
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Send Email To All Emails</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Email will be sent to all the email address present in database.
          </DialogContentText>
          <form>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Subject"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            multiline
            margin="dense"
            id="name"
            label="Text"
            type="text"
            fullWidth
            variant="standard"
          />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Send</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}