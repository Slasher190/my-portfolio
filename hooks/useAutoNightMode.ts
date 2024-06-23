// hooks/useAutoNightMode.ts
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@app/redux/store/hooks";
import { setTheme } from "@app/redux/slices/themeSlice";
import { getNextTime, isNight } from "@app/utils/dataUtils";

let timeoutNightStarts: null | ReturnType<typeof setTimeout> = null;
let timeoutNightEnds: null | ReturnType<typeof setTimeout> = null;

export const useAutoNightMode = (): void => {
  const dispatch = useAppDispatch();
  const { isNightMode, nightTime } = useAppSelector((state) => state.nightMode);

  useEffect(() => {
    timeoutNightStarts && clearTimeout(timeoutNightStarts);
    timeoutNightEnds && clearTimeout(timeoutNightEnds);

    if (isNightMode) {
      if (isNight(nightTime)) {
        dispatch(setTheme("dark"));
      } else {
        dispatch(setTheme("light"));
      }

      const runTimeoutStart = () => {
        dispatch(setTheme("dark"));
        timeoutNightStarts = setTimeout(runTimeoutStart, 24 * 3600 * 1000);
      };

      const nextStartTime = getNextTime(nightTime[0]);
      timeoutNightStarts = setTimeout(runTimeoutStart, nextStartTime);

      const runTimeoutEnd = () => {
        dispatch(setTheme("light"));
        timeoutNightEnds = setTimeout(runTimeoutEnd, 24 * 3600 * 1000);
      };

      let nextEndTime = getNextTime(nightTime[1]);
      nextEndTime =
        nextStartTime > nextEndTime
          ? nextEndTime + 24 * 3600 * 1000
          : nextEndTime;
      timeoutNightEnds = setTimeout(runTimeoutEnd, nextEndTime);
    }

    return () => {
      timeoutNightStarts && clearTimeout(timeoutNightStarts);
      timeoutNightEnds && clearTimeout(timeoutNightEnds);
    };
  }, [dispatch, isNightMode, nightTime]);
};
