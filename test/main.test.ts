jest.mock('nodemailer');

import { createTransport } from 'nodemailer';

const createTransportMock = createTransport as jest.MockedFunction<typeof createTransport>;
const sendMailMock = jest.fn();

createTransportMock.mockReturnValue({
    sendMail: sendMailMock
} as any);

describe('Given a contact csv', () => {
    describe('When user exec a cli command: `node happy-birthday.js`', () => {
        test('Then some contacts should receive a birthday mail', async () => {
            const transporter = createTransport();
            transporter.sendMail();

            expect(sendMailMock.mock.calls).toHaveLength(1);
        });
    });
});
