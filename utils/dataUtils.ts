import { Dates } from "@app/constants/Dates";
import { msToH } from "@app/utils/utils";

export const getNextTime = (ms: number) => {
  const now = Date.now();
  const clearDate = Dates.getClearDate();
  const nextTime = clearDate.add(ms, "ms");

  const delta = +nextTime - now;

  return delta < 0 ? delta + 24 * 3600 * 1000 : delta;
};

export const isNight = (nightTime: number[]) => {
  const clearDate = Dates.getClearDate();

  let now = Dates.getToday();

  if (nightTime[0] < nightTime[1]) {
    return now.isBetween(
      clearDate.add(nightTime[0], "ms"),
      clearDate.add(nightTime[1], "ms"),
      null,
      "[)"
    );
  } else {
    now =
      now.hour() < msToH(nightTime[0]) ? now.add(24 * 3600 * 1000, "ms") : now;
    return now.isBetween(
      clearDate.add(nightTime[0], "ms"),
      clearDate.add(nightTime[1] + 24 * 3600 * 1000, "ms"),
      null,
      "[)"
    );
  }
};
