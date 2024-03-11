import dayjs from "dayjs";
import { DATE_TIME } from "../constants/constants";

export const toDayjsDateTimeData = (value) =>
  dayjs(new Date(value)).format(DATE_TIME.YEAR_MONTH_DATE_TIME);
