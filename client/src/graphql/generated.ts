import { GraphQLClient } from "graphql-request";
import { RequestInit } from "graphql-request/dist/types.dom";
import {
  useMutation,
  UseMutationOptions,
  useQuery,
  UseQueryOptions,
} from "react-query";
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

function fetcher<TData, TVariables>(
  client: GraphQLClient,
  query: string,
  variables?: TVariables,
  headers?: RequestInit["headers"]
) {
  return async (): Promise<TData> =>
    client.request<TData, TVariables>(query, variables, headers);
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AccountAdminLoginInput = {
  adminId: Scalars["ID"];
  adminPassword: Scalars["String"];
};

export type AccountGeneralResponse = {
  __typename?: "AccountGeneralResponse";
  account?: Maybe<AccountGraphql>;
  error?: Maybe<FieldError>;
};

export type AccountGraphql = {
  __typename?: "AccountGraphql";
  createdAt: Scalars["String"];
  email: Scalars["String"];
  firstName: Scalars["String"];
  id: Scalars["ID"];
  lastName: Scalars["String"];
  password: Scalars["String"];
  role: Scalars["String"];
  updatedAt: Scalars["String"];
};

export type AccountLoginInput = {
  email: Scalars["String"];
  password: Scalars["String"];
};

export type AccountRegisterInput = {
  email: Scalars["String"];
  firstName: Scalars["String"];
  lastName: Scalars["String"];
  password: Scalars["String"];
  role: Scalars["String"];
};

export type CreateProductInput = {
  category: Scalars["String"];
  description: Scalars["String"];
  imageUrl: Scalars["String"];
  name: Scalars["String"];
  price: Scalars["Float"];
  tags: Array<Scalars["String"]>;
};

export type CreatePurchaseInput = {
  accountId: Scalars["ID"];
  price: Scalars["Float"];
  productId: Scalars["ID"];
  quantity: Scalars["Int"];
  total: Scalars["Float"];
};

export type FieldError = {
  __typename?: "FieldError";
  field: Scalars["String"];
  message: Scalars["String"];
  ufm: Scalars["String"];
};

export type Mutation = {
  __typename?: "Mutation";
  adminLogin: Scalars["Boolean"];
  createProduct?: Maybe<ProductGeneralResponse>;
  createPurchase?: Maybe<PurchaseGeneralResponse>;
  deleteProduct: Scalars["Boolean"];
  login: AccountGeneralResponse;
  logout: Scalars["Boolean"];
  purchaseProducts: Scalars["Boolean"];
  register?: Maybe<AccountGeneralResponse>;
};

export type MutationAdminLoginArgs = {
  input: AccountAdminLoginInput;
};

export type MutationCreateProductArgs = {
  input: CreateProductInput;
};

export type MutationCreatePurchaseArgs = {
  input: CreatePurchaseInput;
};

export type MutationDeleteProductArgs = {
  productIdOrName: Scalars["String"];
};

export type MutationLoginArgs = {
  input: AccountLoginInput;
};

export type MutationPurchaseProductsArgs = {
  input: PurchaseProductsInput;
};

export type MutationRegisterArgs = {
  input: AccountRegisterInput;
};

export type ProductGeneralResponse = {
  __typename?: "ProductGeneralResponse";
  error?: Maybe<FieldError>;
  product?: Maybe<ProductGraphql>;
};

export type ProductGraphql = {
  __typename?: "ProductGraphql";
  category: Scalars["String"];
  createdAt: Scalars["String"];
  description: Scalars["String"];
  id: Scalars["ID"];
  imageUrl: Scalars["String"];
  name: Scalars["String"];
  price: Scalars["Float"];
  tags: Array<TagGraphql>;
  updatedAt: Scalars["String"];
};

export type PurchaseGeneralResponse = {
  __typename?: "PurchaseGeneralResponse";
  error?: Maybe<FieldError>;
  purchase?: Maybe<PurchaseGraphql>;
};

export type PurchaseGraphql = {
  __typename?: "PurchaseGraphql";
  accountId: Scalars["ID"];
  createdAt: Scalars["String"];
  id: Scalars["ID"];
  price: Scalars["Int"];
  productId: Scalars["ID"];
  quantity: Scalars["Int"];
  total: Scalars["Int"];
  updatedAt: Scalars["String"];
};

export type PurchaseListingInput = {
  productId: Scalars["ID"];
  quantity: Scalars["Int"];
};

export type PurchaseProductsInput = {
  accountId: Scalars["ID"];
  purchaseListings: Array<PurchaseListingInput>;
};

export type Query = {
  __typename?: "Query";
  account?: Maybe<AccountGraphql>;
  accounts: Array<AccountGraphql>;
  getPurchase?: Maybe<PurchaseGraphql>;
  getPurchases: Array<PurchaseGraphql>;
  me?: Maybe<AccountGeneralResponse>;
  product?: Maybe<ProductGraphql>;
  products: Array<ProductGraphql>;
};

export type QueryAccountArgs = {
  accountIdOrEmail: Scalars["ID"];
};

export type QueryGetPurchaseArgs = {
  purchaseId: Scalars["ID"];
};

export type QueryProductArgs = {
  productIdOrName: Scalars["ID"];
};

export type TagGraphql = {
  __typename?: "TagGraphql";
  createdAt: Scalars["String"];
  id: Scalars["ID"];
  productId: Scalars["ID"];
  text: Scalars["String"];
  updatedAt: Scalars["String"];
};

export type ProductFragmentFragment = {
  __typename?: "ProductGraphql";
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  imageUrl: string;
  tags: Array<{
    __typename?: "TagGraphql";
    id: string;
    productId: string;
    text: string;
  }>;
};

export type AdminLoginMutationVariables = Exact<{
  input: AccountAdminLoginInput;
}>;

export type AdminLoginMutation = {
  __typename?: "Mutation";
  adminLogin: boolean;
};

export type LoginMutationVariables = Exact<{
  input: AccountLoginInput;
}>;

export type LoginMutation = {
  __typename?: "Mutation";
  login: {
    __typename?: "AccountGeneralResponse";
    account?:
      | {
          __typename?: "AccountGraphql";
          id: string;
          firstName: string;
          lastName: string;
          email: string;
        }
      | null
      | undefined;
    error?:
      | {
          __typename?: "FieldError";
          field: string;
          message: string;
          ufm: string;
        }
      | null
      | undefined;
  };
};

export type LogoutMutationVariables = Exact<{ [key: string]: never }>;

export type LogoutMutation = { __typename?: "Mutation"; logout: boolean };

export type RegisterMutationVariables = Exact<{
  input: AccountRegisterInput;
}>;

export type RegisterMutation = {
  __typename?: "Mutation";
  register?:
    | {
        __typename?: "AccountGeneralResponse";
        account?:
          | {
              __typename?: "AccountGraphql";
              id: string;
              firstName: string;
              lastName: string;
              email: string;
              password: string;
              role: string;
            }
          | null
          | undefined;
        error?:
          | {
              __typename?: "FieldError";
              field: string;
              message: string;
              ufm: string;
            }
          | null
          | undefined;
      }
    | null
    | undefined;
};

export type MeQueryVariables = Exact<{ [key: string]: never }>;

export type MeQuery = {
  __typename?: "Query";
  me?:
    | {
        __typename?: "AccountGeneralResponse";
        account?:
          | {
              __typename?: "AccountGraphql";
              id: string;
              firstName: string;
              lastName: string;
              email: string;
              createdAt: string;
            }
          | null
          | undefined;
        error?:
          | {
              __typename?: "FieldError";
              field: string;
              message: string;
              ufm: string;
            }
          | null
          | undefined;
      }
    | null
    | undefined;
};

export type ProductQueryVariables = Exact<{
  productIdOrName: Scalars["ID"];
}>;

export type ProductQuery = {
  __typename?: "Query";
  product?:
    | {
        __typename?: "ProductGraphql";
        id: string;
        name: string;
        description: string;
        price: number;
        category: string;
        imageUrl: string;
        tags: Array<{
          __typename?: "TagGraphql";
          id: string;
          productId: string;
          text: string;
        }>;
      }
    | null
    | undefined;
};

export type ProductsQueryVariables = Exact<{ [key: string]: never }>;

export type ProductsQuery = {
  __typename?: "Query";
  products: Array<{
    __typename?: "ProductGraphql";
    id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    imageUrl: string;
    tags: Array<{
      __typename?: "TagGraphql";
      id: string;
      productId: string;
      text: string;
    }>;
  }>;
};

export const ProductFragmentFragmentDoc = `
    fragment ProductFragment on ProductGraphql {
  id
  name
  description
  price
  category
  imageUrl
  tags {
    id
    productId
    text
  }
}
    `;
export const AdminLoginDocument = `
    mutation AdminLogin($input: AccountAdminLoginInput!) {
  adminLogin(input: $input)
}
    `;
export const useAdminLoginMutation = <TError = unknown, TContext = unknown>(
  client: GraphQLClient,
  options?: UseMutationOptions<
    AdminLoginMutation,
    TError,
    AdminLoginMutationVariables,
    TContext
  >,
  headers?: RequestInit["headers"]
) =>
  useMutation<
    AdminLoginMutation,
    TError,
    AdminLoginMutationVariables,
    TContext
  >(
    "AdminLogin",
    (variables?: AdminLoginMutationVariables) =>
      fetcher<AdminLoginMutation, AdminLoginMutationVariables>(
        client,
        AdminLoginDocument,
        variables,
        headers
      )(),
    options
  );
export const LoginDocument = `
    mutation Login($input: AccountLoginInput!) {
  login(input: $input) {
    account {
      id
      firstName
      lastName
      email
    }
    error {
      field
      message
      ufm
    }
  }
}
    `;
export const useLoginMutation = <TError = unknown, TContext = unknown>(
  client: GraphQLClient,
  options?: UseMutationOptions<
    LoginMutation,
    TError,
    LoginMutationVariables,
    TContext
  >,
  headers?: RequestInit["headers"]
) =>
  useMutation<LoginMutation, TError, LoginMutationVariables, TContext>(
    "Login",
    (variables?: LoginMutationVariables) =>
      fetcher<LoginMutation, LoginMutationVariables>(
        client,
        LoginDocument,
        variables,
        headers
      )(),
    options
  );
export const LogoutDocument = `
    mutation Logout {
  logout
}
    `;
export const useLogoutMutation = <TError = unknown, TContext = unknown>(
  client: GraphQLClient,
  options?: UseMutationOptions<
    LogoutMutation,
    TError,
    LogoutMutationVariables,
    TContext
  >,
  headers?: RequestInit["headers"]
) =>
  useMutation<LogoutMutation, TError, LogoutMutationVariables, TContext>(
    "Logout",
    (variables?: LogoutMutationVariables) =>
      fetcher<LogoutMutation, LogoutMutationVariables>(
        client,
        LogoutDocument,
        variables,
        headers
      )(),
    options
  );
export const RegisterDocument = `
    mutation Register($input: AccountRegisterInput!) {
  register(input: $input) {
    account {
      id
      firstName
      lastName
      email
      password
      role
    }
    error {
      field
      message
      ufm
    }
  }
}
    `;
export const useRegisterMutation = <TError = unknown, TContext = unknown>(
  client: GraphQLClient,
  options?: UseMutationOptions<
    RegisterMutation,
    TError,
    RegisterMutationVariables,
    TContext
  >,
  headers?: RequestInit["headers"]
) =>
  useMutation<RegisterMutation, TError, RegisterMutationVariables, TContext>(
    "Register",
    (variables?: RegisterMutationVariables) =>
      fetcher<RegisterMutation, RegisterMutationVariables>(
        client,
        RegisterDocument,
        variables,
        headers
      )(),
    options
  );
export const MeDocument = `
    query Me {
  me {
    account {
      id
      firstName
      lastName
      email
      createdAt
    }
    error {
      field
      message
      ufm
    }
  }
}
    `;
export const useMeQuery = <TData = MeQuery, TError = unknown>(
  client: GraphQLClient,
  variables?: MeQueryVariables,
  options?: UseQueryOptions<MeQuery, TError, TData>,
  headers?: RequestInit["headers"]
) =>
  useQuery<MeQuery, TError, TData>(
    variables === undefined ? ["Me"] : ["Me", variables],
    fetcher<MeQuery, MeQueryVariables>(client, MeDocument, variables, headers),
    options
  );
export const ProductDocument = `
    query Product($productIdOrName: ID!) {
  product(productIdOrName: $productIdOrName) {
    ...ProductFragment
  }
}
    ${ProductFragmentFragmentDoc}`;
export const useProductQuery = <TData = ProductQuery, TError = unknown>(
  client: GraphQLClient,
  variables: ProductQueryVariables,
  options?: UseQueryOptions<ProductQuery, TError, TData>,
  headers?: RequestInit["headers"]
) =>
  useQuery<ProductQuery, TError, TData>(
    ["Product", variables],
    fetcher<ProductQuery, ProductQueryVariables>(
      client,
      ProductDocument,
      variables,
      headers
    ),
    options
  );
export const ProductsDocument = `
    query Products {
  products {
    ...ProductFragment
  }
}
    ${ProductFragmentFragmentDoc}`;
export const useProductsQuery = <TData = ProductsQuery, TError = unknown>(
  client: GraphQLClient,
  variables?: ProductsQueryVariables,
  options?: UseQueryOptions<ProductsQuery, TError, TData>,
  headers?: RequestInit["headers"]
) =>
  useQuery<ProductsQuery, TError, TData>(
    variables === undefined ? ["Products"] : ["Products", variables],
    fetcher<ProductsQuery, ProductsQueryVariables>(
      client,
      ProductsDocument,
      variables,
      headers
    ),
    options
  );
