export interface Student{
    id: string;
    code: string;
    firstName: string;
    lastName: string;
    dob?:Date;
    gender: string;
    email?: string;
    phone?: string;
    picture?: string;
}