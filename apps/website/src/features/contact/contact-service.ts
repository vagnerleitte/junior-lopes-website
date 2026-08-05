import type { ContactInput } from './contact-schema';

export interface ContactService {
  send(input: ContactInput): Promise<void>;
}
export class ConsoleContactService implements ContactService {
  async send(input: ContactInput) {
    console.info('Contact request received', {
      subject: input.subject,
      receivedAt: new Date().toISOString(),
    });
  }
}
