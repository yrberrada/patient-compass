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

export const patients: Patient[] = [
  {
    id: 1,
    name: "Emma Chen",
    dob: "1990-04-12",
    payer: "Delta Dental",
    status: "EOB Available",
    benefits: {
      annualMax: 1500,
      remainingMax: 850,
      deductible: 50,
      deductibleRemaining: 0,
      preventive: 1.0,
      basic: 0.8,
      major: 0.5,
      ortho: null,
    },
    eobs: [
      {
        id: "e1",
        date: "2026-03-10",
        code: "D2740",
        procedure: "Crown",
        billed: 1200,
        allowed: 850,
        paid: 425,
        patientResponsibility: 425,
        status: "Processed",
        analysis: {
          reason: "Major service covered at 50%",
          issue: "High patient responsibility",
          suggestion: "Verify remaining max before treatment",
        },
      },
    ],
  },
  {
    id: 2,
    name: "Michael Patel",
    dob: "1985-09-22",
    payer: "Cigna",
    status: "Claim Denied",
    benefits: {
      annualMax: 2000,
      remainingMax: 2000,
      deductible: 100,
      deductibleRemaining: 100,
      preventive: 1.0,
      basic: 0.7,
      major: 0.5,
      ortho: 0.5,
    },
    eobs: [
      {
        id: "e2",
        date: "2026-02-15",
        code: "D4341",
        procedure: "Scaling and Root Planing",
        billed: 800,
        allowed: 0,
        paid: 0,
        patientResponsibility: 800,
        status: "Denied",
        analysis: {
          reason: "Missing periodontal charting",
          issue: "Claim denied due to lack of documentation",
          suggestion: "Submit perio charting and resubmit claim",
        },
      },
    ],
  },
];
