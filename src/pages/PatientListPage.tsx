import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { usePatients } from "@/hooks/usePatients";
import StatusBadge from "@/components/StatusBadge";
import { formatDate } from "@/lib/formatters";

const PatientListPage = () => {
  const navigate = useNavigate();
  const { data: patients, isLoading, isError } = usePatients();

  useEffect(() => {
    document.title = "Patients | Raekis";
  }, []);

  if (isLoading) {
    return (
      <div className="mx-auto max-w-5xl px-6 py-10 space-y-4">
        <div className="h-8 w-48 animate-pulse rounded bg-muted" />
        <div className="h-64 animate-pulse rounded-lg bg-muted" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="mx-auto max-w-5xl px-6 py-10 text-center">
        <p className="mb-4 text-lg text-muted-foreground">Failed to load patients</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-6 py-10">
      <h1 className="mb-6 text-2xl font-semibold text-foreground">Patients</h1>

      <div className="overflow-x-auto rounded-lg border border-border bg-card shadow-sm">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-muted/50">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Name</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Date of Birth</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Insurance Payer</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Status</th>
            </tr>
          </thead>
          <tbody>
            {(patients ?? []).map((p) => (
              <tr
                key={p.id}
                onClick={() => navigate(`/patients/${p.id}`)}
                className="cursor-pointer border-b border-border last:border-b-0 transition-colors hover:bg-muted/40"
              >
                <td className="px-4 py-3 font-medium text-foreground">{p.name}</td>
                <td className="px-4 py-3 text-muted-foreground">{formatDate(p.dob)}</td>
                <td className="px-4 py-3 text-muted-foreground">{p.payer}</td>
                <td className="px-4 py-3">
                  <StatusBadge status={p.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PatientListPage;
