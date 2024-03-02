namespace ConsultanciesTableTypes {
  interface ConsultanciesTable {
    id: number;
    name: string;
    dateAndTime: date;
    phoneNumber: number;
    consultancyType:
      | "Appointment"
      | "Warranty & Exchange"
      | "Repair & Maintenance";
    slot: string;
    status: "Pending" | "Not Converted" | "Converted";
  }
}
