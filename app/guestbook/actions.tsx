'use client';

import React from 'react';
import Icons from 'components/icons';
import { signIn, signOut } from 'next-auth/react';

import { Button } from '@/components/ui/button';

export const SignOut: React.FC = () => {
  return (
    <Button variant="ghost" onClick={() => signOut()}>
      → Sign out
    </Button>
  );
};

export const SignIn: React.FC = () => {
  return (
    <Button onClick={() => signIn('github')}>
      <Icons.github />
      <div className="ml-3">Sign in with GitHub</div>
    </Button>
  );
};
