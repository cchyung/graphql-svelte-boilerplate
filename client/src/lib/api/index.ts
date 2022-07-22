/* This file was automatically generated.  Do not edit. */
/* prettier-ignore */
/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  JSON: any;
  /** A time string at UTC, such as 10:15:30Z, compliant with the `full-time` format outlined in section 5.6 of the RFC 3339profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Time: any;
};

export type LoginObject = {
  __typename?: 'LoginObject';
  authToken?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type Mutation = {
  __typename?: 'Mutation';
  getOrCreateUserNonce?: Maybe<NonceObject>;
  updateUser?: Maybe<User>;
};


export type MutationGetOrCreateUserNonceArgs = {
  address?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateUserArgs = {
  user: UserInput;
};

export type NonceObject = {
  __typename?: 'NonceObject';
  nonce?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  loginUser?: Maybe<LoginObject>;
  user?: Maybe<User>;
};


export type QueryLoginUserArgs = {
  address?: InputMaybe<Scalars['String']>;
};


export type QueryUserArgs = {
  authToken?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  _id?: Maybe<Scalars['String']>;
  about?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  imageURL?: Maybe<Scalars['String']>;
  nonce?: Maybe<Scalars['String']>;
  receiveNotifications?: Maybe<Scalars['Boolean']>;
  registered?: Maybe<Scalars['Boolean']>;
  username?: Maybe<Scalars['String']>;
};

export type UserInput = {
  about?: InputMaybe<Scalars['String']>;
  address?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  imageURL?: InputMaybe<Scalars['String']>;
  receiveNotifications?: InputMaybe<Scalars['Boolean']>;
  registered?: InputMaybe<Scalars['Boolean']>;
  username?: InputMaybe<Scalars['String']>;
};

export type UserFragment = { __typename?: 'User', _id?: string | null, address?: string | null, username?: string | null, about?: string | null, email?: string | null, receiveNotifications?: boolean | null, imageURL?: string | null, registered?: boolean | null };

export type GetOrCreateUserNonceMutationVariables = Exact<{
  address: Scalars['String'];
}>;


export type GetOrCreateUserNonceMutation = { __typename?: 'Mutation', getOrCreateUserNonce?: { __typename?: 'NonceObject', nonce?: string | null } | null };

export type UpdateUserMutationVariables = Exact<{
  user: UserInput;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser?: { __typename?: 'User', _id?: string | null, address?: string | null, username?: string | null, about?: string | null, email?: string | null, receiveNotifications?: boolean | null, imageURL?: string | null, registered?: boolean | null } | null };

export type GetUserQueryVariables = Exact<{
  authToken?: InputMaybe<Scalars['String']>;
}>;


export type GetUserQuery = { __typename?: 'Query', user?: { __typename?: 'User', _id?: string | null, address?: string | null, username?: string | null, about?: string | null, email?: string | null, receiveNotifications?: boolean | null, imageURL?: string | null, registered?: boolean | null } | null };

export type LoginUserQueryVariables = Exact<{
  address: Scalars['String'];
}>;


export type LoginUserQuery = { __typename?: 'Query', loginUser?: { __typename?: 'LoginObject', authToken?: string | null, user?: { __typename?: 'User', _id?: string | null, address?: string | null, username?: string | null, about?: string | null, email?: string | null, receiveNotifications?: boolean | null, imageURL?: string | null, registered?: boolean | null } | null } | null };
