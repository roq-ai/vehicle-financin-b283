/**
 * Client
 **/

import * as runtime from './runtime/library';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model bank
 *
 */
export type bank = $Result.DefaultSelection<Prisma.$bankPayload>;
/**
 * Model business_owner
 *
 */
export type business_owner = $Result.DefaultSelection<Prisma.$business_ownerPayload>;
/**
 * Model financial_advisor
 *
 */
export type financial_advisor = $Result.DefaultSelection<Prisma.$financial_advisorPayload>;
/**
 * Model loan_officer
 *
 */
export type loan_officer = $Result.DefaultSelection<Prisma.$loan_officerPayload>;
/**
 * Model user
 *
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>;
/**
 * Model vehicle_loan
 *
 */
export type vehicle_loan = $Result.DefaultSelection<Prisma.$vehicle_loanPayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Banks
 * const banks = await prisma.bank.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T
    ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<T['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Banks
   * const banks = await prisma.bank.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(
    eventType: V,
    callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void,
  ): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
    options?: { maxWait?: number; timeout?: number; isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>;

  /**
   * `prisma.bank`: Exposes CRUD operations for the **bank** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Banks
   * const banks = await prisma.bank.findMany()
   * ```
   */
  get bank(): Prisma.bankDelegate<ExtArgs>;

  /**
   * `prisma.business_owner`: Exposes CRUD operations for the **business_owner** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Business_owners
   * const business_owners = await prisma.business_owner.findMany()
   * ```
   */
  get business_owner(): Prisma.business_ownerDelegate<ExtArgs>;

  /**
   * `prisma.financial_advisor`: Exposes CRUD operations for the **financial_advisor** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Financial_advisors
   * const financial_advisors = await prisma.financial_advisor.findMany()
   * ```
   */
  get financial_advisor(): Prisma.financial_advisorDelegate<ExtArgs>;

  /**
   * `prisma.loan_officer`: Exposes CRUD operations for the **loan_officer** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Loan_officers
   * const loan_officers = await prisma.loan_officer.findMany()
   * ```
   */
  get loan_officer(): Prisma.loan_officerDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.userDelegate<ExtArgs>;

  /**
   * `prisma.vehicle_loan`: Exposes CRUD operations for the **vehicle_loan** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Vehicle_loans
   * const vehicle_loans = await prisma.vehicle_loan.findMany()
   * ```
   */
  get vehicle_loan(): Prisma.vehicle_loanDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;
  export import NotFoundError = runtime.NotFoundError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 5.5.2
   * Query Engine version: aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from.
   */
  export type JsonObject = { [Key in string]?: JsonValue };

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null;

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = { readonly [Key in string]?: InputJsonValue | null };

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown };

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object ? (U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U) : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
    ? False
    : T extends Date
    ? False
    : T extends Uint8Array
    ? False
    : T extends BigInt
    ? False
    : T extends object
    ? True
    : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown
    ? _Either<O, K, strict>
    : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ? (K extends keyof O ? { [P in K]: O[P] } & O : O) | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0;

  export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;

  export const ModelName: {
    bank: 'bank';
    business_owner: 'business_owner';
    financial_advisor: 'financial_advisor';
    loan_officer: 'loan_officer';
    user: 'user';
    vehicle_loan: 'vehicle_loan';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb extends $Utils.Fn<{ extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>;
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'bank' | 'business_owner' | 'financial_advisor' | 'loan_officer' | 'user' | 'vehicle_loan';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      bank: {
        payload: Prisma.$bankPayload<ExtArgs>;
        fields: Prisma.bankFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.bankFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$bankPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.bankFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$bankPayload>;
          };
          findFirst: {
            args: Prisma.bankFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$bankPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.bankFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$bankPayload>;
          };
          findMany: {
            args: Prisma.bankFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$bankPayload>[];
          };
          create: {
            args: Prisma.bankCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$bankPayload>;
          };
          createMany: {
            args: Prisma.bankCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.bankDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$bankPayload>;
          };
          update: {
            args: Prisma.bankUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$bankPayload>;
          };
          deleteMany: {
            args: Prisma.bankDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.bankUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.bankUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$bankPayload>;
          };
          aggregate: {
            args: Prisma.BankAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateBank>;
          };
          groupBy: {
            args: Prisma.bankGroupByArgs<ExtArgs>;
            result: $Utils.Optional<BankGroupByOutputType>[];
          };
          count: {
            args: Prisma.bankCountArgs<ExtArgs>;
            result: $Utils.Optional<BankCountAggregateOutputType> | number;
          };
        };
      };
      business_owner: {
        payload: Prisma.$business_ownerPayload<ExtArgs>;
        fields: Prisma.business_ownerFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.business_ownerFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$business_ownerPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.business_ownerFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$business_ownerPayload>;
          };
          findFirst: {
            args: Prisma.business_ownerFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$business_ownerPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.business_ownerFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$business_ownerPayload>;
          };
          findMany: {
            args: Prisma.business_ownerFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$business_ownerPayload>[];
          };
          create: {
            args: Prisma.business_ownerCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$business_ownerPayload>;
          };
          createMany: {
            args: Prisma.business_ownerCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.business_ownerDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$business_ownerPayload>;
          };
          update: {
            args: Prisma.business_ownerUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$business_ownerPayload>;
          };
          deleteMany: {
            args: Prisma.business_ownerDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.business_ownerUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.business_ownerUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$business_ownerPayload>;
          };
          aggregate: {
            args: Prisma.Business_ownerAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateBusiness_owner>;
          };
          groupBy: {
            args: Prisma.business_ownerGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Business_ownerGroupByOutputType>[];
          };
          count: {
            args: Prisma.business_ownerCountArgs<ExtArgs>;
            result: $Utils.Optional<Business_ownerCountAggregateOutputType> | number;
          };
        };
      };
      financial_advisor: {
        payload: Prisma.$financial_advisorPayload<ExtArgs>;
        fields: Prisma.financial_advisorFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.financial_advisorFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$financial_advisorPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.financial_advisorFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$financial_advisorPayload>;
          };
          findFirst: {
            args: Prisma.financial_advisorFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$financial_advisorPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.financial_advisorFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$financial_advisorPayload>;
          };
          findMany: {
            args: Prisma.financial_advisorFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$financial_advisorPayload>[];
          };
          create: {
            args: Prisma.financial_advisorCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$financial_advisorPayload>;
          };
          createMany: {
            args: Prisma.financial_advisorCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.financial_advisorDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$financial_advisorPayload>;
          };
          update: {
            args: Prisma.financial_advisorUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$financial_advisorPayload>;
          };
          deleteMany: {
            args: Prisma.financial_advisorDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.financial_advisorUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.financial_advisorUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$financial_advisorPayload>;
          };
          aggregate: {
            args: Prisma.Financial_advisorAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateFinancial_advisor>;
          };
          groupBy: {
            args: Prisma.financial_advisorGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Financial_advisorGroupByOutputType>[];
          };
          count: {
            args: Prisma.financial_advisorCountArgs<ExtArgs>;
            result: $Utils.Optional<Financial_advisorCountAggregateOutputType> | number;
          };
        };
      };
      loan_officer: {
        payload: Prisma.$loan_officerPayload<ExtArgs>;
        fields: Prisma.loan_officerFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.loan_officerFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$loan_officerPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.loan_officerFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$loan_officerPayload>;
          };
          findFirst: {
            args: Prisma.loan_officerFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$loan_officerPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.loan_officerFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$loan_officerPayload>;
          };
          findMany: {
            args: Prisma.loan_officerFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$loan_officerPayload>[];
          };
          create: {
            args: Prisma.loan_officerCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$loan_officerPayload>;
          };
          createMany: {
            args: Prisma.loan_officerCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.loan_officerDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$loan_officerPayload>;
          };
          update: {
            args: Prisma.loan_officerUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$loan_officerPayload>;
          };
          deleteMany: {
            args: Prisma.loan_officerDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.loan_officerUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.loan_officerUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$loan_officerPayload>;
          };
          aggregate: {
            args: Prisma.Loan_officerAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateLoan_officer>;
          };
          groupBy: {
            args: Prisma.loan_officerGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Loan_officerGroupByOutputType>[];
          };
          count: {
            args: Prisma.loan_officerCountArgs<ExtArgs>;
            result: $Utils.Optional<Loan_officerCountAggregateOutputType> | number;
          };
        };
      };
      user: {
        payload: Prisma.$userPayload<ExtArgs>;
        fields: Prisma.userFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>[];
          };
          create: {
            args: Prisma.userCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.userCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
      vehicle_loan: {
        payload: Prisma.$vehicle_loanPayload<ExtArgs>;
        fields: Prisma.vehicle_loanFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.vehicle_loanFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$vehicle_loanPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.vehicle_loanFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$vehicle_loanPayload>;
          };
          findFirst: {
            args: Prisma.vehicle_loanFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$vehicle_loanPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.vehicle_loanFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$vehicle_loanPayload>;
          };
          findMany: {
            args: Prisma.vehicle_loanFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$vehicle_loanPayload>[];
          };
          create: {
            args: Prisma.vehicle_loanCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$vehicle_loanPayload>;
          };
          createMany: {
            args: Prisma.vehicle_loanCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.vehicle_loanDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$vehicle_loanPayload>;
          };
          update: {
            args: Prisma.vehicle_loanUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$vehicle_loanPayload>;
          };
          deleteMany: {
            args: Prisma.vehicle_loanDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.vehicle_loanUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.vehicle_loanUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$vehicle_loanPayload>;
          };
          aggregate: {
            args: Prisma.Vehicle_loanAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateVehicle_loan>;
          };
          groupBy: {
            args: Prisma.vehicle_loanGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Vehicle_loanGroupByOutputType>[];
          };
          count: {
            args: Prisma.vehicle_loanCountArgs<ExtArgs>;
            result: $Utils.Optional<Vehicle_loanCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition
    ? T['emit'] extends 'event'
      ? T['level']
      : never
    : never;
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type BankCountOutputType
   */

  export type BankCountOutputType = {
    loan_officer: number;
    vehicle_loan: number;
  };

  export type BankCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    loan_officer?: boolean | BankCountOutputTypeCountLoan_officerArgs;
    vehicle_loan?: boolean | BankCountOutputTypeCountVehicle_loanArgs;
  };

  // Custom InputTypes

  /**
   * BankCountOutputType without action
   */
  export type BankCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankCountOutputType
     */
    select?: BankCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * BankCountOutputType without action
   */
  export type BankCountOutputTypeCountLoan_officerArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: loan_officerWhereInput;
  };

  /**
   * BankCountOutputType without action
   */
  export type BankCountOutputTypeCountVehicle_loanArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: vehicle_loanWhereInput;
  };

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    bank: number;
    business_owner: number;
    financial_advisor: number;
    loan_officer: number;
    vehicle_loan: number;
  };

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bank?: boolean | UserCountOutputTypeCountBankArgs;
    business_owner?: boolean | UserCountOutputTypeCountBusiness_ownerArgs;
    financial_advisor?: boolean | UserCountOutputTypeCountFinancial_advisorArgs;
    loan_officer?: boolean | UserCountOutputTypeCountLoan_officerArgs;
    vehicle_loan?: boolean | UserCountOutputTypeCountVehicle_loanArgs;
  };

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBankArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bankWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBusiness_ownerArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: business_ownerWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFinancial_advisorArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: financial_advisorWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLoan_officerArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: loan_officerWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountVehicle_loanArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: vehicle_loanWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model bank
   */

  export type AggregateBank = {
    _count: BankCountAggregateOutputType | null;
    _min: BankMinAggregateOutputType | null;
    _max: BankMaxAggregateOutputType | null;
  };

  export type BankMinAggregateOutputType = {
    id: string | null;
    description: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    user_id: string | null;
    tenant_id: string | null;
  };

  export type BankMaxAggregateOutputType = {
    id: string | null;
    description: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    user_id: string | null;
    tenant_id: string | null;
  };

  export type BankCountAggregateOutputType = {
    id: number;
    description: number;
    name: number;
    created_at: number;
    updated_at: number;
    user_id: number;
    tenant_id: number;
    _all: number;
  };

  export type BankMinAggregateInputType = {
    id?: true;
    description?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
  };

  export type BankMaxAggregateInputType = {
    id?: true;
    description?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
  };

  export type BankCountAggregateInputType = {
    id?: true;
    description?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
    _all?: true;
  };

  export type BankAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which bank to aggregate.
     */
    where?: bankWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of banks to fetch.
     */
    orderBy?: bankOrderByWithRelationInput | bankOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: bankWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` banks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` banks.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned banks
     **/
    _count?: true | BankCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: BankMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: BankMaxAggregateInputType;
  };

  export type GetBankAggregateType<T extends BankAggregateArgs> = {
    [P in keyof T & keyof AggregateBank]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBank[P]>
      : GetScalarType<T[P], AggregateBank[P]>;
  };

  export type bankGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bankWhereInput;
    orderBy?: bankOrderByWithAggregationInput | bankOrderByWithAggregationInput[];
    by: BankScalarFieldEnum[] | BankScalarFieldEnum;
    having?: bankScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BankCountAggregateInputType | true;
    _min?: BankMinAggregateInputType;
    _max?: BankMaxAggregateInputType;
  };

  export type BankGroupByOutputType = {
    id: string;
    description: string | null;
    name: string;
    created_at: Date;
    updated_at: Date;
    user_id: string;
    tenant_id: string;
    _count: BankCountAggregateOutputType | null;
    _min: BankMinAggregateOutputType | null;
    _max: BankMaxAggregateOutputType | null;
  };

  type GetBankGroupByPayload<T extends bankGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BankGroupByOutputType, T['by']> & {
        [P in keyof T & keyof BankGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], BankGroupByOutputType[P]>
          : GetScalarType<T[P], BankGroupByOutputType[P]>;
      }
    >
  >;

  export type bankSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      description?: boolean;
      name?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      user_id?: boolean;
      tenant_id?: boolean;
      user?: boolean | userDefaultArgs<ExtArgs>;
      loan_officer?: boolean | bank$loan_officerArgs<ExtArgs>;
      vehicle_loan?: boolean | bank$vehicle_loanArgs<ExtArgs>;
      _count?: boolean | BankCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['bank']
  >;

  export type bankSelectScalar = {
    id?: boolean;
    description?: boolean;
    name?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    user_id?: boolean;
    tenant_id?: boolean;
  };

  export type bankInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>;
    loan_officer?: boolean | bank$loan_officerArgs<ExtArgs>;
    vehicle_loan?: boolean | bank$vehicle_loanArgs<ExtArgs>;
    _count?: boolean | BankCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $bankPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'bank';
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
      loan_officer: Prisma.$loan_officerPayload<ExtArgs>[];
      vehicle_loan: Prisma.$vehicle_loanPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        description: string | null;
        name: string;
        created_at: Date;
        updated_at: Date;
        user_id: string;
        tenant_id: string;
      },
      ExtArgs['result']['bank']
    >;
    composites: {};
  };

  type bankGetPayload<S extends boolean | null | undefined | bankDefaultArgs> = $Result.GetResult<
    Prisma.$bankPayload,
    S
  >;

  type bankCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    bankFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: BankCountAggregateInputType | true;
  };

  export interface bankDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['bank']; meta: { name: 'bank' } };
    /**
     * Find zero or one Bank that matches the filter.
     * @param {bankFindUniqueArgs} args - Arguments to find a Bank
     * @example
     * // Get one Bank
     * const bank = await prisma.bank.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends bankFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, bankFindUniqueArgs<ExtArgs>>,
    ): Prisma__bankClient<$Result.GetResult<Prisma.$bankPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Bank that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {bankFindUniqueOrThrowArgs} args - Arguments to find a Bank
     * @example
     * // Get one Bank
     * const bank = await prisma.bank.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends bankFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, bankFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__bankClient<$Result.GetResult<Prisma.$bankPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Bank that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bankFindFirstArgs} args - Arguments to find a Bank
     * @example
     * // Get one Bank
     * const bank = await prisma.bank.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends bankFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, bankFindFirstArgs<ExtArgs>>,
    ): Prisma__bankClient<$Result.GetResult<Prisma.$bankPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Bank that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bankFindFirstOrThrowArgs} args - Arguments to find a Bank
     * @example
     * // Get one Bank
     * const bank = await prisma.bank.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends bankFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, bankFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__bankClient<$Result.GetResult<Prisma.$bankPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Banks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bankFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Banks
     * const banks = await prisma.bank.findMany()
     *
     * // Get first 10 Banks
     * const banks = await prisma.bank.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const bankWithIdOnly = await prisma.bank.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends bankFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, bankFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bankPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Bank.
     * @param {bankCreateArgs} args - Arguments to create a Bank.
     * @example
     * // Create one Bank
     * const Bank = await prisma.bank.create({
     *   data: {
     *     // ... data to create a Bank
     *   }
     * })
     *
     **/
    create<T extends bankCreateArgs<ExtArgs>>(
      args: SelectSubset<T, bankCreateArgs<ExtArgs>>,
    ): Prisma__bankClient<$Result.GetResult<Prisma.$bankPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Banks.
     *     @param {bankCreateManyArgs} args - Arguments to create many Banks.
     *     @example
     *     // Create many Banks
     *     const bank = await prisma.bank.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends bankCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, bankCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Bank.
     * @param {bankDeleteArgs} args - Arguments to delete one Bank.
     * @example
     * // Delete one Bank
     * const Bank = await prisma.bank.delete({
     *   where: {
     *     // ... filter to delete one Bank
     *   }
     * })
     *
     **/
    delete<T extends bankDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, bankDeleteArgs<ExtArgs>>,
    ): Prisma__bankClient<$Result.GetResult<Prisma.$bankPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Bank.
     * @param {bankUpdateArgs} args - Arguments to update one Bank.
     * @example
     * // Update one Bank
     * const bank = await prisma.bank.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends bankUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, bankUpdateArgs<ExtArgs>>,
    ): Prisma__bankClient<$Result.GetResult<Prisma.$bankPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Banks.
     * @param {bankDeleteManyArgs} args - Arguments to filter Banks to delete.
     * @example
     * // Delete a few Banks
     * const { count } = await prisma.bank.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends bankDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, bankDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Banks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bankUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Banks
     * const bank = await prisma.bank.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends bankUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, bankUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Bank.
     * @param {bankUpsertArgs} args - Arguments to update or create a Bank.
     * @example
     * // Update or create a Bank
     * const bank = await prisma.bank.upsert({
     *   create: {
     *     // ... data to create a Bank
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bank we want to update
     *   }
     * })
     **/
    upsert<T extends bankUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, bankUpsertArgs<ExtArgs>>,
    ): Prisma__bankClient<$Result.GetResult<Prisma.$bankPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Banks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bankCountArgs} args - Arguments to filter Banks to count.
     * @example
     * // Count the number of Banks
     * const count = await prisma.bank.count({
     *   where: {
     *     // ... the filter for the Banks we want to count
     *   }
     * })
     **/
    count<T extends bankCountArgs>(
      args?: Subset<T, bankCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BankCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Bank.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends BankAggregateArgs>(
      args: Subset<T, BankAggregateArgs>,
    ): Prisma.PrismaPromise<GetBankAggregateType<T>>;

    /**
     * Group by Bank.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bankGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends bankGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: bankGroupByArgs['orderBy'] }
        : { orderBy?: bankGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, bankGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetBankGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the bank model
     */
    readonly fields: bankFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for bank.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__bankClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    loan_officer<T extends bank$loan_officerArgs<ExtArgs> = {}>(
      args?: Subset<T, bank$loan_officerArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$loan_officerPayload<ExtArgs>, T, 'findMany'> | Null>;

    vehicle_loan<T extends bank$vehicle_loanArgs<ExtArgs> = {}>(
      args?: Subset<T, bank$vehicle_loanArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vehicle_loanPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the bank model
   */
  interface bankFieldRefs {
    readonly id: FieldRef<'bank', 'String'>;
    readonly description: FieldRef<'bank', 'String'>;
    readonly name: FieldRef<'bank', 'String'>;
    readonly created_at: FieldRef<'bank', 'DateTime'>;
    readonly updated_at: FieldRef<'bank', 'DateTime'>;
    readonly user_id: FieldRef<'bank', 'String'>;
    readonly tenant_id: FieldRef<'bank', 'String'>;
  }

  // Custom InputTypes

  /**
   * bank findUnique
   */
  export type bankFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bank
     */
    select?: bankSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bankInclude<ExtArgs> | null;
    /**
     * Filter, which bank to fetch.
     */
    where: bankWhereUniqueInput;
  };

  /**
   * bank findUniqueOrThrow
   */
  export type bankFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bank
     */
    select?: bankSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bankInclude<ExtArgs> | null;
    /**
     * Filter, which bank to fetch.
     */
    where: bankWhereUniqueInput;
  };

  /**
   * bank findFirst
   */
  export type bankFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bank
     */
    select?: bankSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bankInclude<ExtArgs> | null;
    /**
     * Filter, which bank to fetch.
     */
    where?: bankWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of banks to fetch.
     */
    orderBy?: bankOrderByWithRelationInput | bankOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for banks.
     */
    cursor?: bankWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` banks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` banks.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of banks.
     */
    distinct?: BankScalarFieldEnum | BankScalarFieldEnum[];
  };

  /**
   * bank findFirstOrThrow
   */
  export type bankFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bank
     */
    select?: bankSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bankInclude<ExtArgs> | null;
    /**
     * Filter, which bank to fetch.
     */
    where?: bankWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of banks to fetch.
     */
    orderBy?: bankOrderByWithRelationInput | bankOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for banks.
     */
    cursor?: bankWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` banks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` banks.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of banks.
     */
    distinct?: BankScalarFieldEnum | BankScalarFieldEnum[];
  };

  /**
   * bank findMany
   */
  export type bankFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bank
     */
    select?: bankSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bankInclude<ExtArgs> | null;
    /**
     * Filter, which banks to fetch.
     */
    where?: bankWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of banks to fetch.
     */
    orderBy?: bankOrderByWithRelationInput | bankOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing banks.
     */
    cursor?: bankWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` banks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` banks.
     */
    skip?: number;
    distinct?: BankScalarFieldEnum | BankScalarFieldEnum[];
  };

  /**
   * bank create
   */
  export type bankCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bank
     */
    select?: bankSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bankInclude<ExtArgs> | null;
    /**
     * The data needed to create a bank.
     */
    data: XOR<bankCreateInput, bankUncheckedCreateInput>;
  };

  /**
   * bank createMany
   */
  export type bankCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many banks.
     */
    data: bankCreateManyInput | bankCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * bank update
   */
  export type bankUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bank
     */
    select?: bankSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bankInclude<ExtArgs> | null;
    /**
     * The data needed to update a bank.
     */
    data: XOR<bankUpdateInput, bankUncheckedUpdateInput>;
    /**
     * Choose, which bank to update.
     */
    where: bankWhereUniqueInput;
  };

  /**
   * bank updateMany
   */
  export type bankUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update banks.
     */
    data: XOR<bankUpdateManyMutationInput, bankUncheckedUpdateManyInput>;
    /**
     * Filter which banks to update
     */
    where?: bankWhereInput;
  };

  /**
   * bank upsert
   */
  export type bankUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bank
     */
    select?: bankSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bankInclude<ExtArgs> | null;
    /**
     * The filter to search for the bank to update in case it exists.
     */
    where: bankWhereUniqueInput;
    /**
     * In case the bank found by the `where` argument doesn't exist, create a new bank with this data.
     */
    create: XOR<bankCreateInput, bankUncheckedCreateInput>;
    /**
     * In case the bank was found with the provided `where` argument, update it with this data.
     */
    update: XOR<bankUpdateInput, bankUncheckedUpdateInput>;
  };

  /**
   * bank delete
   */
  export type bankDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bank
     */
    select?: bankSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bankInclude<ExtArgs> | null;
    /**
     * Filter which bank to delete.
     */
    where: bankWhereUniqueInput;
  };

  /**
   * bank deleteMany
   */
  export type bankDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which banks to delete
     */
    where?: bankWhereInput;
  };

  /**
   * bank.loan_officer
   */
  export type bank$loan_officerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan_officer
     */
    select?: loan_officerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: loan_officerInclude<ExtArgs> | null;
    where?: loan_officerWhereInput;
    orderBy?: loan_officerOrderByWithRelationInput | loan_officerOrderByWithRelationInput[];
    cursor?: loan_officerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Loan_officerScalarFieldEnum | Loan_officerScalarFieldEnum[];
  };

  /**
   * bank.vehicle_loan
   */
  export type bank$vehicle_loanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle_loan
     */
    select?: vehicle_loanSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: vehicle_loanInclude<ExtArgs> | null;
    where?: vehicle_loanWhereInput;
    orderBy?: vehicle_loanOrderByWithRelationInput | vehicle_loanOrderByWithRelationInput[];
    cursor?: vehicle_loanWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Vehicle_loanScalarFieldEnum | Vehicle_loanScalarFieldEnum[];
  };

  /**
   * bank without action
   */
  export type bankDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bank
     */
    select?: bankSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bankInclude<ExtArgs> | null;
  };

  /**
   * Model business_owner
   */

  export type AggregateBusiness_owner = {
    _count: Business_ownerCountAggregateOutputType | null;
    _min: Business_ownerMinAggregateOutputType | null;
    _max: Business_ownerMaxAggregateOutputType | null;
  };

  export type Business_ownerMinAggregateOutputType = {
    id: string | null;
    business_name: string | null;
    business_type: string | null;
    business_location: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Business_ownerMaxAggregateOutputType = {
    id: string | null;
    business_name: string | null;
    business_type: string | null;
    business_location: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Business_ownerCountAggregateOutputType = {
    id: number;
    business_name: number;
    business_type: number;
    business_location: number;
    user_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Business_ownerMinAggregateInputType = {
    id?: true;
    business_name?: true;
    business_type?: true;
    business_location?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Business_ownerMaxAggregateInputType = {
    id?: true;
    business_name?: true;
    business_type?: true;
    business_location?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Business_ownerCountAggregateInputType = {
    id?: true;
    business_name?: true;
    business_type?: true;
    business_location?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Business_ownerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which business_owner to aggregate.
     */
    where?: business_ownerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of business_owners to fetch.
     */
    orderBy?: business_ownerOrderByWithRelationInput | business_ownerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: business_ownerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` business_owners from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` business_owners.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned business_owners
     **/
    _count?: true | Business_ownerCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Business_ownerMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Business_ownerMaxAggregateInputType;
  };

  export type GetBusiness_ownerAggregateType<T extends Business_ownerAggregateArgs> = {
    [P in keyof T & keyof AggregateBusiness_owner]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBusiness_owner[P]>
      : GetScalarType<T[P], AggregateBusiness_owner[P]>;
  };

  export type business_ownerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: business_ownerWhereInput;
    orderBy?: business_ownerOrderByWithAggregationInput | business_ownerOrderByWithAggregationInput[];
    by: Business_ownerScalarFieldEnum[] | Business_ownerScalarFieldEnum;
    having?: business_ownerScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Business_ownerCountAggregateInputType | true;
    _min?: Business_ownerMinAggregateInputType;
    _max?: Business_ownerMaxAggregateInputType;
  };

  export type Business_ownerGroupByOutputType = {
    id: string;
    business_name: string;
    business_type: string;
    business_location: string;
    user_id: string;
    created_at: Date;
    updated_at: Date;
    _count: Business_ownerCountAggregateOutputType | null;
    _min: Business_ownerMinAggregateOutputType | null;
    _max: Business_ownerMaxAggregateOutputType | null;
  };

  type GetBusiness_ownerGroupByPayload<T extends business_ownerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Business_ownerGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Business_ownerGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Business_ownerGroupByOutputType[P]>
          : GetScalarType<T[P], Business_ownerGroupByOutputType[P]>;
      }
    >
  >;

  export type business_ownerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        business_name?: boolean;
        business_type?: boolean;
        business_location?: boolean;
        user_id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        user?: boolean | userDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['business_owner']
    >;

  export type business_ownerSelectScalar = {
    id?: boolean;
    business_name?: boolean;
    business_type?: boolean;
    business_location?: boolean;
    user_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type business_ownerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $business_ownerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'business_owner';
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        business_name: string;
        business_type: string;
        business_location: string;
        user_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['business_owner']
    >;
    composites: {};
  };

  type business_ownerGetPayload<S extends boolean | null | undefined | business_ownerDefaultArgs> = $Result.GetResult<
    Prisma.$business_ownerPayload,
    S
  >;

  type business_ownerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    business_ownerFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: Business_ownerCountAggregateInputType | true;
  };

  export interface business_ownerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['business_owner']; meta: { name: 'business_owner' } };
    /**
     * Find zero or one Business_owner that matches the filter.
     * @param {business_ownerFindUniqueArgs} args - Arguments to find a Business_owner
     * @example
     * // Get one Business_owner
     * const business_owner = await prisma.business_owner.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends business_ownerFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, business_ownerFindUniqueArgs<ExtArgs>>,
    ): Prisma__business_ownerClient<
      $Result.GetResult<Prisma.$business_ownerPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Business_owner that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {business_ownerFindUniqueOrThrowArgs} args - Arguments to find a Business_owner
     * @example
     * // Get one Business_owner
     * const business_owner = await prisma.business_owner.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends business_ownerFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, business_ownerFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__business_ownerClient<
      $Result.GetResult<Prisma.$business_ownerPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Business_owner that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {business_ownerFindFirstArgs} args - Arguments to find a Business_owner
     * @example
     * // Get one Business_owner
     * const business_owner = await prisma.business_owner.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends business_ownerFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, business_ownerFindFirstArgs<ExtArgs>>,
    ): Prisma__business_ownerClient<
      $Result.GetResult<Prisma.$business_ownerPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Business_owner that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {business_ownerFindFirstOrThrowArgs} args - Arguments to find a Business_owner
     * @example
     * // Get one Business_owner
     * const business_owner = await prisma.business_owner.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends business_ownerFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, business_ownerFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__business_ownerClient<
      $Result.GetResult<Prisma.$business_ownerPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Business_owners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {business_ownerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Business_owners
     * const business_owners = await prisma.business_owner.findMany()
     *
     * // Get first 10 Business_owners
     * const business_owners = await prisma.business_owner.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const business_ownerWithIdOnly = await prisma.business_owner.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends business_ownerFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, business_ownerFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$business_ownerPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Business_owner.
     * @param {business_ownerCreateArgs} args - Arguments to create a Business_owner.
     * @example
     * // Create one Business_owner
     * const Business_owner = await prisma.business_owner.create({
     *   data: {
     *     // ... data to create a Business_owner
     *   }
     * })
     *
     **/
    create<T extends business_ownerCreateArgs<ExtArgs>>(
      args: SelectSubset<T, business_ownerCreateArgs<ExtArgs>>,
    ): Prisma__business_ownerClient<
      $Result.GetResult<Prisma.$business_ownerPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Business_owners.
     *     @param {business_ownerCreateManyArgs} args - Arguments to create many Business_owners.
     *     @example
     *     // Create many Business_owners
     *     const business_owner = await prisma.business_owner.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends business_ownerCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, business_ownerCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Business_owner.
     * @param {business_ownerDeleteArgs} args - Arguments to delete one Business_owner.
     * @example
     * // Delete one Business_owner
     * const Business_owner = await prisma.business_owner.delete({
     *   where: {
     *     // ... filter to delete one Business_owner
     *   }
     * })
     *
     **/
    delete<T extends business_ownerDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, business_ownerDeleteArgs<ExtArgs>>,
    ): Prisma__business_ownerClient<
      $Result.GetResult<Prisma.$business_ownerPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one Business_owner.
     * @param {business_ownerUpdateArgs} args - Arguments to update one Business_owner.
     * @example
     * // Update one Business_owner
     * const business_owner = await prisma.business_owner.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends business_ownerUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, business_ownerUpdateArgs<ExtArgs>>,
    ): Prisma__business_ownerClient<
      $Result.GetResult<Prisma.$business_ownerPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Business_owners.
     * @param {business_ownerDeleteManyArgs} args - Arguments to filter Business_owners to delete.
     * @example
     * // Delete a few Business_owners
     * const { count } = await prisma.business_owner.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends business_ownerDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, business_ownerDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Business_owners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {business_ownerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Business_owners
     * const business_owner = await prisma.business_owner.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends business_ownerUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, business_ownerUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Business_owner.
     * @param {business_ownerUpsertArgs} args - Arguments to update or create a Business_owner.
     * @example
     * // Update or create a Business_owner
     * const business_owner = await prisma.business_owner.upsert({
     *   create: {
     *     // ... data to create a Business_owner
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Business_owner we want to update
     *   }
     * })
     **/
    upsert<T extends business_ownerUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, business_ownerUpsertArgs<ExtArgs>>,
    ): Prisma__business_ownerClient<
      $Result.GetResult<Prisma.$business_ownerPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Business_owners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {business_ownerCountArgs} args - Arguments to filter Business_owners to count.
     * @example
     * // Count the number of Business_owners
     * const count = await prisma.business_owner.count({
     *   where: {
     *     // ... the filter for the Business_owners we want to count
     *   }
     * })
     **/
    count<T extends business_ownerCountArgs>(
      args?: Subset<T, business_ownerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Business_ownerCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Business_owner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Business_ownerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends Business_ownerAggregateArgs>(
      args: Subset<T, Business_ownerAggregateArgs>,
    ): Prisma.PrismaPromise<GetBusiness_ownerAggregateType<T>>;

    /**
     * Group by Business_owner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {business_ownerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends business_ownerGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: business_ownerGroupByArgs['orderBy'] }
        : { orderBy?: business_ownerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, business_ownerGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetBusiness_ownerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the business_owner model
     */
    readonly fields: business_ownerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for business_owner.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__business_ownerClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the business_owner model
   */
  interface business_ownerFieldRefs {
    readonly id: FieldRef<'business_owner', 'String'>;
    readonly business_name: FieldRef<'business_owner', 'String'>;
    readonly business_type: FieldRef<'business_owner', 'String'>;
    readonly business_location: FieldRef<'business_owner', 'String'>;
    readonly user_id: FieldRef<'business_owner', 'String'>;
    readonly created_at: FieldRef<'business_owner', 'DateTime'>;
    readonly updated_at: FieldRef<'business_owner', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * business_owner findUnique
   */
  export type business_ownerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the business_owner
     */
    select?: business_ownerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: business_ownerInclude<ExtArgs> | null;
    /**
     * Filter, which business_owner to fetch.
     */
    where: business_ownerWhereUniqueInput;
  };

  /**
   * business_owner findUniqueOrThrow
   */
  export type business_ownerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the business_owner
       */
      select?: business_ownerSelect<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well.
       */
      include?: business_ownerInclude<ExtArgs> | null;
      /**
       * Filter, which business_owner to fetch.
       */
      where: business_ownerWhereUniqueInput;
    };

  /**
   * business_owner findFirst
   */
  export type business_ownerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the business_owner
     */
    select?: business_ownerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: business_ownerInclude<ExtArgs> | null;
    /**
     * Filter, which business_owner to fetch.
     */
    where?: business_ownerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of business_owners to fetch.
     */
    orderBy?: business_ownerOrderByWithRelationInput | business_ownerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for business_owners.
     */
    cursor?: business_ownerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` business_owners from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` business_owners.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of business_owners.
     */
    distinct?: Business_ownerScalarFieldEnum | Business_ownerScalarFieldEnum[];
  };

  /**
   * business_owner findFirstOrThrow
   */
  export type business_ownerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the business_owner
     */
    select?: business_ownerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: business_ownerInclude<ExtArgs> | null;
    /**
     * Filter, which business_owner to fetch.
     */
    where?: business_ownerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of business_owners to fetch.
     */
    orderBy?: business_ownerOrderByWithRelationInput | business_ownerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for business_owners.
     */
    cursor?: business_ownerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` business_owners from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` business_owners.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of business_owners.
     */
    distinct?: Business_ownerScalarFieldEnum | Business_ownerScalarFieldEnum[];
  };

  /**
   * business_owner findMany
   */
  export type business_ownerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the business_owner
     */
    select?: business_ownerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: business_ownerInclude<ExtArgs> | null;
    /**
     * Filter, which business_owners to fetch.
     */
    where?: business_ownerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of business_owners to fetch.
     */
    orderBy?: business_ownerOrderByWithRelationInput | business_ownerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing business_owners.
     */
    cursor?: business_ownerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` business_owners from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` business_owners.
     */
    skip?: number;
    distinct?: Business_ownerScalarFieldEnum | Business_ownerScalarFieldEnum[];
  };

  /**
   * business_owner create
   */
  export type business_ownerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the business_owner
     */
    select?: business_ownerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: business_ownerInclude<ExtArgs> | null;
    /**
     * The data needed to create a business_owner.
     */
    data: XOR<business_ownerCreateInput, business_ownerUncheckedCreateInput>;
  };

  /**
   * business_owner createMany
   */
  export type business_ownerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many business_owners.
     */
    data: business_ownerCreateManyInput | business_ownerCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * business_owner update
   */
  export type business_ownerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the business_owner
     */
    select?: business_ownerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: business_ownerInclude<ExtArgs> | null;
    /**
     * The data needed to update a business_owner.
     */
    data: XOR<business_ownerUpdateInput, business_ownerUncheckedUpdateInput>;
    /**
     * Choose, which business_owner to update.
     */
    where: business_ownerWhereUniqueInput;
  };

  /**
   * business_owner updateMany
   */
  export type business_ownerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update business_owners.
     */
    data: XOR<business_ownerUpdateManyMutationInput, business_ownerUncheckedUpdateManyInput>;
    /**
     * Filter which business_owners to update
     */
    where?: business_ownerWhereInput;
  };

  /**
   * business_owner upsert
   */
  export type business_ownerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the business_owner
     */
    select?: business_ownerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: business_ownerInclude<ExtArgs> | null;
    /**
     * The filter to search for the business_owner to update in case it exists.
     */
    where: business_ownerWhereUniqueInput;
    /**
     * In case the business_owner found by the `where` argument doesn't exist, create a new business_owner with this data.
     */
    create: XOR<business_ownerCreateInput, business_ownerUncheckedCreateInput>;
    /**
     * In case the business_owner was found with the provided `where` argument, update it with this data.
     */
    update: XOR<business_ownerUpdateInput, business_ownerUncheckedUpdateInput>;
  };

  /**
   * business_owner delete
   */
  export type business_ownerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the business_owner
     */
    select?: business_ownerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: business_ownerInclude<ExtArgs> | null;
    /**
     * Filter which business_owner to delete.
     */
    where: business_ownerWhereUniqueInput;
  };

  /**
   * business_owner deleteMany
   */
  export type business_ownerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which business_owners to delete
     */
    where?: business_ownerWhereInput;
  };

  /**
   * business_owner without action
   */
  export type business_ownerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the business_owner
     */
    select?: business_ownerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: business_ownerInclude<ExtArgs> | null;
  };

  /**
   * Model financial_advisor
   */

  export type AggregateFinancial_advisor = {
    _count: Financial_advisorCountAggregateOutputType | null;
    _avg: Financial_advisorAvgAggregateOutputType | null;
    _sum: Financial_advisorSumAggregateOutputType | null;
    _min: Financial_advisorMinAggregateOutputType | null;
    _max: Financial_advisorMaxAggregateOutputType | null;
  };

  export type Financial_advisorAvgAggregateOutputType = {
    experience: number | null;
  };

  export type Financial_advisorSumAggregateOutputType = {
    experience: number | null;
  };

  export type Financial_advisorMinAggregateOutputType = {
    id: string | null;
    advisor_name: string | null;
    experience: number | null;
    qualification: string | null;
    specialization: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Financial_advisorMaxAggregateOutputType = {
    id: string | null;
    advisor_name: string | null;
    experience: number | null;
    qualification: string | null;
    specialization: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Financial_advisorCountAggregateOutputType = {
    id: number;
    advisor_name: number;
    experience: number;
    qualification: number;
    specialization: number;
    user_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Financial_advisorAvgAggregateInputType = {
    experience?: true;
  };

  export type Financial_advisorSumAggregateInputType = {
    experience?: true;
  };

  export type Financial_advisorMinAggregateInputType = {
    id?: true;
    advisor_name?: true;
    experience?: true;
    qualification?: true;
    specialization?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Financial_advisorMaxAggregateInputType = {
    id?: true;
    advisor_name?: true;
    experience?: true;
    qualification?: true;
    specialization?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Financial_advisorCountAggregateInputType = {
    id?: true;
    advisor_name?: true;
    experience?: true;
    qualification?: true;
    specialization?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Financial_advisorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which financial_advisor to aggregate.
     */
    where?: financial_advisorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of financial_advisors to fetch.
     */
    orderBy?: financial_advisorOrderByWithRelationInput | financial_advisorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: financial_advisorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` financial_advisors from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` financial_advisors.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned financial_advisors
     **/
    _count?: true | Financial_advisorCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: Financial_advisorAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: Financial_advisorSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Financial_advisorMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Financial_advisorMaxAggregateInputType;
  };

  export type GetFinancial_advisorAggregateType<T extends Financial_advisorAggregateArgs> = {
    [P in keyof T & keyof AggregateFinancial_advisor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFinancial_advisor[P]>
      : GetScalarType<T[P], AggregateFinancial_advisor[P]>;
  };

  export type financial_advisorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: financial_advisorWhereInput;
    orderBy?: financial_advisorOrderByWithAggregationInput | financial_advisorOrderByWithAggregationInput[];
    by: Financial_advisorScalarFieldEnum[] | Financial_advisorScalarFieldEnum;
    having?: financial_advisorScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Financial_advisorCountAggregateInputType | true;
    _avg?: Financial_advisorAvgAggregateInputType;
    _sum?: Financial_advisorSumAggregateInputType;
    _min?: Financial_advisorMinAggregateInputType;
    _max?: Financial_advisorMaxAggregateInputType;
  };

  export type Financial_advisorGroupByOutputType = {
    id: string;
    advisor_name: string;
    experience: number;
    qualification: string;
    specialization: string;
    user_id: string;
    created_at: Date;
    updated_at: Date;
    _count: Financial_advisorCountAggregateOutputType | null;
    _avg: Financial_advisorAvgAggregateOutputType | null;
    _sum: Financial_advisorSumAggregateOutputType | null;
    _min: Financial_advisorMinAggregateOutputType | null;
    _max: Financial_advisorMaxAggregateOutputType | null;
  };

  type GetFinancial_advisorGroupByPayload<T extends financial_advisorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Financial_advisorGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Financial_advisorGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Financial_advisorGroupByOutputType[P]>
          : GetScalarType<T[P], Financial_advisorGroupByOutputType[P]>;
      }
    >
  >;

  export type financial_advisorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        advisor_name?: boolean;
        experience?: boolean;
        qualification?: boolean;
        specialization?: boolean;
        user_id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        user?: boolean | userDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['financial_advisor']
    >;

  export type financial_advisorSelectScalar = {
    id?: boolean;
    advisor_name?: boolean;
    experience?: boolean;
    qualification?: boolean;
    specialization?: boolean;
    user_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type financial_advisorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $financial_advisorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'financial_advisor';
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        advisor_name: string;
        experience: number;
        qualification: string;
        specialization: string;
        user_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['financial_advisor']
    >;
    composites: {};
  };

  type financial_advisorGetPayload<S extends boolean | null | undefined | financial_advisorDefaultArgs> =
    $Result.GetResult<Prisma.$financial_advisorPayload, S>;

  type financial_advisorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    financial_advisorFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: Financial_advisorCountAggregateInputType | true;
  };

  export interface financial_advisorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['financial_advisor']; meta: { name: 'financial_advisor' } };
    /**
     * Find zero or one Financial_advisor that matches the filter.
     * @param {financial_advisorFindUniqueArgs} args - Arguments to find a Financial_advisor
     * @example
     * // Get one Financial_advisor
     * const financial_advisor = await prisma.financial_advisor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends financial_advisorFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, financial_advisorFindUniqueArgs<ExtArgs>>,
    ): Prisma__financial_advisorClient<
      $Result.GetResult<Prisma.$financial_advisorPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Financial_advisor that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {financial_advisorFindUniqueOrThrowArgs} args - Arguments to find a Financial_advisor
     * @example
     * // Get one Financial_advisor
     * const financial_advisor = await prisma.financial_advisor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends financial_advisorFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, financial_advisorFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__financial_advisorClient<
      $Result.GetResult<Prisma.$financial_advisorPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Financial_advisor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {financial_advisorFindFirstArgs} args - Arguments to find a Financial_advisor
     * @example
     * // Get one Financial_advisor
     * const financial_advisor = await prisma.financial_advisor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends financial_advisorFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, financial_advisorFindFirstArgs<ExtArgs>>,
    ): Prisma__financial_advisorClient<
      $Result.GetResult<Prisma.$financial_advisorPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Financial_advisor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {financial_advisorFindFirstOrThrowArgs} args - Arguments to find a Financial_advisor
     * @example
     * // Get one Financial_advisor
     * const financial_advisor = await prisma.financial_advisor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends financial_advisorFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, financial_advisorFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__financial_advisorClient<
      $Result.GetResult<Prisma.$financial_advisorPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Financial_advisors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {financial_advisorFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Financial_advisors
     * const financial_advisors = await prisma.financial_advisor.findMany()
     *
     * // Get first 10 Financial_advisors
     * const financial_advisors = await prisma.financial_advisor.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const financial_advisorWithIdOnly = await prisma.financial_advisor.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends financial_advisorFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, financial_advisorFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$financial_advisorPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Financial_advisor.
     * @param {financial_advisorCreateArgs} args - Arguments to create a Financial_advisor.
     * @example
     * // Create one Financial_advisor
     * const Financial_advisor = await prisma.financial_advisor.create({
     *   data: {
     *     // ... data to create a Financial_advisor
     *   }
     * })
     *
     **/
    create<T extends financial_advisorCreateArgs<ExtArgs>>(
      args: SelectSubset<T, financial_advisorCreateArgs<ExtArgs>>,
    ): Prisma__financial_advisorClient<
      $Result.GetResult<Prisma.$financial_advisorPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Financial_advisors.
     *     @param {financial_advisorCreateManyArgs} args - Arguments to create many Financial_advisors.
     *     @example
     *     // Create many Financial_advisors
     *     const financial_advisor = await prisma.financial_advisor.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends financial_advisorCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, financial_advisorCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Financial_advisor.
     * @param {financial_advisorDeleteArgs} args - Arguments to delete one Financial_advisor.
     * @example
     * // Delete one Financial_advisor
     * const Financial_advisor = await prisma.financial_advisor.delete({
     *   where: {
     *     // ... filter to delete one Financial_advisor
     *   }
     * })
     *
     **/
    delete<T extends financial_advisorDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, financial_advisorDeleteArgs<ExtArgs>>,
    ): Prisma__financial_advisorClient<
      $Result.GetResult<Prisma.$financial_advisorPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one Financial_advisor.
     * @param {financial_advisorUpdateArgs} args - Arguments to update one Financial_advisor.
     * @example
     * // Update one Financial_advisor
     * const financial_advisor = await prisma.financial_advisor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends financial_advisorUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, financial_advisorUpdateArgs<ExtArgs>>,
    ): Prisma__financial_advisorClient<
      $Result.GetResult<Prisma.$financial_advisorPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Financial_advisors.
     * @param {financial_advisorDeleteManyArgs} args - Arguments to filter Financial_advisors to delete.
     * @example
     * // Delete a few Financial_advisors
     * const { count } = await prisma.financial_advisor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends financial_advisorDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, financial_advisorDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Financial_advisors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {financial_advisorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Financial_advisors
     * const financial_advisor = await prisma.financial_advisor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends financial_advisorUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, financial_advisorUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Financial_advisor.
     * @param {financial_advisorUpsertArgs} args - Arguments to update or create a Financial_advisor.
     * @example
     * // Update or create a Financial_advisor
     * const financial_advisor = await prisma.financial_advisor.upsert({
     *   create: {
     *     // ... data to create a Financial_advisor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Financial_advisor we want to update
     *   }
     * })
     **/
    upsert<T extends financial_advisorUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, financial_advisorUpsertArgs<ExtArgs>>,
    ): Prisma__financial_advisorClient<
      $Result.GetResult<Prisma.$financial_advisorPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Financial_advisors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {financial_advisorCountArgs} args - Arguments to filter Financial_advisors to count.
     * @example
     * // Count the number of Financial_advisors
     * const count = await prisma.financial_advisor.count({
     *   where: {
     *     // ... the filter for the Financial_advisors we want to count
     *   }
     * })
     **/
    count<T extends financial_advisorCountArgs>(
      args?: Subset<T, financial_advisorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Financial_advisorCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Financial_advisor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Financial_advisorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends Financial_advisorAggregateArgs>(
      args: Subset<T, Financial_advisorAggregateArgs>,
    ): Prisma.PrismaPromise<GetFinancial_advisorAggregateType<T>>;

    /**
     * Group by Financial_advisor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {financial_advisorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends financial_advisorGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: financial_advisorGroupByArgs['orderBy'] }
        : { orderBy?: financial_advisorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, financial_advisorGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetFinancial_advisorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the financial_advisor model
     */
    readonly fields: financial_advisorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for financial_advisor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__financial_advisorClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the financial_advisor model
   */
  interface financial_advisorFieldRefs {
    readonly id: FieldRef<'financial_advisor', 'String'>;
    readonly advisor_name: FieldRef<'financial_advisor', 'String'>;
    readonly experience: FieldRef<'financial_advisor', 'Int'>;
    readonly qualification: FieldRef<'financial_advisor', 'String'>;
    readonly specialization: FieldRef<'financial_advisor', 'String'>;
    readonly user_id: FieldRef<'financial_advisor', 'String'>;
    readonly created_at: FieldRef<'financial_advisor', 'DateTime'>;
    readonly updated_at: FieldRef<'financial_advisor', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * financial_advisor findUnique
   */
  export type financial_advisorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the financial_advisor
     */
    select?: financial_advisorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: financial_advisorInclude<ExtArgs> | null;
    /**
     * Filter, which financial_advisor to fetch.
     */
    where: financial_advisorWhereUniqueInput;
  };

  /**
   * financial_advisor findUniqueOrThrow
   */
  export type financial_advisorFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the financial_advisor
     */
    select?: financial_advisorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: financial_advisorInclude<ExtArgs> | null;
    /**
     * Filter, which financial_advisor to fetch.
     */
    where: financial_advisorWhereUniqueInput;
  };

  /**
   * financial_advisor findFirst
   */
  export type financial_advisorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the financial_advisor
     */
    select?: financial_advisorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: financial_advisorInclude<ExtArgs> | null;
    /**
     * Filter, which financial_advisor to fetch.
     */
    where?: financial_advisorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of financial_advisors to fetch.
     */
    orderBy?: financial_advisorOrderByWithRelationInput | financial_advisorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for financial_advisors.
     */
    cursor?: financial_advisorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` financial_advisors from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` financial_advisors.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of financial_advisors.
     */
    distinct?: Financial_advisorScalarFieldEnum | Financial_advisorScalarFieldEnum[];
  };

  /**
   * financial_advisor findFirstOrThrow
   */
  export type financial_advisorFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the financial_advisor
     */
    select?: financial_advisorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: financial_advisorInclude<ExtArgs> | null;
    /**
     * Filter, which financial_advisor to fetch.
     */
    where?: financial_advisorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of financial_advisors to fetch.
     */
    orderBy?: financial_advisorOrderByWithRelationInput | financial_advisorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for financial_advisors.
     */
    cursor?: financial_advisorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` financial_advisors from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` financial_advisors.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of financial_advisors.
     */
    distinct?: Financial_advisorScalarFieldEnum | Financial_advisorScalarFieldEnum[];
  };

  /**
   * financial_advisor findMany
   */
  export type financial_advisorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the financial_advisor
     */
    select?: financial_advisorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: financial_advisorInclude<ExtArgs> | null;
    /**
     * Filter, which financial_advisors to fetch.
     */
    where?: financial_advisorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of financial_advisors to fetch.
     */
    orderBy?: financial_advisorOrderByWithRelationInput | financial_advisorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing financial_advisors.
     */
    cursor?: financial_advisorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` financial_advisors from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` financial_advisors.
     */
    skip?: number;
    distinct?: Financial_advisorScalarFieldEnum | Financial_advisorScalarFieldEnum[];
  };

  /**
   * financial_advisor create
   */
  export type financial_advisorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the financial_advisor
     */
    select?: financial_advisorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: financial_advisorInclude<ExtArgs> | null;
    /**
     * The data needed to create a financial_advisor.
     */
    data: XOR<financial_advisorCreateInput, financial_advisorUncheckedCreateInput>;
  };

  /**
   * financial_advisor createMany
   */
  export type financial_advisorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many financial_advisors.
     */
    data: financial_advisorCreateManyInput | financial_advisorCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * financial_advisor update
   */
  export type financial_advisorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the financial_advisor
     */
    select?: financial_advisorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: financial_advisorInclude<ExtArgs> | null;
    /**
     * The data needed to update a financial_advisor.
     */
    data: XOR<financial_advisorUpdateInput, financial_advisorUncheckedUpdateInput>;
    /**
     * Choose, which financial_advisor to update.
     */
    where: financial_advisorWhereUniqueInput;
  };

  /**
   * financial_advisor updateMany
   */
  export type financial_advisorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update financial_advisors.
     */
    data: XOR<financial_advisorUpdateManyMutationInput, financial_advisorUncheckedUpdateManyInput>;
    /**
     * Filter which financial_advisors to update
     */
    where?: financial_advisorWhereInput;
  };

  /**
   * financial_advisor upsert
   */
  export type financial_advisorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the financial_advisor
     */
    select?: financial_advisorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: financial_advisorInclude<ExtArgs> | null;
    /**
     * The filter to search for the financial_advisor to update in case it exists.
     */
    where: financial_advisorWhereUniqueInput;
    /**
     * In case the financial_advisor found by the `where` argument doesn't exist, create a new financial_advisor with this data.
     */
    create: XOR<financial_advisorCreateInput, financial_advisorUncheckedCreateInput>;
    /**
     * In case the financial_advisor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<financial_advisorUpdateInput, financial_advisorUncheckedUpdateInput>;
  };

  /**
   * financial_advisor delete
   */
  export type financial_advisorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the financial_advisor
     */
    select?: financial_advisorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: financial_advisorInclude<ExtArgs> | null;
    /**
     * Filter which financial_advisor to delete.
     */
    where: financial_advisorWhereUniqueInput;
  };

  /**
   * financial_advisor deleteMany
   */
  export type financial_advisorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which financial_advisors to delete
     */
    where?: financial_advisorWhereInput;
  };

  /**
   * financial_advisor without action
   */
  export type financial_advisorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the financial_advisor
     */
    select?: financial_advisorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: financial_advisorInclude<ExtArgs> | null;
  };

  /**
   * Model loan_officer
   */

  export type AggregateLoan_officer = {
    _count: Loan_officerCountAggregateOutputType | null;
    _avg: Loan_officerAvgAggregateOutputType | null;
    _sum: Loan_officerSumAggregateOutputType | null;
    _min: Loan_officerMinAggregateOutputType | null;
    _max: Loan_officerMaxAggregateOutputType | null;
  };

  export type Loan_officerAvgAggregateOutputType = {
    experience: number | null;
  };

  export type Loan_officerSumAggregateOutputType = {
    experience: number | null;
  };

  export type Loan_officerMinAggregateOutputType = {
    id: string | null;
    officer_name: string | null;
    experience: number | null;
    qualification: string | null;
    bank_id: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Loan_officerMaxAggregateOutputType = {
    id: string | null;
    officer_name: string | null;
    experience: number | null;
    qualification: string | null;
    bank_id: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Loan_officerCountAggregateOutputType = {
    id: number;
    officer_name: number;
    experience: number;
    qualification: number;
    bank_id: number;
    user_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Loan_officerAvgAggregateInputType = {
    experience?: true;
  };

  export type Loan_officerSumAggregateInputType = {
    experience?: true;
  };

  export type Loan_officerMinAggregateInputType = {
    id?: true;
    officer_name?: true;
    experience?: true;
    qualification?: true;
    bank_id?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Loan_officerMaxAggregateInputType = {
    id?: true;
    officer_name?: true;
    experience?: true;
    qualification?: true;
    bank_id?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Loan_officerCountAggregateInputType = {
    id?: true;
    officer_name?: true;
    experience?: true;
    qualification?: true;
    bank_id?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Loan_officerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which loan_officer to aggregate.
     */
    where?: loan_officerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of loan_officers to fetch.
     */
    orderBy?: loan_officerOrderByWithRelationInput | loan_officerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: loan_officerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` loan_officers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` loan_officers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned loan_officers
     **/
    _count?: true | Loan_officerCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: Loan_officerAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: Loan_officerSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Loan_officerMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Loan_officerMaxAggregateInputType;
  };

  export type GetLoan_officerAggregateType<T extends Loan_officerAggregateArgs> = {
    [P in keyof T & keyof AggregateLoan_officer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLoan_officer[P]>
      : GetScalarType<T[P], AggregateLoan_officer[P]>;
  };

  export type loan_officerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: loan_officerWhereInput;
    orderBy?: loan_officerOrderByWithAggregationInput | loan_officerOrderByWithAggregationInput[];
    by: Loan_officerScalarFieldEnum[] | Loan_officerScalarFieldEnum;
    having?: loan_officerScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Loan_officerCountAggregateInputType | true;
    _avg?: Loan_officerAvgAggregateInputType;
    _sum?: Loan_officerSumAggregateInputType;
    _min?: Loan_officerMinAggregateInputType;
    _max?: Loan_officerMaxAggregateInputType;
  };

  export type Loan_officerGroupByOutputType = {
    id: string;
    officer_name: string;
    experience: number;
    qualification: string;
    bank_id: string;
    user_id: string;
    created_at: Date;
    updated_at: Date;
    _count: Loan_officerCountAggregateOutputType | null;
    _avg: Loan_officerAvgAggregateOutputType | null;
    _sum: Loan_officerSumAggregateOutputType | null;
    _min: Loan_officerMinAggregateOutputType | null;
    _max: Loan_officerMaxAggregateOutputType | null;
  };

  type GetLoan_officerGroupByPayload<T extends loan_officerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Loan_officerGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Loan_officerGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Loan_officerGroupByOutputType[P]>
          : GetScalarType<T[P], Loan_officerGroupByOutputType[P]>;
      }
    >
  >;

  export type loan_officerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        officer_name?: boolean;
        experience?: boolean;
        qualification?: boolean;
        bank_id?: boolean;
        user_id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        bank?: boolean | bankDefaultArgs<ExtArgs>;
        user?: boolean | userDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['loan_officer']
    >;

  export type loan_officerSelectScalar = {
    id?: boolean;
    officer_name?: boolean;
    experience?: boolean;
    qualification?: boolean;
    bank_id?: boolean;
    user_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type loan_officerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bank?: boolean | bankDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $loan_officerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'loan_officer';
    objects: {
      bank: Prisma.$bankPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        officer_name: string;
        experience: number;
        qualification: string;
        bank_id: string;
        user_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['loan_officer']
    >;
    composites: {};
  };

  type loan_officerGetPayload<S extends boolean | null | undefined | loan_officerDefaultArgs> = $Result.GetResult<
    Prisma.$loan_officerPayload,
    S
  >;

  type loan_officerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    loan_officerFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: Loan_officerCountAggregateInputType | true;
  };

  export interface loan_officerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['loan_officer']; meta: { name: 'loan_officer' } };
    /**
     * Find zero or one Loan_officer that matches the filter.
     * @param {loan_officerFindUniqueArgs} args - Arguments to find a Loan_officer
     * @example
     * // Get one Loan_officer
     * const loan_officer = await prisma.loan_officer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends loan_officerFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, loan_officerFindUniqueArgs<ExtArgs>>,
    ): Prisma__loan_officerClient<
      $Result.GetResult<Prisma.$loan_officerPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Loan_officer that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {loan_officerFindUniqueOrThrowArgs} args - Arguments to find a Loan_officer
     * @example
     * // Get one Loan_officer
     * const loan_officer = await prisma.loan_officer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends loan_officerFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, loan_officerFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__loan_officerClient<
      $Result.GetResult<Prisma.$loan_officerPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Loan_officer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loan_officerFindFirstArgs} args - Arguments to find a Loan_officer
     * @example
     * // Get one Loan_officer
     * const loan_officer = await prisma.loan_officer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends loan_officerFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, loan_officerFindFirstArgs<ExtArgs>>,
    ): Prisma__loan_officerClient<
      $Result.GetResult<Prisma.$loan_officerPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Loan_officer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loan_officerFindFirstOrThrowArgs} args - Arguments to find a Loan_officer
     * @example
     * // Get one Loan_officer
     * const loan_officer = await prisma.loan_officer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends loan_officerFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, loan_officerFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__loan_officerClient<
      $Result.GetResult<Prisma.$loan_officerPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Loan_officers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loan_officerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Loan_officers
     * const loan_officers = await prisma.loan_officer.findMany()
     *
     * // Get first 10 Loan_officers
     * const loan_officers = await prisma.loan_officer.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const loan_officerWithIdOnly = await prisma.loan_officer.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends loan_officerFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, loan_officerFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$loan_officerPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Loan_officer.
     * @param {loan_officerCreateArgs} args - Arguments to create a Loan_officer.
     * @example
     * // Create one Loan_officer
     * const Loan_officer = await prisma.loan_officer.create({
     *   data: {
     *     // ... data to create a Loan_officer
     *   }
     * })
     *
     **/
    create<T extends loan_officerCreateArgs<ExtArgs>>(
      args: SelectSubset<T, loan_officerCreateArgs<ExtArgs>>,
    ): Prisma__loan_officerClient<$Result.GetResult<Prisma.$loan_officerPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Loan_officers.
     *     @param {loan_officerCreateManyArgs} args - Arguments to create many Loan_officers.
     *     @example
     *     // Create many Loan_officers
     *     const loan_officer = await prisma.loan_officer.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends loan_officerCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, loan_officerCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Loan_officer.
     * @param {loan_officerDeleteArgs} args - Arguments to delete one Loan_officer.
     * @example
     * // Delete one Loan_officer
     * const Loan_officer = await prisma.loan_officer.delete({
     *   where: {
     *     // ... filter to delete one Loan_officer
     *   }
     * })
     *
     **/
    delete<T extends loan_officerDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, loan_officerDeleteArgs<ExtArgs>>,
    ): Prisma__loan_officerClient<$Result.GetResult<Prisma.$loan_officerPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Loan_officer.
     * @param {loan_officerUpdateArgs} args - Arguments to update one Loan_officer.
     * @example
     * // Update one Loan_officer
     * const loan_officer = await prisma.loan_officer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends loan_officerUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, loan_officerUpdateArgs<ExtArgs>>,
    ): Prisma__loan_officerClient<$Result.GetResult<Prisma.$loan_officerPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Loan_officers.
     * @param {loan_officerDeleteManyArgs} args - Arguments to filter Loan_officers to delete.
     * @example
     * // Delete a few Loan_officers
     * const { count } = await prisma.loan_officer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends loan_officerDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, loan_officerDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Loan_officers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loan_officerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Loan_officers
     * const loan_officer = await prisma.loan_officer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends loan_officerUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, loan_officerUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Loan_officer.
     * @param {loan_officerUpsertArgs} args - Arguments to update or create a Loan_officer.
     * @example
     * // Update or create a Loan_officer
     * const loan_officer = await prisma.loan_officer.upsert({
     *   create: {
     *     // ... data to create a Loan_officer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Loan_officer we want to update
     *   }
     * })
     **/
    upsert<T extends loan_officerUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, loan_officerUpsertArgs<ExtArgs>>,
    ): Prisma__loan_officerClient<$Result.GetResult<Prisma.$loan_officerPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Loan_officers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loan_officerCountArgs} args - Arguments to filter Loan_officers to count.
     * @example
     * // Count the number of Loan_officers
     * const count = await prisma.loan_officer.count({
     *   where: {
     *     // ... the filter for the Loan_officers we want to count
     *   }
     * })
     **/
    count<T extends loan_officerCountArgs>(
      args?: Subset<T, loan_officerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Loan_officerCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Loan_officer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Loan_officerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends Loan_officerAggregateArgs>(
      args: Subset<T, Loan_officerAggregateArgs>,
    ): Prisma.PrismaPromise<GetLoan_officerAggregateType<T>>;

    /**
     * Group by Loan_officer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loan_officerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends loan_officerGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: loan_officerGroupByArgs['orderBy'] }
        : { orderBy?: loan_officerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, loan_officerGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetLoan_officerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the loan_officer model
     */
    readonly fields: loan_officerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for loan_officer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__loan_officerClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    bank<T extends bankDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, bankDefaultArgs<ExtArgs>>,
    ): Prisma__bankClient<
      $Result.GetResult<Prisma.$bankPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the loan_officer model
   */
  interface loan_officerFieldRefs {
    readonly id: FieldRef<'loan_officer', 'String'>;
    readonly officer_name: FieldRef<'loan_officer', 'String'>;
    readonly experience: FieldRef<'loan_officer', 'Int'>;
    readonly qualification: FieldRef<'loan_officer', 'String'>;
    readonly bank_id: FieldRef<'loan_officer', 'String'>;
    readonly user_id: FieldRef<'loan_officer', 'String'>;
    readonly created_at: FieldRef<'loan_officer', 'DateTime'>;
    readonly updated_at: FieldRef<'loan_officer', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * loan_officer findUnique
   */
  export type loan_officerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan_officer
     */
    select?: loan_officerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: loan_officerInclude<ExtArgs> | null;
    /**
     * Filter, which loan_officer to fetch.
     */
    where: loan_officerWhereUniqueInput;
  };

  /**
   * loan_officer findUniqueOrThrow
   */
  export type loan_officerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan_officer
     */
    select?: loan_officerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: loan_officerInclude<ExtArgs> | null;
    /**
     * Filter, which loan_officer to fetch.
     */
    where: loan_officerWhereUniqueInput;
  };

  /**
   * loan_officer findFirst
   */
  export type loan_officerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan_officer
     */
    select?: loan_officerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: loan_officerInclude<ExtArgs> | null;
    /**
     * Filter, which loan_officer to fetch.
     */
    where?: loan_officerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of loan_officers to fetch.
     */
    orderBy?: loan_officerOrderByWithRelationInput | loan_officerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for loan_officers.
     */
    cursor?: loan_officerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` loan_officers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` loan_officers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of loan_officers.
     */
    distinct?: Loan_officerScalarFieldEnum | Loan_officerScalarFieldEnum[];
  };

  /**
   * loan_officer findFirstOrThrow
   */
  export type loan_officerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan_officer
     */
    select?: loan_officerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: loan_officerInclude<ExtArgs> | null;
    /**
     * Filter, which loan_officer to fetch.
     */
    where?: loan_officerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of loan_officers to fetch.
     */
    orderBy?: loan_officerOrderByWithRelationInput | loan_officerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for loan_officers.
     */
    cursor?: loan_officerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` loan_officers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` loan_officers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of loan_officers.
     */
    distinct?: Loan_officerScalarFieldEnum | Loan_officerScalarFieldEnum[];
  };

  /**
   * loan_officer findMany
   */
  export type loan_officerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan_officer
     */
    select?: loan_officerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: loan_officerInclude<ExtArgs> | null;
    /**
     * Filter, which loan_officers to fetch.
     */
    where?: loan_officerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of loan_officers to fetch.
     */
    orderBy?: loan_officerOrderByWithRelationInput | loan_officerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing loan_officers.
     */
    cursor?: loan_officerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` loan_officers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` loan_officers.
     */
    skip?: number;
    distinct?: Loan_officerScalarFieldEnum | Loan_officerScalarFieldEnum[];
  };

  /**
   * loan_officer create
   */
  export type loan_officerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan_officer
     */
    select?: loan_officerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: loan_officerInclude<ExtArgs> | null;
    /**
     * The data needed to create a loan_officer.
     */
    data: XOR<loan_officerCreateInput, loan_officerUncheckedCreateInput>;
  };

  /**
   * loan_officer createMany
   */
  export type loan_officerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many loan_officers.
     */
    data: loan_officerCreateManyInput | loan_officerCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * loan_officer update
   */
  export type loan_officerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan_officer
     */
    select?: loan_officerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: loan_officerInclude<ExtArgs> | null;
    /**
     * The data needed to update a loan_officer.
     */
    data: XOR<loan_officerUpdateInput, loan_officerUncheckedUpdateInput>;
    /**
     * Choose, which loan_officer to update.
     */
    where: loan_officerWhereUniqueInput;
  };

  /**
   * loan_officer updateMany
   */
  export type loan_officerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update loan_officers.
     */
    data: XOR<loan_officerUpdateManyMutationInput, loan_officerUncheckedUpdateManyInput>;
    /**
     * Filter which loan_officers to update
     */
    where?: loan_officerWhereInput;
  };

  /**
   * loan_officer upsert
   */
  export type loan_officerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan_officer
     */
    select?: loan_officerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: loan_officerInclude<ExtArgs> | null;
    /**
     * The filter to search for the loan_officer to update in case it exists.
     */
    where: loan_officerWhereUniqueInput;
    /**
     * In case the loan_officer found by the `where` argument doesn't exist, create a new loan_officer with this data.
     */
    create: XOR<loan_officerCreateInput, loan_officerUncheckedCreateInput>;
    /**
     * In case the loan_officer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<loan_officerUpdateInput, loan_officerUncheckedUpdateInput>;
  };

  /**
   * loan_officer delete
   */
  export type loan_officerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan_officer
     */
    select?: loan_officerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: loan_officerInclude<ExtArgs> | null;
    /**
     * Filter which loan_officer to delete.
     */
    where: loan_officerWhereUniqueInput;
  };

  /**
   * loan_officer deleteMany
   */
  export type loan_officerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which loan_officers to delete
     */
    where?: loan_officerWhereInput;
  };

  /**
   * loan_officer without action
   */
  export type loan_officerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan_officer
     */
    select?: loan_officerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: loan_officerInclude<ExtArgs> | null;
  };

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    firstName: number;
    lastName: number;
    roq_user_id: number;
    tenant_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput;
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: userScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    email: string;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at: Date;
    updated_at: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      firstName?: boolean;
      lastName?: boolean;
      roq_user_id?: boolean;
      tenant_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      bank?: boolean | user$bankArgs<ExtArgs>;
      business_owner?: boolean | user$business_ownerArgs<ExtArgs>;
      financial_advisor?: boolean | user$financial_advisorArgs<ExtArgs>;
      loan_officer?: boolean | user$loan_officerArgs<ExtArgs>;
      vehicle_loan?: boolean | user$vehicle_loanArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type userSelectScalar = {
    id?: boolean;
    email?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    roq_user_id?: boolean;
    tenant_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bank?: boolean | user$bankArgs<ExtArgs>;
    business_owner?: boolean | user$business_ownerArgs<ExtArgs>;
    financial_advisor?: boolean | user$financial_advisorArgs<ExtArgs>;
    loan_officer?: boolean | user$loan_officerArgs<ExtArgs>;
    vehicle_loan?: boolean | user$vehicle_loanArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'user';
    objects: {
      bank: Prisma.$bankPayload<ExtArgs>[];
      business_owner: Prisma.$business_ownerPayload<ExtArgs>[];
      financial_advisor: Prisma.$financial_advisorPayload<ExtArgs>[];
      loan_officer: Prisma.$loan_officerPayload<ExtArgs>[];
      vehicle_loan: Prisma.$vehicle_loanPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        firstName: string | null;
        lastName: string | null;
        roq_user_id: string;
        tenant_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<
    Prisma.$userPayload,
    S
  >;

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    userFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: UserCountAggregateInputType | true;
  };

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user']; meta: { name: 'user' } };
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends userFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends userFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends userFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends userFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     **/
    create<T extends userCreateArgs<ExtArgs>>(
      args: SelectSubset<T, userCreateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Users.
     *     @param {userCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends userCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     **/
    delete<T extends userDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, userDeleteArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends userUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends userDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends userUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     **/
    upsert<T extends userUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, userUpsertArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the user model
     */
    readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    bank<T extends user$bankArgs<ExtArgs> = {}>(
      args?: Subset<T, user$bankArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bankPayload<ExtArgs>, T, 'findMany'> | Null>;

    business_owner<T extends user$business_ownerArgs<ExtArgs> = {}>(
      args?: Subset<T, user$business_ownerArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$business_ownerPayload<ExtArgs>, T, 'findMany'> | Null>;

    financial_advisor<T extends user$financial_advisorArgs<ExtArgs> = {}>(
      args?: Subset<T, user$financial_advisorArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$financial_advisorPayload<ExtArgs>, T, 'findMany'> | Null>;

    loan_officer<T extends user$loan_officerArgs<ExtArgs> = {}>(
      args?: Subset<T, user$loan_officerArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$loan_officerPayload<ExtArgs>, T, 'findMany'> | Null>;

    vehicle_loan<T extends user$vehicle_loanArgs<ExtArgs> = {}>(
      args?: Subset<T, user$vehicle_loanArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vehicle_loanPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<'user', 'String'>;
    readonly email: FieldRef<'user', 'String'>;
    readonly firstName: FieldRef<'user', 'String'>;
    readonly lastName: FieldRef<'user', 'String'>;
    readonly roq_user_id: FieldRef<'user', 'String'>;
    readonly tenant_id: FieldRef<'user', 'String'>;
    readonly created_at: FieldRef<'user', 'DateTime'>;
    readonly updated_at: FieldRef<'user', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>;
  };

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>;
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>;
    /**
     * Filter which users to update
     */
    where?: userWhereInput;
  };

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput;
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>;
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>;
  };

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput;
  };

  /**
   * user.bank
   */
  export type user$bankArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bank
     */
    select?: bankSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bankInclude<ExtArgs> | null;
    where?: bankWhereInput;
    orderBy?: bankOrderByWithRelationInput | bankOrderByWithRelationInput[];
    cursor?: bankWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: BankScalarFieldEnum | BankScalarFieldEnum[];
  };

  /**
   * user.business_owner
   */
  export type user$business_ownerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the business_owner
     */
    select?: business_ownerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: business_ownerInclude<ExtArgs> | null;
    where?: business_ownerWhereInput;
    orderBy?: business_ownerOrderByWithRelationInput | business_ownerOrderByWithRelationInput[];
    cursor?: business_ownerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Business_ownerScalarFieldEnum | Business_ownerScalarFieldEnum[];
  };

  /**
   * user.financial_advisor
   */
  export type user$financial_advisorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the financial_advisor
     */
    select?: financial_advisorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: financial_advisorInclude<ExtArgs> | null;
    where?: financial_advisorWhereInput;
    orderBy?: financial_advisorOrderByWithRelationInput | financial_advisorOrderByWithRelationInput[];
    cursor?: financial_advisorWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Financial_advisorScalarFieldEnum | Financial_advisorScalarFieldEnum[];
  };

  /**
   * user.loan_officer
   */
  export type user$loan_officerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan_officer
     */
    select?: loan_officerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: loan_officerInclude<ExtArgs> | null;
    where?: loan_officerWhereInput;
    orderBy?: loan_officerOrderByWithRelationInput | loan_officerOrderByWithRelationInput[];
    cursor?: loan_officerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Loan_officerScalarFieldEnum | Loan_officerScalarFieldEnum[];
  };

  /**
   * user.vehicle_loan
   */
  export type user$vehicle_loanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle_loan
     */
    select?: vehicle_loanSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: vehicle_loanInclude<ExtArgs> | null;
    where?: vehicle_loanWhereInput;
    orderBy?: vehicle_loanOrderByWithRelationInput | vehicle_loanOrderByWithRelationInput[];
    cursor?: vehicle_loanWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Vehicle_loanScalarFieldEnum | Vehicle_loanScalarFieldEnum[];
  };

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
  };

  /**
   * Model vehicle_loan
   */

  export type AggregateVehicle_loan = {
    _count: Vehicle_loanCountAggregateOutputType | null;
    _avg: Vehicle_loanAvgAggregateOutputType | null;
    _sum: Vehicle_loanSumAggregateOutputType | null;
    _min: Vehicle_loanMinAggregateOutputType | null;
    _max: Vehicle_loanMaxAggregateOutputType | null;
  };

  export type Vehicle_loanAvgAggregateOutputType = {
    loan_amount: number | null;
    loan_duration: number | null;
    interest_rate: number | null;
  };

  export type Vehicle_loanSumAggregateOutputType = {
    loan_amount: number | null;
    loan_duration: number | null;
    interest_rate: number | null;
  };

  export type Vehicle_loanMinAggregateOutputType = {
    id: string | null;
    loan_amount: number | null;
    loan_duration: number | null;
    interest_rate: number | null;
    vehicle_type: string | null;
    bank_id: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Vehicle_loanMaxAggregateOutputType = {
    id: string | null;
    loan_amount: number | null;
    loan_duration: number | null;
    interest_rate: number | null;
    vehicle_type: string | null;
    bank_id: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Vehicle_loanCountAggregateOutputType = {
    id: number;
    loan_amount: number;
    loan_duration: number;
    interest_rate: number;
    vehicle_type: number;
    bank_id: number;
    user_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Vehicle_loanAvgAggregateInputType = {
    loan_amount?: true;
    loan_duration?: true;
    interest_rate?: true;
  };

  export type Vehicle_loanSumAggregateInputType = {
    loan_amount?: true;
    loan_duration?: true;
    interest_rate?: true;
  };

  export type Vehicle_loanMinAggregateInputType = {
    id?: true;
    loan_amount?: true;
    loan_duration?: true;
    interest_rate?: true;
    vehicle_type?: true;
    bank_id?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Vehicle_loanMaxAggregateInputType = {
    id?: true;
    loan_amount?: true;
    loan_duration?: true;
    interest_rate?: true;
    vehicle_type?: true;
    bank_id?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Vehicle_loanCountAggregateInputType = {
    id?: true;
    loan_amount?: true;
    loan_duration?: true;
    interest_rate?: true;
    vehicle_type?: true;
    bank_id?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Vehicle_loanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which vehicle_loan to aggregate.
     */
    where?: vehicle_loanWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of vehicle_loans to fetch.
     */
    orderBy?: vehicle_loanOrderByWithRelationInput | vehicle_loanOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: vehicle_loanWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` vehicle_loans from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` vehicle_loans.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned vehicle_loans
     **/
    _count?: true | Vehicle_loanCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: Vehicle_loanAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: Vehicle_loanSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Vehicle_loanMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Vehicle_loanMaxAggregateInputType;
  };

  export type GetVehicle_loanAggregateType<T extends Vehicle_loanAggregateArgs> = {
    [P in keyof T & keyof AggregateVehicle_loan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVehicle_loan[P]>
      : GetScalarType<T[P], AggregateVehicle_loan[P]>;
  };

  export type vehicle_loanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: vehicle_loanWhereInput;
    orderBy?: vehicle_loanOrderByWithAggregationInput | vehicle_loanOrderByWithAggregationInput[];
    by: Vehicle_loanScalarFieldEnum[] | Vehicle_loanScalarFieldEnum;
    having?: vehicle_loanScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Vehicle_loanCountAggregateInputType | true;
    _avg?: Vehicle_loanAvgAggregateInputType;
    _sum?: Vehicle_loanSumAggregateInputType;
    _min?: Vehicle_loanMinAggregateInputType;
    _max?: Vehicle_loanMaxAggregateInputType;
  };

  export type Vehicle_loanGroupByOutputType = {
    id: string;
    loan_amount: number;
    loan_duration: number;
    interest_rate: number;
    vehicle_type: string;
    bank_id: string;
    user_id: string;
    created_at: Date;
    updated_at: Date;
    _count: Vehicle_loanCountAggregateOutputType | null;
    _avg: Vehicle_loanAvgAggregateOutputType | null;
    _sum: Vehicle_loanSumAggregateOutputType | null;
    _min: Vehicle_loanMinAggregateOutputType | null;
    _max: Vehicle_loanMaxAggregateOutputType | null;
  };

  type GetVehicle_loanGroupByPayload<T extends vehicle_loanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Vehicle_loanGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Vehicle_loanGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Vehicle_loanGroupByOutputType[P]>
          : GetScalarType<T[P], Vehicle_loanGroupByOutputType[P]>;
      }
    >
  >;

  export type vehicle_loanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        loan_amount?: boolean;
        loan_duration?: boolean;
        interest_rate?: boolean;
        vehicle_type?: boolean;
        bank_id?: boolean;
        user_id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        bank?: boolean | bankDefaultArgs<ExtArgs>;
        user?: boolean | userDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['vehicle_loan']
    >;

  export type vehicle_loanSelectScalar = {
    id?: boolean;
    loan_amount?: boolean;
    loan_duration?: boolean;
    interest_rate?: boolean;
    vehicle_type?: boolean;
    bank_id?: boolean;
    user_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type vehicle_loanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bank?: boolean | bankDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $vehicle_loanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'vehicle_loan';
    objects: {
      bank: Prisma.$bankPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        loan_amount: number;
        loan_duration: number;
        interest_rate: number;
        vehicle_type: string;
        bank_id: string;
        user_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['vehicle_loan']
    >;
    composites: {};
  };

  type vehicle_loanGetPayload<S extends boolean | null | undefined | vehicle_loanDefaultArgs> = $Result.GetResult<
    Prisma.$vehicle_loanPayload,
    S
  >;

  type vehicle_loanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    vehicle_loanFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: Vehicle_loanCountAggregateInputType | true;
  };

  export interface vehicle_loanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['vehicle_loan']; meta: { name: 'vehicle_loan' } };
    /**
     * Find zero or one Vehicle_loan that matches the filter.
     * @param {vehicle_loanFindUniqueArgs} args - Arguments to find a Vehicle_loan
     * @example
     * // Get one Vehicle_loan
     * const vehicle_loan = await prisma.vehicle_loan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends vehicle_loanFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, vehicle_loanFindUniqueArgs<ExtArgs>>,
    ): Prisma__vehicle_loanClient<
      $Result.GetResult<Prisma.$vehicle_loanPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Vehicle_loan that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {vehicle_loanFindUniqueOrThrowArgs} args - Arguments to find a Vehicle_loan
     * @example
     * // Get one Vehicle_loan
     * const vehicle_loan = await prisma.vehicle_loan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends vehicle_loanFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, vehicle_loanFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__vehicle_loanClient<
      $Result.GetResult<Prisma.$vehicle_loanPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Vehicle_loan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vehicle_loanFindFirstArgs} args - Arguments to find a Vehicle_loan
     * @example
     * // Get one Vehicle_loan
     * const vehicle_loan = await prisma.vehicle_loan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends vehicle_loanFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, vehicle_loanFindFirstArgs<ExtArgs>>,
    ): Prisma__vehicle_loanClient<
      $Result.GetResult<Prisma.$vehicle_loanPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Vehicle_loan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vehicle_loanFindFirstOrThrowArgs} args - Arguments to find a Vehicle_loan
     * @example
     * // Get one Vehicle_loan
     * const vehicle_loan = await prisma.vehicle_loan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends vehicle_loanFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, vehicle_loanFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__vehicle_loanClient<
      $Result.GetResult<Prisma.$vehicle_loanPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Vehicle_loans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vehicle_loanFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vehicle_loans
     * const vehicle_loans = await prisma.vehicle_loan.findMany()
     *
     * // Get first 10 Vehicle_loans
     * const vehicle_loans = await prisma.vehicle_loan.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const vehicle_loanWithIdOnly = await prisma.vehicle_loan.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends vehicle_loanFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, vehicle_loanFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vehicle_loanPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Vehicle_loan.
     * @param {vehicle_loanCreateArgs} args - Arguments to create a Vehicle_loan.
     * @example
     * // Create one Vehicle_loan
     * const Vehicle_loan = await prisma.vehicle_loan.create({
     *   data: {
     *     // ... data to create a Vehicle_loan
     *   }
     * })
     *
     **/
    create<T extends vehicle_loanCreateArgs<ExtArgs>>(
      args: SelectSubset<T, vehicle_loanCreateArgs<ExtArgs>>,
    ): Prisma__vehicle_loanClient<$Result.GetResult<Prisma.$vehicle_loanPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Vehicle_loans.
     *     @param {vehicle_loanCreateManyArgs} args - Arguments to create many Vehicle_loans.
     *     @example
     *     // Create many Vehicle_loans
     *     const vehicle_loan = await prisma.vehicle_loan.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends vehicle_loanCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, vehicle_loanCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Vehicle_loan.
     * @param {vehicle_loanDeleteArgs} args - Arguments to delete one Vehicle_loan.
     * @example
     * // Delete one Vehicle_loan
     * const Vehicle_loan = await prisma.vehicle_loan.delete({
     *   where: {
     *     // ... filter to delete one Vehicle_loan
     *   }
     * })
     *
     **/
    delete<T extends vehicle_loanDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, vehicle_loanDeleteArgs<ExtArgs>>,
    ): Prisma__vehicle_loanClient<$Result.GetResult<Prisma.$vehicle_loanPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Vehicle_loan.
     * @param {vehicle_loanUpdateArgs} args - Arguments to update one Vehicle_loan.
     * @example
     * // Update one Vehicle_loan
     * const vehicle_loan = await prisma.vehicle_loan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends vehicle_loanUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, vehicle_loanUpdateArgs<ExtArgs>>,
    ): Prisma__vehicle_loanClient<$Result.GetResult<Prisma.$vehicle_loanPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Vehicle_loans.
     * @param {vehicle_loanDeleteManyArgs} args - Arguments to filter Vehicle_loans to delete.
     * @example
     * // Delete a few Vehicle_loans
     * const { count } = await prisma.vehicle_loan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends vehicle_loanDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, vehicle_loanDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Vehicle_loans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vehicle_loanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vehicle_loans
     * const vehicle_loan = await prisma.vehicle_loan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends vehicle_loanUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, vehicle_loanUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Vehicle_loan.
     * @param {vehicle_loanUpsertArgs} args - Arguments to update or create a Vehicle_loan.
     * @example
     * // Update or create a Vehicle_loan
     * const vehicle_loan = await prisma.vehicle_loan.upsert({
     *   create: {
     *     // ... data to create a Vehicle_loan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vehicle_loan we want to update
     *   }
     * })
     **/
    upsert<T extends vehicle_loanUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, vehicle_loanUpsertArgs<ExtArgs>>,
    ): Prisma__vehicle_loanClient<$Result.GetResult<Prisma.$vehicle_loanPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Vehicle_loans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vehicle_loanCountArgs} args - Arguments to filter Vehicle_loans to count.
     * @example
     * // Count the number of Vehicle_loans
     * const count = await prisma.vehicle_loan.count({
     *   where: {
     *     // ... the filter for the Vehicle_loans we want to count
     *   }
     * })
     **/
    count<T extends vehicle_loanCountArgs>(
      args?: Subset<T, vehicle_loanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Vehicle_loanCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Vehicle_loan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Vehicle_loanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends Vehicle_loanAggregateArgs>(
      args: Subset<T, Vehicle_loanAggregateArgs>,
    ): Prisma.PrismaPromise<GetVehicle_loanAggregateType<T>>;

    /**
     * Group by Vehicle_loan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vehicle_loanGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends vehicle_loanGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: vehicle_loanGroupByArgs['orderBy'] }
        : { orderBy?: vehicle_loanGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, vehicle_loanGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetVehicle_loanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the vehicle_loan model
     */
    readonly fields: vehicle_loanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for vehicle_loan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__vehicle_loanClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    bank<T extends bankDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, bankDefaultArgs<ExtArgs>>,
    ): Prisma__bankClient<
      $Result.GetResult<Prisma.$bankPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the vehicle_loan model
   */
  interface vehicle_loanFieldRefs {
    readonly id: FieldRef<'vehicle_loan', 'String'>;
    readonly loan_amount: FieldRef<'vehicle_loan', 'Int'>;
    readonly loan_duration: FieldRef<'vehicle_loan', 'Int'>;
    readonly interest_rate: FieldRef<'vehicle_loan', 'Int'>;
    readonly vehicle_type: FieldRef<'vehicle_loan', 'String'>;
    readonly bank_id: FieldRef<'vehicle_loan', 'String'>;
    readonly user_id: FieldRef<'vehicle_loan', 'String'>;
    readonly created_at: FieldRef<'vehicle_loan', 'DateTime'>;
    readonly updated_at: FieldRef<'vehicle_loan', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * vehicle_loan findUnique
   */
  export type vehicle_loanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle_loan
     */
    select?: vehicle_loanSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: vehicle_loanInclude<ExtArgs> | null;
    /**
     * Filter, which vehicle_loan to fetch.
     */
    where: vehicle_loanWhereUniqueInput;
  };

  /**
   * vehicle_loan findUniqueOrThrow
   */
  export type vehicle_loanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle_loan
     */
    select?: vehicle_loanSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: vehicle_loanInclude<ExtArgs> | null;
    /**
     * Filter, which vehicle_loan to fetch.
     */
    where: vehicle_loanWhereUniqueInput;
  };

  /**
   * vehicle_loan findFirst
   */
  export type vehicle_loanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle_loan
     */
    select?: vehicle_loanSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: vehicle_loanInclude<ExtArgs> | null;
    /**
     * Filter, which vehicle_loan to fetch.
     */
    where?: vehicle_loanWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of vehicle_loans to fetch.
     */
    orderBy?: vehicle_loanOrderByWithRelationInput | vehicle_loanOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for vehicle_loans.
     */
    cursor?: vehicle_loanWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` vehicle_loans from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` vehicle_loans.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of vehicle_loans.
     */
    distinct?: Vehicle_loanScalarFieldEnum | Vehicle_loanScalarFieldEnum[];
  };

  /**
   * vehicle_loan findFirstOrThrow
   */
  export type vehicle_loanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle_loan
     */
    select?: vehicle_loanSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: vehicle_loanInclude<ExtArgs> | null;
    /**
     * Filter, which vehicle_loan to fetch.
     */
    where?: vehicle_loanWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of vehicle_loans to fetch.
     */
    orderBy?: vehicle_loanOrderByWithRelationInput | vehicle_loanOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for vehicle_loans.
     */
    cursor?: vehicle_loanWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` vehicle_loans from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` vehicle_loans.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of vehicle_loans.
     */
    distinct?: Vehicle_loanScalarFieldEnum | Vehicle_loanScalarFieldEnum[];
  };

  /**
   * vehicle_loan findMany
   */
  export type vehicle_loanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle_loan
     */
    select?: vehicle_loanSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: vehicle_loanInclude<ExtArgs> | null;
    /**
     * Filter, which vehicle_loans to fetch.
     */
    where?: vehicle_loanWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of vehicle_loans to fetch.
     */
    orderBy?: vehicle_loanOrderByWithRelationInput | vehicle_loanOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing vehicle_loans.
     */
    cursor?: vehicle_loanWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` vehicle_loans from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` vehicle_loans.
     */
    skip?: number;
    distinct?: Vehicle_loanScalarFieldEnum | Vehicle_loanScalarFieldEnum[];
  };

  /**
   * vehicle_loan create
   */
  export type vehicle_loanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle_loan
     */
    select?: vehicle_loanSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: vehicle_loanInclude<ExtArgs> | null;
    /**
     * The data needed to create a vehicle_loan.
     */
    data: XOR<vehicle_loanCreateInput, vehicle_loanUncheckedCreateInput>;
  };

  /**
   * vehicle_loan createMany
   */
  export type vehicle_loanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many vehicle_loans.
     */
    data: vehicle_loanCreateManyInput | vehicle_loanCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * vehicle_loan update
   */
  export type vehicle_loanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle_loan
     */
    select?: vehicle_loanSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: vehicle_loanInclude<ExtArgs> | null;
    /**
     * The data needed to update a vehicle_loan.
     */
    data: XOR<vehicle_loanUpdateInput, vehicle_loanUncheckedUpdateInput>;
    /**
     * Choose, which vehicle_loan to update.
     */
    where: vehicle_loanWhereUniqueInput;
  };

  /**
   * vehicle_loan updateMany
   */
  export type vehicle_loanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update vehicle_loans.
     */
    data: XOR<vehicle_loanUpdateManyMutationInput, vehicle_loanUncheckedUpdateManyInput>;
    /**
     * Filter which vehicle_loans to update
     */
    where?: vehicle_loanWhereInput;
  };

  /**
   * vehicle_loan upsert
   */
  export type vehicle_loanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle_loan
     */
    select?: vehicle_loanSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: vehicle_loanInclude<ExtArgs> | null;
    /**
     * The filter to search for the vehicle_loan to update in case it exists.
     */
    where: vehicle_loanWhereUniqueInput;
    /**
     * In case the vehicle_loan found by the `where` argument doesn't exist, create a new vehicle_loan with this data.
     */
    create: XOR<vehicle_loanCreateInput, vehicle_loanUncheckedCreateInput>;
    /**
     * In case the vehicle_loan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<vehicle_loanUpdateInput, vehicle_loanUncheckedUpdateInput>;
  };

  /**
   * vehicle_loan delete
   */
  export type vehicle_loanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle_loan
     */
    select?: vehicle_loanSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: vehicle_loanInclude<ExtArgs> | null;
    /**
     * Filter which vehicle_loan to delete.
     */
    where: vehicle_loanWhereUniqueInput;
  };

  /**
   * vehicle_loan deleteMany
   */
  export type vehicle_loanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which vehicle_loans to delete
     */
    where?: vehicle_loanWhereInput;
  };

  /**
   * vehicle_loan without action
   */
  export type vehicle_loanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle_loan
     */
    select?: vehicle_loanSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: vehicle_loanInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const BankScalarFieldEnum: {
    id: 'id';
    description: 'description';
    name: 'name';
    created_at: 'created_at';
    updated_at: 'updated_at';
    user_id: 'user_id';
    tenant_id: 'tenant_id';
  };

  export type BankScalarFieldEnum = (typeof BankScalarFieldEnum)[keyof typeof BankScalarFieldEnum];

  export const Business_ownerScalarFieldEnum: {
    id: 'id';
    business_name: 'business_name';
    business_type: 'business_type';
    business_location: 'business_location';
    user_id: 'user_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Business_ownerScalarFieldEnum =
    (typeof Business_ownerScalarFieldEnum)[keyof typeof Business_ownerScalarFieldEnum];

  export const Financial_advisorScalarFieldEnum: {
    id: 'id';
    advisor_name: 'advisor_name';
    experience: 'experience';
    qualification: 'qualification';
    specialization: 'specialization';
    user_id: 'user_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Financial_advisorScalarFieldEnum =
    (typeof Financial_advisorScalarFieldEnum)[keyof typeof Financial_advisorScalarFieldEnum];

  export const Loan_officerScalarFieldEnum: {
    id: 'id';
    officer_name: 'officer_name';
    experience: 'experience';
    qualification: 'qualification';
    bank_id: 'bank_id';
    user_id: 'user_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Loan_officerScalarFieldEnum =
    (typeof Loan_officerScalarFieldEnum)[keyof typeof Loan_officerScalarFieldEnum];

  export const UserScalarFieldEnum: {
    id: 'id';
    email: 'email';
    firstName: 'firstName';
    lastName: 'lastName';
    roq_user_id: 'roq_user_id';
    tenant_id: 'tenant_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const Vehicle_loanScalarFieldEnum: {
    id: 'id';
    loan_amount: 'loan_amount';
    loan_duration: 'loan_duration';
    interest_rate: 'interest_rate';
    vehicle_type: 'vehicle_type';
    bank_id: 'bank_id';
    user_id: 'user_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Vehicle_loanScalarFieldEnum =
    (typeof Vehicle_loanScalarFieldEnum)[keyof typeof Vehicle_loanScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;

  /**
   * Deep Input Types
   */

  export type bankWhereInput = {
    AND?: bankWhereInput | bankWhereInput[];
    OR?: bankWhereInput[];
    NOT?: bankWhereInput | bankWhereInput[];
    id?: UuidFilter<'bank'> | string;
    description?: StringNullableFilter<'bank'> | string | null;
    name?: StringFilter<'bank'> | string;
    created_at?: DateTimeFilter<'bank'> | Date | string;
    updated_at?: DateTimeFilter<'bank'> | Date | string;
    user_id?: UuidFilter<'bank'> | string;
    tenant_id?: StringFilter<'bank'> | string;
    user?: XOR<UserRelationFilter, userWhereInput>;
    loan_officer?: Loan_officerListRelationFilter;
    vehicle_loan?: Vehicle_loanListRelationFilter;
  };

  export type bankOrderByWithRelationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
    user?: userOrderByWithRelationInput;
    loan_officer?: loan_officerOrderByRelationAggregateInput;
    vehicle_loan?: vehicle_loanOrderByRelationAggregateInput;
  };

  export type bankWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: bankWhereInput | bankWhereInput[];
      OR?: bankWhereInput[];
      NOT?: bankWhereInput | bankWhereInput[];
      description?: StringNullableFilter<'bank'> | string | null;
      name?: StringFilter<'bank'> | string;
      created_at?: DateTimeFilter<'bank'> | Date | string;
      updated_at?: DateTimeFilter<'bank'> | Date | string;
      user_id?: UuidFilter<'bank'> | string;
      tenant_id?: StringFilter<'bank'> | string;
      user?: XOR<UserRelationFilter, userWhereInput>;
      loan_officer?: Loan_officerListRelationFilter;
      vehicle_loan?: Vehicle_loanListRelationFilter;
    },
    'id'
  >;

  export type bankOrderByWithAggregationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
    _count?: bankCountOrderByAggregateInput;
    _max?: bankMaxOrderByAggregateInput;
    _min?: bankMinOrderByAggregateInput;
  };

  export type bankScalarWhereWithAggregatesInput = {
    AND?: bankScalarWhereWithAggregatesInput | bankScalarWhereWithAggregatesInput[];
    OR?: bankScalarWhereWithAggregatesInput[];
    NOT?: bankScalarWhereWithAggregatesInput | bankScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'bank'> | string;
    description?: StringNullableWithAggregatesFilter<'bank'> | string | null;
    name?: StringWithAggregatesFilter<'bank'> | string;
    created_at?: DateTimeWithAggregatesFilter<'bank'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'bank'> | Date | string;
    user_id?: UuidWithAggregatesFilter<'bank'> | string;
    tenant_id?: StringWithAggregatesFilter<'bank'> | string;
  };

  export type business_ownerWhereInput = {
    AND?: business_ownerWhereInput | business_ownerWhereInput[];
    OR?: business_ownerWhereInput[];
    NOT?: business_ownerWhereInput | business_ownerWhereInput[];
    id?: UuidFilter<'business_owner'> | string;
    business_name?: StringFilter<'business_owner'> | string;
    business_type?: StringFilter<'business_owner'> | string;
    business_location?: StringFilter<'business_owner'> | string;
    user_id?: UuidFilter<'business_owner'> | string;
    created_at?: DateTimeFilter<'business_owner'> | Date | string;
    updated_at?: DateTimeFilter<'business_owner'> | Date | string;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type business_ownerOrderByWithRelationInput = {
    id?: SortOrder;
    business_name?: SortOrder;
    business_type?: SortOrder;
    business_location?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user?: userOrderByWithRelationInput;
  };

  export type business_ownerWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: business_ownerWhereInput | business_ownerWhereInput[];
      OR?: business_ownerWhereInput[];
      NOT?: business_ownerWhereInput | business_ownerWhereInput[];
      business_name?: StringFilter<'business_owner'> | string;
      business_type?: StringFilter<'business_owner'> | string;
      business_location?: StringFilter<'business_owner'> | string;
      user_id?: UuidFilter<'business_owner'> | string;
      created_at?: DateTimeFilter<'business_owner'> | Date | string;
      updated_at?: DateTimeFilter<'business_owner'> | Date | string;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type business_ownerOrderByWithAggregationInput = {
    id?: SortOrder;
    business_name?: SortOrder;
    business_type?: SortOrder;
    business_location?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: business_ownerCountOrderByAggregateInput;
    _max?: business_ownerMaxOrderByAggregateInput;
    _min?: business_ownerMinOrderByAggregateInput;
  };

  export type business_ownerScalarWhereWithAggregatesInput = {
    AND?: business_ownerScalarWhereWithAggregatesInput | business_ownerScalarWhereWithAggregatesInput[];
    OR?: business_ownerScalarWhereWithAggregatesInput[];
    NOT?: business_ownerScalarWhereWithAggregatesInput | business_ownerScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'business_owner'> | string;
    business_name?: StringWithAggregatesFilter<'business_owner'> | string;
    business_type?: StringWithAggregatesFilter<'business_owner'> | string;
    business_location?: StringWithAggregatesFilter<'business_owner'> | string;
    user_id?: UuidWithAggregatesFilter<'business_owner'> | string;
    created_at?: DateTimeWithAggregatesFilter<'business_owner'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'business_owner'> | Date | string;
  };

  export type financial_advisorWhereInput = {
    AND?: financial_advisorWhereInput | financial_advisorWhereInput[];
    OR?: financial_advisorWhereInput[];
    NOT?: financial_advisorWhereInput | financial_advisorWhereInput[];
    id?: UuidFilter<'financial_advisor'> | string;
    advisor_name?: StringFilter<'financial_advisor'> | string;
    experience?: IntFilter<'financial_advisor'> | number;
    qualification?: StringFilter<'financial_advisor'> | string;
    specialization?: StringFilter<'financial_advisor'> | string;
    user_id?: UuidFilter<'financial_advisor'> | string;
    created_at?: DateTimeFilter<'financial_advisor'> | Date | string;
    updated_at?: DateTimeFilter<'financial_advisor'> | Date | string;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type financial_advisorOrderByWithRelationInput = {
    id?: SortOrder;
    advisor_name?: SortOrder;
    experience?: SortOrder;
    qualification?: SortOrder;
    specialization?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user?: userOrderByWithRelationInput;
  };

  export type financial_advisorWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: financial_advisorWhereInput | financial_advisorWhereInput[];
      OR?: financial_advisorWhereInput[];
      NOT?: financial_advisorWhereInput | financial_advisorWhereInput[];
      advisor_name?: StringFilter<'financial_advisor'> | string;
      experience?: IntFilter<'financial_advisor'> | number;
      qualification?: StringFilter<'financial_advisor'> | string;
      specialization?: StringFilter<'financial_advisor'> | string;
      user_id?: UuidFilter<'financial_advisor'> | string;
      created_at?: DateTimeFilter<'financial_advisor'> | Date | string;
      updated_at?: DateTimeFilter<'financial_advisor'> | Date | string;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type financial_advisorOrderByWithAggregationInput = {
    id?: SortOrder;
    advisor_name?: SortOrder;
    experience?: SortOrder;
    qualification?: SortOrder;
    specialization?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: financial_advisorCountOrderByAggregateInput;
    _avg?: financial_advisorAvgOrderByAggregateInput;
    _max?: financial_advisorMaxOrderByAggregateInput;
    _min?: financial_advisorMinOrderByAggregateInput;
    _sum?: financial_advisorSumOrderByAggregateInput;
  };

  export type financial_advisorScalarWhereWithAggregatesInput = {
    AND?: financial_advisorScalarWhereWithAggregatesInput | financial_advisorScalarWhereWithAggregatesInput[];
    OR?: financial_advisorScalarWhereWithAggregatesInput[];
    NOT?: financial_advisorScalarWhereWithAggregatesInput | financial_advisorScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'financial_advisor'> | string;
    advisor_name?: StringWithAggregatesFilter<'financial_advisor'> | string;
    experience?: IntWithAggregatesFilter<'financial_advisor'> | number;
    qualification?: StringWithAggregatesFilter<'financial_advisor'> | string;
    specialization?: StringWithAggregatesFilter<'financial_advisor'> | string;
    user_id?: UuidWithAggregatesFilter<'financial_advisor'> | string;
    created_at?: DateTimeWithAggregatesFilter<'financial_advisor'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'financial_advisor'> | Date | string;
  };

  export type loan_officerWhereInput = {
    AND?: loan_officerWhereInput | loan_officerWhereInput[];
    OR?: loan_officerWhereInput[];
    NOT?: loan_officerWhereInput | loan_officerWhereInput[];
    id?: UuidFilter<'loan_officer'> | string;
    officer_name?: StringFilter<'loan_officer'> | string;
    experience?: IntFilter<'loan_officer'> | number;
    qualification?: StringFilter<'loan_officer'> | string;
    bank_id?: UuidFilter<'loan_officer'> | string;
    user_id?: UuidFilter<'loan_officer'> | string;
    created_at?: DateTimeFilter<'loan_officer'> | Date | string;
    updated_at?: DateTimeFilter<'loan_officer'> | Date | string;
    bank?: XOR<BankRelationFilter, bankWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type loan_officerOrderByWithRelationInput = {
    id?: SortOrder;
    officer_name?: SortOrder;
    experience?: SortOrder;
    qualification?: SortOrder;
    bank_id?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    bank?: bankOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
  };

  export type loan_officerWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: loan_officerWhereInput | loan_officerWhereInput[];
      OR?: loan_officerWhereInput[];
      NOT?: loan_officerWhereInput | loan_officerWhereInput[];
      officer_name?: StringFilter<'loan_officer'> | string;
      experience?: IntFilter<'loan_officer'> | number;
      qualification?: StringFilter<'loan_officer'> | string;
      bank_id?: UuidFilter<'loan_officer'> | string;
      user_id?: UuidFilter<'loan_officer'> | string;
      created_at?: DateTimeFilter<'loan_officer'> | Date | string;
      updated_at?: DateTimeFilter<'loan_officer'> | Date | string;
      bank?: XOR<BankRelationFilter, bankWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type loan_officerOrderByWithAggregationInput = {
    id?: SortOrder;
    officer_name?: SortOrder;
    experience?: SortOrder;
    qualification?: SortOrder;
    bank_id?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: loan_officerCountOrderByAggregateInput;
    _avg?: loan_officerAvgOrderByAggregateInput;
    _max?: loan_officerMaxOrderByAggregateInput;
    _min?: loan_officerMinOrderByAggregateInput;
    _sum?: loan_officerSumOrderByAggregateInput;
  };

  export type loan_officerScalarWhereWithAggregatesInput = {
    AND?: loan_officerScalarWhereWithAggregatesInput | loan_officerScalarWhereWithAggregatesInput[];
    OR?: loan_officerScalarWhereWithAggregatesInput[];
    NOT?: loan_officerScalarWhereWithAggregatesInput | loan_officerScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'loan_officer'> | string;
    officer_name?: StringWithAggregatesFilter<'loan_officer'> | string;
    experience?: IntWithAggregatesFilter<'loan_officer'> | number;
    qualification?: StringWithAggregatesFilter<'loan_officer'> | string;
    bank_id?: UuidWithAggregatesFilter<'loan_officer'> | string;
    user_id?: UuidWithAggregatesFilter<'loan_officer'> | string;
    created_at?: DateTimeWithAggregatesFilter<'loan_officer'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'loan_officer'> | Date | string;
  };

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[];
    OR?: userWhereInput[];
    NOT?: userWhereInput | userWhereInput[];
    id?: UuidFilter<'user'> | string;
    email?: StringFilter<'user'> | string;
    firstName?: StringNullableFilter<'user'> | string | null;
    lastName?: StringNullableFilter<'user'> | string | null;
    roq_user_id?: StringFilter<'user'> | string;
    tenant_id?: StringFilter<'user'> | string;
    created_at?: DateTimeFilter<'user'> | Date | string;
    updated_at?: DateTimeFilter<'user'> | Date | string;
    bank?: BankListRelationFilter;
    business_owner?: Business_ownerListRelationFilter;
    financial_advisor?: Financial_advisorListRelationFilter;
    loan_officer?: Loan_officerListRelationFilter;
    vehicle_loan?: Vehicle_loanListRelationFilter;
  };

  export type userOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrderInput | SortOrder;
    lastName?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    bank?: bankOrderByRelationAggregateInput;
    business_owner?: business_ownerOrderByRelationAggregateInput;
    financial_advisor?: financial_advisorOrderByRelationAggregateInput;
    loan_officer?: loan_officerOrderByRelationAggregateInput;
    vehicle_loan?: vehicle_loanOrderByRelationAggregateInput;
  };

  export type userWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: userWhereInput | userWhereInput[];
      OR?: userWhereInput[];
      NOT?: userWhereInput | userWhereInput[];
      firstName?: StringNullableFilter<'user'> | string | null;
      lastName?: StringNullableFilter<'user'> | string | null;
      roq_user_id?: StringFilter<'user'> | string;
      tenant_id?: StringFilter<'user'> | string;
      created_at?: DateTimeFilter<'user'> | Date | string;
      updated_at?: DateTimeFilter<'user'> | Date | string;
      bank?: BankListRelationFilter;
      business_owner?: Business_ownerListRelationFilter;
      financial_advisor?: Financial_advisorListRelationFilter;
      loan_officer?: Loan_officerListRelationFilter;
      vehicle_loan?: Vehicle_loanListRelationFilter;
    },
    'id' | 'email'
  >;

  export type userOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrderInput | SortOrder;
    lastName?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: userCountOrderByAggregateInput;
    _max?: userMaxOrderByAggregateInput;
    _min?: userMinOrderByAggregateInput;
  };

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    OR?: userScalarWhereWithAggregatesInput[];
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'user'> | string;
    email?: StringWithAggregatesFilter<'user'> | string;
    firstName?: StringNullableWithAggregatesFilter<'user'> | string | null;
    lastName?: StringNullableWithAggregatesFilter<'user'> | string | null;
    roq_user_id?: StringWithAggregatesFilter<'user'> | string;
    tenant_id?: StringWithAggregatesFilter<'user'> | string;
    created_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
  };

  export type vehicle_loanWhereInput = {
    AND?: vehicle_loanWhereInput | vehicle_loanWhereInput[];
    OR?: vehicle_loanWhereInput[];
    NOT?: vehicle_loanWhereInput | vehicle_loanWhereInput[];
    id?: UuidFilter<'vehicle_loan'> | string;
    loan_amount?: IntFilter<'vehicle_loan'> | number;
    loan_duration?: IntFilter<'vehicle_loan'> | number;
    interest_rate?: IntFilter<'vehicle_loan'> | number;
    vehicle_type?: StringFilter<'vehicle_loan'> | string;
    bank_id?: UuidFilter<'vehicle_loan'> | string;
    user_id?: UuidFilter<'vehicle_loan'> | string;
    created_at?: DateTimeFilter<'vehicle_loan'> | Date | string;
    updated_at?: DateTimeFilter<'vehicle_loan'> | Date | string;
    bank?: XOR<BankRelationFilter, bankWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type vehicle_loanOrderByWithRelationInput = {
    id?: SortOrder;
    loan_amount?: SortOrder;
    loan_duration?: SortOrder;
    interest_rate?: SortOrder;
    vehicle_type?: SortOrder;
    bank_id?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    bank?: bankOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
  };

  export type vehicle_loanWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: vehicle_loanWhereInput | vehicle_loanWhereInput[];
      OR?: vehicle_loanWhereInput[];
      NOT?: vehicle_loanWhereInput | vehicle_loanWhereInput[];
      loan_amount?: IntFilter<'vehicle_loan'> | number;
      loan_duration?: IntFilter<'vehicle_loan'> | number;
      interest_rate?: IntFilter<'vehicle_loan'> | number;
      vehicle_type?: StringFilter<'vehicle_loan'> | string;
      bank_id?: UuidFilter<'vehicle_loan'> | string;
      user_id?: UuidFilter<'vehicle_loan'> | string;
      created_at?: DateTimeFilter<'vehicle_loan'> | Date | string;
      updated_at?: DateTimeFilter<'vehicle_loan'> | Date | string;
      bank?: XOR<BankRelationFilter, bankWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type vehicle_loanOrderByWithAggregationInput = {
    id?: SortOrder;
    loan_amount?: SortOrder;
    loan_duration?: SortOrder;
    interest_rate?: SortOrder;
    vehicle_type?: SortOrder;
    bank_id?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: vehicle_loanCountOrderByAggregateInput;
    _avg?: vehicle_loanAvgOrderByAggregateInput;
    _max?: vehicle_loanMaxOrderByAggregateInput;
    _min?: vehicle_loanMinOrderByAggregateInput;
    _sum?: vehicle_loanSumOrderByAggregateInput;
  };

  export type vehicle_loanScalarWhereWithAggregatesInput = {
    AND?: vehicle_loanScalarWhereWithAggregatesInput | vehicle_loanScalarWhereWithAggregatesInput[];
    OR?: vehicle_loanScalarWhereWithAggregatesInput[];
    NOT?: vehicle_loanScalarWhereWithAggregatesInput | vehicle_loanScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'vehicle_loan'> | string;
    loan_amount?: IntWithAggregatesFilter<'vehicle_loan'> | number;
    loan_duration?: IntWithAggregatesFilter<'vehicle_loan'> | number;
    interest_rate?: IntWithAggregatesFilter<'vehicle_loan'> | number;
    vehicle_type?: StringWithAggregatesFilter<'vehicle_loan'> | string;
    bank_id?: UuidWithAggregatesFilter<'vehicle_loan'> | string;
    user_id?: UuidWithAggregatesFilter<'vehicle_loan'> | string;
    created_at?: DateTimeWithAggregatesFilter<'vehicle_loan'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'vehicle_loan'> | Date | string;
  };

  export type bankCreateInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    user: userCreateNestedOneWithoutBankInput;
    loan_officer?: loan_officerCreateNestedManyWithoutBankInput;
    vehicle_loan?: vehicle_loanCreateNestedManyWithoutBankInput;
  };

  export type bankUncheckedCreateInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
    loan_officer?: loan_officerUncheckedCreateNestedManyWithoutBankInput;
    vehicle_loan?: vehicle_loanUncheckedCreateNestedManyWithoutBankInput;
  };

  export type bankUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    user?: userUpdateOneRequiredWithoutBankNestedInput;
    loan_officer?: loan_officerUpdateManyWithoutBankNestedInput;
    vehicle_loan?: vehicle_loanUpdateManyWithoutBankNestedInput;
  };

  export type bankUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    loan_officer?: loan_officerUncheckedUpdateManyWithoutBankNestedInput;
    vehicle_loan?: vehicle_loanUncheckedUpdateManyWithoutBankNestedInput;
  };

  export type bankCreateManyInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
  };

  export type bankUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type bankUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type business_ownerCreateInput = {
    id?: string;
    business_name: string;
    business_type: string;
    business_location: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutBusiness_ownerInput;
  };

  export type business_ownerUncheckedCreateInput = {
    id?: string;
    business_name: string;
    business_type: string;
    business_location: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type business_ownerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    business_name?: StringFieldUpdateOperationsInput | string;
    business_type?: StringFieldUpdateOperationsInput | string;
    business_location?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutBusiness_ownerNestedInput;
  };

  export type business_ownerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    business_name?: StringFieldUpdateOperationsInput | string;
    business_type?: StringFieldUpdateOperationsInput | string;
    business_location?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type business_ownerCreateManyInput = {
    id?: string;
    business_name: string;
    business_type: string;
    business_location: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type business_ownerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    business_name?: StringFieldUpdateOperationsInput | string;
    business_type?: StringFieldUpdateOperationsInput | string;
    business_location?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type business_ownerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    business_name?: StringFieldUpdateOperationsInput | string;
    business_type?: StringFieldUpdateOperationsInput | string;
    business_location?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type financial_advisorCreateInput = {
    id?: string;
    advisor_name: string;
    experience: number;
    qualification: string;
    specialization: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutFinancial_advisorInput;
  };

  export type financial_advisorUncheckedCreateInput = {
    id?: string;
    advisor_name: string;
    experience: number;
    qualification: string;
    specialization: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type financial_advisorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    advisor_name?: StringFieldUpdateOperationsInput | string;
    experience?: IntFieldUpdateOperationsInput | number;
    qualification?: StringFieldUpdateOperationsInput | string;
    specialization?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutFinancial_advisorNestedInput;
  };

  export type financial_advisorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    advisor_name?: StringFieldUpdateOperationsInput | string;
    experience?: IntFieldUpdateOperationsInput | number;
    qualification?: StringFieldUpdateOperationsInput | string;
    specialization?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type financial_advisorCreateManyInput = {
    id?: string;
    advisor_name: string;
    experience: number;
    qualification: string;
    specialization: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type financial_advisorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    advisor_name?: StringFieldUpdateOperationsInput | string;
    experience?: IntFieldUpdateOperationsInput | number;
    qualification?: StringFieldUpdateOperationsInput | string;
    specialization?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type financial_advisorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    advisor_name?: StringFieldUpdateOperationsInput | string;
    experience?: IntFieldUpdateOperationsInput | number;
    qualification?: StringFieldUpdateOperationsInput | string;
    specialization?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type loan_officerCreateInput = {
    id?: string;
    officer_name: string;
    experience: number;
    qualification: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    bank: bankCreateNestedOneWithoutLoan_officerInput;
    user: userCreateNestedOneWithoutLoan_officerInput;
  };

  export type loan_officerUncheckedCreateInput = {
    id?: string;
    officer_name: string;
    experience: number;
    qualification: string;
    bank_id: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type loan_officerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    officer_name?: StringFieldUpdateOperationsInput | string;
    experience?: IntFieldUpdateOperationsInput | number;
    qualification?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    bank?: bankUpdateOneRequiredWithoutLoan_officerNestedInput;
    user?: userUpdateOneRequiredWithoutLoan_officerNestedInput;
  };

  export type loan_officerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    officer_name?: StringFieldUpdateOperationsInput | string;
    experience?: IntFieldUpdateOperationsInput | number;
    qualification?: StringFieldUpdateOperationsInput | string;
    bank_id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type loan_officerCreateManyInput = {
    id?: string;
    officer_name: string;
    experience: number;
    qualification: string;
    bank_id: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type loan_officerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    officer_name?: StringFieldUpdateOperationsInput | string;
    experience?: IntFieldUpdateOperationsInput | number;
    qualification?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type loan_officerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    officer_name?: StringFieldUpdateOperationsInput | string;
    experience?: IntFieldUpdateOperationsInput | number;
    qualification?: StringFieldUpdateOperationsInput | string;
    bank_id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userCreateInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    bank?: bankCreateNestedManyWithoutUserInput;
    business_owner?: business_ownerCreateNestedManyWithoutUserInput;
    financial_advisor?: financial_advisorCreateNestedManyWithoutUserInput;
    loan_officer?: loan_officerCreateNestedManyWithoutUserInput;
    vehicle_loan?: vehicle_loanCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    bank?: bankUncheckedCreateNestedManyWithoutUserInput;
    business_owner?: business_ownerUncheckedCreateNestedManyWithoutUserInput;
    financial_advisor?: financial_advisorUncheckedCreateNestedManyWithoutUserInput;
    loan_officer?: loan_officerUncheckedCreateNestedManyWithoutUserInput;
    vehicle_loan?: vehicle_loanUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    bank?: bankUpdateManyWithoutUserNestedInput;
    business_owner?: business_ownerUpdateManyWithoutUserNestedInput;
    financial_advisor?: financial_advisorUpdateManyWithoutUserNestedInput;
    loan_officer?: loan_officerUpdateManyWithoutUserNestedInput;
    vehicle_loan?: vehicle_loanUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    bank?: bankUncheckedUpdateManyWithoutUserNestedInput;
    business_owner?: business_ownerUncheckedUpdateManyWithoutUserNestedInput;
    financial_advisor?: financial_advisorUncheckedUpdateManyWithoutUserNestedInput;
    loan_officer?: loan_officerUncheckedUpdateManyWithoutUserNestedInput;
    vehicle_loan?: vehicle_loanUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateManyInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type vehicle_loanCreateInput = {
    id?: string;
    loan_amount: number;
    loan_duration: number;
    interest_rate: number;
    vehicle_type: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    bank: bankCreateNestedOneWithoutVehicle_loanInput;
    user: userCreateNestedOneWithoutVehicle_loanInput;
  };

  export type vehicle_loanUncheckedCreateInput = {
    id?: string;
    loan_amount: number;
    loan_duration: number;
    interest_rate: number;
    vehicle_type: string;
    bank_id: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type vehicle_loanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    loan_amount?: IntFieldUpdateOperationsInput | number;
    loan_duration?: IntFieldUpdateOperationsInput | number;
    interest_rate?: IntFieldUpdateOperationsInput | number;
    vehicle_type?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    bank?: bankUpdateOneRequiredWithoutVehicle_loanNestedInput;
    user?: userUpdateOneRequiredWithoutVehicle_loanNestedInput;
  };

  export type vehicle_loanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    loan_amount?: IntFieldUpdateOperationsInput | number;
    loan_duration?: IntFieldUpdateOperationsInput | number;
    interest_rate?: IntFieldUpdateOperationsInput | number;
    vehicle_type?: StringFieldUpdateOperationsInput | string;
    bank_id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type vehicle_loanCreateManyInput = {
    id?: string;
    loan_amount: number;
    loan_duration: number;
    interest_rate: number;
    vehicle_type: string;
    bank_id: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type vehicle_loanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    loan_amount?: IntFieldUpdateOperationsInput | number;
    loan_duration?: IntFieldUpdateOperationsInput | number;
    interest_rate?: IntFieldUpdateOperationsInput | number;
    vehicle_type?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type vehicle_loanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    loan_amount?: IntFieldUpdateOperationsInput | number;
    loan_duration?: IntFieldUpdateOperationsInput | number;
    interest_rate?: IntFieldUpdateOperationsInput | number;
    vehicle_type?: StringFieldUpdateOperationsInput | string;
    bank_id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type UserRelationFilter = {
    is?: userWhereInput;
    isNot?: userWhereInput;
  };

  export type Loan_officerListRelationFilter = {
    every?: loan_officerWhereInput;
    some?: loan_officerWhereInput;
    none?: loan_officerWhereInput;
  };

  export type Vehicle_loanListRelationFilter = {
    every?: vehicle_loanWhereInput;
    some?: vehicle_loanWhereInput;
    none?: vehicle_loanWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type loan_officerOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type vehicle_loanOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type bankCountOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type bankMaxOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type bankMinOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type business_ownerCountOrderByAggregateInput = {
    id?: SortOrder;
    business_name?: SortOrder;
    business_type?: SortOrder;
    business_location?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type business_ownerMaxOrderByAggregateInput = {
    id?: SortOrder;
    business_name?: SortOrder;
    business_type?: SortOrder;
    business_location?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type business_ownerMinOrderByAggregateInput = {
    id?: SortOrder;
    business_name?: SortOrder;
    business_type?: SortOrder;
    business_location?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type financial_advisorCountOrderByAggregateInput = {
    id?: SortOrder;
    advisor_name?: SortOrder;
    experience?: SortOrder;
    qualification?: SortOrder;
    specialization?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type financial_advisorAvgOrderByAggregateInput = {
    experience?: SortOrder;
  };

  export type financial_advisorMaxOrderByAggregateInput = {
    id?: SortOrder;
    advisor_name?: SortOrder;
    experience?: SortOrder;
    qualification?: SortOrder;
    specialization?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type financial_advisorMinOrderByAggregateInput = {
    id?: SortOrder;
    advisor_name?: SortOrder;
    experience?: SortOrder;
    qualification?: SortOrder;
    specialization?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type financial_advisorSumOrderByAggregateInput = {
    experience?: SortOrder;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type BankRelationFilter = {
    is?: bankWhereInput;
    isNot?: bankWhereInput;
  };

  export type loan_officerCountOrderByAggregateInput = {
    id?: SortOrder;
    officer_name?: SortOrder;
    experience?: SortOrder;
    qualification?: SortOrder;
    bank_id?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type loan_officerAvgOrderByAggregateInput = {
    experience?: SortOrder;
  };

  export type loan_officerMaxOrderByAggregateInput = {
    id?: SortOrder;
    officer_name?: SortOrder;
    experience?: SortOrder;
    qualification?: SortOrder;
    bank_id?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type loan_officerMinOrderByAggregateInput = {
    id?: SortOrder;
    officer_name?: SortOrder;
    experience?: SortOrder;
    qualification?: SortOrder;
    bank_id?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type loan_officerSumOrderByAggregateInput = {
    experience?: SortOrder;
  };

  export type BankListRelationFilter = {
    every?: bankWhereInput;
    some?: bankWhereInput;
    none?: bankWhereInput;
  };

  export type Business_ownerListRelationFilter = {
    every?: business_ownerWhereInput;
    some?: business_ownerWhereInput;
    none?: business_ownerWhereInput;
  };

  export type Financial_advisorListRelationFilter = {
    every?: financial_advisorWhereInput;
    some?: financial_advisorWhereInput;
    none?: financial_advisorWhereInput;
  };

  export type bankOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type business_ownerOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type financial_advisorOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type userCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type vehicle_loanCountOrderByAggregateInput = {
    id?: SortOrder;
    loan_amount?: SortOrder;
    loan_duration?: SortOrder;
    interest_rate?: SortOrder;
    vehicle_type?: SortOrder;
    bank_id?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type vehicle_loanAvgOrderByAggregateInput = {
    loan_amount?: SortOrder;
    loan_duration?: SortOrder;
    interest_rate?: SortOrder;
  };

  export type vehicle_loanMaxOrderByAggregateInput = {
    id?: SortOrder;
    loan_amount?: SortOrder;
    loan_duration?: SortOrder;
    interest_rate?: SortOrder;
    vehicle_type?: SortOrder;
    bank_id?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type vehicle_loanMinOrderByAggregateInput = {
    id?: SortOrder;
    loan_amount?: SortOrder;
    loan_duration?: SortOrder;
    interest_rate?: SortOrder;
    vehicle_type?: SortOrder;
    bank_id?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type vehicle_loanSumOrderByAggregateInput = {
    loan_amount?: SortOrder;
    loan_duration?: SortOrder;
    interest_rate?: SortOrder;
  };

  export type userCreateNestedOneWithoutBankInput = {
    create?: XOR<userCreateWithoutBankInput, userUncheckedCreateWithoutBankInput>;
    connectOrCreate?: userCreateOrConnectWithoutBankInput;
    connect?: userWhereUniqueInput;
  };

  export type loan_officerCreateNestedManyWithoutBankInput = {
    create?:
      | XOR<loan_officerCreateWithoutBankInput, loan_officerUncheckedCreateWithoutBankInput>
      | loan_officerCreateWithoutBankInput[]
      | loan_officerUncheckedCreateWithoutBankInput[];
    connectOrCreate?: loan_officerCreateOrConnectWithoutBankInput | loan_officerCreateOrConnectWithoutBankInput[];
    createMany?: loan_officerCreateManyBankInputEnvelope;
    connect?: loan_officerWhereUniqueInput | loan_officerWhereUniqueInput[];
  };

  export type vehicle_loanCreateNestedManyWithoutBankInput = {
    create?:
      | XOR<vehicle_loanCreateWithoutBankInput, vehicle_loanUncheckedCreateWithoutBankInput>
      | vehicle_loanCreateWithoutBankInput[]
      | vehicle_loanUncheckedCreateWithoutBankInput[];
    connectOrCreate?: vehicle_loanCreateOrConnectWithoutBankInput | vehicle_loanCreateOrConnectWithoutBankInput[];
    createMany?: vehicle_loanCreateManyBankInputEnvelope;
    connect?: vehicle_loanWhereUniqueInput | vehicle_loanWhereUniqueInput[];
  };

  export type loan_officerUncheckedCreateNestedManyWithoutBankInput = {
    create?:
      | XOR<loan_officerCreateWithoutBankInput, loan_officerUncheckedCreateWithoutBankInput>
      | loan_officerCreateWithoutBankInput[]
      | loan_officerUncheckedCreateWithoutBankInput[];
    connectOrCreate?: loan_officerCreateOrConnectWithoutBankInput | loan_officerCreateOrConnectWithoutBankInput[];
    createMany?: loan_officerCreateManyBankInputEnvelope;
    connect?: loan_officerWhereUniqueInput | loan_officerWhereUniqueInput[];
  };

  export type vehicle_loanUncheckedCreateNestedManyWithoutBankInput = {
    create?:
      | XOR<vehicle_loanCreateWithoutBankInput, vehicle_loanUncheckedCreateWithoutBankInput>
      | vehicle_loanCreateWithoutBankInput[]
      | vehicle_loanUncheckedCreateWithoutBankInput[];
    connectOrCreate?: vehicle_loanCreateOrConnectWithoutBankInput | vehicle_loanCreateOrConnectWithoutBankInput[];
    createMany?: vehicle_loanCreateManyBankInputEnvelope;
    connect?: vehicle_loanWhereUniqueInput | vehicle_loanWhereUniqueInput[];
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type userUpdateOneRequiredWithoutBankNestedInput = {
    create?: XOR<userCreateWithoutBankInput, userUncheckedCreateWithoutBankInput>;
    connectOrCreate?: userCreateOrConnectWithoutBankInput;
    upsert?: userUpsertWithoutBankInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutBankInput, userUpdateWithoutBankInput>,
      userUncheckedUpdateWithoutBankInput
    >;
  };

  export type loan_officerUpdateManyWithoutBankNestedInput = {
    create?:
      | XOR<loan_officerCreateWithoutBankInput, loan_officerUncheckedCreateWithoutBankInput>
      | loan_officerCreateWithoutBankInput[]
      | loan_officerUncheckedCreateWithoutBankInput[];
    connectOrCreate?: loan_officerCreateOrConnectWithoutBankInput | loan_officerCreateOrConnectWithoutBankInput[];
    upsert?: loan_officerUpsertWithWhereUniqueWithoutBankInput | loan_officerUpsertWithWhereUniqueWithoutBankInput[];
    createMany?: loan_officerCreateManyBankInputEnvelope;
    set?: loan_officerWhereUniqueInput | loan_officerWhereUniqueInput[];
    disconnect?: loan_officerWhereUniqueInput | loan_officerWhereUniqueInput[];
    delete?: loan_officerWhereUniqueInput | loan_officerWhereUniqueInput[];
    connect?: loan_officerWhereUniqueInput | loan_officerWhereUniqueInput[];
    update?: loan_officerUpdateWithWhereUniqueWithoutBankInput | loan_officerUpdateWithWhereUniqueWithoutBankInput[];
    updateMany?: loan_officerUpdateManyWithWhereWithoutBankInput | loan_officerUpdateManyWithWhereWithoutBankInput[];
    deleteMany?: loan_officerScalarWhereInput | loan_officerScalarWhereInput[];
  };

  export type vehicle_loanUpdateManyWithoutBankNestedInput = {
    create?:
      | XOR<vehicle_loanCreateWithoutBankInput, vehicle_loanUncheckedCreateWithoutBankInput>
      | vehicle_loanCreateWithoutBankInput[]
      | vehicle_loanUncheckedCreateWithoutBankInput[];
    connectOrCreate?: vehicle_loanCreateOrConnectWithoutBankInput | vehicle_loanCreateOrConnectWithoutBankInput[];
    upsert?: vehicle_loanUpsertWithWhereUniqueWithoutBankInput | vehicle_loanUpsertWithWhereUniqueWithoutBankInput[];
    createMany?: vehicle_loanCreateManyBankInputEnvelope;
    set?: vehicle_loanWhereUniqueInput | vehicle_loanWhereUniqueInput[];
    disconnect?: vehicle_loanWhereUniqueInput | vehicle_loanWhereUniqueInput[];
    delete?: vehicle_loanWhereUniqueInput | vehicle_loanWhereUniqueInput[];
    connect?: vehicle_loanWhereUniqueInput | vehicle_loanWhereUniqueInput[];
    update?: vehicle_loanUpdateWithWhereUniqueWithoutBankInput | vehicle_loanUpdateWithWhereUniqueWithoutBankInput[];
    updateMany?: vehicle_loanUpdateManyWithWhereWithoutBankInput | vehicle_loanUpdateManyWithWhereWithoutBankInput[];
    deleteMany?: vehicle_loanScalarWhereInput | vehicle_loanScalarWhereInput[];
  };

  export type loan_officerUncheckedUpdateManyWithoutBankNestedInput = {
    create?:
      | XOR<loan_officerCreateWithoutBankInput, loan_officerUncheckedCreateWithoutBankInput>
      | loan_officerCreateWithoutBankInput[]
      | loan_officerUncheckedCreateWithoutBankInput[];
    connectOrCreate?: loan_officerCreateOrConnectWithoutBankInput | loan_officerCreateOrConnectWithoutBankInput[];
    upsert?: loan_officerUpsertWithWhereUniqueWithoutBankInput | loan_officerUpsertWithWhereUniqueWithoutBankInput[];
    createMany?: loan_officerCreateManyBankInputEnvelope;
    set?: loan_officerWhereUniqueInput | loan_officerWhereUniqueInput[];
    disconnect?: loan_officerWhereUniqueInput | loan_officerWhereUniqueInput[];
    delete?: loan_officerWhereUniqueInput | loan_officerWhereUniqueInput[];
    connect?: loan_officerWhereUniqueInput | loan_officerWhereUniqueInput[];
    update?: loan_officerUpdateWithWhereUniqueWithoutBankInput | loan_officerUpdateWithWhereUniqueWithoutBankInput[];
    updateMany?: loan_officerUpdateManyWithWhereWithoutBankInput | loan_officerUpdateManyWithWhereWithoutBankInput[];
    deleteMany?: loan_officerScalarWhereInput | loan_officerScalarWhereInput[];
  };

  export type vehicle_loanUncheckedUpdateManyWithoutBankNestedInput = {
    create?:
      | XOR<vehicle_loanCreateWithoutBankInput, vehicle_loanUncheckedCreateWithoutBankInput>
      | vehicle_loanCreateWithoutBankInput[]
      | vehicle_loanUncheckedCreateWithoutBankInput[];
    connectOrCreate?: vehicle_loanCreateOrConnectWithoutBankInput | vehicle_loanCreateOrConnectWithoutBankInput[];
    upsert?: vehicle_loanUpsertWithWhereUniqueWithoutBankInput | vehicle_loanUpsertWithWhereUniqueWithoutBankInput[];
    createMany?: vehicle_loanCreateManyBankInputEnvelope;
    set?: vehicle_loanWhereUniqueInput | vehicle_loanWhereUniqueInput[];
    disconnect?: vehicle_loanWhereUniqueInput | vehicle_loanWhereUniqueInput[];
    delete?: vehicle_loanWhereUniqueInput | vehicle_loanWhereUniqueInput[];
    connect?: vehicle_loanWhereUniqueInput | vehicle_loanWhereUniqueInput[];
    update?: vehicle_loanUpdateWithWhereUniqueWithoutBankInput | vehicle_loanUpdateWithWhereUniqueWithoutBankInput[];
    updateMany?: vehicle_loanUpdateManyWithWhereWithoutBankInput | vehicle_loanUpdateManyWithWhereWithoutBankInput[];
    deleteMany?: vehicle_loanScalarWhereInput | vehicle_loanScalarWhereInput[];
  };

  export type userCreateNestedOneWithoutBusiness_ownerInput = {
    create?: XOR<userCreateWithoutBusiness_ownerInput, userUncheckedCreateWithoutBusiness_ownerInput>;
    connectOrCreate?: userCreateOrConnectWithoutBusiness_ownerInput;
    connect?: userWhereUniqueInput;
  };

  export type userUpdateOneRequiredWithoutBusiness_ownerNestedInput = {
    create?: XOR<userCreateWithoutBusiness_ownerInput, userUncheckedCreateWithoutBusiness_ownerInput>;
    connectOrCreate?: userCreateOrConnectWithoutBusiness_ownerInput;
    upsert?: userUpsertWithoutBusiness_ownerInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutBusiness_ownerInput, userUpdateWithoutBusiness_ownerInput>,
      userUncheckedUpdateWithoutBusiness_ownerInput
    >;
  };

  export type userCreateNestedOneWithoutFinancial_advisorInput = {
    create?: XOR<userCreateWithoutFinancial_advisorInput, userUncheckedCreateWithoutFinancial_advisorInput>;
    connectOrCreate?: userCreateOrConnectWithoutFinancial_advisorInput;
    connect?: userWhereUniqueInput;
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type userUpdateOneRequiredWithoutFinancial_advisorNestedInput = {
    create?: XOR<userCreateWithoutFinancial_advisorInput, userUncheckedCreateWithoutFinancial_advisorInput>;
    connectOrCreate?: userCreateOrConnectWithoutFinancial_advisorInput;
    upsert?: userUpsertWithoutFinancial_advisorInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutFinancial_advisorInput, userUpdateWithoutFinancial_advisorInput>,
      userUncheckedUpdateWithoutFinancial_advisorInput
    >;
  };

  export type bankCreateNestedOneWithoutLoan_officerInput = {
    create?: XOR<bankCreateWithoutLoan_officerInput, bankUncheckedCreateWithoutLoan_officerInput>;
    connectOrCreate?: bankCreateOrConnectWithoutLoan_officerInput;
    connect?: bankWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutLoan_officerInput = {
    create?: XOR<userCreateWithoutLoan_officerInput, userUncheckedCreateWithoutLoan_officerInput>;
    connectOrCreate?: userCreateOrConnectWithoutLoan_officerInput;
    connect?: userWhereUniqueInput;
  };

  export type bankUpdateOneRequiredWithoutLoan_officerNestedInput = {
    create?: XOR<bankCreateWithoutLoan_officerInput, bankUncheckedCreateWithoutLoan_officerInput>;
    connectOrCreate?: bankCreateOrConnectWithoutLoan_officerInput;
    upsert?: bankUpsertWithoutLoan_officerInput;
    connect?: bankWhereUniqueInput;
    update?: XOR<
      XOR<bankUpdateToOneWithWhereWithoutLoan_officerInput, bankUpdateWithoutLoan_officerInput>,
      bankUncheckedUpdateWithoutLoan_officerInput
    >;
  };

  export type userUpdateOneRequiredWithoutLoan_officerNestedInput = {
    create?: XOR<userCreateWithoutLoan_officerInput, userUncheckedCreateWithoutLoan_officerInput>;
    connectOrCreate?: userCreateOrConnectWithoutLoan_officerInput;
    upsert?: userUpsertWithoutLoan_officerInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutLoan_officerInput, userUpdateWithoutLoan_officerInput>,
      userUncheckedUpdateWithoutLoan_officerInput
    >;
  };

  export type bankCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<bankCreateWithoutUserInput, bankUncheckedCreateWithoutUserInput>
      | bankCreateWithoutUserInput[]
      | bankUncheckedCreateWithoutUserInput[];
    connectOrCreate?: bankCreateOrConnectWithoutUserInput | bankCreateOrConnectWithoutUserInput[];
    createMany?: bankCreateManyUserInputEnvelope;
    connect?: bankWhereUniqueInput | bankWhereUniqueInput[];
  };

  export type business_ownerCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<business_ownerCreateWithoutUserInput, business_ownerUncheckedCreateWithoutUserInput>
      | business_ownerCreateWithoutUserInput[]
      | business_ownerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: business_ownerCreateOrConnectWithoutUserInput | business_ownerCreateOrConnectWithoutUserInput[];
    createMany?: business_ownerCreateManyUserInputEnvelope;
    connect?: business_ownerWhereUniqueInput | business_ownerWhereUniqueInput[];
  };

  export type financial_advisorCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<financial_advisorCreateWithoutUserInput, financial_advisorUncheckedCreateWithoutUserInput>
      | financial_advisorCreateWithoutUserInput[]
      | financial_advisorUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | financial_advisorCreateOrConnectWithoutUserInput
      | financial_advisorCreateOrConnectWithoutUserInput[];
    createMany?: financial_advisorCreateManyUserInputEnvelope;
    connect?: financial_advisorWhereUniqueInput | financial_advisorWhereUniqueInput[];
  };

  export type loan_officerCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<loan_officerCreateWithoutUserInput, loan_officerUncheckedCreateWithoutUserInput>
      | loan_officerCreateWithoutUserInput[]
      | loan_officerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: loan_officerCreateOrConnectWithoutUserInput | loan_officerCreateOrConnectWithoutUserInput[];
    createMany?: loan_officerCreateManyUserInputEnvelope;
    connect?: loan_officerWhereUniqueInput | loan_officerWhereUniqueInput[];
  };

  export type vehicle_loanCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<vehicle_loanCreateWithoutUserInput, vehicle_loanUncheckedCreateWithoutUserInput>
      | vehicle_loanCreateWithoutUserInput[]
      | vehicle_loanUncheckedCreateWithoutUserInput[];
    connectOrCreate?: vehicle_loanCreateOrConnectWithoutUserInput | vehicle_loanCreateOrConnectWithoutUserInput[];
    createMany?: vehicle_loanCreateManyUserInputEnvelope;
    connect?: vehicle_loanWhereUniqueInput | vehicle_loanWhereUniqueInput[];
  };

  export type bankUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<bankCreateWithoutUserInput, bankUncheckedCreateWithoutUserInput>
      | bankCreateWithoutUserInput[]
      | bankUncheckedCreateWithoutUserInput[];
    connectOrCreate?: bankCreateOrConnectWithoutUserInput | bankCreateOrConnectWithoutUserInput[];
    createMany?: bankCreateManyUserInputEnvelope;
    connect?: bankWhereUniqueInput | bankWhereUniqueInput[];
  };

  export type business_ownerUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<business_ownerCreateWithoutUserInput, business_ownerUncheckedCreateWithoutUserInput>
      | business_ownerCreateWithoutUserInput[]
      | business_ownerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: business_ownerCreateOrConnectWithoutUserInput | business_ownerCreateOrConnectWithoutUserInput[];
    createMany?: business_ownerCreateManyUserInputEnvelope;
    connect?: business_ownerWhereUniqueInput | business_ownerWhereUniqueInput[];
  };

  export type financial_advisorUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<financial_advisorCreateWithoutUserInput, financial_advisorUncheckedCreateWithoutUserInput>
      | financial_advisorCreateWithoutUserInput[]
      | financial_advisorUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | financial_advisorCreateOrConnectWithoutUserInput
      | financial_advisorCreateOrConnectWithoutUserInput[];
    createMany?: financial_advisorCreateManyUserInputEnvelope;
    connect?: financial_advisorWhereUniqueInput | financial_advisorWhereUniqueInput[];
  };

  export type loan_officerUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<loan_officerCreateWithoutUserInput, loan_officerUncheckedCreateWithoutUserInput>
      | loan_officerCreateWithoutUserInput[]
      | loan_officerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: loan_officerCreateOrConnectWithoutUserInput | loan_officerCreateOrConnectWithoutUserInput[];
    createMany?: loan_officerCreateManyUserInputEnvelope;
    connect?: loan_officerWhereUniqueInput | loan_officerWhereUniqueInput[];
  };

  export type vehicle_loanUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<vehicle_loanCreateWithoutUserInput, vehicle_loanUncheckedCreateWithoutUserInput>
      | vehicle_loanCreateWithoutUserInput[]
      | vehicle_loanUncheckedCreateWithoutUserInput[];
    connectOrCreate?: vehicle_loanCreateOrConnectWithoutUserInput | vehicle_loanCreateOrConnectWithoutUserInput[];
    createMany?: vehicle_loanCreateManyUserInputEnvelope;
    connect?: vehicle_loanWhereUniqueInput | vehicle_loanWhereUniqueInput[];
  };

  export type bankUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<bankCreateWithoutUserInput, bankUncheckedCreateWithoutUserInput>
      | bankCreateWithoutUserInput[]
      | bankUncheckedCreateWithoutUserInput[];
    connectOrCreate?: bankCreateOrConnectWithoutUserInput | bankCreateOrConnectWithoutUserInput[];
    upsert?: bankUpsertWithWhereUniqueWithoutUserInput | bankUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: bankCreateManyUserInputEnvelope;
    set?: bankWhereUniqueInput | bankWhereUniqueInput[];
    disconnect?: bankWhereUniqueInput | bankWhereUniqueInput[];
    delete?: bankWhereUniqueInput | bankWhereUniqueInput[];
    connect?: bankWhereUniqueInput | bankWhereUniqueInput[];
    update?: bankUpdateWithWhereUniqueWithoutUserInput | bankUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: bankUpdateManyWithWhereWithoutUserInput | bankUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: bankScalarWhereInput | bankScalarWhereInput[];
  };

  export type business_ownerUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<business_ownerCreateWithoutUserInput, business_ownerUncheckedCreateWithoutUserInput>
      | business_ownerCreateWithoutUserInput[]
      | business_ownerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: business_ownerCreateOrConnectWithoutUserInput | business_ownerCreateOrConnectWithoutUserInput[];
    upsert?:
      | business_ownerUpsertWithWhereUniqueWithoutUserInput
      | business_ownerUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: business_ownerCreateManyUserInputEnvelope;
    set?: business_ownerWhereUniqueInput | business_ownerWhereUniqueInput[];
    disconnect?: business_ownerWhereUniqueInput | business_ownerWhereUniqueInput[];
    delete?: business_ownerWhereUniqueInput | business_ownerWhereUniqueInput[];
    connect?: business_ownerWhereUniqueInput | business_ownerWhereUniqueInput[];
    update?:
      | business_ownerUpdateWithWhereUniqueWithoutUserInput
      | business_ownerUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | business_ownerUpdateManyWithWhereWithoutUserInput
      | business_ownerUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: business_ownerScalarWhereInput | business_ownerScalarWhereInput[];
  };

  export type financial_advisorUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<financial_advisorCreateWithoutUserInput, financial_advisorUncheckedCreateWithoutUserInput>
      | financial_advisorCreateWithoutUserInput[]
      | financial_advisorUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | financial_advisorCreateOrConnectWithoutUserInput
      | financial_advisorCreateOrConnectWithoutUserInput[];
    upsert?:
      | financial_advisorUpsertWithWhereUniqueWithoutUserInput
      | financial_advisorUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: financial_advisorCreateManyUserInputEnvelope;
    set?: financial_advisorWhereUniqueInput | financial_advisorWhereUniqueInput[];
    disconnect?: financial_advisorWhereUniqueInput | financial_advisorWhereUniqueInput[];
    delete?: financial_advisorWhereUniqueInput | financial_advisorWhereUniqueInput[];
    connect?: financial_advisorWhereUniqueInput | financial_advisorWhereUniqueInput[];
    update?:
      | financial_advisorUpdateWithWhereUniqueWithoutUserInput
      | financial_advisorUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | financial_advisorUpdateManyWithWhereWithoutUserInput
      | financial_advisorUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: financial_advisorScalarWhereInput | financial_advisorScalarWhereInput[];
  };

  export type loan_officerUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<loan_officerCreateWithoutUserInput, loan_officerUncheckedCreateWithoutUserInput>
      | loan_officerCreateWithoutUserInput[]
      | loan_officerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: loan_officerCreateOrConnectWithoutUserInput | loan_officerCreateOrConnectWithoutUserInput[];
    upsert?: loan_officerUpsertWithWhereUniqueWithoutUserInput | loan_officerUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: loan_officerCreateManyUserInputEnvelope;
    set?: loan_officerWhereUniqueInput | loan_officerWhereUniqueInput[];
    disconnect?: loan_officerWhereUniqueInput | loan_officerWhereUniqueInput[];
    delete?: loan_officerWhereUniqueInput | loan_officerWhereUniqueInput[];
    connect?: loan_officerWhereUniqueInput | loan_officerWhereUniqueInput[];
    update?: loan_officerUpdateWithWhereUniqueWithoutUserInput | loan_officerUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: loan_officerUpdateManyWithWhereWithoutUserInput | loan_officerUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: loan_officerScalarWhereInput | loan_officerScalarWhereInput[];
  };

  export type vehicle_loanUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<vehicle_loanCreateWithoutUserInput, vehicle_loanUncheckedCreateWithoutUserInput>
      | vehicle_loanCreateWithoutUserInput[]
      | vehicle_loanUncheckedCreateWithoutUserInput[];
    connectOrCreate?: vehicle_loanCreateOrConnectWithoutUserInput | vehicle_loanCreateOrConnectWithoutUserInput[];
    upsert?: vehicle_loanUpsertWithWhereUniqueWithoutUserInput | vehicle_loanUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: vehicle_loanCreateManyUserInputEnvelope;
    set?: vehicle_loanWhereUniqueInput | vehicle_loanWhereUniqueInput[];
    disconnect?: vehicle_loanWhereUniqueInput | vehicle_loanWhereUniqueInput[];
    delete?: vehicle_loanWhereUniqueInput | vehicle_loanWhereUniqueInput[];
    connect?: vehicle_loanWhereUniqueInput | vehicle_loanWhereUniqueInput[];
    update?: vehicle_loanUpdateWithWhereUniqueWithoutUserInput | vehicle_loanUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: vehicle_loanUpdateManyWithWhereWithoutUserInput | vehicle_loanUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: vehicle_loanScalarWhereInput | vehicle_loanScalarWhereInput[];
  };

  export type bankUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<bankCreateWithoutUserInput, bankUncheckedCreateWithoutUserInput>
      | bankCreateWithoutUserInput[]
      | bankUncheckedCreateWithoutUserInput[];
    connectOrCreate?: bankCreateOrConnectWithoutUserInput | bankCreateOrConnectWithoutUserInput[];
    upsert?: bankUpsertWithWhereUniqueWithoutUserInput | bankUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: bankCreateManyUserInputEnvelope;
    set?: bankWhereUniqueInput | bankWhereUniqueInput[];
    disconnect?: bankWhereUniqueInput | bankWhereUniqueInput[];
    delete?: bankWhereUniqueInput | bankWhereUniqueInput[];
    connect?: bankWhereUniqueInput | bankWhereUniqueInput[];
    update?: bankUpdateWithWhereUniqueWithoutUserInput | bankUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: bankUpdateManyWithWhereWithoutUserInput | bankUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: bankScalarWhereInput | bankScalarWhereInput[];
  };

  export type business_ownerUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<business_ownerCreateWithoutUserInput, business_ownerUncheckedCreateWithoutUserInput>
      | business_ownerCreateWithoutUserInput[]
      | business_ownerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: business_ownerCreateOrConnectWithoutUserInput | business_ownerCreateOrConnectWithoutUserInput[];
    upsert?:
      | business_ownerUpsertWithWhereUniqueWithoutUserInput
      | business_ownerUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: business_ownerCreateManyUserInputEnvelope;
    set?: business_ownerWhereUniqueInput | business_ownerWhereUniqueInput[];
    disconnect?: business_ownerWhereUniqueInput | business_ownerWhereUniqueInput[];
    delete?: business_ownerWhereUniqueInput | business_ownerWhereUniqueInput[];
    connect?: business_ownerWhereUniqueInput | business_ownerWhereUniqueInput[];
    update?:
      | business_ownerUpdateWithWhereUniqueWithoutUserInput
      | business_ownerUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | business_ownerUpdateManyWithWhereWithoutUserInput
      | business_ownerUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: business_ownerScalarWhereInput | business_ownerScalarWhereInput[];
  };

  export type financial_advisorUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<financial_advisorCreateWithoutUserInput, financial_advisorUncheckedCreateWithoutUserInput>
      | financial_advisorCreateWithoutUserInput[]
      | financial_advisorUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | financial_advisorCreateOrConnectWithoutUserInput
      | financial_advisorCreateOrConnectWithoutUserInput[];
    upsert?:
      | financial_advisorUpsertWithWhereUniqueWithoutUserInput
      | financial_advisorUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: financial_advisorCreateManyUserInputEnvelope;
    set?: financial_advisorWhereUniqueInput | financial_advisorWhereUniqueInput[];
    disconnect?: financial_advisorWhereUniqueInput | financial_advisorWhereUniqueInput[];
    delete?: financial_advisorWhereUniqueInput | financial_advisorWhereUniqueInput[];
    connect?: financial_advisorWhereUniqueInput | financial_advisorWhereUniqueInput[];
    update?:
      | financial_advisorUpdateWithWhereUniqueWithoutUserInput
      | financial_advisorUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | financial_advisorUpdateManyWithWhereWithoutUserInput
      | financial_advisorUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: financial_advisorScalarWhereInput | financial_advisorScalarWhereInput[];
  };

  export type loan_officerUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<loan_officerCreateWithoutUserInput, loan_officerUncheckedCreateWithoutUserInput>
      | loan_officerCreateWithoutUserInput[]
      | loan_officerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: loan_officerCreateOrConnectWithoutUserInput | loan_officerCreateOrConnectWithoutUserInput[];
    upsert?: loan_officerUpsertWithWhereUniqueWithoutUserInput | loan_officerUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: loan_officerCreateManyUserInputEnvelope;
    set?: loan_officerWhereUniqueInput | loan_officerWhereUniqueInput[];
    disconnect?: loan_officerWhereUniqueInput | loan_officerWhereUniqueInput[];
    delete?: loan_officerWhereUniqueInput | loan_officerWhereUniqueInput[];
    connect?: loan_officerWhereUniqueInput | loan_officerWhereUniqueInput[];
    update?: loan_officerUpdateWithWhereUniqueWithoutUserInput | loan_officerUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: loan_officerUpdateManyWithWhereWithoutUserInput | loan_officerUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: loan_officerScalarWhereInput | loan_officerScalarWhereInput[];
  };

  export type vehicle_loanUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<vehicle_loanCreateWithoutUserInput, vehicle_loanUncheckedCreateWithoutUserInput>
      | vehicle_loanCreateWithoutUserInput[]
      | vehicle_loanUncheckedCreateWithoutUserInput[];
    connectOrCreate?: vehicle_loanCreateOrConnectWithoutUserInput | vehicle_loanCreateOrConnectWithoutUserInput[];
    upsert?: vehicle_loanUpsertWithWhereUniqueWithoutUserInput | vehicle_loanUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: vehicle_loanCreateManyUserInputEnvelope;
    set?: vehicle_loanWhereUniqueInput | vehicle_loanWhereUniqueInput[];
    disconnect?: vehicle_loanWhereUniqueInput | vehicle_loanWhereUniqueInput[];
    delete?: vehicle_loanWhereUniqueInput | vehicle_loanWhereUniqueInput[];
    connect?: vehicle_loanWhereUniqueInput | vehicle_loanWhereUniqueInput[];
    update?: vehicle_loanUpdateWithWhereUniqueWithoutUserInput | vehicle_loanUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: vehicle_loanUpdateManyWithWhereWithoutUserInput | vehicle_loanUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: vehicle_loanScalarWhereInput | vehicle_loanScalarWhereInput[];
  };

  export type bankCreateNestedOneWithoutVehicle_loanInput = {
    create?: XOR<bankCreateWithoutVehicle_loanInput, bankUncheckedCreateWithoutVehicle_loanInput>;
    connectOrCreate?: bankCreateOrConnectWithoutVehicle_loanInput;
    connect?: bankWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutVehicle_loanInput = {
    create?: XOR<userCreateWithoutVehicle_loanInput, userUncheckedCreateWithoutVehicle_loanInput>;
    connectOrCreate?: userCreateOrConnectWithoutVehicle_loanInput;
    connect?: userWhereUniqueInput;
  };

  export type bankUpdateOneRequiredWithoutVehicle_loanNestedInput = {
    create?: XOR<bankCreateWithoutVehicle_loanInput, bankUncheckedCreateWithoutVehicle_loanInput>;
    connectOrCreate?: bankCreateOrConnectWithoutVehicle_loanInput;
    upsert?: bankUpsertWithoutVehicle_loanInput;
    connect?: bankWhereUniqueInput;
    update?: XOR<
      XOR<bankUpdateToOneWithWhereWithoutVehicle_loanInput, bankUpdateWithoutVehicle_loanInput>,
      bankUncheckedUpdateWithoutVehicle_loanInput
    >;
  };

  export type userUpdateOneRequiredWithoutVehicle_loanNestedInput = {
    create?: XOR<userCreateWithoutVehicle_loanInput, userUncheckedCreateWithoutVehicle_loanInput>;
    connectOrCreate?: userCreateOrConnectWithoutVehicle_loanInput;
    upsert?: userUpsertWithoutVehicle_loanInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutVehicle_loanInput, userUpdateWithoutVehicle_loanInput>,
      userUncheckedUpdateWithoutVehicle_loanInput
    >;
  };

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type userCreateWithoutBankInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    business_owner?: business_ownerCreateNestedManyWithoutUserInput;
    financial_advisor?: financial_advisorCreateNestedManyWithoutUserInput;
    loan_officer?: loan_officerCreateNestedManyWithoutUserInput;
    vehicle_loan?: vehicle_loanCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutBankInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    business_owner?: business_ownerUncheckedCreateNestedManyWithoutUserInput;
    financial_advisor?: financial_advisorUncheckedCreateNestedManyWithoutUserInput;
    loan_officer?: loan_officerUncheckedCreateNestedManyWithoutUserInput;
    vehicle_loan?: vehicle_loanUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutBankInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutBankInput, userUncheckedCreateWithoutBankInput>;
  };

  export type loan_officerCreateWithoutBankInput = {
    id?: string;
    officer_name: string;
    experience: number;
    qualification: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutLoan_officerInput;
  };

  export type loan_officerUncheckedCreateWithoutBankInput = {
    id?: string;
    officer_name: string;
    experience: number;
    qualification: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type loan_officerCreateOrConnectWithoutBankInput = {
    where: loan_officerWhereUniqueInput;
    create: XOR<loan_officerCreateWithoutBankInput, loan_officerUncheckedCreateWithoutBankInput>;
  };

  export type loan_officerCreateManyBankInputEnvelope = {
    data: loan_officerCreateManyBankInput | loan_officerCreateManyBankInput[];
    skipDuplicates?: boolean;
  };

  export type vehicle_loanCreateWithoutBankInput = {
    id?: string;
    loan_amount: number;
    loan_duration: number;
    interest_rate: number;
    vehicle_type: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutVehicle_loanInput;
  };

  export type vehicle_loanUncheckedCreateWithoutBankInput = {
    id?: string;
    loan_amount: number;
    loan_duration: number;
    interest_rate: number;
    vehicle_type: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type vehicle_loanCreateOrConnectWithoutBankInput = {
    where: vehicle_loanWhereUniqueInput;
    create: XOR<vehicle_loanCreateWithoutBankInput, vehicle_loanUncheckedCreateWithoutBankInput>;
  };

  export type vehicle_loanCreateManyBankInputEnvelope = {
    data: vehicle_loanCreateManyBankInput | vehicle_loanCreateManyBankInput[];
    skipDuplicates?: boolean;
  };

  export type userUpsertWithoutBankInput = {
    update: XOR<userUpdateWithoutBankInput, userUncheckedUpdateWithoutBankInput>;
    create: XOR<userCreateWithoutBankInput, userUncheckedCreateWithoutBankInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutBankInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutBankInput, userUncheckedUpdateWithoutBankInput>;
  };

  export type userUpdateWithoutBankInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    business_owner?: business_ownerUpdateManyWithoutUserNestedInput;
    financial_advisor?: financial_advisorUpdateManyWithoutUserNestedInput;
    loan_officer?: loan_officerUpdateManyWithoutUserNestedInput;
    vehicle_loan?: vehicle_loanUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutBankInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    business_owner?: business_ownerUncheckedUpdateManyWithoutUserNestedInput;
    financial_advisor?: financial_advisorUncheckedUpdateManyWithoutUserNestedInput;
    loan_officer?: loan_officerUncheckedUpdateManyWithoutUserNestedInput;
    vehicle_loan?: vehicle_loanUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type loan_officerUpsertWithWhereUniqueWithoutBankInput = {
    where: loan_officerWhereUniqueInput;
    update: XOR<loan_officerUpdateWithoutBankInput, loan_officerUncheckedUpdateWithoutBankInput>;
    create: XOR<loan_officerCreateWithoutBankInput, loan_officerUncheckedCreateWithoutBankInput>;
  };

  export type loan_officerUpdateWithWhereUniqueWithoutBankInput = {
    where: loan_officerWhereUniqueInput;
    data: XOR<loan_officerUpdateWithoutBankInput, loan_officerUncheckedUpdateWithoutBankInput>;
  };

  export type loan_officerUpdateManyWithWhereWithoutBankInput = {
    where: loan_officerScalarWhereInput;
    data: XOR<loan_officerUpdateManyMutationInput, loan_officerUncheckedUpdateManyWithoutBankInput>;
  };

  export type loan_officerScalarWhereInput = {
    AND?: loan_officerScalarWhereInput | loan_officerScalarWhereInput[];
    OR?: loan_officerScalarWhereInput[];
    NOT?: loan_officerScalarWhereInput | loan_officerScalarWhereInput[];
    id?: UuidFilter<'loan_officer'> | string;
    officer_name?: StringFilter<'loan_officer'> | string;
    experience?: IntFilter<'loan_officer'> | number;
    qualification?: StringFilter<'loan_officer'> | string;
    bank_id?: UuidFilter<'loan_officer'> | string;
    user_id?: UuidFilter<'loan_officer'> | string;
    created_at?: DateTimeFilter<'loan_officer'> | Date | string;
    updated_at?: DateTimeFilter<'loan_officer'> | Date | string;
  };

  export type vehicle_loanUpsertWithWhereUniqueWithoutBankInput = {
    where: vehicle_loanWhereUniqueInput;
    update: XOR<vehicle_loanUpdateWithoutBankInput, vehicle_loanUncheckedUpdateWithoutBankInput>;
    create: XOR<vehicle_loanCreateWithoutBankInput, vehicle_loanUncheckedCreateWithoutBankInput>;
  };

  export type vehicle_loanUpdateWithWhereUniqueWithoutBankInput = {
    where: vehicle_loanWhereUniqueInput;
    data: XOR<vehicle_loanUpdateWithoutBankInput, vehicle_loanUncheckedUpdateWithoutBankInput>;
  };

  export type vehicle_loanUpdateManyWithWhereWithoutBankInput = {
    where: vehicle_loanScalarWhereInput;
    data: XOR<vehicle_loanUpdateManyMutationInput, vehicle_loanUncheckedUpdateManyWithoutBankInput>;
  };

  export type vehicle_loanScalarWhereInput = {
    AND?: vehicle_loanScalarWhereInput | vehicle_loanScalarWhereInput[];
    OR?: vehicle_loanScalarWhereInput[];
    NOT?: vehicle_loanScalarWhereInput | vehicle_loanScalarWhereInput[];
    id?: UuidFilter<'vehicle_loan'> | string;
    loan_amount?: IntFilter<'vehicle_loan'> | number;
    loan_duration?: IntFilter<'vehicle_loan'> | number;
    interest_rate?: IntFilter<'vehicle_loan'> | number;
    vehicle_type?: StringFilter<'vehicle_loan'> | string;
    bank_id?: UuidFilter<'vehicle_loan'> | string;
    user_id?: UuidFilter<'vehicle_loan'> | string;
    created_at?: DateTimeFilter<'vehicle_loan'> | Date | string;
    updated_at?: DateTimeFilter<'vehicle_loan'> | Date | string;
  };

  export type userCreateWithoutBusiness_ownerInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    bank?: bankCreateNestedManyWithoutUserInput;
    financial_advisor?: financial_advisorCreateNestedManyWithoutUserInput;
    loan_officer?: loan_officerCreateNestedManyWithoutUserInput;
    vehicle_loan?: vehicle_loanCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutBusiness_ownerInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    bank?: bankUncheckedCreateNestedManyWithoutUserInput;
    financial_advisor?: financial_advisorUncheckedCreateNestedManyWithoutUserInput;
    loan_officer?: loan_officerUncheckedCreateNestedManyWithoutUserInput;
    vehicle_loan?: vehicle_loanUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutBusiness_ownerInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutBusiness_ownerInput, userUncheckedCreateWithoutBusiness_ownerInput>;
  };

  export type userUpsertWithoutBusiness_ownerInput = {
    update: XOR<userUpdateWithoutBusiness_ownerInput, userUncheckedUpdateWithoutBusiness_ownerInput>;
    create: XOR<userCreateWithoutBusiness_ownerInput, userUncheckedCreateWithoutBusiness_ownerInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutBusiness_ownerInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutBusiness_ownerInput, userUncheckedUpdateWithoutBusiness_ownerInput>;
  };

  export type userUpdateWithoutBusiness_ownerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    bank?: bankUpdateManyWithoutUserNestedInput;
    financial_advisor?: financial_advisorUpdateManyWithoutUserNestedInput;
    loan_officer?: loan_officerUpdateManyWithoutUserNestedInput;
    vehicle_loan?: vehicle_loanUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutBusiness_ownerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    bank?: bankUncheckedUpdateManyWithoutUserNestedInput;
    financial_advisor?: financial_advisorUncheckedUpdateManyWithoutUserNestedInput;
    loan_officer?: loan_officerUncheckedUpdateManyWithoutUserNestedInput;
    vehicle_loan?: vehicle_loanUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateWithoutFinancial_advisorInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    bank?: bankCreateNestedManyWithoutUserInput;
    business_owner?: business_ownerCreateNestedManyWithoutUserInput;
    loan_officer?: loan_officerCreateNestedManyWithoutUserInput;
    vehicle_loan?: vehicle_loanCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutFinancial_advisorInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    bank?: bankUncheckedCreateNestedManyWithoutUserInput;
    business_owner?: business_ownerUncheckedCreateNestedManyWithoutUserInput;
    loan_officer?: loan_officerUncheckedCreateNestedManyWithoutUserInput;
    vehicle_loan?: vehicle_loanUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutFinancial_advisorInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutFinancial_advisorInput, userUncheckedCreateWithoutFinancial_advisorInput>;
  };

  export type userUpsertWithoutFinancial_advisorInput = {
    update: XOR<userUpdateWithoutFinancial_advisorInput, userUncheckedUpdateWithoutFinancial_advisorInput>;
    create: XOR<userCreateWithoutFinancial_advisorInput, userUncheckedCreateWithoutFinancial_advisorInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutFinancial_advisorInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutFinancial_advisorInput, userUncheckedUpdateWithoutFinancial_advisorInput>;
  };

  export type userUpdateWithoutFinancial_advisorInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    bank?: bankUpdateManyWithoutUserNestedInput;
    business_owner?: business_ownerUpdateManyWithoutUserNestedInput;
    loan_officer?: loan_officerUpdateManyWithoutUserNestedInput;
    vehicle_loan?: vehicle_loanUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutFinancial_advisorInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    bank?: bankUncheckedUpdateManyWithoutUserNestedInput;
    business_owner?: business_ownerUncheckedUpdateManyWithoutUserNestedInput;
    loan_officer?: loan_officerUncheckedUpdateManyWithoutUserNestedInput;
    vehicle_loan?: vehicle_loanUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type bankCreateWithoutLoan_officerInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    user: userCreateNestedOneWithoutBankInput;
    vehicle_loan?: vehicle_loanCreateNestedManyWithoutBankInput;
  };

  export type bankUncheckedCreateWithoutLoan_officerInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
    vehicle_loan?: vehicle_loanUncheckedCreateNestedManyWithoutBankInput;
  };

  export type bankCreateOrConnectWithoutLoan_officerInput = {
    where: bankWhereUniqueInput;
    create: XOR<bankCreateWithoutLoan_officerInput, bankUncheckedCreateWithoutLoan_officerInput>;
  };

  export type userCreateWithoutLoan_officerInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    bank?: bankCreateNestedManyWithoutUserInput;
    business_owner?: business_ownerCreateNestedManyWithoutUserInput;
    financial_advisor?: financial_advisorCreateNestedManyWithoutUserInput;
    vehicle_loan?: vehicle_loanCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutLoan_officerInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    bank?: bankUncheckedCreateNestedManyWithoutUserInput;
    business_owner?: business_ownerUncheckedCreateNestedManyWithoutUserInput;
    financial_advisor?: financial_advisorUncheckedCreateNestedManyWithoutUserInput;
    vehicle_loan?: vehicle_loanUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutLoan_officerInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutLoan_officerInput, userUncheckedCreateWithoutLoan_officerInput>;
  };

  export type bankUpsertWithoutLoan_officerInput = {
    update: XOR<bankUpdateWithoutLoan_officerInput, bankUncheckedUpdateWithoutLoan_officerInput>;
    create: XOR<bankCreateWithoutLoan_officerInput, bankUncheckedCreateWithoutLoan_officerInput>;
    where?: bankWhereInput;
  };

  export type bankUpdateToOneWithWhereWithoutLoan_officerInput = {
    where?: bankWhereInput;
    data: XOR<bankUpdateWithoutLoan_officerInput, bankUncheckedUpdateWithoutLoan_officerInput>;
  };

  export type bankUpdateWithoutLoan_officerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    user?: userUpdateOneRequiredWithoutBankNestedInput;
    vehicle_loan?: vehicle_loanUpdateManyWithoutBankNestedInput;
  };

  export type bankUncheckedUpdateWithoutLoan_officerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    vehicle_loan?: vehicle_loanUncheckedUpdateManyWithoutBankNestedInput;
  };

  export type userUpsertWithoutLoan_officerInput = {
    update: XOR<userUpdateWithoutLoan_officerInput, userUncheckedUpdateWithoutLoan_officerInput>;
    create: XOR<userCreateWithoutLoan_officerInput, userUncheckedCreateWithoutLoan_officerInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutLoan_officerInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutLoan_officerInput, userUncheckedUpdateWithoutLoan_officerInput>;
  };

  export type userUpdateWithoutLoan_officerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    bank?: bankUpdateManyWithoutUserNestedInput;
    business_owner?: business_ownerUpdateManyWithoutUserNestedInput;
    financial_advisor?: financial_advisorUpdateManyWithoutUserNestedInput;
    vehicle_loan?: vehicle_loanUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutLoan_officerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    bank?: bankUncheckedUpdateManyWithoutUserNestedInput;
    business_owner?: business_ownerUncheckedUpdateManyWithoutUserNestedInput;
    financial_advisor?: financial_advisorUncheckedUpdateManyWithoutUserNestedInput;
    vehicle_loan?: vehicle_loanUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type bankCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    loan_officer?: loan_officerCreateNestedManyWithoutBankInput;
    vehicle_loan?: vehicle_loanCreateNestedManyWithoutBankInput;
  };

  export type bankUncheckedCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    loan_officer?: loan_officerUncheckedCreateNestedManyWithoutBankInput;
    vehicle_loan?: vehicle_loanUncheckedCreateNestedManyWithoutBankInput;
  };

  export type bankCreateOrConnectWithoutUserInput = {
    where: bankWhereUniqueInput;
    create: XOR<bankCreateWithoutUserInput, bankUncheckedCreateWithoutUserInput>;
  };

  export type bankCreateManyUserInputEnvelope = {
    data: bankCreateManyUserInput | bankCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type business_ownerCreateWithoutUserInput = {
    id?: string;
    business_name: string;
    business_type: string;
    business_location: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type business_ownerUncheckedCreateWithoutUserInput = {
    id?: string;
    business_name: string;
    business_type: string;
    business_location: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type business_ownerCreateOrConnectWithoutUserInput = {
    where: business_ownerWhereUniqueInput;
    create: XOR<business_ownerCreateWithoutUserInput, business_ownerUncheckedCreateWithoutUserInput>;
  };

  export type business_ownerCreateManyUserInputEnvelope = {
    data: business_ownerCreateManyUserInput | business_ownerCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type financial_advisorCreateWithoutUserInput = {
    id?: string;
    advisor_name: string;
    experience: number;
    qualification: string;
    specialization: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type financial_advisorUncheckedCreateWithoutUserInput = {
    id?: string;
    advisor_name: string;
    experience: number;
    qualification: string;
    specialization: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type financial_advisorCreateOrConnectWithoutUserInput = {
    where: financial_advisorWhereUniqueInput;
    create: XOR<financial_advisorCreateWithoutUserInput, financial_advisorUncheckedCreateWithoutUserInput>;
  };

  export type financial_advisorCreateManyUserInputEnvelope = {
    data: financial_advisorCreateManyUserInput | financial_advisorCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type loan_officerCreateWithoutUserInput = {
    id?: string;
    officer_name: string;
    experience: number;
    qualification: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    bank: bankCreateNestedOneWithoutLoan_officerInput;
  };

  export type loan_officerUncheckedCreateWithoutUserInput = {
    id?: string;
    officer_name: string;
    experience: number;
    qualification: string;
    bank_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type loan_officerCreateOrConnectWithoutUserInput = {
    where: loan_officerWhereUniqueInput;
    create: XOR<loan_officerCreateWithoutUserInput, loan_officerUncheckedCreateWithoutUserInput>;
  };

  export type loan_officerCreateManyUserInputEnvelope = {
    data: loan_officerCreateManyUserInput | loan_officerCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type vehicle_loanCreateWithoutUserInput = {
    id?: string;
    loan_amount: number;
    loan_duration: number;
    interest_rate: number;
    vehicle_type: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    bank: bankCreateNestedOneWithoutVehicle_loanInput;
  };

  export type vehicle_loanUncheckedCreateWithoutUserInput = {
    id?: string;
    loan_amount: number;
    loan_duration: number;
    interest_rate: number;
    vehicle_type: string;
    bank_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type vehicle_loanCreateOrConnectWithoutUserInput = {
    where: vehicle_loanWhereUniqueInput;
    create: XOR<vehicle_loanCreateWithoutUserInput, vehicle_loanUncheckedCreateWithoutUserInput>;
  };

  export type vehicle_loanCreateManyUserInputEnvelope = {
    data: vehicle_loanCreateManyUserInput | vehicle_loanCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type bankUpsertWithWhereUniqueWithoutUserInput = {
    where: bankWhereUniqueInput;
    update: XOR<bankUpdateWithoutUserInput, bankUncheckedUpdateWithoutUserInput>;
    create: XOR<bankCreateWithoutUserInput, bankUncheckedCreateWithoutUserInput>;
  };

  export type bankUpdateWithWhereUniqueWithoutUserInput = {
    where: bankWhereUniqueInput;
    data: XOR<bankUpdateWithoutUserInput, bankUncheckedUpdateWithoutUserInput>;
  };

  export type bankUpdateManyWithWhereWithoutUserInput = {
    where: bankScalarWhereInput;
    data: XOR<bankUpdateManyMutationInput, bankUncheckedUpdateManyWithoutUserInput>;
  };

  export type bankScalarWhereInput = {
    AND?: bankScalarWhereInput | bankScalarWhereInput[];
    OR?: bankScalarWhereInput[];
    NOT?: bankScalarWhereInput | bankScalarWhereInput[];
    id?: UuidFilter<'bank'> | string;
    description?: StringNullableFilter<'bank'> | string | null;
    name?: StringFilter<'bank'> | string;
    created_at?: DateTimeFilter<'bank'> | Date | string;
    updated_at?: DateTimeFilter<'bank'> | Date | string;
    user_id?: UuidFilter<'bank'> | string;
    tenant_id?: StringFilter<'bank'> | string;
  };

  export type business_ownerUpsertWithWhereUniqueWithoutUserInput = {
    where: business_ownerWhereUniqueInput;
    update: XOR<business_ownerUpdateWithoutUserInput, business_ownerUncheckedUpdateWithoutUserInput>;
    create: XOR<business_ownerCreateWithoutUserInput, business_ownerUncheckedCreateWithoutUserInput>;
  };

  export type business_ownerUpdateWithWhereUniqueWithoutUserInput = {
    where: business_ownerWhereUniqueInput;
    data: XOR<business_ownerUpdateWithoutUserInput, business_ownerUncheckedUpdateWithoutUserInput>;
  };

  export type business_ownerUpdateManyWithWhereWithoutUserInput = {
    where: business_ownerScalarWhereInput;
    data: XOR<business_ownerUpdateManyMutationInput, business_ownerUncheckedUpdateManyWithoutUserInput>;
  };

  export type business_ownerScalarWhereInput = {
    AND?: business_ownerScalarWhereInput | business_ownerScalarWhereInput[];
    OR?: business_ownerScalarWhereInput[];
    NOT?: business_ownerScalarWhereInput | business_ownerScalarWhereInput[];
    id?: UuidFilter<'business_owner'> | string;
    business_name?: StringFilter<'business_owner'> | string;
    business_type?: StringFilter<'business_owner'> | string;
    business_location?: StringFilter<'business_owner'> | string;
    user_id?: UuidFilter<'business_owner'> | string;
    created_at?: DateTimeFilter<'business_owner'> | Date | string;
    updated_at?: DateTimeFilter<'business_owner'> | Date | string;
  };

  export type financial_advisorUpsertWithWhereUniqueWithoutUserInput = {
    where: financial_advisorWhereUniqueInput;
    update: XOR<financial_advisorUpdateWithoutUserInput, financial_advisorUncheckedUpdateWithoutUserInput>;
    create: XOR<financial_advisorCreateWithoutUserInput, financial_advisorUncheckedCreateWithoutUserInput>;
  };

  export type financial_advisorUpdateWithWhereUniqueWithoutUserInput = {
    where: financial_advisorWhereUniqueInput;
    data: XOR<financial_advisorUpdateWithoutUserInput, financial_advisorUncheckedUpdateWithoutUserInput>;
  };

  export type financial_advisorUpdateManyWithWhereWithoutUserInput = {
    where: financial_advisorScalarWhereInput;
    data: XOR<financial_advisorUpdateManyMutationInput, financial_advisorUncheckedUpdateManyWithoutUserInput>;
  };

  export type financial_advisorScalarWhereInput = {
    AND?: financial_advisorScalarWhereInput | financial_advisorScalarWhereInput[];
    OR?: financial_advisorScalarWhereInput[];
    NOT?: financial_advisorScalarWhereInput | financial_advisorScalarWhereInput[];
    id?: UuidFilter<'financial_advisor'> | string;
    advisor_name?: StringFilter<'financial_advisor'> | string;
    experience?: IntFilter<'financial_advisor'> | number;
    qualification?: StringFilter<'financial_advisor'> | string;
    specialization?: StringFilter<'financial_advisor'> | string;
    user_id?: UuidFilter<'financial_advisor'> | string;
    created_at?: DateTimeFilter<'financial_advisor'> | Date | string;
    updated_at?: DateTimeFilter<'financial_advisor'> | Date | string;
  };

  export type loan_officerUpsertWithWhereUniqueWithoutUserInput = {
    where: loan_officerWhereUniqueInput;
    update: XOR<loan_officerUpdateWithoutUserInput, loan_officerUncheckedUpdateWithoutUserInput>;
    create: XOR<loan_officerCreateWithoutUserInput, loan_officerUncheckedCreateWithoutUserInput>;
  };

  export type loan_officerUpdateWithWhereUniqueWithoutUserInput = {
    where: loan_officerWhereUniqueInput;
    data: XOR<loan_officerUpdateWithoutUserInput, loan_officerUncheckedUpdateWithoutUserInput>;
  };

  export type loan_officerUpdateManyWithWhereWithoutUserInput = {
    where: loan_officerScalarWhereInput;
    data: XOR<loan_officerUpdateManyMutationInput, loan_officerUncheckedUpdateManyWithoutUserInput>;
  };

  export type vehicle_loanUpsertWithWhereUniqueWithoutUserInput = {
    where: vehicle_loanWhereUniqueInput;
    update: XOR<vehicle_loanUpdateWithoutUserInput, vehicle_loanUncheckedUpdateWithoutUserInput>;
    create: XOR<vehicle_loanCreateWithoutUserInput, vehicle_loanUncheckedCreateWithoutUserInput>;
  };

  export type vehicle_loanUpdateWithWhereUniqueWithoutUserInput = {
    where: vehicle_loanWhereUniqueInput;
    data: XOR<vehicle_loanUpdateWithoutUserInput, vehicle_loanUncheckedUpdateWithoutUserInput>;
  };

  export type vehicle_loanUpdateManyWithWhereWithoutUserInput = {
    where: vehicle_loanScalarWhereInput;
    data: XOR<vehicle_loanUpdateManyMutationInput, vehicle_loanUncheckedUpdateManyWithoutUserInput>;
  };

  export type bankCreateWithoutVehicle_loanInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    user: userCreateNestedOneWithoutBankInput;
    loan_officer?: loan_officerCreateNestedManyWithoutBankInput;
  };

  export type bankUncheckedCreateWithoutVehicle_loanInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
    loan_officer?: loan_officerUncheckedCreateNestedManyWithoutBankInput;
  };

  export type bankCreateOrConnectWithoutVehicle_loanInput = {
    where: bankWhereUniqueInput;
    create: XOR<bankCreateWithoutVehicle_loanInput, bankUncheckedCreateWithoutVehicle_loanInput>;
  };

  export type userCreateWithoutVehicle_loanInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    bank?: bankCreateNestedManyWithoutUserInput;
    business_owner?: business_ownerCreateNestedManyWithoutUserInput;
    financial_advisor?: financial_advisorCreateNestedManyWithoutUserInput;
    loan_officer?: loan_officerCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutVehicle_loanInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    bank?: bankUncheckedCreateNestedManyWithoutUserInput;
    business_owner?: business_ownerUncheckedCreateNestedManyWithoutUserInput;
    financial_advisor?: financial_advisorUncheckedCreateNestedManyWithoutUserInput;
    loan_officer?: loan_officerUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutVehicle_loanInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutVehicle_loanInput, userUncheckedCreateWithoutVehicle_loanInput>;
  };

  export type bankUpsertWithoutVehicle_loanInput = {
    update: XOR<bankUpdateWithoutVehicle_loanInput, bankUncheckedUpdateWithoutVehicle_loanInput>;
    create: XOR<bankCreateWithoutVehicle_loanInput, bankUncheckedCreateWithoutVehicle_loanInput>;
    where?: bankWhereInput;
  };

  export type bankUpdateToOneWithWhereWithoutVehicle_loanInput = {
    where?: bankWhereInput;
    data: XOR<bankUpdateWithoutVehicle_loanInput, bankUncheckedUpdateWithoutVehicle_loanInput>;
  };

  export type bankUpdateWithoutVehicle_loanInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    user?: userUpdateOneRequiredWithoutBankNestedInput;
    loan_officer?: loan_officerUpdateManyWithoutBankNestedInput;
  };

  export type bankUncheckedUpdateWithoutVehicle_loanInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    loan_officer?: loan_officerUncheckedUpdateManyWithoutBankNestedInput;
  };

  export type userUpsertWithoutVehicle_loanInput = {
    update: XOR<userUpdateWithoutVehicle_loanInput, userUncheckedUpdateWithoutVehicle_loanInput>;
    create: XOR<userCreateWithoutVehicle_loanInput, userUncheckedCreateWithoutVehicle_loanInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutVehicle_loanInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutVehicle_loanInput, userUncheckedUpdateWithoutVehicle_loanInput>;
  };

  export type userUpdateWithoutVehicle_loanInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    bank?: bankUpdateManyWithoutUserNestedInput;
    business_owner?: business_ownerUpdateManyWithoutUserNestedInput;
    financial_advisor?: financial_advisorUpdateManyWithoutUserNestedInput;
    loan_officer?: loan_officerUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutVehicle_loanInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    bank?: bankUncheckedUpdateManyWithoutUserNestedInput;
    business_owner?: business_ownerUncheckedUpdateManyWithoutUserNestedInput;
    financial_advisor?: financial_advisorUncheckedUpdateManyWithoutUserNestedInput;
    loan_officer?: loan_officerUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type loan_officerCreateManyBankInput = {
    id?: string;
    officer_name: string;
    experience: number;
    qualification: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type vehicle_loanCreateManyBankInput = {
    id?: string;
    loan_amount: number;
    loan_duration: number;
    interest_rate: number;
    vehicle_type: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type loan_officerUpdateWithoutBankInput = {
    id?: StringFieldUpdateOperationsInput | string;
    officer_name?: StringFieldUpdateOperationsInput | string;
    experience?: IntFieldUpdateOperationsInput | number;
    qualification?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutLoan_officerNestedInput;
  };

  export type loan_officerUncheckedUpdateWithoutBankInput = {
    id?: StringFieldUpdateOperationsInput | string;
    officer_name?: StringFieldUpdateOperationsInput | string;
    experience?: IntFieldUpdateOperationsInput | number;
    qualification?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type loan_officerUncheckedUpdateManyWithoutBankInput = {
    id?: StringFieldUpdateOperationsInput | string;
    officer_name?: StringFieldUpdateOperationsInput | string;
    experience?: IntFieldUpdateOperationsInput | number;
    qualification?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type vehicle_loanUpdateWithoutBankInput = {
    id?: StringFieldUpdateOperationsInput | string;
    loan_amount?: IntFieldUpdateOperationsInput | number;
    loan_duration?: IntFieldUpdateOperationsInput | number;
    interest_rate?: IntFieldUpdateOperationsInput | number;
    vehicle_type?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutVehicle_loanNestedInput;
  };

  export type vehicle_loanUncheckedUpdateWithoutBankInput = {
    id?: StringFieldUpdateOperationsInput | string;
    loan_amount?: IntFieldUpdateOperationsInput | number;
    loan_duration?: IntFieldUpdateOperationsInput | number;
    interest_rate?: IntFieldUpdateOperationsInput | number;
    vehicle_type?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type vehicle_loanUncheckedUpdateManyWithoutBankInput = {
    id?: StringFieldUpdateOperationsInput | string;
    loan_amount?: IntFieldUpdateOperationsInput | number;
    loan_duration?: IntFieldUpdateOperationsInput | number;
    interest_rate?: IntFieldUpdateOperationsInput | number;
    vehicle_type?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type bankCreateManyUserInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type business_ownerCreateManyUserInput = {
    id?: string;
    business_name: string;
    business_type: string;
    business_location: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type financial_advisorCreateManyUserInput = {
    id?: string;
    advisor_name: string;
    experience: number;
    qualification: string;
    specialization: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type loan_officerCreateManyUserInput = {
    id?: string;
    officer_name: string;
    experience: number;
    qualification: string;
    bank_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type vehicle_loanCreateManyUserInput = {
    id?: string;
    loan_amount: number;
    loan_duration: number;
    interest_rate: number;
    vehicle_type: string;
    bank_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type bankUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    loan_officer?: loan_officerUpdateManyWithoutBankNestedInput;
    vehicle_loan?: vehicle_loanUpdateManyWithoutBankNestedInput;
  };

  export type bankUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    loan_officer?: loan_officerUncheckedUpdateManyWithoutBankNestedInput;
    vehicle_loan?: vehicle_loanUncheckedUpdateManyWithoutBankNestedInput;
  };

  export type bankUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type business_ownerUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    business_name?: StringFieldUpdateOperationsInput | string;
    business_type?: StringFieldUpdateOperationsInput | string;
    business_location?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type business_ownerUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    business_name?: StringFieldUpdateOperationsInput | string;
    business_type?: StringFieldUpdateOperationsInput | string;
    business_location?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type business_ownerUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    business_name?: StringFieldUpdateOperationsInput | string;
    business_type?: StringFieldUpdateOperationsInput | string;
    business_location?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type financial_advisorUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    advisor_name?: StringFieldUpdateOperationsInput | string;
    experience?: IntFieldUpdateOperationsInput | number;
    qualification?: StringFieldUpdateOperationsInput | string;
    specialization?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type financial_advisorUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    advisor_name?: StringFieldUpdateOperationsInput | string;
    experience?: IntFieldUpdateOperationsInput | number;
    qualification?: StringFieldUpdateOperationsInput | string;
    specialization?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type financial_advisorUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    advisor_name?: StringFieldUpdateOperationsInput | string;
    experience?: IntFieldUpdateOperationsInput | number;
    qualification?: StringFieldUpdateOperationsInput | string;
    specialization?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type loan_officerUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    officer_name?: StringFieldUpdateOperationsInput | string;
    experience?: IntFieldUpdateOperationsInput | number;
    qualification?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    bank?: bankUpdateOneRequiredWithoutLoan_officerNestedInput;
  };

  export type loan_officerUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    officer_name?: StringFieldUpdateOperationsInput | string;
    experience?: IntFieldUpdateOperationsInput | number;
    qualification?: StringFieldUpdateOperationsInput | string;
    bank_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type loan_officerUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    officer_name?: StringFieldUpdateOperationsInput | string;
    experience?: IntFieldUpdateOperationsInput | number;
    qualification?: StringFieldUpdateOperationsInput | string;
    bank_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type vehicle_loanUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    loan_amount?: IntFieldUpdateOperationsInput | number;
    loan_duration?: IntFieldUpdateOperationsInput | number;
    interest_rate?: IntFieldUpdateOperationsInput | number;
    vehicle_type?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    bank?: bankUpdateOneRequiredWithoutVehicle_loanNestedInput;
  };

  export type vehicle_loanUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    loan_amount?: IntFieldUpdateOperationsInput | number;
    loan_duration?: IntFieldUpdateOperationsInput | number;
    interest_rate?: IntFieldUpdateOperationsInput | number;
    vehicle_type?: StringFieldUpdateOperationsInput | string;
    bank_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type vehicle_loanUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    loan_amount?: IntFieldUpdateOperationsInput | number;
    loan_duration?: IntFieldUpdateOperationsInput | number;
    interest_rate?: IntFieldUpdateOperationsInput | number;
    vehicle_type?: StringFieldUpdateOperationsInput | string;
    bank_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Aliases for legacy arg types
   */
  /**
   * @deprecated Use BankCountOutputTypeDefaultArgs instead
   */
  export type BankCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    BankCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use UserCountOutputTypeDefaultArgs instead
   */
  export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    UserCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use bankDefaultArgs instead
   */
  export type bankArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = bankDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use business_ownerDefaultArgs instead
   */
  export type business_ownerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    business_ownerDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use financial_advisorDefaultArgs instead
   */
  export type financial_advisorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    financial_advisorDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use loan_officerDefaultArgs instead
   */
  export type loan_officerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    loan_officerDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use userDefaultArgs instead
   */
  export type userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = userDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use vehicle_loanDefaultArgs instead
   */
  export type vehicle_loanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    vehicle_loanDefaultArgs<ExtArgs>;

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
