export const mapLeviathanGameFromSearchParams = (
  objective: string | null,
  rule: string | null,
  deployment: string | null,
  layout: string | null,
): string[] => {
  return [objective ?? '', rule ?? '', deployment ?? '', layout ?? ''];
};
