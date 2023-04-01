const chatlog = document.getElementById("chatlog");
const userinput = document.getElementById("userinput");
const submitbutton = document.getElementById("submitbutton");

submitbutton.addEventListener("click", sendMessage);

function sendMessage() {
  const message = userinput.value;
  const newMessage = document.createElement("p");
  newMessage.innerHTML = `<span class="username">User:</span> ${message}`;
  chatlog.appendChild(newMessage);
  userinput.value = "";
  
  // Bot response
  setTimeout(() => {
    const botMessage = document.createElement("p");
    botMessage.innerHTML = `<span class="username">Bot:</span> Sorry, I'm just a simple chatbot and can't respond to your message right now.`;
    chatlog.appendChild(botMessage);
  }, 1000);
}