import { Box } from '@eleven-labs/design-system';
import { action } from '@storybook/addon-actions';
import { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import { PostPreviewList } from './PostPreviewList';

export default {
  title: 'Components/PostPreviewList',
  component: PostPreviewList,
  args: {
    posts: Array.from({ length: 7 }).map((_, index) => ({
      title: `Titre de l'article ${index}`,
      date: '09 fév. 2021',
      readingTime: '24mn',
      authors: ['J. Doe'],
      excerpt:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit vel tellus in molestie. Curabitur malesuada sodales consectetur. Aliquam convallis nec lacus in euismod. Vestibulum id eros vitae tellus sodales ultricies eget eu ipsum.',
    })),
  },
  parameters: {
    layout: 'full',
    viewport: {
      defaultViewport: 'extraSmallScreen',
    },
  },
  decorators: [
    (Story): JSX.Element => (
      <Box px="m" py="xl">
        <Story />
      </Box>
    ),
  ],
} as Meta<typeof PostPreviewList>;

const Template: StoryFn<typeof PostPreviewList> = (args) => <PostPreviewList {...args} />;

export const PostPreviewListWithPagination = Template.bind({});
PostPreviewListWithPagination.args = {
  pagination: {
    textNumberOfPosts: '6/156 affichés',
    numberOfPosts: 6,
    maxNumberOfPosts: 156,
    loadMoreButtonLabel: 'Afficher plus',
    onLoadMore: action('onLoadMore'),
  },
};
