const hobbiesArray = [
    { name: 'tv', lengthInYearsAtHobby: 25 },
    { name: 'cooking', lengthInYearsAtHobby: 15},
    { name: 'walking', lengthInYearsAtHobby: 11}
];

function printHobbyInfo(hobby) {
    console.log(` ${hobby.name} enjoyed for ${hobby.lengthInYearsAtHobby} `)
}

for (let hobby of hobbiesArray) {
    printHobbyInfo(hobby);
}

