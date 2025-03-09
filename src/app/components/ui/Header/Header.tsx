import React from 'react';
import { Button } from '@/app/components/ui/Button/button';
import { useAuth } from '@/app/hooks/useAuth';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

const Header = () => {
  const { theme, setTheme } = useTheme();
  const { signIn, signOut, user } = useAuth();

  return (
    <header className="bg-secondary text-primary p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1>My Application</h1>
        {user ? (
          <Button onClick={signOut}>Sign Out</Button>
        ) : (
          <Button onClick={signIn}>Sign In</Button>
        )}
        <Button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </Button>
      </div>
    </header>
  );
};

export default Header;
