import { format, parse } from "date-fns";

const formatDate = (dateString) => {
  const parsedDate = parse(dateString, "yyyy-MM-dd HH:mm:ss", new Date());
  return format(parsedDate, "MMM d, yyyy 'at' h:mm a");
};

export default formatDate;
