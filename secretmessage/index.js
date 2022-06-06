// Removing the hash
const { hash } = window.location;
const message = atob(hash.replace('#', ''));

// Displaying the message:
if (message) {
  document.querySelector('#message-form').classList.add('hide');
  document.querySelector('#message-show').classList.remove('hide');

  document.querySelector('h1').innerHTML = message;
}

// Form:
  // First arg: watch for the submot event
  // Second arg: a callback function to run anytime the users submits the form.
document.querySelector('form').addEventListener('submit', event => {
  // As there is no back in server, we preventDefault to stop the default browser behavior whitch is submit the form:
  event.preventDefault();

  // Toggling visibility after clicking 'create' button: Selecting id="message-form" & id="link-form"
  document.querySelector('#message-form').classList.add('hide');
  document.querySelector('#link-form').classList.remove('hide');

  // Getting the text inside the text input:
  const input = document.querySelector('#message-input');
  // Base64 Encoding:
  const encrypted = btoa(input.value);

  // Code that is going to generate the encrypted string base64 & tossed into the link:
    // ${window.location}: get only the current url.
    // #${encrypted}: put the current url and the encrypted string.
  const linkInput = document.querySelector('#link-input');
  linkInput.value = `${window.location}#${encrypted}`;  
  
  // selecting the input and all the text inside of it.
  linkInput.select();
});
