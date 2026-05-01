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
  patientResponsibility: number;
  status: "Processed" | "Denied" | "Pending";
  analysis: Analysis;
}

export interface Benefits {
  annualMax: number;
  remainingMax: number;
  deductible: number;
  deductibleRemaining: number;
  preventive: number | null;
  basic: number | null;
  major: number | null;
  ortho: number | null;
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
