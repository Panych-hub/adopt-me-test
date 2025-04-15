export function listWithoutValue<T extends string>(list: T[], value?: T): T[] {
  if (!value) return list
  const listCopy = JSON.parse(JSON.stringify(list)) as T[]
  const index = listCopy.findIndex((val) => val === value)
  listCopy.splice(index, 1)
  return listCopy
}
