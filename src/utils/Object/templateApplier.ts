import { assignObjectProperties } from 'utils/Object';

export default function templateApplier<TData>(defaults: Partial<TData>) {
  type ifKeyInDefaults<T, Ttrue, Tfalse> = T extends keyof typeof defaults ? Ttrue : Tfalse;
  type requiredFields = { [k in keyof TData as ifKeyInDefaults<k, never, k>]: TData[k] };
  type optionalFields = { [k in keyof TData as ifKeyInDefaults<k, k, never>]+?: TData[k] };

  return (payload: requiredFields & optionalFields) => assignObjectProperties(
    payload,
    assignObjectProperties(defaults),
  ) as TData;
}
