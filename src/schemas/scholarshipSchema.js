import { z } from "zod";

// ─── Combined schema (used by Scholarship.jsx) ─────────────────────────────────
export const scholarshipSchema = z.object({
  // Step 1 – Personal
  firstName:    z.string().min(1, "First name is required"),
  lastName:     z.string().min(1, "Last name is required"),
  middleName:   z.string().optional(),
  phone:        z.string().min(10, "Enter a valid phone number"),
  gender:       z.string().min(1, "Please select a gender"),
  dob:          z.string().min(1, "Date of birth is required"),
  homeAddress:  z.string().min(1, "Home address is required"),
  localGov:     z.string().min(1, "LGA is required"),
  stateOrigin:  z.string().min(1, "State of origin is required"),
  country:      z.string().min(1, "Country is required"),
  // Step 2 – Academic
  institution:  z.string().min(1, "Institution name is required"),
  courseStudy:  z.string().min(1, "Course of study is required"),
  yearLevel:    z.string().min(1, "Year/level is required"),
  matric:       z.string().min(1, "Matriculation number is required"),
  cgpa: z
    .string()
    .min(1, "CGPA is required")
    .refine((v) => !isNaN(v), "CGPA must be a number")
    .refine((v) => Number(v) >= 0 && Number(v) <= 5, "CGPA must be between 0 and 5"),
  fileName:     z.string().optional(),
  // Step 3 – Financial
  financialNeed:     z.string().min(20, "Please provide more detail (at least 20 characters)"),
  appliedOther:      z.string().min(1, "Please select an option"),
  personalStatement: z.string().min(50, "Personal statement must be at least 50 characters"),
  // Step 4 – Leadership
  leadership:      z.string().min(10, "Please describe your leadership roles"),
  communityImpact: z.string().min(10, "Please describe your community plans"),
  refFullName:     z.string().min(1, "Referee's full name is required"),
  refRelationship: z.string().min(1, "Please select a relationship"),
  refOrganization: z.string().min(1, "Organisation is required"),
  refPhone:        z.string().min(10, "Enter a valid phone number"),
  refEmail:        z.string().email("Enter a valid email address"),
  // Step 5 – Declaration
  trueInfo:     z.literal(true, { errorMap: () => ({ message: "You must confirm all information is true" }) }),
  understand:   z.literal(true, { errorMap: () => ({ message: "You must confirm you understand" }) }),
  mediaConsent: z.string().min(1, "Please select a media consent option"),
  confirmName:  z.string().min(1, "Signature is required"),
  date:         z.string().min(1, "Date is required"),
  notRobot:     z.literal(true, { errorMap: () => ({ message: "Please confirm you are not a robot" }) }),
});

// Fields validated on each step's "Next" click
export const STEP_FIELDS = {
  1: ["firstName", "lastName", "phone", "gender", "dob", "homeAddress", "localGov", "stateOrigin", "country"],
  2: ["institution", "courseStudy", "yearLevel", "matric", "cgpa"],
  3: ["financialNeed", "appliedOther", "personalStatement"],
  4: ["leadership", "communityImpact", "refFullName", "refRelationship", "refOrganization", "refPhone", "refEmail"],
  5: ["trueInfo", "understand", "mediaConsent", "confirmName", "date", "notRobot"],
};

// Legacy per-step exports (kept for backwards compatibility)
export const step1Schema = scholarshipSchema.pick({
  firstName: true, lastName: true, middleName: true, phone: true, gender: true,
  dob: true, homeAddress: true, localGov: true, stateOrigin: true, country: true,
});
export const step2Schema = scholarshipSchema.pick({
  institution: true, courseStudy: true, yearLevel: true, matric: true, cgpa: true,
});
export const step3Schema = scholarshipSchema.pick({
  financialNeed: true, appliedOther: true, personalStatement: true,
});
export const step4Schema = scholarshipSchema.pick({
  leadership: true, communityImpact: true, refFullName: true,
  refRelationship: true, refOrganization: true, refPhone: true, refEmail: true,
});
export const step5Schema = scholarshipSchema.pick({
  trueInfo: true, understand: true, mediaConsent: true, confirmName: true, date: true, notRobot: true,
});
export const stepSchemas = [step1Schema, step2Schema, step3Schema, step4Schema, step5Schema];