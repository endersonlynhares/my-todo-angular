const convertToMilliseconds = (dateString: string): number => {
  return <number>(Number(new Date(dateString)))
}

export const SituationColor: { [key: string]: string } = {
  "Em atraso": "var(--danger)",
  "Ultimo dia": "var(--warning)",
  "Para fazer": "var(--positive)"
}
export const getSituation = (deadline: string): string => {
  const dataAtual = convertToMilliseconds(String(new Date()))
  const deadlineMili = convertToMilliseconds(deadline)
  let difference = deadlineMili - dataAtual
  difference = Math.floor(difference / (1000 * 60 * 60 * 24))
  let situation = ''
  if (difference < 0) {
    situation = "Em atraso"
  } else if (difference === 0) {
    situation = "Ultimo dia"
  } else {
    situation = "Para fazer"
  }

  return situation
}


