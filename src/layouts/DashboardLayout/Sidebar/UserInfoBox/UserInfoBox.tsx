import MoreIcon from '@/assets/icons/more_vert.svg?react';
import { Avatar, Stack, Typography } from '@mui/material';
import { StyledBox } from '../Sidebar.style';
import { SVGBox } from './UserInfoBox.style';
import { useAppSelector } from '@/redux/hooks';

const primaryMain = 'primary.main';

function UserInfoBox() {
  const user = useAppSelector((state) => state.authReducer);
  return (
    <StyledBox padding={'10px 5px'} height={65} position={'relative'}>
      <SVGBox display={{ xs: 'none', md: 'flex' }}>
        <MoreIcon />
      </SVGBox>
      <Stack
        direction={'row'}
        width={'100%'}
        alignItems="center"
        justifyContent={{ xs: 'center', md: 'flex-start' }}
      >
        <Avatar sx={{ bgcolor: primaryMain }} src={user.photo} />
        <Stack display={{ xs: 'none', md: 'flex' }} marginLeft={0.75}>
          <Typography
            fontWeight={600}
            fontSize={'0.8rem'}
            color={primaryMain}
          >{`${user.firstName} ${user.lastName}`}</Typography>
          <Typography color={primaryMain} fontSize={'0.7rem'}>
            {user.email}
          </Typography>
        </Stack>
      </Stack>
    </StyledBox>
  );
}

export default UserInfoBox;
