import { mapToDropdownItems } from "@/utils";

export const JOB_TEMPLATES = [
  "Heavy Equipment Operator",
  "Heavy Equipment Service Technician",
  "Equipment Operator",
  "Track Foreman",
  "Track Laborer",
  "Track Machine Operator",
  "Asphalt Plant Foreman",
  "Concrete Paving Foreman",
  "Construction Quality Control Technician",
  "Grade Foreman",
  "Grinding Operator",
  "Heavy Equipment Mechanic",
  "Loader Operator",
  "Off Road Truck Driver",
].map(mapToDropdownItems);

export type JobTemplate = (typeof JOB_TEMPLATES)[0];
