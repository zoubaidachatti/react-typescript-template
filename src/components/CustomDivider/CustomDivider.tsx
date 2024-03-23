import { HorizontalDivider, VerticalDivider } from './CustomDivider.style';
import { CustomDividerProps } from './CustomDividerProps.type';

function CustomDivider({ orientation, color, width }: CustomDividerProps) {
  if (orientation === 'horizontal') {
    return <HorizontalDivider color={color} width={width} />;
  }

  return <VerticalDivider color={color} width={width} />;
}

export default CustomDivider;
