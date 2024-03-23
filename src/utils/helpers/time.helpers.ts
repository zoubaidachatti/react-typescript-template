import { TimeOfDayEnum } from '@/config/enums';

export function isMorning(): boolean {
  const currentHour: number = new Date().getHours();
  return currentHour >= 0 && currentHour < 12;
}

export function getTimeOfDay(): TimeOfDayEnum {
  const currentHour: number = new Date().getHours();

  if (currentHour >= 0 && currentHour < 6) {
    return TimeOfDayEnum.Night;
  } else if (currentHour >= 6 && currentHour < 12) {
    return TimeOfDayEnum.Morning;
  } else if (currentHour >= 12 && currentHour < 18) {
    return TimeOfDayEnum.Afternoon;
  } else {
    return TimeOfDayEnum.Evening;
  }
}
