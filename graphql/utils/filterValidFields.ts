import { Permission, User, UserProfile } from "../graphql";

export const extractValidFields = (user: User): User => {
  const permission: Permission =
    user.permission ??
    ({
      isEmailVisible: false,
      isPhoneVisible: false,
      isDateOfBirthVisible: false,
    } as Permission);
  const profile: UserProfile = user.profile ?? ({} as UserProfile);

  const { isEmailVisible, isDateOfBirthVisible, isPhoneVisible } = permission;

  const filteredProfile: UserProfile = {
    ...profile,
    phoneNumber: isPhoneVisible ? profile.phoneNumber : undefined,
    dateOfBirth: isDateOfBirthVisible ? profile.dateOfBirth : undefined,
  };

  return {
    ...user,
    email: isEmailVisible ? user.email : undefined,
    profile: filteredProfile,
  };
};
