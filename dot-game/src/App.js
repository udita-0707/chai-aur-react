import logo from './logo.svg';
import './App.css';
import ChatWindow from "../../dot-game/src/components/ChatWindow";
import MessageInput from "../../dot-game/src/components/MessageInput";
import UserForm from "../../dot-game/src/components/UserForm";
function App() {
  const onSubmit = (username)=>{
    const [isUserRegistered, set]
    const socket = io("https://localhost:3000/dot-game",{transports:["websocket"],});

  }
  return (
      <div>
        {/*<ChatWindow/>*/}
        {/*  <MessageInput/>*/}
          <UserForm/>
      </div>

  );
}

export default App;
