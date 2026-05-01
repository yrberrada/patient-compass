import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { usePatient } from "@/hooks/usePatients";
import StatusBadge from "@/components/StatusBadge";
import BenefitsSummary from "@/components/BenefitsSummary";
import { formatDate, formatCurrency } from "@/lib/formatters";

const PatientDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: patient, isLoading, isError } = usePatient(Number(id));

  useEffect(() => {
    document.title = patient ? `${patient.name} | Raekis` : "Patient | Raekis";
  }, [patient]);

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
        <p className="mb-4 text-lg text-muted-foreground">Failed to load patient</p>
        <button
          onClick={() => navigate("/patients")}
          className="text-sm font-medium text-primary underline underline-offset-4 hover:opacity-80"
        >
          ← Back to Patients
        </button>
      </div>
    );
  }

  if (!patient) {
    return (
      <div className="mx-auto max-w-5xl px-6 py-10 text-center">
        <p className="mb-4 text-lg text-muted-foreground">Patient not found</p>
        <button
          onClick={() => navigate("/patients")}
          className="text-sm font-medium text-primary underline underline-offset-4 hover:opacity-80"
        >
          ← Back to Patients
        </button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-6 py-10 space-y-8">
      {/* Section 1 — Patient Info + Benefits */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Patient Info */}
        <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
          <button
            onClick={() => navigate("/patients")}
            className="mb-4 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Back to Patients
          </button>
          <h1 className="text-2xl font-semibold text-foreground">{patient.name}</h1>
          <dl className="mt-4 space-y-2 text-sm">
            <div className="flex justify-between">
              <dt className="text-muted-foreground">Date of Birth</dt>
              <dd className="text-foreground">{formatDate(patient.dob)}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-muted-foreground">Insurance Payer</dt>
              <dd className="text-foreground">{patient.payer}</dd>
            </div>
            <div className="flex justify-between items-center">
              <dt className="text-muted-foreground">Status</dt>
              <dd><StatusBadge status={patient.status} /></dd>
            </div>
          </dl>
        </div>

        {/* Benefits */}
        <BenefitsSummary benefits={patient.benefits} />
      </div>

      {/* Section 2 — EOBs */}
      <div>
        <h2 className="mb-4 text-lg font-semibold text-foreground">Explanations of Benefits (EOBs)</h2>
        {patient.eobs.length === 0 ? (
          <div className="rounded-lg border border-border bg-card p-8 text-center shadow-sm">
            <p className="text-muted-foreground">No EOBs on file</p>
          </div>
        ) : (
          <div className="overflow-x-auto rounded-lg border border-border bg-card shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="px-4 py-3 text-left font-medium text-muted-foreground">Date</th>
                  <th className="px-4 py-3 text-left font-medium text-muted-foreground">Procedure Code</th>
                  <th className="px-4 py-3 text-left font-medium text-muted-foreground">Procedure Name</th>
                  <th className="px-4 py-3 text-right font-medium text-muted-foreground">Billed</th>
                  <th className="px-4 py-3 text-right font-medium text-muted-foreground">Allowed</th>
                  <th className="px-4 py-3 text-right font-medium text-muted-foreground">Insurance Paid</th>
                  <th className="px-4 py-3 text-right font-medium text-muted-foreground">Patient Owes</th>
                  <th className="px-4 py-3 text-left font-medium text-muted-foreground">Status</th>
                </tr>
              </thead>
              <tbody>
                {patient.eobs.map((eob) => (
                  <tr
                    key={eob.id}
                    onClick={() => navigate(`/patients/${patient.id}/eob/${eob.id}`)}
                    className="cursor-pointer border-b border-border last:border-b-0 transition-colors hover:bg-muted/40"
                  >
                    <td className="px-4 py-3 text-foreground">{formatDate(eob.date)}</td>
                    <td className="px-4 py-3 text-foreground">{eob.code}</td>
                    <td className="px-4 py-3 text-foreground">{eob.procedure}</td>
                    <td className="px-4 py-3 text-right text-foreground">{formatCurrency(eob.billed)}</td>
                    <td className="px-4 py-3 text-right text-foreground">{formatCurrency(eob.allowed)}</td>
                    <td className="px-4 py-3 text-right text-foreground">{formatCurrency(eob.paid)}</td>
                    <td className="px-4 py-3 text-right text-foreground">{formatCurrency(eob.patientResponsibility)}</td>
                    <td className="px-4 py-3"><StatusBadge status={eob.status} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default PatientDetailPage;
