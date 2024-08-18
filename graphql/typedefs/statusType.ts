const statusTypeDefs = `#graphql

  interface Operation {
    message: String!
    success: Boolean!
  }

  type Successful implements Operation {
    message: String!
    success: Boolean!
  }

  type Failure implements Operation {
    message: String!
    success: Boolean!
  }

  type NotFound implements Operation {
    message: String!
    success: Boolean!
  }

  union OperationStatus = Successful | Failure | NotFound
`;

export default statusTypeDefs;
