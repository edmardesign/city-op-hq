/**
 * Utilities for Brazilian mobile numbers: formatting, validation and
 * inferring the state (UF) from the area code (DDD).
 */

export const DDD_TO_UF: Record<string, string> = {
  "11": "SP",
  "12": "SP",
  "13": "SP",
  "14": "SP",
  "15": "SP",
  "16": "SP",
  "17": "SP",
  "18": "SP",
  "19": "SP",
  "21": "RJ",
  "22": "RJ",
  "24": "RJ",
  "27": "ES",
  "28": "ES",
  "31": "MG",
  "32": "MG",
  "33": "MG",
  "34": "MG",
  "35": "MG",
  "37": "MG",
  "38": "MG",
  "41": "PR",
  "42": "PR",
  "43": "PR",
  "44": "PR",
  "45": "PR",
  "46": "PR",
  "47": "SC",
  "48": "SC",
  "49": "SC",
  "51": "RS",
  "53": "RS",
  "54": "RS",
  "55": "RS",
  "61": "DF",
  "62": "GO",
  "63": "TO",
  "64": "GO",
  "65": "MT",
  "66": "MT",
  "67": "MS",
  "68": "AC",
  "69": "RO",
  "71": "BA",
  "73": "BA",
  "74": "BA",
  "75": "BA",
  "77": "BA",
  "79": "SE",
  "81": "PE",
  "82": "AL",
  "83": "PB",
  "84": "RN",
  "85": "CE",
  "86": "PI",
  "87": "PE",
  "88": "CE",
  "89": "PI",
  "91": "PA",
  "92": "AM",
  "93": "PA",
  "94": "PA",
  "95": "RR",
  "96": "AP",
  "97": "AM",
  "98": "MA",
  "99": "MA",
};

/** Keeps only digits and limits the value to 11 characters (DDD + number). */
export function normalizePhoneDigits(value: string): string {
  return value.replace(/\D/g, "").slice(0, 11);
}

/** Formats progressively as (XX) XXXXX-XXXX while the user types. */
export function formatPhone(value: string): string {
  const digits = normalizePhoneDigits(value);
  if (digits.length <= 2) return digits.length ? `(${digits}` : "";
  const ddd = digits.slice(0, 2);
  const rest = digits.slice(2);
  if (rest.length <= 4) return `(${ddd}) ${rest}`;
  const splitAt = rest.length > 8 ? 5 : 4;
  return `(${ddd}) ${rest.slice(0, splitAt)}-${rest.slice(splitAt)}`;
}

/** Returns the UF for the phone's DDD, or null when it cannot be inferred. */
export function getStateFromPhone(value: string): string | null {
  const digits = normalizePhoneDigits(value);
  if (digits.length < 2) return null;
  return DDD_TO_UF[digits.slice(0, 2)] ?? null;
}

/** A valid Brazilian phone has 10 or 11 digits and a real DDD. */
export function isValidPhone(value: string): boolean {
  const digits = normalizePhoneDigits(value);
  if (digits.length < 10) return false;
  return Boolean(DDD_TO_UF[digits.slice(0, 2)]);
}
