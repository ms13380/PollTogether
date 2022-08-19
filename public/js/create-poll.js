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
    const poll_desc = document.querySelector('textarea[name="poll-desc"]').value.trim();
    let poll_expire = document.querySelector('input[name="poll-exp"]').value.trim();
    if (poll_expire == '') {
      poll_expire = null;
    } else {
      poll_expire = new Date(poll_expire);
      poll_expire = poll_expire.toUTCString();
    }

    const optionsSection = $('#poll-options');

    let poll_options = `{"options": [`;
    for (let option of optionsSection.children()) {
        poll_options += `"${option.children[0].value}", `;
    }
    poll_options = poll_options.slice(0, -2) + `]}`;
  
    if (poll_title) {
      const response = await fetch('/api/polls', {
        method: 'POST',
        body: JSON.stringify({ poll_id: poll_id, poll_expire: poll_expire, poll_title: poll_title, poll_desc: poll_desc, poll_options: poll_options }),
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
    let newRow = $('<li>');
    newRow.attr('class', 'list-group-item d-flex justify-content-between lh-condensed p-0 align-middle');
    let newOption = $('<input>');
    newOption.attr('class', 'poll-option');
    newOption.attr('required', true);
    newOption.attr('maxlength', '70');
    newRow.append(newOption);

    let removeOptionLink = $('<a>');
    removeOptionLink.attr('href', '#');
    removeOptionLink.attr('class', 'remove-option');
    removeOptionLink.text('remove');
    newRow.append(removeOptionLink);

    optionsSection.append(newRow);
}

const removeOptionFromPoll = async (event) => {
  if (event.target.className === 'remove-option') {
    let optionList = event.target.parentNode.parentNode;
  optionList.removeChild(event.target.parentNode);
  }
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
  document.querySelector('#poll-options').addEventListener('click', removeOptionFromPoll);