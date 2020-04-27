export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DATE: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Query = {
  __typename?: 'Query';
  users: Array<User>;
  user?: Maybe<User>;
  login?: Maybe<User>;
  logout: Scalars['String'];
  posts: Array<Post>;
  post?: Maybe<Array<Maybe<Post>>>;
  postInfo?: Maybe<Array<Maybe<Post>>>;
  comments?: Maybe<Array<Maybe<Comment>>>;
  comment?: Maybe<Array<Maybe<Comment>>>;
  image?: Maybe<Array<Maybe<Image>>>;
};

export type QueryUserArgs = {
  email: Scalars['String'];
};

export type QueryLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type QueryPostArgs = {
  UserId: Scalars['Int'];
};

export type QueryPostInfoArgs = {
  PostId: Scalars['Int'];
};

export type QueryCommentsArgs = {
  PostId: Scalars['Int'];
};

export type QueryCommentArgs = {
  UserId: Scalars['Int'];
};

export type QueryImageArgs = {
  PostId: Scalars['Int'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['Int'];
  email: Scalars['String'];
  nickname: Scalars['String'];
  password: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  profile?: Maybe<Scalars['String']>;
};

export type Post = {
  __typename?: 'Post';
  id: Scalars['Int'];
  category: Scalars['String'];
  subject: Scalars['String'];
  content: Scalars['String'];
  createdAt: Scalars['DATE'];
  updatedAt: Scalars['DATE'];
  recommend: Scalars['Int'];
  views: Scalars['Int'];
  UserId: Scalars['Int'];
};

export type Comment = {
  __typename?: 'Comment';
  id: Scalars['Int'];
  content: Scalars['String'];
  createdAt: Scalars['DATE'];
  updatedAt: Scalars['DATE'];
  UserId: Scalars['Int'];
  PostId: Scalars['Int'];
};

export type Image = {
  __typename?: 'Image';
  id: Scalars['Int'];
  UserId: Scalars['Int'];
  src: Scalars['String'];
  createdAt: Scalars['DATE'];
  updatedAt: Scalars['DATE'];
  PostId: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addUser: User;
  updateUser: User;
  addPost: Post;
  protectedAction?: Maybe<Scalars['String']>;
  imageUpload?: Maybe<Array<Maybe<Image>>>;
};

export type MutationAddUserArgs = {
  email: Scalars['String'];
  nickname: Scalars['String'];
  password: Scalars['String'];
};

export type MutationUpdateUserArgs = {
  nickname?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  profile?: Maybe<Scalars['String']>;
};

export type MutationAddPostArgs = {
  category: Scalars['String'];
  subject: Scalars['String'];
  content?: Maybe<Scalars['String']>;
  src?: Maybe<Scalars['String']>;
};

export type MutationImageUploadArgs = {
  PostId: Scalars['Int'];
  src: Scalars['String'];
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE',
}

export type AddUserMutationVariables = {
  email: Scalars['String'];
  nickname: Scalars['String'];
  password: Scalars['String'];
};

export type AddUserMutation = { __typename?: 'Mutation' } & { addUser: { __typename?: 'User' } & Pick<User, 'id'> };
