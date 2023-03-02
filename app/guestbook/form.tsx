'use client';

import React, { useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Form() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isFetching, setIsFetching] = useState(false);
  const isMutating = isFetching || isPending;

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsFetching(true);

    const form = e.currentTarget;
    const input = form.elements.namedItem('entry') as HTMLInputElement;

    const res = await fetch('/api/guestbook', {
      body: JSON.stringify({
        body: input.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    input.value = '';
    const { error } = await res.json();

    setIsFetching(false);
    startTransition(() => {
      // Refresh the current route and fetch new data from the server without
      // losing client-side browser or React state.
      router.refresh();
    });
  }

  return (
    <form
      style={{ opacity: !isMutating ? 1 : 0.7 }}
      className="flex max-w-[500px] flex-row space-x-1 text-sm"
      onSubmit={onSubmit}
    >
      <Input
        aria-label="Your message up to 128 characters"
        placeholder="Add a message, up to 128 characters"
        disabled={isPending}
        name="entry"
        type="text"
        maxLength={128}
        required
      />

      <Button disabled={isMutating} type="submit">
        Sign
      </Button>
    </form>
  );
}
