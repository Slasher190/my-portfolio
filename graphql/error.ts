import { GraphQLError, Source, ASTNode } from "graphql";

enum ErrorType {
  USER_INPUT_ERROR = "USER_INPUT_ERROR",
  AUTHENTICATION_ERROR = "AUTHENTICATION_ERROR",
  USER_SUSPENDED = "USER_SUSPENDED",
  USER_BLOCKED = "USER_BLOCKED",
  USER_NOT_FOUND = "USER_NOT_FOUND",
  USER_ALREADY_EXIST = "USER_ALREADY_EXIST",
  INTERNAL_SERVER_ERROR = "INTERNAL_SERVER_ERROR",
}

class CustomError extends GraphQLError {
  constructor(
    message: string,
    code: ErrorType,
    extensions?: Record<string, unknown> | null,
    nodes?: ASTNode | readonly ASTNode[] | null,
    source?: Source | null,
    positions?: readonly number[] | null,
    path?: readonly (string | number)[] | null,
    originalError?: Error | null
  ) {
    const customExtensions = {
      code,
      ...extensions,
    };

    super(
      message,
      nodes,
      source,
      positions,
      path,
      originalError,
      customExtensions
    );
    Object.defineProperty(this, "name", { value: "CustomError" });
  }
}

export { CustomError, ErrorType };
