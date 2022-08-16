const pollFormHandler = async (event) => {
    event.preventDefault();
  
    const poll_title = document.querySelector('input[name="poll-title"]').value.trim();
    const poll_content = document.querySelector('textarea[name="poll-desc"]').value.trim();

    const optionsSection = $('#poll-options');

    let poll_options = "";
    for (let option in optionsSection.children()) {
        poll_options += option.value;
    }
  
    if (poll_title && poll_content) {
      const response = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({ post_title: poll_title, post_content: poll_content }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
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
    // optionsSection.append(lineBreak);
    optionsSection.append(newOption);
}

  document.querySelector('#submit-post').addEventListener('click', pollFormHandler);
  document.querySelector('#add-option').addEventListener('click', addOptionToPoll);