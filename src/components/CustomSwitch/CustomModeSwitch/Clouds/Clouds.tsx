import { CircleStyle, RootStyle } from './Clouds.style';

const scale = 'scale(0.7)';
const scale1 = 'scale(0.9)';

const Clouds = () => {
  return (
    <RootStyle>
      <CircleStyle width={11} height={4} top={-5} right={3} sx={{ transform: scale1 }} />
      <CircleStyle width={4} height={4} top={-7} right={8} sx={{ transform: scale1 }} />
      <CircleStyle width={5} height={6} top={-7} right={5} sx={{ transform: scale1 }} />

      <CircleStyle width={12} height={4} top={3} right={7} sx={{ transform: scale }} />
      <CircleStyle width={4} height={4} top={2} right={13} sx={{ transform: scale }} />
      <CircleStyle width={4} height={4} top={1} right={11} sx={{ transform: scale }} />
      <CircleStyle width={4} height={4} top={2} right={9} sx={{ transform: scale }} />
    </RootStyle>
  );
};

export default Clouds;
