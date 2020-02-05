const members = data.results[0].members;
console.log(members)



//what we need to knw:
// Number of Republicans, Democrats, and Independents
//For each, we need to calculate the % votes w/party

//Number of Rep
let numberOfRepublicans = 0;
let numberOfDemocrats = 0;
let numberOfIndependents = 0;
let totalNumberOfMembers = members.length;

//Percentage votes with Party (%)
let democratsVotesWithPartyPct = 0;
let republicansVotesWithPartyPct = 0;
let independentsVotesWithPartyPct = 0;
let totalVotesWithPartyPct = 0;


calculateNumberOfMembersInEachParty();

calculateVotesWithParty();

createTableGlance();


sortedMissedVotesArrayAscendant()
createTableTenPercent("least-table");
sortedMissedVotesArrayDescendant()
createTableTenPercent("most-table");



function calculateNumberOfMembersInEachParty() {

    for (let i = 0; i < members.length; i++) {

        if (members[i].party == "R") {
            numberOfRepublicans++
        }
        if (members[i].party == "D") {
            numberOfDemocrats++
        }
        if (members[i].party == "I") {
            numberOfIndependents++
        }
    }
    console.log('n. Republicans: ', numberOfRepublicans)
    console.log('n. Democrats: ', numberOfDemocrats)
    console.log('n. Independents: ', numberOfIndependents)
}

function calculateVotesWithParty() {
    let democratsTotalPct = 0;
    let republicansTotalPct = 0;
    let independentsTotalPct = 0;
    let totalPct = 0;





    for (let i = 0; i < members.length; i++) {
        if (members[i].party == "D") {
            //fill this in

            democratsTotalPct += members[i].votes_with_party_pct;

        }
        if (members[i].party == "R") {
            //fill this in

            republicansTotalPct += members[i].votes_with_party_pct;
        }
        if (members[i].party == "I") {
            //fill this in
            independentsTotalPct += members[i].votes_with_party_pct;
        }
        totalPct += members[i].votes_with_party_pct;
    }

    democratsVotesWithPartyPct = democratsTotalPct / numberOfDemocrats;
    republicansVotesWithPartyPct = republicansTotalPct / numberOfRepublicans;
    independentsVotesWithPartyPct = independentsTotalPct / numberOfIndependents;
    totalVotesWithPartyPct = totalPct / totalNumberOfMembers
}


function createTableGlance() {
    const table = document.getElementById("glance-table")
    let democratRow = table.insertRow();
    democratRow.insertCell().innerHTML = "Democrats";
    democratRow.insertCell().innerHTML = numberOfDemocrats;
    democratRow.insertCell().innerHTML = democratsVotesWithPartyPct;

    // table row for republicant
    let republicantRow = table.insertRow();
    republicantRow.insertCell().innerHTML = "Republicants";
    republicantRow.insertCell().innerHTML = numberOfRepublicans;
    republicantRow.insertCell().innerHTML = republicansVotesWithPartyPct;

    //table for Independent after i werite it will show in the line of Independents
    let independentRow = table.insertRow();
    independentRow.insertCell().innerHTML = "Independent";
    independentRow.insertCell().innerHTML = numberOfIndependents;
    independentRow.insertCell().innerHTML = independentsVotesWithPartyPct;

    let totalRow = table.insertRow();
    totalRow.insertCell().innerHTML = "Total";
    totalRow.insertCell().innerHTML = totalNumberOfMembers;

    totalRow.insertCell().innerHTML = totalVotesWithPartyPct;
}

function sortedMissedVotesArrayAscendant() {

    //Here we create a variable (sortedStudentsArray), and make it equal to the sorted array
    let sortedMissedVotesArray = members.sort(function (a, b) {
        // a - b = lowest to highest
        return parseFloat(a.missed_votes) - parseFloat(b.missed_votes);
    });
    console.log(sortedMissedVotesArray);
}

function sortedMissedVotesArrayDescendant() {

    //Here we create a variable (sortedStudentsArray), and make it equal to the sorted array
    let sortedMissedVotesArray = members.sort(function (a, b) {
        // a - b = lowest to highest
        return parseFloat(b.missed_votes) - parseFloat(a.missed_votes);
    });
    console.log(sortedMissedVotesArray);
}

// createTable()
function createTableTenPercent(tableId) {
    const table = document.getElementById(tableId)
    for (var i = 0; i < members.length / 10; i++) {
        let row = document.createElement('tr');
        table.appendChild(row);
        //Fist and last and if it have the middle name
        //make the name a link that redirects/opens a new atb with the member web page
        let nameCell = document.createElement("td")
        row.appendChild(nameCell);
        //create link tag that allows us to attatch a URL
        let link = document.createElement("a")
        //put the link tag inside the cell
        nameCell.appendChild(link);
        //give the right URL to the link tag
        link.href = members[i].url;
        //write the name of the member
        link.innerText = members[i].first_name + " " + members[i].last_name;

        let missedVotesCell = document.createElement("td");
        row.appendChild(missedVotesCell)
        missedVotesCell.innerText = members[i].missed_votes;

        let missedVotesPctCell = document.createElement("td");
        row.appendChild(missedVotesPctCell)
        missedVotesPctCell.innerText = members[i].missed_votes_pct;
    }
}
















































//function sortStudents() {
        //     let students = [{
        //             name: 'Ray',
        //             age: 29
        //         },
        //         {
        //             name: 'Robel',
        //             age: 20
        //         },
        //         {
        //             name: 'Pol',
        //             age: 24
        //         },
        //         {
        //             name: 'Dan',
        //             age: 35
        //         },
        //         {
        //             name: 'Sara',
        //             age: 19
        //         },
        //         {
        //             name: 'Anna',
        //             age: 32
        //         },
        //         {
        //             name: 'Sam',
        //             age: 20
        //         },
        //         {
        //             name: 'Gertude',
        //             age: 65
        //         },
        //     ]

        //     sortedMissed_VotesArray()


        //     function sortedMissed_VotesArray() {

        //         //Here we create a variable (sortedStudentsArray), and make it equal to the sorted array
        //         let sortedMissed_VotesArray = members.sort(function (a, b) {
        //             // a - b = lowest to highest
        //             return parseFloat(a.missed_votes) - parseFloat(b.missed_votes);
        //         });
        //         console.log(sortedMissed_VotesArray);
        //     }
    // }
       
    

















// After doing this for Members:
//You should have an array sorted, lowest - highest by missed_votes
//Then using the array/length we can calculate 10% of its members
//Then (because it is sorted), we can take the first 10%, and know that these are the lowest missed_votes
//Now console.log the sorted array

// calculateAverageStudentAge();

// function calculateAverageStudentAge() {
//     let totalOfAllAges = 0;
//     let numberOfStudents = students.length;
//     for (let i = 0; i < students.length; i++) {
//         totalOfAllAges = totalOfAllAges + students[i].age
//     }
//     console.log('total, all ages: ', totalOfAllAges)
//     console.log('average, all ages: ', totalOfAllAges / numberOfStudents)
// 
// }// let numberOfMissed_Votes_PctCell = document.createElement("td")
// row.appendChild(numberOfMissed_Votes_PctCell);
// numberOfMissed_Votes_PctCell.innerText = members[i].numberOfMissed_Votes_Pct;
//array
// const Object1 = ['missed_Votes_Pct', 'total_Votes']
// console.log(Object.keys(Object1));
//array

// var Obj = {'missedVotes':'totalVotes'} ;
//     console.log(Obj);

//     var points = [40, 100, 1, 5, 25, 10];

//     console.log(points.sort(function(a, b){return b - a}));


// let exampleArray = [2, 5, 7, 2, 5, 7, 9, 4, 1, 0, 8]

// }