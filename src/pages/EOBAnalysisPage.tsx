import { useParams, useNavigate, Link } from "react-router-dom";
import { patients } from "@/data/patients";
import StatusBadge from "@/components/StatusBadge";

function formatCurrency(n: number): string {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 2 });
}

const EOBAnalysisPage = () => {
  const { id, eobId } = useParams();
  const navigate = useNavigate();
  const patient = patients.find((p) => p.id === Number(id));
  const eob = patient?.eobs.find((e) => e.id === eobId);

  if (!patient || !eob) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-10 text-center">
        <p className="mb-4 text-lg text-muted-foreground">EOB not found</p>
        <button
          onClick={() => navigate(patient ? `/patients/${patient.id}` : "/patients")}
          className="text-sm font-medium text-primary underline underline-offset-4 hover:opacity-80"
        >
          ← Back
        </button>
      </div>
    );
  }

  const highResponsibility = eob.patient / eob.billed > 0.4;

  return (
    <div className="mx-auto max-w-3xl px-6 py-10 space-y-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-muted-foreground">
        <Link to="/patients" className="hover:text-foreground transition-colors">Patients</Link>
        <span>/</span>
        <Link to={`/patients/${patient.id}`} className="hover:text-foreground transition-colors">{patient.name}</Link>
        <span>/</span>
        <span className="text-foreground font-medium">EOB {eob.code}</span>
      </nav>

      {/* Section 1 — Procedure Header */}
      <div>
        <h1 className="text-2xl font-semibold text-foreground">{eob.code} — {eob.procedure}</h1>
        <div className="mt-2 flex items-center gap-4 text-sm text-muted-foreground">
          <span>Date of Service: {eob.date}</span>
          <StatusBadge status={eob.status} />
        </div>
      </div>

      {/* Section 2 — Financial Breakdown */}
      <div className="rounded-lg border border-border bg-card p-6 space-y-3">
        <h2 className="mb-4 text-lg font-semibold text-foreground">Financial Breakdown</h2>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Billed Amount</span>
          <span className="text-foreground">{formatCurrency(eob.billed)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Allowed Amount</span>
          <span className="text-foreground">{formatCurrency(eob.allowed)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Insurance Paid</span>
          <span className="text-foreground">{formatCurrency(eob.paid)}</span>
        </div>
        <div className="border-t border-border my-2" />
        <div className="flex justify-between items-center pt-1">
          <span className="text-foreground font-semibold">Patient Responsibility</span>
          <span className="text-lg font-bold text-foreground">{formatCurrency(eob.patient)}</span>
        </div>
      </div>

      {highResponsibility && (
        <div className="rounded-lg border border-yellow-300 bg-yellow-50 px-4 py-3 text-sm text-yellow-800">
          ⚠️ High patient responsibility — verify remaining benefits before next visit
        </div>
      )}

      {/* Section 3 — Claim Analysis */}
      <div className="rounded-lg border border-border bg-card p-6 space-y-4">
        <h2 className="mb-2 text-lg font-semibold text-foreground">Claim Analysis</h2>
        <div className="flex items-start gap-3 text-sm">
          <span className="text-lg">📋</span>
          <div>
            <span className="block text-muted-foreground">Reason for Payment/Adjustment</span>
            <span className="text-foreground">{eob.analysis.reason}</span>
          </div>
        </div>
        <div className="flex items-start gap-3 text-sm">
          <span className="text-lg">⚠️</span>
          <div>
            <span className="block text-muted-foreground">Potential Issue</span>
            <span className="text-foreground">{eob.analysis.issue}</span>
          </div>
        </div>
        <div className="flex items-start gap-3 text-sm">
          <span className="text-lg">✅</span>
          <div>
            <span className="block text-muted-foreground">Suggested Next Step</span>
            <span className="text-foreground">{eob.analysis.suggestion}</span>
          </div>
        </div>
      </div>

      {/* Back button */}
      <button
        onClick={() => navigate(`/patients/${patient.id}`)}
        className="text-sm font-medium text-primary underline underline-offset-4 hover:opacity-80"
      >
        ← Back to Patient
      </button>
    </div>
  );
};

export default EOBAnalysisPage;
