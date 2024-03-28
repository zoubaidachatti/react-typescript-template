import Clouds from './Clouds/Clouds';
import { CircleStyle, RootStyle, StyledStack } from './CustomModeSwitch.style';
import FourPointsStars from './FourPointsStars/FourPointsStars';

const CustomModeSwitch = ({ isDark, toggle }: { isDark: boolean; toggle: () => void }) => {
  return (
    <RootStyle
      isdark={`${isDark}`}
      justifyContent={'center'}
      onClick={toggle}
      alignItems={isDark ? 'flex-start' : 'flex-end'}
    >
      <CircleStyle isdark={`${isDark}`} />
      <StyledStack transform={isDark ? 'translateY(20px)' : 'translateY(0)'}>
        <Clouds />
      </StyledStack>
      <StyledStack transform={isDark ? 'translateY(0)' : 'translateY(-20px)'}>
        <FourPointsStars />
      </StyledStack>
    </RootStyle>
  );
};

export default CustomModeSwitch;
