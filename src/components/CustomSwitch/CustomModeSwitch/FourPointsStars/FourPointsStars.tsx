import { Typography } from '@mui/material';
import { RootStyle } from './FourPointsStarts.style';

const FourPointsStars = () => {
  return (
    <RootStyle>
      <Typography position={'absolute'} fontSize={'0.6rem'} top={-12} left={5}>
        &#10022;
      </Typography>
      <Typography position={'absolute'} fontSize={'0.4rem'} top={-12} left={17}>
        &#10022;
      </Typography>
      <Typography position={'absolute'} fontSize={'0.3rem'} top={-7} left={13}>
        &#10022;
      </Typography>
    </RootStyle>
  );
};

export default FourPointsStars;
