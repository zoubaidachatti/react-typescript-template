import { HorizontalDivider, VerticalDivider } from './CustomDivider.style';
import { CustomDividerProps } from './CustomDividerProps.type';

function CustomDivider({ orientation, color, width }: CustomDividerProps) {
  if (orientation === 'horizontal') {
    return <HorizontalDivider bgcolor={color} height={width ?? '2px'} />;
  }

  return <VerticalDivider bgcolor={color} width={width ?? '2px'} />;
}

export default CustomDivider;
