let team1 = 0
let team2 = 0
let team1hl = document.getElementById("team1")
let team2hl = document.getElementById("team2")
team1hl.textContent = team1
team2hl.textContent = team2
function add1(){
  team1 += 1
  team1hl.textContent = team1
}
function add2(){
  team1 += 2
  team1hl.textContent = team1
}
function add3(){
  team1 += 3
  team1hl.textContent = team1
}
function add1ToTeam2(){
  team2 += 1
  team2hl.textContent = team2
}
function add2ToTeam2(){
  team2 += 2
  team2hl.textContent = team2
}
function add3ToTeam2(){
  team2 += 3
  team2hl.textContent = team2
}