import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Dropdown } from '.';

const meta: ComponentMeta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  args: {
    options: [
      {
        text: 'Option 1',
        value: 'o1',
      },
      {
        text: 'Option 2',
        value: 'o2',
      },
      {
        text: 'Option 3',
        value: 'o3',
      },
    ],
    placeholder: 'Please select',
  },
};

export const Docs: ComponentStory<typeof Dropdown> = (props) => {
  const [value, setValue] = useState('');

  const handleChange = (value: string) => {
    setValue(value);
  };

  return (
    <div>
      <div
        style={{
          width: 200,
          marginBottom: 50,
        }}>
        <Dropdown {...props} value={value} onChange={handleChange} size={'large'} />
      </div>
      <div
        style={{
          width: 200,
          marginBottom: 50,
        }}>
        <Dropdown {...props} value={value} onChange={handleChange} size={'medium'} />
      </div>
      <div
        style={{
          width: 200,
          marginBottom: 50,
        }}>
        <Dropdown {...props} value={value} onChange={handleChange} size={'small'} />
      </div>
      <div
        style={{
          width: 200,
          marginBottom: 50,
        }}>
        <Dropdown {...props} value={value} onChange={handleChange} size={'medium'} disabled />
      </div>
    </div>
  );
};

export default meta;
