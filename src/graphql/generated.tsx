import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type AuthGraphql = {
  __typename?: 'AuthGraphql';
  token: Scalars['String'];
  user?: Maybe<UserGraphql>;
};

export type Comment = {
  __typename?: 'Comment';
  comment: Scalars['String'];
  id: Scalars['ID'];
  post: Post;
  postId: Scalars['String'];
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type EnumStatusFilter = {
  equals?: InputMaybe<Status>;
  in?: InputMaybe<Array<Status>>;
  not?: InputMaybe<NestedEnumStatusFilter>;
  notIn?: InputMaybe<Array<Status>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Login as admin to create project */
  createProject: Project;
  /** Generate nonce for user login */
  generateNonce: Scalars['String'];
  /** User login */
  login: AuthGraphql;
};


export type MutationCreateProjectArgs = {
  data: ProjectCreateInput;
};


export type MutationGenerateNonceArgs = {
  address: Scalars['String'];
};


export type MutationLoginArgs = {
  address: Scalars['String'];
  sign: Scalars['String'];
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedEnumStatusFilter = {
  equals?: InputMaybe<Status>;
  in?: InputMaybe<Array<Status>>;
  not?: InputMaybe<NestedEnumStatusFilter>;
  notIn?: InputMaybe<Array<Status>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  isSet?: InputMaybe<Scalars['Boolean']>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type Post = {
  __typename?: 'Post';
  _count: PostCount;
  author: User;
  authorId: Scalars['String'];
  body: Scalars['String'];
  comments?: Maybe<Array<Comment>>;
  id: Scalars['ID'];
  slug: Scalars['String'];
  title: Scalars['String'];
};

export type PostCount = {
  __typename?: 'PostCount';
  comments: Scalars['Int'];
};

export type Project = {
  __typename?: 'Project';
  about?: Maybe<Scalars['String']>;
  created_at: Scalars['DateTime'];
  facebook?: Maybe<Scalars['String']>;
  feature?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  investor?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  partner?: Maybe<Scalars['String']>;
  roadmap?: Maybe<Scalars['String']>;
  status: Status;
  team?: Maybe<Scalars['String']>;
  telegram?: Maybe<Scalars['String']>;
  tokenomic?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
  website?: Maybe<Scalars['String']>;
  whitepaper?: Maybe<Scalars['String']>;
};

export type ProjectCreateInput = {
  about?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  facebook?: InputMaybe<Scalars['String']>;
  feature?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  investor?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  partner?: InputMaybe<Scalars['String']>;
  roadmap?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Status>;
  team?: InputMaybe<Scalars['String']>;
  telegram?: InputMaybe<Scalars['String']>;
  tokenomic?: InputMaybe<Scalars['String']>;
  twitter?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
  website?: InputMaybe<Scalars['String']>;
  whitepaper?: InputMaybe<Scalars['String']>;
};

export type ProjectOrderByWithRelationInput = {
  about?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  facebook?: InputMaybe<SortOrder>;
  feature?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  investor?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  partner?: InputMaybe<SortOrder>;
  roadmap?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  team?: InputMaybe<SortOrder>;
  telegram?: InputMaybe<SortOrder>;
  tokenomic?: InputMaybe<SortOrder>;
  twitter?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
  website?: InputMaybe<SortOrder>;
  whitepaper?: InputMaybe<SortOrder>;
};

export type ProjectWhereInput = {
  AND?: InputMaybe<Array<ProjectWhereInput>>;
  NOT?: InputMaybe<Array<ProjectWhereInput>>;
  OR?: InputMaybe<Array<ProjectWhereInput>>;
  about?: InputMaybe<StringNullableFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  facebook?: InputMaybe<StringNullableFilter>;
  feature?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  investor?: InputMaybe<StringNullableFilter>;
  name?: InputMaybe<StringFilter>;
  partner?: InputMaybe<StringNullableFilter>;
  roadmap?: InputMaybe<StringNullableFilter>;
  status?: InputMaybe<EnumStatusFilter>;
  team?: InputMaybe<StringNullableFilter>;
  telegram?: InputMaybe<StringNullableFilter>;
  tokenomic?: InputMaybe<StringNullableFilter>;
  twitter?: InputMaybe<StringNullableFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  website?: InputMaybe<StringNullableFilter>;
  whitepaper?: InputMaybe<StringNullableFilter>;
};

export type ProjectWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  me?: Maybe<UserGraphql>;
  project?: Maybe<Project>;
  projects: Array<Project>;
};


export type QueryProjectArgs = {
  where: ProjectWhereInput;
};


export type QueryProjectsArgs = {
  cursor?: InputMaybe<ProjectWhereUniqueInput>;
  orderBy?: InputMaybe<ProjectOrderByWithRelationInput>;
  skip?: InputMaybe<Scalars['Float']>;
  take?: InputMaybe<Scalars['Float']>;
  where?: InputMaybe<ProjectWhereInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export enum Status {
  Active = 'ACTIVE',
  Deleted = 'DELETED',
  Pending = 'PENDING'
}

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  isSet?: InputMaybe<Scalars['Boolean']>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  _count: UserCount;
  address: Scalars['String'];
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  posts?: Maybe<Array<Post>>;
  role: UserRole;
};

export type UserCount = {
  __typename?: 'UserCount';
  posts: Scalars['Int'];
};

export type UserGraphql = {
  __typename?: 'UserGraphql';
  _count: UserCount;
  address: Scalars['String'];
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  posts?: Maybe<Array<Post>>;
  role: UserRole;
};

export enum UserRole {
  Admin = 'ADMIN',
  User = 'USER'
}

export type GenerateNonceMutationVariables = Exact<{
  address: Scalars['String'];
}>;


export type GenerateNonceMutation = { __typename?: 'Mutation', generateNonce: string };

export type LoginMutationVariables = Exact<{
  address: Scalars['String'];
  sign: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'AuthGraphql', token: string, user?: { __typename?: 'UserGraphql', id: string, address: string, email?: string | null, name?: string | null, role: UserRole } | null } };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'UserGraphql', id: string, address: string, email?: string | null, name?: string | null, role: UserRole } | null };

export type CreateProjectMutationVariables = Exact<{
  data: ProjectCreateInput;
}>;


export type CreateProjectMutation = { __typename?: 'Mutation', createProject: { __typename?: 'Project', id: string } };

export type ProjectQueryVariables = Exact<{
  where: ProjectWhereInput;
}>;


export type ProjectQuery = { __typename?: 'Query', project?: { __typename?: 'Project', id: string, name: string, website?: string | null, whitepaper?: string | null, facebook?: string | null, twitter?: string | null, telegram?: string | null, about?: string | null, feature?: string | null, roadmap?: string | null, tokenomic?: string | null, team?: string | null, partner?: string | null, investor?: string | null, status: Status, created_at: any, updated_at: any } | null };

export type ProjectsQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Float']>;
  take?: InputMaybe<Scalars['Float']>;
  cursor?: InputMaybe<ProjectWhereUniqueInput>;
  where?: InputMaybe<ProjectWhereInput>;
  orderBy?: InputMaybe<ProjectOrderByWithRelationInput>;
}>;


export type ProjectsQuery = { __typename?: 'Query', projects: Array<{ __typename?: 'Project', id: string, name: string, website?: string | null, whitepaper?: string | null, facebook?: string | null, twitter?: string | null, telegram?: string | null, about?: string | null, feature?: string | null, roadmap?: string | null, tokenomic?: string | null, team?: string | null, partner?: string | null, investor?: string | null, status: Status, created_at: any, updated_at: any }> };


export const GenerateNonceDocument = gql`
    mutation generateNonce($address: String!) {
  generateNonce(address: $address)
}
    `;
export type GenerateNonceMutationFn = Apollo.MutationFunction<GenerateNonceMutation, GenerateNonceMutationVariables>;

/**
 * __useGenerateNonceMutation__
 *
 * To run a mutation, you first call `useGenerateNonceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGenerateNonceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [generateNonceMutation, { data, loading, error }] = useGenerateNonceMutation({
 *   variables: {
 *      address: // value for 'address'
 *   },
 * });
 */
export function useGenerateNonceMutation(baseOptions?: Apollo.MutationHookOptions<GenerateNonceMutation, GenerateNonceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GenerateNonceMutation, GenerateNonceMutationVariables>(GenerateNonceDocument, options);
      }
export type GenerateNonceMutationHookResult = ReturnType<typeof useGenerateNonceMutation>;
export type GenerateNonceMutationResult = Apollo.MutationResult<GenerateNonceMutation>;
export type GenerateNonceMutationOptions = Apollo.BaseMutationOptions<GenerateNonceMutation, GenerateNonceMutationVariables>;
export const LoginDocument = gql`
    mutation login($address: String!, $sign: String!) {
  login(address: $address, sign: $sign) {
    token
    user {
      id
      address
      email
      name
      role
    }
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      address: // value for 'address'
 *      sign: // value for 'sign'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const MeDocument = gql`
    query me {
  me {
    id
    address
    email
    name
    role
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const CreateProjectDocument = gql`
    mutation createProject($data: ProjectCreateInput!) {
  createProject(data: $data) {
    id
  }
}
    `;
export type CreateProjectMutationFn = Apollo.MutationFunction<CreateProjectMutation, CreateProjectMutationVariables>;

/**
 * __useCreateProjectMutation__
 *
 * To run a mutation, you first call `useCreateProjectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProjectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProjectMutation, { data, loading, error }] = useCreateProjectMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateProjectMutation(baseOptions?: Apollo.MutationHookOptions<CreateProjectMutation, CreateProjectMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateProjectMutation, CreateProjectMutationVariables>(CreateProjectDocument, options);
      }
export type CreateProjectMutationHookResult = ReturnType<typeof useCreateProjectMutation>;
export type CreateProjectMutationResult = Apollo.MutationResult<CreateProjectMutation>;
export type CreateProjectMutationOptions = Apollo.BaseMutationOptions<CreateProjectMutation, CreateProjectMutationVariables>;
export const ProjectDocument = gql`
    query project($where: ProjectWhereInput!) {
  project(where: $where) {
    id
    name
    website
    whitepaper
    facebook
    twitter
    telegram
    about
    feature
    roadmap
    tokenomic
    team
    partner
    investor
    status
    created_at
    updated_at
  }
}
    `;

/**
 * __useProjectQuery__
 *
 * To run a query within a React component, call `useProjectQuery` and pass it any options that fit your needs.
 * When your component renders, `useProjectQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProjectQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useProjectQuery(baseOptions: Apollo.QueryHookOptions<ProjectQuery, ProjectQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProjectQuery, ProjectQueryVariables>(ProjectDocument, options);
      }
export function useProjectLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProjectQuery, ProjectQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProjectQuery, ProjectQueryVariables>(ProjectDocument, options);
        }
export type ProjectQueryHookResult = ReturnType<typeof useProjectQuery>;
export type ProjectLazyQueryHookResult = ReturnType<typeof useProjectLazyQuery>;
export type ProjectQueryResult = Apollo.QueryResult<ProjectQuery, ProjectQueryVariables>;
export const ProjectsDocument = gql`
    query projects($skip: Float, $take: Float, $cursor: ProjectWhereUniqueInput, $where: ProjectWhereInput, $orderBy: ProjectOrderByWithRelationInput) {
  projects(
    skip: $skip
    take: $take
    cursor: $cursor
    where: $where
    orderBy: $orderBy
  ) {
    id
    name
    website
    whitepaper
    facebook
    twitter
    telegram
    about
    feature
    roadmap
    tokenomic
    team
    partner
    investor
    status
    created_at
    updated_at
  }
}
    `;

/**
 * __useProjectsQuery__
 *
 * To run a query within a React component, call `useProjectsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProjectsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProjectsQuery({
 *   variables: {
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *      cursor: // value for 'cursor'
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useProjectsQuery(baseOptions?: Apollo.QueryHookOptions<ProjectsQuery, ProjectsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProjectsQuery, ProjectsQueryVariables>(ProjectsDocument, options);
      }
export function useProjectsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProjectsQuery, ProjectsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProjectsQuery, ProjectsQueryVariables>(ProjectsDocument, options);
        }
export type ProjectsQueryHookResult = ReturnType<typeof useProjectsQuery>;
export type ProjectsLazyQueryHookResult = ReturnType<typeof useProjectsLazyQuery>;
export type ProjectsQueryResult = Apollo.QueryResult<ProjectsQuery, ProjectsQueryVariables>;