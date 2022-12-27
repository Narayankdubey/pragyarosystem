import React from 'react'
import Button from '@mui/material/Button';

import SendAllModal from './components/SendAllModal'

const Emails = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  return (
    <div>
      <Button variant="outlined" onClick={handleOpen}>Send Email to all users</Button>
      {open && <SendAllModal open={open} setOpen={setOpen} />}
    </div>
  )
}

export default Emails