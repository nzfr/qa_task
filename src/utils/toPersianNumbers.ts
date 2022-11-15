import { digitsEnToFa } from "@persian-tools/persian-tools";

export function toPersianNumbers(number: string | number): string {
  return digitsEnToFa(number);
}
