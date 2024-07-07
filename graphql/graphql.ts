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

export type Education = {
  __typename?: "Education";
  degree?: Maybe<Scalars["String"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  endDate?: Maybe<Scalars["String"]["output"]>;
  fieldOfStudy?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  institution?: Maybe<Scalars["String"]["output"]>;
  location?: Maybe<Location>;
  startDate: Scalars["String"]["output"];
};

export type EducationInput = {
  degree?: InputMaybe<Scalars["String"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  endDate?: InputMaybe<Scalars["String"]["input"]>;
  fieldOfStudy?: InputMaybe<Scalars["String"]["input"]>;
  institution?: InputMaybe<Scalars["String"]["input"]>;
  location?: InputMaybe<LocationInput>;
  startDate?: InputMaybe<Scalars["String"]["input"]>;
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

export type Experience = {
  __typename?: "Experience";
  company: Scalars["String"]["output"];
  description: Scalars["String"]["output"];
  endDate?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  location: Location;
  startDate: Scalars["String"]["output"];
  title: Scalars["String"]["output"];
};

export type ExperienceInput = {
  company?: InputMaybe<Scalars["String"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  endDate?: InputMaybe<Scalars["String"]["input"]>;
  location?: InputMaybe<LocationInput>;
  startDate?: InputMaybe<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
};

export type Location = {
  __typename?: "Location";
  city: Scalars["String"]["output"];
  coordinates?: Maybe<Scalars["String"]["output"]>;
  country: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  state?: Maybe<Scalars["String"]["output"]>;
};

export type LocationInput = {
  city?: InputMaybe<Scalars["String"]["input"]>;
  coordinates?: InputMaybe<Scalars["String"]["input"]>;
  country?: InputMaybe<Scalars["String"]["input"]>;
  state?: InputMaybe<Scalars["String"]["input"]>;
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
  updateUserProfile?: Maybe<UserProfileResult>;
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

export type MutationUpdateUserProfileArgs = {
  input: UserProfileInput;
};

export type Permission = {
  __typename?: "Permission";
  id: Scalars["ID"]["output"];
  isDateOfBirthVisible?: Maybe<Scalars["Boolean"]["output"]>;
  isEmailVisible?: Maybe<Scalars["Boolean"]["output"]>;
  isPhoneVisible?: Maybe<Scalars["Boolean"]["output"]>;
};

export type PermissionInput = {
  isDateOfBirthVisible?: InputMaybe<Scalars["Boolean"]["input"]>;
  isEmailVisible?: InputMaybe<Scalars["Boolean"]["input"]>;
  isPhoneVisible?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export enum Proficiency {
  Advanced = "ADVANCED",
  Beginner = "BEGINNER",
  Expert = "EXPERT",
  Intermediate = "INTERMEDIATE",
}

export type Query = {
  __typename?: "Query";
  getAllSkillSet?: Maybe<SkillResponse>;
  getUserById?: Maybe<UserResult>;
  user?: Maybe<User>;
  users?: Maybe<Array<Maybe<User>>>;
};

export type QueryGetUserByIdArgs = {
  input: UserInput;
};

export type SignupInput = {
  confirmPassword: Scalars["String"]["input"];
  email: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
  username: Scalars["String"]["input"];
};

export type Skill = {
  __typename?: "Skill";
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
  proficiency?: Maybe<Proficiency>;
};

export type SkillInput = {
  name?: InputMaybe<Scalars["String"]["input"]>;
  proficiency?: InputMaybe<Proficiency>;
};

export type SkillResponse = {
  __typename?: "SkillResponse";
  skills?: Maybe<Array<Skill>>;
};

export type User = {
  __typename?: "User";
  createdAt: Scalars["String"]["output"];
  email: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  profile?: Maybe<UserProfile>;
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

export type UserInput = {
  id: Scalars["ID"]["input"];
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

export type UserProfile = {
  __typename?: "UserProfile";
  currentLocation?: Maybe<Location>;
  dateOfBirth?: Maybe<Scalars["String"]["output"]>;
  education?: Maybe<Array<Education>>;
  experience?: Maybe<Array<Experience>>;
  firstName: Scalars["String"]["output"];
  headline?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  lastName: Scalars["String"]["output"];
  middleName?: Maybe<Scalars["String"]["output"]>;
  permission?: Maybe<Permission>;
  phoneNumber?: Maybe<Scalars["String"]["output"]>;
  skills?: Maybe<Array<Skill>>;
  summary?: Maybe<Scalars["String"]["output"]>;
};

export type UserProfileInput = {
  currentLocation?: InputMaybe<LocationInput>;
  dateOfBirth?: InputMaybe<Scalars["String"]["input"]>;
  education?: InputMaybe<Array<EducationInput>>;
  experience?: InputMaybe<Array<ExperienceInput>>;
  firstName?: InputMaybe<Scalars["String"]["input"]>;
  headline?: InputMaybe<Scalars["String"]["input"]>;
  lastName?: InputMaybe<Scalars["String"]["input"]>;
  middleName?: InputMaybe<Scalars["String"]["input"]>;
  permission?: InputMaybe<PermissionInput>;
  phoneNumber?: InputMaybe<Scalars["String"]["input"]>;
  skills?: InputMaybe<Array<SkillInput>>;
  summary?: InputMaybe<Scalars["String"]["input"]>;
};

export type UserProfileResponse = {
  __typename?: "UserProfileResponse";
  userProfile: UserProfile;
};

export type UserProfileResult =
  | UserBlockedError
  | UserInputError
  | UserNotFoundError
  | UserProfileResponse
  | UserSuspendedError;

export type UserRegistrationResult =
  | UserAlreadyExistError
  | UserInputError
  | UserRegistrationSuccess;

export type UserRegistrationSuccess = {
  __typename?: "UserRegistrationSuccess";
  user: User;
};

export type UserResponse = {
  __typename?: "UserResponse";
  user: User;
};

export type UserResult =
  | UserBlockedError
  | UserNotFoundError
  | UserResponse
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
  UserProfileResult:
    | UserBlockedError
    | UserInputError
    | UserNotFoundError
    | UserProfileResponse
    | UserSuspendedError;
  UserRegistrationResult:
    | UserAlreadyExistError
    | UserInputError
    | UserRegistrationSuccess;
  UserResult:
    | UserBlockedError
    | UserNotFoundError
    | UserResponse
    | UserSuspendedError;
};

/** Mapping of interface types */
export type ResolversInterfaceTypes<_RefType extends Record<string, unknown>> =
  {
    Error: ErrorHandler;
  };

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]["output"]>;
  Education: ResolverTypeWrapper<Education>;
  EducationInput: EducationInput;
  Error: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>["Error"]>;
  ErrorExtensions: ResolverTypeWrapper<ErrorExtensions>;
  ErrorHandler: ResolverTypeWrapper<ErrorHandler>;
  Experience: ResolverTypeWrapper<Experience>;
  ExperienceInput: ExperienceInput;
  ID: ResolverTypeWrapper<Scalars["ID"]["output"]>;
  Location: ResolverTypeWrapper<Location>;
  LocationInput: LocationInput;
  LoginInput: LoginInput;
  Mutation: ResolverTypeWrapper<{}>;
  Permission: ResolverTypeWrapper<Permission>;
  PermissionInput: PermissionInput;
  Proficiency: Proficiency;
  Query: ResolverTypeWrapper<{}>;
  SignupInput: SignupInput;
  Skill: ResolverTypeWrapper<Skill>;
  SkillInput: SkillInput;
  SkillResponse: ResolverTypeWrapper<SkillResponse>;
  String: ResolverTypeWrapper<Scalars["String"]["output"]>;
  User: ResolverTypeWrapper<User>;
  UserAlreadyExistError: ResolverTypeWrapper<UserAlreadyExistError>;
  UserBlockedError: ResolverTypeWrapper<UserBlockedError>;
  UserInput: UserInput;
  UserInputError: ResolverTypeWrapper<UserInputError>;
  UserLoginResult: ResolverTypeWrapper<
    ResolversUnionTypes<ResolversTypes>["UserLoginResult"]
  >;
  UserLoginSuccess: ResolverTypeWrapper<UserLoginSuccess>;
  UserNotFoundError: ResolverTypeWrapper<UserNotFoundError>;
  UserProfile: ResolverTypeWrapper<UserProfile>;
  UserProfileInput: UserProfileInput;
  UserProfileResponse: ResolverTypeWrapper<UserProfileResponse>;
  UserProfileResult: ResolverTypeWrapper<
    ResolversUnionTypes<ResolversTypes>["UserProfileResult"]
  >;
  UserRegistrationResult: ResolverTypeWrapper<
    ResolversUnionTypes<ResolversTypes>["UserRegistrationResult"]
  >;
  UserRegistrationSuccess: ResolverTypeWrapper<UserRegistrationSuccess>;
  UserResponse: ResolverTypeWrapper<UserResponse>;
  UserResult: ResolverTypeWrapper<
    ResolversUnionTypes<ResolversTypes>["UserResult"]
  >;
  UserSuspendedError: ResolverTypeWrapper<UserSuspendedError>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars["Boolean"]["output"];
  Education: Education;
  EducationInput: EducationInput;
  Error: ResolversInterfaceTypes<ResolversParentTypes>["Error"];
  ErrorExtensions: ErrorExtensions;
  ErrorHandler: ErrorHandler;
  Experience: Experience;
  ExperienceInput: ExperienceInput;
  ID: Scalars["ID"]["output"];
  Location: Location;
  LocationInput: LocationInput;
  LoginInput: LoginInput;
  Mutation: {};
  Permission: Permission;
  PermissionInput: PermissionInput;
  Query: {};
  SignupInput: SignupInput;
  Skill: Skill;
  SkillInput: SkillInput;
  SkillResponse: SkillResponse;
  String: Scalars["String"]["output"];
  User: User;
  UserAlreadyExistError: UserAlreadyExistError;
  UserBlockedError: UserBlockedError;
  UserInput: UserInput;
  UserInputError: UserInputError;
  UserLoginResult: ResolversUnionTypes<ResolversParentTypes>["UserLoginResult"];
  UserLoginSuccess: UserLoginSuccess;
  UserNotFoundError: UserNotFoundError;
  UserProfile: UserProfile;
  UserProfileInput: UserProfileInput;
  UserProfileResponse: UserProfileResponse;
  UserProfileResult: ResolversUnionTypes<ResolversParentTypes>["UserProfileResult"];
  UserRegistrationResult: ResolversUnionTypes<ResolversParentTypes>["UserRegistrationResult"];
  UserRegistrationSuccess: UserRegistrationSuccess;
  UserResponse: UserResponse;
  UserResult: ResolversUnionTypes<ResolversParentTypes>["UserResult"];
  UserSuspendedError: UserSuspendedError;
};

export type EducationResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["Education"] = ResolversParentTypes["Education"],
> = {
  degree?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  description?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  endDate?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  fieldOfStudy?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  institution?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  location?: Resolver<
    Maybe<ResolversTypes["Location"]>,
    ParentType,
    ContextType
  >;
  startDate?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
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

export type ExperienceResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["Experience"] = ResolversParentTypes["Experience"],
> = {
  company?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  description?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  endDate?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  location?: Resolver<ResolversTypes["Location"], ParentType, ContextType>;
  startDate?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  title?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LocationResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["Location"] = ResolversParentTypes["Location"],
> = {
  city?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  coordinates?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  country?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
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
  updateUserProfile?: Resolver<
    Maybe<ResolversTypes["UserProfileResult"]>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateUserProfileArgs, "input">
  >;
};

export type PermissionResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["Permission"] = ResolversParentTypes["Permission"],
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  isDateOfBirthVisible?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType
  >;
  isEmailVisible?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType
  >;
  isPhoneVisible?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["Query"] = ResolversParentTypes["Query"],
> = {
  getAllSkillSet?: Resolver<
    Maybe<ResolversTypes["SkillResponse"]>,
    ParentType,
    ContextType
  >;
  getUserById?: Resolver<
    Maybe<ResolversTypes["UserResult"]>,
    ParentType,
    ContextType,
    RequireFields<QueryGetUserByIdArgs, "input">
  >;
  user?: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>;
  users?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["User"]>>>,
    ParentType,
    ContextType
  >;
};

export type SkillResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["Skill"] = ResolversParentTypes["Skill"],
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  proficiency?: Resolver<
    Maybe<ResolversTypes["Proficiency"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SkillResponseResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["SkillResponse"] = ResolversParentTypes["SkillResponse"],
> = {
  skills?: Resolver<
    Maybe<Array<ResolversTypes["Skill"]>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["User"] = ResolversParentTypes["User"],
> = {
  createdAt?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  email?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  profile?: Resolver<
    Maybe<ResolversTypes["UserProfile"]>,
    ParentType,
    ContextType
  >;
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

export type UserProfileResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["UserProfile"] = ResolversParentTypes["UserProfile"],
> = {
  currentLocation?: Resolver<
    Maybe<ResolversTypes["Location"]>,
    ParentType,
    ContextType
  >;
  dateOfBirth?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  education?: Resolver<
    Maybe<Array<ResolversTypes["Education"]>>,
    ParentType,
    ContextType
  >;
  experience?: Resolver<
    Maybe<Array<ResolversTypes["Experience"]>>,
    ParentType,
    ContextType
  >;
  firstName?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  headline?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  middleName?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  permission?: Resolver<
    Maybe<ResolversTypes["Permission"]>,
    ParentType,
    ContextType
  >;
  phoneNumber?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  skills?: Resolver<
    Maybe<Array<ResolversTypes["Skill"]>>,
    ParentType,
    ContextType
  >;
  summary?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserProfileResponseResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["UserProfileResponse"] = ResolversParentTypes["UserProfileResponse"],
> = {
  userProfile?: Resolver<
    ResolversTypes["UserProfile"],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserProfileResultResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["UserProfileResult"] = ResolversParentTypes["UserProfileResult"],
> = {
  __resolveType: TypeResolveFn<
    | "UserBlockedError"
    | "UserInputError"
    | "UserNotFoundError"
    | "UserProfileResponse"
    | "UserSuspendedError",
    ParentType,
    ContextType
  >;
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

export type UserResponseResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["UserResponse"] = ResolversParentTypes["UserResponse"],
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
    | "UserBlockedError"
    | "UserNotFoundError"
    | "UserResponse"
    | "UserSuspendedError",
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
  Education?: EducationResolvers<ContextType>;
  Error?: ErrorResolvers<ContextType>;
  ErrorExtensions?: ErrorExtensionsResolvers<ContextType>;
  ErrorHandler?: ErrorHandlerResolvers<ContextType>;
  Experience?: ExperienceResolvers<ContextType>;
  Location?: LocationResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Permission?: PermissionResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Skill?: SkillResolvers<ContextType>;
  SkillResponse?: SkillResponseResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserAlreadyExistError?: UserAlreadyExistErrorResolvers<ContextType>;
  UserBlockedError?: UserBlockedErrorResolvers<ContextType>;
  UserInputError?: UserInputErrorResolvers<ContextType>;
  UserLoginResult?: UserLoginResultResolvers<ContextType>;
  UserLoginSuccess?: UserLoginSuccessResolvers<ContextType>;
  UserNotFoundError?: UserNotFoundErrorResolvers<ContextType>;
  UserProfile?: UserProfileResolvers<ContextType>;
  UserProfileResponse?: UserProfileResponseResolvers<ContextType>;
  UserProfileResult?: UserProfileResultResolvers<ContextType>;
  UserRegistrationResult?: UserRegistrationResultResolvers<ContextType>;
  UserRegistrationSuccess?: UserRegistrationSuccessResolvers<ContextType>;
  UserResponse?: UserResponseResolvers<ContextType>;
  UserResult?: UserResultResolvers<ContextType>;
  UserSuspendedError?: UserSuspendedErrorResolvers<ContextType>;
};
