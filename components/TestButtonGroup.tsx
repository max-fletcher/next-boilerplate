'use client';

import { useState } from "react";
import { ButtonGroup } from "./ButtonGroup";
import { Home, Settings, User, Bell, Mail } from 'lucide-react';

const TestButtonGroup = () => {
  const [loading, setLoading] = useState(false);

  const handleClick = (buttonName: string) => {
    console.log(`${buttonName} clicked`);
      setLoading(true);
      setTimeout(() => setLoading(false), 2000);
  };

  const buttons = [
    { label: 'Button 1', onClick: () => handleClick('Button 1') },
    { label: 'Button 2', onClick: () => handleClick('Button 2') },
    { label: 'Button 3', onClick: () => handleClick('Button 3') },
  ];

  
  const buttonsWithIcons = [
    { label: 'Home', onClick: () => handleClick('Home'), loading, icon: Home },
    {
      label: 'Settings',
      onClick: () => handleClick('Settings'),
      loading,
      icon: Settings,
    },
    { label: 'Profile', onClick: () => handleClick('Profile'), loading, icon: User },
  ];

  const verticalButtons = [
    {
      label: 'Notifications',
      onClick: () => handleClick('Notifications'),
      icon: Bell,
    },
    { label: 'Messages', onClick: () => handleClick('Messages'), icon: Mail },
    { label: 'Profile', onClick: () => handleClick('Profile'), icon: User },
  ];

  const loadingButtons = [
    { label: "Normal", onClick: () => handleClick("Normal"), icon: Mail },
    {
      label: "Loading Example",
      onClick: () => handleClick("Loading Example"),
      loading,
      icon: User,
    },
    {
      label: "Disabled",
      onClick: () => handleClick("Disabled"),
      disabled: true,
    },
  ];

  return (
    <div className='flex flex-col space-y-8 p-4'>
      <div>
        <h2 className='text-lg font-semibold mb-2'>Default Button Group</h2>
        <ButtonGroup buttons={buttons} />
      </div>

      <div>
        <h2 className='text-lg font-semibold mb-2'>Button Group with Icons</h2>
        <ButtonGroup buttons={buttonsWithIcons} />
      </div>

      <div>
        <h2 className='text-lg font-semibold mb-2'>Outline Button Group</h2>
        <ButtonGroup buttons={buttons} isOutline />
      </div>

      <div>
        <h2 className='text-lg font-semibold mb-2'>Pill Button Group</h2>
        <ButtonGroup buttons={buttonsWithIcons} isPill />
      </div>

      <div>
        <h2 className='text-lg font-semibold mb-2'>Vertical Button Group</h2>
        <ButtonGroup
          buttons={verticalButtons}
          orientation='vertical'
          isOutline
        />
      </div>

      <div>
        <h2 className='text-lg font-semibold mb-2'>Toggle Button Group</h2>
        <ButtonGroup buttons={buttonsWithIcons} isToggle={true} />
      </div>

      <div>
        <h2 className='text-lg font-semibold mb-2'>
          Custom Color Button Group
        </h2>
        <ButtonGroup
          size='lg'
          className='bg-red-100'
          buttons={buttons}
          color='#6366f1'
        />
      </div>

      <div>
        <h2 className='text-lg font-semibold mb-2'>
          Loading and Disabled States
        </h2>
        <ButtonGroup buttons={loadingButtons} />
      </div>
    </div>
  );
}

export default TestButtonGroup