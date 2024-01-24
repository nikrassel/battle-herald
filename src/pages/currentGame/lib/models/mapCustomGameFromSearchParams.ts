export const mapCustomGameFromSearchParams = (
  objective: string | null,
  deployment: string | null,
  rules: string[],
): string[] => {
  return [objective ?? '', deployment ?? '', ...rules];
};
