export interface Teacher {
    employeeId:         string;
    supervisorId:       null;
    userId:             any;
    academicAreaId:     string;
    createdDate:        null;
    createdBy:          null;
    updatedDate:        null;
    updatedBy:          null;
    deletedDate:        null;
    deletedBy:          null;
    academicArea:       null;
    employeesSchedules: any[];
    inverseSupervisor:  any[];
    sections:           Array<Section | null>;
    supervisor:         null;
}

export interface selectionSubject {
    subjectId:      string;
    subjectName:    string;
    credits:        number;
    subjectTypeId:  string;
    academicAreaId: string;
    createdDate:    null;
    createdBy:      null;
    updatedDate:    null;
    updatedBy:      null;
    deletedDate:    null;
    deletedBy:      null;
    academicArea:   null;
    sections:       Array<Section | null>;
    subjectType:    null;
    pensumSubjects: null;
}

export interface Section {
    sectionId:        string;
    number:           number;
    subjectId:        string;
    teacherId:        string;
    trimesterId:      string;
    startTime:        null;
    endTime:          null;
    createdDate:      null;
    createdBy:        null;
    updatedDate:      null;
    updatedBy:        null;
    deletedDate:      null;
    deletedBy:        null;
    attendances:      any[];
    grades:           any[];
    reports:          any[];
    sectionSchedules: any[];
    subject:          selectionSubject | null;
    teacher:          Teacher | null;
    trimester:        null;
}
