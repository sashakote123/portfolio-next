import * as React from 'react';

const EmailTemplate = ({
    sendersName, sendersMail, sendersText
}: { sendersName: any, sendersMail: any, sendersText: any }) => (
    <div>
        <h1>Пришло письмо от {sendersName}</h1>
        <h2>Mail: {sendersMail}</h2>
        <div>{sendersText}</div>
    </div>
);

export default EmailTemplate