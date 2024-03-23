import { TimeOfDayEnum } from '@/config/enums';
import { getTimeOfDay } from '@/utils/helpers/time.helpers';

export const generateTimeLabel = () => {
  const timeOfDay = getTimeOfDay();

  switch (timeOfDay) {
    case TimeOfDayEnum.Afternoon:
      return 'good_afternoon';
    case TimeOfDayEnum.Evening:
      return 'good_evening';
    case TimeOfDayEnum.Morning:
      return 'good_morning';
    case TimeOfDayEnum.Night:
      return 'good_night';
    default:
      return '';
  }
};
