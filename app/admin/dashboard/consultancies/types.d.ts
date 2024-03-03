namespace ConsultancyTypes {
  interface AddNewConsultancy {
    name: string;
    consutationType:
      | "Repair and Maintenance"
      | "Appointment"
      | "Warranty & Exchange";
    consultancySubType: {
      Company: string;
      Cetegory: string;
      Issue: string;
      Status: string;
      issueMSG: string;
    };
    ContactNumber: number;
    Email: string;
    slots: {
      Date: Date;
      Time: Date;
    };
    status: "Pending" | "Converted" | "Not Converted";
    messages: string;
  }

  interface State {
    loading: Record<string, AsyncState>;
  }
}
