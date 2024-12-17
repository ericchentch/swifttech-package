import { TValidateFunction } from './type-validation'

export const IS_HEX_COLOR: TValidateFunction = async <T extends object>(
  error: Record<keyof T, string>,
  value: any,
  key: keyof T
) => {
  const HEX_COLOR_REGEX = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3}|[A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/g

  if (!value) {
    return { ...error, [key]: 'colorRequired' }
  }

  const newValue = String(value)

  if (!newValue.match(HEX_COLOR_REGEX)) {
    return { ...error, [key]: 'invalidHexColor' }
  }

  return { ...error, [key]: '' }
}
