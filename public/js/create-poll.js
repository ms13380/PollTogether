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

    const optionsSection = $('#poll-options');

    let poll_options = `{"options": [`;
    for (let option of optionsSection.children()) {
        poll_options += `"${option.children[0].value}", `;
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
    let newRow = $('<div>');
    let newOption = $('<input>');
    newOption.attr('class', 'poll-option');
    // newOption.attr('style', 'display:block');
    newOption.attr('required', true);
    newRow.append(newOption);
    // optionsSection.append(newOption);

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

// optionsElement.on('click', function(event) {
//   var clickedElement = $(event.target);
//   if (clickedElement.hasClass('remove-option')) {
//     let test = clickedElement.siblings()[0];
//   }
//   let test = clickedElement.siblings()[0];
// });

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