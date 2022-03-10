export const node_modules = /^(?:.*[\\\/])?node_modules(?:[\\\/].*)?$/
export const git = /^(?:.*[\\\/])?.git(?:[\\\/].*)?$/
export const digitalTime = /^([0-1]?\d|2[0-3])(?::([0-5]?\d))?(?::([0-5]?\d))?$/

export const hhmm = /^(2[0-3]|[01][0-9]):?([0-5][0-9])$/
export const hhmmss = /^(2[0-3]|[01][0-9]):?([0-5][0-9]):?([0-5][0-9])$/
export const yyyymmdd = /((19|20)\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01]))/
export const hyphenYYYYMMDD = /\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])*/
export const hyphenDDMMYYYY = /^\d{1,2}\-\d{1,2}\-\d{4}$/;
export const dashYYYYMMDD = /^\d{4}\/\d{1,2}\/\d{1,2}$/;
export const dashDDMMYYYY = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
export const knexDate = /^(-?(?:[1-9][0-9]*)?[0-9]{4})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9])↵ T(2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9])(\.[0-9]+)?↵ (Z|[+-](?:2[0-3]|[01][0-9]):[0-5][0-9])?$/
export let stringDate = /(Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May|Jun(?:e)?|Jul(?:y)?|Aug(?:ust)?|Sep(?:tember)?|Oct(?:ober)?|Nov(?:ember)?|Dec(?:ember)?)\s+(\d{1,2})\s+(\d{4})/