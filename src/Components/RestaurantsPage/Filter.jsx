import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import SwapVertIcon from '@mui/icons-material/SwapVert';
function Filter() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        borderRadius: 5
    };

    return (
        <div>
            <Button onClick={handleOpen}
                className='flex items-center border py-1  px-3 rounded-full text-black hover:text-white bg-inherit hover:bg-gray-500'
            > <SwapVertIcon /> Sort </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" className='text-[#5D5D5D] bg-inherit hover:text-[#2146C7] hover:bg-[#B0C2FF21]' >
                        All feedbacks
                    </Typography>
                    <Typography id="modal-modal-title" variant="h6" component="h2" className='text-[#5D5D5D] bg-inherit hover:text-[#2146C7] hover:bg-[#B0C2FF21]'>
                        Highest rated
                    </Typography>
                    <Typography id="modal-modal-title" variant="h6" component="h2" className='text-[#5D5D5D] bg-inherit hover:text-[#2146C7] hover:bg-[#B0C2FF21]'>
                        oldest rated
                    </Typography>
                </Box>
            </Modal>
        </div>
    )
}

export default Filter
