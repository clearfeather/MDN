// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code#active_learning_filling_in_a_guest_list

const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');
admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: ';

// loop starts here
for (let person of people) {
    if (person === 'Phil' || person === 'Lola') {
        refused.textContent += `${person}, `;
    } else {
        admitted.textContent += `${person}, `;
    }
}

// refused.textContent += ;
// admitted.textContent += ;