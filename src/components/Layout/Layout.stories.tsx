import { Meta, StoryObj } from '@storybook/react';
import Layout from './Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const meta: Meta<typeof Layout> = {
  title: 'Organisms/Layout',
  component: Layout,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Story />} />
        </Routes>
      </BrowserRouter>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Layout>;

export const Default: Story = {
  render: () => (
    <Layout>
      <div className="p-4">Main Content Goes Here</div>
    </Layout>
  ),
};
