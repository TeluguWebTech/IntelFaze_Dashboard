import UserOne from '../images/user/user-01.png';
import UserTwo from '../images/user/user-02.png';
import UserThree from '../images/user/user-03.png';
import UserFour from '../images/user/user-04.png';
import UserFive from '../images/user/user-05.png';

// import "../css/topproduct.css"

const chatData = [
  {
    avatar: UserOne,
    name: 'Devid Heilo',
    text: 'How are you?',
    time: 12,
    textCount: 3,
    color: '#10B981',
  },
  {
    avatar: UserTwo,
    name: 'Henry Fisher',
    text: 'Waiting for you!',
    time: 12,
    textCount: 0,
    color: '#DC3545',
  },
  {
    avatar: UserFour,
    name: 'Jhon Doe',
    text: "What's up?",
    time: 32,
    textCount: 0,
    color: '#10B981',
  },
  {
    avatar: UserFive,
    name: 'Jane Doe',
    text: 'Great',
    time: 32,
    textCount: 2,
    color: '#FFBA00',
  },
  {
    avatar: UserOne,
    name: 'Jhon Doe',
    text: 'How are you?',
    time: 32,
    textCount: 0,
    color: '#10B981',
  },
  {
    avatar: UserThree,
    name: 'Jhon Doe',
    text: 'How are you?',
    time: 32,
    textCount: 3,
    color: '#FFBA00',
  },
];

const TopProduct = () => {
  return (
    <div className="chat-card">
      <h4 className="chat-header">Chats</h4>

      <div >
        {chatData.map((chat, key) => (
          <div className="chat-link" key={key}>
            <div className="avatar-container">
              <img src={chat.avatar} alt="User" className="avatar-image" />
              <span
                className="status-dot"
                style={{ backgroundColor: chat.color }}
              ></span>
            </div>

            <div className="chat-info">
              <div className='tableSection'>
                <h5 className="chat-name">{chat.name}</h5>
                <p className="chat-message">
                  <span>{chat.text}</span>
                  <span className="chat-time"> . {chat.time} min</span>
                </p>
              </div>
              {chat.textCount !== 0 && (
                <div className="chat-count">
                  <span>{chat.textCount}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopProduct;
