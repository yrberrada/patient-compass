import { Benefits } from "@/data/patients";

interface BenefitsSummaryProps {
  benefits: Benefits;
}

const BenefitsSummary = ({ benefits }: BenefitsSummaryProps) => {
  const ratio = benefits.remainingMax / benefits.annualMax;
  const barColor =
    ratio > 0.5 ? "bg-green-500" : ratio >= 0.2 ? "bg-yellow-500" : "bg-red-500";

  const fmt = (n: number) =>
    n.toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 0 });

  return (
    <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
      <h2 className="mb-4 text-lg font-semibold text-foreground">Benefits Summary</h2>

      <div className="space-y-4 text-sm">
        <div className="flex justify-between">
          <span className="text-muted-foreground">Annual Maximum</span>
          <span className="font-medium text-foreground">{fmt(benefits.annualMax)}</span>
        </div>

        <div>
          <div className="mb-1 flex justify-between">
            <span className="text-muted-foreground">Remaining Maximum</span>
            <span className="font-medium text-foreground">{fmt(benefits.remainingMax)}</span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
            <div
              className={`h-full rounded-full ${barColor}`}
              style={{ width: `${Math.round(ratio * 100)}%` }}
            />
          </div>
        </div>

        <div className="flex justify-between">
          <span className="text-muted-foreground">Deductible</span>
          <span className="font-medium text-foreground">{fmt(benefits.deductible)}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-muted-foreground">Deductible Remaining</span>
          <span className="font-medium text-foreground">{fmt(benefits.deductibleRemaining)}</span>
        </div>

        <div className="grid grid-cols-2 gap-3 pt-2">
          {(["preventive", "basic", "major", "ortho"] as const).map((key) => {
            const val = benefits[key];
            return (
              <div key={key} className="rounded-md bg-muted/50 px-3 py-2">
                <span className="block text-xs text-muted-foreground capitalize">{key}</span>
                <span className="font-medium text-foreground">
                  {val === null ? "Not covered" : `${Math.round(val * 100)}%`}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BenefitsSummary;
