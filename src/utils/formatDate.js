import { format } from "date-fns";

const formatDate = (dateString) => {
    try {
        const dateObj = new Date(dateString);

        return format(dateObj, "MMM d, yyyy 'at' h:mm a");
    } catch (e) {
        console.error("Error parsing date:", e);
        return dateString;
    }
};

export default formatDate;
