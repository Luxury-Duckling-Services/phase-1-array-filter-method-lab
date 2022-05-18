// Code your solution here

const findMatching = (drivers , nameToMatch) => {
    return drivers.filter(driver => driver.toUpperCase() === nameToMatch.toUpperCase())
}

const fuzzyMatch = (drivers , nameToMatch) => {
    return drivers.filter(driver => driver[0] === nameToMatch[0])
}

const matchName = (drivers , nameToMatch) => {
    return drivers.filter(driver => driver.name === nameToMatch)
}