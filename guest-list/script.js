// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code#active_learning_filling_in_a_guest_list

const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');
admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: ';

// loop starts here
for (let person of people) {
    if (person === 'Phil' || person === 'Lola') {
        // Display and concat people to refuse
        refused.textContent += `${person}, `;
    } else {
        // Display and concat people to admin
        admitted.textContent += `${person}, `;
    }
}

// Update , to . at end of each textContent
refused.textContent = 
    refused.textContent.slice(0,refused.textContent.length-2) + '.';
admitted.textContent = 
    admitted.textContent.slice(0,admitted.textContent.length-2) + '.';