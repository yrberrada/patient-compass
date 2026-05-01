import { describe, it, expect } from "vitest";
import { formatDate, formatCurrency } from "@/lib/formatters";

describe("formatDate", () => {
  it("returns correct locale string", () => {
    expect(formatDate("2026-03-10")).toBe("Mar 10, 2026");
  });

  it("does not shift the date due to timezone offset", () => {
    expect(formatDate("2026-01-01")).toBe("Jan 1, 2026");
  });

  it("handles end-of-month dates correctly", () => {
    expect(formatDate("2026-12-31")).toBe("Dec 31, 2026");
  });
});

describe("formatCurrency", () => {
  it("formats with two decimal places", () => {
    expect(formatCurrency(1200)).toBe("$1,200.00");
  });

  it("formats zero correctly", () => {
    expect(formatCurrency(0)).toBe("$0.00");
  });

  it("formats cents correctly", () => {
    expect(formatCurrency(425.5)).toBe("$425.50");
  });
});
