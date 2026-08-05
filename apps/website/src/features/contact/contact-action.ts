'use server';

import { contactSchema } from './contact-schema';
import { ConsoleContactService } from './contact-service';

export async function submitContact(formData: FormData) {
  const input = Object.fromEntries(formData);
  const result = contactSchema.safeParse(input);
  if (!result.success)
    return { ok: false, message: 'Revise os campos e tente novamente.' };
  await new ConsoleContactService().send(result.data);
  return {
    ok: true,
    message: 'Mensagem recebida. Entraremos em contato em breve.',
  };
}
