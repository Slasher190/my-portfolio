import { GraphQLResolveInfo } from "graphql";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type Error = {
  message: Scalars["String"]["output"];
};

export type ErrorExtensions = {
  __typename?: "ErrorExtensions";
  code: Scalars["String"]["output"];
};

export type ErrorHandler = Error & {
  __typename?: "ErrorHandler";
  extensions?: Maybe<ErrorExtensions>;
  message: Scalars["String"]["output"];
};

export type LoginInput = {
  email?: InputMaybe<Scalars["String"]["input"]>;
  password: Scalars["String"]["input"];
  username?: InputMaybe<Scalars["String"]["input"]>;
};

export type Mutation = {
  __typename?: "Mutation";
  createUser?: Maybe<UserRegistrationResult>;
  deleteUser?: Maybe<User>;
  loginUser?: Maybe<UserLoginResult>;
};

export type MutationCreateUserArgs = {
  input: SignupInput;
};

export type MutationDeleteUserArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationLoginUserArgs = {
  input: LoginInput;
};

export type Query = {
  __typename?: "Query";
  user?: Maybe<User>;
  users?: Maybe<Array<Maybe<User>>>;
};

export type SignupInput = {
  confirmPassword: Scalars["String"]["input"];
  email: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
  username: Scalars["String"]["input"];
};

export type User = {
  __typename?: "User";
  createdAt: Scalars["String"]["output"];
  email: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  updatedAt: Scalars["String"]["output"];
  username: Scalars["String"]["output"];
};

export type UserAlreadyExistError = {
  __typename?: "UserAlreadyExistError";
  error: ErrorHandler;
};

export type UserBlockedError = {
  __typename?: "UserBlockedError";
  error: ErrorHandler;
};

export type UserInputError = {
  __typename?: "UserInputError";
  error: ErrorHandler;
};

export type UserLoginResult =
  | UserBlockedError
  | UserInputError
  | UserLoginSuccess
  | UserNotFoundError
  | UserSuspendedError;

export type UserLoginSuccess = {
  __typename?: "UserLoginSuccess";
  user: User;
};

export type UserNotFoundError = {
  __typename?: "UserNotFoundError";
  error: ErrorHandler;
};

export type UserRegistrationResult =
  | UserAlreadyExistError
  | UserInputError
  | UserRegistrationSuccess;

export type UserRegistrationSuccess = {
  __typename?: "UserRegistrationSuccess";
  user: User;
};

export type UserResult =
  | User
  | UserBlockedError
  | UserNotFoundError
  | UserSuspendedError;

export type UserSuspendedError = {
  __typename?: "UserSuspendedError";
  error: ErrorHandler;
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {},
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {},
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping of union types */
export type ResolversUnionTypes<_RefType extends Record<string, unknown>> = {
  UserLoginResult:
    | UserBlockedError
    | UserInputError
    | UserLoginSuccess
    | UserNotFoundError
    | UserSuspendedError;
  UserRegistrationResult:
    | UserAlreadyExistError
    | UserInputError
    | UserRegistrationSuccess;
  UserResult: User | UserBlockedError | UserNotFoundError | UserSuspendedError;
};

/** Mapping of interface types */
export type ResolversInterfaceTypes<_RefType extends Record<string, unknown>> =
  {
    Error: ErrorHandler;
  };

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]["output"]>;
  Error: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>["Error"]>;
  ErrorExtensions: ResolverTypeWrapper<ErrorExtensions>;
  ErrorHandler: ResolverTypeWrapper<ErrorHandler>;
  ID: ResolverTypeWrapper<Scalars["ID"]["output"]>;
  LoginInput: LoginInput;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  SignupInput: SignupInput;
  String: ResolverTypeWrapper<Scalars["String"]["output"]>;
  User: ResolverTypeWrapper<User>;
  UserAlreadyExistError: ResolverTypeWrapper<UserAlreadyExistError>;
  UserBlockedError: ResolverTypeWrapper<UserBlockedError>;
  UserInputError: ResolverTypeWrapper<UserInputError>;
  UserLoginResult: ResolverTypeWrapper<
    ResolversUnionTypes<ResolversTypes>["UserLoginResult"]
  >;
  UserLoginSuccess: ResolverTypeWrapper<UserLoginSuccess>;
  UserNotFoundError: ResolverTypeWrapper<UserNotFoundError>;
  UserRegistrationResult: ResolverTypeWrapper<
    ResolversUnionTypes<ResolversTypes>["UserRegistrationResult"]
  >;
  UserRegistrationSuccess: ResolverTypeWrapper<UserRegistrationSuccess>;
  UserResult: ResolverTypeWrapper<
    ResolversUnionTypes<ResolversTypes>["UserResult"]
  >;
  UserSuspendedError: ResolverTypeWrapper<UserSuspendedError>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars["Boolean"]["output"];
  Error: ResolversInterfaceTypes<ResolversParentTypes>["Error"];
  ErrorExtensions: ErrorExtensions;
  ErrorHandler: ErrorHandler;
  ID: Scalars["ID"]["output"];
  LoginInput: LoginInput;
  Mutation: {};
  Query: {};
  SignupInput: SignupInput;
  String: Scalars["String"]["output"];
  User: User;
  UserAlreadyExistError: UserAlreadyExistError;
  UserBlockedError: UserBlockedError;
  UserInputError: UserInputError;
  UserLoginResult: ResolversUnionTypes<ResolversParentTypes>["UserLoginResult"];
  UserLoginSuccess: UserLoginSuccess;
  UserNotFoundError: UserNotFoundError;
  UserRegistrationResult: ResolversUnionTypes<ResolversParentTypes>["UserRegistrationResult"];
  UserRegistrationSuccess: UserRegistrationSuccess;
  UserResult: ResolversUnionTypes<ResolversParentTypes>["UserResult"];
  UserSuspendedError: UserSuspendedError;
};

export type ErrorResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["Error"] = ResolversParentTypes["Error"],
> = {
  __resolveType: TypeResolveFn<"ErrorHandler", ParentType, ContextType>;
  message?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
};

export type ErrorExtensionsResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["ErrorExtensions"] = ResolversParentTypes["ErrorExtensions"],
> = {
  code?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ErrorHandlerResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["ErrorHandler"] = ResolversParentTypes["ErrorHandler"],
> = {
  extensions?: Resolver<
    Maybe<ResolversTypes["ErrorExtensions"]>,
    ParentType,
    ContextType
  >;
  message?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["Mutation"] = ResolversParentTypes["Mutation"],
> = {
  createUser?: Resolver<
    Maybe<ResolversTypes["UserRegistrationResult"]>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateUserArgs, "input">
  >;
  deleteUser?: Resolver<
    Maybe<ResolversTypes["User"]>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteUserArgs, "id">
  >;
  loginUser?: Resolver<
    Maybe<ResolversTypes["UserLoginResult"]>,
    ParentType,
    ContextType,
    RequireFields<MutationLoginUserArgs, "input">
  >;
};

export type QueryResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["Query"] = ResolversParentTypes["Query"],
> = {
  user?: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>;
  users?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["User"]>>>,
    ParentType,
    ContextType
  >;
};

export type UserResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["User"] = ResolversParentTypes["User"],
> = {
  createdAt?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  email?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  username?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserAlreadyExistErrorResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["UserAlreadyExistError"] = ResolversParentTypes["UserAlreadyExistError"],
> = {
  error?: Resolver<ResolversTypes["ErrorHandler"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserBlockedErrorResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["UserBlockedError"] = ResolversParentTypes["UserBlockedError"],
> = {
  error?: Resolver<ResolversTypes["ErrorHandler"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserInputErrorResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["UserInputError"] = ResolversParentTypes["UserInputError"],
> = {
  error?: Resolver<ResolversTypes["ErrorHandler"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserLoginResultResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["UserLoginResult"] = ResolversParentTypes["UserLoginResult"],
> = {
  __resolveType: TypeResolveFn<
    | "UserBlockedError"
    | "UserInputError"
    | "UserLoginSuccess"
    | "UserNotFoundError"
    | "UserSuspendedError",
    ParentType,
    ContextType
  >;
};

export type UserLoginSuccessResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["UserLoginSuccess"] = ResolversParentTypes["UserLoginSuccess"],
> = {
  user?: Resolver<ResolversTypes["User"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserNotFoundErrorResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["UserNotFoundError"] = ResolversParentTypes["UserNotFoundError"],
> = {
  error?: Resolver<ResolversTypes["ErrorHandler"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserRegistrationResultResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["UserRegistrationResult"] = ResolversParentTypes["UserRegistrationResult"],
> = {
  __resolveType: TypeResolveFn<
    "UserAlreadyExistError" | "UserInputError" | "UserRegistrationSuccess",
    ParentType,
    ContextType
  >;
};

export type UserRegistrationSuccessResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["UserRegistrationSuccess"] = ResolversParentTypes["UserRegistrationSuccess"],
> = {
  user?: Resolver<ResolversTypes["User"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResultResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["UserResult"] = ResolversParentTypes["UserResult"],
> = {
  __resolveType: TypeResolveFn<
    "User" | "UserBlockedError" | "UserNotFoundError" | "UserSuspendedError",
    ParentType,
    ContextType
  >;
};

export type UserSuspendedErrorResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["UserSuspendedError"] = ResolversParentTypes["UserSuspendedError"],
> = {
  error?: Resolver<ResolversTypes["ErrorHandler"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Error?: ErrorResolvers<ContextType>;
  ErrorExtensions?: ErrorExtensionsResolvers<ContextType>;
  ErrorHandler?: ErrorHandlerResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserAlreadyExistError?: UserAlreadyExistErrorResolvers<ContextType>;
  UserBlockedError?: UserBlockedErrorResolvers<ContextType>;
  UserInputError?: UserInputErrorResolvers<ContextType>;
  UserLoginResult?: UserLoginResultResolvers<ContextType>;
  UserLoginSuccess?: UserLoginSuccessResolvers<ContextType>;
  UserNotFoundError?: UserNotFoundErrorResolvers<ContextType>;
  UserRegistrationResult?: UserRegistrationResultResolvers<ContextType>;
  UserRegistrationSuccess?: UserRegistrationSuccessResolvers<ContextType>;
  UserResult?: UserResultResolvers<ContextType>;
  UserSuspendedError?: UserSuspendedErrorResolvers<ContextType>;
};
