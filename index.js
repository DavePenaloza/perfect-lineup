// Implement a `validateLineup` 
// function that will return `true` if the lineup provided adheres to all of 
// the rules listed below.

// Lineup Rules
// The total salary of all players in a lineup may not exceed $45,000
// Lineups may not contain: 
//                         more than 2 players from a single team
//                         more than 3 players from a single game

// Lineups must contain exactly 3 players with the position of 'OF' and must 
// also contain exactly 1 player from each of the following positions: 

// lineup.length : Need to loop through the lineup to get to the TEAM ID
const validateLineup = (lineup) => {
  allLineupsGood = true
  lineup.forEach(lineup => {
    intSalary = parseInt(lineup.salary)
    isSalaryGood = addCheckSalary(intSalary)

    isPositionGood = checkOf(lineup.postion)

    isSingleTeam = team(lineup.teamId)

    isSingleGame = game(lineup.gameId)

    isPlayerEach = eachteam(lineup.id)

    allLineupsGood = allLineupsGood && isSalaryGood
  })

  return allLineupsGood
}

totalSalary = 0

function addCheckSalary(salary) {
  totalSalary = totalSalary + salary


  if (totalSalary < 45000) {
    return true
  } else {
    return false
  }
}

totalOf = 0

function checkOf(position) {
  return true
}

totalSingleTeam = 0

function team(teamid) {
  return true
}

totalSingleGame = 0

function game(gameid) {
  return true
}

totalEachTeam = 0
function eachteam(id) {
  return true
}

module.exports = validateLineup


