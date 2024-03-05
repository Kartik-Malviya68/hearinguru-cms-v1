namespace UserSettingsTypes {
  namespace UserSettingsTable {
    interface adminAndCallingTeamTable {
      staffId: number;
      name: {
        profilePic: string;
        fullname: string;
        email: string;
      };
      role: string;
      contactNumber: number;
      dateOfJoin: Date;
      activityStatus: "Present" | "Deleted";
    }
    interface ClinicsAndDoctorsTable {
      staffId: number;
      name: {
        profilePic: string;
        fullname: string;
        email: string;
      };

      noOfStaff: number;
      contactNumber: number;
      dateOfJoin: Date;
      activityStatus: "Present" | "Deleted";
    }
  }
}
