const pollEdit = async (event) => {  

  const edit = event.target;

  if (edit.className == "desc_edit") {
    event.preventDefault();
    let textField = $("<textarea>");
    textField.attr('class', 'w-100');
    textField.attr('style', 'height: 160px');
    textField.attr('maxlength', '65535');
    let parentDiv = edit.closest('div');
    let spanEl = parentDiv.childNodes[1];
    let aEl = parentDiv.childNodes[3];
    let spanText = spanEl.textContent.trim();
    textField.val(spanText);
    let jParent = $(parentDiv);

    let saveButton = $('<button>');
    saveButton.attr('class', 'save-desc btn btn-primary mx-1');
    saveButton.text('Save');
    jParent.prepend(saveButton);

    let cancelButton = $('<button>');
    cancelButton.attr('class', 'cancel-desc btn btn-secondary mx-1');
    cancelButton.text('Cancel');
    jParent.prepend(cancelButton);

    spanEl.classList.add('hidden');
    aEl.classList.add('hidden');
    jParent.prepend(textField);
  } else if (edit.classList.contains('save-desc')) {
    let parentDiv = edit.closest('div');
    let textAreaEl = parentDiv.childNodes[0];
    let descText = textAreaEl.value.trim();
    const pollID = parentDiv.querySelector('input[name="poll-id"]').value;
    const response = await fetch(`/api/polls/${pollID}`, {
      method: 'PUT',
      body: JSON.stringify({ id: pollID, poll_desc: descText }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      document.location.reload();
    } else {
      alert('An error occured.');
    }
  } else if (edit.classList.contains('cancel-desc')) {
    let parentDiv = edit.closest('div');
    let textAreaEl = parentDiv.childNodes[0];
    let saveEl = parentDiv.childNodes[1];
    let cancelEl = parentDiv.childNodes[2];

    parentDiv.removeChild(textAreaEl);
    parentDiv.removeChild(saveEl);
    parentDiv.removeChild(cancelEl);

    let spanEl = parentDiv.childNodes[1];
    let aEl = parentDiv.childNodes[3];
    spanEl.classList.remove('hidden');
    aEl.classList.remove('hidden');
  }
};

document.querySelector('#cardEvent').addEventListener('click', pollEdit);