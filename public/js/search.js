const searchPolls = async (event) => {
  event.preventDefault();
    
  const poll_id = document.querySelector('input[name="query"]').value.trim();

  if (poll_id) {
    const checkExists = await fetch(`/api/polls/${poll_id}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });

    if (checkExists.ok) {
      document.location.replace(`/poll/${poll_id}`);
    } else {
      alert('No poll with that ID.');
    }
  }
};

document.querySelector('#poll-search').addEventListener('submit', searchPolls);