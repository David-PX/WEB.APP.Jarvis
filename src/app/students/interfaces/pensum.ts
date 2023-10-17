export interface Pensum {
    pensumId?:       string;
    pensumName?:     string;
    version?:        number;
    totalCredits?:   number;
    totalTrimester?: number;
    carrerId?:       string;
    isCurrent?:      boolean;
    carrer?:         null;
    pensumSubjects?: PensumSubject;
}

export interface PensumSubject {
    pensumId?:        string;
    subjectId?:       string;
    trimesterNumber?: number;
    pensum?:          null;
    subject?:         Subject;
}

export interface Subject {
    subjectId?:      string;
    subjectName?:    string;
    credits?:        number;
    subjectTypeId?:  string;
    academicAreaId?: string;
    createdDate?:    Date;
    createdBy?:      string;
    updatedDate?:    null;
    updatedBy?:      null;
    deletedDate?:    null;
    deletedBy?:      null;
    academicArea?:   null;
    sections?:       any[];
    subjectType?:    null;
    pensumSubjects?: null[];
}