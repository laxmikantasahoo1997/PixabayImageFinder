import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { Grid } from '@mui/material';
import Modal from '@mui/material/Modal';
import CancelIcon from '@mui/icons-material/Cancel';
import Box from '@mui/material/Box';

const Images = () => {
    const [image,setImage] = useState([]);

    const [open, setOpen] = useState(false);
    const[img,setImg] = useState('');

    useEffect(() => {
        axios.get("https://pixabay.com/api/?key=27333739-9d7bbeb03e4b3d298d2f5f31e&image_type=photo&per_page=200")
          .then((response) => {
            setImage(response?.data?.hits);
          });
      }, []);

      const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 900,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };

      const handleOpen = (imageURL) => {setOpen(true);setImg(imageURL)};
      const handleClose = () => setOpen(false);

  return (
    <div style={{marginTop:'2%'}}>
      <Modal open={open} onClose={handleClose} >
                              <Box sx={style}>
                                  <CancelIcon onClick={handleClose} style={{fontSize:'50px',marginLeft:'90%'}}/>
                                  <img src={img} alt="large_image" height='100%' width='100%' />
                              </Box>
                            </Modal>
       <Grid container spacing={2}>
       {image?.map((item, key) => 
        (
          <Grid item xs={12} sm={6} md={4} lg={3}>
         <img src={item?.largeImageURL} onClick={()=> handleOpen(item?.largeImageURL)} key={key} alt="img" height="300px" width="100%" style={{objectFit:'cover',borderRadius:'5px'}}/>
         </Grid>
        )
    )}
       </Grid>
    </div>
  )
}

export default Images
