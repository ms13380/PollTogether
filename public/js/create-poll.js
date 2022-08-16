const pollFormHandler = async (event) => {
    event.preventDefault();

    let poll_id = "";
    let id_exists = true;

    while(id_exists) {
        poll_id = await generateID(poll_id);
        const checkExists = await fetch(`/api/polls/${poll_id}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            });
        if (!checkExists.ok) {
            id_exists = false;
        }
    }
  
    const poll_title = document.querySelector('input[name="poll-title"]').value.trim();
    let poll_desc = document.querySelector('textarea[name="poll-desc"]').value.trim();
    if (!poll_desc) {
        poll_desc = "";
    }

    const optionsSection = $('#poll-options');

    let poll_options = `{"options": [`;
    for (let option of optionsSection.children()) {
        poll_options += `"${option.value}", `;
    }
    poll_options = poll_options.slice(0, -2) + `]}`;
  
    if (poll_title) {
      const response = await fetch('/api/polls', {
        method: 'POST',
        body: JSON.stringify({ poll_id: poll_id, poll_title: poll_title, poll_desc: poll_desc, poll_options: poll_options }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace(`/poll/${poll_id}`);
      } else {
        alert('An error occured.');
      }
    }
  };

const addOptionToPoll = async (event) => {
    let optionsSection = $('#poll-options');
    // let lineBreak = $('<br>');
    let newOption = $('<input>');
    newOption.attr('class', 'poll-option');
    newOption.attr('style', 'display:block');
    newOption.attr('required', true);
    // optionsSection.append(lineBreak);
    optionsSection.append(newOption);
}

async function generateID(code) {
    let characterSelection = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let codeLength = code.length == 0 ? 6 : 1;
    for (i = 0; i < codeLength; i++) {
        code += characterSelection.charAt(Math.floor(Math.random() * characterSelection.length))
      }
    return code;
}

  document.querySelector('#create-form').addEventListener('submit', pollFormHandler);
  document.querySelector('#add-option').addEventListener('click', addOptionToPoll);