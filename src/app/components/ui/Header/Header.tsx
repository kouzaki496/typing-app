import React from 'react';
import { Button } from '@/app/components/ui/Button/button';
import { useAuth } from '@/app/hooks/useAuth';

const Header = () => {
  const { user, signIn, signOut } = useAuth();
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center"></div>
      <Button onClick={signIn}>Googleでログイン</Button>
      <Button onClick={signOut}>ログアウト</Button>
    </header>
  );
};

export default Header;
