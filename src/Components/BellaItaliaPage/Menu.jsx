import React from 'react'
import DownloadIcon from '@mui/icons-material/Download';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


function Menu() {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 800,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 1,
    };

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    return (
        <div>
            <Button onClick={handleOpen}>
                <img src="public/Bellalogo.png" alt="" />
            </Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Typography id="transition-modal-description">
                           <img src="public/ModalMenu.png" alt="" />
                        </Typography>
                        <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                           <h1 className='text-[#232323] text-[32px] font-semibold mt-2 text-center'>Menu Bella Italia</h1>
                        </Typography>
                        <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                           <div className='text-center mb-2'>
                              <button className=' text-[#1677BD] border px-6 py-2 rounded-full border-[#1677BD] '>
                                <DownloadIcon/>
                              Dowload this menu
                              </button>
                           </div>
                        </Typography>
                    </Box>
                </Fade>
            </Modal>
        </div>
    )
}

export default Menu
