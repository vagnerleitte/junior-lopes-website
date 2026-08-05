import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().trim().min(2, 'Informe seu nome.'),
  email: z.email('Informe um e-mail válido.'),
  phone: z.string().trim().min(10, 'Informe um telefone válido.'),
  subject: z.string().trim().min(3, 'Informe o assunto.'),
  message: z.string().trim().min(10, 'Conte brevemente como podemos ajudar.'),
});
export type ContactInput = z.infer<typeof contactSchema>;
