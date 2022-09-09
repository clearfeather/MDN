// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code#active_learning_launch_countdown

const output = document.querySelector('.output');

const countdown = () => {

    for (let i = 10; i >= 0; i--) {
        const para = document.createElement('p');
        output.append(para);
        if (i === 0) {
            para.textContent = `BLASTOFF!`;
        } else {
            // create new paragraph, append to div
            para.textContent = `Counting: ${i}`;
        }
    }
}

countdown();