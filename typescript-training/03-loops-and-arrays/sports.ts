let sportsOne: string[] = ["Golf", "Cricket", "Tennis", "Swimming"];

// for (let i=0; i < sportsOne.length; i++) {
//     console.log(sportsOne[i]);
// }

// Simplified loop

for (let tempSport of sportsOne) {
    // console.log(tempSport);

    if (tempSport == 'Cricket') {
        console.log(tempSport + " << My Favorite!");
    }
    else {
        console.log(tempSport);
    }
}