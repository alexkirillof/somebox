export const nameValidate = (str: string | undefined) => {
  const length = str && str.length > 0 && str.length <= 50
  const spaces = !!str && str.trim().length
  return length && spaces
}
