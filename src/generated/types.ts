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
  posts?: Maybe<Array<Post>>;
  post?: Maybe<Post>;
  forgotPassword: Scalars['String'];
  authCode: User;
};

export type QueryUserArgs = {
  email: Scalars['String'];
};

export type QueryPostArgs = {
  PostId: Scalars['Int'];
};

export type QueryForgotPasswordArgs = {
  email: Scalars['String'];
};

export type QueryAuthCodeArgs = {
  authCode: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  email: Scalars['String'];
  nickname: Scalars['String'];
  password: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  profile?: Maybe<Scalars['String']>;
};

export type Post = {
  __typename?: 'Post';
  category: Scalars['String'];
  subject: Scalars['String'];
  content: Scalars['String'];
  createdAt: Scalars['DATE'];
  updatedAt: Scalars['DATE'];
  recommend: Scalars['Int'];
  views: Scalars['Int'];
  UserId: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addUser: User;
  login?: Maybe<LoginUser>;
  logout: Scalars['String'];
  tokenReissue: Scalars['String'];
  userInfoModifed: Scalars['String'];
  addPost: PostInfo;
};

export type MutationAddUserArgs = {
  email: Scalars['String'];
  nickname: Scalars['String'];
  password: Scalars['String'];
};

export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type MutationTokenReissueArgs = {
  accessToken: Scalars['String'];
  refreshToken: Scalars['String'];
};

export type MutationUserInfoModifedArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type MutationAddPostArgs = {
  category: Scalars['String'];
  subject: Scalars['String'];
  content: Scalars['String'];
  image?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type LoginUser = {
  __typename?: 'LoginUser';
  user: User;
  accessToken: Scalars['String'];
  refreshToken: Scalars['String'];
};

export type PostInfo = {
  __typename?: 'PostInfo';
  post: Post;
  image?: Maybe<Array<Maybe<Image>>>;
};

export type Image = {
  __typename?: 'Image';
  UserId: Scalars['Int'];
  src: Scalars['String'];
  createdAt: Scalars['DATE'];
  updatedAt: Scalars['DATE'];
};

export type Comment = {
  __typename?: 'Comment';
  content: Scalars['String'];
  createdAt: Scalars['DATE'];
  updatedAt: Scalars['DATE'];
  UserId: Scalars['Int'];
  PostId: Scalars['Int'];
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

export type AddUserMutation = { __typename?: 'Mutation' } & {
  addUser: { __typename?: 'User' } & Pick<User, 'email' | 'nickname'>;
};

export type LoginMutationVariables = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type LoginMutation = { __typename?: 'Mutation' } & {
  login?: Maybe<
    { __typename?: 'LoginUser' } & Pick<LoginUser, 'accessToken' | 'refreshToken'> & {
        user: { __typename?: 'User' } & Pick<User, 'nickname'>;
      }
  >;
};

export type LogoutMutationVariables = {};

export type LogoutMutation = { __typename?: 'Mutation' } & Pick<Mutation, 'logout'>;
