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
        <div className="overflow-x-hidden overflow-y-auto h-max message-list-container bg-slate-950" ref={containerRef}>
            <ul className="h-full px-4 py-6 rounded-md bg-slate-800 message-list">
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
        <li className={[!isOwnMessage && 'pr-16', 'message', isOwnMessage && 'own-message pl-16', 'rounded-lg', 'opacity-95'].join(' ')}>
            <h4 className="italic font-semibold sender">{isOwnMessage ? 'You' : displayName}</h4>
            <div>{text}</div>
        </li>
    );
}

export { MessageList };

