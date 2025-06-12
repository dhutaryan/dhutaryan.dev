const START_DATE = new Date(2018, 4)

export function getWorkDurationAsFrontend(): number {
  const startYear = START_DATE.getFullYear()
  const startMonth = START_DATE.getMonth()
  const currentYear = new Date().getFullYear()
  const currentMonth = new Date().getMonth()
  const yearsDifference = currentYear - startYear
  const monthsDifference = currentMonth - startMonth

  return yearsDifference + getCorrectionForYears(monthsDifference)
}

function getCorrectionForYears(monthsDifference: number): number {
  if (monthsDifference < 0) {
    return -0.5
  }

  if (monthsDifference >= 6) {
    return 0.5
  }

  return 0
}
