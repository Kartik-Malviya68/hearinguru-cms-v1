namespace ConsultancyTypes {
  interface AddNewConsultancy {
    name: string;
    consutationType:
      | "Repair and Maintenance"
      | "Appointment"
      | "Warranty & Exchange";
    consultancySubType?: {
      Company: 'Oticon' | 'Starkley' | 'Phonak' | 'Resound' | 'Siemens' | 'Widex' | 'Others';
      Cetegory: 'Behind The Ear (BTE)' | 'In The Ear (ITE)' | 'Completely In The Canal (CIC)' | 'Receiver In The Ear (RITE)' |  'Invisible In Canal (IIC)' | 'Pocket' | 'Invisible' | 'Don’t Know For Now';
      Issue: 'Fixing Battery Doors' | 'Ear Buds Replacement' | 'Extensive Deep Cleaning' | 'Re-Circuitry' | 'Fixing Holes' | 'Addition of Extraction Cords' | 'Reprograming' | 'ON/OFF Switch Not Working' | 'I Don’t Know';
      Status: string;
      issueMSG: string;
    };
    ContactNumber: number;
    Email: string;
    slots: {
      Date: Date;
      Time: string;
    };
    status: "Pending" | "Converted" | "Not Converted";
    messages: string;
  }

  interface State {
    loading: Record<string, AsyncState>;
  }
}
