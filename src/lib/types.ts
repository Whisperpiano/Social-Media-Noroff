export interface PostsResponse {
  id: number;
  title: string;
  body: string;
  tags: string[];
  media: Media;
  created: Date;
  updated: Date;
  author: Author;
  comments: Comment[];
  reactions: Reaction[];
  _count: {
    comments: number;
    reactions: number;
  };
}

type Author = {
  avatar: Media;
  banner: Media;
  bio: string;
  email: string;
  name: string;
};

type Comment = {
  body: string;
  created: Date;
  id: number;
  owner: string;
  postId: number;
  replyToId: number | null;
};

export type Media = {
  url: string;
  alt: string;
};

type Reaction = {
  symbol: string;
  count: number;
  reactors: string[];
};

export interface UserProfileResponse {
  _count: {
    followers: number;
    following: number;
    posts: number;
  };
  avatar: Media;
  banner: Media;
  bio: string;
  email: string;
  followers: Follower[];
  following: Follower[];
  name: string;
  posts: ProfilePost[];
}

type ProfilePost = {
  body: string;
  created: Date;
  id: number;
  media: Media;
  owner: string;
  tags: string[];
  title: string;
  updated: Date;
};

type Follower = {
  avatar: Media;
  banner: Media;
  bio: string;
  email: string;
  name: string;
};

export interface CommentResponse {
  author: Author;
  body: string;
  created: Date;
  id: number;
  owner: string;
  postId: number;
  replyToId: number | null;
}
