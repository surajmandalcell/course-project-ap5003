import { getAuth } from 'firebase/auth';
import React from 'react';
import { useMessages } from '../../hooks/useMessages';
import { auth } from '../../services/firebase';
import './styles.css';

function MessageList({ roomId }: { roomId: string }) {
    const containerRef = React.useRef(null);
    const { currentUser: user } = auth;
    const messages = useMessages(roomId);

    React.useLayoutEffect(() => {
        if (containerRef.current) {
            (containerRef.current as any).scrollTop = (containerRef.current as any).scrollHeight;
        }
    });

    return (
        <div className="message-list-container" ref={containerRef}>
            <ul className="message-list">
                {messages.map((x: any) => (
                    <Message
                        key={x.id}
                        message={x}
                        isOwnMessage={x.uid === user?.uid}
                    />
                ))}
            </ul>
        </div>
    );
}

function Message({ message, isOwnMessage }: { message: any; isOwnMessage: boolean; }) {
    const { displayName, text } = message;

    return (
        <li className={['message', isOwnMessage && 'own-message'].join(' ')}>
            <h4 className="sender">{isOwnMessage ? 'You' : displayName}</h4>
            <div>{text}</div>
        </li>
    );
}

export { MessageList };

