export interface Analysis {
  reason: string;
  issue: string;
  suggestion: string;
}

export interface EOB {
  id: string;
  date: string;
  code: string;
  procedure: string;
  billed: number;
  allowed: number;
  paid: number;
  patient: number;
  status: "Processed" | "Denied" | "Pending";
  analysis: Analysis;
}

export interface Benefits {
  annualMax: number;
  remainingMax: number;
  deductible: number;
  deductibleRemaining: number;
  preventive: string;
  basic: string;
  major: string;
  ortho: string;
}

export interface Patient {
  id: number;
  name: string;
  dob: string;
  payer: string;
  status: "EOB Available" | "Claim Denied" | "Eligibility Active";
  benefits: Benefits;
  eobs: EOB[];
}

export const patients: Patient[] = [];
