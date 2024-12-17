export type DateType = 'minutes' | 'hours' | 'days'

export const addTime = (date: Date, amount: number, type: DateType): number => {
  switch (type) {
    case 'minutes':
      return date.setMinutes(date.getMinutes() + amount)
    case 'hours':
      return date.setHours(date.getHours() + amount)
    case 'days':
      return date.setDate(date.getDate() + amount)
    default:
      throw new Error(`Invalid date type: ${type}`)
  }
}
