'use client';

import { Button } from '@/components/ui/button';
import Icons from 'components/icons';
import { signIn, signOut } from 'next-auth/react';

export function SignOut() {
  return (
    <Button variant="ghost" onClick={() => signOut()}>
      → Sign out
    </Button>
  );
}

export function SignIn() {
  return (
    <Button onClick={() => signIn('github')}>
      <Icons.github />
      <div className="ml-3">Sign in with GitHub</div>
    </Button>
  );
}