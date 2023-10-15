export interface Student {
    studentId: string;
    careerId: string;
    enrollmentId: string;
    academicStatusId: string;
    userId: string;
    createdDate: string;
    createdBy: string;
    updatedDate: string;
    updatedBy: string;
    deletedDate: string;
    deletedBy: string;
    // academicStatus: any; // Define la estructura correcta si es conocida
    // career: any; // Define la estructura correcta si es conocida
    enrollment: {
      enrollmentId: string;
      name: string;
      lastName: string;
      email: string;
      birthDate: string;
      gender: string;
      identificationTypeId: string | null;
      cityId: string | null;
      identificationNumber: string;
      phoneNumber: string;
      mobileNumber: string;
      createdDate: string;
      createdBy: string;
      updatedDate: string | null;
      updatedBy: string | null;
      deletedDate: string | null;
      deletedBy: string | null;
    }
  }
  