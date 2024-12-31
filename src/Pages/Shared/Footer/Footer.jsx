import { Box, Grid, Typography } from '@mui/material';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box
      component='footer'
      className='text-white py-10 mt-10'
      sx={{ width: '100%' }}
    >
      <Grid container>
        {/* First Grid item for Contact Us */}
        <Grid item xs={12} sm={6}>
          <Box
            className='bg-[#1F2937] h-44 lg:h-60'
            sx={{ textAlign: 'center' }}
          >
            <Typography
              variant='h6'
              gutterBottom
              className='font-extrabold lg:pt-16 pt-4'
            >
              CONTACT US
            </Typography>
            <div>
              <p>123 ABB Street, Uni 21, Bangladesh</p>
              <p>+88 123 456 789</p>
              <p>Mon - Fri : 08:00 - 22:00</p>
              <p>Sat - Sun : 10:00 - 23:00</p>
            </div>
          </Box>
        </Grid>

        {/* Second Grid item for Follow Us */}
        <Grid item xs={12} sm={6}>
          <Box
            className='bg-[#111827] h-44 lg:h-60'
            sx={{ textAlign: 'center' }}
          >
            <Typography
              variant='h6'
              gutterBottom
              className='font-extrabold lg:pt-16 pt-6'
            >
              FOLLOW US
            </Typography>
            <div>
              <p>Join On Social Media</p>
              <div className='flex justify-center mt-4 '>
                <FaFacebookF size={30} />
                <FaInstagram size={30} />
                <FaTwitter size={30} />
              </div>
            </div>
          </Box>
        </Grid>
      </Grid>

      {/* Footer bottom with copyright */}
      <Box
        className='text-center text-gray-500 text-sm bg-black w-full'
        sx={{ padding: '10px 0', textAlign: 'center' }}
      >
        <Typography>
          &copy; {new Date().getFullYear()} Bistro-Boss. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
