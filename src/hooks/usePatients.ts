import { useQuery } from "@tanstack/react-query";
import { getAllPatients, getPatientById, getEOBById } from "@/services/patientService";

export function usePatients() {
  return useQuery({
    queryKey: ["patients"],
    queryFn: getAllPatients,
  });
}

export function usePatient(id: number) {
  return useQuery({
    queryKey: ["patients", id],
    queryFn: () => getPatientById(id),
  });
}

export function useEOB(patientId: number, eobId: string) {
  return useQuery({
    queryKey: ["eob", patientId, eobId],
    queryFn: () => getEOBById(patientId, eobId),
  });
}
