import { useState } from 'react';
import { Button, Heading } from '@radix-ui/themes';

export function Greeting({messages}) {

  const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];

  const [greeting, setGreeting] = useState(messages[0]);

  return (
    <div>
      <Heading>{greeting}! Thank you for visiting!</Heading>
      <Button onClick={() => setGreeting(randomMessage())}>
        New Greeting
      </Button>
    </div>
  );
}
