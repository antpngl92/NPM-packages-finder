import moment from "moment";

export const formatDate = (date: string) => {
  return moment(date).utc().format("YYYY-MM-DD");
};
