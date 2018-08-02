// // let start = prompt("start")
// alert('You are starting on a new adventure in the \'Galaxies Beyond Earth\'. Press \'Ok\' to begin')
// const firstQuestion = "What is your desired name?"
// let username = prompt(firstQuestion)
// alert(You are \'${username}\', and this is your journey to the outer realms of the Galaxies.)
// console.log(username);

// alert("This is the Year 2238, space travel is as common, safe, and easy as taking a bus to your local neighborhood. While accidents do occur, \'Save Points\' have been created to recreate the digital copy of yourself have been made possible in this era. So travel with ease in mind!")
// alert("Traversing across planets, humanity came across two other life forms: \'Zerg\' and \'Protoss\'. Humans refer to themselves as \'Terrans\', since the pioneers thought of themselves as terraformers.")
// alert("You have reached your first \'Save Point\'!")
// let faction = prompt("What is your desired faction that you wish to join and support? T for Terran, P for Protoss, and Z for Zerg. (T/P/Z)")
// console.log(faction);

// if (faction === 'T'); {
//     let T = alert("You are supporting the Terrans! They are the weakest of the three species, but what they lack in quality is made up for by the quantity. They are innovative with machine and technology to put up a fight. Chaos and discrimination amongst the terrans ignited the desire to Rebel, while the majority remained loyal to the Empire, there were a handful that stayed Neutral. (R/E/N)");
//     prompt("What side do you choose? R for Rebellion, E for Empire, or N for Neutral?");
//     console.log(T);
// }
// if (faction === 'P'); {
//     let P = alert("You are supporting the Protoss! They are the most ancient species, yet they aren't the most united. Years of fighting and losing to both sides have caused the Protoss to reconsider their strategy.  ")
// }
//
//
//
// } else if (
//     (faction === 'P')) {
//     alert(You are supporting \'${faction}\'! They are the weakest of the three species, but what they lack in quality is made up for by the quantity. They are innovative with machine and technology to put up a fight.);
// } else {
//     (faction === 'Z');{
//         alert(You are supporting \'${faction}\'! They are the weakest of the three species, but what they lack in quality is made up for by the quantity. They are innovative with machine and technology to put up a fight.);
//     }

const firstQuestion = ("What is your desired name?")
const theEnd = ("You've reached the end. Restart?")

alert('You are starting on a new adventure in the \'Galaxies Beyond Earth\'. Press \'Ok\' to begin')
let username = prompt(firstQuestion)
alert(`You are \'${username}\', and this is your journey to the outer realms of the Galaxies.`)
console.log(username);

alert("This is the Year 2238, space travel is as common, safe, and easy as taking a bus to your local neighborhood. While accidents do occur, \'Save Points\' have been created to recreate the digital copy of yourself have been made possible in this era. So travel with ease in mind!")
alert("Traversing across planets, humanity came across two other life forms: \'Zerg\' and \'Protoss\'. Humans refer to themselves as \'Terrans\', since the pioneers thought of themselves as terraformers.")
alert("You have reached your first \'Save Point\'!")


const firstDivergent = prompt("What is your desired faction that you wish to join and support? T for Terran, P for Protoss, and Z for Zerg. (T/P/Z)");
console.log(firstDivergent);
if (firstDivergent.toUpperCase() === 'T') {
    let T = alert("You are supporting the Terrans! They are the weakest of the three species, but what they lack in quality is made up for by the quantity. They are innovative with machine and technology to put up a fight. Chaos and discrimination amongst the terrans ignited the desire to Rebel, while the majority remained loyal to the Empire, there were a handful that stayed Neutral. (R/E/N)")
    prompt("What side do you choose? R for Rebellion, E for Empire, or N for Neutral?");
}
console.log(T);

    if (T.toUpperCase() === 'R') {
    let R = alert("You seek alliances since one more ally, means one less enemy.");
    }
    else if (T.toUpperCase() === 'E') {
    let E = alert("Your desire to kill all, shall be fulfilled.");
    }   
    else if (T.toUpperCase() === 'N') {
    let N = alert("You seek peace, so you will outlive all of the warring factions.");
    }

else if (firstDivergent.toUpperCase() === 'P') {

}
console.log(R);
console.log(E);
console.log(N);




// const greeting = prompt("Which faction would you choose? Are you Terran? Protoss? Zerg? (Pick one - T or P or Z)");
// console.log(greeting);
// if (greeting.toLowerCase() === "T") {
//     let T = prompt("Will you join the Rebellion forces or remain in the Empire? (Pick one - R or E");
//     if (T === "R") {
//         let R = alert("You will fight in the upcoming battle for Aiur with the Protoss");
//     } else if (T === "E") {
//         let E = prompt("Will you fight to the last person in your territory or retreat? (Pick one - F or R)")
//         if (E === "F") {
//             let F = alert("Fight to the death!")
//         } else if (E === "R") {
//             let R = alert("Retreat back to own galaxy!");
//         }
//     }
// }