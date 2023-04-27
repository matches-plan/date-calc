const holidays = [
  '2024-01-01',
  '2023-12-25',
  '2023-10-09',
  '2023-10-03',
  '2023-09-29',
  '2023-09-28',
  '2023-08-15',
  '2023-06-06',
  '2023-05-29',
  '2023-05-05',
];

export function addMonth(refDate: string, add: number) {
  if (refDate === '') return '';
  const referenceDate = new Date(refDate);
  referenceDate.setMonth(referenceDate.getMonth() + add);
  return dateToString(referenceDate);
}

export function addDate(refDate: string, add: number) {
  if (refDate === '') return '';
  const referenceDate = new Date(refDate);
  referenceDate.setDate(referenceDate.getDate() + add);
  return dateToString(referenceDate);
}

export function dateToString(date: Date) {
  return (
    `${date.getFullYear()}-` +
    `${date.getMonth() + 1}`.padStart(2, '0') +
    `-` +
    `${date.getDate()}`.padStart(2, '0')
  );
}

export function isWeekend(date: string) {
  const currentDate = new Date(date);
  return currentDate.getDay() === 6 || currentDate.getDay() === 0;
}

export function isHoliday(date: string) {
  for (const holiday of holidays) {
    if (holiday === date) return true;
  }
  return false;
}

export function dateIsWeekend(date: Date) {
  return date.getDay() === 6 || date.getDay() === 0;
}

export function dateIsHoliday(date: Date) {
  for (const holiday of holidays) {
    if (holiday === dateToString(date)) return true;
  }
  return false;
}

export function addWorkdayWithHoliday(current: string, day: number) {
  if (current === '') return '';
  let count = 0;
  const currentDate = new Date(current);
  while (count < day) {
    currentDate.setDate(currentDate.getDate() + 1);
    if (!dateIsWeekend(currentDate) && !dateIsHoliday(currentDate)) {
      count++;
    }
  }
  return dateToString(currentDate);
}
