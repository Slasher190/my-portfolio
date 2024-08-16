import { GraphQLError, Source, ASTNode } from "graphql";
import { ErrorType } from "@app/graphql/constants/errorEnum";

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

export { CustomError };
