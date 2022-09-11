import { BaseEntity } from '@/types';

export type Comment = {
  body: string;
  authorId: string;
  discussionId: string;
  authorFirstName: string;
} & BaseEntity;
