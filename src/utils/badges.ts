const badgeColors: Record<string, string> = {
  Alabanza: 'px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs',
  Jóvenes: 'px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs',
  Damas: 'px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-xs',
  Enseñanza: 'px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs',
  Oración: 'px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs',
}

export const badgeClass = (ministry: string) => {
  return badgeColors[ministry] || 'px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs'
}
