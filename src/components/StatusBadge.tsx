import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  status: string;
}

const colorMap: Record<string, string> = {
  "EOB Available": "bg-blue-100 text-blue-800",
  "Claim Denied": "bg-red-100 text-red-800",
  "Eligibility Active": "bg-green-100 text-green-800",
  Processed: "bg-blue-100 text-blue-800",
  Denied: "bg-red-100 text-red-800",
  Pending: "bg-yellow-100 text-yellow-800",
};

const StatusBadge = ({ status }: StatusBadgeProps) => {
  return (
    <span
      className={cn(
        "inline-block rounded-full px-3 py-0.5 text-xs font-medium",
        colorMap[status] ?? "bg-muted text-muted-foreground"
      )}
    >
      {status}
    </span>
  );
};

export default StatusBadge;
