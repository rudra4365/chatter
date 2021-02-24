import { ChatEngine } from 'react-chat-engine'; 
import './App.css';
import ChatFeed from './components/ChatFeed';

const App = () => {
    return (
        <ChatEngine
            height = "100vh"
            projectID = "e1bc8a88-4653-4a1a-ad94-225230979799"
            userName = "rudra4365"
            userSecret = "123123"
            renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    );
}

export default App;