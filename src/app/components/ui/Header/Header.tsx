import React from 'react';
import { Button } from '@/app/components/ui/Button/button';
import { useAuth } from '@/app/hooks/useAuth';

const Header = () => {
  const { signIn, signOut } = useAuth();
  return (
    <header className="bg-primary text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1>My Application</h1>
        <Button onClick={signIn}>Googleでログイン</Button>
        <Button onClick={signOut}>ログアウト</Button>
      </div>
    </header>
  );
};

export default Header;
