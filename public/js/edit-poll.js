const pollEdit = async (event) => {
    event.preventDefault();
  
    const poll_id = document.querySelector('input[name="id"]').value;
  
    if (poll_desc) {
      const response = await fetch(`/api/home-routes/${poll_id}`, {
        method: 'PUT',
        body: JSON.stringify({ poll_desc }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace(`/post/${poll_id}`);
      } else {
        alert('An error occured.');
      }
    }
  };

  document.querySelector('#edit-poll').addEventListener('click');