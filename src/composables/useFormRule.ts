import type { DataModelCtor } from 'models/Model';

const ERR_MSG = {
  required: 'Wajib Diisi',
};

const required = (v: string | number) => Boolean(v) || ERR_MSG.required;
const date = (v: string) => /^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(v);
const time = (v: string) => /^([0-1]?\d|2[0-3]):[0-5]\d$/.test(v);
const fulltime = (v: string) => /^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(v);
const timerFulltime = (v: string) => /^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(v);
const uniqueFieldFactory = function <T> (
  model: DataModelCtor<T>,
  fieldName: string,
  errMsg = `${fieldName} harus unik`,
) {
  return async (v: unknown) => (await model.ref.where(fieldName, '==', v).get()).empty || errMsg;
};

export default function useFormFule() {
  return {
    required,
    date,
    time,
    fulltime,
    timerFulltime,
    uniqueFieldFactory,
  };
}
