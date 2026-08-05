'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { submitContact } from './contact-action';
import { contactSchema, type ContactInput } from './contact-schema';

const fields = [
  { name: 'name', label: 'Nome', type: 'text', autoComplete: 'name' },
  { name: 'email', label: 'E-mail', type: 'email', autoComplete: 'email' },
  { name: 'phone', label: 'Telefone', type: 'tel', autoComplete: 'tel' },
  { name: 'subject', label: 'Assunto', type: 'text', autoComplete: 'off' },
] as const;

export function ContactForm() {
  const [status, setStatus] = useState<string>();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactInput>({ resolver: zodResolver(contactSchema) });
  const onSubmit = handleSubmit(async (values) => {
    const data = new FormData();
    Object.entries(values).forEach(([key, value]) => data.set(key, value));
    const result = await submitContact(data);
    setStatus(result.message);
    if (result.ok) reset();
  });
  return (
    <form
      onSubmit={onSubmit}
      className="text-graphite grid gap-4 rounded-lg bg-white p-6"
      noValidate
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {fields.map((field) => (
          <label key={field.name} className="text-sm font-medium">
            {field.label}
            <input
              {...register(field.name)}
              type={field.type}
              autoComplete={field.autoComplete}
              aria-invalid={!!errors[field.name]}
              className="mt-2 h-11 w-full rounded-md border px-3 text-sm"
            />
            {errors[field.name] && (
              <span className="mt-1 block text-xs text-red-700">
                {errors[field.name]?.message}
              </span>
            )}
          </label>
        ))}
      </div>
      <label className="text-sm font-medium">
        Mensagem
        <textarea
          {...register('message')}
          rows={4}
          aria-invalid={!!errors.message}
          className="mt-2 w-full rounded-md border p-3 text-sm"
        />
        {errors.message && (
          <span className="mt-1 block text-xs text-red-700">
            {errors.message.message}
          </span>
        )}
      </label>
      <div className="flex items-center justify-between gap-4">
        <p role="status" className="text-sm text-zinc-600">
          {status}
        </p>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Enviando…' : 'Enviar mensagem'}
        </Button>
      </div>
    </form>
  );
}
