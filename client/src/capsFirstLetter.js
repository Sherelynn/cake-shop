const firstLetterCapitalised = (input) => {
  const words = input.split(' ')
  const capitalisedWords = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1)
  })
  const updatedCapitalisedWords = capitalisedWords.join(' ')
  return updatedCapitalisedWords
}

export default firstLetterCapitalised