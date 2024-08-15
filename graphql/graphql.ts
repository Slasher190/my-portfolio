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
  degree: Scalars["String"]["output"];
  description?: Maybe<Scalars["String"]["output"]>;
  endDate?: Maybe<Scalars["String"]["output"]>;
  fieldOfStudy: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  institution: Scalars["String"]["output"];
  location?: Maybe<Location>;
  startDate: Scalars["String"]["output"];
};

export type EducationInputError = {
  __typename?: "EducationInputError";
  error: ErrorHandler;
};

export type EducationNotFoundError = {
  __typename?: "EducationNotFoundError";
  error: ErrorHandler;
};

export type EducationResponse = {
  __typename?: "EducationResponse";
  education?: Maybe<Array<Education>>;
};

export enum EmploymentType {
  Freelance = "FREELANCE",
  FullTime = "FULL_TIME",
  Internship = "INTERNSHIP",
  PartTime = "PART_TIME",
  SelfEmployed = "SELF_EMPLOYED",
  Trainee = "TRAINEE",
}

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
  employmentType: EmploymentType;
  endDate?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  location?: Maybe<Location>;
  startDate: Scalars["String"]["output"];
  title: Scalars["String"]["output"];
};

export type ExperienceInputError = {
  __typename?: "ExperienceInputError";
  error: ErrorHandler;
};

export type ExperienceNotFoundError = {
  __typename?: "ExperienceNotFoundError";
  error: ErrorHandler;
};

export type ExperienceResponse = {
  __typename?: "ExperienceResponse";
  experience?: Maybe<Array<Experience>>;
};

export type Language = {
  __typename?: "Language";
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
};

export type LanguageInput = {
  name?: InputMaybe<Scalars["String"]["input"]>;
};

export type LanguageInputError = {
  __typename?: "LanguageInputError";
  error: ErrorHandler;
};

export type LanguageNotFoundError = {
  __typename?: "LanguageNotFoundError";
  error: ErrorHandler;
};

export type LanguageResponse = {
  __typename?: "LanguageResponse";
  languages?: Maybe<Array<Language>>;
};

export type Location = {
  __typename?: "Location";
  city: Scalars["String"]["output"];
  coordinates?: Maybe<Scalars["String"]["output"]>;
  country: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  locationType?: Maybe<LocationType>;
  state?: Maybe<Scalars["String"]["output"]>;
};

export type LocationInput = {
  city?: InputMaybe<Scalars["String"]["input"]>;
  coordinates?: InputMaybe<Scalars["String"]["input"]>;
  country?: InputMaybe<Scalars["String"]["input"]>;
  locationType?: InputMaybe<LocationType>;
  state?: InputMaybe<Scalars["String"]["input"]>;
};

export enum LocationType {
  Hybrid = "HYBRID",
  OnSite = "ON_SITE",
  Remote = "REMOTE",
}

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
  updateUserEducations?: Maybe<UserEducationResult>;
  updateUserExperiences?: Maybe<UserExperienceResult>;
  updateUserPermissions?: Maybe<UserPermissionResult>;
  updateUserProfile?: Maybe<UserProfileResult>;
  updateUserSkills?: Maybe<UserSkillResult>;
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

export type MutationUpdateUserEducationsArgs = {
  input: UserEducationInput;
};

export type MutationUpdateUserExperiencesArgs = {
  input: UserExperienceInput;
};

export type MutationUpdateUserPermissionsArgs = {
  input: UserPermissionInput;
};

export type MutationUpdateUserProfileArgs = {
  input: UserProfileInput;
};

export type MutationUpdateUserSkillsArgs = {
  input: UserSkillInput;
};

export type Permission = {
  __typename?: "Permission";
  id: Scalars["ID"]["output"];
  isDateOfBirthVisible: Scalars["Boolean"]["output"];
  isEmailVisible: Scalars["Boolean"]["output"];
  isPhoneVisible: Scalars["Boolean"]["output"];
};

export type PermissionInputError = {
  __typename?: "PermissionInputError";
  error: ErrorHandler;
};

export type PermissionNotUpdatedError = {
  __typename?: "PermissionNotUpdatedError";
  error: ErrorHandler;
};

export type PermissionResponse = {
  __typename?: "PermissionResponse";
  permission: Permission;
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

export enum Sex {
  Female = "FEMALE",
  Male = "MALE",
  Other = "OTHER",
}

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
};

export type SkillInput = {
  name?: InputMaybe<Scalars["String"]["input"]>;
};

export type SkillInputError = {
  __typename?: "SkillInputError";
  error: ErrorHandler;
};

export type SkillNotFoundError = {
  __typename?: "SkillNotFoundError";
  error: ErrorHandler;
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
  permission?: Maybe<Permission>;
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

export type UserEducationInput = {
  degree?: InputMaybe<Scalars["String"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  endDate?: InputMaybe<Scalars["String"]["input"]>;
  fieldOfStudy?: InputMaybe<Scalars["String"]["input"]>;
  institution?: InputMaybe<Scalars["String"]["input"]>;
  location?: InputMaybe<LocationInput>;
  startDate?: InputMaybe<Scalars["String"]["input"]>;
};

export type UserEducationResult =
  | EducationInputError
  | EducationNotFoundError
  | EducationResponse;

export type UserExperienceInput = {
  company?: InputMaybe<Scalars["String"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  employmentType?: InputMaybe<EmploymentType>;
  endDate?: InputMaybe<Scalars["String"]["input"]>;
  location?: InputMaybe<LocationInput>;
  startDate?: InputMaybe<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
};

export type UserExperienceResult =
  | ExperienceInputError
  | ExperienceNotFoundError
  | ExperienceResponse;

export type UserInput = {
  id: Scalars["ID"]["input"];
};

export type UserInputError = {
  __typename?: "UserInputError";
  error: ErrorHandler;
};

export type UserLanguage = {
  __typename?: "UserLanguage";
  id: Scalars["ID"]["output"];
  language: Language;
  proficiency: Proficiency;
};

export type UserLanguageInput = {
  languageId: Scalars["ID"]["input"];
  proficiency?: InputMaybe<Proficiency>;
};

export type UserLanguageResult =
  | LanguageInputError
  | LanguageNotFoundError
  | LanguageResponse;

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

export type UserPermissionInput = {
  isDateOfBirthVisible?: InputMaybe<Scalars["Boolean"]["input"]>;
  isEmailVisible?: InputMaybe<Scalars["Boolean"]["input"]>;
  isPhoneVisible?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type UserPermissionResult =
  | PermissionInputError
  | PermissionNotUpdatedError
  | PermissionResponse;

export type UserProfile = {
  __typename?: "UserProfile";
  currentLocation?: Maybe<Location>;
  dateOfBirth?: Maybe<Scalars["String"]["output"]>;
  education?: Maybe<Array<Education>>;
  emailVerified?: Maybe<Scalars["Boolean"]["output"]>;
  experience?: Maybe<Array<Experience>>;
  firstName: Scalars["String"]["output"];
  headline?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  languages?: Maybe<Array<UserLanguage>>;
  lastName: Scalars["String"]["output"];
  middleName?: Maybe<Scalars["String"]["output"]>;
  phoneNumber?: Maybe<Scalars["String"]["output"]>;
  phoneNumberVerified?: Maybe<Scalars["Boolean"]["output"]>;
  sex: Sex;
  skills?: Maybe<Array<UserSkill>>;
  summary?: Maybe<Scalars["String"]["output"]>;
};

export type UserProfileInput = {
  currentLocation?: InputMaybe<LocationInput>;
  dateOfBirth?: InputMaybe<Scalars["String"]["input"]>;
  education?: InputMaybe<Array<UserEducationInput>>;
  experience?: InputMaybe<Array<UserExperienceInput>>;
  firstName?: InputMaybe<Scalars["String"]["input"]>;
  headline?: InputMaybe<Scalars["String"]["input"]>;
  languages?: InputMaybe<Array<UserLanguageInput>>;
  lastName?: InputMaybe<Scalars["String"]["input"]>;
  middleName?: InputMaybe<Scalars["String"]["input"]>;
  permission?: InputMaybe<UserPermissionInput>;
  phoneNumber?: InputMaybe<Scalars["String"]["input"]>;
  sex?: InputMaybe<Sex>;
  skills?: InputMaybe<Array<UserSkillInput>>;
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

export type UserSkill = {
  __typename?: "UserSkill";
  id: Scalars["ID"]["output"];
  proficiency: Proficiency;
  skill: Skill;
};

export type UserSkillInput = {
  proficiency?: InputMaybe<Proficiency>;
  skillId: Scalars["ID"]["input"];
};

export type UserSkillResult =
  | SkillInputError
  | SkillNotFoundError
  | SkillResponse;

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
  UserEducationResult:
    | EducationInputError
    | EducationNotFoundError
    | EducationResponse;
  UserExperienceResult:
    | ExperienceInputError
    | ExperienceNotFoundError
    | ExperienceResponse;
  UserLanguageResult:
    | LanguageInputError
    | LanguageNotFoundError
    | LanguageResponse;
  UserLoginResult:
    | UserBlockedError
    | UserInputError
    | UserLoginSuccess
    | UserNotFoundError
    | UserSuspendedError;
  UserPermissionResult:
    | PermissionInputError
    | PermissionNotUpdatedError
    | PermissionResponse;
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
  UserSkillResult: SkillInputError | SkillNotFoundError | SkillResponse;
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
  EducationInputError: ResolverTypeWrapper<EducationInputError>;
  EducationNotFoundError: ResolverTypeWrapper<EducationNotFoundError>;
  EducationResponse: ResolverTypeWrapper<EducationResponse>;
  EmploymentType: EmploymentType;
  Error: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>["Error"]>;
  ErrorExtensions: ResolverTypeWrapper<ErrorExtensions>;
  ErrorHandler: ResolverTypeWrapper<ErrorHandler>;
  Experience: ResolverTypeWrapper<Experience>;
  ExperienceInputError: ResolverTypeWrapper<ExperienceInputError>;
  ExperienceNotFoundError: ResolverTypeWrapper<ExperienceNotFoundError>;
  ExperienceResponse: ResolverTypeWrapper<ExperienceResponse>;
  ID: ResolverTypeWrapper<Scalars["ID"]["output"]>;
  Language: ResolverTypeWrapper<Language>;
  LanguageInput: LanguageInput;
  LanguageInputError: ResolverTypeWrapper<LanguageInputError>;
  LanguageNotFoundError: ResolverTypeWrapper<LanguageNotFoundError>;
  LanguageResponse: ResolverTypeWrapper<LanguageResponse>;
  Location: ResolverTypeWrapper<Location>;
  LocationInput: LocationInput;
  LocationType: LocationType;
  LoginInput: LoginInput;
  Mutation: ResolverTypeWrapper<{}>;
  Permission: ResolverTypeWrapper<Permission>;
  PermissionInputError: ResolverTypeWrapper<PermissionInputError>;
  PermissionNotUpdatedError: ResolverTypeWrapper<PermissionNotUpdatedError>;
  PermissionResponse: ResolverTypeWrapper<PermissionResponse>;
  Proficiency: Proficiency;
  Query: ResolverTypeWrapper<{}>;
  Sex: Sex;
  SignupInput: SignupInput;
  Skill: ResolverTypeWrapper<Skill>;
  SkillInput: SkillInput;
  SkillInputError: ResolverTypeWrapper<SkillInputError>;
  SkillNotFoundError: ResolverTypeWrapper<SkillNotFoundError>;
  SkillResponse: ResolverTypeWrapper<SkillResponse>;
  String: ResolverTypeWrapper<Scalars["String"]["output"]>;
  User: ResolverTypeWrapper<User>;
  UserAlreadyExistError: ResolverTypeWrapper<UserAlreadyExistError>;
  UserBlockedError: ResolverTypeWrapper<UserBlockedError>;
  UserEducationInput: UserEducationInput;
  UserEducationResult: ResolverTypeWrapper<
    ResolversUnionTypes<ResolversTypes>["UserEducationResult"]
  >;
  UserExperienceInput: UserExperienceInput;
  UserExperienceResult: ResolverTypeWrapper<
    ResolversUnionTypes<ResolversTypes>["UserExperienceResult"]
  >;
  UserInput: UserInput;
  UserInputError: ResolverTypeWrapper<UserInputError>;
  UserLanguage: ResolverTypeWrapper<UserLanguage>;
  UserLanguageInput: UserLanguageInput;
  UserLanguageResult: ResolverTypeWrapper<
    ResolversUnionTypes<ResolversTypes>["UserLanguageResult"]
  >;
  UserLoginResult: ResolverTypeWrapper<
    ResolversUnionTypes<ResolversTypes>["UserLoginResult"]
  >;
  UserLoginSuccess: ResolverTypeWrapper<UserLoginSuccess>;
  UserNotFoundError: ResolverTypeWrapper<UserNotFoundError>;
  UserPermissionInput: UserPermissionInput;
  UserPermissionResult: ResolverTypeWrapper<
    ResolversUnionTypes<ResolversTypes>["UserPermissionResult"]
  >;
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
  UserSkill: ResolverTypeWrapper<UserSkill>;
  UserSkillInput: UserSkillInput;
  UserSkillResult: ResolverTypeWrapper<
    ResolversUnionTypes<ResolversTypes>["UserSkillResult"]
  >;
  UserSuspendedError: ResolverTypeWrapper<UserSuspendedError>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars["Boolean"]["output"];
  Education: Education;
  EducationInputError: EducationInputError;
  EducationNotFoundError: EducationNotFoundError;
  EducationResponse: EducationResponse;
  Error: ResolversInterfaceTypes<ResolversParentTypes>["Error"];
  ErrorExtensions: ErrorExtensions;
  ErrorHandler: ErrorHandler;
  Experience: Experience;
  ExperienceInputError: ExperienceInputError;
  ExperienceNotFoundError: ExperienceNotFoundError;
  ExperienceResponse: ExperienceResponse;
  ID: Scalars["ID"]["output"];
  Language: Language;
  LanguageInput: LanguageInput;
  LanguageInputError: LanguageInputError;
  LanguageNotFoundError: LanguageNotFoundError;
  LanguageResponse: LanguageResponse;
  Location: Location;
  LocationInput: LocationInput;
  LoginInput: LoginInput;
  Mutation: {};
  Permission: Permission;
  PermissionInputError: PermissionInputError;
  PermissionNotUpdatedError: PermissionNotUpdatedError;
  PermissionResponse: PermissionResponse;
  Query: {};
  SignupInput: SignupInput;
  Skill: Skill;
  SkillInput: SkillInput;
  SkillInputError: SkillInputError;
  SkillNotFoundError: SkillNotFoundError;
  SkillResponse: SkillResponse;
  String: Scalars["String"]["output"];
  User: User;
  UserAlreadyExistError: UserAlreadyExistError;
  UserBlockedError: UserBlockedError;
  UserEducationInput: UserEducationInput;
  UserEducationResult: ResolversUnionTypes<ResolversParentTypes>["UserEducationResult"];
  UserExperienceInput: UserExperienceInput;
  UserExperienceResult: ResolversUnionTypes<ResolversParentTypes>["UserExperienceResult"];
  UserInput: UserInput;
  UserInputError: UserInputError;
  UserLanguage: UserLanguage;
  UserLanguageInput: UserLanguageInput;
  UserLanguageResult: ResolversUnionTypes<ResolversParentTypes>["UserLanguageResult"];
  UserLoginResult: ResolversUnionTypes<ResolversParentTypes>["UserLoginResult"];
  UserLoginSuccess: UserLoginSuccess;
  UserNotFoundError: UserNotFoundError;
  UserPermissionInput: UserPermissionInput;
  UserPermissionResult: ResolversUnionTypes<ResolversParentTypes>["UserPermissionResult"];
  UserProfile: UserProfile;
  UserProfileInput: UserProfileInput;
  UserProfileResponse: UserProfileResponse;
  UserProfileResult: ResolversUnionTypes<ResolversParentTypes>["UserProfileResult"];
  UserRegistrationResult: ResolversUnionTypes<ResolversParentTypes>["UserRegistrationResult"];
  UserRegistrationSuccess: UserRegistrationSuccess;
  UserResponse: UserResponse;
  UserResult: ResolversUnionTypes<ResolversParentTypes>["UserResult"];
  UserSkill: UserSkill;
  UserSkillInput: UserSkillInput;
  UserSkillResult: ResolversUnionTypes<ResolversParentTypes>["UserSkillResult"];
  UserSuspendedError: UserSuspendedError;
};

export type EducationResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["Education"] = ResolversParentTypes["Education"],
> = {
  degree?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  description?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  endDate?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  fieldOfStudy?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  institution?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  location?: Resolver<
    Maybe<ResolversTypes["Location"]>,
    ParentType,
    ContextType
  >;
  startDate?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EducationInputErrorResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["EducationInputError"] = ResolversParentTypes["EducationInputError"],
> = {
  error?: Resolver<ResolversTypes["ErrorHandler"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EducationNotFoundErrorResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["EducationNotFoundError"] = ResolversParentTypes["EducationNotFoundError"],
> = {
  error?: Resolver<ResolversTypes["ErrorHandler"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EducationResponseResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["EducationResponse"] = ResolversParentTypes["EducationResponse"],
> = {
  education?: Resolver<
    Maybe<Array<ResolversTypes["Education"]>>,
    ParentType,
    ContextType
  >;
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
  employmentType?: Resolver<
    ResolversTypes["EmploymentType"],
    ParentType,
    ContextType
  >;
  endDate?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  location?: Resolver<
    Maybe<ResolversTypes["Location"]>,
    ParentType,
    ContextType
  >;
  startDate?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  title?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ExperienceInputErrorResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["ExperienceInputError"] = ResolversParentTypes["ExperienceInputError"],
> = {
  error?: Resolver<ResolversTypes["ErrorHandler"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ExperienceNotFoundErrorResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["ExperienceNotFoundError"] = ResolversParentTypes["ExperienceNotFoundError"],
> = {
  error?: Resolver<ResolversTypes["ErrorHandler"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ExperienceResponseResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["ExperienceResponse"] = ResolversParentTypes["ExperienceResponse"],
> = {
  experience?: Resolver<
    Maybe<Array<ResolversTypes["Experience"]>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LanguageResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["Language"] = ResolversParentTypes["Language"],
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LanguageInputErrorResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["LanguageInputError"] = ResolversParentTypes["LanguageInputError"],
> = {
  error?: Resolver<ResolversTypes["ErrorHandler"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LanguageNotFoundErrorResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["LanguageNotFoundError"] = ResolversParentTypes["LanguageNotFoundError"],
> = {
  error?: Resolver<ResolversTypes["ErrorHandler"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LanguageResponseResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["LanguageResponse"] = ResolversParentTypes["LanguageResponse"],
> = {
  languages?: Resolver<
    Maybe<Array<ResolversTypes["Language"]>>,
    ParentType,
    ContextType
  >;
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
  locationType?: Resolver<
    Maybe<ResolversTypes["LocationType"]>,
    ParentType,
    ContextType
  >;
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
  updateUserEducations?: Resolver<
    Maybe<ResolversTypes["UserEducationResult"]>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateUserEducationsArgs, "input">
  >;
  updateUserExperiences?: Resolver<
    Maybe<ResolversTypes["UserExperienceResult"]>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateUserExperiencesArgs, "input">
  >;
  updateUserPermissions?: Resolver<
    Maybe<ResolversTypes["UserPermissionResult"]>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateUserPermissionsArgs, "input">
  >;
  updateUserProfile?: Resolver<
    Maybe<ResolversTypes["UserProfileResult"]>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateUserProfileArgs, "input">
  >;
  updateUserSkills?: Resolver<
    Maybe<ResolversTypes["UserSkillResult"]>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateUserSkillsArgs, "input">
  >;
};

export type PermissionResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["Permission"] = ResolversParentTypes["Permission"],
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  isDateOfBirthVisible?: Resolver<
    ResolversTypes["Boolean"],
    ParentType,
    ContextType
  >;
  isEmailVisible?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  isPhoneVisible?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PermissionInputErrorResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["PermissionInputError"] = ResolversParentTypes["PermissionInputError"],
> = {
  error?: Resolver<ResolversTypes["ErrorHandler"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PermissionNotUpdatedErrorResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["PermissionNotUpdatedError"] = ResolversParentTypes["PermissionNotUpdatedError"],
> = {
  error?: Resolver<ResolversTypes["ErrorHandler"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PermissionResponseResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["PermissionResponse"] = ResolversParentTypes["PermissionResponse"],
> = {
  permission?: Resolver<ResolversTypes["Permission"], ParentType, ContextType>;
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
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SkillInputErrorResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["SkillInputError"] = ResolversParentTypes["SkillInputError"],
> = {
  error?: Resolver<ResolversTypes["ErrorHandler"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SkillNotFoundErrorResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["SkillNotFoundError"] = ResolversParentTypes["SkillNotFoundError"],
> = {
  error?: Resolver<ResolversTypes["ErrorHandler"], ParentType, ContextType>;
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
  permission?: Resolver<
    Maybe<ResolversTypes["Permission"]>,
    ParentType,
    ContextType
  >;
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

export type UserEducationResultResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["UserEducationResult"] = ResolversParentTypes["UserEducationResult"],
> = {
  __resolveType: TypeResolveFn<
    "EducationInputError" | "EducationNotFoundError" | "EducationResponse",
    ParentType,
    ContextType
  >;
};

export type UserExperienceResultResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["UserExperienceResult"] = ResolversParentTypes["UserExperienceResult"],
> = {
  __resolveType: TypeResolveFn<
    "ExperienceInputError" | "ExperienceNotFoundError" | "ExperienceResponse",
    ParentType,
    ContextType
  >;
};

export type UserInputErrorResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["UserInputError"] = ResolversParentTypes["UserInputError"],
> = {
  error?: Resolver<ResolversTypes["ErrorHandler"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserLanguageResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["UserLanguage"] = ResolversParentTypes["UserLanguage"],
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  language?: Resolver<ResolversTypes["Language"], ParentType, ContextType>;
  proficiency?: Resolver<
    ResolversTypes["Proficiency"],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserLanguageResultResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["UserLanguageResult"] = ResolversParentTypes["UserLanguageResult"],
> = {
  __resolveType: TypeResolveFn<
    "LanguageInputError" | "LanguageNotFoundError" | "LanguageResponse",
    ParentType,
    ContextType
  >;
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

export type UserPermissionResultResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["UserPermissionResult"] = ResolversParentTypes["UserPermissionResult"],
> = {
  __resolveType: TypeResolveFn<
    "PermissionInputError" | "PermissionNotUpdatedError" | "PermissionResponse",
    ParentType,
    ContextType
  >;
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
  emailVerified?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
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
  languages?: Resolver<
    Maybe<Array<ResolversTypes["UserLanguage"]>>,
    ParentType,
    ContextType
  >;
  lastName?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  middleName?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  phoneNumber?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  phoneNumberVerified?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType
  >;
  sex?: Resolver<ResolversTypes["Sex"], ParentType, ContextType>;
  skills?: Resolver<
    Maybe<Array<ResolversTypes["UserSkill"]>>,
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

export type UserSkillResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["UserSkill"] = ResolversParentTypes["UserSkill"],
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  proficiency?: Resolver<
    ResolversTypes["Proficiency"],
    ParentType,
    ContextType
  >;
  skill?: Resolver<ResolversTypes["Skill"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserSkillResultResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["UserSkillResult"] = ResolversParentTypes["UserSkillResult"],
> = {
  __resolveType: TypeResolveFn<
    "SkillInputError" | "SkillNotFoundError" | "SkillResponse",
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
  EducationInputError?: EducationInputErrorResolvers<ContextType>;
  EducationNotFoundError?: EducationNotFoundErrorResolvers<ContextType>;
  EducationResponse?: EducationResponseResolvers<ContextType>;
  Error?: ErrorResolvers<ContextType>;
  ErrorExtensions?: ErrorExtensionsResolvers<ContextType>;
  ErrorHandler?: ErrorHandlerResolvers<ContextType>;
  Experience?: ExperienceResolvers<ContextType>;
  ExperienceInputError?: ExperienceInputErrorResolvers<ContextType>;
  ExperienceNotFoundError?: ExperienceNotFoundErrorResolvers<ContextType>;
  ExperienceResponse?: ExperienceResponseResolvers<ContextType>;
  Language?: LanguageResolvers<ContextType>;
  LanguageInputError?: LanguageInputErrorResolvers<ContextType>;
  LanguageNotFoundError?: LanguageNotFoundErrorResolvers<ContextType>;
  LanguageResponse?: LanguageResponseResolvers<ContextType>;
  Location?: LocationResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Permission?: PermissionResolvers<ContextType>;
  PermissionInputError?: PermissionInputErrorResolvers<ContextType>;
  PermissionNotUpdatedError?: PermissionNotUpdatedErrorResolvers<ContextType>;
  PermissionResponse?: PermissionResponseResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Skill?: SkillResolvers<ContextType>;
  SkillInputError?: SkillInputErrorResolvers<ContextType>;
  SkillNotFoundError?: SkillNotFoundErrorResolvers<ContextType>;
  SkillResponse?: SkillResponseResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserAlreadyExistError?: UserAlreadyExistErrorResolvers<ContextType>;
  UserBlockedError?: UserBlockedErrorResolvers<ContextType>;
  UserEducationResult?: UserEducationResultResolvers<ContextType>;
  UserExperienceResult?: UserExperienceResultResolvers<ContextType>;
  UserInputError?: UserInputErrorResolvers<ContextType>;
  UserLanguage?: UserLanguageResolvers<ContextType>;
  UserLanguageResult?: UserLanguageResultResolvers<ContextType>;
  UserLoginResult?: UserLoginResultResolvers<ContextType>;
  UserLoginSuccess?: UserLoginSuccessResolvers<ContextType>;
  UserNotFoundError?: UserNotFoundErrorResolvers<ContextType>;
  UserPermissionResult?: UserPermissionResultResolvers<ContextType>;
  UserProfile?: UserProfileResolvers<ContextType>;
  UserProfileResponse?: UserProfileResponseResolvers<ContextType>;
  UserProfileResult?: UserProfileResultResolvers<ContextType>;
  UserRegistrationResult?: UserRegistrationResultResolvers<ContextType>;
  UserRegistrationSuccess?: UserRegistrationSuccessResolvers<ContextType>;
  UserResponse?: UserResponseResolvers<ContextType>;
  UserResult?: UserResultResolvers<ContextType>;
  UserSkill?: UserSkillResolvers<ContextType>;
  UserSkillResult?: UserSkillResultResolvers<ContextType>;
  UserSuspendedError?: UserSuspendedErrorResolvers<ContextType>;
};
