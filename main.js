const members = data.results[0].members; // Here we have all the members in array format

console.log(document)

createTable(members);

//To filter our members array by party, we need to:
// 1. create a filter 




//this funcyion will create a table of members
function createTable(array) {
    const table = document.getElementById("main-table")
    //Each time we build the table, empty it first. This way we don't build the new table on top of the old one
    // to bulid only table nothing on it  table.innerHTML = '';
    table.innerHTML = '';
    for (var i = 0; i < array.length; i++) {
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
        link.href = array[i].url;
        //write the name of the member
        link.innerText = array[i].first_name + " " + array[i].last_name;

        let partyCell = document.createElement("td")
        row.appendChild(partyCell)
        partyCell.innerText = array[i].party;

      

        let stateCell = document.createElement("td")
        row.appendChild(stateCell);
        stateCell.innerText = array[i].state;


        let yearsInofficeCell = document.createElement("td")
        row.appendChild(yearsInofficeCell);
        yearsInofficeCell.innerText = array[i].seniority;


        let votesOfpartyCell = document.createElement("td")
        row.appendChild(votesOfpartyCell);
        votesOfpartyCell.innerText = array[i].votes_with_party_pct;
    }
}

// onclick is a element that makes the button clicked  we use this to make a button clicked 
// This is the function that is called when your checkboxes are clicked ''onCLick
function filterMembers() {

    //Empty array that we will fill with members that pass our filter test
    let filteredMembers = [];

    //Variable that is equal to the RETURN statement of the getCheckedParties() function
    let checkedParties = getCheckedParties();
     
    // If there are no parties checked    return to main-table
    //If there are no parties checked, build the table with all members
    if (checkedParties.length == 0) {
        createTable(members)

    //Otherwise (else), for each member, check if their party is included in the checkedPartiesarray
    //If it is, add that member to the filteredMembers array
    } else {
        for (let i = 0; i < members.length; i++) {
            if (checkedParties.includes(members[i].party)) {
                filteredMembers.push(members[i])
            }
        }

        //Then build table with filteredMembers array
        createTable(filteredMembers);
    }
}

function getCheckedParties() {

    //Empty array that we will populate with our checked party values (R, D, I) or combination
    var checkedParties = [];

    //Goes into our HTML, gets all elements with the classname of partyFilters (our checkboxes)
    //Checkboxes is an array containing all the information about our checkboxes
    var checkBoxes = document.getElementsByClassName('partyFilters');

    //Loop over our checkBoxes array. If one is checked (checked == true), push the value of it into the checkedParties array
    for (let i = 0; checkBoxes[i]; i++) {
        if (checkBoxes[i].checked == true) {
            checkedParties.push(checkBoxes[i].value);
        }
    }

    //Now we return our checkedParties array, so when we call this function, the function call will be equal to the checkedParties
    //https://www.w3schools.com/jsref/jsref_return.asp
    return checkedParties;
}

















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














































// // 1.Create table w/ student Array
// // 2.Show F students when click button F



// function sortStudents() {
//     let students = [{
//             name: 'Ray',
//             age: 29,
//             gender: "M"
//         },
//         {
//             name: 'Robel',
//             age: 20,
//             gender: "M"

//         },
//         {
//             name: 'Pol',
//             age: 24,
//             gender: "M"
//         },
//         {
//             name: 'Dan',
//             age: 35,
//             gender: "M"
//         },
//         {
//             name: 'Sara',
//             age: 19,
//             gender: "F"
//         },
//         {
//             name: 'Anna',
//             age: 32,
//             gender: "F"
//         },
//         {
//             name: 'Sam',
//             age: 20,
//             gender: "M"
//         },
//         {
//             name: 'Gertude',
//             age: 65,
//             gender: "F"
//         },
//     ]

//     createStudentTable()

//     function createStudentTable() {

//     }
//     sortedStudentsGenderArray()


//     function sortedStudentsGenderArray() {

//         //Here we create a variable (sortedStudentsArray), and make it equal to the sorted array
//         let sortedStudentArray = students.sort(function (a, b) {
//             // a - b = lowest to highest
//             return parseFloat(a.gender) - parseFloat(b.gender);
//         });
//         console.log(sortedStudentArray);
//     }
// }