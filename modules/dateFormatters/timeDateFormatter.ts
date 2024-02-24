export default function timeDateFormatter(inputDate : Date) {
  // Ensure input is a valid Date object
  if (!(inputDate instanceof Date)) {
    throw new Error('Invalid date input');
  }

  // Extract date components
  const hours = String(inputDate.getHours()).padStart(2, '0');
  const minutes = String(inputDate.getMinutes()).padStart(2, '0');
  const day = String(inputDate.getDate()).padStart(2, '0');
  const month = String(inputDate.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const year = inputDate.getFullYear();

  // Format the date string
  const formattedDate = `${hours}:${minutes} ${day}-${month}-${year}`;

  return formattedDate;
}