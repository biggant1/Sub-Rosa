import { ComponentPropsWithoutRef } from "react";

export type paramsType = { groupId: string };

type oneToNine = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type zeroToNine = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type YYYY = `19${zeroToNine}${zeroToNine}` | `20${zeroToNine}${zeroToNine}`;
type MM = `0${oneToNine}` | `1${0 | 1 | 2}`;
type DD = `${0}${oneToNine}` | `${1 | 2}${zeroToNine}` | `3${0 | 1}`;
export type dateString = `${YYYY}-${MM}-${DD}`;

export type FormHandler = (formData: FormData) => void;

export interface IconProps extends ComponentPropsWithoutRef<"svg"> {
  color?: string;
}
