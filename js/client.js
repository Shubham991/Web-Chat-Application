const socket= io('http://localhost:8000');

const form= document.getElementById('sendContainer');
const messageInput =  document.getElementById('messageInp');
const messageContainer = document.querySelector(".container");

var audio =  new Audio("ting.mp3");


const append = (message,position)=>{
    const messageElement =  document.createElement('div');
    messageElement.innerText= message;
    messageElement.classList.add('message');
    messageElement.classList.add(position);
    messageContainer.append(Element);
    if(position == 'left'){
        audio.play();
    }

}
const name= prompt("Enter your name to join");
socket.emit('new-user-joined', name);

socket.on('user-joined',name=>{
    append(`{name} joined the chat`);
})

socket.on('receive', data=>{
    append(`${data.name}: ${data.message}`,left)
})

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const message =  messageInput.value;
    append(`You: ${message}`,'right');
    socket.emit('send', message);
    messageInput.value= '';
})

socket.on('left',name=>{
    append(`{name} left the chat`,'right');
})
