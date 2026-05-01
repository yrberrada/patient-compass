import { describe, it, expect } from "vitest";
import { getAllPatients, getPatientById, getEOBById } from "@/services/patientService";

describe("getAllPatients", () => {
  it("returns an array with length > 0", () => {
    const patients = getAllPatients();
    expect(patients.length).toBeGreaterThan(0);
  });
});

describe("getPatientById", () => {
  it("returns correct patient for valid id", () => {
    const patient = getPatientById(1);
    expect(patient).toBeDefined();
    expect(patient!.name).toBe("Emma Chen");
  });

  it("returns undefined for unknown id", () => {
    expect(getPatientById(999)).toBeUndefined();
  });
});

describe("getEOBById", () => {
  it("returns correct eob for valid ids", () => {
    const result = getEOBById(1, "e1");
    expect(result).toBeDefined();
    expect(result!.patient.id).toBe(1);
    expect(result!.eob.id).toBe("e1");
    expect(result!.eob.code).toBe("D2740");
  });

  it("returns undefined for unknown eobId", () => {
    expect(getEOBById(1, "nonexistent")).toBeUndefined();
  });

  it("returns undefined for unknown patientId", () => {
    expect(getEOBById(999, "e1")).toBeUndefined();
  });
});
