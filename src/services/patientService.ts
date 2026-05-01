import type { Patient, EOB } from "@/data/patients";

const patients: Patient[] = [
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

export function getAllPatients(): Patient[] {
  return patients;
}

export function getPatientById(id: number): Patient | undefined {
  return patients.find((p) => p.id === id);
}

export function getEOBById(
  patientId: number,
  eobId: string
): { patient: Patient; eob: EOB } | undefined {
  const patient = patients.find((p) => p.id === patientId);
  if (!patient) return undefined;
  const eob = patient.eobs.find((e) => e.id === eobId);
  if (!eob) return undefined;
  return { patient, eob };
}
