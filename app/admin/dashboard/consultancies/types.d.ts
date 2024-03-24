namespace ConsultancyTypes {
  interface ConsultanciesTable {
    consultancyId: string;
    name: string;
    dateAndTime: Date;
    phoneNumber: string;
    consultancyType: string;
    slot: Date;
    status: string;
  }
  interface AddNewPatient {
    name: string;
    patientId: string; // 8 len, 0-9 a-z
    gender: "MALE" | "FEMALE";
    age?: number;
    phone?: string;
    email?: string;
    pincode?: number;
    address?: string;
  }
  // interface ConsultanciesTable {
  //   id: number;
  //   name: string;
  //   dateAndTime: date;
  //   phoneNumber: number;
  //   consultancyType:
  //     | "Appointment"
  //     | "Warranty & Exchange"
  //     | "Repair & Maintenance";
  //   slot: string;
  //   status: "Pending" | "Not Converted" | "Converted";
  // }

  // interface AddNewConsultancy {
  //   company: string;
  //   hearingAidCategory: string;
  //   issue: string;
  //   status: string;
  //   issueDetails: string;
  // }

  export interface ConsultancyDocument {
    consultationId: string;
    patientId: string;
    consultancyDetails: {
      type: ConsultancyType;
      specification?: ConsultancyTypeSpecification;
      message: string;
    };
    slot: {
      date?: Date;
      time?: string;
      dateTime: Date;
    };
    status: ConsultancyStatus;
    attachments: AttachmentInformation[];
    createdAt: Date;
  }
  // interface AddNewConsultancy {
  //   name: string;
  //   consutationType:
  //     | "Repair and Maintenance"
  //     | "Appointment"
  //     | "Warranty & Exchange";
  //   consultancySubType?: {
  //     Company:
  //       | "Oticon"
  //       | "Starkley"
  //       | "Phonak"
  //       | "Resound"
  //       | "Siemens"
  //       | "Widex"
  //       | "Others";
  //     Cetegory:
  //       | "Behind The Ear (BTE)"
  //       | "In The Ear (ITE)"
  //       | "Completely In The Canal (CIC)"
  //       | "Receiver In The Ear (RITE)"
  //       | "Invisible In Canal (IIC)"
  //       | "Pocket"
  //       | "Invisible"
  //       | "Don’t Know For Now";
  //     Issue:
  //       | "Fixing Battery Doors"
  //       | "Ear Buds Replacement"
  //       | "Extensive Deep Cleaning"
  //       | "Re-Circuitry"
  //       | "Fixing Holes"
  //       | "Addition of Extraction Cords"
  //       | "Reprograming"
  //       | "ON/OFF Switch Not Working"
  //       | "I Don’t Know";
  //     Status: string;
  //     issueMSG: string;
  //   };
  //   ContactNumber: number;
  //   Email: string;
  //   slots: {
  //     Date: Date;
  //     Time: string;
  //   };
  //   status: "Pending" | "Converted" | "Not Converted";
  //   messages: string;
  // }

  export type ConsultancyType =
    | "Repair & Maintenance"
    | "Appointment"
    | "Warranty & Exchange";
  export type ConsultancyStatus = "Pending" | "Converted" | "Not Converted";

  export interface AttachmentInformation {
    link: string;
  }
  export interface ConsultancyTypeSpecification {
    company: string;
    hearingAidCategory: string;
    issue: {
      type: string;
      details?: string;
      isResolved: boolean;
    };
  }

  // export interface AddNewConsultancy {
  //   patientDetails: {
  //     name: string;
  //     phoneNumber: string;
  //     email: string;
  //   };
  //   consultancyDetails: {
  //     type: ConsultancyType;
  //     specification?: ConsultancyTypeSpecification;
  //     message: string;
  //   };

  //   slot: {
  //     dateTime: Date;
  //     date?: Date;
  //     time?: string;
  //   };
  //   status: ConsultancyStatus;
  //   attachments: AttachmentInformation[];
  //   createdAt: Date;
  // }

  interface State {
    loading: Record<string, AsyncState>;
    consultanciesAllData: ConsultanciesTable[];
    createConsultancy: createConsultancy[];
    createPatient: createPatient[];
    patientList: PatientList[];
  }
}
