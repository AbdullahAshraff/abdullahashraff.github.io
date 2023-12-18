document.getElementById("contact-form").addEventListener("submit", async function(event) {
  event.preventDefault(); // Prevent the form from submitting in the traditional way
  
  const form = this;
  const url = `https://docs.google.com/forms/d/e/1FAIpQLSeWcMw8POGzxzAk6QE_KfztY4D4PbymEDLeoRvkhshvDQv1ng/formResponse?usp=pp_url&entry.1537986246=%D8%A7%D9%82%D8%AA%D8%B1%D8%A7%D8%AD&entry.1870951658=${encodeURIComponent(form.elements['email-input'].value)}&entry.113687613=${encodeURIComponent(form.elements['title-input'].value)}&entry.1438480475=${encodeURIComponent(form.elements['message-input'].value)}`;
  
  try {
      const response = await fetch(url, {
          method: 'POST',
          mode: 'no-cors',
      });
      console.log(response);
      form.reset();
  } catch (error) {
      console.error('An error occurred during form submission:', error);
  }
});