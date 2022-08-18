const vote = async (event) => {
    const poll_id = document.querySelector('input[name="poll-id"').value;
    const option = document.querySelector('input[name="vote"]:checked').value;
    if (poll_id && option) {
        try {
            const response = await fetch('/api/answers', {
              method: 'POST',
              body: JSON.stringify({ poll_id: poll_id, option: option }),
              headers: { 'Content-Type': 'application/json' },
            });
          
            if (response.ok) {
              document.location.reload();
              console.log(response);
            } else {
              alert(response.statusText);
            }
          } catch (err) {
            console.log(err);
          }
    }
};

document.querySelector('#vote').addEventListener('click', vote);