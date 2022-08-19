const pollEdit = async (event) => {  
  
    event.preventDefault();



    const edit = event.target;

    if(edit.className == "desc_edit"){



      //const new_desc = edit.parentNode;

      // const poll_id = document.querySelector('input[name="id"]').value;

      let textField = $("<textarea>");

      let descTargetJ = $(event.target);

      let descTarget = descTargetJ.parent();
      
      let oldDesc = descTarget.first().text();

      textField.val(oldDesc);

      descTarget.remove(descTarget.first());
      
      descTarget.prepend(textField);

      // if (poll_desc) {
      //   const response = await fetch(`/api/home-routes/${poll_id}`, {
      //     method: 'PUT',
      //     body: JSON.stringify({ poll_desc }),
      //     headers: { 'Content-Type': 'application/json' },
      //   });
    
      //   if (response.ok) {
      //     document.location.replace(`/post/${poll_id}`);
      //   } else {
      //     alert('An error occured.');
      //   }
      // }
    }
  };

  document.querySelector('#cardEvent').addEventListener('click', pollEdit);
