
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Banner
 * 
 */
export type Banner = $Result.DefaultSelection<Prisma.$BannerPayload>
/**
 * Model CumRap
 * 
 */
export type CumRap = $Result.DefaultSelection<Prisma.$CumRapPayload>
/**
 * Model DatVe
 * 
 */
export type DatVe = $Result.DefaultSelection<Prisma.$DatVePayload>
/**
 * Model Ghe
 * 
 */
export type Ghe = $Result.DefaultSelection<Prisma.$GhePayload>
/**
 * Model HeThongRap
 * 
 */
export type HeThongRap = $Result.DefaultSelection<Prisma.$HeThongRapPayload>
/**
 * Model LichChieu
 * 
 */
export type LichChieu = $Result.DefaultSelection<Prisma.$LichChieuPayload>
/**
 * Model NguoiDung
 * 
 */
export type NguoiDung = $Result.DefaultSelection<Prisma.$NguoiDungPayload>
/**
 * Model RefreshToken
 * 
 */
export type RefreshToken = $Result.DefaultSelection<Prisma.$RefreshTokenPayload>
/**
 * Model Phim
 * 
 */
export type Phim = $Result.DefaultSelection<Prisma.$PhimPayload>
/**
 * Model RapPhim
 * 
 */
export type RapPhim = $Result.DefaultSelection<Prisma.$RapPhimPayload>
/**
 * Model GiuCho
 * 
 */
export type GiuCho = $Result.DefaultSelection<Prisma.$GiuChoPayload>
/**
 * Model HoaDon
 * 
 */
export type HoaDon = $Result.DefaultSelection<Prisma.$HoaDonPayload>
/**
 * Model Combo
 * 
 */
export type Combo = $Result.DefaultSelection<Prisma.$ComboPayload>
/**
 * Model HoaDonCombo
 * 
 */
export type HoaDonCombo = $Result.DefaultSelection<Prisma.$HoaDonComboPayload>
/**
 * Model GiaoDichWebhook
 * 
 */
export type GiaoDichWebhook = $Result.DefaultSelection<Prisma.$GiaoDichWebhookPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const LoaiGiuCho: {
  tam: 'tam',
  da_tao_don: 'da_tao_don'
};

export type LoaiGiuCho = (typeof LoaiGiuCho)[keyof typeof LoaiGiuCho]


export const TrangThaiThanhToan: {
  cho_thanh_toan: 'cho_thanh_toan',
  da_thanh_toan: 'da_thanh_toan',
  het_han: 'het_han',
  huy: 'huy'
};

export type TrangThaiThanhToan = (typeof TrangThaiThanhToan)[keyof typeof TrangThaiThanhToan]

}

export type LoaiGiuCho = $Enums.LoaiGiuCho

export const LoaiGiuCho: typeof $Enums.LoaiGiuCho

export type TrangThaiThanhToan = $Enums.TrangThaiThanhToan

export const TrangThaiThanhToan: typeof $Enums.TrangThaiThanhToan

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Banners
 * const banners = await prisma.banner.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Banners
   * const banners = await prisma.banner.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.banner`: Exposes CRUD operations for the **Banner** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Banners
    * const banners = await prisma.banner.findMany()
    * ```
    */
  get banner(): Prisma.BannerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cumRap`: Exposes CRUD operations for the **CumRap** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CumRaps
    * const cumRaps = await prisma.cumRap.findMany()
    * ```
    */
  get cumRap(): Prisma.CumRapDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.datVe`: Exposes CRUD operations for the **DatVe** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DatVes
    * const datVes = await prisma.datVe.findMany()
    * ```
    */
  get datVe(): Prisma.DatVeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ghe`: Exposes CRUD operations for the **Ghe** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ghes
    * const ghes = await prisma.ghe.findMany()
    * ```
    */
  get ghe(): Prisma.GheDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.heThongRap`: Exposes CRUD operations for the **HeThongRap** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HeThongRaps
    * const heThongRaps = await prisma.heThongRap.findMany()
    * ```
    */
  get heThongRap(): Prisma.HeThongRapDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lichChieu`: Exposes CRUD operations for the **LichChieu** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LichChieus
    * const lichChieus = await prisma.lichChieu.findMany()
    * ```
    */
  get lichChieu(): Prisma.LichChieuDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.nguoiDung`: Exposes CRUD operations for the **NguoiDung** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NguoiDungs
    * const nguoiDungs = await prisma.nguoiDung.findMany()
    * ```
    */
  get nguoiDung(): Prisma.NguoiDungDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.refreshToken`: Exposes CRUD operations for the **RefreshToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RefreshTokens
    * const refreshTokens = await prisma.refreshToken.findMany()
    * ```
    */
  get refreshToken(): Prisma.RefreshTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.phim`: Exposes CRUD operations for the **Phim** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Phims
    * const phims = await prisma.phim.findMany()
    * ```
    */
  get phim(): Prisma.PhimDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rapPhim`: Exposes CRUD operations for the **RapPhim** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RapPhims
    * const rapPhims = await prisma.rapPhim.findMany()
    * ```
    */
  get rapPhim(): Prisma.RapPhimDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.giuCho`: Exposes CRUD operations for the **GiuCho** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GiuChos
    * const giuChos = await prisma.giuCho.findMany()
    * ```
    */
  get giuCho(): Prisma.GiuChoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.hoaDon`: Exposes CRUD operations for the **HoaDon** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HoaDons
    * const hoaDons = await prisma.hoaDon.findMany()
    * ```
    */
  get hoaDon(): Prisma.HoaDonDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.combo`: Exposes CRUD operations for the **Combo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Combos
    * const combos = await prisma.combo.findMany()
    * ```
    */
  get combo(): Prisma.ComboDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.hoaDonCombo`: Exposes CRUD operations for the **HoaDonCombo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HoaDonCombos
    * const hoaDonCombos = await prisma.hoaDonCombo.findMany()
    * ```
    */
  get hoaDonCombo(): Prisma.HoaDonComboDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.giaoDichWebhook`: Exposes CRUD operations for the **GiaoDichWebhook** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GiaoDichWebhooks
    * const giaoDichWebhooks = await prisma.giaoDichWebhook.findMany()
    * ```
    */
  get giaoDichWebhook(): Prisma.GiaoDichWebhookDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.6.0
   * Query Engine version: 75cbdc1eb7150937890ad5465d861175c6624711
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

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
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


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
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
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
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Banner: 'Banner',
    CumRap: 'CumRap',
    DatVe: 'DatVe',
    Ghe: 'Ghe',
    HeThongRap: 'HeThongRap',
    LichChieu: 'LichChieu',
    NguoiDung: 'NguoiDung',
    RefreshToken: 'RefreshToken',
    Phim: 'Phim',
    RapPhim: 'RapPhim',
    GiuCho: 'GiuCho',
    HoaDon: 'HoaDon',
    Combo: 'Combo',
    HoaDonCombo: 'HoaDonCombo',
    GiaoDichWebhook: 'GiaoDichWebhook'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "banner" | "cumRap" | "datVe" | "ghe" | "heThongRap" | "lichChieu" | "nguoiDung" | "refreshToken" | "phim" | "rapPhim" | "giuCho" | "hoaDon" | "combo" | "hoaDonCombo" | "giaoDichWebhook"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Banner: {
        payload: Prisma.$BannerPayload<ExtArgs>
        fields: Prisma.BannerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BannerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BannerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>
          }
          findFirst: {
            args: Prisma.BannerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BannerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>
          }
          findMany: {
            args: Prisma.BannerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>[]
          }
          create: {
            args: Prisma.BannerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>
          }
          createMany: {
            args: Prisma.BannerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BannerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>
          }
          update: {
            args: Prisma.BannerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>
          }
          deleteMany: {
            args: Prisma.BannerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BannerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BannerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>
          }
          aggregate: {
            args: Prisma.BannerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBanner>
          }
          groupBy: {
            args: Prisma.BannerGroupByArgs<ExtArgs>
            result: $Utils.Optional<BannerGroupByOutputType>[]
          }
          count: {
            args: Prisma.BannerCountArgs<ExtArgs>
            result: $Utils.Optional<BannerCountAggregateOutputType> | number
          }
        }
      }
      CumRap: {
        payload: Prisma.$CumRapPayload<ExtArgs>
        fields: Prisma.CumRapFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CumRapFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CumRapPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CumRapFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CumRapPayload>
          }
          findFirst: {
            args: Prisma.CumRapFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CumRapPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CumRapFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CumRapPayload>
          }
          findMany: {
            args: Prisma.CumRapFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CumRapPayload>[]
          }
          create: {
            args: Prisma.CumRapCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CumRapPayload>
          }
          createMany: {
            args: Prisma.CumRapCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CumRapDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CumRapPayload>
          }
          update: {
            args: Prisma.CumRapUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CumRapPayload>
          }
          deleteMany: {
            args: Prisma.CumRapDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CumRapUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CumRapUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CumRapPayload>
          }
          aggregate: {
            args: Prisma.CumRapAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCumRap>
          }
          groupBy: {
            args: Prisma.CumRapGroupByArgs<ExtArgs>
            result: $Utils.Optional<CumRapGroupByOutputType>[]
          }
          count: {
            args: Prisma.CumRapCountArgs<ExtArgs>
            result: $Utils.Optional<CumRapCountAggregateOutputType> | number
          }
        }
      }
      DatVe: {
        payload: Prisma.$DatVePayload<ExtArgs>
        fields: Prisma.DatVeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DatVeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatVePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DatVeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatVePayload>
          }
          findFirst: {
            args: Prisma.DatVeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatVePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DatVeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatVePayload>
          }
          findMany: {
            args: Prisma.DatVeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatVePayload>[]
          }
          create: {
            args: Prisma.DatVeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatVePayload>
          }
          createMany: {
            args: Prisma.DatVeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DatVeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatVePayload>
          }
          update: {
            args: Prisma.DatVeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatVePayload>
          }
          deleteMany: {
            args: Prisma.DatVeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DatVeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DatVeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatVePayload>
          }
          aggregate: {
            args: Prisma.DatVeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDatVe>
          }
          groupBy: {
            args: Prisma.DatVeGroupByArgs<ExtArgs>
            result: $Utils.Optional<DatVeGroupByOutputType>[]
          }
          count: {
            args: Prisma.DatVeCountArgs<ExtArgs>
            result: $Utils.Optional<DatVeCountAggregateOutputType> | number
          }
        }
      }
      Ghe: {
        payload: Prisma.$GhePayload<ExtArgs>
        fields: Prisma.GheFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GheFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GhePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GheFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GhePayload>
          }
          findFirst: {
            args: Prisma.GheFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GhePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GheFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GhePayload>
          }
          findMany: {
            args: Prisma.GheFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GhePayload>[]
          }
          create: {
            args: Prisma.GheCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GhePayload>
          }
          createMany: {
            args: Prisma.GheCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.GheDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GhePayload>
          }
          update: {
            args: Prisma.GheUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GhePayload>
          }
          deleteMany: {
            args: Prisma.GheDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GheUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GheUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GhePayload>
          }
          aggregate: {
            args: Prisma.GheAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGhe>
          }
          groupBy: {
            args: Prisma.GheGroupByArgs<ExtArgs>
            result: $Utils.Optional<GheGroupByOutputType>[]
          }
          count: {
            args: Prisma.GheCountArgs<ExtArgs>
            result: $Utils.Optional<GheCountAggregateOutputType> | number
          }
        }
      }
      HeThongRap: {
        payload: Prisma.$HeThongRapPayload<ExtArgs>
        fields: Prisma.HeThongRapFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HeThongRapFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeThongRapPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HeThongRapFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeThongRapPayload>
          }
          findFirst: {
            args: Prisma.HeThongRapFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeThongRapPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HeThongRapFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeThongRapPayload>
          }
          findMany: {
            args: Prisma.HeThongRapFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeThongRapPayload>[]
          }
          create: {
            args: Prisma.HeThongRapCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeThongRapPayload>
          }
          createMany: {
            args: Prisma.HeThongRapCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.HeThongRapDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeThongRapPayload>
          }
          update: {
            args: Prisma.HeThongRapUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeThongRapPayload>
          }
          deleteMany: {
            args: Prisma.HeThongRapDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HeThongRapUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.HeThongRapUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeThongRapPayload>
          }
          aggregate: {
            args: Prisma.HeThongRapAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHeThongRap>
          }
          groupBy: {
            args: Prisma.HeThongRapGroupByArgs<ExtArgs>
            result: $Utils.Optional<HeThongRapGroupByOutputType>[]
          }
          count: {
            args: Prisma.HeThongRapCountArgs<ExtArgs>
            result: $Utils.Optional<HeThongRapCountAggregateOutputType> | number
          }
        }
      }
      LichChieu: {
        payload: Prisma.$LichChieuPayload<ExtArgs>
        fields: Prisma.LichChieuFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LichChieuFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LichChieuPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LichChieuFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LichChieuPayload>
          }
          findFirst: {
            args: Prisma.LichChieuFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LichChieuPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LichChieuFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LichChieuPayload>
          }
          findMany: {
            args: Prisma.LichChieuFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LichChieuPayload>[]
          }
          create: {
            args: Prisma.LichChieuCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LichChieuPayload>
          }
          createMany: {
            args: Prisma.LichChieuCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.LichChieuDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LichChieuPayload>
          }
          update: {
            args: Prisma.LichChieuUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LichChieuPayload>
          }
          deleteMany: {
            args: Prisma.LichChieuDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LichChieuUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LichChieuUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LichChieuPayload>
          }
          aggregate: {
            args: Prisma.LichChieuAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLichChieu>
          }
          groupBy: {
            args: Prisma.LichChieuGroupByArgs<ExtArgs>
            result: $Utils.Optional<LichChieuGroupByOutputType>[]
          }
          count: {
            args: Prisma.LichChieuCountArgs<ExtArgs>
            result: $Utils.Optional<LichChieuCountAggregateOutputType> | number
          }
        }
      }
      NguoiDung: {
        payload: Prisma.$NguoiDungPayload<ExtArgs>
        fields: Prisma.NguoiDungFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NguoiDungFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NguoiDungPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NguoiDungFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NguoiDungPayload>
          }
          findFirst: {
            args: Prisma.NguoiDungFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NguoiDungPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NguoiDungFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NguoiDungPayload>
          }
          findMany: {
            args: Prisma.NguoiDungFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NguoiDungPayload>[]
          }
          create: {
            args: Prisma.NguoiDungCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NguoiDungPayload>
          }
          createMany: {
            args: Prisma.NguoiDungCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.NguoiDungDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NguoiDungPayload>
          }
          update: {
            args: Prisma.NguoiDungUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NguoiDungPayload>
          }
          deleteMany: {
            args: Prisma.NguoiDungDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NguoiDungUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NguoiDungUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NguoiDungPayload>
          }
          aggregate: {
            args: Prisma.NguoiDungAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNguoiDung>
          }
          groupBy: {
            args: Prisma.NguoiDungGroupByArgs<ExtArgs>
            result: $Utils.Optional<NguoiDungGroupByOutputType>[]
          }
          count: {
            args: Prisma.NguoiDungCountArgs<ExtArgs>
            result: $Utils.Optional<NguoiDungCountAggregateOutputType> | number
          }
        }
      }
      RefreshToken: {
        payload: Prisma.$RefreshTokenPayload<ExtArgs>
        fields: Prisma.RefreshTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RefreshTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RefreshTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          findFirst: {
            args: Prisma.RefreshTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RefreshTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          findMany: {
            args: Prisma.RefreshTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          create: {
            args: Prisma.RefreshTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          createMany: {
            args: Prisma.RefreshTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RefreshTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          update: {
            args: Prisma.RefreshTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          deleteMany: {
            args: Prisma.RefreshTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RefreshTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RefreshTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          aggregate: {
            args: Prisma.RefreshTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRefreshToken>
          }
          groupBy: {
            args: Prisma.RefreshTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<RefreshTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.RefreshTokenCountArgs<ExtArgs>
            result: $Utils.Optional<RefreshTokenCountAggregateOutputType> | number
          }
        }
      }
      Phim: {
        payload: Prisma.$PhimPayload<ExtArgs>
        fields: Prisma.PhimFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PhimFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhimPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PhimFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhimPayload>
          }
          findFirst: {
            args: Prisma.PhimFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhimPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PhimFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhimPayload>
          }
          findMany: {
            args: Prisma.PhimFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhimPayload>[]
          }
          create: {
            args: Prisma.PhimCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhimPayload>
          }
          createMany: {
            args: Prisma.PhimCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PhimDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhimPayload>
          }
          update: {
            args: Prisma.PhimUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhimPayload>
          }
          deleteMany: {
            args: Prisma.PhimDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PhimUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PhimUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhimPayload>
          }
          aggregate: {
            args: Prisma.PhimAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePhim>
          }
          groupBy: {
            args: Prisma.PhimGroupByArgs<ExtArgs>
            result: $Utils.Optional<PhimGroupByOutputType>[]
          }
          count: {
            args: Prisma.PhimCountArgs<ExtArgs>
            result: $Utils.Optional<PhimCountAggregateOutputType> | number
          }
        }
      }
      RapPhim: {
        payload: Prisma.$RapPhimPayload<ExtArgs>
        fields: Prisma.RapPhimFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RapPhimFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RapPhimPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RapPhimFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RapPhimPayload>
          }
          findFirst: {
            args: Prisma.RapPhimFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RapPhimPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RapPhimFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RapPhimPayload>
          }
          findMany: {
            args: Prisma.RapPhimFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RapPhimPayload>[]
          }
          create: {
            args: Prisma.RapPhimCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RapPhimPayload>
          }
          createMany: {
            args: Prisma.RapPhimCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RapPhimDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RapPhimPayload>
          }
          update: {
            args: Prisma.RapPhimUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RapPhimPayload>
          }
          deleteMany: {
            args: Prisma.RapPhimDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RapPhimUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RapPhimUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RapPhimPayload>
          }
          aggregate: {
            args: Prisma.RapPhimAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRapPhim>
          }
          groupBy: {
            args: Prisma.RapPhimGroupByArgs<ExtArgs>
            result: $Utils.Optional<RapPhimGroupByOutputType>[]
          }
          count: {
            args: Prisma.RapPhimCountArgs<ExtArgs>
            result: $Utils.Optional<RapPhimCountAggregateOutputType> | number
          }
        }
      }
      GiuCho: {
        payload: Prisma.$GiuChoPayload<ExtArgs>
        fields: Prisma.GiuChoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GiuChoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GiuChoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GiuChoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GiuChoPayload>
          }
          findFirst: {
            args: Prisma.GiuChoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GiuChoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GiuChoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GiuChoPayload>
          }
          findMany: {
            args: Prisma.GiuChoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GiuChoPayload>[]
          }
          create: {
            args: Prisma.GiuChoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GiuChoPayload>
          }
          createMany: {
            args: Prisma.GiuChoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.GiuChoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GiuChoPayload>
          }
          update: {
            args: Prisma.GiuChoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GiuChoPayload>
          }
          deleteMany: {
            args: Prisma.GiuChoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GiuChoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GiuChoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GiuChoPayload>
          }
          aggregate: {
            args: Prisma.GiuChoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGiuCho>
          }
          groupBy: {
            args: Prisma.GiuChoGroupByArgs<ExtArgs>
            result: $Utils.Optional<GiuChoGroupByOutputType>[]
          }
          count: {
            args: Prisma.GiuChoCountArgs<ExtArgs>
            result: $Utils.Optional<GiuChoCountAggregateOutputType> | number
          }
        }
      }
      HoaDon: {
        payload: Prisma.$HoaDonPayload<ExtArgs>
        fields: Prisma.HoaDonFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HoaDonFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HoaDonPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HoaDonFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HoaDonPayload>
          }
          findFirst: {
            args: Prisma.HoaDonFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HoaDonPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HoaDonFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HoaDonPayload>
          }
          findMany: {
            args: Prisma.HoaDonFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HoaDonPayload>[]
          }
          create: {
            args: Prisma.HoaDonCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HoaDonPayload>
          }
          createMany: {
            args: Prisma.HoaDonCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.HoaDonDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HoaDonPayload>
          }
          update: {
            args: Prisma.HoaDonUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HoaDonPayload>
          }
          deleteMany: {
            args: Prisma.HoaDonDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HoaDonUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.HoaDonUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HoaDonPayload>
          }
          aggregate: {
            args: Prisma.HoaDonAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHoaDon>
          }
          groupBy: {
            args: Prisma.HoaDonGroupByArgs<ExtArgs>
            result: $Utils.Optional<HoaDonGroupByOutputType>[]
          }
          count: {
            args: Prisma.HoaDonCountArgs<ExtArgs>
            result: $Utils.Optional<HoaDonCountAggregateOutputType> | number
          }
        }
      }
      Combo: {
        payload: Prisma.$ComboPayload<ExtArgs>
        fields: Prisma.ComboFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ComboFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComboPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ComboFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComboPayload>
          }
          findFirst: {
            args: Prisma.ComboFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComboPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ComboFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComboPayload>
          }
          findMany: {
            args: Prisma.ComboFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComboPayload>[]
          }
          create: {
            args: Prisma.ComboCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComboPayload>
          }
          createMany: {
            args: Prisma.ComboCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ComboDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComboPayload>
          }
          update: {
            args: Prisma.ComboUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComboPayload>
          }
          deleteMany: {
            args: Prisma.ComboDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ComboUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ComboUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComboPayload>
          }
          aggregate: {
            args: Prisma.ComboAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCombo>
          }
          groupBy: {
            args: Prisma.ComboGroupByArgs<ExtArgs>
            result: $Utils.Optional<ComboGroupByOutputType>[]
          }
          count: {
            args: Prisma.ComboCountArgs<ExtArgs>
            result: $Utils.Optional<ComboCountAggregateOutputType> | number
          }
        }
      }
      HoaDonCombo: {
        payload: Prisma.$HoaDonComboPayload<ExtArgs>
        fields: Prisma.HoaDonComboFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HoaDonComboFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HoaDonComboPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HoaDonComboFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HoaDonComboPayload>
          }
          findFirst: {
            args: Prisma.HoaDonComboFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HoaDonComboPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HoaDonComboFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HoaDonComboPayload>
          }
          findMany: {
            args: Prisma.HoaDonComboFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HoaDonComboPayload>[]
          }
          create: {
            args: Prisma.HoaDonComboCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HoaDonComboPayload>
          }
          createMany: {
            args: Prisma.HoaDonComboCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.HoaDonComboDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HoaDonComboPayload>
          }
          update: {
            args: Prisma.HoaDonComboUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HoaDonComboPayload>
          }
          deleteMany: {
            args: Prisma.HoaDonComboDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HoaDonComboUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.HoaDonComboUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HoaDonComboPayload>
          }
          aggregate: {
            args: Prisma.HoaDonComboAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHoaDonCombo>
          }
          groupBy: {
            args: Prisma.HoaDonComboGroupByArgs<ExtArgs>
            result: $Utils.Optional<HoaDonComboGroupByOutputType>[]
          }
          count: {
            args: Prisma.HoaDonComboCountArgs<ExtArgs>
            result: $Utils.Optional<HoaDonComboCountAggregateOutputType> | number
          }
        }
      }
      GiaoDichWebhook: {
        payload: Prisma.$GiaoDichWebhookPayload<ExtArgs>
        fields: Prisma.GiaoDichWebhookFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GiaoDichWebhookFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GiaoDichWebhookPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GiaoDichWebhookFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GiaoDichWebhookPayload>
          }
          findFirst: {
            args: Prisma.GiaoDichWebhookFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GiaoDichWebhookPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GiaoDichWebhookFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GiaoDichWebhookPayload>
          }
          findMany: {
            args: Prisma.GiaoDichWebhookFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GiaoDichWebhookPayload>[]
          }
          create: {
            args: Prisma.GiaoDichWebhookCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GiaoDichWebhookPayload>
          }
          createMany: {
            args: Prisma.GiaoDichWebhookCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.GiaoDichWebhookDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GiaoDichWebhookPayload>
          }
          update: {
            args: Prisma.GiaoDichWebhookUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GiaoDichWebhookPayload>
          }
          deleteMany: {
            args: Prisma.GiaoDichWebhookDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GiaoDichWebhookUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GiaoDichWebhookUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GiaoDichWebhookPayload>
          }
          aggregate: {
            args: Prisma.GiaoDichWebhookAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGiaoDichWebhook>
          }
          groupBy: {
            args: Prisma.GiaoDichWebhookGroupByArgs<ExtArgs>
            result: $Utils.Optional<GiaoDichWebhookGroupByOutputType>[]
          }
          count: {
            args: Prisma.GiaoDichWebhookCountArgs<ExtArgs>
            result: $Utils.Optional<GiaoDichWebhookCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    banner?: BannerOmit
    cumRap?: CumRapOmit
    datVe?: DatVeOmit
    ghe?: GheOmit
    heThongRap?: HeThongRapOmit
    lichChieu?: LichChieuOmit
    nguoiDung?: NguoiDungOmit
    refreshToken?: RefreshTokenOmit
    phim?: PhimOmit
    rapPhim?: RapPhimOmit
    giuCho?: GiuChoOmit
    hoaDon?: HoaDonOmit
    combo?: ComboOmit
    hoaDonCombo?: HoaDonComboOmit
    giaoDichWebhook?: GiaoDichWebhookOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CumRapCountOutputType
   */

  export type CumRapCountOutputType = {
    RapPhim: number
  }

  export type CumRapCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    RapPhim?: boolean | CumRapCountOutputTypeCountRapPhimArgs
  }

  // Custom InputTypes
  /**
   * CumRapCountOutputType without action
   */
  export type CumRapCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CumRapCountOutputType
     */
    select?: CumRapCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CumRapCountOutputType without action
   */
  export type CumRapCountOutputTypeCountRapPhimArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RapPhimWhereInput
  }


  /**
   * Count Type GheCountOutputType
   */

  export type GheCountOutputType = {
    DatVe: number
    GiuCho: number
  }

  export type GheCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    DatVe?: boolean | GheCountOutputTypeCountDatVeArgs
    GiuCho?: boolean | GheCountOutputTypeCountGiuChoArgs
  }

  // Custom InputTypes
  /**
   * GheCountOutputType without action
   */
  export type GheCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GheCountOutputType
     */
    select?: GheCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GheCountOutputType without action
   */
  export type GheCountOutputTypeCountDatVeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DatVeWhereInput
  }

  /**
   * GheCountOutputType without action
   */
  export type GheCountOutputTypeCountGiuChoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GiuChoWhereInput
  }


  /**
   * Count Type HeThongRapCountOutputType
   */

  export type HeThongRapCountOutputType = {
    CumRap: number
  }

  export type HeThongRapCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CumRap?: boolean | HeThongRapCountOutputTypeCountCumRapArgs
  }

  // Custom InputTypes
  /**
   * HeThongRapCountOutputType without action
   */
  export type HeThongRapCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeThongRapCountOutputType
     */
    select?: HeThongRapCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HeThongRapCountOutputType without action
   */
  export type HeThongRapCountOutputTypeCountCumRapArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CumRapWhereInput
  }


  /**
   * Count Type LichChieuCountOutputType
   */

  export type LichChieuCountOutputType = {
    DatVe: number
    GiuCho: number
    HoaDon: number
  }

  export type LichChieuCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    DatVe?: boolean | LichChieuCountOutputTypeCountDatVeArgs
    GiuCho?: boolean | LichChieuCountOutputTypeCountGiuChoArgs
    HoaDon?: boolean | LichChieuCountOutputTypeCountHoaDonArgs
  }

  // Custom InputTypes
  /**
   * LichChieuCountOutputType without action
   */
  export type LichChieuCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LichChieuCountOutputType
     */
    select?: LichChieuCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LichChieuCountOutputType without action
   */
  export type LichChieuCountOutputTypeCountDatVeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DatVeWhereInput
  }

  /**
   * LichChieuCountOutputType without action
   */
  export type LichChieuCountOutputTypeCountGiuChoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GiuChoWhereInput
  }

  /**
   * LichChieuCountOutputType without action
   */
  export type LichChieuCountOutputTypeCountHoaDonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HoaDonWhereInput
  }


  /**
   * Count Type NguoiDungCountOutputType
   */

  export type NguoiDungCountOutputType = {
    DatVe: number
    GiuCho: number
    HoaDon: number
    RefreshToken: number
  }

  export type NguoiDungCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    DatVe?: boolean | NguoiDungCountOutputTypeCountDatVeArgs
    GiuCho?: boolean | NguoiDungCountOutputTypeCountGiuChoArgs
    HoaDon?: boolean | NguoiDungCountOutputTypeCountHoaDonArgs
    RefreshToken?: boolean | NguoiDungCountOutputTypeCountRefreshTokenArgs
  }

  // Custom InputTypes
  /**
   * NguoiDungCountOutputType without action
   */
  export type NguoiDungCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NguoiDungCountOutputType
     */
    select?: NguoiDungCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * NguoiDungCountOutputType without action
   */
  export type NguoiDungCountOutputTypeCountDatVeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DatVeWhereInput
  }

  /**
   * NguoiDungCountOutputType without action
   */
  export type NguoiDungCountOutputTypeCountGiuChoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GiuChoWhereInput
  }

  /**
   * NguoiDungCountOutputType without action
   */
  export type NguoiDungCountOutputTypeCountHoaDonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HoaDonWhereInput
  }

  /**
   * NguoiDungCountOutputType without action
   */
  export type NguoiDungCountOutputTypeCountRefreshTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefreshTokenWhereInput
  }


  /**
   * Count Type PhimCountOutputType
   */

  export type PhimCountOutputType = {
    Banner: number
    LichChieu: number
  }

  export type PhimCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Banner?: boolean | PhimCountOutputTypeCountBannerArgs
    LichChieu?: boolean | PhimCountOutputTypeCountLichChieuArgs
  }

  // Custom InputTypes
  /**
   * PhimCountOutputType without action
   */
  export type PhimCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhimCountOutputType
     */
    select?: PhimCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PhimCountOutputType without action
   */
  export type PhimCountOutputTypeCountBannerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BannerWhereInput
  }

  /**
   * PhimCountOutputType without action
   */
  export type PhimCountOutputTypeCountLichChieuArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LichChieuWhereInput
  }


  /**
   * Count Type RapPhimCountOutputType
   */

  export type RapPhimCountOutputType = {
    Ghe: number
    LichChieu: number
  }

  export type RapPhimCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Ghe?: boolean | RapPhimCountOutputTypeCountGheArgs
    LichChieu?: boolean | RapPhimCountOutputTypeCountLichChieuArgs
  }

  // Custom InputTypes
  /**
   * RapPhimCountOutputType without action
   */
  export type RapPhimCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RapPhimCountOutputType
     */
    select?: RapPhimCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RapPhimCountOutputType without action
   */
  export type RapPhimCountOutputTypeCountGheArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GheWhereInput
  }

  /**
   * RapPhimCountOutputType without action
   */
  export type RapPhimCountOutputTypeCountLichChieuArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LichChieuWhereInput
  }


  /**
   * Count Type HoaDonCountOutputType
   */

  export type HoaDonCountOutputType = {
    DatVe: number
    HoaDonCombo: number
    GiuCho: number
  }

  export type HoaDonCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    DatVe?: boolean | HoaDonCountOutputTypeCountDatVeArgs
    HoaDonCombo?: boolean | HoaDonCountOutputTypeCountHoaDonComboArgs
    GiuCho?: boolean | HoaDonCountOutputTypeCountGiuChoArgs
  }

  // Custom InputTypes
  /**
   * HoaDonCountOutputType without action
   */
  export type HoaDonCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HoaDonCountOutputType
     */
    select?: HoaDonCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HoaDonCountOutputType without action
   */
  export type HoaDonCountOutputTypeCountDatVeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DatVeWhereInput
  }

  /**
   * HoaDonCountOutputType without action
   */
  export type HoaDonCountOutputTypeCountHoaDonComboArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HoaDonComboWhereInput
  }

  /**
   * HoaDonCountOutputType without action
   */
  export type HoaDonCountOutputTypeCountGiuChoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GiuChoWhereInput
  }


  /**
   * Count Type ComboCountOutputType
   */

  export type ComboCountOutputType = {
    HoaDonCombo: number
  }

  export type ComboCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    HoaDonCombo?: boolean | ComboCountOutputTypeCountHoaDonComboArgs
  }

  // Custom InputTypes
  /**
   * ComboCountOutputType without action
   */
  export type ComboCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComboCountOutputType
     */
    select?: ComboCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ComboCountOutputType without action
   */
  export type ComboCountOutputTypeCountHoaDonComboArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HoaDonComboWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Banner
   */

  export type AggregateBanner = {
    _count: BannerCountAggregateOutputType | null
    _avg: BannerAvgAggregateOutputType | null
    _sum: BannerSumAggregateOutputType | null
    _min: BannerMinAggregateOutputType | null
    _max: BannerMaxAggregateOutputType | null
  }

  export type BannerAvgAggregateOutputType = {
    ma_banner: number | null
    ma_phim: number | null
  }

  export type BannerSumAggregateOutputType = {
    ma_banner: number | null
    ma_phim: number | null
  }

  export type BannerMinAggregateOutputType = {
    ma_banner: number | null
    ma_phim: number | null
    hinh_anh: string | null
  }

  export type BannerMaxAggregateOutputType = {
    ma_banner: number | null
    ma_phim: number | null
    hinh_anh: string | null
  }

  export type BannerCountAggregateOutputType = {
    ma_banner: number
    ma_phim: number
    hinh_anh: number
    _all: number
  }


  export type BannerAvgAggregateInputType = {
    ma_banner?: true
    ma_phim?: true
  }

  export type BannerSumAggregateInputType = {
    ma_banner?: true
    ma_phim?: true
  }

  export type BannerMinAggregateInputType = {
    ma_banner?: true
    ma_phim?: true
    hinh_anh?: true
  }

  export type BannerMaxAggregateInputType = {
    ma_banner?: true
    ma_phim?: true
    hinh_anh?: true
  }

  export type BannerCountAggregateInputType = {
    ma_banner?: true
    ma_phim?: true
    hinh_anh?: true
    _all?: true
  }

  export type BannerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Banner to aggregate.
     */
    where?: BannerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Banners to fetch.
     */
    orderBy?: BannerOrderByWithRelationInput | BannerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BannerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Banners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Banners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Banners
    **/
    _count?: true | BannerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BannerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BannerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BannerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BannerMaxAggregateInputType
  }

  export type GetBannerAggregateType<T extends BannerAggregateArgs> = {
        [P in keyof T & keyof AggregateBanner]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBanner[P]>
      : GetScalarType<T[P], AggregateBanner[P]>
  }




  export type BannerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BannerWhereInput
    orderBy?: BannerOrderByWithAggregationInput | BannerOrderByWithAggregationInput[]
    by: BannerScalarFieldEnum[] | BannerScalarFieldEnum
    having?: BannerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BannerCountAggregateInputType | true
    _avg?: BannerAvgAggregateInputType
    _sum?: BannerSumAggregateInputType
    _min?: BannerMinAggregateInputType
    _max?: BannerMaxAggregateInputType
  }

  export type BannerGroupByOutputType = {
    ma_banner: number
    ma_phim: number | null
    hinh_anh: string | null
    _count: BannerCountAggregateOutputType | null
    _avg: BannerAvgAggregateOutputType | null
    _sum: BannerSumAggregateOutputType | null
    _min: BannerMinAggregateOutputType | null
    _max: BannerMaxAggregateOutputType | null
  }

  type GetBannerGroupByPayload<T extends BannerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BannerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BannerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BannerGroupByOutputType[P]>
            : GetScalarType<T[P], BannerGroupByOutputType[P]>
        }
      >
    >


  export type BannerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ma_banner?: boolean
    ma_phim?: boolean
    hinh_anh?: boolean
    Phim?: boolean | Banner$PhimArgs<ExtArgs>
  }, ExtArgs["result"]["banner"]>



  export type BannerSelectScalar = {
    ma_banner?: boolean
    ma_phim?: boolean
    hinh_anh?: boolean
  }

  export type BannerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ma_banner" | "ma_phim" | "hinh_anh", ExtArgs["result"]["banner"]>
  export type BannerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Phim?: boolean | Banner$PhimArgs<ExtArgs>
  }

  export type $BannerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Banner"
    objects: {
      Phim: Prisma.$PhimPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      ma_banner: number
      ma_phim: number | null
      hinh_anh: string | null
    }, ExtArgs["result"]["banner"]>
    composites: {}
  }

  type BannerGetPayload<S extends boolean | null | undefined | BannerDefaultArgs> = $Result.GetResult<Prisma.$BannerPayload, S>

  type BannerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BannerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BannerCountAggregateInputType | true
    }

  export interface BannerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Banner'], meta: { name: 'Banner' } }
    /**
     * Find zero or one Banner that matches the filter.
     * @param {BannerFindUniqueArgs} args - Arguments to find a Banner
     * @example
     * // Get one Banner
     * const banner = await prisma.banner.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BannerFindUniqueArgs>(args: SelectSubset<T, BannerFindUniqueArgs<ExtArgs>>): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Banner that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BannerFindUniqueOrThrowArgs} args - Arguments to find a Banner
     * @example
     * // Get one Banner
     * const banner = await prisma.banner.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BannerFindUniqueOrThrowArgs>(args: SelectSubset<T, BannerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Banner that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerFindFirstArgs} args - Arguments to find a Banner
     * @example
     * // Get one Banner
     * const banner = await prisma.banner.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BannerFindFirstArgs>(args?: SelectSubset<T, BannerFindFirstArgs<ExtArgs>>): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Banner that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerFindFirstOrThrowArgs} args - Arguments to find a Banner
     * @example
     * // Get one Banner
     * const banner = await prisma.banner.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BannerFindFirstOrThrowArgs>(args?: SelectSubset<T, BannerFindFirstOrThrowArgs<ExtArgs>>): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Banners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Banners
     * const banners = await prisma.banner.findMany()
     * 
     * // Get first 10 Banners
     * const banners = await prisma.banner.findMany({ take: 10 })
     * 
     * // Only select the `ma_banner`
     * const bannerWithMa_bannerOnly = await prisma.banner.findMany({ select: { ma_banner: true } })
     * 
     */
    findMany<T extends BannerFindManyArgs>(args?: SelectSubset<T, BannerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Banner.
     * @param {BannerCreateArgs} args - Arguments to create a Banner.
     * @example
     * // Create one Banner
     * const Banner = await prisma.banner.create({
     *   data: {
     *     // ... data to create a Banner
     *   }
     * })
     * 
     */
    create<T extends BannerCreateArgs>(args: SelectSubset<T, BannerCreateArgs<ExtArgs>>): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Banners.
     * @param {BannerCreateManyArgs} args - Arguments to create many Banners.
     * @example
     * // Create many Banners
     * const banner = await prisma.banner.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BannerCreateManyArgs>(args?: SelectSubset<T, BannerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Banner.
     * @param {BannerDeleteArgs} args - Arguments to delete one Banner.
     * @example
     * // Delete one Banner
     * const Banner = await prisma.banner.delete({
     *   where: {
     *     // ... filter to delete one Banner
     *   }
     * })
     * 
     */
    delete<T extends BannerDeleteArgs>(args: SelectSubset<T, BannerDeleteArgs<ExtArgs>>): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Banner.
     * @param {BannerUpdateArgs} args - Arguments to update one Banner.
     * @example
     * // Update one Banner
     * const banner = await prisma.banner.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BannerUpdateArgs>(args: SelectSubset<T, BannerUpdateArgs<ExtArgs>>): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Banners.
     * @param {BannerDeleteManyArgs} args - Arguments to filter Banners to delete.
     * @example
     * // Delete a few Banners
     * const { count } = await prisma.banner.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BannerDeleteManyArgs>(args?: SelectSubset<T, BannerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Banners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Banners
     * const banner = await prisma.banner.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BannerUpdateManyArgs>(args: SelectSubset<T, BannerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Banner.
     * @param {BannerUpsertArgs} args - Arguments to update or create a Banner.
     * @example
     * // Update or create a Banner
     * const banner = await prisma.banner.upsert({
     *   create: {
     *     // ... data to create a Banner
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Banner we want to update
     *   }
     * })
     */
    upsert<T extends BannerUpsertArgs>(args: SelectSubset<T, BannerUpsertArgs<ExtArgs>>): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Banners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerCountArgs} args - Arguments to filter Banners to count.
     * @example
     * // Count the number of Banners
     * const count = await prisma.banner.count({
     *   where: {
     *     // ... the filter for the Banners we want to count
     *   }
     * })
    **/
    count<T extends BannerCountArgs>(
      args?: Subset<T, BannerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BannerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Banner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BannerAggregateArgs>(args: Subset<T, BannerAggregateArgs>): Prisma.PrismaPromise<GetBannerAggregateType<T>>

    /**
     * Group by Banner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerGroupByArgs} args - Group by arguments.
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
      T extends BannerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BannerGroupByArgs['orderBy'] }
        : { orderBy?: BannerGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BannerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBannerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Banner model
   */
  readonly fields: BannerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Banner.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BannerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Phim<T extends Banner$PhimArgs<ExtArgs> = {}>(args?: Subset<T, Banner$PhimArgs<ExtArgs>>): Prisma__PhimClient<$Result.GetResult<Prisma.$PhimPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Banner model
   */
  interface BannerFieldRefs {
    readonly ma_banner: FieldRef<"Banner", 'Int'>
    readonly ma_phim: FieldRef<"Banner", 'Int'>
    readonly hinh_anh: FieldRef<"Banner", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Banner findUnique
   */
  export type BannerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BannerInclude<ExtArgs> | null
    /**
     * Filter, which Banner to fetch.
     */
    where: BannerWhereUniqueInput
  }

  /**
   * Banner findUniqueOrThrow
   */
  export type BannerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BannerInclude<ExtArgs> | null
    /**
     * Filter, which Banner to fetch.
     */
    where: BannerWhereUniqueInput
  }

  /**
   * Banner findFirst
   */
  export type BannerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BannerInclude<ExtArgs> | null
    /**
     * Filter, which Banner to fetch.
     */
    where?: BannerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Banners to fetch.
     */
    orderBy?: BannerOrderByWithRelationInput | BannerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Banners.
     */
    cursor?: BannerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Banners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Banners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Banners.
     */
    distinct?: BannerScalarFieldEnum | BannerScalarFieldEnum[]
  }

  /**
   * Banner findFirstOrThrow
   */
  export type BannerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BannerInclude<ExtArgs> | null
    /**
     * Filter, which Banner to fetch.
     */
    where?: BannerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Banners to fetch.
     */
    orderBy?: BannerOrderByWithRelationInput | BannerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Banners.
     */
    cursor?: BannerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Banners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Banners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Banners.
     */
    distinct?: BannerScalarFieldEnum | BannerScalarFieldEnum[]
  }

  /**
   * Banner findMany
   */
  export type BannerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BannerInclude<ExtArgs> | null
    /**
     * Filter, which Banners to fetch.
     */
    where?: BannerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Banners to fetch.
     */
    orderBy?: BannerOrderByWithRelationInput | BannerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Banners.
     */
    cursor?: BannerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Banners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Banners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Banners.
     */
    distinct?: BannerScalarFieldEnum | BannerScalarFieldEnum[]
  }

  /**
   * Banner create
   */
  export type BannerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BannerInclude<ExtArgs> | null
    /**
     * The data needed to create a Banner.
     */
    data?: XOR<BannerCreateInput, BannerUncheckedCreateInput>
  }

  /**
   * Banner createMany
   */
  export type BannerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Banners.
     */
    data: BannerCreateManyInput | BannerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Banner update
   */
  export type BannerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BannerInclude<ExtArgs> | null
    /**
     * The data needed to update a Banner.
     */
    data: XOR<BannerUpdateInput, BannerUncheckedUpdateInput>
    /**
     * Choose, which Banner to update.
     */
    where: BannerWhereUniqueInput
  }

  /**
   * Banner updateMany
   */
  export type BannerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Banners.
     */
    data: XOR<BannerUpdateManyMutationInput, BannerUncheckedUpdateManyInput>
    /**
     * Filter which Banners to update
     */
    where?: BannerWhereInput
    /**
     * Limit how many Banners to update.
     */
    limit?: number
  }

  /**
   * Banner upsert
   */
  export type BannerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BannerInclude<ExtArgs> | null
    /**
     * The filter to search for the Banner to update in case it exists.
     */
    where: BannerWhereUniqueInput
    /**
     * In case the Banner found by the `where` argument doesn't exist, create a new Banner with this data.
     */
    create: XOR<BannerCreateInput, BannerUncheckedCreateInput>
    /**
     * In case the Banner was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BannerUpdateInput, BannerUncheckedUpdateInput>
  }

  /**
   * Banner delete
   */
  export type BannerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BannerInclude<ExtArgs> | null
    /**
     * Filter which Banner to delete.
     */
    where: BannerWhereUniqueInput
  }

  /**
   * Banner deleteMany
   */
  export type BannerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Banners to delete
     */
    where?: BannerWhereInput
    /**
     * Limit how many Banners to delete.
     */
    limit?: number
  }

  /**
   * Banner.Phim
   */
  export type Banner$PhimArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phim
     */
    select?: PhimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Phim
     */
    omit?: PhimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhimInclude<ExtArgs> | null
    where?: PhimWhereInput
  }

  /**
   * Banner without action
   */
  export type BannerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BannerInclude<ExtArgs> | null
  }


  /**
   * Model CumRap
   */

  export type AggregateCumRap = {
    _count: CumRapCountAggregateOutputType | null
    _avg: CumRapAvgAggregateOutputType | null
    _sum: CumRapSumAggregateOutputType | null
    _min: CumRapMinAggregateOutputType | null
    _max: CumRapMaxAggregateOutputType | null
  }

  export type CumRapAvgAggregateOutputType = {
    ma_cum_rap: number | null
    ma_he_thong_rap: number | null
  }

  export type CumRapSumAggregateOutputType = {
    ma_cum_rap: number | null
    ma_he_thong_rap: number | null
  }

  export type CumRapMinAggregateOutputType = {
    ma_cum_rap: number | null
    ten_cum_rap: string | null
    dia_chi: string | null
    ma_he_thong_rap: number | null
    khu_vuc: string | null
  }

  export type CumRapMaxAggregateOutputType = {
    ma_cum_rap: number | null
    ten_cum_rap: string | null
    dia_chi: string | null
    ma_he_thong_rap: number | null
    khu_vuc: string | null
  }

  export type CumRapCountAggregateOutputType = {
    ma_cum_rap: number
    ten_cum_rap: number
    dia_chi: number
    ma_he_thong_rap: number
    khu_vuc: number
    _all: number
  }


  export type CumRapAvgAggregateInputType = {
    ma_cum_rap?: true
    ma_he_thong_rap?: true
  }

  export type CumRapSumAggregateInputType = {
    ma_cum_rap?: true
    ma_he_thong_rap?: true
  }

  export type CumRapMinAggregateInputType = {
    ma_cum_rap?: true
    ten_cum_rap?: true
    dia_chi?: true
    ma_he_thong_rap?: true
    khu_vuc?: true
  }

  export type CumRapMaxAggregateInputType = {
    ma_cum_rap?: true
    ten_cum_rap?: true
    dia_chi?: true
    ma_he_thong_rap?: true
    khu_vuc?: true
  }

  export type CumRapCountAggregateInputType = {
    ma_cum_rap?: true
    ten_cum_rap?: true
    dia_chi?: true
    ma_he_thong_rap?: true
    khu_vuc?: true
    _all?: true
  }

  export type CumRapAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CumRap to aggregate.
     */
    where?: CumRapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CumRaps to fetch.
     */
    orderBy?: CumRapOrderByWithRelationInput | CumRapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CumRapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CumRaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CumRaps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CumRaps
    **/
    _count?: true | CumRapCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CumRapAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CumRapSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CumRapMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CumRapMaxAggregateInputType
  }

  export type GetCumRapAggregateType<T extends CumRapAggregateArgs> = {
        [P in keyof T & keyof AggregateCumRap]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCumRap[P]>
      : GetScalarType<T[P], AggregateCumRap[P]>
  }




  export type CumRapGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CumRapWhereInput
    orderBy?: CumRapOrderByWithAggregationInput | CumRapOrderByWithAggregationInput[]
    by: CumRapScalarFieldEnum[] | CumRapScalarFieldEnum
    having?: CumRapScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CumRapCountAggregateInputType | true
    _avg?: CumRapAvgAggregateInputType
    _sum?: CumRapSumAggregateInputType
    _min?: CumRapMinAggregateInputType
    _max?: CumRapMaxAggregateInputType
  }

  export type CumRapGroupByOutputType = {
    ma_cum_rap: number
    ten_cum_rap: string | null
    dia_chi: string | null
    ma_he_thong_rap: number | null
    khu_vuc: string | null
    _count: CumRapCountAggregateOutputType | null
    _avg: CumRapAvgAggregateOutputType | null
    _sum: CumRapSumAggregateOutputType | null
    _min: CumRapMinAggregateOutputType | null
    _max: CumRapMaxAggregateOutputType | null
  }

  type GetCumRapGroupByPayload<T extends CumRapGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CumRapGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CumRapGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CumRapGroupByOutputType[P]>
            : GetScalarType<T[P], CumRapGroupByOutputType[P]>
        }
      >
    >


  export type CumRapSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ma_cum_rap?: boolean
    ten_cum_rap?: boolean
    dia_chi?: boolean
    ma_he_thong_rap?: boolean
    khu_vuc?: boolean
    HeThongRap?: boolean | CumRap$HeThongRapArgs<ExtArgs>
    RapPhim?: boolean | CumRap$RapPhimArgs<ExtArgs>
    _count?: boolean | CumRapCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cumRap"]>



  export type CumRapSelectScalar = {
    ma_cum_rap?: boolean
    ten_cum_rap?: boolean
    dia_chi?: boolean
    ma_he_thong_rap?: boolean
    khu_vuc?: boolean
  }

  export type CumRapOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ma_cum_rap" | "ten_cum_rap" | "dia_chi" | "ma_he_thong_rap" | "khu_vuc", ExtArgs["result"]["cumRap"]>
  export type CumRapInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    HeThongRap?: boolean | CumRap$HeThongRapArgs<ExtArgs>
    RapPhim?: boolean | CumRap$RapPhimArgs<ExtArgs>
    _count?: boolean | CumRapCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CumRapPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CumRap"
    objects: {
      HeThongRap: Prisma.$HeThongRapPayload<ExtArgs> | null
      RapPhim: Prisma.$RapPhimPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      ma_cum_rap: number
      ten_cum_rap: string | null
      dia_chi: string | null
      ma_he_thong_rap: number | null
      khu_vuc: string | null
    }, ExtArgs["result"]["cumRap"]>
    composites: {}
  }

  type CumRapGetPayload<S extends boolean | null | undefined | CumRapDefaultArgs> = $Result.GetResult<Prisma.$CumRapPayload, S>

  type CumRapCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CumRapFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CumRapCountAggregateInputType | true
    }

  export interface CumRapDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CumRap'], meta: { name: 'CumRap' } }
    /**
     * Find zero or one CumRap that matches the filter.
     * @param {CumRapFindUniqueArgs} args - Arguments to find a CumRap
     * @example
     * // Get one CumRap
     * const cumRap = await prisma.cumRap.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CumRapFindUniqueArgs>(args: SelectSubset<T, CumRapFindUniqueArgs<ExtArgs>>): Prisma__CumRapClient<$Result.GetResult<Prisma.$CumRapPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CumRap that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CumRapFindUniqueOrThrowArgs} args - Arguments to find a CumRap
     * @example
     * // Get one CumRap
     * const cumRap = await prisma.cumRap.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CumRapFindUniqueOrThrowArgs>(args: SelectSubset<T, CumRapFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CumRapClient<$Result.GetResult<Prisma.$CumRapPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CumRap that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CumRapFindFirstArgs} args - Arguments to find a CumRap
     * @example
     * // Get one CumRap
     * const cumRap = await prisma.cumRap.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CumRapFindFirstArgs>(args?: SelectSubset<T, CumRapFindFirstArgs<ExtArgs>>): Prisma__CumRapClient<$Result.GetResult<Prisma.$CumRapPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CumRap that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CumRapFindFirstOrThrowArgs} args - Arguments to find a CumRap
     * @example
     * // Get one CumRap
     * const cumRap = await prisma.cumRap.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CumRapFindFirstOrThrowArgs>(args?: SelectSubset<T, CumRapFindFirstOrThrowArgs<ExtArgs>>): Prisma__CumRapClient<$Result.GetResult<Prisma.$CumRapPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CumRaps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CumRapFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CumRaps
     * const cumRaps = await prisma.cumRap.findMany()
     * 
     * // Get first 10 CumRaps
     * const cumRaps = await prisma.cumRap.findMany({ take: 10 })
     * 
     * // Only select the `ma_cum_rap`
     * const cumRapWithMa_cum_rapOnly = await prisma.cumRap.findMany({ select: { ma_cum_rap: true } })
     * 
     */
    findMany<T extends CumRapFindManyArgs>(args?: SelectSubset<T, CumRapFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CumRapPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CumRap.
     * @param {CumRapCreateArgs} args - Arguments to create a CumRap.
     * @example
     * // Create one CumRap
     * const CumRap = await prisma.cumRap.create({
     *   data: {
     *     // ... data to create a CumRap
     *   }
     * })
     * 
     */
    create<T extends CumRapCreateArgs>(args: SelectSubset<T, CumRapCreateArgs<ExtArgs>>): Prisma__CumRapClient<$Result.GetResult<Prisma.$CumRapPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CumRaps.
     * @param {CumRapCreateManyArgs} args - Arguments to create many CumRaps.
     * @example
     * // Create many CumRaps
     * const cumRap = await prisma.cumRap.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CumRapCreateManyArgs>(args?: SelectSubset<T, CumRapCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CumRap.
     * @param {CumRapDeleteArgs} args - Arguments to delete one CumRap.
     * @example
     * // Delete one CumRap
     * const CumRap = await prisma.cumRap.delete({
     *   where: {
     *     // ... filter to delete one CumRap
     *   }
     * })
     * 
     */
    delete<T extends CumRapDeleteArgs>(args: SelectSubset<T, CumRapDeleteArgs<ExtArgs>>): Prisma__CumRapClient<$Result.GetResult<Prisma.$CumRapPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CumRap.
     * @param {CumRapUpdateArgs} args - Arguments to update one CumRap.
     * @example
     * // Update one CumRap
     * const cumRap = await prisma.cumRap.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CumRapUpdateArgs>(args: SelectSubset<T, CumRapUpdateArgs<ExtArgs>>): Prisma__CumRapClient<$Result.GetResult<Prisma.$CumRapPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CumRaps.
     * @param {CumRapDeleteManyArgs} args - Arguments to filter CumRaps to delete.
     * @example
     * // Delete a few CumRaps
     * const { count } = await prisma.cumRap.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CumRapDeleteManyArgs>(args?: SelectSubset<T, CumRapDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CumRaps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CumRapUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CumRaps
     * const cumRap = await prisma.cumRap.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CumRapUpdateManyArgs>(args: SelectSubset<T, CumRapUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CumRap.
     * @param {CumRapUpsertArgs} args - Arguments to update or create a CumRap.
     * @example
     * // Update or create a CumRap
     * const cumRap = await prisma.cumRap.upsert({
     *   create: {
     *     // ... data to create a CumRap
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CumRap we want to update
     *   }
     * })
     */
    upsert<T extends CumRapUpsertArgs>(args: SelectSubset<T, CumRapUpsertArgs<ExtArgs>>): Prisma__CumRapClient<$Result.GetResult<Prisma.$CumRapPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CumRaps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CumRapCountArgs} args - Arguments to filter CumRaps to count.
     * @example
     * // Count the number of CumRaps
     * const count = await prisma.cumRap.count({
     *   where: {
     *     // ... the filter for the CumRaps we want to count
     *   }
     * })
    **/
    count<T extends CumRapCountArgs>(
      args?: Subset<T, CumRapCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CumRapCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CumRap.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CumRapAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CumRapAggregateArgs>(args: Subset<T, CumRapAggregateArgs>): Prisma.PrismaPromise<GetCumRapAggregateType<T>>

    /**
     * Group by CumRap.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CumRapGroupByArgs} args - Group by arguments.
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
      T extends CumRapGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CumRapGroupByArgs['orderBy'] }
        : { orderBy?: CumRapGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CumRapGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCumRapGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CumRap model
   */
  readonly fields: CumRapFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CumRap.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CumRapClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    HeThongRap<T extends CumRap$HeThongRapArgs<ExtArgs> = {}>(args?: Subset<T, CumRap$HeThongRapArgs<ExtArgs>>): Prisma__HeThongRapClient<$Result.GetResult<Prisma.$HeThongRapPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    RapPhim<T extends CumRap$RapPhimArgs<ExtArgs> = {}>(args?: Subset<T, CumRap$RapPhimArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RapPhimPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CumRap model
   */
  interface CumRapFieldRefs {
    readonly ma_cum_rap: FieldRef<"CumRap", 'Int'>
    readonly ten_cum_rap: FieldRef<"CumRap", 'String'>
    readonly dia_chi: FieldRef<"CumRap", 'String'>
    readonly ma_he_thong_rap: FieldRef<"CumRap", 'Int'>
    readonly khu_vuc: FieldRef<"CumRap", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CumRap findUnique
   */
  export type CumRapFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CumRap
     */
    select?: CumRapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CumRap
     */
    omit?: CumRapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CumRapInclude<ExtArgs> | null
    /**
     * Filter, which CumRap to fetch.
     */
    where: CumRapWhereUniqueInput
  }

  /**
   * CumRap findUniqueOrThrow
   */
  export type CumRapFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CumRap
     */
    select?: CumRapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CumRap
     */
    omit?: CumRapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CumRapInclude<ExtArgs> | null
    /**
     * Filter, which CumRap to fetch.
     */
    where: CumRapWhereUniqueInput
  }

  /**
   * CumRap findFirst
   */
  export type CumRapFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CumRap
     */
    select?: CumRapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CumRap
     */
    omit?: CumRapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CumRapInclude<ExtArgs> | null
    /**
     * Filter, which CumRap to fetch.
     */
    where?: CumRapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CumRaps to fetch.
     */
    orderBy?: CumRapOrderByWithRelationInput | CumRapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CumRaps.
     */
    cursor?: CumRapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CumRaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CumRaps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CumRaps.
     */
    distinct?: CumRapScalarFieldEnum | CumRapScalarFieldEnum[]
  }

  /**
   * CumRap findFirstOrThrow
   */
  export type CumRapFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CumRap
     */
    select?: CumRapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CumRap
     */
    omit?: CumRapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CumRapInclude<ExtArgs> | null
    /**
     * Filter, which CumRap to fetch.
     */
    where?: CumRapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CumRaps to fetch.
     */
    orderBy?: CumRapOrderByWithRelationInput | CumRapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CumRaps.
     */
    cursor?: CumRapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CumRaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CumRaps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CumRaps.
     */
    distinct?: CumRapScalarFieldEnum | CumRapScalarFieldEnum[]
  }

  /**
   * CumRap findMany
   */
  export type CumRapFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CumRap
     */
    select?: CumRapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CumRap
     */
    omit?: CumRapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CumRapInclude<ExtArgs> | null
    /**
     * Filter, which CumRaps to fetch.
     */
    where?: CumRapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CumRaps to fetch.
     */
    orderBy?: CumRapOrderByWithRelationInput | CumRapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CumRaps.
     */
    cursor?: CumRapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CumRaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CumRaps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CumRaps.
     */
    distinct?: CumRapScalarFieldEnum | CumRapScalarFieldEnum[]
  }

  /**
   * CumRap create
   */
  export type CumRapCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CumRap
     */
    select?: CumRapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CumRap
     */
    omit?: CumRapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CumRapInclude<ExtArgs> | null
    /**
     * The data needed to create a CumRap.
     */
    data?: XOR<CumRapCreateInput, CumRapUncheckedCreateInput>
  }

  /**
   * CumRap createMany
   */
  export type CumRapCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CumRaps.
     */
    data: CumRapCreateManyInput | CumRapCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CumRap update
   */
  export type CumRapUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CumRap
     */
    select?: CumRapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CumRap
     */
    omit?: CumRapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CumRapInclude<ExtArgs> | null
    /**
     * The data needed to update a CumRap.
     */
    data: XOR<CumRapUpdateInput, CumRapUncheckedUpdateInput>
    /**
     * Choose, which CumRap to update.
     */
    where: CumRapWhereUniqueInput
  }

  /**
   * CumRap updateMany
   */
  export type CumRapUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CumRaps.
     */
    data: XOR<CumRapUpdateManyMutationInput, CumRapUncheckedUpdateManyInput>
    /**
     * Filter which CumRaps to update
     */
    where?: CumRapWhereInput
    /**
     * Limit how many CumRaps to update.
     */
    limit?: number
  }

  /**
   * CumRap upsert
   */
  export type CumRapUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CumRap
     */
    select?: CumRapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CumRap
     */
    omit?: CumRapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CumRapInclude<ExtArgs> | null
    /**
     * The filter to search for the CumRap to update in case it exists.
     */
    where: CumRapWhereUniqueInput
    /**
     * In case the CumRap found by the `where` argument doesn't exist, create a new CumRap with this data.
     */
    create: XOR<CumRapCreateInput, CumRapUncheckedCreateInput>
    /**
     * In case the CumRap was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CumRapUpdateInput, CumRapUncheckedUpdateInput>
  }

  /**
   * CumRap delete
   */
  export type CumRapDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CumRap
     */
    select?: CumRapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CumRap
     */
    omit?: CumRapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CumRapInclude<ExtArgs> | null
    /**
     * Filter which CumRap to delete.
     */
    where: CumRapWhereUniqueInput
  }

  /**
   * CumRap deleteMany
   */
  export type CumRapDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CumRaps to delete
     */
    where?: CumRapWhereInput
    /**
     * Limit how many CumRaps to delete.
     */
    limit?: number
  }

  /**
   * CumRap.HeThongRap
   */
  export type CumRap$HeThongRapArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeThongRap
     */
    select?: HeThongRapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeThongRap
     */
    omit?: HeThongRapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeThongRapInclude<ExtArgs> | null
    where?: HeThongRapWhereInput
  }

  /**
   * CumRap.RapPhim
   */
  export type CumRap$RapPhimArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RapPhim
     */
    select?: RapPhimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RapPhim
     */
    omit?: RapPhimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RapPhimInclude<ExtArgs> | null
    where?: RapPhimWhereInput
    orderBy?: RapPhimOrderByWithRelationInput | RapPhimOrderByWithRelationInput[]
    cursor?: RapPhimWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RapPhimScalarFieldEnum | RapPhimScalarFieldEnum[]
  }

  /**
   * CumRap without action
   */
  export type CumRapDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CumRap
     */
    select?: CumRapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CumRap
     */
    omit?: CumRapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CumRapInclude<ExtArgs> | null
  }


  /**
   * Model DatVe
   */

  export type AggregateDatVe = {
    _count: DatVeCountAggregateOutputType | null
    _avg: DatVeAvgAggregateOutputType | null
    _sum: DatVeSumAggregateOutputType | null
    _min: DatVeMinAggregateOutputType | null
    _max: DatVeMaxAggregateOutputType | null
  }

  export type DatVeAvgAggregateOutputType = {
    tai_khoan: number | null
    ma_lich_chieu: number | null
    ma_ghe: number | null
    gia_ve: number | null
    ma_hoa_don: number | null
  }

  export type DatVeSumAggregateOutputType = {
    tai_khoan: number | null
    ma_lich_chieu: number | null
    ma_ghe: number | null
    gia_ve: number | null
    ma_hoa_don: number | null
  }

  export type DatVeMinAggregateOutputType = {
    tai_khoan: number | null
    ma_lich_chieu: number | null
    ma_ghe: number | null
    gia_ve: number | null
    ma_hoa_don: number | null
    created_at: Date | null
  }

  export type DatVeMaxAggregateOutputType = {
    tai_khoan: number | null
    ma_lich_chieu: number | null
    ma_ghe: number | null
    gia_ve: number | null
    ma_hoa_don: number | null
    created_at: Date | null
  }

  export type DatVeCountAggregateOutputType = {
    tai_khoan: number
    ma_lich_chieu: number
    ma_ghe: number
    gia_ve: number
    ma_hoa_don: number
    created_at: number
    _all: number
  }


  export type DatVeAvgAggregateInputType = {
    tai_khoan?: true
    ma_lich_chieu?: true
    ma_ghe?: true
    gia_ve?: true
    ma_hoa_don?: true
  }

  export type DatVeSumAggregateInputType = {
    tai_khoan?: true
    ma_lich_chieu?: true
    ma_ghe?: true
    gia_ve?: true
    ma_hoa_don?: true
  }

  export type DatVeMinAggregateInputType = {
    tai_khoan?: true
    ma_lich_chieu?: true
    ma_ghe?: true
    gia_ve?: true
    ma_hoa_don?: true
    created_at?: true
  }

  export type DatVeMaxAggregateInputType = {
    tai_khoan?: true
    ma_lich_chieu?: true
    ma_ghe?: true
    gia_ve?: true
    ma_hoa_don?: true
    created_at?: true
  }

  export type DatVeCountAggregateInputType = {
    tai_khoan?: true
    ma_lich_chieu?: true
    ma_ghe?: true
    gia_ve?: true
    ma_hoa_don?: true
    created_at?: true
    _all?: true
  }

  export type DatVeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DatVe to aggregate.
     */
    where?: DatVeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DatVes to fetch.
     */
    orderBy?: DatVeOrderByWithRelationInput | DatVeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DatVeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DatVes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DatVes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DatVes
    **/
    _count?: true | DatVeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DatVeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DatVeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DatVeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DatVeMaxAggregateInputType
  }

  export type GetDatVeAggregateType<T extends DatVeAggregateArgs> = {
        [P in keyof T & keyof AggregateDatVe]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDatVe[P]>
      : GetScalarType<T[P], AggregateDatVe[P]>
  }




  export type DatVeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DatVeWhereInput
    orderBy?: DatVeOrderByWithAggregationInput | DatVeOrderByWithAggregationInput[]
    by: DatVeScalarFieldEnum[] | DatVeScalarFieldEnum
    having?: DatVeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DatVeCountAggregateInputType | true
    _avg?: DatVeAvgAggregateInputType
    _sum?: DatVeSumAggregateInputType
    _min?: DatVeMinAggregateInputType
    _max?: DatVeMaxAggregateInputType
  }

  export type DatVeGroupByOutputType = {
    tai_khoan: number
    ma_lich_chieu: number
    ma_ghe: number
    gia_ve: number
    ma_hoa_don: number | null
    created_at: Date | null
    _count: DatVeCountAggregateOutputType | null
    _avg: DatVeAvgAggregateOutputType | null
    _sum: DatVeSumAggregateOutputType | null
    _min: DatVeMinAggregateOutputType | null
    _max: DatVeMaxAggregateOutputType | null
  }

  type GetDatVeGroupByPayload<T extends DatVeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DatVeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DatVeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DatVeGroupByOutputType[P]>
            : GetScalarType<T[P], DatVeGroupByOutputType[P]>
        }
      >
    >


  export type DatVeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tai_khoan?: boolean
    ma_lich_chieu?: boolean
    ma_ghe?: boolean
    gia_ve?: boolean
    ma_hoa_don?: boolean
    created_at?: boolean
    NguoiDung?: boolean | NguoiDungDefaultArgs<ExtArgs>
    LichChieu?: boolean | LichChieuDefaultArgs<ExtArgs>
    Ghe?: boolean | GheDefaultArgs<ExtArgs>
    HoaDon?: boolean | DatVe$HoaDonArgs<ExtArgs>
  }, ExtArgs["result"]["datVe"]>



  export type DatVeSelectScalar = {
    tai_khoan?: boolean
    ma_lich_chieu?: boolean
    ma_ghe?: boolean
    gia_ve?: boolean
    ma_hoa_don?: boolean
    created_at?: boolean
  }

  export type DatVeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"tai_khoan" | "ma_lich_chieu" | "ma_ghe" | "gia_ve" | "ma_hoa_don" | "created_at", ExtArgs["result"]["datVe"]>
  export type DatVeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    NguoiDung?: boolean | NguoiDungDefaultArgs<ExtArgs>
    LichChieu?: boolean | LichChieuDefaultArgs<ExtArgs>
    Ghe?: boolean | GheDefaultArgs<ExtArgs>
    HoaDon?: boolean | DatVe$HoaDonArgs<ExtArgs>
  }

  export type $DatVePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DatVe"
    objects: {
      NguoiDung: Prisma.$NguoiDungPayload<ExtArgs>
      LichChieu: Prisma.$LichChieuPayload<ExtArgs>
      Ghe: Prisma.$GhePayload<ExtArgs>
      HoaDon: Prisma.$HoaDonPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      tai_khoan: number
      ma_lich_chieu: number
      ma_ghe: number
      gia_ve: number
      ma_hoa_don: number | null
      created_at: Date | null
    }, ExtArgs["result"]["datVe"]>
    composites: {}
  }

  type DatVeGetPayload<S extends boolean | null | undefined | DatVeDefaultArgs> = $Result.GetResult<Prisma.$DatVePayload, S>

  type DatVeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DatVeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DatVeCountAggregateInputType | true
    }

  export interface DatVeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DatVe'], meta: { name: 'DatVe' } }
    /**
     * Find zero or one DatVe that matches the filter.
     * @param {DatVeFindUniqueArgs} args - Arguments to find a DatVe
     * @example
     * // Get one DatVe
     * const datVe = await prisma.datVe.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DatVeFindUniqueArgs>(args: SelectSubset<T, DatVeFindUniqueArgs<ExtArgs>>): Prisma__DatVeClient<$Result.GetResult<Prisma.$DatVePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DatVe that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DatVeFindUniqueOrThrowArgs} args - Arguments to find a DatVe
     * @example
     * // Get one DatVe
     * const datVe = await prisma.datVe.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DatVeFindUniqueOrThrowArgs>(args: SelectSubset<T, DatVeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DatVeClient<$Result.GetResult<Prisma.$DatVePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DatVe that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatVeFindFirstArgs} args - Arguments to find a DatVe
     * @example
     * // Get one DatVe
     * const datVe = await prisma.datVe.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DatVeFindFirstArgs>(args?: SelectSubset<T, DatVeFindFirstArgs<ExtArgs>>): Prisma__DatVeClient<$Result.GetResult<Prisma.$DatVePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DatVe that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatVeFindFirstOrThrowArgs} args - Arguments to find a DatVe
     * @example
     * // Get one DatVe
     * const datVe = await prisma.datVe.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DatVeFindFirstOrThrowArgs>(args?: SelectSubset<T, DatVeFindFirstOrThrowArgs<ExtArgs>>): Prisma__DatVeClient<$Result.GetResult<Prisma.$DatVePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DatVes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatVeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DatVes
     * const datVes = await prisma.datVe.findMany()
     * 
     * // Get first 10 DatVes
     * const datVes = await prisma.datVe.findMany({ take: 10 })
     * 
     * // Only select the `tai_khoan`
     * const datVeWithTai_khoanOnly = await prisma.datVe.findMany({ select: { tai_khoan: true } })
     * 
     */
    findMany<T extends DatVeFindManyArgs>(args?: SelectSubset<T, DatVeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DatVePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DatVe.
     * @param {DatVeCreateArgs} args - Arguments to create a DatVe.
     * @example
     * // Create one DatVe
     * const DatVe = await prisma.datVe.create({
     *   data: {
     *     // ... data to create a DatVe
     *   }
     * })
     * 
     */
    create<T extends DatVeCreateArgs>(args: SelectSubset<T, DatVeCreateArgs<ExtArgs>>): Prisma__DatVeClient<$Result.GetResult<Prisma.$DatVePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DatVes.
     * @param {DatVeCreateManyArgs} args - Arguments to create many DatVes.
     * @example
     * // Create many DatVes
     * const datVe = await prisma.datVe.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DatVeCreateManyArgs>(args?: SelectSubset<T, DatVeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DatVe.
     * @param {DatVeDeleteArgs} args - Arguments to delete one DatVe.
     * @example
     * // Delete one DatVe
     * const DatVe = await prisma.datVe.delete({
     *   where: {
     *     // ... filter to delete one DatVe
     *   }
     * })
     * 
     */
    delete<T extends DatVeDeleteArgs>(args: SelectSubset<T, DatVeDeleteArgs<ExtArgs>>): Prisma__DatVeClient<$Result.GetResult<Prisma.$DatVePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DatVe.
     * @param {DatVeUpdateArgs} args - Arguments to update one DatVe.
     * @example
     * // Update one DatVe
     * const datVe = await prisma.datVe.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DatVeUpdateArgs>(args: SelectSubset<T, DatVeUpdateArgs<ExtArgs>>): Prisma__DatVeClient<$Result.GetResult<Prisma.$DatVePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DatVes.
     * @param {DatVeDeleteManyArgs} args - Arguments to filter DatVes to delete.
     * @example
     * // Delete a few DatVes
     * const { count } = await prisma.datVe.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DatVeDeleteManyArgs>(args?: SelectSubset<T, DatVeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DatVes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatVeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DatVes
     * const datVe = await prisma.datVe.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DatVeUpdateManyArgs>(args: SelectSubset<T, DatVeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DatVe.
     * @param {DatVeUpsertArgs} args - Arguments to update or create a DatVe.
     * @example
     * // Update or create a DatVe
     * const datVe = await prisma.datVe.upsert({
     *   create: {
     *     // ... data to create a DatVe
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DatVe we want to update
     *   }
     * })
     */
    upsert<T extends DatVeUpsertArgs>(args: SelectSubset<T, DatVeUpsertArgs<ExtArgs>>): Prisma__DatVeClient<$Result.GetResult<Prisma.$DatVePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DatVes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatVeCountArgs} args - Arguments to filter DatVes to count.
     * @example
     * // Count the number of DatVes
     * const count = await prisma.datVe.count({
     *   where: {
     *     // ... the filter for the DatVes we want to count
     *   }
     * })
    **/
    count<T extends DatVeCountArgs>(
      args?: Subset<T, DatVeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DatVeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DatVe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatVeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DatVeAggregateArgs>(args: Subset<T, DatVeAggregateArgs>): Prisma.PrismaPromise<GetDatVeAggregateType<T>>

    /**
     * Group by DatVe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatVeGroupByArgs} args - Group by arguments.
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
      T extends DatVeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DatVeGroupByArgs['orderBy'] }
        : { orderBy?: DatVeGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DatVeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDatVeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DatVe model
   */
  readonly fields: DatVeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DatVe.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DatVeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    NguoiDung<T extends NguoiDungDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NguoiDungDefaultArgs<ExtArgs>>): Prisma__NguoiDungClient<$Result.GetResult<Prisma.$NguoiDungPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    LichChieu<T extends LichChieuDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LichChieuDefaultArgs<ExtArgs>>): Prisma__LichChieuClient<$Result.GetResult<Prisma.$LichChieuPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Ghe<T extends GheDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GheDefaultArgs<ExtArgs>>): Prisma__GheClient<$Result.GetResult<Prisma.$GhePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    HoaDon<T extends DatVe$HoaDonArgs<ExtArgs> = {}>(args?: Subset<T, DatVe$HoaDonArgs<ExtArgs>>): Prisma__HoaDonClient<$Result.GetResult<Prisma.$HoaDonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DatVe model
   */
  interface DatVeFieldRefs {
    readonly tai_khoan: FieldRef<"DatVe", 'Int'>
    readonly ma_lich_chieu: FieldRef<"DatVe", 'Int'>
    readonly ma_ghe: FieldRef<"DatVe", 'Int'>
    readonly gia_ve: FieldRef<"DatVe", 'Int'>
    readonly ma_hoa_don: FieldRef<"DatVe", 'Int'>
    readonly created_at: FieldRef<"DatVe", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DatVe findUnique
   */
  export type DatVeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatVe
     */
    select?: DatVeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DatVe
     */
    omit?: DatVeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatVeInclude<ExtArgs> | null
    /**
     * Filter, which DatVe to fetch.
     */
    where: DatVeWhereUniqueInput
  }

  /**
   * DatVe findUniqueOrThrow
   */
  export type DatVeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatVe
     */
    select?: DatVeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DatVe
     */
    omit?: DatVeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatVeInclude<ExtArgs> | null
    /**
     * Filter, which DatVe to fetch.
     */
    where: DatVeWhereUniqueInput
  }

  /**
   * DatVe findFirst
   */
  export type DatVeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatVe
     */
    select?: DatVeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DatVe
     */
    omit?: DatVeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatVeInclude<ExtArgs> | null
    /**
     * Filter, which DatVe to fetch.
     */
    where?: DatVeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DatVes to fetch.
     */
    orderBy?: DatVeOrderByWithRelationInput | DatVeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DatVes.
     */
    cursor?: DatVeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DatVes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DatVes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DatVes.
     */
    distinct?: DatVeScalarFieldEnum | DatVeScalarFieldEnum[]
  }

  /**
   * DatVe findFirstOrThrow
   */
  export type DatVeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatVe
     */
    select?: DatVeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DatVe
     */
    omit?: DatVeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatVeInclude<ExtArgs> | null
    /**
     * Filter, which DatVe to fetch.
     */
    where?: DatVeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DatVes to fetch.
     */
    orderBy?: DatVeOrderByWithRelationInput | DatVeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DatVes.
     */
    cursor?: DatVeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DatVes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DatVes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DatVes.
     */
    distinct?: DatVeScalarFieldEnum | DatVeScalarFieldEnum[]
  }

  /**
   * DatVe findMany
   */
  export type DatVeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatVe
     */
    select?: DatVeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DatVe
     */
    omit?: DatVeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatVeInclude<ExtArgs> | null
    /**
     * Filter, which DatVes to fetch.
     */
    where?: DatVeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DatVes to fetch.
     */
    orderBy?: DatVeOrderByWithRelationInput | DatVeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DatVes.
     */
    cursor?: DatVeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DatVes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DatVes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DatVes.
     */
    distinct?: DatVeScalarFieldEnum | DatVeScalarFieldEnum[]
  }

  /**
   * DatVe create
   */
  export type DatVeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatVe
     */
    select?: DatVeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DatVe
     */
    omit?: DatVeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatVeInclude<ExtArgs> | null
    /**
     * The data needed to create a DatVe.
     */
    data: XOR<DatVeCreateInput, DatVeUncheckedCreateInput>
  }

  /**
   * DatVe createMany
   */
  export type DatVeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DatVes.
     */
    data: DatVeCreateManyInput | DatVeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DatVe update
   */
  export type DatVeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatVe
     */
    select?: DatVeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DatVe
     */
    omit?: DatVeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatVeInclude<ExtArgs> | null
    /**
     * The data needed to update a DatVe.
     */
    data: XOR<DatVeUpdateInput, DatVeUncheckedUpdateInput>
    /**
     * Choose, which DatVe to update.
     */
    where: DatVeWhereUniqueInput
  }

  /**
   * DatVe updateMany
   */
  export type DatVeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DatVes.
     */
    data: XOR<DatVeUpdateManyMutationInput, DatVeUncheckedUpdateManyInput>
    /**
     * Filter which DatVes to update
     */
    where?: DatVeWhereInput
    /**
     * Limit how many DatVes to update.
     */
    limit?: number
  }

  /**
   * DatVe upsert
   */
  export type DatVeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatVe
     */
    select?: DatVeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DatVe
     */
    omit?: DatVeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatVeInclude<ExtArgs> | null
    /**
     * The filter to search for the DatVe to update in case it exists.
     */
    where: DatVeWhereUniqueInput
    /**
     * In case the DatVe found by the `where` argument doesn't exist, create a new DatVe with this data.
     */
    create: XOR<DatVeCreateInput, DatVeUncheckedCreateInput>
    /**
     * In case the DatVe was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DatVeUpdateInput, DatVeUncheckedUpdateInput>
  }

  /**
   * DatVe delete
   */
  export type DatVeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatVe
     */
    select?: DatVeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DatVe
     */
    omit?: DatVeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatVeInclude<ExtArgs> | null
    /**
     * Filter which DatVe to delete.
     */
    where: DatVeWhereUniqueInput
  }

  /**
   * DatVe deleteMany
   */
  export type DatVeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DatVes to delete
     */
    where?: DatVeWhereInput
    /**
     * Limit how many DatVes to delete.
     */
    limit?: number
  }

  /**
   * DatVe.HoaDon
   */
  export type DatVe$HoaDonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HoaDon
     */
    select?: HoaDonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HoaDon
     */
    omit?: HoaDonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoaDonInclude<ExtArgs> | null
    where?: HoaDonWhereInput
  }

  /**
   * DatVe without action
   */
  export type DatVeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatVe
     */
    select?: DatVeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DatVe
     */
    omit?: DatVeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatVeInclude<ExtArgs> | null
  }


  /**
   * Model Ghe
   */

  export type AggregateGhe = {
    _count: GheCountAggregateOutputType | null
    _avg: GheAvgAggregateOutputType | null
    _sum: GheSumAggregateOutputType | null
    _min: GheMinAggregateOutputType | null
    _max: GheMaxAggregateOutputType | null
  }

  export type GheAvgAggregateOutputType = {
    ma_ghe: number | null
    ma_rap: number | null
  }

  export type GheSumAggregateOutputType = {
    ma_ghe: number | null
    ma_rap: number | null
  }

  export type GheMinAggregateOutputType = {
    ma_ghe: number | null
    ten_ghe: string | null
    loai_ghe: string | null
    ma_rap: number | null
  }

  export type GheMaxAggregateOutputType = {
    ma_ghe: number | null
    ten_ghe: string | null
    loai_ghe: string | null
    ma_rap: number | null
  }

  export type GheCountAggregateOutputType = {
    ma_ghe: number
    ten_ghe: number
    loai_ghe: number
    ma_rap: number
    _all: number
  }


  export type GheAvgAggregateInputType = {
    ma_ghe?: true
    ma_rap?: true
  }

  export type GheSumAggregateInputType = {
    ma_ghe?: true
    ma_rap?: true
  }

  export type GheMinAggregateInputType = {
    ma_ghe?: true
    ten_ghe?: true
    loai_ghe?: true
    ma_rap?: true
  }

  export type GheMaxAggregateInputType = {
    ma_ghe?: true
    ten_ghe?: true
    loai_ghe?: true
    ma_rap?: true
  }

  export type GheCountAggregateInputType = {
    ma_ghe?: true
    ten_ghe?: true
    loai_ghe?: true
    ma_rap?: true
    _all?: true
  }

  export type GheAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ghe to aggregate.
     */
    where?: GheWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ghes to fetch.
     */
    orderBy?: GheOrderByWithRelationInput | GheOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GheWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ghes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ghes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ghes
    **/
    _count?: true | GheCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GheAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GheSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GheMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GheMaxAggregateInputType
  }

  export type GetGheAggregateType<T extends GheAggregateArgs> = {
        [P in keyof T & keyof AggregateGhe]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGhe[P]>
      : GetScalarType<T[P], AggregateGhe[P]>
  }




  export type GheGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GheWhereInput
    orderBy?: GheOrderByWithAggregationInput | GheOrderByWithAggregationInput[]
    by: GheScalarFieldEnum[] | GheScalarFieldEnum
    having?: GheScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GheCountAggregateInputType | true
    _avg?: GheAvgAggregateInputType
    _sum?: GheSumAggregateInputType
    _min?: GheMinAggregateInputType
    _max?: GheMaxAggregateInputType
  }

  export type GheGroupByOutputType = {
    ma_ghe: number
    ten_ghe: string | null
    loai_ghe: string | null
    ma_rap: number | null
    _count: GheCountAggregateOutputType | null
    _avg: GheAvgAggregateOutputType | null
    _sum: GheSumAggregateOutputType | null
    _min: GheMinAggregateOutputType | null
    _max: GheMaxAggregateOutputType | null
  }

  type GetGheGroupByPayload<T extends GheGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GheGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GheGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GheGroupByOutputType[P]>
            : GetScalarType<T[P], GheGroupByOutputType[P]>
        }
      >
    >


  export type GheSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ma_ghe?: boolean
    ten_ghe?: boolean
    loai_ghe?: boolean
    ma_rap?: boolean
    DatVe?: boolean | Ghe$DatVeArgs<ExtArgs>
    RapPhim?: boolean | Ghe$RapPhimArgs<ExtArgs>
    GiuCho?: boolean | Ghe$GiuChoArgs<ExtArgs>
    _count?: boolean | GheCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ghe"]>



  export type GheSelectScalar = {
    ma_ghe?: boolean
    ten_ghe?: boolean
    loai_ghe?: boolean
    ma_rap?: boolean
  }

  export type GheOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ma_ghe" | "ten_ghe" | "loai_ghe" | "ma_rap", ExtArgs["result"]["ghe"]>
  export type GheInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    DatVe?: boolean | Ghe$DatVeArgs<ExtArgs>
    RapPhim?: boolean | Ghe$RapPhimArgs<ExtArgs>
    GiuCho?: boolean | Ghe$GiuChoArgs<ExtArgs>
    _count?: boolean | GheCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $GhePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ghe"
    objects: {
      DatVe: Prisma.$DatVePayload<ExtArgs>[]
      RapPhim: Prisma.$RapPhimPayload<ExtArgs> | null
      GiuCho: Prisma.$GiuChoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      ma_ghe: number
      ten_ghe: string | null
      loai_ghe: string | null
      ma_rap: number | null
    }, ExtArgs["result"]["ghe"]>
    composites: {}
  }

  type GheGetPayload<S extends boolean | null | undefined | GheDefaultArgs> = $Result.GetResult<Prisma.$GhePayload, S>

  type GheCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GheFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GheCountAggregateInputType | true
    }

  export interface GheDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ghe'], meta: { name: 'Ghe' } }
    /**
     * Find zero or one Ghe that matches the filter.
     * @param {GheFindUniqueArgs} args - Arguments to find a Ghe
     * @example
     * // Get one Ghe
     * const ghe = await prisma.ghe.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GheFindUniqueArgs>(args: SelectSubset<T, GheFindUniqueArgs<ExtArgs>>): Prisma__GheClient<$Result.GetResult<Prisma.$GhePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ghe that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GheFindUniqueOrThrowArgs} args - Arguments to find a Ghe
     * @example
     * // Get one Ghe
     * const ghe = await prisma.ghe.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GheFindUniqueOrThrowArgs>(args: SelectSubset<T, GheFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GheClient<$Result.GetResult<Prisma.$GhePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ghe that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GheFindFirstArgs} args - Arguments to find a Ghe
     * @example
     * // Get one Ghe
     * const ghe = await prisma.ghe.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GheFindFirstArgs>(args?: SelectSubset<T, GheFindFirstArgs<ExtArgs>>): Prisma__GheClient<$Result.GetResult<Prisma.$GhePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ghe that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GheFindFirstOrThrowArgs} args - Arguments to find a Ghe
     * @example
     * // Get one Ghe
     * const ghe = await prisma.ghe.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GheFindFirstOrThrowArgs>(args?: SelectSubset<T, GheFindFirstOrThrowArgs<ExtArgs>>): Prisma__GheClient<$Result.GetResult<Prisma.$GhePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ghes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GheFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ghes
     * const ghes = await prisma.ghe.findMany()
     * 
     * // Get first 10 Ghes
     * const ghes = await prisma.ghe.findMany({ take: 10 })
     * 
     * // Only select the `ma_ghe`
     * const gheWithMa_gheOnly = await prisma.ghe.findMany({ select: { ma_ghe: true } })
     * 
     */
    findMany<T extends GheFindManyArgs>(args?: SelectSubset<T, GheFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GhePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ghe.
     * @param {GheCreateArgs} args - Arguments to create a Ghe.
     * @example
     * // Create one Ghe
     * const Ghe = await prisma.ghe.create({
     *   data: {
     *     // ... data to create a Ghe
     *   }
     * })
     * 
     */
    create<T extends GheCreateArgs>(args: SelectSubset<T, GheCreateArgs<ExtArgs>>): Prisma__GheClient<$Result.GetResult<Prisma.$GhePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ghes.
     * @param {GheCreateManyArgs} args - Arguments to create many Ghes.
     * @example
     * // Create many Ghes
     * const ghe = await prisma.ghe.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GheCreateManyArgs>(args?: SelectSubset<T, GheCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Ghe.
     * @param {GheDeleteArgs} args - Arguments to delete one Ghe.
     * @example
     * // Delete one Ghe
     * const Ghe = await prisma.ghe.delete({
     *   where: {
     *     // ... filter to delete one Ghe
     *   }
     * })
     * 
     */
    delete<T extends GheDeleteArgs>(args: SelectSubset<T, GheDeleteArgs<ExtArgs>>): Prisma__GheClient<$Result.GetResult<Prisma.$GhePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ghe.
     * @param {GheUpdateArgs} args - Arguments to update one Ghe.
     * @example
     * // Update one Ghe
     * const ghe = await prisma.ghe.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GheUpdateArgs>(args: SelectSubset<T, GheUpdateArgs<ExtArgs>>): Prisma__GheClient<$Result.GetResult<Prisma.$GhePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ghes.
     * @param {GheDeleteManyArgs} args - Arguments to filter Ghes to delete.
     * @example
     * // Delete a few Ghes
     * const { count } = await prisma.ghe.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GheDeleteManyArgs>(args?: SelectSubset<T, GheDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ghes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GheUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ghes
     * const ghe = await prisma.ghe.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GheUpdateManyArgs>(args: SelectSubset<T, GheUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ghe.
     * @param {GheUpsertArgs} args - Arguments to update or create a Ghe.
     * @example
     * // Update or create a Ghe
     * const ghe = await prisma.ghe.upsert({
     *   create: {
     *     // ... data to create a Ghe
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ghe we want to update
     *   }
     * })
     */
    upsert<T extends GheUpsertArgs>(args: SelectSubset<T, GheUpsertArgs<ExtArgs>>): Prisma__GheClient<$Result.GetResult<Prisma.$GhePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ghes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GheCountArgs} args - Arguments to filter Ghes to count.
     * @example
     * // Count the number of Ghes
     * const count = await prisma.ghe.count({
     *   where: {
     *     // ... the filter for the Ghes we want to count
     *   }
     * })
    **/
    count<T extends GheCountArgs>(
      args?: Subset<T, GheCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GheCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ghe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GheAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GheAggregateArgs>(args: Subset<T, GheAggregateArgs>): Prisma.PrismaPromise<GetGheAggregateType<T>>

    /**
     * Group by Ghe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GheGroupByArgs} args - Group by arguments.
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
      T extends GheGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GheGroupByArgs['orderBy'] }
        : { orderBy?: GheGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GheGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGheGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ghe model
   */
  readonly fields: GheFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ghe.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GheClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    DatVe<T extends Ghe$DatVeArgs<ExtArgs> = {}>(args?: Subset<T, Ghe$DatVeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DatVePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    RapPhim<T extends Ghe$RapPhimArgs<ExtArgs> = {}>(args?: Subset<T, Ghe$RapPhimArgs<ExtArgs>>): Prisma__RapPhimClient<$Result.GetResult<Prisma.$RapPhimPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    GiuCho<T extends Ghe$GiuChoArgs<ExtArgs> = {}>(args?: Subset<T, Ghe$GiuChoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GiuChoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Ghe model
   */
  interface GheFieldRefs {
    readonly ma_ghe: FieldRef<"Ghe", 'Int'>
    readonly ten_ghe: FieldRef<"Ghe", 'String'>
    readonly loai_ghe: FieldRef<"Ghe", 'String'>
    readonly ma_rap: FieldRef<"Ghe", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Ghe findUnique
   */
  export type GheFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ghe
     */
    select?: GheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ghe
     */
    omit?: GheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GheInclude<ExtArgs> | null
    /**
     * Filter, which Ghe to fetch.
     */
    where: GheWhereUniqueInput
  }

  /**
   * Ghe findUniqueOrThrow
   */
  export type GheFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ghe
     */
    select?: GheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ghe
     */
    omit?: GheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GheInclude<ExtArgs> | null
    /**
     * Filter, which Ghe to fetch.
     */
    where: GheWhereUniqueInput
  }

  /**
   * Ghe findFirst
   */
  export type GheFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ghe
     */
    select?: GheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ghe
     */
    omit?: GheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GheInclude<ExtArgs> | null
    /**
     * Filter, which Ghe to fetch.
     */
    where?: GheWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ghes to fetch.
     */
    orderBy?: GheOrderByWithRelationInput | GheOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ghes.
     */
    cursor?: GheWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ghes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ghes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ghes.
     */
    distinct?: GheScalarFieldEnum | GheScalarFieldEnum[]
  }

  /**
   * Ghe findFirstOrThrow
   */
  export type GheFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ghe
     */
    select?: GheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ghe
     */
    omit?: GheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GheInclude<ExtArgs> | null
    /**
     * Filter, which Ghe to fetch.
     */
    where?: GheWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ghes to fetch.
     */
    orderBy?: GheOrderByWithRelationInput | GheOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ghes.
     */
    cursor?: GheWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ghes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ghes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ghes.
     */
    distinct?: GheScalarFieldEnum | GheScalarFieldEnum[]
  }

  /**
   * Ghe findMany
   */
  export type GheFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ghe
     */
    select?: GheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ghe
     */
    omit?: GheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GheInclude<ExtArgs> | null
    /**
     * Filter, which Ghes to fetch.
     */
    where?: GheWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ghes to fetch.
     */
    orderBy?: GheOrderByWithRelationInput | GheOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ghes.
     */
    cursor?: GheWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ghes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ghes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ghes.
     */
    distinct?: GheScalarFieldEnum | GheScalarFieldEnum[]
  }

  /**
   * Ghe create
   */
  export type GheCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ghe
     */
    select?: GheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ghe
     */
    omit?: GheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GheInclude<ExtArgs> | null
    /**
     * The data needed to create a Ghe.
     */
    data?: XOR<GheCreateInput, GheUncheckedCreateInput>
  }

  /**
   * Ghe createMany
   */
  export type GheCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ghes.
     */
    data: GheCreateManyInput | GheCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ghe update
   */
  export type GheUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ghe
     */
    select?: GheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ghe
     */
    omit?: GheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GheInclude<ExtArgs> | null
    /**
     * The data needed to update a Ghe.
     */
    data: XOR<GheUpdateInput, GheUncheckedUpdateInput>
    /**
     * Choose, which Ghe to update.
     */
    where: GheWhereUniqueInput
  }

  /**
   * Ghe updateMany
   */
  export type GheUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ghes.
     */
    data: XOR<GheUpdateManyMutationInput, GheUncheckedUpdateManyInput>
    /**
     * Filter which Ghes to update
     */
    where?: GheWhereInput
    /**
     * Limit how many Ghes to update.
     */
    limit?: number
  }

  /**
   * Ghe upsert
   */
  export type GheUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ghe
     */
    select?: GheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ghe
     */
    omit?: GheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GheInclude<ExtArgs> | null
    /**
     * The filter to search for the Ghe to update in case it exists.
     */
    where: GheWhereUniqueInput
    /**
     * In case the Ghe found by the `where` argument doesn't exist, create a new Ghe with this data.
     */
    create: XOR<GheCreateInput, GheUncheckedCreateInput>
    /**
     * In case the Ghe was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GheUpdateInput, GheUncheckedUpdateInput>
  }

  /**
   * Ghe delete
   */
  export type GheDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ghe
     */
    select?: GheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ghe
     */
    omit?: GheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GheInclude<ExtArgs> | null
    /**
     * Filter which Ghe to delete.
     */
    where: GheWhereUniqueInput
  }

  /**
   * Ghe deleteMany
   */
  export type GheDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ghes to delete
     */
    where?: GheWhereInput
    /**
     * Limit how many Ghes to delete.
     */
    limit?: number
  }

  /**
   * Ghe.DatVe
   */
  export type Ghe$DatVeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatVe
     */
    select?: DatVeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DatVe
     */
    omit?: DatVeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatVeInclude<ExtArgs> | null
    where?: DatVeWhereInput
    orderBy?: DatVeOrderByWithRelationInput | DatVeOrderByWithRelationInput[]
    cursor?: DatVeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DatVeScalarFieldEnum | DatVeScalarFieldEnum[]
  }

  /**
   * Ghe.RapPhim
   */
  export type Ghe$RapPhimArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RapPhim
     */
    select?: RapPhimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RapPhim
     */
    omit?: RapPhimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RapPhimInclude<ExtArgs> | null
    where?: RapPhimWhereInput
  }

  /**
   * Ghe.GiuCho
   */
  export type Ghe$GiuChoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GiuCho
     */
    select?: GiuChoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GiuCho
     */
    omit?: GiuChoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GiuChoInclude<ExtArgs> | null
    where?: GiuChoWhereInput
    orderBy?: GiuChoOrderByWithRelationInput | GiuChoOrderByWithRelationInput[]
    cursor?: GiuChoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GiuChoScalarFieldEnum | GiuChoScalarFieldEnum[]
  }

  /**
   * Ghe without action
   */
  export type GheDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ghe
     */
    select?: GheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ghe
     */
    omit?: GheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GheInclude<ExtArgs> | null
  }


  /**
   * Model HeThongRap
   */

  export type AggregateHeThongRap = {
    _count: HeThongRapCountAggregateOutputType | null
    _avg: HeThongRapAvgAggregateOutputType | null
    _sum: HeThongRapSumAggregateOutputType | null
    _min: HeThongRapMinAggregateOutputType | null
    _max: HeThongRapMaxAggregateOutputType | null
  }

  export type HeThongRapAvgAggregateOutputType = {
    ma_he_thong_rap: number | null
  }

  export type HeThongRapSumAggregateOutputType = {
    ma_he_thong_rap: number | null
  }

  export type HeThongRapMinAggregateOutputType = {
    ma_he_thong_rap: number | null
    ten_he_thong_rap: string | null
    logo: string | null
  }

  export type HeThongRapMaxAggregateOutputType = {
    ma_he_thong_rap: number | null
    ten_he_thong_rap: string | null
    logo: string | null
  }

  export type HeThongRapCountAggregateOutputType = {
    ma_he_thong_rap: number
    ten_he_thong_rap: number
    logo: number
    _all: number
  }


  export type HeThongRapAvgAggregateInputType = {
    ma_he_thong_rap?: true
  }

  export type HeThongRapSumAggregateInputType = {
    ma_he_thong_rap?: true
  }

  export type HeThongRapMinAggregateInputType = {
    ma_he_thong_rap?: true
    ten_he_thong_rap?: true
    logo?: true
  }

  export type HeThongRapMaxAggregateInputType = {
    ma_he_thong_rap?: true
    ten_he_thong_rap?: true
    logo?: true
  }

  export type HeThongRapCountAggregateInputType = {
    ma_he_thong_rap?: true
    ten_he_thong_rap?: true
    logo?: true
    _all?: true
  }

  export type HeThongRapAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HeThongRap to aggregate.
     */
    where?: HeThongRapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HeThongRaps to fetch.
     */
    orderBy?: HeThongRapOrderByWithRelationInput | HeThongRapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HeThongRapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HeThongRaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HeThongRaps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HeThongRaps
    **/
    _count?: true | HeThongRapCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HeThongRapAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HeThongRapSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HeThongRapMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HeThongRapMaxAggregateInputType
  }

  export type GetHeThongRapAggregateType<T extends HeThongRapAggregateArgs> = {
        [P in keyof T & keyof AggregateHeThongRap]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHeThongRap[P]>
      : GetScalarType<T[P], AggregateHeThongRap[P]>
  }




  export type HeThongRapGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HeThongRapWhereInput
    orderBy?: HeThongRapOrderByWithAggregationInput | HeThongRapOrderByWithAggregationInput[]
    by: HeThongRapScalarFieldEnum[] | HeThongRapScalarFieldEnum
    having?: HeThongRapScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HeThongRapCountAggregateInputType | true
    _avg?: HeThongRapAvgAggregateInputType
    _sum?: HeThongRapSumAggregateInputType
    _min?: HeThongRapMinAggregateInputType
    _max?: HeThongRapMaxAggregateInputType
  }

  export type HeThongRapGroupByOutputType = {
    ma_he_thong_rap: number
    ten_he_thong_rap: string | null
    logo: string | null
    _count: HeThongRapCountAggregateOutputType | null
    _avg: HeThongRapAvgAggregateOutputType | null
    _sum: HeThongRapSumAggregateOutputType | null
    _min: HeThongRapMinAggregateOutputType | null
    _max: HeThongRapMaxAggregateOutputType | null
  }

  type GetHeThongRapGroupByPayload<T extends HeThongRapGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HeThongRapGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HeThongRapGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HeThongRapGroupByOutputType[P]>
            : GetScalarType<T[P], HeThongRapGroupByOutputType[P]>
        }
      >
    >


  export type HeThongRapSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ma_he_thong_rap?: boolean
    ten_he_thong_rap?: boolean
    logo?: boolean
    CumRap?: boolean | HeThongRap$CumRapArgs<ExtArgs>
    _count?: boolean | HeThongRapCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["heThongRap"]>



  export type HeThongRapSelectScalar = {
    ma_he_thong_rap?: boolean
    ten_he_thong_rap?: boolean
    logo?: boolean
  }

  export type HeThongRapOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ma_he_thong_rap" | "ten_he_thong_rap" | "logo", ExtArgs["result"]["heThongRap"]>
  export type HeThongRapInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CumRap?: boolean | HeThongRap$CumRapArgs<ExtArgs>
    _count?: boolean | HeThongRapCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $HeThongRapPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HeThongRap"
    objects: {
      CumRap: Prisma.$CumRapPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      ma_he_thong_rap: number
      ten_he_thong_rap: string | null
      logo: string | null
    }, ExtArgs["result"]["heThongRap"]>
    composites: {}
  }

  type HeThongRapGetPayload<S extends boolean | null | undefined | HeThongRapDefaultArgs> = $Result.GetResult<Prisma.$HeThongRapPayload, S>

  type HeThongRapCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HeThongRapFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HeThongRapCountAggregateInputType | true
    }

  export interface HeThongRapDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HeThongRap'], meta: { name: 'HeThongRap' } }
    /**
     * Find zero or one HeThongRap that matches the filter.
     * @param {HeThongRapFindUniqueArgs} args - Arguments to find a HeThongRap
     * @example
     * // Get one HeThongRap
     * const heThongRap = await prisma.heThongRap.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HeThongRapFindUniqueArgs>(args: SelectSubset<T, HeThongRapFindUniqueArgs<ExtArgs>>): Prisma__HeThongRapClient<$Result.GetResult<Prisma.$HeThongRapPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HeThongRap that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HeThongRapFindUniqueOrThrowArgs} args - Arguments to find a HeThongRap
     * @example
     * // Get one HeThongRap
     * const heThongRap = await prisma.heThongRap.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HeThongRapFindUniqueOrThrowArgs>(args: SelectSubset<T, HeThongRapFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HeThongRapClient<$Result.GetResult<Prisma.$HeThongRapPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HeThongRap that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeThongRapFindFirstArgs} args - Arguments to find a HeThongRap
     * @example
     * // Get one HeThongRap
     * const heThongRap = await prisma.heThongRap.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HeThongRapFindFirstArgs>(args?: SelectSubset<T, HeThongRapFindFirstArgs<ExtArgs>>): Prisma__HeThongRapClient<$Result.GetResult<Prisma.$HeThongRapPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HeThongRap that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeThongRapFindFirstOrThrowArgs} args - Arguments to find a HeThongRap
     * @example
     * // Get one HeThongRap
     * const heThongRap = await prisma.heThongRap.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HeThongRapFindFirstOrThrowArgs>(args?: SelectSubset<T, HeThongRapFindFirstOrThrowArgs<ExtArgs>>): Prisma__HeThongRapClient<$Result.GetResult<Prisma.$HeThongRapPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HeThongRaps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeThongRapFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HeThongRaps
     * const heThongRaps = await prisma.heThongRap.findMany()
     * 
     * // Get first 10 HeThongRaps
     * const heThongRaps = await prisma.heThongRap.findMany({ take: 10 })
     * 
     * // Only select the `ma_he_thong_rap`
     * const heThongRapWithMa_he_thong_rapOnly = await prisma.heThongRap.findMany({ select: { ma_he_thong_rap: true } })
     * 
     */
    findMany<T extends HeThongRapFindManyArgs>(args?: SelectSubset<T, HeThongRapFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HeThongRapPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HeThongRap.
     * @param {HeThongRapCreateArgs} args - Arguments to create a HeThongRap.
     * @example
     * // Create one HeThongRap
     * const HeThongRap = await prisma.heThongRap.create({
     *   data: {
     *     // ... data to create a HeThongRap
     *   }
     * })
     * 
     */
    create<T extends HeThongRapCreateArgs>(args: SelectSubset<T, HeThongRapCreateArgs<ExtArgs>>): Prisma__HeThongRapClient<$Result.GetResult<Prisma.$HeThongRapPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HeThongRaps.
     * @param {HeThongRapCreateManyArgs} args - Arguments to create many HeThongRaps.
     * @example
     * // Create many HeThongRaps
     * const heThongRap = await prisma.heThongRap.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HeThongRapCreateManyArgs>(args?: SelectSubset<T, HeThongRapCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a HeThongRap.
     * @param {HeThongRapDeleteArgs} args - Arguments to delete one HeThongRap.
     * @example
     * // Delete one HeThongRap
     * const HeThongRap = await prisma.heThongRap.delete({
     *   where: {
     *     // ... filter to delete one HeThongRap
     *   }
     * })
     * 
     */
    delete<T extends HeThongRapDeleteArgs>(args: SelectSubset<T, HeThongRapDeleteArgs<ExtArgs>>): Prisma__HeThongRapClient<$Result.GetResult<Prisma.$HeThongRapPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HeThongRap.
     * @param {HeThongRapUpdateArgs} args - Arguments to update one HeThongRap.
     * @example
     * // Update one HeThongRap
     * const heThongRap = await prisma.heThongRap.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HeThongRapUpdateArgs>(args: SelectSubset<T, HeThongRapUpdateArgs<ExtArgs>>): Prisma__HeThongRapClient<$Result.GetResult<Prisma.$HeThongRapPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HeThongRaps.
     * @param {HeThongRapDeleteManyArgs} args - Arguments to filter HeThongRaps to delete.
     * @example
     * // Delete a few HeThongRaps
     * const { count } = await prisma.heThongRap.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HeThongRapDeleteManyArgs>(args?: SelectSubset<T, HeThongRapDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HeThongRaps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeThongRapUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HeThongRaps
     * const heThongRap = await prisma.heThongRap.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HeThongRapUpdateManyArgs>(args: SelectSubset<T, HeThongRapUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one HeThongRap.
     * @param {HeThongRapUpsertArgs} args - Arguments to update or create a HeThongRap.
     * @example
     * // Update or create a HeThongRap
     * const heThongRap = await prisma.heThongRap.upsert({
     *   create: {
     *     // ... data to create a HeThongRap
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HeThongRap we want to update
     *   }
     * })
     */
    upsert<T extends HeThongRapUpsertArgs>(args: SelectSubset<T, HeThongRapUpsertArgs<ExtArgs>>): Prisma__HeThongRapClient<$Result.GetResult<Prisma.$HeThongRapPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HeThongRaps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeThongRapCountArgs} args - Arguments to filter HeThongRaps to count.
     * @example
     * // Count the number of HeThongRaps
     * const count = await prisma.heThongRap.count({
     *   where: {
     *     // ... the filter for the HeThongRaps we want to count
     *   }
     * })
    **/
    count<T extends HeThongRapCountArgs>(
      args?: Subset<T, HeThongRapCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HeThongRapCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HeThongRap.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeThongRapAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HeThongRapAggregateArgs>(args: Subset<T, HeThongRapAggregateArgs>): Prisma.PrismaPromise<GetHeThongRapAggregateType<T>>

    /**
     * Group by HeThongRap.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeThongRapGroupByArgs} args - Group by arguments.
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
      T extends HeThongRapGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HeThongRapGroupByArgs['orderBy'] }
        : { orderBy?: HeThongRapGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HeThongRapGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHeThongRapGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HeThongRap model
   */
  readonly fields: HeThongRapFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HeThongRap.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HeThongRapClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    CumRap<T extends HeThongRap$CumRapArgs<ExtArgs> = {}>(args?: Subset<T, HeThongRap$CumRapArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CumRapPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the HeThongRap model
   */
  interface HeThongRapFieldRefs {
    readonly ma_he_thong_rap: FieldRef<"HeThongRap", 'Int'>
    readonly ten_he_thong_rap: FieldRef<"HeThongRap", 'String'>
    readonly logo: FieldRef<"HeThongRap", 'String'>
  }
    

  // Custom InputTypes
  /**
   * HeThongRap findUnique
   */
  export type HeThongRapFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeThongRap
     */
    select?: HeThongRapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeThongRap
     */
    omit?: HeThongRapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeThongRapInclude<ExtArgs> | null
    /**
     * Filter, which HeThongRap to fetch.
     */
    where: HeThongRapWhereUniqueInput
  }

  /**
   * HeThongRap findUniqueOrThrow
   */
  export type HeThongRapFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeThongRap
     */
    select?: HeThongRapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeThongRap
     */
    omit?: HeThongRapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeThongRapInclude<ExtArgs> | null
    /**
     * Filter, which HeThongRap to fetch.
     */
    where: HeThongRapWhereUniqueInput
  }

  /**
   * HeThongRap findFirst
   */
  export type HeThongRapFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeThongRap
     */
    select?: HeThongRapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeThongRap
     */
    omit?: HeThongRapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeThongRapInclude<ExtArgs> | null
    /**
     * Filter, which HeThongRap to fetch.
     */
    where?: HeThongRapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HeThongRaps to fetch.
     */
    orderBy?: HeThongRapOrderByWithRelationInput | HeThongRapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HeThongRaps.
     */
    cursor?: HeThongRapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HeThongRaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HeThongRaps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HeThongRaps.
     */
    distinct?: HeThongRapScalarFieldEnum | HeThongRapScalarFieldEnum[]
  }

  /**
   * HeThongRap findFirstOrThrow
   */
  export type HeThongRapFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeThongRap
     */
    select?: HeThongRapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeThongRap
     */
    omit?: HeThongRapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeThongRapInclude<ExtArgs> | null
    /**
     * Filter, which HeThongRap to fetch.
     */
    where?: HeThongRapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HeThongRaps to fetch.
     */
    orderBy?: HeThongRapOrderByWithRelationInput | HeThongRapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HeThongRaps.
     */
    cursor?: HeThongRapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HeThongRaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HeThongRaps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HeThongRaps.
     */
    distinct?: HeThongRapScalarFieldEnum | HeThongRapScalarFieldEnum[]
  }

  /**
   * HeThongRap findMany
   */
  export type HeThongRapFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeThongRap
     */
    select?: HeThongRapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeThongRap
     */
    omit?: HeThongRapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeThongRapInclude<ExtArgs> | null
    /**
     * Filter, which HeThongRaps to fetch.
     */
    where?: HeThongRapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HeThongRaps to fetch.
     */
    orderBy?: HeThongRapOrderByWithRelationInput | HeThongRapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HeThongRaps.
     */
    cursor?: HeThongRapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HeThongRaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HeThongRaps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HeThongRaps.
     */
    distinct?: HeThongRapScalarFieldEnum | HeThongRapScalarFieldEnum[]
  }

  /**
   * HeThongRap create
   */
  export type HeThongRapCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeThongRap
     */
    select?: HeThongRapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeThongRap
     */
    omit?: HeThongRapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeThongRapInclude<ExtArgs> | null
    /**
     * The data needed to create a HeThongRap.
     */
    data?: XOR<HeThongRapCreateInput, HeThongRapUncheckedCreateInput>
  }

  /**
   * HeThongRap createMany
   */
  export type HeThongRapCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HeThongRaps.
     */
    data: HeThongRapCreateManyInput | HeThongRapCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HeThongRap update
   */
  export type HeThongRapUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeThongRap
     */
    select?: HeThongRapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeThongRap
     */
    omit?: HeThongRapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeThongRapInclude<ExtArgs> | null
    /**
     * The data needed to update a HeThongRap.
     */
    data: XOR<HeThongRapUpdateInput, HeThongRapUncheckedUpdateInput>
    /**
     * Choose, which HeThongRap to update.
     */
    where: HeThongRapWhereUniqueInput
  }

  /**
   * HeThongRap updateMany
   */
  export type HeThongRapUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HeThongRaps.
     */
    data: XOR<HeThongRapUpdateManyMutationInput, HeThongRapUncheckedUpdateManyInput>
    /**
     * Filter which HeThongRaps to update
     */
    where?: HeThongRapWhereInput
    /**
     * Limit how many HeThongRaps to update.
     */
    limit?: number
  }

  /**
   * HeThongRap upsert
   */
  export type HeThongRapUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeThongRap
     */
    select?: HeThongRapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeThongRap
     */
    omit?: HeThongRapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeThongRapInclude<ExtArgs> | null
    /**
     * The filter to search for the HeThongRap to update in case it exists.
     */
    where: HeThongRapWhereUniqueInput
    /**
     * In case the HeThongRap found by the `where` argument doesn't exist, create a new HeThongRap with this data.
     */
    create: XOR<HeThongRapCreateInput, HeThongRapUncheckedCreateInput>
    /**
     * In case the HeThongRap was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HeThongRapUpdateInput, HeThongRapUncheckedUpdateInput>
  }

  /**
   * HeThongRap delete
   */
  export type HeThongRapDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeThongRap
     */
    select?: HeThongRapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeThongRap
     */
    omit?: HeThongRapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeThongRapInclude<ExtArgs> | null
    /**
     * Filter which HeThongRap to delete.
     */
    where: HeThongRapWhereUniqueInput
  }

  /**
   * HeThongRap deleteMany
   */
  export type HeThongRapDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HeThongRaps to delete
     */
    where?: HeThongRapWhereInput
    /**
     * Limit how many HeThongRaps to delete.
     */
    limit?: number
  }

  /**
   * HeThongRap.CumRap
   */
  export type HeThongRap$CumRapArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CumRap
     */
    select?: CumRapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CumRap
     */
    omit?: CumRapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CumRapInclude<ExtArgs> | null
    where?: CumRapWhereInput
    orderBy?: CumRapOrderByWithRelationInput | CumRapOrderByWithRelationInput[]
    cursor?: CumRapWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CumRapScalarFieldEnum | CumRapScalarFieldEnum[]
  }

  /**
   * HeThongRap without action
   */
  export type HeThongRapDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeThongRap
     */
    select?: HeThongRapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeThongRap
     */
    omit?: HeThongRapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeThongRapInclude<ExtArgs> | null
  }


  /**
   * Model LichChieu
   */

  export type AggregateLichChieu = {
    _count: LichChieuCountAggregateOutputType | null
    _avg: LichChieuAvgAggregateOutputType | null
    _sum: LichChieuSumAggregateOutputType | null
    _min: LichChieuMinAggregateOutputType | null
    _max: LichChieuMaxAggregateOutputType | null
  }

  export type LichChieuAvgAggregateOutputType = {
    ma_lich_chieu: number | null
    ma_rap: number | null
    ma_phim: number | null
    gia_ve: number | null
  }

  export type LichChieuSumAggregateOutputType = {
    ma_lich_chieu: number | null
    ma_rap: number | null
    ma_phim: number | null
    gia_ve: number | null
  }

  export type LichChieuMinAggregateOutputType = {
    ma_lich_chieu: number | null
    ma_rap: number | null
    ma_phim: number | null
    ngay_gio_chieu: Date | null
    gia_ve: number | null
  }

  export type LichChieuMaxAggregateOutputType = {
    ma_lich_chieu: number | null
    ma_rap: number | null
    ma_phim: number | null
    ngay_gio_chieu: Date | null
    gia_ve: number | null
  }

  export type LichChieuCountAggregateOutputType = {
    ma_lich_chieu: number
    ma_rap: number
    ma_phim: number
    ngay_gio_chieu: number
    gia_ve: number
    _all: number
  }


  export type LichChieuAvgAggregateInputType = {
    ma_lich_chieu?: true
    ma_rap?: true
    ma_phim?: true
    gia_ve?: true
  }

  export type LichChieuSumAggregateInputType = {
    ma_lich_chieu?: true
    ma_rap?: true
    ma_phim?: true
    gia_ve?: true
  }

  export type LichChieuMinAggregateInputType = {
    ma_lich_chieu?: true
    ma_rap?: true
    ma_phim?: true
    ngay_gio_chieu?: true
    gia_ve?: true
  }

  export type LichChieuMaxAggregateInputType = {
    ma_lich_chieu?: true
    ma_rap?: true
    ma_phim?: true
    ngay_gio_chieu?: true
    gia_ve?: true
  }

  export type LichChieuCountAggregateInputType = {
    ma_lich_chieu?: true
    ma_rap?: true
    ma_phim?: true
    ngay_gio_chieu?: true
    gia_ve?: true
    _all?: true
  }

  export type LichChieuAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LichChieu to aggregate.
     */
    where?: LichChieuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LichChieus to fetch.
     */
    orderBy?: LichChieuOrderByWithRelationInput | LichChieuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LichChieuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LichChieus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LichChieus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LichChieus
    **/
    _count?: true | LichChieuCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LichChieuAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LichChieuSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LichChieuMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LichChieuMaxAggregateInputType
  }

  export type GetLichChieuAggregateType<T extends LichChieuAggregateArgs> = {
        [P in keyof T & keyof AggregateLichChieu]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLichChieu[P]>
      : GetScalarType<T[P], AggregateLichChieu[P]>
  }




  export type LichChieuGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LichChieuWhereInput
    orderBy?: LichChieuOrderByWithAggregationInput | LichChieuOrderByWithAggregationInput[]
    by: LichChieuScalarFieldEnum[] | LichChieuScalarFieldEnum
    having?: LichChieuScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LichChieuCountAggregateInputType | true
    _avg?: LichChieuAvgAggregateInputType
    _sum?: LichChieuSumAggregateInputType
    _min?: LichChieuMinAggregateInputType
    _max?: LichChieuMaxAggregateInputType
  }

  export type LichChieuGroupByOutputType = {
    ma_lich_chieu: number
    ma_rap: number | null
    ma_phim: number | null
    ngay_gio_chieu: Date | null
    gia_ve: number | null
    _count: LichChieuCountAggregateOutputType | null
    _avg: LichChieuAvgAggregateOutputType | null
    _sum: LichChieuSumAggregateOutputType | null
    _min: LichChieuMinAggregateOutputType | null
    _max: LichChieuMaxAggregateOutputType | null
  }

  type GetLichChieuGroupByPayload<T extends LichChieuGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LichChieuGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LichChieuGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LichChieuGroupByOutputType[P]>
            : GetScalarType<T[P], LichChieuGroupByOutputType[P]>
        }
      >
    >


  export type LichChieuSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ma_lich_chieu?: boolean
    ma_rap?: boolean
    ma_phim?: boolean
    ngay_gio_chieu?: boolean
    gia_ve?: boolean
    DatVe?: boolean | LichChieu$DatVeArgs<ExtArgs>
    GiuCho?: boolean | LichChieu$GiuChoArgs<ExtArgs>
    HoaDon?: boolean | LichChieu$HoaDonArgs<ExtArgs>
    RapPhim?: boolean | LichChieu$RapPhimArgs<ExtArgs>
    Phim?: boolean | LichChieu$PhimArgs<ExtArgs>
    _count?: boolean | LichChieuCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lichChieu"]>



  export type LichChieuSelectScalar = {
    ma_lich_chieu?: boolean
    ma_rap?: boolean
    ma_phim?: boolean
    ngay_gio_chieu?: boolean
    gia_ve?: boolean
  }

  export type LichChieuOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ma_lich_chieu" | "ma_rap" | "ma_phim" | "ngay_gio_chieu" | "gia_ve", ExtArgs["result"]["lichChieu"]>
  export type LichChieuInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    DatVe?: boolean | LichChieu$DatVeArgs<ExtArgs>
    GiuCho?: boolean | LichChieu$GiuChoArgs<ExtArgs>
    HoaDon?: boolean | LichChieu$HoaDonArgs<ExtArgs>
    RapPhim?: boolean | LichChieu$RapPhimArgs<ExtArgs>
    Phim?: boolean | LichChieu$PhimArgs<ExtArgs>
    _count?: boolean | LichChieuCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $LichChieuPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LichChieu"
    objects: {
      DatVe: Prisma.$DatVePayload<ExtArgs>[]
      GiuCho: Prisma.$GiuChoPayload<ExtArgs>[]
      HoaDon: Prisma.$HoaDonPayload<ExtArgs>[]
      RapPhim: Prisma.$RapPhimPayload<ExtArgs> | null
      Phim: Prisma.$PhimPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      ma_lich_chieu: number
      ma_rap: number | null
      ma_phim: number | null
      ngay_gio_chieu: Date | null
      gia_ve: number | null
    }, ExtArgs["result"]["lichChieu"]>
    composites: {}
  }

  type LichChieuGetPayload<S extends boolean | null | undefined | LichChieuDefaultArgs> = $Result.GetResult<Prisma.$LichChieuPayload, S>

  type LichChieuCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LichChieuFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LichChieuCountAggregateInputType | true
    }

  export interface LichChieuDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LichChieu'], meta: { name: 'LichChieu' } }
    /**
     * Find zero or one LichChieu that matches the filter.
     * @param {LichChieuFindUniqueArgs} args - Arguments to find a LichChieu
     * @example
     * // Get one LichChieu
     * const lichChieu = await prisma.lichChieu.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LichChieuFindUniqueArgs>(args: SelectSubset<T, LichChieuFindUniqueArgs<ExtArgs>>): Prisma__LichChieuClient<$Result.GetResult<Prisma.$LichChieuPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LichChieu that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LichChieuFindUniqueOrThrowArgs} args - Arguments to find a LichChieu
     * @example
     * // Get one LichChieu
     * const lichChieu = await prisma.lichChieu.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LichChieuFindUniqueOrThrowArgs>(args: SelectSubset<T, LichChieuFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LichChieuClient<$Result.GetResult<Prisma.$LichChieuPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LichChieu that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LichChieuFindFirstArgs} args - Arguments to find a LichChieu
     * @example
     * // Get one LichChieu
     * const lichChieu = await prisma.lichChieu.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LichChieuFindFirstArgs>(args?: SelectSubset<T, LichChieuFindFirstArgs<ExtArgs>>): Prisma__LichChieuClient<$Result.GetResult<Prisma.$LichChieuPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LichChieu that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LichChieuFindFirstOrThrowArgs} args - Arguments to find a LichChieu
     * @example
     * // Get one LichChieu
     * const lichChieu = await prisma.lichChieu.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LichChieuFindFirstOrThrowArgs>(args?: SelectSubset<T, LichChieuFindFirstOrThrowArgs<ExtArgs>>): Prisma__LichChieuClient<$Result.GetResult<Prisma.$LichChieuPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LichChieus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LichChieuFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LichChieus
     * const lichChieus = await prisma.lichChieu.findMany()
     * 
     * // Get first 10 LichChieus
     * const lichChieus = await prisma.lichChieu.findMany({ take: 10 })
     * 
     * // Only select the `ma_lich_chieu`
     * const lichChieuWithMa_lich_chieuOnly = await prisma.lichChieu.findMany({ select: { ma_lich_chieu: true } })
     * 
     */
    findMany<T extends LichChieuFindManyArgs>(args?: SelectSubset<T, LichChieuFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LichChieuPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LichChieu.
     * @param {LichChieuCreateArgs} args - Arguments to create a LichChieu.
     * @example
     * // Create one LichChieu
     * const LichChieu = await prisma.lichChieu.create({
     *   data: {
     *     // ... data to create a LichChieu
     *   }
     * })
     * 
     */
    create<T extends LichChieuCreateArgs>(args: SelectSubset<T, LichChieuCreateArgs<ExtArgs>>): Prisma__LichChieuClient<$Result.GetResult<Prisma.$LichChieuPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LichChieus.
     * @param {LichChieuCreateManyArgs} args - Arguments to create many LichChieus.
     * @example
     * // Create many LichChieus
     * const lichChieu = await prisma.lichChieu.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LichChieuCreateManyArgs>(args?: SelectSubset<T, LichChieuCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a LichChieu.
     * @param {LichChieuDeleteArgs} args - Arguments to delete one LichChieu.
     * @example
     * // Delete one LichChieu
     * const LichChieu = await prisma.lichChieu.delete({
     *   where: {
     *     // ... filter to delete one LichChieu
     *   }
     * })
     * 
     */
    delete<T extends LichChieuDeleteArgs>(args: SelectSubset<T, LichChieuDeleteArgs<ExtArgs>>): Prisma__LichChieuClient<$Result.GetResult<Prisma.$LichChieuPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LichChieu.
     * @param {LichChieuUpdateArgs} args - Arguments to update one LichChieu.
     * @example
     * // Update one LichChieu
     * const lichChieu = await prisma.lichChieu.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LichChieuUpdateArgs>(args: SelectSubset<T, LichChieuUpdateArgs<ExtArgs>>): Prisma__LichChieuClient<$Result.GetResult<Prisma.$LichChieuPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LichChieus.
     * @param {LichChieuDeleteManyArgs} args - Arguments to filter LichChieus to delete.
     * @example
     * // Delete a few LichChieus
     * const { count } = await prisma.lichChieu.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LichChieuDeleteManyArgs>(args?: SelectSubset<T, LichChieuDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LichChieus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LichChieuUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LichChieus
     * const lichChieu = await prisma.lichChieu.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LichChieuUpdateManyArgs>(args: SelectSubset<T, LichChieuUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LichChieu.
     * @param {LichChieuUpsertArgs} args - Arguments to update or create a LichChieu.
     * @example
     * // Update or create a LichChieu
     * const lichChieu = await prisma.lichChieu.upsert({
     *   create: {
     *     // ... data to create a LichChieu
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LichChieu we want to update
     *   }
     * })
     */
    upsert<T extends LichChieuUpsertArgs>(args: SelectSubset<T, LichChieuUpsertArgs<ExtArgs>>): Prisma__LichChieuClient<$Result.GetResult<Prisma.$LichChieuPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LichChieus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LichChieuCountArgs} args - Arguments to filter LichChieus to count.
     * @example
     * // Count the number of LichChieus
     * const count = await prisma.lichChieu.count({
     *   where: {
     *     // ... the filter for the LichChieus we want to count
     *   }
     * })
    **/
    count<T extends LichChieuCountArgs>(
      args?: Subset<T, LichChieuCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LichChieuCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LichChieu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LichChieuAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LichChieuAggregateArgs>(args: Subset<T, LichChieuAggregateArgs>): Prisma.PrismaPromise<GetLichChieuAggregateType<T>>

    /**
     * Group by LichChieu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LichChieuGroupByArgs} args - Group by arguments.
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
      T extends LichChieuGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LichChieuGroupByArgs['orderBy'] }
        : { orderBy?: LichChieuGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LichChieuGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLichChieuGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LichChieu model
   */
  readonly fields: LichChieuFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LichChieu.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LichChieuClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    DatVe<T extends LichChieu$DatVeArgs<ExtArgs> = {}>(args?: Subset<T, LichChieu$DatVeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DatVePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    GiuCho<T extends LichChieu$GiuChoArgs<ExtArgs> = {}>(args?: Subset<T, LichChieu$GiuChoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GiuChoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    HoaDon<T extends LichChieu$HoaDonArgs<ExtArgs> = {}>(args?: Subset<T, LichChieu$HoaDonArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HoaDonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    RapPhim<T extends LichChieu$RapPhimArgs<ExtArgs> = {}>(args?: Subset<T, LichChieu$RapPhimArgs<ExtArgs>>): Prisma__RapPhimClient<$Result.GetResult<Prisma.$RapPhimPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Phim<T extends LichChieu$PhimArgs<ExtArgs> = {}>(args?: Subset<T, LichChieu$PhimArgs<ExtArgs>>): Prisma__PhimClient<$Result.GetResult<Prisma.$PhimPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LichChieu model
   */
  interface LichChieuFieldRefs {
    readonly ma_lich_chieu: FieldRef<"LichChieu", 'Int'>
    readonly ma_rap: FieldRef<"LichChieu", 'Int'>
    readonly ma_phim: FieldRef<"LichChieu", 'Int'>
    readonly ngay_gio_chieu: FieldRef<"LichChieu", 'DateTime'>
    readonly gia_ve: FieldRef<"LichChieu", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * LichChieu findUnique
   */
  export type LichChieuFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LichChieu
     */
    select?: LichChieuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LichChieu
     */
    omit?: LichChieuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LichChieuInclude<ExtArgs> | null
    /**
     * Filter, which LichChieu to fetch.
     */
    where: LichChieuWhereUniqueInput
  }

  /**
   * LichChieu findUniqueOrThrow
   */
  export type LichChieuFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LichChieu
     */
    select?: LichChieuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LichChieu
     */
    omit?: LichChieuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LichChieuInclude<ExtArgs> | null
    /**
     * Filter, which LichChieu to fetch.
     */
    where: LichChieuWhereUniqueInput
  }

  /**
   * LichChieu findFirst
   */
  export type LichChieuFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LichChieu
     */
    select?: LichChieuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LichChieu
     */
    omit?: LichChieuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LichChieuInclude<ExtArgs> | null
    /**
     * Filter, which LichChieu to fetch.
     */
    where?: LichChieuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LichChieus to fetch.
     */
    orderBy?: LichChieuOrderByWithRelationInput | LichChieuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LichChieus.
     */
    cursor?: LichChieuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LichChieus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LichChieus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LichChieus.
     */
    distinct?: LichChieuScalarFieldEnum | LichChieuScalarFieldEnum[]
  }

  /**
   * LichChieu findFirstOrThrow
   */
  export type LichChieuFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LichChieu
     */
    select?: LichChieuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LichChieu
     */
    omit?: LichChieuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LichChieuInclude<ExtArgs> | null
    /**
     * Filter, which LichChieu to fetch.
     */
    where?: LichChieuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LichChieus to fetch.
     */
    orderBy?: LichChieuOrderByWithRelationInput | LichChieuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LichChieus.
     */
    cursor?: LichChieuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LichChieus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LichChieus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LichChieus.
     */
    distinct?: LichChieuScalarFieldEnum | LichChieuScalarFieldEnum[]
  }

  /**
   * LichChieu findMany
   */
  export type LichChieuFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LichChieu
     */
    select?: LichChieuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LichChieu
     */
    omit?: LichChieuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LichChieuInclude<ExtArgs> | null
    /**
     * Filter, which LichChieus to fetch.
     */
    where?: LichChieuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LichChieus to fetch.
     */
    orderBy?: LichChieuOrderByWithRelationInput | LichChieuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LichChieus.
     */
    cursor?: LichChieuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LichChieus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LichChieus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LichChieus.
     */
    distinct?: LichChieuScalarFieldEnum | LichChieuScalarFieldEnum[]
  }

  /**
   * LichChieu create
   */
  export type LichChieuCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LichChieu
     */
    select?: LichChieuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LichChieu
     */
    omit?: LichChieuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LichChieuInclude<ExtArgs> | null
    /**
     * The data needed to create a LichChieu.
     */
    data?: XOR<LichChieuCreateInput, LichChieuUncheckedCreateInput>
  }

  /**
   * LichChieu createMany
   */
  export type LichChieuCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LichChieus.
     */
    data: LichChieuCreateManyInput | LichChieuCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LichChieu update
   */
  export type LichChieuUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LichChieu
     */
    select?: LichChieuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LichChieu
     */
    omit?: LichChieuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LichChieuInclude<ExtArgs> | null
    /**
     * The data needed to update a LichChieu.
     */
    data: XOR<LichChieuUpdateInput, LichChieuUncheckedUpdateInput>
    /**
     * Choose, which LichChieu to update.
     */
    where: LichChieuWhereUniqueInput
  }

  /**
   * LichChieu updateMany
   */
  export type LichChieuUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LichChieus.
     */
    data: XOR<LichChieuUpdateManyMutationInput, LichChieuUncheckedUpdateManyInput>
    /**
     * Filter which LichChieus to update
     */
    where?: LichChieuWhereInput
    /**
     * Limit how many LichChieus to update.
     */
    limit?: number
  }

  /**
   * LichChieu upsert
   */
  export type LichChieuUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LichChieu
     */
    select?: LichChieuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LichChieu
     */
    omit?: LichChieuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LichChieuInclude<ExtArgs> | null
    /**
     * The filter to search for the LichChieu to update in case it exists.
     */
    where: LichChieuWhereUniqueInput
    /**
     * In case the LichChieu found by the `where` argument doesn't exist, create a new LichChieu with this data.
     */
    create: XOR<LichChieuCreateInput, LichChieuUncheckedCreateInput>
    /**
     * In case the LichChieu was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LichChieuUpdateInput, LichChieuUncheckedUpdateInput>
  }

  /**
   * LichChieu delete
   */
  export type LichChieuDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LichChieu
     */
    select?: LichChieuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LichChieu
     */
    omit?: LichChieuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LichChieuInclude<ExtArgs> | null
    /**
     * Filter which LichChieu to delete.
     */
    where: LichChieuWhereUniqueInput
  }

  /**
   * LichChieu deleteMany
   */
  export type LichChieuDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LichChieus to delete
     */
    where?: LichChieuWhereInput
    /**
     * Limit how many LichChieus to delete.
     */
    limit?: number
  }

  /**
   * LichChieu.DatVe
   */
  export type LichChieu$DatVeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatVe
     */
    select?: DatVeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DatVe
     */
    omit?: DatVeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatVeInclude<ExtArgs> | null
    where?: DatVeWhereInput
    orderBy?: DatVeOrderByWithRelationInput | DatVeOrderByWithRelationInput[]
    cursor?: DatVeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DatVeScalarFieldEnum | DatVeScalarFieldEnum[]
  }

  /**
   * LichChieu.GiuCho
   */
  export type LichChieu$GiuChoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GiuCho
     */
    select?: GiuChoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GiuCho
     */
    omit?: GiuChoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GiuChoInclude<ExtArgs> | null
    where?: GiuChoWhereInput
    orderBy?: GiuChoOrderByWithRelationInput | GiuChoOrderByWithRelationInput[]
    cursor?: GiuChoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GiuChoScalarFieldEnum | GiuChoScalarFieldEnum[]
  }

  /**
   * LichChieu.HoaDon
   */
  export type LichChieu$HoaDonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HoaDon
     */
    select?: HoaDonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HoaDon
     */
    omit?: HoaDonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoaDonInclude<ExtArgs> | null
    where?: HoaDonWhereInput
    orderBy?: HoaDonOrderByWithRelationInput | HoaDonOrderByWithRelationInput[]
    cursor?: HoaDonWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HoaDonScalarFieldEnum | HoaDonScalarFieldEnum[]
  }

  /**
   * LichChieu.RapPhim
   */
  export type LichChieu$RapPhimArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RapPhim
     */
    select?: RapPhimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RapPhim
     */
    omit?: RapPhimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RapPhimInclude<ExtArgs> | null
    where?: RapPhimWhereInput
  }

  /**
   * LichChieu.Phim
   */
  export type LichChieu$PhimArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phim
     */
    select?: PhimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Phim
     */
    omit?: PhimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhimInclude<ExtArgs> | null
    where?: PhimWhereInput
  }

  /**
   * LichChieu without action
   */
  export type LichChieuDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LichChieu
     */
    select?: LichChieuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LichChieu
     */
    omit?: LichChieuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LichChieuInclude<ExtArgs> | null
  }


  /**
   * Model NguoiDung
   */

  export type AggregateNguoiDung = {
    _count: NguoiDungCountAggregateOutputType | null
    _avg: NguoiDungAvgAggregateOutputType | null
    _sum: NguoiDungSumAggregateOutputType | null
    _min: NguoiDungMinAggregateOutputType | null
    _max: NguoiDungMaxAggregateOutputType | null
  }

  export type NguoiDungAvgAggregateOutputType = {
    tai_khoan: number | null
  }

  export type NguoiDungSumAggregateOutputType = {
    tai_khoan: number | null
  }

  export type NguoiDungMinAggregateOutputType = {
    tai_khoan: number | null
    ho_ten: string | null
    email: string | null
    so_dt: string | null
    mat_khau: string | null
    loai_nguoi_dung: string | null
    isDeleted: boolean | null
  }

  export type NguoiDungMaxAggregateOutputType = {
    tai_khoan: number | null
    ho_ten: string | null
    email: string | null
    so_dt: string | null
    mat_khau: string | null
    loai_nguoi_dung: string | null
    isDeleted: boolean | null
  }

  export type NguoiDungCountAggregateOutputType = {
    tai_khoan: number
    ho_ten: number
    email: number
    so_dt: number
    mat_khau: number
    loai_nguoi_dung: number
    isDeleted: number
    _all: number
  }


  export type NguoiDungAvgAggregateInputType = {
    tai_khoan?: true
  }

  export type NguoiDungSumAggregateInputType = {
    tai_khoan?: true
  }

  export type NguoiDungMinAggregateInputType = {
    tai_khoan?: true
    ho_ten?: true
    email?: true
    so_dt?: true
    mat_khau?: true
    loai_nguoi_dung?: true
    isDeleted?: true
  }

  export type NguoiDungMaxAggregateInputType = {
    tai_khoan?: true
    ho_ten?: true
    email?: true
    so_dt?: true
    mat_khau?: true
    loai_nguoi_dung?: true
    isDeleted?: true
  }

  export type NguoiDungCountAggregateInputType = {
    tai_khoan?: true
    ho_ten?: true
    email?: true
    so_dt?: true
    mat_khau?: true
    loai_nguoi_dung?: true
    isDeleted?: true
    _all?: true
  }

  export type NguoiDungAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NguoiDung to aggregate.
     */
    where?: NguoiDungWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NguoiDungs to fetch.
     */
    orderBy?: NguoiDungOrderByWithRelationInput | NguoiDungOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NguoiDungWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NguoiDungs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NguoiDungs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NguoiDungs
    **/
    _count?: true | NguoiDungCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NguoiDungAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NguoiDungSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NguoiDungMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NguoiDungMaxAggregateInputType
  }

  export type GetNguoiDungAggregateType<T extends NguoiDungAggregateArgs> = {
        [P in keyof T & keyof AggregateNguoiDung]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNguoiDung[P]>
      : GetScalarType<T[P], AggregateNguoiDung[P]>
  }




  export type NguoiDungGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NguoiDungWhereInput
    orderBy?: NguoiDungOrderByWithAggregationInput | NguoiDungOrderByWithAggregationInput[]
    by: NguoiDungScalarFieldEnum[] | NguoiDungScalarFieldEnum
    having?: NguoiDungScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NguoiDungCountAggregateInputType | true
    _avg?: NguoiDungAvgAggregateInputType
    _sum?: NguoiDungSumAggregateInputType
    _min?: NguoiDungMinAggregateInputType
    _max?: NguoiDungMaxAggregateInputType
  }

  export type NguoiDungGroupByOutputType = {
    tai_khoan: number
    ho_ten: string | null
    email: string | null
    so_dt: string | null
    mat_khau: string | null
    loai_nguoi_dung: string | null
    isDeleted: boolean | null
    _count: NguoiDungCountAggregateOutputType | null
    _avg: NguoiDungAvgAggregateOutputType | null
    _sum: NguoiDungSumAggregateOutputType | null
    _min: NguoiDungMinAggregateOutputType | null
    _max: NguoiDungMaxAggregateOutputType | null
  }

  type GetNguoiDungGroupByPayload<T extends NguoiDungGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NguoiDungGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NguoiDungGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NguoiDungGroupByOutputType[P]>
            : GetScalarType<T[P], NguoiDungGroupByOutputType[P]>
        }
      >
    >


  export type NguoiDungSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tai_khoan?: boolean
    ho_ten?: boolean
    email?: boolean
    so_dt?: boolean
    mat_khau?: boolean
    loai_nguoi_dung?: boolean
    isDeleted?: boolean
    DatVe?: boolean | NguoiDung$DatVeArgs<ExtArgs>
    GiuCho?: boolean | NguoiDung$GiuChoArgs<ExtArgs>
    HoaDon?: boolean | NguoiDung$HoaDonArgs<ExtArgs>
    RefreshToken?: boolean | NguoiDung$RefreshTokenArgs<ExtArgs>
    _count?: boolean | NguoiDungCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nguoiDung"]>



  export type NguoiDungSelectScalar = {
    tai_khoan?: boolean
    ho_ten?: boolean
    email?: boolean
    so_dt?: boolean
    mat_khau?: boolean
    loai_nguoi_dung?: boolean
    isDeleted?: boolean
  }

  export type NguoiDungOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"tai_khoan" | "ho_ten" | "email" | "so_dt" | "mat_khau" | "loai_nguoi_dung" | "isDeleted", ExtArgs["result"]["nguoiDung"]>
  export type NguoiDungInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    DatVe?: boolean | NguoiDung$DatVeArgs<ExtArgs>
    GiuCho?: boolean | NguoiDung$GiuChoArgs<ExtArgs>
    HoaDon?: boolean | NguoiDung$HoaDonArgs<ExtArgs>
    RefreshToken?: boolean | NguoiDung$RefreshTokenArgs<ExtArgs>
    _count?: boolean | NguoiDungCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $NguoiDungPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NguoiDung"
    objects: {
      DatVe: Prisma.$DatVePayload<ExtArgs>[]
      GiuCho: Prisma.$GiuChoPayload<ExtArgs>[]
      HoaDon: Prisma.$HoaDonPayload<ExtArgs>[]
      RefreshToken: Prisma.$RefreshTokenPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      tai_khoan: number
      ho_ten: string | null
      email: string | null
      so_dt: string | null
      mat_khau: string | null
      loai_nguoi_dung: string | null
      isDeleted: boolean | null
    }, ExtArgs["result"]["nguoiDung"]>
    composites: {}
  }

  type NguoiDungGetPayload<S extends boolean | null | undefined | NguoiDungDefaultArgs> = $Result.GetResult<Prisma.$NguoiDungPayload, S>

  type NguoiDungCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NguoiDungFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NguoiDungCountAggregateInputType | true
    }

  export interface NguoiDungDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NguoiDung'], meta: { name: 'NguoiDung' } }
    /**
     * Find zero or one NguoiDung that matches the filter.
     * @param {NguoiDungFindUniqueArgs} args - Arguments to find a NguoiDung
     * @example
     * // Get one NguoiDung
     * const nguoiDung = await prisma.nguoiDung.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NguoiDungFindUniqueArgs>(args: SelectSubset<T, NguoiDungFindUniqueArgs<ExtArgs>>): Prisma__NguoiDungClient<$Result.GetResult<Prisma.$NguoiDungPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NguoiDung that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NguoiDungFindUniqueOrThrowArgs} args - Arguments to find a NguoiDung
     * @example
     * // Get one NguoiDung
     * const nguoiDung = await prisma.nguoiDung.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NguoiDungFindUniqueOrThrowArgs>(args: SelectSubset<T, NguoiDungFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NguoiDungClient<$Result.GetResult<Prisma.$NguoiDungPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NguoiDung that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NguoiDungFindFirstArgs} args - Arguments to find a NguoiDung
     * @example
     * // Get one NguoiDung
     * const nguoiDung = await prisma.nguoiDung.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NguoiDungFindFirstArgs>(args?: SelectSubset<T, NguoiDungFindFirstArgs<ExtArgs>>): Prisma__NguoiDungClient<$Result.GetResult<Prisma.$NguoiDungPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NguoiDung that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NguoiDungFindFirstOrThrowArgs} args - Arguments to find a NguoiDung
     * @example
     * // Get one NguoiDung
     * const nguoiDung = await prisma.nguoiDung.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NguoiDungFindFirstOrThrowArgs>(args?: SelectSubset<T, NguoiDungFindFirstOrThrowArgs<ExtArgs>>): Prisma__NguoiDungClient<$Result.GetResult<Prisma.$NguoiDungPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NguoiDungs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NguoiDungFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NguoiDungs
     * const nguoiDungs = await prisma.nguoiDung.findMany()
     * 
     * // Get first 10 NguoiDungs
     * const nguoiDungs = await prisma.nguoiDung.findMany({ take: 10 })
     * 
     * // Only select the `tai_khoan`
     * const nguoiDungWithTai_khoanOnly = await prisma.nguoiDung.findMany({ select: { tai_khoan: true } })
     * 
     */
    findMany<T extends NguoiDungFindManyArgs>(args?: SelectSubset<T, NguoiDungFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NguoiDungPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NguoiDung.
     * @param {NguoiDungCreateArgs} args - Arguments to create a NguoiDung.
     * @example
     * // Create one NguoiDung
     * const NguoiDung = await prisma.nguoiDung.create({
     *   data: {
     *     // ... data to create a NguoiDung
     *   }
     * })
     * 
     */
    create<T extends NguoiDungCreateArgs>(args: SelectSubset<T, NguoiDungCreateArgs<ExtArgs>>): Prisma__NguoiDungClient<$Result.GetResult<Prisma.$NguoiDungPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NguoiDungs.
     * @param {NguoiDungCreateManyArgs} args - Arguments to create many NguoiDungs.
     * @example
     * // Create many NguoiDungs
     * const nguoiDung = await prisma.nguoiDung.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NguoiDungCreateManyArgs>(args?: SelectSubset<T, NguoiDungCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a NguoiDung.
     * @param {NguoiDungDeleteArgs} args - Arguments to delete one NguoiDung.
     * @example
     * // Delete one NguoiDung
     * const NguoiDung = await prisma.nguoiDung.delete({
     *   where: {
     *     // ... filter to delete one NguoiDung
     *   }
     * })
     * 
     */
    delete<T extends NguoiDungDeleteArgs>(args: SelectSubset<T, NguoiDungDeleteArgs<ExtArgs>>): Prisma__NguoiDungClient<$Result.GetResult<Prisma.$NguoiDungPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NguoiDung.
     * @param {NguoiDungUpdateArgs} args - Arguments to update one NguoiDung.
     * @example
     * // Update one NguoiDung
     * const nguoiDung = await prisma.nguoiDung.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NguoiDungUpdateArgs>(args: SelectSubset<T, NguoiDungUpdateArgs<ExtArgs>>): Prisma__NguoiDungClient<$Result.GetResult<Prisma.$NguoiDungPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NguoiDungs.
     * @param {NguoiDungDeleteManyArgs} args - Arguments to filter NguoiDungs to delete.
     * @example
     * // Delete a few NguoiDungs
     * const { count } = await prisma.nguoiDung.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NguoiDungDeleteManyArgs>(args?: SelectSubset<T, NguoiDungDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NguoiDungs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NguoiDungUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NguoiDungs
     * const nguoiDung = await prisma.nguoiDung.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NguoiDungUpdateManyArgs>(args: SelectSubset<T, NguoiDungUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one NguoiDung.
     * @param {NguoiDungUpsertArgs} args - Arguments to update or create a NguoiDung.
     * @example
     * // Update or create a NguoiDung
     * const nguoiDung = await prisma.nguoiDung.upsert({
     *   create: {
     *     // ... data to create a NguoiDung
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NguoiDung we want to update
     *   }
     * })
     */
    upsert<T extends NguoiDungUpsertArgs>(args: SelectSubset<T, NguoiDungUpsertArgs<ExtArgs>>): Prisma__NguoiDungClient<$Result.GetResult<Prisma.$NguoiDungPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NguoiDungs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NguoiDungCountArgs} args - Arguments to filter NguoiDungs to count.
     * @example
     * // Count the number of NguoiDungs
     * const count = await prisma.nguoiDung.count({
     *   where: {
     *     // ... the filter for the NguoiDungs we want to count
     *   }
     * })
    **/
    count<T extends NguoiDungCountArgs>(
      args?: Subset<T, NguoiDungCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NguoiDungCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NguoiDung.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NguoiDungAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NguoiDungAggregateArgs>(args: Subset<T, NguoiDungAggregateArgs>): Prisma.PrismaPromise<GetNguoiDungAggregateType<T>>

    /**
     * Group by NguoiDung.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NguoiDungGroupByArgs} args - Group by arguments.
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
      T extends NguoiDungGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NguoiDungGroupByArgs['orderBy'] }
        : { orderBy?: NguoiDungGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NguoiDungGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNguoiDungGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NguoiDung model
   */
  readonly fields: NguoiDungFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NguoiDung.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NguoiDungClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    DatVe<T extends NguoiDung$DatVeArgs<ExtArgs> = {}>(args?: Subset<T, NguoiDung$DatVeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DatVePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    GiuCho<T extends NguoiDung$GiuChoArgs<ExtArgs> = {}>(args?: Subset<T, NguoiDung$GiuChoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GiuChoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    HoaDon<T extends NguoiDung$HoaDonArgs<ExtArgs> = {}>(args?: Subset<T, NguoiDung$HoaDonArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HoaDonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    RefreshToken<T extends NguoiDung$RefreshTokenArgs<ExtArgs> = {}>(args?: Subset<T, NguoiDung$RefreshTokenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the NguoiDung model
   */
  interface NguoiDungFieldRefs {
    readonly tai_khoan: FieldRef<"NguoiDung", 'Int'>
    readonly ho_ten: FieldRef<"NguoiDung", 'String'>
    readonly email: FieldRef<"NguoiDung", 'String'>
    readonly so_dt: FieldRef<"NguoiDung", 'String'>
    readonly mat_khau: FieldRef<"NguoiDung", 'String'>
    readonly loai_nguoi_dung: FieldRef<"NguoiDung", 'String'>
    readonly isDeleted: FieldRef<"NguoiDung", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * NguoiDung findUnique
   */
  export type NguoiDungFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NguoiDung
     */
    select?: NguoiDungSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NguoiDung
     */
    omit?: NguoiDungOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NguoiDungInclude<ExtArgs> | null
    /**
     * Filter, which NguoiDung to fetch.
     */
    where: NguoiDungWhereUniqueInput
  }

  /**
   * NguoiDung findUniqueOrThrow
   */
  export type NguoiDungFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NguoiDung
     */
    select?: NguoiDungSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NguoiDung
     */
    omit?: NguoiDungOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NguoiDungInclude<ExtArgs> | null
    /**
     * Filter, which NguoiDung to fetch.
     */
    where: NguoiDungWhereUniqueInput
  }

  /**
   * NguoiDung findFirst
   */
  export type NguoiDungFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NguoiDung
     */
    select?: NguoiDungSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NguoiDung
     */
    omit?: NguoiDungOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NguoiDungInclude<ExtArgs> | null
    /**
     * Filter, which NguoiDung to fetch.
     */
    where?: NguoiDungWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NguoiDungs to fetch.
     */
    orderBy?: NguoiDungOrderByWithRelationInput | NguoiDungOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NguoiDungs.
     */
    cursor?: NguoiDungWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NguoiDungs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NguoiDungs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NguoiDungs.
     */
    distinct?: NguoiDungScalarFieldEnum | NguoiDungScalarFieldEnum[]
  }

  /**
   * NguoiDung findFirstOrThrow
   */
  export type NguoiDungFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NguoiDung
     */
    select?: NguoiDungSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NguoiDung
     */
    omit?: NguoiDungOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NguoiDungInclude<ExtArgs> | null
    /**
     * Filter, which NguoiDung to fetch.
     */
    where?: NguoiDungWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NguoiDungs to fetch.
     */
    orderBy?: NguoiDungOrderByWithRelationInput | NguoiDungOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NguoiDungs.
     */
    cursor?: NguoiDungWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NguoiDungs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NguoiDungs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NguoiDungs.
     */
    distinct?: NguoiDungScalarFieldEnum | NguoiDungScalarFieldEnum[]
  }

  /**
   * NguoiDung findMany
   */
  export type NguoiDungFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NguoiDung
     */
    select?: NguoiDungSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NguoiDung
     */
    omit?: NguoiDungOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NguoiDungInclude<ExtArgs> | null
    /**
     * Filter, which NguoiDungs to fetch.
     */
    where?: NguoiDungWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NguoiDungs to fetch.
     */
    orderBy?: NguoiDungOrderByWithRelationInput | NguoiDungOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NguoiDungs.
     */
    cursor?: NguoiDungWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NguoiDungs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NguoiDungs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NguoiDungs.
     */
    distinct?: NguoiDungScalarFieldEnum | NguoiDungScalarFieldEnum[]
  }

  /**
   * NguoiDung create
   */
  export type NguoiDungCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NguoiDung
     */
    select?: NguoiDungSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NguoiDung
     */
    omit?: NguoiDungOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NguoiDungInclude<ExtArgs> | null
    /**
     * The data needed to create a NguoiDung.
     */
    data?: XOR<NguoiDungCreateInput, NguoiDungUncheckedCreateInput>
  }

  /**
   * NguoiDung createMany
   */
  export type NguoiDungCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NguoiDungs.
     */
    data: NguoiDungCreateManyInput | NguoiDungCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NguoiDung update
   */
  export type NguoiDungUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NguoiDung
     */
    select?: NguoiDungSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NguoiDung
     */
    omit?: NguoiDungOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NguoiDungInclude<ExtArgs> | null
    /**
     * The data needed to update a NguoiDung.
     */
    data: XOR<NguoiDungUpdateInput, NguoiDungUncheckedUpdateInput>
    /**
     * Choose, which NguoiDung to update.
     */
    where: NguoiDungWhereUniqueInput
  }

  /**
   * NguoiDung updateMany
   */
  export type NguoiDungUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NguoiDungs.
     */
    data: XOR<NguoiDungUpdateManyMutationInput, NguoiDungUncheckedUpdateManyInput>
    /**
     * Filter which NguoiDungs to update
     */
    where?: NguoiDungWhereInput
    /**
     * Limit how many NguoiDungs to update.
     */
    limit?: number
  }

  /**
   * NguoiDung upsert
   */
  export type NguoiDungUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NguoiDung
     */
    select?: NguoiDungSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NguoiDung
     */
    omit?: NguoiDungOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NguoiDungInclude<ExtArgs> | null
    /**
     * The filter to search for the NguoiDung to update in case it exists.
     */
    where: NguoiDungWhereUniqueInput
    /**
     * In case the NguoiDung found by the `where` argument doesn't exist, create a new NguoiDung with this data.
     */
    create: XOR<NguoiDungCreateInput, NguoiDungUncheckedCreateInput>
    /**
     * In case the NguoiDung was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NguoiDungUpdateInput, NguoiDungUncheckedUpdateInput>
  }

  /**
   * NguoiDung delete
   */
  export type NguoiDungDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NguoiDung
     */
    select?: NguoiDungSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NguoiDung
     */
    omit?: NguoiDungOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NguoiDungInclude<ExtArgs> | null
    /**
     * Filter which NguoiDung to delete.
     */
    where: NguoiDungWhereUniqueInput
  }

  /**
   * NguoiDung deleteMany
   */
  export type NguoiDungDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NguoiDungs to delete
     */
    where?: NguoiDungWhereInput
    /**
     * Limit how many NguoiDungs to delete.
     */
    limit?: number
  }

  /**
   * NguoiDung.DatVe
   */
  export type NguoiDung$DatVeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatVe
     */
    select?: DatVeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DatVe
     */
    omit?: DatVeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatVeInclude<ExtArgs> | null
    where?: DatVeWhereInput
    orderBy?: DatVeOrderByWithRelationInput | DatVeOrderByWithRelationInput[]
    cursor?: DatVeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DatVeScalarFieldEnum | DatVeScalarFieldEnum[]
  }

  /**
   * NguoiDung.GiuCho
   */
  export type NguoiDung$GiuChoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GiuCho
     */
    select?: GiuChoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GiuCho
     */
    omit?: GiuChoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GiuChoInclude<ExtArgs> | null
    where?: GiuChoWhereInput
    orderBy?: GiuChoOrderByWithRelationInput | GiuChoOrderByWithRelationInput[]
    cursor?: GiuChoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GiuChoScalarFieldEnum | GiuChoScalarFieldEnum[]
  }

  /**
   * NguoiDung.HoaDon
   */
  export type NguoiDung$HoaDonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HoaDon
     */
    select?: HoaDonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HoaDon
     */
    omit?: HoaDonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoaDonInclude<ExtArgs> | null
    where?: HoaDonWhereInput
    orderBy?: HoaDonOrderByWithRelationInput | HoaDonOrderByWithRelationInput[]
    cursor?: HoaDonWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HoaDonScalarFieldEnum | HoaDonScalarFieldEnum[]
  }

  /**
   * NguoiDung.RefreshToken
   */
  export type NguoiDung$RefreshTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    where?: RefreshTokenWhereInput
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    cursor?: RefreshTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * NguoiDung without action
   */
  export type NguoiDungDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NguoiDung
     */
    select?: NguoiDungSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NguoiDung
     */
    omit?: NguoiDungOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NguoiDungInclude<ExtArgs> | null
  }


  /**
   * Model RefreshToken
   */

  export type AggregateRefreshToken = {
    _count: RefreshTokenCountAggregateOutputType | null
    _avg: RefreshTokenAvgAggregateOutputType | null
    _sum: RefreshTokenSumAggregateOutputType | null
    _min: RefreshTokenMinAggregateOutputType | null
    _max: RefreshTokenMaxAggregateOutputType | null
  }

  export type RefreshTokenAvgAggregateOutputType = {
    id: number | null
    tai_khoan: number | null
  }

  export type RefreshTokenSumAggregateOutputType = {
    id: number | null
    tai_khoan: number | null
  }

  export type RefreshTokenMinAggregateOutputType = {
    id: number | null
    token: string | null
    tai_khoan: number | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type RefreshTokenMaxAggregateOutputType = {
    id: number | null
    token: string | null
    tai_khoan: number | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type RefreshTokenCountAggregateOutputType = {
    id: number
    token: number
    tai_khoan: number
    expiresAt: number
    createdAt: number
    _all: number
  }


  export type RefreshTokenAvgAggregateInputType = {
    id?: true
    tai_khoan?: true
  }

  export type RefreshTokenSumAggregateInputType = {
    id?: true
    tai_khoan?: true
  }

  export type RefreshTokenMinAggregateInputType = {
    id?: true
    token?: true
    tai_khoan?: true
    expiresAt?: true
    createdAt?: true
  }

  export type RefreshTokenMaxAggregateInputType = {
    id?: true
    token?: true
    tai_khoan?: true
    expiresAt?: true
    createdAt?: true
  }

  export type RefreshTokenCountAggregateInputType = {
    id?: true
    token?: true
    tai_khoan?: true
    expiresAt?: true
    createdAt?: true
    _all?: true
  }

  export type RefreshTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefreshToken to aggregate.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RefreshTokens
    **/
    _count?: true | RefreshTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RefreshTokenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RefreshTokenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RefreshTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RefreshTokenMaxAggregateInputType
  }

  export type GetRefreshTokenAggregateType<T extends RefreshTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateRefreshToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRefreshToken[P]>
      : GetScalarType<T[P], AggregateRefreshToken[P]>
  }




  export type RefreshTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefreshTokenWhereInput
    orderBy?: RefreshTokenOrderByWithAggregationInput | RefreshTokenOrderByWithAggregationInput[]
    by: RefreshTokenScalarFieldEnum[] | RefreshTokenScalarFieldEnum
    having?: RefreshTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RefreshTokenCountAggregateInputType | true
    _avg?: RefreshTokenAvgAggregateInputType
    _sum?: RefreshTokenSumAggregateInputType
    _min?: RefreshTokenMinAggregateInputType
    _max?: RefreshTokenMaxAggregateInputType
  }

  export type RefreshTokenGroupByOutputType = {
    id: number
    token: string
    tai_khoan: number
    expiresAt: Date
    createdAt: Date
    _count: RefreshTokenCountAggregateOutputType | null
    _avg: RefreshTokenAvgAggregateOutputType | null
    _sum: RefreshTokenSumAggregateOutputType | null
    _min: RefreshTokenMinAggregateOutputType | null
    _max: RefreshTokenMaxAggregateOutputType | null
  }

  type GetRefreshTokenGroupByPayload<T extends RefreshTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RefreshTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RefreshTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>
            : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>
        }
      >
    >


  export type RefreshTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    tai_khoan?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    NguoiDung?: boolean | NguoiDungDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>



  export type RefreshTokenSelectScalar = {
    id?: boolean
    token?: boolean
    tai_khoan?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }

  export type RefreshTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "token" | "tai_khoan" | "expiresAt" | "createdAt", ExtArgs["result"]["refreshToken"]>
  export type RefreshTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    NguoiDung?: boolean | NguoiDungDefaultArgs<ExtArgs>
  }

  export type $RefreshTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RefreshToken"
    objects: {
      NguoiDung: Prisma.$NguoiDungPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      token: string
      tai_khoan: number
      expiresAt: Date
      createdAt: Date
    }, ExtArgs["result"]["refreshToken"]>
    composites: {}
  }

  type RefreshTokenGetPayload<S extends boolean | null | undefined | RefreshTokenDefaultArgs> = $Result.GetResult<Prisma.$RefreshTokenPayload, S>

  type RefreshTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RefreshTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RefreshTokenCountAggregateInputType | true
    }

  export interface RefreshTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RefreshToken'], meta: { name: 'RefreshToken' } }
    /**
     * Find zero or one RefreshToken that matches the filter.
     * @param {RefreshTokenFindUniqueArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RefreshTokenFindUniqueArgs>(args: SelectSubset<T, RefreshTokenFindUniqueArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RefreshToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RefreshTokenFindUniqueOrThrowArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RefreshTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, RefreshTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RefreshToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindFirstArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RefreshTokenFindFirstArgs>(args?: SelectSubset<T, RefreshTokenFindFirstArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RefreshToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindFirstOrThrowArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RefreshTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, RefreshTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RefreshTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RefreshTokens
     * const refreshTokens = await prisma.refreshToken.findMany()
     * 
     * // Get first 10 RefreshTokens
     * const refreshTokens = await prisma.refreshToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RefreshTokenFindManyArgs>(args?: SelectSubset<T, RefreshTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RefreshToken.
     * @param {RefreshTokenCreateArgs} args - Arguments to create a RefreshToken.
     * @example
     * // Create one RefreshToken
     * const RefreshToken = await prisma.refreshToken.create({
     *   data: {
     *     // ... data to create a RefreshToken
     *   }
     * })
     * 
     */
    create<T extends RefreshTokenCreateArgs>(args: SelectSubset<T, RefreshTokenCreateArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RefreshTokens.
     * @param {RefreshTokenCreateManyArgs} args - Arguments to create many RefreshTokens.
     * @example
     * // Create many RefreshTokens
     * const refreshToken = await prisma.refreshToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RefreshTokenCreateManyArgs>(args?: SelectSubset<T, RefreshTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RefreshToken.
     * @param {RefreshTokenDeleteArgs} args - Arguments to delete one RefreshToken.
     * @example
     * // Delete one RefreshToken
     * const RefreshToken = await prisma.refreshToken.delete({
     *   where: {
     *     // ... filter to delete one RefreshToken
     *   }
     * })
     * 
     */
    delete<T extends RefreshTokenDeleteArgs>(args: SelectSubset<T, RefreshTokenDeleteArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RefreshToken.
     * @param {RefreshTokenUpdateArgs} args - Arguments to update one RefreshToken.
     * @example
     * // Update one RefreshToken
     * const refreshToken = await prisma.refreshToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RefreshTokenUpdateArgs>(args: SelectSubset<T, RefreshTokenUpdateArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RefreshTokens.
     * @param {RefreshTokenDeleteManyArgs} args - Arguments to filter RefreshTokens to delete.
     * @example
     * // Delete a few RefreshTokens
     * const { count } = await prisma.refreshToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RefreshTokenDeleteManyArgs>(args?: SelectSubset<T, RefreshTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RefreshTokens
     * const refreshToken = await prisma.refreshToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RefreshTokenUpdateManyArgs>(args: SelectSubset<T, RefreshTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RefreshToken.
     * @param {RefreshTokenUpsertArgs} args - Arguments to update or create a RefreshToken.
     * @example
     * // Update or create a RefreshToken
     * const refreshToken = await prisma.refreshToken.upsert({
     *   create: {
     *     // ... data to create a RefreshToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RefreshToken we want to update
     *   }
     * })
     */
    upsert<T extends RefreshTokenUpsertArgs>(args: SelectSubset<T, RefreshTokenUpsertArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenCountArgs} args - Arguments to filter RefreshTokens to count.
     * @example
     * // Count the number of RefreshTokens
     * const count = await prisma.refreshToken.count({
     *   where: {
     *     // ... the filter for the RefreshTokens we want to count
     *   }
     * })
    **/
    count<T extends RefreshTokenCountArgs>(
      args?: Subset<T, RefreshTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RefreshTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RefreshTokenAggregateArgs>(args: Subset<T, RefreshTokenAggregateArgs>): Prisma.PrismaPromise<GetRefreshTokenAggregateType<T>>

    /**
     * Group by RefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenGroupByArgs} args - Group by arguments.
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
      T extends RefreshTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RefreshTokenGroupByArgs['orderBy'] }
        : { orderBy?: RefreshTokenGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RefreshTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRefreshTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RefreshToken model
   */
  readonly fields: RefreshTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RefreshToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RefreshTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    NguoiDung<T extends NguoiDungDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NguoiDungDefaultArgs<ExtArgs>>): Prisma__NguoiDungClient<$Result.GetResult<Prisma.$NguoiDungPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RefreshToken model
   */
  interface RefreshTokenFieldRefs {
    readonly id: FieldRef<"RefreshToken", 'Int'>
    readonly token: FieldRef<"RefreshToken", 'String'>
    readonly tai_khoan: FieldRef<"RefreshToken", 'Int'>
    readonly expiresAt: FieldRef<"RefreshToken", 'DateTime'>
    readonly createdAt: FieldRef<"RefreshToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RefreshToken findUnique
   */
  export type RefreshTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken findUniqueOrThrow
   */
  export type RefreshTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken findFirst
   */
  export type RefreshTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken findFirstOrThrow
   */
  export type RefreshTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken findMany
   */
  export type RefreshTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshTokens to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken create
   */
  export type RefreshTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The data needed to create a RefreshToken.
     */
    data: XOR<RefreshTokenCreateInput, RefreshTokenUncheckedCreateInput>
  }

  /**
   * RefreshToken createMany
   */
  export type RefreshTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RefreshTokens.
     */
    data: RefreshTokenCreateManyInput | RefreshTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RefreshToken update
   */
  export type RefreshTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The data needed to update a RefreshToken.
     */
    data: XOR<RefreshTokenUpdateInput, RefreshTokenUncheckedUpdateInput>
    /**
     * Choose, which RefreshToken to update.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken updateMany
   */
  export type RefreshTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RefreshTokens.
     */
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyInput>
    /**
     * Filter which RefreshTokens to update
     */
    where?: RefreshTokenWhereInput
    /**
     * Limit how many RefreshTokens to update.
     */
    limit?: number
  }

  /**
   * RefreshToken upsert
   */
  export type RefreshTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The filter to search for the RefreshToken to update in case it exists.
     */
    where: RefreshTokenWhereUniqueInput
    /**
     * In case the RefreshToken found by the `where` argument doesn't exist, create a new RefreshToken with this data.
     */
    create: XOR<RefreshTokenCreateInput, RefreshTokenUncheckedCreateInput>
    /**
     * In case the RefreshToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RefreshTokenUpdateInput, RefreshTokenUncheckedUpdateInput>
  }

  /**
   * RefreshToken delete
   */
  export type RefreshTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter which RefreshToken to delete.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken deleteMany
   */
  export type RefreshTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefreshTokens to delete
     */
    where?: RefreshTokenWhereInput
    /**
     * Limit how many RefreshTokens to delete.
     */
    limit?: number
  }

  /**
   * RefreshToken without action
   */
  export type RefreshTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
  }


  /**
   * Model Phim
   */

  export type AggregatePhim = {
    _count: PhimCountAggregateOutputType | null
    _avg: PhimAvgAggregateOutputType | null
    _sum: PhimSumAggregateOutputType | null
    _min: PhimMinAggregateOutputType | null
    _max: PhimMaxAggregateOutputType | null
  }

  export type PhimAvgAggregateOutputType = {
    ma_phim: number | null
    danh_gia: number | null
  }

  export type PhimSumAggregateOutputType = {
    ma_phim: number | null
    danh_gia: number | null
  }

  export type PhimMinAggregateOutputType = {
    ma_phim: number | null
    ten_phim: string | null
    trailer: string | null
    hinh_anh: string | null
    mo_ta: string | null
    ngay_khoi_chieu: Date | null
    danh_gia: number | null
    hot: boolean | null
    dang_chieu: boolean | null
    sap_chieu: boolean | null
    isDeleted: boolean | null
  }

  export type PhimMaxAggregateOutputType = {
    ma_phim: number | null
    ten_phim: string | null
    trailer: string | null
    hinh_anh: string | null
    mo_ta: string | null
    ngay_khoi_chieu: Date | null
    danh_gia: number | null
    hot: boolean | null
    dang_chieu: boolean | null
    sap_chieu: boolean | null
    isDeleted: boolean | null
  }

  export type PhimCountAggregateOutputType = {
    ma_phim: number
    ten_phim: number
    trailer: number
    hinh_anh: number
    mo_ta: number
    ngay_khoi_chieu: number
    danh_gia: number
    hot: number
    dang_chieu: number
    sap_chieu: number
    isDeleted: number
    _all: number
  }


  export type PhimAvgAggregateInputType = {
    ma_phim?: true
    danh_gia?: true
  }

  export type PhimSumAggregateInputType = {
    ma_phim?: true
    danh_gia?: true
  }

  export type PhimMinAggregateInputType = {
    ma_phim?: true
    ten_phim?: true
    trailer?: true
    hinh_anh?: true
    mo_ta?: true
    ngay_khoi_chieu?: true
    danh_gia?: true
    hot?: true
    dang_chieu?: true
    sap_chieu?: true
    isDeleted?: true
  }

  export type PhimMaxAggregateInputType = {
    ma_phim?: true
    ten_phim?: true
    trailer?: true
    hinh_anh?: true
    mo_ta?: true
    ngay_khoi_chieu?: true
    danh_gia?: true
    hot?: true
    dang_chieu?: true
    sap_chieu?: true
    isDeleted?: true
  }

  export type PhimCountAggregateInputType = {
    ma_phim?: true
    ten_phim?: true
    trailer?: true
    hinh_anh?: true
    mo_ta?: true
    ngay_khoi_chieu?: true
    danh_gia?: true
    hot?: true
    dang_chieu?: true
    sap_chieu?: true
    isDeleted?: true
    _all?: true
  }

  export type PhimAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Phim to aggregate.
     */
    where?: PhimWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Phims to fetch.
     */
    orderBy?: PhimOrderByWithRelationInput | PhimOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PhimWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Phims from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Phims.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Phims
    **/
    _count?: true | PhimCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PhimAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PhimSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PhimMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PhimMaxAggregateInputType
  }

  export type GetPhimAggregateType<T extends PhimAggregateArgs> = {
        [P in keyof T & keyof AggregatePhim]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePhim[P]>
      : GetScalarType<T[P], AggregatePhim[P]>
  }




  export type PhimGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhimWhereInput
    orderBy?: PhimOrderByWithAggregationInput | PhimOrderByWithAggregationInput[]
    by: PhimScalarFieldEnum[] | PhimScalarFieldEnum
    having?: PhimScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PhimCountAggregateInputType | true
    _avg?: PhimAvgAggregateInputType
    _sum?: PhimSumAggregateInputType
    _min?: PhimMinAggregateInputType
    _max?: PhimMaxAggregateInputType
  }

  export type PhimGroupByOutputType = {
    ma_phim: number
    ten_phim: string | null
    trailer: string | null
    hinh_anh: string | null
    mo_ta: string | null
    ngay_khoi_chieu: Date | null
    danh_gia: number | null
    hot: boolean | null
    dang_chieu: boolean | null
    sap_chieu: boolean | null
    isDeleted: boolean | null
    _count: PhimCountAggregateOutputType | null
    _avg: PhimAvgAggregateOutputType | null
    _sum: PhimSumAggregateOutputType | null
    _min: PhimMinAggregateOutputType | null
    _max: PhimMaxAggregateOutputType | null
  }

  type GetPhimGroupByPayload<T extends PhimGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PhimGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PhimGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PhimGroupByOutputType[P]>
            : GetScalarType<T[P], PhimGroupByOutputType[P]>
        }
      >
    >


  export type PhimSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ma_phim?: boolean
    ten_phim?: boolean
    trailer?: boolean
    hinh_anh?: boolean
    mo_ta?: boolean
    ngay_khoi_chieu?: boolean
    danh_gia?: boolean
    hot?: boolean
    dang_chieu?: boolean
    sap_chieu?: boolean
    isDeleted?: boolean
    Banner?: boolean | Phim$BannerArgs<ExtArgs>
    LichChieu?: boolean | Phim$LichChieuArgs<ExtArgs>
    _count?: boolean | PhimCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["phim"]>



  export type PhimSelectScalar = {
    ma_phim?: boolean
    ten_phim?: boolean
    trailer?: boolean
    hinh_anh?: boolean
    mo_ta?: boolean
    ngay_khoi_chieu?: boolean
    danh_gia?: boolean
    hot?: boolean
    dang_chieu?: boolean
    sap_chieu?: boolean
    isDeleted?: boolean
  }

  export type PhimOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ma_phim" | "ten_phim" | "trailer" | "hinh_anh" | "mo_ta" | "ngay_khoi_chieu" | "danh_gia" | "hot" | "dang_chieu" | "sap_chieu" | "isDeleted", ExtArgs["result"]["phim"]>
  export type PhimInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Banner?: boolean | Phim$BannerArgs<ExtArgs>
    LichChieu?: boolean | Phim$LichChieuArgs<ExtArgs>
    _count?: boolean | PhimCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PhimPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Phim"
    objects: {
      Banner: Prisma.$BannerPayload<ExtArgs>[]
      LichChieu: Prisma.$LichChieuPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      ma_phim: number
      ten_phim: string | null
      trailer: string | null
      hinh_anh: string | null
      mo_ta: string | null
      ngay_khoi_chieu: Date | null
      danh_gia: number | null
      hot: boolean | null
      dang_chieu: boolean | null
      sap_chieu: boolean | null
      isDeleted: boolean | null
    }, ExtArgs["result"]["phim"]>
    composites: {}
  }

  type PhimGetPayload<S extends boolean | null | undefined | PhimDefaultArgs> = $Result.GetResult<Prisma.$PhimPayload, S>

  type PhimCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PhimFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PhimCountAggregateInputType | true
    }

  export interface PhimDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Phim'], meta: { name: 'Phim' } }
    /**
     * Find zero or one Phim that matches the filter.
     * @param {PhimFindUniqueArgs} args - Arguments to find a Phim
     * @example
     * // Get one Phim
     * const phim = await prisma.phim.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PhimFindUniqueArgs>(args: SelectSubset<T, PhimFindUniqueArgs<ExtArgs>>): Prisma__PhimClient<$Result.GetResult<Prisma.$PhimPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Phim that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PhimFindUniqueOrThrowArgs} args - Arguments to find a Phim
     * @example
     * // Get one Phim
     * const phim = await prisma.phim.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PhimFindUniqueOrThrowArgs>(args: SelectSubset<T, PhimFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PhimClient<$Result.GetResult<Prisma.$PhimPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Phim that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhimFindFirstArgs} args - Arguments to find a Phim
     * @example
     * // Get one Phim
     * const phim = await prisma.phim.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PhimFindFirstArgs>(args?: SelectSubset<T, PhimFindFirstArgs<ExtArgs>>): Prisma__PhimClient<$Result.GetResult<Prisma.$PhimPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Phim that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhimFindFirstOrThrowArgs} args - Arguments to find a Phim
     * @example
     * // Get one Phim
     * const phim = await prisma.phim.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PhimFindFirstOrThrowArgs>(args?: SelectSubset<T, PhimFindFirstOrThrowArgs<ExtArgs>>): Prisma__PhimClient<$Result.GetResult<Prisma.$PhimPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Phims that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhimFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Phims
     * const phims = await prisma.phim.findMany()
     * 
     * // Get first 10 Phims
     * const phims = await prisma.phim.findMany({ take: 10 })
     * 
     * // Only select the `ma_phim`
     * const phimWithMa_phimOnly = await prisma.phim.findMany({ select: { ma_phim: true } })
     * 
     */
    findMany<T extends PhimFindManyArgs>(args?: SelectSubset<T, PhimFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhimPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Phim.
     * @param {PhimCreateArgs} args - Arguments to create a Phim.
     * @example
     * // Create one Phim
     * const Phim = await prisma.phim.create({
     *   data: {
     *     // ... data to create a Phim
     *   }
     * })
     * 
     */
    create<T extends PhimCreateArgs>(args: SelectSubset<T, PhimCreateArgs<ExtArgs>>): Prisma__PhimClient<$Result.GetResult<Prisma.$PhimPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Phims.
     * @param {PhimCreateManyArgs} args - Arguments to create many Phims.
     * @example
     * // Create many Phims
     * const phim = await prisma.phim.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PhimCreateManyArgs>(args?: SelectSubset<T, PhimCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Phim.
     * @param {PhimDeleteArgs} args - Arguments to delete one Phim.
     * @example
     * // Delete one Phim
     * const Phim = await prisma.phim.delete({
     *   where: {
     *     // ... filter to delete one Phim
     *   }
     * })
     * 
     */
    delete<T extends PhimDeleteArgs>(args: SelectSubset<T, PhimDeleteArgs<ExtArgs>>): Prisma__PhimClient<$Result.GetResult<Prisma.$PhimPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Phim.
     * @param {PhimUpdateArgs} args - Arguments to update one Phim.
     * @example
     * // Update one Phim
     * const phim = await prisma.phim.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PhimUpdateArgs>(args: SelectSubset<T, PhimUpdateArgs<ExtArgs>>): Prisma__PhimClient<$Result.GetResult<Prisma.$PhimPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Phims.
     * @param {PhimDeleteManyArgs} args - Arguments to filter Phims to delete.
     * @example
     * // Delete a few Phims
     * const { count } = await prisma.phim.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PhimDeleteManyArgs>(args?: SelectSubset<T, PhimDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Phims.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhimUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Phims
     * const phim = await prisma.phim.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PhimUpdateManyArgs>(args: SelectSubset<T, PhimUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Phim.
     * @param {PhimUpsertArgs} args - Arguments to update or create a Phim.
     * @example
     * // Update or create a Phim
     * const phim = await prisma.phim.upsert({
     *   create: {
     *     // ... data to create a Phim
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Phim we want to update
     *   }
     * })
     */
    upsert<T extends PhimUpsertArgs>(args: SelectSubset<T, PhimUpsertArgs<ExtArgs>>): Prisma__PhimClient<$Result.GetResult<Prisma.$PhimPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Phims.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhimCountArgs} args - Arguments to filter Phims to count.
     * @example
     * // Count the number of Phims
     * const count = await prisma.phim.count({
     *   where: {
     *     // ... the filter for the Phims we want to count
     *   }
     * })
    **/
    count<T extends PhimCountArgs>(
      args?: Subset<T, PhimCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PhimCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Phim.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhimAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PhimAggregateArgs>(args: Subset<T, PhimAggregateArgs>): Prisma.PrismaPromise<GetPhimAggregateType<T>>

    /**
     * Group by Phim.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhimGroupByArgs} args - Group by arguments.
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
      T extends PhimGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PhimGroupByArgs['orderBy'] }
        : { orderBy?: PhimGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PhimGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPhimGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Phim model
   */
  readonly fields: PhimFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Phim.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PhimClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Banner<T extends Phim$BannerArgs<ExtArgs> = {}>(args?: Subset<T, Phim$BannerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    LichChieu<T extends Phim$LichChieuArgs<ExtArgs> = {}>(args?: Subset<T, Phim$LichChieuArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LichChieuPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Phim model
   */
  interface PhimFieldRefs {
    readonly ma_phim: FieldRef<"Phim", 'Int'>
    readonly ten_phim: FieldRef<"Phim", 'String'>
    readonly trailer: FieldRef<"Phim", 'String'>
    readonly hinh_anh: FieldRef<"Phim", 'String'>
    readonly mo_ta: FieldRef<"Phim", 'String'>
    readonly ngay_khoi_chieu: FieldRef<"Phim", 'DateTime'>
    readonly danh_gia: FieldRef<"Phim", 'Int'>
    readonly hot: FieldRef<"Phim", 'Boolean'>
    readonly dang_chieu: FieldRef<"Phim", 'Boolean'>
    readonly sap_chieu: FieldRef<"Phim", 'Boolean'>
    readonly isDeleted: FieldRef<"Phim", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Phim findUnique
   */
  export type PhimFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phim
     */
    select?: PhimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Phim
     */
    omit?: PhimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhimInclude<ExtArgs> | null
    /**
     * Filter, which Phim to fetch.
     */
    where: PhimWhereUniqueInput
  }

  /**
   * Phim findUniqueOrThrow
   */
  export type PhimFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phim
     */
    select?: PhimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Phim
     */
    omit?: PhimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhimInclude<ExtArgs> | null
    /**
     * Filter, which Phim to fetch.
     */
    where: PhimWhereUniqueInput
  }

  /**
   * Phim findFirst
   */
  export type PhimFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phim
     */
    select?: PhimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Phim
     */
    omit?: PhimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhimInclude<ExtArgs> | null
    /**
     * Filter, which Phim to fetch.
     */
    where?: PhimWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Phims to fetch.
     */
    orderBy?: PhimOrderByWithRelationInput | PhimOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Phims.
     */
    cursor?: PhimWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Phims from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Phims.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Phims.
     */
    distinct?: PhimScalarFieldEnum | PhimScalarFieldEnum[]
  }

  /**
   * Phim findFirstOrThrow
   */
  export type PhimFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phim
     */
    select?: PhimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Phim
     */
    omit?: PhimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhimInclude<ExtArgs> | null
    /**
     * Filter, which Phim to fetch.
     */
    where?: PhimWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Phims to fetch.
     */
    orderBy?: PhimOrderByWithRelationInput | PhimOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Phims.
     */
    cursor?: PhimWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Phims from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Phims.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Phims.
     */
    distinct?: PhimScalarFieldEnum | PhimScalarFieldEnum[]
  }

  /**
   * Phim findMany
   */
  export type PhimFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phim
     */
    select?: PhimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Phim
     */
    omit?: PhimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhimInclude<ExtArgs> | null
    /**
     * Filter, which Phims to fetch.
     */
    where?: PhimWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Phims to fetch.
     */
    orderBy?: PhimOrderByWithRelationInput | PhimOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Phims.
     */
    cursor?: PhimWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Phims from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Phims.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Phims.
     */
    distinct?: PhimScalarFieldEnum | PhimScalarFieldEnum[]
  }

  /**
   * Phim create
   */
  export type PhimCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phim
     */
    select?: PhimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Phim
     */
    omit?: PhimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhimInclude<ExtArgs> | null
    /**
     * The data needed to create a Phim.
     */
    data?: XOR<PhimCreateInput, PhimUncheckedCreateInput>
  }

  /**
   * Phim createMany
   */
  export type PhimCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Phims.
     */
    data: PhimCreateManyInput | PhimCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Phim update
   */
  export type PhimUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phim
     */
    select?: PhimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Phim
     */
    omit?: PhimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhimInclude<ExtArgs> | null
    /**
     * The data needed to update a Phim.
     */
    data: XOR<PhimUpdateInput, PhimUncheckedUpdateInput>
    /**
     * Choose, which Phim to update.
     */
    where: PhimWhereUniqueInput
  }

  /**
   * Phim updateMany
   */
  export type PhimUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Phims.
     */
    data: XOR<PhimUpdateManyMutationInput, PhimUncheckedUpdateManyInput>
    /**
     * Filter which Phims to update
     */
    where?: PhimWhereInput
    /**
     * Limit how many Phims to update.
     */
    limit?: number
  }

  /**
   * Phim upsert
   */
  export type PhimUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phim
     */
    select?: PhimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Phim
     */
    omit?: PhimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhimInclude<ExtArgs> | null
    /**
     * The filter to search for the Phim to update in case it exists.
     */
    where: PhimWhereUniqueInput
    /**
     * In case the Phim found by the `where` argument doesn't exist, create a new Phim with this data.
     */
    create: XOR<PhimCreateInput, PhimUncheckedCreateInput>
    /**
     * In case the Phim was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PhimUpdateInput, PhimUncheckedUpdateInput>
  }

  /**
   * Phim delete
   */
  export type PhimDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phim
     */
    select?: PhimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Phim
     */
    omit?: PhimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhimInclude<ExtArgs> | null
    /**
     * Filter which Phim to delete.
     */
    where: PhimWhereUniqueInput
  }

  /**
   * Phim deleteMany
   */
  export type PhimDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Phims to delete
     */
    where?: PhimWhereInput
    /**
     * Limit how many Phims to delete.
     */
    limit?: number
  }

  /**
   * Phim.Banner
   */
  export type Phim$BannerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BannerInclude<ExtArgs> | null
    where?: BannerWhereInput
    orderBy?: BannerOrderByWithRelationInput | BannerOrderByWithRelationInput[]
    cursor?: BannerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BannerScalarFieldEnum | BannerScalarFieldEnum[]
  }

  /**
   * Phim.LichChieu
   */
  export type Phim$LichChieuArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LichChieu
     */
    select?: LichChieuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LichChieu
     */
    omit?: LichChieuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LichChieuInclude<ExtArgs> | null
    where?: LichChieuWhereInput
    orderBy?: LichChieuOrderByWithRelationInput | LichChieuOrderByWithRelationInput[]
    cursor?: LichChieuWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LichChieuScalarFieldEnum | LichChieuScalarFieldEnum[]
  }

  /**
   * Phim without action
   */
  export type PhimDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phim
     */
    select?: PhimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Phim
     */
    omit?: PhimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhimInclude<ExtArgs> | null
  }


  /**
   * Model RapPhim
   */

  export type AggregateRapPhim = {
    _count: RapPhimCountAggregateOutputType | null
    _avg: RapPhimAvgAggregateOutputType | null
    _sum: RapPhimSumAggregateOutputType | null
    _min: RapPhimMinAggregateOutputType | null
    _max: RapPhimMaxAggregateOutputType | null
  }

  export type RapPhimAvgAggregateOutputType = {
    ma_rap: number | null
    ma_cum_rap: number | null
  }

  export type RapPhimSumAggregateOutputType = {
    ma_rap: number | null
    ma_cum_rap: number | null
  }

  export type RapPhimMinAggregateOutputType = {
    ma_rap: number | null
    ten_rap: string | null
    ma_cum_rap: number | null
  }

  export type RapPhimMaxAggregateOutputType = {
    ma_rap: number | null
    ten_rap: string | null
    ma_cum_rap: number | null
  }

  export type RapPhimCountAggregateOutputType = {
    ma_rap: number
    ten_rap: number
    ma_cum_rap: number
    _all: number
  }


  export type RapPhimAvgAggregateInputType = {
    ma_rap?: true
    ma_cum_rap?: true
  }

  export type RapPhimSumAggregateInputType = {
    ma_rap?: true
    ma_cum_rap?: true
  }

  export type RapPhimMinAggregateInputType = {
    ma_rap?: true
    ten_rap?: true
    ma_cum_rap?: true
  }

  export type RapPhimMaxAggregateInputType = {
    ma_rap?: true
    ten_rap?: true
    ma_cum_rap?: true
  }

  export type RapPhimCountAggregateInputType = {
    ma_rap?: true
    ten_rap?: true
    ma_cum_rap?: true
    _all?: true
  }

  export type RapPhimAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RapPhim to aggregate.
     */
    where?: RapPhimWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RapPhims to fetch.
     */
    orderBy?: RapPhimOrderByWithRelationInput | RapPhimOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RapPhimWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RapPhims from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RapPhims.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RapPhims
    **/
    _count?: true | RapPhimCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RapPhimAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RapPhimSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RapPhimMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RapPhimMaxAggregateInputType
  }

  export type GetRapPhimAggregateType<T extends RapPhimAggregateArgs> = {
        [P in keyof T & keyof AggregateRapPhim]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRapPhim[P]>
      : GetScalarType<T[P], AggregateRapPhim[P]>
  }




  export type RapPhimGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RapPhimWhereInput
    orderBy?: RapPhimOrderByWithAggregationInput | RapPhimOrderByWithAggregationInput[]
    by: RapPhimScalarFieldEnum[] | RapPhimScalarFieldEnum
    having?: RapPhimScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RapPhimCountAggregateInputType | true
    _avg?: RapPhimAvgAggregateInputType
    _sum?: RapPhimSumAggregateInputType
    _min?: RapPhimMinAggregateInputType
    _max?: RapPhimMaxAggregateInputType
  }

  export type RapPhimGroupByOutputType = {
    ma_rap: number
    ten_rap: string | null
    ma_cum_rap: number | null
    _count: RapPhimCountAggregateOutputType | null
    _avg: RapPhimAvgAggregateOutputType | null
    _sum: RapPhimSumAggregateOutputType | null
    _min: RapPhimMinAggregateOutputType | null
    _max: RapPhimMaxAggregateOutputType | null
  }

  type GetRapPhimGroupByPayload<T extends RapPhimGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RapPhimGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RapPhimGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RapPhimGroupByOutputType[P]>
            : GetScalarType<T[P], RapPhimGroupByOutputType[P]>
        }
      >
    >


  export type RapPhimSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ma_rap?: boolean
    ten_rap?: boolean
    ma_cum_rap?: boolean
    Ghe?: boolean | RapPhim$GheArgs<ExtArgs>
    LichChieu?: boolean | RapPhim$LichChieuArgs<ExtArgs>
    CumRap?: boolean | RapPhim$CumRapArgs<ExtArgs>
    _count?: boolean | RapPhimCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rapPhim"]>



  export type RapPhimSelectScalar = {
    ma_rap?: boolean
    ten_rap?: boolean
    ma_cum_rap?: boolean
  }

  export type RapPhimOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ma_rap" | "ten_rap" | "ma_cum_rap", ExtArgs["result"]["rapPhim"]>
  export type RapPhimInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Ghe?: boolean | RapPhim$GheArgs<ExtArgs>
    LichChieu?: boolean | RapPhim$LichChieuArgs<ExtArgs>
    CumRap?: boolean | RapPhim$CumRapArgs<ExtArgs>
    _count?: boolean | RapPhimCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $RapPhimPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RapPhim"
    objects: {
      Ghe: Prisma.$GhePayload<ExtArgs>[]
      LichChieu: Prisma.$LichChieuPayload<ExtArgs>[]
      CumRap: Prisma.$CumRapPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      ma_rap: number
      ten_rap: string | null
      ma_cum_rap: number | null
    }, ExtArgs["result"]["rapPhim"]>
    composites: {}
  }

  type RapPhimGetPayload<S extends boolean | null | undefined | RapPhimDefaultArgs> = $Result.GetResult<Prisma.$RapPhimPayload, S>

  type RapPhimCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RapPhimFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RapPhimCountAggregateInputType | true
    }

  export interface RapPhimDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RapPhim'], meta: { name: 'RapPhim' } }
    /**
     * Find zero or one RapPhim that matches the filter.
     * @param {RapPhimFindUniqueArgs} args - Arguments to find a RapPhim
     * @example
     * // Get one RapPhim
     * const rapPhim = await prisma.rapPhim.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RapPhimFindUniqueArgs>(args: SelectSubset<T, RapPhimFindUniqueArgs<ExtArgs>>): Prisma__RapPhimClient<$Result.GetResult<Prisma.$RapPhimPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RapPhim that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RapPhimFindUniqueOrThrowArgs} args - Arguments to find a RapPhim
     * @example
     * // Get one RapPhim
     * const rapPhim = await prisma.rapPhim.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RapPhimFindUniqueOrThrowArgs>(args: SelectSubset<T, RapPhimFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RapPhimClient<$Result.GetResult<Prisma.$RapPhimPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RapPhim that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RapPhimFindFirstArgs} args - Arguments to find a RapPhim
     * @example
     * // Get one RapPhim
     * const rapPhim = await prisma.rapPhim.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RapPhimFindFirstArgs>(args?: SelectSubset<T, RapPhimFindFirstArgs<ExtArgs>>): Prisma__RapPhimClient<$Result.GetResult<Prisma.$RapPhimPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RapPhim that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RapPhimFindFirstOrThrowArgs} args - Arguments to find a RapPhim
     * @example
     * // Get one RapPhim
     * const rapPhim = await prisma.rapPhim.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RapPhimFindFirstOrThrowArgs>(args?: SelectSubset<T, RapPhimFindFirstOrThrowArgs<ExtArgs>>): Prisma__RapPhimClient<$Result.GetResult<Prisma.$RapPhimPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RapPhims that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RapPhimFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RapPhims
     * const rapPhims = await prisma.rapPhim.findMany()
     * 
     * // Get first 10 RapPhims
     * const rapPhims = await prisma.rapPhim.findMany({ take: 10 })
     * 
     * // Only select the `ma_rap`
     * const rapPhimWithMa_rapOnly = await prisma.rapPhim.findMany({ select: { ma_rap: true } })
     * 
     */
    findMany<T extends RapPhimFindManyArgs>(args?: SelectSubset<T, RapPhimFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RapPhimPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RapPhim.
     * @param {RapPhimCreateArgs} args - Arguments to create a RapPhim.
     * @example
     * // Create one RapPhim
     * const RapPhim = await prisma.rapPhim.create({
     *   data: {
     *     // ... data to create a RapPhim
     *   }
     * })
     * 
     */
    create<T extends RapPhimCreateArgs>(args: SelectSubset<T, RapPhimCreateArgs<ExtArgs>>): Prisma__RapPhimClient<$Result.GetResult<Prisma.$RapPhimPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RapPhims.
     * @param {RapPhimCreateManyArgs} args - Arguments to create many RapPhims.
     * @example
     * // Create many RapPhims
     * const rapPhim = await prisma.rapPhim.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RapPhimCreateManyArgs>(args?: SelectSubset<T, RapPhimCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RapPhim.
     * @param {RapPhimDeleteArgs} args - Arguments to delete one RapPhim.
     * @example
     * // Delete one RapPhim
     * const RapPhim = await prisma.rapPhim.delete({
     *   where: {
     *     // ... filter to delete one RapPhim
     *   }
     * })
     * 
     */
    delete<T extends RapPhimDeleteArgs>(args: SelectSubset<T, RapPhimDeleteArgs<ExtArgs>>): Prisma__RapPhimClient<$Result.GetResult<Prisma.$RapPhimPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RapPhim.
     * @param {RapPhimUpdateArgs} args - Arguments to update one RapPhim.
     * @example
     * // Update one RapPhim
     * const rapPhim = await prisma.rapPhim.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RapPhimUpdateArgs>(args: SelectSubset<T, RapPhimUpdateArgs<ExtArgs>>): Prisma__RapPhimClient<$Result.GetResult<Prisma.$RapPhimPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RapPhims.
     * @param {RapPhimDeleteManyArgs} args - Arguments to filter RapPhims to delete.
     * @example
     * // Delete a few RapPhims
     * const { count } = await prisma.rapPhim.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RapPhimDeleteManyArgs>(args?: SelectSubset<T, RapPhimDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RapPhims.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RapPhimUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RapPhims
     * const rapPhim = await prisma.rapPhim.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RapPhimUpdateManyArgs>(args: SelectSubset<T, RapPhimUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RapPhim.
     * @param {RapPhimUpsertArgs} args - Arguments to update or create a RapPhim.
     * @example
     * // Update or create a RapPhim
     * const rapPhim = await prisma.rapPhim.upsert({
     *   create: {
     *     // ... data to create a RapPhim
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RapPhim we want to update
     *   }
     * })
     */
    upsert<T extends RapPhimUpsertArgs>(args: SelectSubset<T, RapPhimUpsertArgs<ExtArgs>>): Prisma__RapPhimClient<$Result.GetResult<Prisma.$RapPhimPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RapPhims.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RapPhimCountArgs} args - Arguments to filter RapPhims to count.
     * @example
     * // Count the number of RapPhims
     * const count = await prisma.rapPhim.count({
     *   where: {
     *     // ... the filter for the RapPhims we want to count
     *   }
     * })
    **/
    count<T extends RapPhimCountArgs>(
      args?: Subset<T, RapPhimCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RapPhimCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RapPhim.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RapPhimAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RapPhimAggregateArgs>(args: Subset<T, RapPhimAggregateArgs>): Prisma.PrismaPromise<GetRapPhimAggregateType<T>>

    /**
     * Group by RapPhim.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RapPhimGroupByArgs} args - Group by arguments.
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
      T extends RapPhimGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RapPhimGroupByArgs['orderBy'] }
        : { orderBy?: RapPhimGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RapPhimGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRapPhimGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RapPhim model
   */
  readonly fields: RapPhimFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RapPhim.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RapPhimClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Ghe<T extends RapPhim$GheArgs<ExtArgs> = {}>(args?: Subset<T, RapPhim$GheArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GhePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    LichChieu<T extends RapPhim$LichChieuArgs<ExtArgs> = {}>(args?: Subset<T, RapPhim$LichChieuArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LichChieuPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    CumRap<T extends RapPhim$CumRapArgs<ExtArgs> = {}>(args?: Subset<T, RapPhim$CumRapArgs<ExtArgs>>): Prisma__CumRapClient<$Result.GetResult<Prisma.$CumRapPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RapPhim model
   */
  interface RapPhimFieldRefs {
    readonly ma_rap: FieldRef<"RapPhim", 'Int'>
    readonly ten_rap: FieldRef<"RapPhim", 'String'>
    readonly ma_cum_rap: FieldRef<"RapPhim", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * RapPhim findUnique
   */
  export type RapPhimFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RapPhim
     */
    select?: RapPhimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RapPhim
     */
    omit?: RapPhimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RapPhimInclude<ExtArgs> | null
    /**
     * Filter, which RapPhim to fetch.
     */
    where: RapPhimWhereUniqueInput
  }

  /**
   * RapPhim findUniqueOrThrow
   */
  export type RapPhimFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RapPhim
     */
    select?: RapPhimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RapPhim
     */
    omit?: RapPhimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RapPhimInclude<ExtArgs> | null
    /**
     * Filter, which RapPhim to fetch.
     */
    where: RapPhimWhereUniqueInput
  }

  /**
   * RapPhim findFirst
   */
  export type RapPhimFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RapPhim
     */
    select?: RapPhimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RapPhim
     */
    omit?: RapPhimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RapPhimInclude<ExtArgs> | null
    /**
     * Filter, which RapPhim to fetch.
     */
    where?: RapPhimWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RapPhims to fetch.
     */
    orderBy?: RapPhimOrderByWithRelationInput | RapPhimOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RapPhims.
     */
    cursor?: RapPhimWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RapPhims from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RapPhims.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RapPhims.
     */
    distinct?: RapPhimScalarFieldEnum | RapPhimScalarFieldEnum[]
  }

  /**
   * RapPhim findFirstOrThrow
   */
  export type RapPhimFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RapPhim
     */
    select?: RapPhimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RapPhim
     */
    omit?: RapPhimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RapPhimInclude<ExtArgs> | null
    /**
     * Filter, which RapPhim to fetch.
     */
    where?: RapPhimWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RapPhims to fetch.
     */
    orderBy?: RapPhimOrderByWithRelationInput | RapPhimOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RapPhims.
     */
    cursor?: RapPhimWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RapPhims from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RapPhims.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RapPhims.
     */
    distinct?: RapPhimScalarFieldEnum | RapPhimScalarFieldEnum[]
  }

  /**
   * RapPhim findMany
   */
  export type RapPhimFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RapPhim
     */
    select?: RapPhimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RapPhim
     */
    omit?: RapPhimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RapPhimInclude<ExtArgs> | null
    /**
     * Filter, which RapPhims to fetch.
     */
    where?: RapPhimWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RapPhims to fetch.
     */
    orderBy?: RapPhimOrderByWithRelationInput | RapPhimOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RapPhims.
     */
    cursor?: RapPhimWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RapPhims from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RapPhims.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RapPhims.
     */
    distinct?: RapPhimScalarFieldEnum | RapPhimScalarFieldEnum[]
  }

  /**
   * RapPhim create
   */
  export type RapPhimCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RapPhim
     */
    select?: RapPhimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RapPhim
     */
    omit?: RapPhimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RapPhimInclude<ExtArgs> | null
    /**
     * The data needed to create a RapPhim.
     */
    data?: XOR<RapPhimCreateInput, RapPhimUncheckedCreateInput>
  }

  /**
   * RapPhim createMany
   */
  export type RapPhimCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RapPhims.
     */
    data: RapPhimCreateManyInput | RapPhimCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RapPhim update
   */
  export type RapPhimUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RapPhim
     */
    select?: RapPhimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RapPhim
     */
    omit?: RapPhimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RapPhimInclude<ExtArgs> | null
    /**
     * The data needed to update a RapPhim.
     */
    data: XOR<RapPhimUpdateInput, RapPhimUncheckedUpdateInput>
    /**
     * Choose, which RapPhim to update.
     */
    where: RapPhimWhereUniqueInput
  }

  /**
   * RapPhim updateMany
   */
  export type RapPhimUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RapPhims.
     */
    data: XOR<RapPhimUpdateManyMutationInput, RapPhimUncheckedUpdateManyInput>
    /**
     * Filter which RapPhims to update
     */
    where?: RapPhimWhereInput
    /**
     * Limit how many RapPhims to update.
     */
    limit?: number
  }

  /**
   * RapPhim upsert
   */
  export type RapPhimUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RapPhim
     */
    select?: RapPhimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RapPhim
     */
    omit?: RapPhimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RapPhimInclude<ExtArgs> | null
    /**
     * The filter to search for the RapPhim to update in case it exists.
     */
    where: RapPhimWhereUniqueInput
    /**
     * In case the RapPhim found by the `where` argument doesn't exist, create a new RapPhim with this data.
     */
    create: XOR<RapPhimCreateInput, RapPhimUncheckedCreateInput>
    /**
     * In case the RapPhim was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RapPhimUpdateInput, RapPhimUncheckedUpdateInput>
  }

  /**
   * RapPhim delete
   */
  export type RapPhimDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RapPhim
     */
    select?: RapPhimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RapPhim
     */
    omit?: RapPhimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RapPhimInclude<ExtArgs> | null
    /**
     * Filter which RapPhim to delete.
     */
    where: RapPhimWhereUniqueInput
  }

  /**
   * RapPhim deleteMany
   */
  export type RapPhimDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RapPhims to delete
     */
    where?: RapPhimWhereInput
    /**
     * Limit how many RapPhims to delete.
     */
    limit?: number
  }

  /**
   * RapPhim.Ghe
   */
  export type RapPhim$GheArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ghe
     */
    select?: GheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ghe
     */
    omit?: GheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GheInclude<ExtArgs> | null
    where?: GheWhereInput
    orderBy?: GheOrderByWithRelationInput | GheOrderByWithRelationInput[]
    cursor?: GheWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GheScalarFieldEnum | GheScalarFieldEnum[]
  }

  /**
   * RapPhim.LichChieu
   */
  export type RapPhim$LichChieuArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LichChieu
     */
    select?: LichChieuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LichChieu
     */
    omit?: LichChieuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LichChieuInclude<ExtArgs> | null
    where?: LichChieuWhereInput
    orderBy?: LichChieuOrderByWithRelationInput | LichChieuOrderByWithRelationInput[]
    cursor?: LichChieuWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LichChieuScalarFieldEnum | LichChieuScalarFieldEnum[]
  }

  /**
   * RapPhim.CumRap
   */
  export type RapPhim$CumRapArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CumRap
     */
    select?: CumRapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CumRap
     */
    omit?: CumRapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CumRapInclude<ExtArgs> | null
    where?: CumRapWhereInput
  }

  /**
   * RapPhim without action
   */
  export type RapPhimDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RapPhim
     */
    select?: RapPhimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RapPhim
     */
    omit?: RapPhimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RapPhimInclude<ExtArgs> | null
  }


  /**
   * Model GiuCho
   */

  export type AggregateGiuCho = {
    _count: GiuChoCountAggregateOutputType | null
    _avg: GiuChoAvgAggregateOutputType | null
    _sum: GiuChoSumAggregateOutputType | null
    _min: GiuChoMinAggregateOutputType | null
    _max: GiuChoMaxAggregateOutputType | null
  }

  export type GiuChoAvgAggregateOutputType = {
    ma_giu_cho: number | null
    tai_khoan: number | null
    ma_lich_chieu: number | null
    ma_ghe: number | null
    ma_hoa_don: number | null
    gia_ve: number | null
  }

  export type GiuChoSumAggregateOutputType = {
    ma_giu_cho: number | null
    tai_khoan: number | null
    ma_lich_chieu: number | null
    ma_ghe: number | null
    ma_hoa_don: number | null
    gia_ve: number | null
  }

  export type GiuChoMinAggregateOutputType = {
    ma_giu_cho: number | null
    tai_khoan: number | null
    ma_lich_chieu: number | null
    ma_ghe: number | null
    loai: $Enums.LoaiGiuCho | null
    ma_hoa_don: number | null
    gia_ve: number | null
    expire_at: Date | null
    created_at: Date | null
  }

  export type GiuChoMaxAggregateOutputType = {
    ma_giu_cho: number | null
    tai_khoan: number | null
    ma_lich_chieu: number | null
    ma_ghe: number | null
    loai: $Enums.LoaiGiuCho | null
    ma_hoa_don: number | null
    gia_ve: number | null
    expire_at: Date | null
    created_at: Date | null
  }

  export type GiuChoCountAggregateOutputType = {
    ma_giu_cho: number
    tai_khoan: number
    ma_lich_chieu: number
    ma_ghe: number
    loai: number
    ma_hoa_don: number
    gia_ve: number
    expire_at: number
    created_at: number
    _all: number
  }


  export type GiuChoAvgAggregateInputType = {
    ma_giu_cho?: true
    tai_khoan?: true
    ma_lich_chieu?: true
    ma_ghe?: true
    ma_hoa_don?: true
    gia_ve?: true
  }

  export type GiuChoSumAggregateInputType = {
    ma_giu_cho?: true
    tai_khoan?: true
    ma_lich_chieu?: true
    ma_ghe?: true
    ma_hoa_don?: true
    gia_ve?: true
  }

  export type GiuChoMinAggregateInputType = {
    ma_giu_cho?: true
    tai_khoan?: true
    ma_lich_chieu?: true
    ma_ghe?: true
    loai?: true
    ma_hoa_don?: true
    gia_ve?: true
    expire_at?: true
    created_at?: true
  }

  export type GiuChoMaxAggregateInputType = {
    ma_giu_cho?: true
    tai_khoan?: true
    ma_lich_chieu?: true
    ma_ghe?: true
    loai?: true
    ma_hoa_don?: true
    gia_ve?: true
    expire_at?: true
    created_at?: true
  }

  export type GiuChoCountAggregateInputType = {
    ma_giu_cho?: true
    tai_khoan?: true
    ma_lich_chieu?: true
    ma_ghe?: true
    loai?: true
    ma_hoa_don?: true
    gia_ve?: true
    expire_at?: true
    created_at?: true
    _all?: true
  }

  export type GiuChoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GiuCho to aggregate.
     */
    where?: GiuChoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GiuChos to fetch.
     */
    orderBy?: GiuChoOrderByWithRelationInput | GiuChoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GiuChoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GiuChos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GiuChos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GiuChos
    **/
    _count?: true | GiuChoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GiuChoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GiuChoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GiuChoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GiuChoMaxAggregateInputType
  }

  export type GetGiuChoAggregateType<T extends GiuChoAggregateArgs> = {
        [P in keyof T & keyof AggregateGiuCho]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGiuCho[P]>
      : GetScalarType<T[P], AggregateGiuCho[P]>
  }




  export type GiuChoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GiuChoWhereInput
    orderBy?: GiuChoOrderByWithAggregationInput | GiuChoOrderByWithAggregationInput[]
    by: GiuChoScalarFieldEnum[] | GiuChoScalarFieldEnum
    having?: GiuChoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GiuChoCountAggregateInputType | true
    _avg?: GiuChoAvgAggregateInputType
    _sum?: GiuChoSumAggregateInputType
    _min?: GiuChoMinAggregateInputType
    _max?: GiuChoMaxAggregateInputType
  }

  export type GiuChoGroupByOutputType = {
    ma_giu_cho: number
    tai_khoan: number
    ma_lich_chieu: number
    ma_ghe: number
    loai: $Enums.LoaiGiuCho
    ma_hoa_don: number | null
    gia_ve: number | null
    expire_at: Date
    created_at: Date | null
    _count: GiuChoCountAggregateOutputType | null
    _avg: GiuChoAvgAggregateOutputType | null
    _sum: GiuChoSumAggregateOutputType | null
    _min: GiuChoMinAggregateOutputType | null
    _max: GiuChoMaxAggregateOutputType | null
  }

  type GetGiuChoGroupByPayload<T extends GiuChoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GiuChoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GiuChoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GiuChoGroupByOutputType[P]>
            : GetScalarType<T[P], GiuChoGroupByOutputType[P]>
        }
      >
    >


  export type GiuChoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ma_giu_cho?: boolean
    tai_khoan?: boolean
    ma_lich_chieu?: boolean
    ma_ghe?: boolean
    loai?: boolean
    ma_hoa_don?: boolean
    gia_ve?: boolean
    expire_at?: boolean
    created_at?: boolean
    Ghe?: boolean | GheDefaultArgs<ExtArgs>
    LichChieu?: boolean | LichChieuDefaultArgs<ExtArgs>
    NguoiDung?: boolean | NguoiDungDefaultArgs<ExtArgs>
    HoaDon?: boolean | GiuCho$HoaDonArgs<ExtArgs>
  }, ExtArgs["result"]["giuCho"]>



  export type GiuChoSelectScalar = {
    ma_giu_cho?: boolean
    tai_khoan?: boolean
    ma_lich_chieu?: boolean
    ma_ghe?: boolean
    loai?: boolean
    ma_hoa_don?: boolean
    gia_ve?: boolean
    expire_at?: boolean
    created_at?: boolean
  }

  export type GiuChoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ma_giu_cho" | "tai_khoan" | "ma_lich_chieu" | "ma_ghe" | "loai" | "ma_hoa_don" | "gia_ve" | "expire_at" | "created_at", ExtArgs["result"]["giuCho"]>
  export type GiuChoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Ghe?: boolean | GheDefaultArgs<ExtArgs>
    LichChieu?: boolean | LichChieuDefaultArgs<ExtArgs>
    NguoiDung?: boolean | NguoiDungDefaultArgs<ExtArgs>
    HoaDon?: boolean | GiuCho$HoaDonArgs<ExtArgs>
  }

  export type $GiuChoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GiuCho"
    objects: {
      Ghe: Prisma.$GhePayload<ExtArgs>
      LichChieu: Prisma.$LichChieuPayload<ExtArgs>
      NguoiDung: Prisma.$NguoiDungPayload<ExtArgs>
      HoaDon: Prisma.$HoaDonPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      ma_giu_cho: number
      tai_khoan: number
      ma_lich_chieu: number
      ma_ghe: number
      loai: $Enums.LoaiGiuCho
      ma_hoa_don: number | null
      gia_ve: number | null
      expire_at: Date
      created_at: Date | null
    }, ExtArgs["result"]["giuCho"]>
    composites: {}
  }

  type GiuChoGetPayload<S extends boolean | null | undefined | GiuChoDefaultArgs> = $Result.GetResult<Prisma.$GiuChoPayload, S>

  type GiuChoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GiuChoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GiuChoCountAggregateInputType | true
    }

  export interface GiuChoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GiuCho'], meta: { name: 'GiuCho' } }
    /**
     * Find zero or one GiuCho that matches the filter.
     * @param {GiuChoFindUniqueArgs} args - Arguments to find a GiuCho
     * @example
     * // Get one GiuCho
     * const giuCho = await prisma.giuCho.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GiuChoFindUniqueArgs>(args: SelectSubset<T, GiuChoFindUniqueArgs<ExtArgs>>): Prisma__GiuChoClient<$Result.GetResult<Prisma.$GiuChoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GiuCho that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GiuChoFindUniqueOrThrowArgs} args - Arguments to find a GiuCho
     * @example
     * // Get one GiuCho
     * const giuCho = await prisma.giuCho.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GiuChoFindUniqueOrThrowArgs>(args: SelectSubset<T, GiuChoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GiuChoClient<$Result.GetResult<Prisma.$GiuChoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GiuCho that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GiuChoFindFirstArgs} args - Arguments to find a GiuCho
     * @example
     * // Get one GiuCho
     * const giuCho = await prisma.giuCho.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GiuChoFindFirstArgs>(args?: SelectSubset<T, GiuChoFindFirstArgs<ExtArgs>>): Prisma__GiuChoClient<$Result.GetResult<Prisma.$GiuChoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GiuCho that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GiuChoFindFirstOrThrowArgs} args - Arguments to find a GiuCho
     * @example
     * // Get one GiuCho
     * const giuCho = await prisma.giuCho.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GiuChoFindFirstOrThrowArgs>(args?: SelectSubset<T, GiuChoFindFirstOrThrowArgs<ExtArgs>>): Prisma__GiuChoClient<$Result.GetResult<Prisma.$GiuChoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GiuChos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GiuChoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GiuChos
     * const giuChos = await prisma.giuCho.findMany()
     * 
     * // Get first 10 GiuChos
     * const giuChos = await prisma.giuCho.findMany({ take: 10 })
     * 
     * // Only select the `ma_giu_cho`
     * const giuChoWithMa_giu_choOnly = await prisma.giuCho.findMany({ select: { ma_giu_cho: true } })
     * 
     */
    findMany<T extends GiuChoFindManyArgs>(args?: SelectSubset<T, GiuChoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GiuChoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GiuCho.
     * @param {GiuChoCreateArgs} args - Arguments to create a GiuCho.
     * @example
     * // Create one GiuCho
     * const GiuCho = await prisma.giuCho.create({
     *   data: {
     *     // ... data to create a GiuCho
     *   }
     * })
     * 
     */
    create<T extends GiuChoCreateArgs>(args: SelectSubset<T, GiuChoCreateArgs<ExtArgs>>): Prisma__GiuChoClient<$Result.GetResult<Prisma.$GiuChoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GiuChos.
     * @param {GiuChoCreateManyArgs} args - Arguments to create many GiuChos.
     * @example
     * // Create many GiuChos
     * const giuCho = await prisma.giuCho.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GiuChoCreateManyArgs>(args?: SelectSubset<T, GiuChoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a GiuCho.
     * @param {GiuChoDeleteArgs} args - Arguments to delete one GiuCho.
     * @example
     * // Delete one GiuCho
     * const GiuCho = await prisma.giuCho.delete({
     *   where: {
     *     // ... filter to delete one GiuCho
     *   }
     * })
     * 
     */
    delete<T extends GiuChoDeleteArgs>(args: SelectSubset<T, GiuChoDeleteArgs<ExtArgs>>): Prisma__GiuChoClient<$Result.GetResult<Prisma.$GiuChoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GiuCho.
     * @param {GiuChoUpdateArgs} args - Arguments to update one GiuCho.
     * @example
     * // Update one GiuCho
     * const giuCho = await prisma.giuCho.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GiuChoUpdateArgs>(args: SelectSubset<T, GiuChoUpdateArgs<ExtArgs>>): Prisma__GiuChoClient<$Result.GetResult<Prisma.$GiuChoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GiuChos.
     * @param {GiuChoDeleteManyArgs} args - Arguments to filter GiuChos to delete.
     * @example
     * // Delete a few GiuChos
     * const { count } = await prisma.giuCho.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GiuChoDeleteManyArgs>(args?: SelectSubset<T, GiuChoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GiuChos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GiuChoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GiuChos
     * const giuCho = await prisma.giuCho.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GiuChoUpdateManyArgs>(args: SelectSubset<T, GiuChoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one GiuCho.
     * @param {GiuChoUpsertArgs} args - Arguments to update or create a GiuCho.
     * @example
     * // Update or create a GiuCho
     * const giuCho = await prisma.giuCho.upsert({
     *   create: {
     *     // ... data to create a GiuCho
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GiuCho we want to update
     *   }
     * })
     */
    upsert<T extends GiuChoUpsertArgs>(args: SelectSubset<T, GiuChoUpsertArgs<ExtArgs>>): Prisma__GiuChoClient<$Result.GetResult<Prisma.$GiuChoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GiuChos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GiuChoCountArgs} args - Arguments to filter GiuChos to count.
     * @example
     * // Count the number of GiuChos
     * const count = await prisma.giuCho.count({
     *   where: {
     *     // ... the filter for the GiuChos we want to count
     *   }
     * })
    **/
    count<T extends GiuChoCountArgs>(
      args?: Subset<T, GiuChoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GiuChoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GiuCho.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GiuChoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GiuChoAggregateArgs>(args: Subset<T, GiuChoAggregateArgs>): Prisma.PrismaPromise<GetGiuChoAggregateType<T>>

    /**
     * Group by GiuCho.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GiuChoGroupByArgs} args - Group by arguments.
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
      T extends GiuChoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GiuChoGroupByArgs['orderBy'] }
        : { orderBy?: GiuChoGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GiuChoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGiuChoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GiuCho model
   */
  readonly fields: GiuChoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GiuCho.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GiuChoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Ghe<T extends GheDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GheDefaultArgs<ExtArgs>>): Prisma__GheClient<$Result.GetResult<Prisma.$GhePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    LichChieu<T extends LichChieuDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LichChieuDefaultArgs<ExtArgs>>): Prisma__LichChieuClient<$Result.GetResult<Prisma.$LichChieuPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    NguoiDung<T extends NguoiDungDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NguoiDungDefaultArgs<ExtArgs>>): Prisma__NguoiDungClient<$Result.GetResult<Prisma.$NguoiDungPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    HoaDon<T extends GiuCho$HoaDonArgs<ExtArgs> = {}>(args?: Subset<T, GiuCho$HoaDonArgs<ExtArgs>>): Prisma__HoaDonClient<$Result.GetResult<Prisma.$HoaDonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GiuCho model
   */
  interface GiuChoFieldRefs {
    readonly ma_giu_cho: FieldRef<"GiuCho", 'Int'>
    readonly tai_khoan: FieldRef<"GiuCho", 'Int'>
    readonly ma_lich_chieu: FieldRef<"GiuCho", 'Int'>
    readonly ma_ghe: FieldRef<"GiuCho", 'Int'>
    readonly loai: FieldRef<"GiuCho", 'LoaiGiuCho'>
    readonly ma_hoa_don: FieldRef<"GiuCho", 'Int'>
    readonly gia_ve: FieldRef<"GiuCho", 'Int'>
    readonly expire_at: FieldRef<"GiuCho", 'DateTime'>
    readonly created_at: FieldRef<"GiuCho", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GiuCho findUnique
   */
  export type GiuChoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GiuCho
     */
    select?: GiuChoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GiuCho
     */
    omit?: GiuChoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GiuChoInclude<ExtArgs> | null
    /**
     * Filter, which GiuCho to fetch.
     */
    where: GiuChoWhereUniqueInput
  }

  /**
   * GiuCho findUniqueOrThrow
   */
  export type GiuChoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GiuCho
     */
    select?: GiuChoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GiuCho
     */
    omit?: GiuChoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GiuChoInclude<ExtArgs> | null
    /**
     * Filter, which GiuCho to fetch.
     */
    where: GiuChoWhereUniqueInput
  }

  /**
   * GiuCho findFirst
   */
  export type GiuChoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GiuCho
     */
    select?: GiuChoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GiuCho
     */
    omit?: GiuChoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GiuChoInclude<ExtArgs> | null
    /**
     * Filter, which GiuCho to fetch.
     */
    where?: GiuChoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GiuChos to fetch.
     */
    orderBy?: GiuChoOrderByWithRelationInput | GiuChoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GiuChos.
     */
    cursor?: GiuChoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GiuChos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GiuChos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GiuChos.
     */
    distinct?: GiuChoScalarFieldEnum | GiuChoScalarFieldEnum[]
  }

  /**
   * GiuCho findFirstOrThrow
   */
  export type GiuChoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GiuCho
     */
    select?: GiuChoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GiuCho
     */
    omit?: GiuChoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GiuChoInclude<ExtArgs> | null
    /**
     * Filter, which GiuCho to fetch.
     */
    where?: GiuChoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GiuChos to fetch.
     */
    orderBy?: GiuChoOrderByWithRelationInput | GiuChoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GiuChos.
     */
    cursor?: GiuChoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GiuChos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GiuChos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GiuChos.
     */
    distinct?: GiuChoScalarFieldEnum | GiuChoScalarFieldEnum[]
  }

  /**
   * GiuCho findMany
   */
  export type GiuChoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GiuCho
     */
    select?: GiuChoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GiuCho
     */
    omit?: GiuChoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GiuChoInclude<ExtArgs> | null
    /**
     * Filter, which GiuChos to fetch.
     */
    where?: GiuChoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GiuChos to fetch.
     */
    orderBy?: GiuChoOrderByWithRelationInput | GiuChoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GiuChos.
     */
    cursor?: GiuChoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GiuChos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GiuChos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GiuChos.
     */
    distinct?: GiuChoScalarFieldEnum | GiuChoScalarFieldEnum[]
  }

  /**
   * GiuCho create
   */
  export type GiuChoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GiuCho
     */
    select?: GiuChoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GiuCho
     */
    omit?: GiuChoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GiuChoInclude<ExtArgs> | null
    /**
     * The data needed to create a GiuCho.
     */
    data: XOR<GiuChoCreateInput, GiuChoUncheckedCreateInput>
  }

  /**
   * GiuCho createMany
   */
  export type GiuChoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GiuChos.
     */
    data: GiuChoCreateManyInput | GiuChoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GiuCho update
   */
  export type GiuChoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GiuCho
     */
    select?: GiuChoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GiuCho
     */
    omit?: GiuChoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GiuChoInclude<ExtArgs> | null
    /**
     * The data needed to update a GiuCho.
     */
    data: XOR<GiuChoUpdateInput, GiuChoUncheckedUpdateInput>
    /**
     * Choose, which GiuCho to update.
     */
    where: GiuChoWhereUniqueInput
  }

  /**
   * GiuCho updateMany
   */
  export type GiuChoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GiuChos.
     */
    data: XOR<GiuChoUpdateManyMutationInput, GiuChoUncheckedUpdateManyInput>
    /**
     * Filter which GiuChos to update
     */
    where?: GiuChoWhereInput
    /**
     * Limit how many GiuChos to update.
     */
    limit?: number
  }

  /**
   * GiuCho upsert
   */
  export type GiuChoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GiuCho
     */
    select?: GiuChoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GiuCho
     */
    omit?: GiuChoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GiuChoInclude<ExtArgs> | null
    /**
     * The filter to search for the GiuCho to update in case it exists.
     */
    where: GiuChoWhereUniqueInput
    /**
     * In case the GiuCho found by the `where` argument doesn't exist, create a new GiuCho with this data.
     */
    create: XOR<GiuChoCreateInput, GiuChoUncheckedCreateInput>
    /**
     * In case the GiuCho was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GiuChoUpdateInput, GiuChoUncheckedUpdateInput>
  }

  /**
   * GiuCho delete
   */
  export type GiuChoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GiuCho
     */
    select?: GiuChoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GiuCho
     */
    omit?: GiuChoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GiuChoInclude<ExtArgs> | null
    /**
     * Filter which GiuCho to delete.
     */
    where: GiuChoWhereUniqueInput
  }

  /**
   * GiuCho deleteMany
   */
  export type GiuChoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GiuChos to delete
     */
    where?: GiuChoWhereInput
    /**
     * Limit how many GiuChos to delete.
     */
    limit?: number
  }

  /**
   * GiuCho.HoaDon
   */
  export type GiuCho$HoaDonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HoaDon
     */
    select?: HoaDonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HoaDon
     */
    omit?: HoaDonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoaDonInclude<ExtArgs> | null
    where?: HoaDonWhereInput
  }

  /**
   * GiuCho without action
   */
  export type GiuChoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GiuCho
     */
    select?: GiuChoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GiuCho
     */
    omit?: GiuChoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GiuChoInclude<ExtArgs> | null
  }


  /**
   * Model HoaDon
   */

  export type AggregateHoaDon = {
    _count: HoaDonCountAggregateOutputType | null
    _avg: HoaDonAvgAggregateOutputType | null
    _sum: HoaDonSumAggregateOutputType | null
    _min: HoaDonMinAggregateOutputType | null
    _max: HoaDonMaxAggregateOutputType | null
  }

  export type HoaDonAvgAggregateOutputType = {
    ma_hoa_don: number | null
    tai_khoan: number | null
    ma_lich_chieu: number | null
    tong_tien: number | null
    so_tien_da_nhan: number | null
  }

  export type HoaDonSumAggregateOutputType = {
    ma_hoa_don: number | null
    tai_khoan: number | null
    ma_lich_chieu: number | null
    tong_tien: number | null
    so_tien_da_nhan: number | null
  }

  export type HoaDonMinAggregateOutputType = {
    ma_hoa_don: number | null
    tai_khoan: number | null
    ma_lich_chieu: number | null
    tong_tien: number | null
    created_at: Date | null
    checked_in_at: Date | null
    trang_thai_thanh_toan: $Enums.TrangThaiThanhToan | null
    phuong_thuc_thanh_toan: string | null
    ma_giao_dich_ngan_hang: string | null
    so_tien_da_nhan: number | null
    thanh_toan_luc: Date | null
    het_han_luc: Date | null
  }

  export type HoaDonMaxAggregateOutputType = {
    ma_hoa_don: number | null
    tai_khoan: number | null
    ma_lich_chieu: number | null
    tong_tien: number | null
    created_at: Date | null
    checked_in_at: Date | null
    trang_thai_thanh_toan: $Enums.TrangThaiThanhToan | null
    phuong_thuc_thanh_toan: string | null
    ma_giao_dich_ngan_hang: string | null
    so_tien_da_nhan: number | null
    thanh_toan_luc: Date | null
    het_han_luc: Date | null
  }

  export type HoaDonCountAggregateOutputType = {
    ma_hoa_don: number
    tai_khoan: number
    ma_lich_chieu: number
    tong_tien: number
    created_at: number
    checked_in_at: number
    trang_thai_thanh_toan: number
    phuong_thuc_thanh_toan: number
    ma_giao_dich_ngan_hang: number
    so_tien_da_nhan: number
    thanh_toan_luc: number
    het_han_luc: number
    _all: number
  }


  export type HoaDonAvgAggregateInputType = {
    ma_hoa_don?: true
    tai_khoan?: true
    ma_lich_chieu?: true
    tong_tien?: true
    so_tien_da_nhan?: true
  }

  export type HoaDonSumAggregateInputType = {
    ma_hoa_don?: true
    tai_khoan?: true
    ma_lich_chieu?: true
    tong_tien?: true
    so_tien_da_nhan?: true
  }

  export type HoaDonMinAggregateInputType = {
    ma_hoa_don?: true
    tai_khoan?: true
    ma_lich_chieu?: true
    tong_tien?: true
    created_at?: true
    checked_in_at?: true
    trang_thai_thanh_toan?: true
    phuong_thuc_thanh_toan?: true
    ma_giao_dich_ngan_hang?: true
    so_tien_da_nhan?: true
    thanh_toan_luc?: true
    het_han_luc?: true
  }

  export type HoaDonMaxAggregateInputType = {
    ma_hoa_don?: true
    tai_khoan?: true
    ma_lich_chieu?: true
    tong_tien?: true
    created_at?: true
    checked_in_at?: true
    trang_thai_thanh_toan?: true
    phuong_thuc_thanh_toan?: true
    ma_giao_dich_ngan_hang?: true
    so_tien_da_nhan?: true
    thanh_toan_luc?: true
    het_han_luc?: true
  }

  export type HoaDonCountAggregateInputType = {
    ma_hoa_don?: true
    tai_khoan?: true
    ma_lich_chieu?: true
    tong_tien?: true
    created_at?: true
    checked_in_at?: true
    trang_thai_thanh_toan?: true
    phuong_thuc_thanh_toan?: true
    ma_giao_dich_ngan_hang?: true
    so_tien_da_nhan?: true
    thanh_toan_luc?: true
    het_han_luc?: true
    _all?: true
  }

  export type HoaDonAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HoaDon to aggregate.
     */
    where?: HoaDonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HoaDons to fetch.
     */
    orderBy?: HoaDonOrderByWithRelationInput | HoaDonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HoaDonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HoaDons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HoaDons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HoaDons
    **/
    _count?: true | HoaDonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HoaDonAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HoaDonSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HoaDonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HoaDonMaxAggregateInputType
  }

  export type GetHoaDonAggregateType<T extends HoaDonAggregateArgs> = {
        [P in keyof T & keyof AggregateHoaDon]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHoaDon[P]>
      : GetScalarType<T[P], AggregateHoaDon[P]>
  }




  export type HoaDonGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HoaDonWhereInput
    orderBy?: HoaDonOrderByWithAggregationInput | HoaDonOrderByWithAggregationInput[]
    by: HoaDonScalarFieldEnum[] | HoaDonScalarFieldEnum
    having?: HoaDonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HoaDonCountAggregateInputType | true
    _avg?: HoaDonAvgAggregateInputType
    _sum?: HoaDonSumAggregateInputType
    _min?: HoaDonMinAggregateInputType
    _max?: HoaDonMaxAggregateInputType
  }

  export type HoaDonGroupByOutputType = {
    ma_hoa_don: number
    tai_khoan: number
    ma_lich_chieu: number
    tong_tien: number
    created_at: Date | null
    checked_in_at: Date | null
    trang_thai_thanh_toan: $Enums.TrangThaiThanhToan
    phuong_thuc_thanh_toan: string | null
    ma_giao_dich_ngan_hang: string | null
    so_tien_da_nhan: number | null
    thanh_toan_luc: Date | null
    het_han_luc: Date | null
    _count: HoaDonCountAggregateOutputType | null
    _avg: HoaDonAvgAggregateOutputType | null
    _sum: HoaDonSumAggregateOutputType | null
    _min: HoaDonMinAggregateOutputType | null
    _max: HoaDonMaxAggregateOutputType | null
  }

  type GetHoaDonGroupByPayload<T extends HoaDonGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HoaDonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HoaDonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HoaDonGroupByOutputType[P]>
            : GetScalarType<T[P], HoaDonGroupByOutputType[P]>
        }
      >
    >


  export type HoaDonSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ma_hoa_don?: boolean
    tai_khoan?: boolean
    ma_lich_chieu?: boolean
    tong_tien?: boolean
    created_at?: boolean
    checked_in_at?: boolean
    trang_thai_thanh_toan?: boolean
    phuong_thuc_thanh_toan?: boolean
    ma_giao_dich_ngan_hang?: boolean
    so_tien_da_nhan?: boolean
    thanh_toan_luc?: boolean
    het_han_luc?: boolean
    NguoiDung?: boolean | NguoiDungDefaultArgs<ExtArgs>
    LichChieu?: boolean | LichChieuDefaultArgs<ExtArgs>
    DatVe?: boolean | HoaDon$DatVeArgs<ExtArgs>
    HoaDonCombo?: boolean | HoaDon$HoaDonComboArgs<ExtArgs>
    GiuCho?: boolean | HoaDon$GiuChoArgs<ExtArgs>
    _count?: boolean | HoaDonCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hoaDon"]>



  export type HoaDonSelectScalar = {
    ma_hoa_don?: boolean
    tai_khoan?: boolean
    ma_lich_chieu?: boolean
    tong_tien?: boolean
    created_at?: boolean
    checked_in_at?: boolean
    trang_thai_thanh_toan?: boolean
    phuong_thuc_thanh_toan?: boolean
    ma_giao_dich_ngan_hang?: boolean
    so_tien_da_nhan?: boolean
    thanh_toan_luc?: boolean
    het_han_luc?: boolean
  }

  export type HoaDonOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ma_hoa_don" | "tai_khoan" | "ma_lich_chieu" | "tong_tien" | "created_at" | "checked_in_at" | "trang_thai_thanh_toan" | "phuong_thuc_thanh_toan" | "ma_giao_dich_ngan_hang" | "so_tien_da_nhan" | "thanh_toan_luc" | "het_han_luc", ExtArgs["result"]["hoaDon"]>
  export type HoaDonInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    NguoiDung?: boolean | NguoiDungDefaultArgs<ExtArgs>
    LichChieu?: boolean | LichChieuDefaultArgs<ExtArgs>
    DatVe?: boolean | HoaDon$DatVeArgs<ExtArgs>
    HoaDonCombo?: boolean | HoaDon$HoaDonComboArgs<ExtArgs>
    GiuCho?: boolean | HoaDon$GiuChoArgs<ExtArgs>
    _count?: boolean | HoaDonCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $HoaDonPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HoaDon"
    objects: {
      NguoiDung: Prisma.$NguoiDungPayload<ExtArgs>
      LichChieu: Prisma.$LichChieuPayload<ExtArgs>
      DatVe: Prisma.$DatVePayload<ExtArgs>[]
      HoaDonCombo: Prisma.$HoaDonComboPayload<ExtArgs>[]
      GiuCho: Prisma.$GiuChoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      ma_hoa_don: number
      tai_khoan: number
      ma_lich_chieu: number
      tong_tien: number
      created_at: Date | null
      checked_in_at: Date | null
      trang_thai_thanh_toan: $Enums.TrangThaiThanhToan
      phuong_thuc_thanh_toan: string | null
      ma_giao_dich_ngan_hang: string | null
      so_tien_da_nhan: number | null
      thanh_toan_luc: Date | null
      het_han_luc: Date | null
    }, ExtArgs["result"]["hoaDon"]>
    composites: {}
  }

  type HoaDonGetPayload<S extends boolean | null | undefined | HoaDonDefaultArgs> = $Result.GetResult<Prisma.$HoaDonPayload, S>

  type HoaDonCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HoaDonFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HoaDonCountAggregateInputType | true
    }

  export interface HoaDonDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HoaDon'], meta: { name: 'HoaDon' } }
    /**
     * Find zero or one HoaDon that matches the filter.
     * @param {HoaDonFindUniqueArgs} args - Arguments to find a HoaDon
     * @example
     * // Get one HoaDon
     * const hoaDon = await prisma.hoaDon.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HoaDonFindUniqueArgs>(args: SelectSubset<T, HoaDonFindUniqueArgs<ExtArgs>>): Prisma__HoaDonClient<$Result.GetResult<Prisma.$HoaDonPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HoaDon that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HoaDonFindUniqueOrThrowArgs} args - Arguments to find a HoaDon
     * @example
     * // Get one HoaDon
     * const hoaDon = await prisma.hoaDon.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HoaDonFindUniqueOrThrowArgs>(args: SelectSubset<T, HoaDonFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HoaDonClient<$Result.GetResult<Prisma.$HoaDonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HoaDon that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HoaDonFindFirstArgs} args - Arguments to find a HoaDon
     * @example
     * // Get one HoaDon
     * const hoaDon = await prisma.hoaDon.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HoaDonFindFirstArgs>(args?: SelectSubset<T, HoaDonFindFirstArgs<ExtArgs>>): Prisma__HoaDonClient<$Result.GetResult<Prisma.$HoaDonPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HoaDon that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HoaDonFindFirstOrThrowArgs} args - Arguments to find a HoaDon
     * @example
     * // Get one HoaDon
     * const hoaDon = await prisma.hoaDon.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HoaDonFindFirstOrThrowArgs>(args?: SelectSubset<T, HoaDonFindFirstOrThrowArgs<ExtArgs>>): Prisma__HoaDonClient<$Result.GetResult<Prisma.$HoaDonPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HoaDons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HoaDonFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HoaDons
     * const hoaDons = await prisma.hoaDon.findMany()
     * 
     * // Get first 10 HoaDons
     * const hoaDons = await prisma.hoaDon.findMany({ take: 10 })
     * 
     * // Only select the `ma_hoa_don`
     * const hoaDonWithMa_hoa_donOnly = await prisma.hoaDon.findMany({ select: { ma_hoa_don: true } })
     * 
     */
    findMany<T extends HoaDonFindManyArgs>(args?: SelectSubset<T, HoaDonFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HoaDonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HoaDon.
     * @param {HoaDonCreateArgs} args - Arguments to create a HoaDon.
     * @example
     * // Create one HoaDon
     * const HoaDon = await prisma.hoaDon.create({
     *   data: {
     *     // ... data to create a HoaDon
     *   }
     * })
     * 
     */
    create<T extends HoaDonCreateArgs>(args: SelectSubset<T, HoaDonCreateArgs<ExtArgs>>): Prisma__HoaDonClient<$Result.GetResult<Prisma.$HoaDonPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HoaDons.
     * @param {HoaDonCreateManyArgs} args - Arguments to create many HoaDons.
     * @example
     * // Create many HoaDons
     * const hoaDon = await prisma.hoaDon.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HoaDonCreateManyArgs>(args?: SelectSubset<T, HoaDonCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a HoaDon.
     * @param {HoaDonDeleteArgs} args - Arguments to delete one HoaDon.
     * @example
     * // Delete one HoaDon
     * const HoaDon = await prisma.hoaDon.delete({
     *   where: {
     *     // ... filter to delete one HoaDon
     *   }
     * })
     * 
     */
    delete<T extends HoaDonDeleteArgs>(args: SelectSubset<T, HoaDonDeleteArgs<ExtArgs>>): Prisma__HoaDonClient<$Result.GetResult<Prisma.$HoaDonPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HoaDon.
     * @param {HoaDonUpdateArgs} args - Arguments to update one HoaDon.
     * @example
     * // Update one HoaDon
     * const hoaDon = await prisma.hoaDon.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HoaDonUpdateArgs>(args: SelectSubset<T, HoaDonUpdateArgs<ExtArgs>>): Prisma__HoaDonClient<$Result.GetResult<Prisma.$HoaDonPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HoaDons.
     * @param {HoaDonDeleteManyArgs} args - Arguments to filter HoaDons to delete.
     * @example
     * // Delete a few HoaDons
     * const { count } = await prisma.hoaDon.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HoaDonDeleteManyArgs>(args?: SelectSubset<T, HoaDonDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HoaDons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HoaDonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HoaDons
     * const hoaDon = await prisma.hoaDon.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HoaDonUpdateManyArgs>(args: SelectSubset<T, HoaDonUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one HoaDon.
     * @param {HoaDonUpsertArgs} args - Arguments to update or create a HoaDon.
     * @example
     * // Update or create a HoaDon
     * const hoaDon = await prisma.hoaDon.upsert({
     *   create: {
     *     // ... data to create a HoaDon
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HoaDon we want to update
     *   }
     * })
     */
    upsert<T extends HoaDonUpsertArgs>(args: SelectSubset<T, HoaDonUpsertArgs<ExtArgs>>): Prisma__HoaDonClient<$Result.GetResult<Prisma.$HoaDonPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HoaDons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HoaDonCountArgs} args - Arguments to filter HoaDons to count.
     * @example
     * // Count the number of HoaDons
     * const count = await prisma.hoaDon.count({
     *   where: {
     *     // ... the filter for the HoaDons we want to count
     *   }
     * })
    **/
    count<T extends HoaDonCountArgs>(
      args?: Subset<T, HoaDonCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HoaDonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HoaDon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HoaDonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HoaDonAggregateArgs>(args: Subset<T, HoaDonAggregateArgs>): Prisma.PrismaPromise<GetHoaDonAggregateType<T>>

    /**
     * Group by HoaDon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HoaDonGroupByArgs} args - Group by arguments.
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
      T extends HoaDonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HoaDonGroupByArgs['orderBy'] }
        : { orderBy?: HoaDonGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HoaDonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHoaDonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HoaDon model
   */
  readonly fields: HoaDonFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HoaDon.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HoaDonClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    NguoiDung<T extends NguoiDungDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NguoiDungDefaultArgs<ExtArgs>>): Prisma__NguoiDungClient<$Result.GetResult<Prisma.$NguoiDungPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    LichChieu<T extends LichChieuDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LichChieuDefaultArgs<ExtArgs>>): Prisma__LichChieuClient<$Result.GetResult<Prisma.$LichChieuPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    DatVe<T extends HoaDon$DatVeArgs<ExtArgs> = {}>(args?: Subset<T, HoaDon$DatVeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DatVePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    HoaDonCombo<T extends HoaDon$HoaDonComboArgs<ExtArgs> = {}>(args?: Subset<T, HoaDon$HoaDonComboArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HoaDonComboPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    GiuCho<T extends HoaDon$GiuChoArgs<ExtArgs> = {}>(args?: Subset<T, HoaDon$GiuChoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GiuChoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the HoaDon model
   */
  interface HoaDonFieldRefs {
    readonly ma_hoa_don: FieldRef<"HoaDon", 'Int'>
    readonly tai_khoan: FieldRef<"HoaDon", 'Int'>
    readonly ma_lich_chieu: FieldRef<"HoaDon", 'Int'>
    readonly tong_tien: FieldRef<"HoaDon", 'Int'>
    readonly created_at: FieldRef<"HoaDon", 'DateTime'>
    readonly checked_in_at: FieldRef<"HoaDon", 'DateTime'>
    readonly trang_thai_thanh_toan: FieldRef<"HoaDon", 'TrangThaiThanhToan'>
    readonly phuong_thuc_thanh_toan: FieldRef<"HoaDon", 'String'>
    readonly ma_giao_dich_ngan_hang: FieldRef<"HoaDon", 'String'>
    readonly so_tien_da_nhan: FieldRef<"HoaDon", 'Int'>
    readonly thanh_toan_luc: FieldRef<"HoaDon", 'DateTime'>
    readonly het_han_luc: FieldRef<"HoaDon", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * HoaDon findUnique
   */
  export type HoaDonFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HoaDon
     */
    select?: HoaDonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HoaDon
     */
    omit?: HoaDonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoaDonInclude<ExtArgs> | null
    /**
     * Filter, which HoaDon to fetch.
     */
    where: HoaDonWhereUniqueInput
  }

  /**
   * HoaDon findUniqueOrThrow
   */
  export type HoaDonFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HoaDon
     */
    select?: HoaDonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HoaDon
     */
    omit?: HoaDonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoaDonInclude<ExtArgs> | null
    /**
     * Filter, which HoaDon to fetch.
     */
    where: HoaDonWhereUniqueInput
  }

  /**
   * HoaDon findFirst
   */
  export type HoaDonFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HoaDon
     */
    select?: HoaDonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HoaDon
     */
    omit?: HoaDonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoaDonInclude<ExtArgs> | null
    /**
     * Filter, which HoaDon to fetch.
     */
    where?: HoaDonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HoaDons to fetch.
     */
    orderBy?: HoaDonOrderByWithRelationInput | HoaDonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HoaDons.
     */
    cursor?: HoaDonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HoaDons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HoaDons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HoaDons.
     */
    distinct?: HoaDonScalarFieldEnum | HoaDonScalarFieldEnum[]
  }

  /**
   * HoaDon findFirstOrThrow
   */
  export type HoaDonFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HoaDon
     */
    select?: HoaDonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HoaDon
     */
    omit?: HoaDonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoaDonInclude<ExtArgs> | null
    /**
     * Filter, which HoaDon to fetch.
     */
    where?: HoaDonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HoaDons to fetch.
     */
    orderBy?: HoaDonOrderByWithRelationInput | HoaDonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HoaDons.
     */
    cursor?: HoaDonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HoaDons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HoaDons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HoaDons.
     */
    distinct?: HoaDonScalarFieldEnum | HoaDonScalarFieldEnum[]
  }

  /**
   * HoaDon findMany
   */
  export type HoaDonFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HoaDon
     */
    select?: HoaDonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HoaDon
     */
    omit?: HoaDonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoaDonInclude<ExtArgs> | null
    /**
     * Filter, which HoaDons to fetch.
     */
    where?: HoaDonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HoaDons to fetch.
     */
    orderBy?: HoaDonOrderByWithRelationInput | HoaDonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HoaDons.
     */
    cursor?: HoaDonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HoaDons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HoaDons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HoaDons.
     */
    distinct?: HoaDonScalarFieldEnum | HoaDonScalarFieldEnum[]
  }

  /**
   * HoaDon create
   */
  export type HoaDonCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HoaDon
     */
    select?: HoaDonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HoaDon
     */
    omit?: HoaDonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoaDonInclude<ExtArgs> | null
    /**
     * The data needed to create a HoaDon.
     */
    data: XOR<HoaDonCreateInput, HoaDonUncheckedCreateInput>
  }

  /**
   * HoaDon createMany
   */
  export type HoaDonCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HoaDons.
     */
    data: HoaDonCreateManyInput | HoaDonCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HoaDon update
   */
  export type HoaDonUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HoaDon
     */
    select?: HoaDonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HoaDon
     */
    omit?: HoaDonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoaDonInclude<ExtArgs> | null
    /**
     * The data needed to update a HoaDon.
     */
    data: XOR<HoaDonUpdateInput, HoaDonUncheckedUpdateInput>
    /**
     * Choose, which HoaDon to update.
     */
    where: HoaDonWhereUniqueInput
  }

  /**
   * HoaDon updateMany
   */
  export type HoaDonUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HoaDons.
     */
    data: XOR<HoaDonUpdateManyMutationInput, HoaDonUncheckedUpdateManyInput>
    /**
     * Filter which HoaDons to update
     */
    where?: HoaDonWhereInput
    /**
     * Limit how many HoaDons to update.
     */
    limit?: number
  }

  /**
   * HoaDon upsert
   */
  export type HoaDonUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HoaDon
     */
    select?: HoaDonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HoaDon
     */
    omit?: HoaDonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoaDonInclude<ExtArgs> | null
    /**
     * The filter to search for the HoaDon to update in case it exists.
     */
    where: HoaDonWhereUniqueInput
    /**
     * In case the HoaDon found by the `where` argument doesn't exist, create a new HoaDon with this data.
     */
    create: XOR<HoaDonCreateInput, HoaDonUncheckedCreateInput>
    /**
     * In case the HoaDon was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HoaDonUpdateInput, HoaDonUncheckedUpdateInput>
  }

  /**
   * HoaDon delete
   */
  export type HoaDonDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HoaDon
     */
    select?: HoaDonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HoaDon
     */
    omit?: HoaDonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoaDonInclude<ExtArgs> | null
    /**
     * Filter which HoaDon to delete.
     */
    where: HoaDonWhereUniqueInput
  }

  /**
   * HoaDon deleteMany
   */
  export type HoaDonDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HoaDons to delete
     */
    where?: HoaDonWhereInput
    /**
     * Limit how many HoaDons to delete.
     */
    limit?: number
  }

  /**
   * HoaDon.DatVe
   */
  export type HoaDon$DatVeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatVe
     */
    select?: DatVeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DatVe
     */
    omit?: DatVeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatVeInclude<ExtArgs> | null
    where?: DatVeWhereInput
    orderBy?: DatVeOrderByWithRelationInput | DatVeOrderByWithRelationInput[]
    cursor?: DatVeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DatVeScalarFieldEnum | DatVeScalarFieldEnum[]
  }

  /**
   * HoaDon.HoaDonCombo
   */
  export type HoaDon$HoaDonComboArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HoaDonCombo
     */
    select?: HoaDonComboSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HoaDonCombo
     */
    omit?: HoaDonComboOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoaDonComboInclude<ExtArgs> | null
    where?: HoaDonComboWhereInput
    orderBy?: HoaDonComboOrderByWithRelationInput | HoaDonComboOrderByWithRelationInput[]
    cursor?: HoaDonComboWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HoaDonComboScalarFieldEnum | HoaDonComboScalarFieldEnum[]
  }

  /**
   * HoaDon.GiuCho
   */
  export type HoaDon$GiuChoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GiuCho
     */
    select?: GiuChoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GiuCho
     */
    omit?: GiuChoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GiuChoInclude<ExtArgs> | null
    where?: GiuChoWhereInput
    orderBy?: GiuChoOrderByWithRelationInput | GiuChoOrderByWithRelationInput[]
    cursor?: GiuChoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GiuChoScalarFieldEnum | GiuChoScalarFieldEnum[]
  }

  /**
   * HoaDon without action
   */
  export type HoaDonDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HoaDon
     */
    select?: HoaDonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HoaDon
     */
    omit?: HoaDonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoaDonInclude<ExtArgs> | null
  }


  /**
   * Model Combo
   */

  export type AggregateCombo = {
    _count: ComboCountAggregateOutputType | null
    _avg: ComboAvgAggregateOutputType | null
    _sum: ComboSumAggregateOutputType | null
    _min: ComboMinAggregateOutputType | null
    _max: ComboMaxAggregateOutputType | null
  }

  export type ComboAvgAggregateOutputType = {
    ma_combo: number | null
    gia: number | null
  }

  export type ComboSumAggregateOutputType = {
    ma_combo: number | null
    gia: number | null
  }

  export type ComboMinAggregateOutputType = {
    ma_combo: number | null
    ten_combo: string | null
    mo_ta: string | null
    gia: number | null
    hinh_anh: string | null
    isDeleted: boolean | null
  }

  export type ComboMaxAggregateOutputType = {
    ma_combo: number | null
    ten_combo: string | null
    mo_ta: string | null
    gia: number | null
    hinh_anh: string | null
    isDeleted: boolean | null
  }

  export type ComboCountAggregateOutputType = {
    ma_combo: number
    ten_combo: number
    mo_ta: number
    gia: number
    hinh_anh: number
    isDeleted: number
    _all: number
  }


  export type ComboAvgAggregateInputType = {
    ma_combo?: true
    gia?: true
  }

  export type ComboSumAggregateInputType = {
    ma_combo?: true
    gia?: true
  }

  export type ComboMinAggregateInputType = {
    ma_combo?: true
    ten_combo?: true
    mo_ta?: true
    gia?: true
    hinh_anh?: true
    isDeleted?: true
  }

  export type ComboMaxAggregateInputType = {
    ma_combo?: true
    ten_combo?: true
    mo_ta?: true
    gia?: true
    hinh_anh?: true
    isDeleted?: true
  }

  export type ComboCountAggregateInputType = {
    ma_combo?: true
    ten_combo?: true
    mo_ta?: true
    gia?: true
    hinh_anh?: true
    isDeleted?: true
    _all?: true
  }

  export type ComboAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Combo to aggregate.
     */
    where?: ComboWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Combos to fetch.
     */
    orderBy?: ComboOrderByWithRelationInput | ComboOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ComboWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Combos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Combos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Combos
    **/
    _count?: true | ComboCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ComboAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ComboSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ComboMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ComboMaxAggregateInputType
  }

  export type GetComboAggregateType<T extends ComboAggregateArgs> = {
        [P in keyof T & keyof AggregateCombo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCombo[P]>
      : GetScalarType<T[P], AggregateCombo[P]>
  }




  export type ComboGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComboWhereInput
    orderBy?: ComboOrderByWithAggregationInput | ComboOrderByWithAggregationInput[]
    by: ComboScalarFieldEnum[] | ComboScalarFieldEnum
    having?: ComboScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ComboCountAggregateInputType | true
    _avg?: ComboAvgAggregateInputType
    _sum?: ComboSumAggregateInputType
    _min?: ComboMinAggregateInputType
    _max?: ComboMaxAggregateInputType
  }

  export type ComboGroupByOutputType = {
    ma_combo: number
    ten_combo: string
    mo_ta: string | null
    gia: number
    hinh_anh: string | null
    isDeleted: boolean | null
    _count: ComboCountAggregateOutputType | null
    _avg: ComboAvgAggregateOutputType | null
    _sum: ComboSumAggregateOutputType | null
    _min: ComboMinAggregateOutputType | null
    _max: ComboMaxAggregateOutputType | null
  }

  type GetComboGroupByPayload<T extends ComboGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ComboGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ComboGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ComboGroupByOutputType[P]>
            : GetScalarType<T[P], ComboGroupByOutputType[P]>
        }
      >
    >


  export type ComboSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ma_combo?: boolean
    ten_combo?: boolean
    mo_ta?: boolean
    gia?: boolean
    hinh_anh?: boolean
    isDeleted?: boolean
    HoaDonCombo?: boolean | Combo$HoaDonComboArgs<ExtArgs>
    _count?: boolean | ComboCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["combo"]>



  export type ComboSelectScalar = {
    ma_combo?: boolean
    ten_combo?: boolean
    mo_ta?: boolean
    gia?: boolean
    hinh_anh?: boolean
    isDeleted?: boolean
  }

  export type ComboOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ma_combo" | "ten_combo" | "mo_ta" | "gia" | "hinh_anh" | "isDeleted", ExtArgs["result"]["combo"]>
  export type ComboInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    HoaDonCombo?: boolean | Combo$HoaDonComboArgs<ExtArgs>
    _count?: boolean | ComboCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ComboPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Combo"
    objects: {
      HoaDonCombo: Prisma.$HoaDonComboPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      ma_combo: number
      ten_combo: string
      mo_ta: string | null
      gia: number
      hinh_anh: string | null
      isDeleted: boolean | null
    }, ExtArgs["result"]["combo"]>
    composites: {}
  }

  type ComboGetPayload<S extends boolean | null | undefined | ComboDefaultArgs> = $Result.GetResult<Prisma.$ComboPayload, S>

  type ComboCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ComboFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ComboCountAggregateInputType | true
    }

  export interface ComboDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Combo'], meta: { name: 'Combo' } }
    /**
     * Find zero or one Combo that matches the filter.
     * @param {ComboFindUniqueArgs} args - Arguments to find a Combo
     * @example
     * // Get one Combo
     * const combo = await prisma.combo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ComboFindUniqueArgs>(args: SelectSubset<T, ComboFindUniqueArgs<ExtArgs>>): Prisma__ComboClient<$Result.GetResult<Prisma.$ComboPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Combo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ComboFindUniqueOrThrowArgs} args - Arguments to find a Combo
     * @example
     * // Get one Combo
     * const combo = await prisma.combo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ComboFindUniqueOrThrowArgs>(args: SelectSubset<T, ComboFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ComboClient<$Result.GetResult<Prisma.$ComboPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Combo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComboFindFirstArgs} args - Arguments to find a Combo
     * @example
     * // Get one Combo
     * const combo = await prisma.combo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ComboFindFirstArgs>(args?: SelectSubset<T, ComboFindFirstArgs<ExtArgs>>): Prisma__ComboClient<$Result.GetResult<Prisma.$ComboPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Combo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComboFindFirstOrThrowArgs} args - Arguments to find a Combo
     * @example
     * // Get one Combo
     * const combo = await prisma.combo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ComboFindFirstOrThrowArgs>(args?: SelectSubset<T, ComboFindFirstOrThrowArgs<ExtArgs>>): Prisma__ComboClient<$Result.GetResult<Prisma.$ComboPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Combos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComboFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Combos
     * const combos = await prisma.combo.findMany()
     * 
     * // Get first 10 Combos
     * const combos = await prisma.combo.findMany({ take: 10 })
     * 
     * // Only select the `ma_combo`
     * const comboWithMa_comboOnly = await prisma.combo.findMany({ select: { ma_combo: true } })
     * 
     */
    findMany<T extends ComboFindManyArgs>(args?: SelectSubset<T, ComboFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComboPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Combo.
     * @param {ComboCreateArgs} args - Arguments to create a Combo.
     * @example
     * // Create one Combo
     * const Combo = await prisma.combo.create({
     *   data: {
     *     // ... data to create a Combo
     *   }
     * })
     * 
     */
    create<T extends ComboCreateArgs>(args: SelectSubset<T, ComboCreateArgs<ExtArgs>>): Prisma__ComboClient<$Result.GetResult<Prisma.$ComboPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Combos.
     * @param {ComboCreateManyArgs} args - Arguments to create many Combos.
     * @example
     * // Create many Combos
     * const combo = await prisma.combo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ComboCreateManyArgs>(args?: SelectSubset<T, ComboCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Combo.
     * @param {ComboDeleteArgs} args - Arguments to delete one Combo.
     * @example
     * // Delete one Combo
     * const Combo = await prisma.combo.delete({
     *   where: {
     *     // ... filter to delete one Combo
     *   }
     * })
     * 
     */
    delete<T extends ComboDeleteArgs>(args: SelectSubset<T, ComboDeleteArgs<ExtArgs>>): Prisma__ComboClient<$Result.GetResult<Prisma.$ComboPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Combo.
     * @param {ComboUpdateArgs} args - Arguments to update one Combo.
     * @example
     * // Update one Combo
     * const combo = await prisma.combo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ComboUpdateArgs>(args: SelectSubset<T, ComboUpdateArgs<ExtArgs>>): Prisma__ComboClient<$Result.GetResult<Prisma.$ComboPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Combos.
     * @param {ComboDeleteManyArgs} args - Arguments to filter Combos to delete.
     * @example
     * // Delete a few Combos
     * const { count } = await prisma.combo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ComboDeleteManyArgs>(args?: SelectSubset<T, ComboDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Combos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComboUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Combos
     * const combo = await prisma.combo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ComboUpdateManyArgs>(args: SelectSubset<T, ComboUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Combo.
     * @param {ComboUpsertArgs} args - Arguments to update or create a Combo.
     * @example
     * // Update or create a Combo
     * const combo = await prisma.combo.upsert({
     *   create: {
     *     // ... data to create a Combo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Combo we want to update
     *   }
     * })
     */
    upsert<T extends ComboUpsertArgs>(args: SelectSubset<T, ComboUpsertArgs<ExtArgs>>): Prisma__ComboClient<$Result.GetResult<Prisma.$ComboPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Combos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComboCountArgs} args - Arguments to filter Combos to count.
     * @example
     * // Count the number of Combos
     * const count = await prisma.combo.count({
     *   where: {
     *     // ... the filter for the Combos we want to count
     *   }
     * })
    **/
    count<T extends ComboCountArgs>(
      args?: Subset<T, ComboCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ComboCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Combo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComboAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ComboAggregateArgs>(args: Subset<T, ComboAggregateArgs>): Prisma.PrismaPromise<GetComboAggregateType<T>>

    /**
     * Group by Combo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComboGroupByArgs} args - Group by arguments.
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
      T extends ComboGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ComboGroupByArgs['orderBy'] }
        : { orderBy?: ComboGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ComboGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetComboGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Combo model
   */
  readonly fields: ComboFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Combo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ComboClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    HoaDonCombo<T extends Combo$HoaDonComboArgs<ExtArgs> = {}>(args?: Subset<T, Combo$HoaDonComboArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HoaDonComboPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Combo model
   */
  interface ComboFieldRefs {
    readonly ma_combo: FieldRef<"Combo", 'Int'>
    readonly ten_combo: FieldRef<"Combo", 'String'>
    readonly mo_ta: FieldRef<"Combo", 'String'>
    readonly gia: FieldRef<"Combo", 'Int'>
    readonly hinh_anh: FieldRef<"Combo", 'String'>
    readonly isDeleted: FieldRef<"Combo", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Combo findUnique
   */
  export type ComboFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Combo
     */
    select?: ComboSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Combo
     */
    omit?: ComboOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComboInclude<ExtArgs> | null
    /**
     * Filter, which Combo to fetch.
     */
    where: ComboWhereUniqueInput
  }

  /**
   * Combo findUniqueOrThrow
   */
  export type ComboFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Combo
     */
    select?: ComboSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Combo
     */
    omit?: ComboOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComboInclude<ExtArgs> | null
    /**
     * Filter, which Combo to fetch.
     */
    where: ComboWhereUniqueInput
  }

  /**
   * Combo findFirst
   */
  export type ComboFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Combo
     */
    select?: ComboSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Combo
     */
    omit?: ComboOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComboInclude<ExtArgs> | null
    /**
     * Filter, which Combo to fetch.
     */
    where?: ComboWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Combos to fetch.
     */
    orderBy?: ComboOrderByWithRelationInput | ComboOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Combos.
     */
    cursor?: ComboWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Combos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Combos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Combos.
     */
    distinct?: ComboScalarFieldEnum | ComboScalarFieldEnum[]
  }

  /**
   * Combo findFirstOrThrow
   */
  export type ComboFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Combo
     */
    select?: ComboSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Combo
     */
    omit?: ComboOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComboInclude<ExtArgs> | null
    /**
     * Filter, which Combo to fetch.
     */
    where?: ComboWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Combos to fetch.
     */
    orderBy?: ComboOrderByWithRelationInput | ComboOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Combos.
     */
    cursor?: ComboWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Combos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Combos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Combos.
     */
    distinct?: ComboScalarFieldEnum | ComboScalarFieldEnum[]
  }

  /**
   * Combo findMany
   */
  export type ComboFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Combo
     */
    select?: ComboSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Combo
     */
    omit?: ComboOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComboInclude<ExtArgs> | null
    /**
     * Filter, which Combos to fetch.
     */
    where?: ComboWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Combos to fetch.
     */
    orderBy?: ComboOrderByWithRelationInput | ComboOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Combos.
     */
    cursor?: ComboWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Combos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Combos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Combos.
     */
    distinct?: ComboScalarFieldEnum | ComboScalarFieldEnum[]
  }

  /**
   * Combo create
   */
  export type ComboCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Combo
     */
    select?: ComboSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Combo
     */
    omit?: ComboOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComboInclude<ExtArgs> | null
    /**
     * The data needed to create a Combo.
     */
    data: XOR<ComboCreateInput, ComboUncheckedCreateInput>
  }

  /**
   * Combo createMany
   */
  export type ComboCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Combos.
     */
    data: ComboCreateManyInput | ComboCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Combo update
   */
  export type ComboUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Combo
     */
    select?: ComboSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Combo
     */
    omit?: ComboOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComboInclude<ExtArgs> | null
    /**
     * The data needed to update a Combo.
     */
    data: XOR<ComboUpdateInput, ComboUncheckedUpdateInput>
    /**
     * Choose, which Combo to update.
     */
    where: ComboWhereUniqueInput
  }

  /**
   * Combo updateMany
   */
  export type ComboUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Combos.
     */
    data: XOR<ComboUpdateManyMutationInput, ComboUncheckedUpdateManyInput>
    /**
     * Filter which Combos to update
     */
    where?: ComboWhereInput
    /**
     * Limit how many Combos to update.
     */
    limit?: number
  }

  /**
   * Combo upsert
   */
  export type ComboUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Combo
     */
    select?: ComboSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Combo
     */
    omit?: ComboOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComboInclude<ExtArgs> | null
    /**
     * The filter to search for the Combo to update in case it exists.
     */
    where: ComboWhereUniqueInput
    /**
     * In case the Combo found by the `where` argument doesn't exist, create a new Combo with this data.
     */
    create: XOR<ComboCreateInput, ComboUncheckedCreateInput>
    /**
     * In case the Combo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ComboUpdateInput, ComboUncheckedUpdateInput>
  }

  /**
   * Combo delete
   */
  export type ComboDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Combo
     */
    select?: ComboSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Combo
     */
    omit?: ComboOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComboInclude<ExtArgs> | null
    /**
     * Filter which Combo to delete.
     */
    where: ComboWhereUniqueInput
  }

  /**
   * Combo deleteMany
   */
  export type ComboDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Combos to delete
     */
    where?: ComboWhereInput
    /**
     * Limit how many Combos to delete.
     */
    limit?: number
  }

  /**
   * Combo.HoaDonCombo
   */
  export type Combo$HoaDonComboArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HoaDonCombo
     */
    select?: HoaDonComboSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HoaDonCombo
     */
    omit?: HoaDonComboOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoaDonComboInclude<ExtArgs> | null
    where?: HoaDonComboWhereInput
    orderBy?: HoaDonComboOrderByWithRelationInput | HoaDonComboOrderByWithRelationInput[]
    cursor?: HoaDonComboWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HoaDonComboScalarFieldEnum | HoaDonComboScalarFieldEnum[]
  }

  /**
   * Combo without action
   */
  export type ComboDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Combo
     */
    select?: ComboSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Combo
     */
    omit?: ComboOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComboInclude<ExtArgs> | null
  }


  /**
   * Model HoaDonCombo
   */

  export type AggregateHoaDonCombo = {
    _count: HoaDonComboCountAggregateOutputType | null
    _avg: HoaDonComboAvgAggregateOutputType | null
    _sum: HoaDonComboSumAggregateOutputType | null
    _min: HoaDonComboMinAggregateOutputType | null
    _max: HoaDonComboMaxAggregateOutputType | null
  }

  export type HoaDonComboAvgAggregateOutputType = {
    ma_hoa_don: number | null
    ma_combo: number | null
    so_luong: number | null
    don_gia: number | null
  }

  export type HoaDonComboSumAggregateOutputType = {
    ma_hoa_don: number | null
    ma_combo: number | null
    so_luong: number | null
    don_gia: number | null
  }

  export type HoaDonComboMinAggregateOutputType = {
    ma_hoa_don: number | null
    ma_combo: number | null
    so_luong: number | null
    don_gia: number | null
  }

  export type HoaDonComboMaxAggregateOutputType = {
    ma_hoa_don: number | null
    ma_combo: number | null
    so_luong: number | null
    don_gia: number | null
  }

  export type HoaDonComboCountAggregateOutputType = {
    ma_hoa_don: number
    ma_combo: number
    so_luong: number
    don_gia: number
    _all: number
  }


  export type HoaDonComboAvgAggregateInputType = {
    ma_hoa_don?: true
    ma_combo?: true
    so_luong?: true
    don_gia?: true
  }

  export type HoaDonComboSumAggregateInputType = {
    ma_hoa_don?: true
    ma_combo?: true
    so_luong?: true
    don_gia?: true
  }

  export type HoaDonComboMinAggregateInputType = {
    ma_hoa_don?: true
    ma_combo?: true
    so_luong?: true
    don_gia?: true
  }

  export type HoaDonComboMaxAggregateInputType = {
    ma_hoa_don?: true
    ma_combo?: true
    so_luong?: true
    don_gia?: true
  }

  export type HoaDonComboCountAggregateInputType = {
    ma_hoa_don?: true
    ma_combo?: true
    so_luong?: true
    don_gia?: true
    _all?: true
  }

  export type HoaDonComboAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HoaDonCombo to aggregate.
     */
    where?: HoaDonComboWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HoaDonCombos to fetch.
     */
    orderBy?: HoaDonComboOrderByWithRelationInput | HoaDonComboOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HoaDonComboWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HoaDonCombos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HoaDonCombos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HoaDonCombos
    **/
    _count?: true | HoaDonComboCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HoaDonComboAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HoaDonComboSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HoaDonComboMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HoaDonComboMaxAggregateInputType
  }

  export type GetHoaDonComboAggregateType<T extends HoaDonComboAggregateArgs> = {
        [P in keyof T & keyof AggregateHoaDonCombo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHoaDonCombo[P]>
      : GetScalarType<T[P], AggregateHoaDonCombo[P]>
  }




  export type HoaDonComboGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HoaDonComboWhereInput
    orderBy?: HoaDonComboOrderByWithAggregationInput | HoaDonComboOrderByWithAggregationInput[]
    by: HoaDonComboScalarFieldEnum[] | HoaDonComboScalarFieldEnum
    having?: HoaDonComboScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HoaDonComboCountAggregateInputType | true
    _avg?: HoaDonComboAvgAggregateInputType
    _sum?: HoaDonComboSumAggregateInputType
    _min?: HoaDonComboMinAggregateInputType
    _max?: HoaDonComboMaxAggregateInputType
  }

  export type HoaDonComboGroupByOutputType = {
    ma_hoa_don: number
    ma_combo: number
    so_luong: number
    don_gia: number
    _count: HoaDonComboCountAggregateOutputType | null
    _avg: HoaDonComboAvgAggregateOutputType | null
    _sum: HoaDonComboSumAggregateOutputType | null
    _min: HoaDonComboMinAggregateOutputType | null
    _max: HoaDonComboMaxAggregateOutputType | null
  }

  type GetHoaDonComboGroupByPayload<T extends HoaDonComboGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HoaDonComboGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HoaDonComboGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HoaDonComboGroupByOutputType[P]>
            : GetScalarType<T[P], HoaDonComboGroupByOutputType[P]>
        }
      >
    >


  export type HoaDonComboSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ma_hoa_don?: boolean
    ma_combo?: boolean
    so_luong?: boolean
    don_gia?: boolean
    HoaDon?: boolean | HoaDonDefaultArgs<ExtArgs>
    Combo?: boolean | ComboDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hoaDonCombo"]>



  export type HoaDonComboSelectScalar = {
    ma_hoa_don?: boolean
    ma_combo?: boolean
    so_luong?: boolean
    don_gia?: boolean
  }

  export type HoaDonComboOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ma_hoa_don" | "ma_combo" | "so_luong" | "don_gia", ExtArgs["result"]["hoaDonCombo"]>
  export type HoaDonComboInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    HoaDon?: boolean | HoaDonDefaultArgs<ExtArgs>
    Combo?: boolean | ComboDefaultArgs<ExtArgs>
  }

  export type $HoaDonComboPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HoaDonCombo"
    objects: {
      HoaDon: Prisma.$HoaDonPayload<ExtArgs>
      Combo: Prisma.$ComboPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      ma_hoa_don: number
      ma_combo: number
      so_luong: number
      don_gia: number
    }, ExtArgs["result"]["hoaDonCombo"]>
    composites: {}
  }

  type HoaDonComboGetPayload<S extends boolean | null | undefined | HoaDonComboDefaultArgs> = $Result.GetResult<Prisma.$HoaDonComboPayload, S>

  type HoaDonComboCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HoaDonComboFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HoaDonComboCountAggregateInputType | true
    }

  export interface HoaDonComboDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HoaDonCombo'], meta: { name: 'HoaDonCombo' } }
    /**
     * Find zero or one HoaDonCombo that matches the filter.
     * @param {HoaDonComboFindUniqueArgs} args - Arguments to find a HoaDonCombo
     * @example
     * // Get one HoaDonCombo
     * const hoaDonCombo = await prisma.hoaDonCombo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HoaDonComboFindUniqueArgs>(args: SelectSubset<T, HoaDonComboFindUniqueArgs<ExtArgs>>): Prisma__HoaDonComboClient<$Result.GetResult<Prisma.$HoaDonComboPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HoaDonCombo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HoaDonComboFindUniqueOrThrowArgs} args - Arguments to find a HoaDonCombo
     * @example
     * // Get one HoaDonCombo
     * const hoaDonCombo = await prisma.hoaDonCombo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HoaDonComboFindUniqueOrThrowArgs>(args: SelectSubset<T, HoaDonComboFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HoaDonComboClient<$Result.GetResult<Prisma.$HoaDonComboPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HoaDonCombo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HoaDonComboFindFirstArgs} args - Arguments to find a HoaDonCombo
     * @example
     * // Get one HoaDonCombo
     * const hoaDonCombo = await prisma.hoaDonCombo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HoaDonComboFindFirstArgs>(args?: SelectSubset<T, HoaDonComboFindFirstArgs<ExtArgs>>): Prisma__HoaDonComboClient<$Result.GetResult<Prisma.$HoaDonComboPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HoaDonCombo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HoaDonComboFindFirstOrThrowArgs} args - Arguments to find a HoaDonCombo
     * @example
     * // Get one HoaDonCombo
     * const hoaDonCombo = await prisma.hoaDonCombo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HoaDonComboFindFirstOrThrowArgs>(args?: SelectSubset<T, HoaDonComboFindFirstOrThrowArgs<ExtArgs>>): Prisma__HoaDonComboClient<$Result.GetResult<Prisma.$HoaDonComboPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HoaDonCombos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HoaDonComboFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HoaDonCombos
     * const hoaDonCombos = await prisma.hoaDonCombo.findMany()
     * 
     * // Get first 10 HoaDonCombos
     * const hoaDonCombos = await prisma.hoaDonCombo.findMany({ take: 10 })
     * 
     * // Only select the `ma_hoa_don`
     * const hoaDonComboWithMa_hoa_donOnly = await prisma.hoaDonCombo.findMany({ select: { ma_hoa_don: true } })
     * 
     */
    findMany<T extends HoaDonComboFindManyArgs>(args?: SelectSubset<T, HoaDonComboFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HoaDonComboPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HoaDonCombo.
     * @param {HoaDonComboCreateArgs} args - Arguments to create a HoaDonCombo.
     * @example
     * // Create one HoaDonCombo
     * const HoaDonCombo = await prisma.hoaDonCombo.create({
     *   data: {
     *     // ... data to create a HoaDonCombo
     *   }
     * })
     * 
     */
    create<T extends HoaDonComboCreateArgs>(args: SelectSubset<T, HoaDonComboCreateArgs<ExtArgs>>): Prisma__HoaDonComboClient<$Result.GetResult<Prisma.$HoaDonComboPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HoaDonCombos.
     * @param {HoaDonComboCreateManyArgs} args - Arguments to create many HoaDonCombos.
     * @example
     * // Create many HoaDonCombos
     * const hoaDonCombo = await prisma.hoaDonCombo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HoaDonComboCreateManyArgs>(args?: SelectSubset<T, HoaDonComboCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a HoaDonCombo.
     * @param {HoaDonComboDeleteArgs} args - Arguments to delete one HoaDonCombo.
     * @example
     * // Delete one HoaDonCombo
     * const HoaDonCombo = await prisma.hoaDonCombo.delete({
     *   where: {
     *     // ... filter to delete one HoaDonCombo
     *   }
     * })
     * 
     */
    delete<T extends HoaDonComboDeleteArgs>(args: SelectSubset<T, HoaDonComboDeleteArgs<ExtArgs>>): Prisma__HoaDonComboClient<$Result.GetResult<Prisma.$HoaDonComboPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HoaDonCombo.
     * @param {HoaDonComboUpdateArgs} args - Arguments to update one HoaDonCombo.
     * @example
     * // Update one HoaDonCombo
     * const hoaDonCombo = await prisma.hoaDonCombo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HoaDonComboUpdateArgs>(args: SelectSubset<T, HoaDonComboUpdateArgs<ExtArgs>>): Prisma__HoaDonComboClient<$Result.GetResult<Prisma.$HoaDonComboPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HoaDonCombos.
     * @param {HoaDonComboDeleteManyArgs} args - Arguments to filter HoaDonCombos to delete.
     * @example
     * // Delete a few HoaDonCombos
     * const { count } = await prisma.hoaDonCombo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HoaDonComboDeleteManyArgs>(args?: SelectSubset<T, HoaDonComboDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HoaDonCombos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HoaDonComboUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HoaDonCombos
     * const hoaDonCombo = await prisma.hoaDonCombo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HoaDonComboUpdateManyArgs>(args: SelectSubset<T, HoaDonComboUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one HoaDonCombo.
     * @param {HoaDonComboUpsertArgs} args - Arguments to update or create a HoaDonCombo.
     * @example
     * // Update or create a HoaDonCombo
     * const hoaDonCombo = await prisma.hoaDonCombo.upsert({
     *   create: {
     *     // ... data to create a HoaDonCombo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HoaDonCombo we want to update
     *   }
     * })
     */
    upsert<T extends HoaDonComboUpsertArgs>(args: SelectSubset<T, HoaDonComboUpsertArgs<ExtArgs>>): Prisma__HoaDonComboClient<$Result.GetResult<Prisma.$HoaDonComboPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HoaDonCombos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HoaDonComboCountArgs} args - Arguments to filter HoaDonCombos to count.
     * @example
     * // Count the number of HoaDonCombos
     * const count = await prisma.hoaDonCombo.count({
     *   where: {
     *     // ... the filter for the HoaDonCombos we want to count
     *   }
     * })
    **/
    count<T extends HoaDonComboCountArgs>(
      args?: Subset<T, HoaDonComboCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HoaDonComboCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HoaDonCombo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HoaDonComboAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HoaDonComboAggregateArgs>(args: Subset<T, HoaDonComboAggregateArgs>): Prisma.PrismaPromise<GetHoaDonComboAggregateType<T>>

    /**
     * Group by HoaDonCombo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HoaDonComboGroupByArgs} args - Group by arguments.
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
      T extends HoaDonComboGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HoaDonComboGroupByArgs['orderBy'] }
        : { orderBy?: HoaDonComboGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HoaDonComboGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHoaDonComboGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HoaDonCombo model
   */
  readonly fields: HoaDonComboFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HoaDonCombo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HoaDonComboClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    HoaDon<T extends HoaDonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HoaDonDefaultArgs<ExtArgs>>): Prisma__HoaDonClient<$Result.GetResult<Prisma.$HoaDonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Combo<T extends ComboDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ComboDefaultArgs<ExtArgs>>): Prisma__ComboClient<$Result.GetResult<Prisma.$ComboPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the HoaDonCombo model
   */
  interface HoaDonComboFieldRefs {
    readonly ma_hoa_don: FieldRef<"HoaDonCombo", 'Int'>
    readonly ma_combo: FieldRef<"HoaDonCombo", 'Int'>
    readonly so_luong: FieldRef<"HoaDonCombo", 'Int'>
    readonly don_gia: FieldRef<"HoaDonCombo", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * HoaDonCombo findUnique
   */
  export type HoaDonComboFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HoaDonCombo
     */
    select?: HoaDonComboSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HoaDonCombo
     */
    omit?: HoaDonComboOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoaDonComboInclude<ExtArgs> | null
    /**
     * Filter, which HoaDonCombo to fetch.
     */
    where: HoaDonComboWhereUniqueInput
  }

  /**
   * HoaDonCombo findUniqueOrThrow
   */
  export type HoaDonComboFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HoaDonCombo
     */
    select?: HoaDonComboSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HoaDonCombo
     */
    omit?: HoaDonComboOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoaDonComboInclude<ExtArgs> | null
    /**
     * Filter, which HoaDonCombo to fetch.
     */
    where: HoaDonComboWhereUniqueInput
  }

  /**
   * HoaDonCombo findFirst
   */
  export type HoaDonComboFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HoaDonCombo
     */
    select?: HoaDonComboSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HoaDonCombo
     */
    omit?: HoaDonComboOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoaDonComboInclude<ExtArgs> | null
    /**
     * Filter, which HoaDonCombo to fetch.
     */
    where?: HoaDonComboWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HoaDonCombos to fetch.
     */
    orderBy?: HoaDonComboOrderByWithRelationInput | HoaDonComboOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HoaDonCombos.
     */
    cursor?: HoaDonComboWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HoaDonCombos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HoaDonCombos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HoaDonCombos.
     */
    distinct?: HoaDonComboScalarFieldEnum | HoaDonComboScalarFieldEnum[]
  }

  /**
   * HoaDonCombo findFirstOrThrow
   */
  export type HoaDonComboFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HoaDonCombo
     */
    select?: HoaDonComboSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HoaDonCombo
     */
    omit?: HoaDonComboOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoaDonComboInclude<ExtArgs> | null
    /**
     * Filter, which HoaDonCombo to fetch.
     */
    where?: HoaDonComboWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HoaDonCombos to fetch.
     */
    orderBy?: HoaDonComboOrderByWithRelationInput | HoaDonComboOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HoaDonCombos.
     */
    cursor?: HoaDonComboWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HoaDonCombos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HoaDonCombos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HoaDonCombos.
     */
    distinct?: HoaDonComboScalarFieldEnum | HoaDonComboScalarFieldEnum[]
  }

  /**
   * HoaDonCombo findMany
   */
  export type HoaDonComboFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HoaDonCombo
     */
    select?: HoaDonComboSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HoaDonCombo
     */
    omit?: HoaDonComboOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoaDonComboInclude<ExtArgs> | null
    /**
     * Filter, which HoaDonCombos to fetch.
     */
    where?: HoaDonComboWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HoaDonCombos to fetch.
     */
    orderBy?: HoaDonComboOrderByWithRelationInput | HoaDonComboOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HoaDonCombos.
     */
    cursor?: HoaDonComboWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HoaDonCombos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HoaDonCombos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HoaDonCombos.
     */
    distinct?: HoaDonComboScalarFieldEnum | HoaDonComboScalarFieldEnum[]
  }

  /**
   * HoaDonCombo create
   */
  export type HoaDonComboCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HoaDonCombo
     */
    select?: HoaDonComboSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HoaDonCombo
     */
    omit?: HoaDonComboOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoaDonComboInclude<ExtArgs> | null
    /**
     * The data needed to create a HoaDonCombo.
     */
    data: XOR<HoaDonComboCreateInput, HoaDonComboUncheckedCreateInput>
  }

  /**
   * HoaDonCombo createMany
   */
  export type HoaDonComboCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HoaDonCombos.
     */
    data: HoaDonComboCreateManyInput | HoaDonComboCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HoaDonCombo update
   */
  export type HoaDonComboUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HoaDonCombo
     */
    select?: HoaDonComboSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HoaDonCombo
     */
    omit?: HoaDonComboOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoaDonComboInclude<ExtArgs> | null
    /**
     * The data needed to update a HoaDonCombo.
     */
    data: XOR<HoaDonComboUpdateInput, HoaDonComboUncheckedUpdateInput>
    /**
     * Choose, which HoaDonCombo to update.
     */
    where: HoaDonComboWhereUniqueInput
  }

  /**
   * HoaDonCombo updateMany
   */
  export type HoaDonComboUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HoaDonCombos.
     */
    data: XOR<HoaDonComboUpdateManyMutationInput, HoaDonComboUncheckedUpdateManyInput>
    /**
     * Filter which HoaDonCombos to update
     */
    where?: HoaDonComboWhereInput
    /**
     * Limit how many HoaDonCombos to update.
     */
    limit?: number
  }

  /**
   * HoaDonCombo upsert
   */
  export type HoaDonComboUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HoaDonCombo
     */
    select?: HoaDonComboSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HoaDonCombo
     */
    omit?: HoaDonComboOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoaDonComboInclude<ExtArgs> | null
    /**
     * The filter to search for the HoaDonCombo to update in case it exists.
     */
    where: HoaDonComboWhereUniqueInput
    /**
     * In case the HoaDonCombo found by the `where` argument doesn't exist, create a new HoaDonCombo with this data.
     */
    create: XOR<HoaDonComboCreateInput, HoaDonComboUncheckedCreateInput>
    /**
     * In case the HoaDonCombo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HoaDonComboUpdateInput, HoaDonComboUncheckedUpdateInput>
  }

  /**
   * HoaDonCombo delete
   */
  export type HoaDonComboDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HoaDonCombo
     */
    select?: HoaDonComboSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HoaDonCombo
     */
    omit?: HoaDonComboOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoaDonComboInclude<ExtArgs> | null
    /**
     * Filter which HoaDonCombo to delete.
     */
    where: HoaDonComboWhereUniqueInput
  }

  /**
   * HoaDonCombo deleteMany
   */
  export type HoaDonComboDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HoaDonCombos to delete
     */
    where?: HoaDonComboWhereInput
    /**
     * Limit how many HoaDonCombos to delete.
     */
    limit?: number
  }

  /**
   * HoaDonCombo without action
   */
  export type HoaDonComboDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HoaDonCombo
     */
    select?: HoaDonComboSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HoaDonCombo
     */
    omit?: HoaDonComboOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoaDonComboInclude<ExtArgs> | null
  }


  /**
   * Model GiaoDichWebhook
   */

  export type AggregateGiaoDichWebhook = {
    _count: GiaoDichWebhookCountAggregateOutputType | null
    _avg: GiaoDichWebhookAvgAggregateOutputType | null
    _sum: GiaoDichWebhookSumAggregateOutputType | null
    _min: GiaoDichWebhookMinAggregateOutputType | null
    _max: GiaoDichWebhookMaxAggregateOutputType | null
  }

  export type GiaoDichWebhookAvgAggregateOutputType = {
    ma_giao_dich_webhook: number | null
    so_tien: number | null
    ma_hoa_don_parse: number | null
  }

  export type GiaoDichWebhookSumAggregateOutputType = {
    ma_giao_dich_webhook: number | null
    so_tien: number | null
    ma_hoa_don_parse: number | null
  }

  export type GiaoDichWebhookMinAggregateOutputType = {
    ma_giao_dich_webhook: number | null
    nguon: string | null
    raw_payload: string | null
    ma_giao_dich_ngan_hang: string | null
    so_tien: number | null
    noi_dung: string | null
    ma_hoa_don_parse: number | null
    ket_qua_xu_ly: string | null
    ghi_chu: string | null
    created_at: Date | null
  }

  export type GiaoDichWebhookMaxAggregateOutputType = {
    ma_giao_dich_webhook: number | null
    nguon: string | null
    raw_payload: string | null
    ma_giao_dich_ngan_hang: string | null
    so_tien: number | null
    noi_dung: string | null
    ma_hoa_don_parse: number | null
    ket_qua_xu_ly: string | null
    ghi_chu: string | null
    created_at: Date | null
  }

  export type GiaoDichWebhookCountAggregateOutputType = {
    ma_giao_dich_webhook: number
    nguon: number
    raw_payload: number
    ma_giao_dich_ngan_hang: number
    so_tien: number
    noi_dung: number
    ma_hoa_don_parse: number
    ket_qua_xu_ly: number
    ghi_chu: number
    created_at: number
    _all: number
  }


  export type GiaoDichWebhookAvgAggregateInputType = {
    ma_giao_dich_webhook?: true
    so_tien?: true
    ma_hoa_don_parse?: true
  }

  export type GiaoDichWebhookSumAggregateInputType = {
    ma_giao_dich_webhook?: true
    so_tien?: true
    ma_hoa_don_parse?: true
  }

  export type GiaoDichWebhookMinAggregateInputType = {
    ma_giao_dich_webhook?: true
    nguon?: true
    raw_payload?: true
    ma_giao_dich_ngan_hang?: true
    so_tien?: true
    noi_dung?: true
    ma_hoa_don_parse?: true
    ket_qua_xu_ly?: true
    ghi_chu?: true
    created_at?: true
  }

  export type GiaoDichWebhookMaxAggregateInputType = {
    ma_giao_dich_webhook?: true
    nguon?: true
    raw_payload?: true
    ma_giao_dich_ngan_hang?: true
    so_tien?: true
    noi_dung?: true
    ma_hoa_don_parse?: true
    ket_qua_xu_ly?: true
    ghi_chu?: true
    created_at?: true
  }

  export type GiaoDichWebhookCountAggregateInputType = {
    ma_giao_dich_webhook?: true
    nguon?: true
    raw_payload?: true
    ma_giao_dich_ngan_hang?: true
    so_tien?: true
    noi_dung?: true
    ma_hoa_don_parse?: true
    ket_qua_xu_ly?: true
    ghi_chu?: true
    created_at?: true
    _all?: true
  }

  export type GiaoDichWebhookAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GiaoDichWebhook to aggregate.
     */
    where?: GiaoDichWebhookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GiaoDichWebhooks to fetch.
     */
    orderBy?: GiaoDichWebhookOrderByWithRelationInput | GiaoDichWebhookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GiaoDichWebhookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GiaoDichWebhooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GiaoDichWebhooks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GiaoDichWebhooks
    **/
    _count?: true | GiaoDichWebhookCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GiaoDichWebhookAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GiaoDichWebhookSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GiaoDichWebhookMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GiaoDichWebhookMaxAggregateInputType
  }

  export type GetGiaoDichWebhookAggregateType<T extends GiaoDichWebhookAggregateArgs> = {
        [P in keyof T & keyof AggregateGiaoDichWebhook]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGiaoDichWebhook[P]>
      : GetScalarType<T[P], AggregateGiaoDichWebhook[P]>
  }




  export type GiaoDichWebhookGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GiaoDichWebhookWhereInput
    orderBy?: GiaoDichWebhookOrderByWithAggregationInput | GiaoDichWebhookOrderByWithAggregationInput[]
    by: GiaoDichWebhookScalarFieldEnum[] | GiaoDichWebhookScalarFieldEnum
    having?: GiaoDichWebhookScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GiaoDichWebhookCountAggregateInputType | true
    _avg?: GiaoDichWebhookAvgAggregateInputType
    _sum?: GiaoDichWebhookSumAggregateInputType
    _min?: GiaoDichWebhookMinAggregateInputType
    _max?: GiaoDichWebhookMaxAggregateInputType
  }

  export type GiaoDichWebhookGroupByOutputType = {
    ma_giao_dich_webhook: number
    nguon: string
    raw_payload: string
    ma_giao_dich_ngan_hang: string | null
    so_tien: number | null
    noi_dung: string | null
    ma_hoa_don_parse: number | null
    ket_qua_xu_ly: string
    ghi_chu: string | null
    created_at: Date | null
    _count: GiaoDichWebhookCountAggregateOutputType | null
    _avg: GiaoDichWebhookAvgAggregateOutputType | null
    _sum: GiaoDichWebhookSumAggregateOutputType | null
    _min: GiaoDichWebhookMinAggregateOutputType | null
    _max: GiaoDichWebhookMaxAggregateOutputType | null
  }

  type GetGiaoDichWebhookGroupByPayload<T extends GiaoDichWebhookGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GiaoDichWebhookGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GiaoDichWebhookGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GiaoDichWebhookGroupByOutputType[P]>
            : GetScalarType<T[P], GiaoDichWebhookGroupByOutputType[P]>
        }
      >
    >


  export type GiaoDichWebhookSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ma_giao_dich_webhook?: boolean
    nguon?: boolean
    raw_payload?: boolean
    ma_giao_dich_ngan_hang?: boolean
    so_tien?: boolean
    noi_dung?: boolean
    ma_hoa_don_parse?: boolean
    ket_qua_xu_ly?: boolean
    ghi_chu?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["giaoDichWebhook"]>



  export type GiaoDichWebhookSelectScalar = {
    ma_giao_dich_webhook?: boolean
    nguon?: boolean
    raw_payload?: boolean
    ma_giao_dich_ngan_hang?: boolean
    so_tien?: boolean
    noi_dung?: boolean
    ma_hoa_don_parse?: boolean
    ket_qua_xu_ly?: boolean
    ghi_chu?: boolean
    created_at?: boolean
  }

  export type GiaoDichWebhookOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ma_giao_dich_webhook" | "nguon" | "raw_payload" | "ma_giao_dich_ngan_hang" | "so_tien" | "noi_dung" | "ma_hoa_don_parse" | "ket_qua_xu_ly" | "ghi_chu" | "created_at", ExtArgs["result"]["giaoDichWebhook"]>

  export type $GiaoDichWebhookPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GiaoDichWebhook"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      ma_giao_dich_webhook: number
      nguon: string
      raw_payload: string
      ma_giao_dich_ngan_hang: string | null
      so_tien: number | null
      noi_dung: string | null
      ma_hoa_don_parse: number | null
      ket_qua_xu_ly: string
      ghi_chu: string | null
      created_at: Date | null
    }, ExtArgs["result"]["giaoDichWebhook"]>
    composites: {}
  }

  type GiaoDichWebhookGetPayload<S extends boolean | null | undefined | GiaoDichWebhookDefaultArgs> = $Result.GetResult<Prisma.$GiaoDichWebhookPayload, S>

  type GiaoDichWebhookCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GiaoDichWebhookFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GiaoDichWebhookCountAggregateInputType | true
    }

  export interface GiaoDichWebhookDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GiaoDichWebhook'], meta: { name: 'GiaoDichWebhook' } }
    /**
     * Find zero or one GiaoDichWebhook that matches the filter.
     * @param {GiaoDichWebhookFindUniqueArgs} args - Arguments to find a GiaoDichWebhook
     * @example
     * // Get one GiaoDichWebhook
     * const giaoDichWebhook = await prisma.giaoDichWebhook.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GiaoDichWebhookFindUniqueArgs>(args: SelectSubset<T, GiaoDichWebhookFindUniqueArgs<ExtArgs>>): Prisma__GiaoDichWebhookClient<$Result.GetResult<Prisma.$GiaoDichWebhookPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GiaoDichWebhook that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GiaoDichWebhookFindUniqueOrThrowArgs} args - Arguments to find a GiaoDichWebhook
     * @example
     * // Get one GiaoDichWebhook
     * const giaoDichWebhook = await prisma.giaoDichWebhook.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GiaoDichWebhookFindUniqueOrThrowArgs>(args: SelectSubset<T, GiaoDichWebhookFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GiaoDichWebhookClient<$Result.GetResult<Prisma.$GiaoDichWebhookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GiaoDichWebhook that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GiaoDichWebhookFindFirstArgs} args - Arguments to find a GiaoDichWebhook
     * @example
     * // Get one GiaoDichWebhook
     * const giaoDichWebhook = await prisma.giaoDichWebhook.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GiaoDichWebhookFindFirstArgs>(args?: SelectSubset<T, GiaoDichWebhookFindFirstArgs<ExtArgs>>): Prisma__GiaoDichWebhookClient<$Result.GetResult<Prisma.$GiaoDichWebhookPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GiaoDichWebhook that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GiaoDichWebhookFindFirstOrThrowArgs} args - Arguments to find a GiaoDichWebhook
     * @example
     * // Get one GiaoDichWebhook
     * const giaoDichWebhook = await prisma.giaoDichWebhook.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GiaoDichWebhookFindFirstOrThrowArgs>(args?: SelectSubset<T, GiaoDichWebhookFindFirstOrThrowArgs<ExtArgs>>): Prisma__GiaoDichWebhookClient<$Result.GetResult<Prisma.$GiaoDichWebhookPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GiaoDichWebhooks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GiaoDichWebhookFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GiaoDichWebhooks
     * const giaoDichWebhooks = await prisma.giaoDichWebhook.findMany()
     * 
     * // Get first 10 GiaoDichWebhooks
     * const giaoDichWebhooks = await prisma.giaoDichWebhook.findMany({ take: 10 })
     * 
     * // Only select the `ma_giao_dich_webhook`
     * const giaoDichWebhookWithMa_giao_dich_webhookOnly = await prisma.giaoDichWebhook.findMany({ select: { ma_giao_dich_webhook: true } })
     * 
     */
    findMany<T extends GiaoDichWebhookFindManyArgs>(args?: SelectSubset<T, GiaoDichWebhookFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GiaoDichWebhookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GiaoDichWebhook.
     * @param {GiaoDichWebhookCreateArgs} args - Arguments to create a GiaoDichWebhook.
     * @example
     * // Create one GiaoDichWebhook
     * const GiaoDichWebhook = await prisma.giaoDichWebhook.create({
     *   data: {
     *     // ... data to create a GiaoDichWebhook
     *   }
     * })
     * 
     */
    create<T extends GiaoDichWebhookCreateArgs>(args: SelectSubset<T, GiaoDichWebhookCreateArgs<ExtArgs>>): Prisma__GiaoDichWebhookClient<$Result.GetResult<Prisma.$GiaoDichWebhookPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GiaoDichWebhooks.
     * @param {GiaoDichWebhookCreateManyArgs} args - Arguments to create many GiaoDichWebhooks.
     * @example
     * // Create many GiaoDichWebhooks
     * const giaoDichWebhook = await prisma.giaoDichWebhook.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GiaoDichWebhookCreateManyArgs>(args?: SelectSubset<T, GiaoDichWebhookCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a GiaoDichWebhook.
     * @param {GiaoDichWebhookDeleteArgs} args - Arguments to delete one GiaoDichWebhook.
     * @example
     * // Delete one GiaoDichWebhook
     * const GiaoDichWebhook = await prisma.giaoDichWebhook.delete({
     *   where: {
     *     // ... filter to delete one GiaoDichWebhook
     *   }
     * })
     * 
     */
    delete<T extends GiaoDichWebhookDeleteArgs>(args: SelectSubset<T, GiaoDichWebhookDeleteArgs<ExtArgs>>): Prisma__GiaoDichWebhookClient<$Result.GetResult<Prisma.$GiaoDichWebhookPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GiaoDichWebhook.
     * @param {GiaoDichWebhookUpdateArgs} args - Arguments to update one GiaoDichWebhook.
     * @example
     * // Update one GiaoDichWebhook
     * const giaoDichWebhook = await prisma.giaoDichWebhook.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GiaoDichWebhookUpdateArgs>(args: SelectSubset<T, GiaoDichWebhookUpdateArgs<ExtArgs>>): Prisma__GiaoDichWebhookClient<$Result.GetResult<Prisma.$GiaoDichWebhookPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GiaoDichWebhooks.
     * @param {GiaoDichWebhookDeleteManyArgs} args - Arguments to filter GiaoDichWebhooks to delete.
     * @example
     * // Delete a few GiaoDichWebhooks
     * const { count } = await prisma.giaoDichWebhook.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GiaoDichWebhookDeleteManyArgs>(args?: SelectSubset<T, GiaoDichWebhookDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GiaoDichWebhooks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GiaoDichWebhookUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GiaoDichWebhooks
     * const giaoDichWebhook = await prisma.giaoDichWebhook.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GiaoDichWebhookUpdateManyArgs>(args: SelectSubset<T, GiaoDichWebhookUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one GiaoDichWebhook.
     * @param {GiaoDichWebhookUpsertArgs} args - Arguments to update or create a GiaoDichWebhook.
     * @example
     * // Update or create a GiaoDichWebhook
     * const giaoDichWebhook = await prisma.giaoDichWebhook.upsert({
     *   create: {
     *     // ... data to create a GiaoDichWebhook
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GiaoDichWebhook we want to update
     *   }
     * })
     */
    upsert<T extends GiaoDichWebhookUpsertArgs>(args: SelectSubset<T, GiaoDichWebhookUpsertArgs<ExtArgs>>): Prisma__GiaoDichWebhookClient<$Result.GetResult<Prisma.$GiaoDichWebhookPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GiaoDichWebhooks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GiaoDichWebhookCountArgs} args - Arguments to filter GiaoDichWebhooks to count.
     * @example
     * // Count the number of GiaoDichWebhooks
     * const count = await prisma.giaoDichWebhook.count({
     *   where: {
     *     // ... the filter for the GiaoDichWebhooks we want to count
     *   }
     * })
    **/
    count<T extends GiaoDichWebhookCountArgs>(
      args?: Subset<T, GiaoDichWebhookCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GiaoDichWebhookCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GiaoDichWebhook.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GiaoDichWebhookAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GiaoDichWebhookAggregateArgs>(args: Subset<T, GiaoDichWebhookAggregateArgs>): Prisma.PrismaPromise<GetGiaoDichWebhookAggregateType<T>>

    /**
     * Group by GiaoDichWebhook.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GiaoDichWebhookGroupByArgs} args - Group by arguments.
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
      T extends GiaoDichWebhookGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GiaoDichWebhookGroupByArgs['orderBy'] }
        : { orderBy?: GiaoDichWebhookGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GiaoDichWebhookGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGiaoDichWebhookGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GiaoDichWebhook model
   */
  readonly fields: GiaoDichWebhookFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GiaoDichWebhook.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GiaoDichWebhookClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GiaoDichWebhook model
   */
  interface GiaoDichWebhookFieldRefs {
    readonly ma_giao_dich_webhook: FieldRef<"GiaoDichWebhook", 'Int'>
    readonly nguon: FieldRef<"GiaoDichWebhook", 'String'>
    readonly raw_payload: FieldRef<"GiaoDichWebhook", 'String'>
    readonly ma_giao_dich_ngan_hang: FieldRef<"GiaoDichWebhook", 'String'>
    readonly so_tien: FieldRef<"GiaoDichWebhook", 'Int'>
    readonly noi_dung: FieldRef<"GiaoDichWebhook", 'String'>
    readonly ma_hoa_don_parse: FieldRef<"GiaoDichWebhook", 'Int'>
    readonly ket_qua_xu_ly: FieldRef<"GiaoDichWebhook", 'String'>
    readonly ghi_chu: FieldRef<"GiaoDichWebhook", 'String'>
    readonly created_at: FieldRef<"GiaoDichWebhook", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GiaoDichWebhook findUnique
   */
  export type GiaoDichWebhookFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GiaoDichWebhook
     */
    select?: GiaoDichWebhookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GiaoDichWebhook
     */
    omit?: GiaoDichWebhookOmit<ExtArgs> | null
    /**
     * Filter, which GiaoDichWebhook to fetch.
     */
    where: GiaoDichWebhookWhereUniqueInput
  }

  /**
   * GiaoDichWebhook findUniqueOrThrow
   */
  export type GiaoDichWebhookFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GiaoDichWebhook
     */
    select?: GiaoDichWebhookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GiaoDichWebhook
     */
    omit?: GiaoDichWebhookOmit<ExtArgs> | null
    /**
     * Filter, which GiaoDichWebhook to fetch.
     */
    where: GiaoDichWebhookWhereUniqueInput
  }

  /**
   * GiaoDichWebhook findFirst
   */
  export type GiaoDichWebhookFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GiaoDichWebhook
     */
    select?: GiaoDichWebhookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GiaoDichWebhook
     */
    omit?: GiaoDichWebhookOmit<ExtArgs> | null
    /**
     * Filter, which GiaoDichWebhook to fetch.
     */
    where?: GiaoDichWebhookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GiaoDichWebhooks to fetch.
     */
    orderBy?: GiaoDichWebhookOrderByWithRelationInput | GiaoDichWebhookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GiaoDichWebhooks.
     */
    cursor?: GiaoDichWebhookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GiaoDichWebhooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GiaoDichWebhooks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GiaoDichWebhooks.
     */
    distinct?: GiaoDichWebhookScalarFieldEnum | GiaoDichWebhookScalarFieldEnum[]
  }

  /**
   * GiaoDichWebhook findFirstOrThrow
   */
  export type GiaoDichWebhookFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GiaoDichWebhook
     */
    select?: GiaoDichWebhookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GiaoDichWebhook
     */
    omit?: GiaoDichWebhookOmit<ExtArgs> | null
    /**
     * Filter, which GiaoDichWebhook to fetch.
     */
    where?: GiaoDichWebhookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GiaoDichWebhooks to fetch.
     */
    orderBy?: GiaoDichWebhookOrderByWithRelationInput | GiaoDichWebhookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GiaoDichWebhooks.
     */
    cursor?: GiaoDichWebhookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GiaoDichWebhooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GiaoDichWebhooks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GiaoDichWebhooks.
     */
    distinct?: GiaoDichWebhookScalarFieldEnum | GiaoDichWebhookScalarFieldEnum[]
  }

  /**
   * GiaoDichWebhook findMany
   */
  export type GiaoDichWebhookFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GiaoDichWebhook
     */
    select?: GiaoDichWebhookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GiaoDichWebhook
     */
    omit?: GiaoDichWebhookOmit<ExtArgs> | null
    /**
     * Filter, which GiaoDichWebhooks to fetch.
     */
    where?: GiaoDichWebhookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GiaoDichWebhooks to fetch.
     */
    orderBy?: GiaoDichWebhookOrderByWithRelationInput | GiaoDichWebhookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GiaoDichWebhooks.
     */
    cursor?: GiaoDichWebhookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GiaoDichWebhooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GiaoDichWebhooks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GiaoDichWebhooks.
     */
    distinct?: GiaoDichWebhookScalarFieldEnum | GiaoDichWebhookScalarFieldEnum[]
  }

  /**
   * GiaoDichWebhook create
   */
  export type GiaoDichWebhookCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GiaoDichWebhook
     */
    select?: GiaoDichWebhookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GiaoDichWebhook
     */
    omit?: GiaoDichWebhookOmit<ExtArgs> | null
    /**
     * The data needed to create a GiaoDichWebhook.
     */
    data: XOR<GiaoDichWebhookCreateInput, GiaoDichWebhookUncheckedCreateInput>
  }

  /**
   * GiaoDichWebhook createMany
   */
  export type GiaoDichWebhookCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GiaoDichWebhooks.
     */
    data: GiaoDichWebhookCreateManyInput | GiaoDichWebhookCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GiaoDichWebhook update
   */
  export type GiaoDichWebhookUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GiaoDichWebhook
     */
    select?: GiaoDichWebhookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GiaoDichWebhook
     */
    omit?: GiaoDichWebhookOmit<ExtArgs> | null
    /**
     * The data needed to update a GiaoDichWebhook.
     */
    data: XOR<GiaoDichWebhookUpdateInput, GiaoDichWebhookUncheckedUpdateInput>
    /**
     * Choose, which GiaoDichWebhook to update.
     */
    where: GiaoDichWebhookWhereUniqueInput
  }

  /**
   * GiaoDichWebhook updateMany
   */
  export type GiaoDichWebhookUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GiaoDichWebhooks.
     */
    data: XOR<GiaoDichWebhookUpdateManyMutationInput, GiaoDichWebhookUncheckedUpdateManyInput>
    /**
     * Filter which GiaoDichWebhooks to update
     */
    where?: GiaoDichWebhookWhereInput
    /**
     * Limit how many GiaoDichWebhooks to update.
     */
    limit?: number
  }

  /**
   * GiaoDichWebhook upsert
   */
  export type GiaoDichWebhookUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GiaoDichWebhook
     */
    select?: GiaoDichWebhookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GiaoDichWebhook
     */
    omit?: GiaoDichWebhookOmit<ExtArgs> | null
    /**
     * The filter to search for the GiaoDichWebhook to update in case it exists.
     */
    where: GiaoDichWebhookWhereUniqueInput
    /**
     * In case the GiaoDichWebhook found by the `where` argument doesn't exist, create a new GiaoDichWebhook with this data.
     */
    create: XOR<GiaoDichWebhookCreateInput, GiaoDichWebhookUncheckedCreateInput>
    /**
     * In case the GiaoDichWebhook was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GiaoDichWebhookUpdateInput, GiaoDichWebhookUncheckedUpdateInput>
  }

  /**
   * GiaoDichWebhook delete
   */
  export type GiaoDichWebhookDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GiaoDichWebhook
     */
    select?: GiaoDichWebhookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GiaoDichWebhook
     */
    omit?: GiaoDichWebhookOmit<ExtArgs> | null
    /**
     * Filter which GiaoDichWebhook to delete.
     */
    where: GiaoDichWebhookWhereUniqueInput
  }

  /**
   * GiaoDichWebhook deleteMany
   */
  export type GiaoDichWebhookDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GiaoDichWebhooks to delete
     */
    where?: GiaoDichWebhookWhereInput
    /**
     * Limit how many GiaoDichWebhooks to delete.
     */
    limit?: number
  }

  /**
   * GiaoDichWebhook without action
   */
  export type GiaoDichWebhookDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GiaoDichWebhook
     */
    select?: GiaoDichWebhookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GiaoDichWebhook
     */
    omit?: GiaoDichWebhookOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const BannerScalarFieldEnum: {
    ma_banner: 'ma_banner',
    ma_phim: 'ma_phim',
    hinh_anh: 'hinh_anh'
  };

  export type BannerScalarFieldEnum = (typeof BannerScalarFieldEnum)[keyof typeof BannerScalarFieldEnum]


  export const CumRapScalarFieldEnum: {
    ma_cum_rap: 'ma_cum_rap',
    ten_cum_rap: 'ten_cum_rap',
    dia_chi: 'dia_chi',
    ma_he_thong_rap: 'ma_he_thong_rap',
    khu_vuc: 'khu_vuc'
  };

  export type CumRapScalarFieldEnum = (typeof CumRapScalarFieldEnum)[keyof typeof CumRapScalarFieldEnum]


  export const DatVeScalarFieldEnum: {
    tai_khoan: 'tai_khoan',
    ma_lich_chieu: 'ma_lich_chieu',
    ma_ghe: 'ma_ghe',
    gia_ve: 'gia_ve',
    ma_hoa_don: 'ma_hoa_don',
    created_at: 'created_at'
  };

  export type DatVeScalarFieldEnum = (typeof DatVeScalarFieldEnum)[keyof typeof DatVeScalarFieldEnum]


  export const GheScalarFieldEnum: {
    ma_ghe: 'ma_ghe',
    ten_ghe: 'ten_ghe',
    loai_ghe: 'loai_ghe',
    ma_rap: 'ma_rap'
  };

  export type GheScalarFieldEnum = (typeof GheScalarFieldEnum)[keyof typeof GheScalarFieldEnum]


  export const HeThongRapScalarFieldEnum: {
    ma_he_thong_rap: 'ma_he_thong_rap',
    ten_he_thong_rap: 'ten_he_thong_rap',
    logo: 'logo'
  };

  export type HeThongRapScalarFieldEnum = (typeof HeThongRapScalarFieldEnum)[keyof typeof HeThongRapScalarFieldEnum]


  export const LichChieuScalarFieldEnum: {
    ma_lich_chieu: 'ma_lich_chieu',
    ma_rap: 'ma_rap',
    ma_phim: 'ma_phim',
    ngay_gio_chieu: 'ngay_gio_chieu',
    gia_ve: 'gia_ve'
  };

  export type LichChieuScalarFieldEnum = (typeof LichChieuScalarFieldEnum)[keyof typeof LichChieuScalarFieldEnum]


  export const NguoiDungScalarFieldEnum: {
    tai_khoan: 'tai_khoan',
    ho_ten: 'ho_ten',
    email: 'email',
    so_dt: 'so_dt',
    mat_khau: 'mat_khau',
    loai_nguoi_dung: 'loai_nguoi_dung',
    isDeleted: 'isDeleted'
  };

  export type NguoiDungScalarFieldEnum = (typeof NguoiDungScalarFieldEnum)[keyof typeof NguoiDungScalarFieldEnum]


  export const RefreshTokenScalarFieldEnum: {
    id: 'id',
    token: 'token',
    tai_khoan: 'tai_khoan',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt'
  };

  export type RefreshTokenScalarFieldEnum = (typeof RefreshTokenScalarFieldEnum)[keyof typeof RefreshTokenScalarFieldEnum]


  export const PhimScalarFieldEnum: {
    ma_phim: 'ma_phim',
    ten_phim: 'ten_phim',
    trailer: 'trailer',
    hinh_anh: 'hinh_anh',
    mo_ta: 'mo_ta',
    ngay_khoi_chieu: 'ngay_khoi_chieu',
    danh_gia: 'danh_gia',
    hot: 'hot',
    dang_chieu: 'dang_chieu',
    sap_chieu: 'sap_chieu',
    isDeleted: 'isDeleted'
  };

  export type PhimScalarFieldEnum = (typeof PhimScalarFieldEnum)[keyof typeof PhimScalarFieldEnum]


  export const RapPhimScalarFieldEnum: {
    ma_rap: 'ma_rap',
    ten_rap: 'ten_rap',
    ma_cum_rap: 'ma_cum_rap'
  };

  export type RapPhimScalarFieldEnum = (typeof RapPhimScalarFieldEnum)[keyof typeof RapPhimScalarFieldEnum]


  export const GiuChoScalarFieldEnum: {
    ma_giu_cho: 'ma_giu_cho',
    tai_khoan: 'tai_khoan',
    ma_lich_chieu: 'ma_lich_chieu',
    ma_ghe: 'ma_ghe',
    loai: 'loai',
    ma_hoa_don: 'ma_hoa_don',
    gia_ve: 'gia_ve',
    expire_at: 'expire_at',
    created_at: 'created_at'
  };

  export type GiuChoScalarFieldEnum = (typeof GiuChoScalarFieldEnum)[keyof typeof GiuChoScalarFieldEnum]


  export const HoaDonScalarFieldEnum: {
    ma_hoa_don: 'ma_hoa_don',
    tai_khoan: 'tai_khoan',
    ma_lich_chieu: 'ma_lich_chieu',
    tong_tien: 'tong_tien',
    created_at: 'created_at',
    checked_in_at: 'checked_in_at',
    trang_thai_thanh_toan: 'trang_thai_thanh_toan',
    phuong_thuc_thanh_toan: 'phuong_thuc_thanh_toan',
    ma_giao_dich_ngan_hang: 'ma_giao_dich_ngan_hang',
    so_tien_da_nhan: 'so_tien_da_nhan',
    thanh_toan_luc: 'thanh_toan_luc',
    het_han_luc: 'het_han_luc'
  };

  export type HoaDonScalarFieldEnum = (typeof HoaDonScalarFieldEnum)[keyof typeof HoaDonScalarFieldEnum]


  export const ComboScalarFieldEnum: {
    ma_combo: 'ma_combo',
    ten_combo: 'ten_combo',
    mo_ta: 'mo_ta',
    gia: 'gia',
    hinh_anh: 'hinh_anh',
    isDeleted: 'isDeleted'
  };

  export type ComboScalarFieldEnum = (typeof ComboScalarFieldEnum)[keyof typeof ComboScalarFieldEnum]


  export const HoaDonComboScalarFieldEnum: {
    ma_hoa_don: 'ma_hoa_don',
    ma_combo: 'ma_combo',
    so_luong: 'so_luong',
    don_gia: 'don_gia'
  };

  export type HoaDonComboScalarFieldEnum = (typeof HoaDonComboScalarFieldEnum)[keyof typeof HoaDonComboScalarFieldEnum]


  export const GiaoDichWebhookScalarFieldEnum: {
    ma_giao_dich_webhook: 'ma_giao_dich_webhook',
    nguon: 'nguon',
    raw_payload: 'raw_payload',
    ma_giao_dich_ngan_hang: 'ma_giao_dich_ngan_hang',
    so_tien: 'so_tien',
    noi_dung: 'noi_dung',
    ma_hoa_don_parse: 'ma_hoa_don_parse',
    ket_qua_xu_ly: 'ket_qua_xu_ly',
    ghi_chu: 'ghi_chu',
    created_at: 'created_at'
  };

  export type GiaoDichWebhookScalarFieldEnum = (typeof GiaoDichWebhookScalarFieldEnum)[keyof typeof GiaoDichWebhookScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const BannerOrderByRelevanceFieldEnum: {
    hinh_anh: 'hinh_anh'
  };

  export type BannerOrderByRelevanceFieldEnum = (typeof BannerOrderByRelevanceFieldEnum)[keyof typeof BannerOrderByRelevanceFieldEnum]


  export const CumRapOrderByRelevanceFieldEnum: {
    ten_cum_rap: 'ten_cum_rap',
    dia_chi: 'dia_chi',
    khu_vuc: 'khu_vuc'
  };

  export type CumRapOrderByRelevanceFieldEnum = (typeof CumRapOrderByRelevanceFieldEnum)[keyof typeof CumRapOrderByRelevanceFieldEnum]


  export const GheOrderByRelevanceFieldEnum: {
    ten_ghe: 'ten_ghe',
    loai_ghe: 'loai_ghe'
  };

  export type GheOrderByRelevanceFieldEnum = (typeof GheOrderByRelevanceFieldEnum)[keyof typeof GheOrderByRelevanceFieldEnum]


  export const HeThongRapOrderByRelevanceFieldEnum: {
    ten_he_thong_rap: 'ten_he_thong_rap',
    logo: 'logo'
  };

  export type HeThongRapOrderByRelevanceFieldEnum = (typeof HeThongRapOrderByRelevanceFieldEnum)[keyof typeof HeThongRapOrderByRelevanceFieldEnum]


  export const NguoiDungOrderByRelevanceFieldEnum: {
    ho_ten: 'ho_ten',
    email: 'email',
    so_dt: 'so_dt',
    mat_khau: 'mat_khau',
    loai_nguoi_dung: 'loai_nguoi_dung'
  };

  export type NguoiDungOrderByRelevanceFieldEnum = (typeof NguoiDungOrderByRelevanceFieldEnum)[keyof typeof NguoiDungOrderByRelevanceFieldEnum]


  export const RefreshTokenOrderByRelevanceFieldEnum: {
    token: 'token'
  };

  export type RefreshTokenOrderByRelevanceFieldEnum = (typeof RefreshTokenOrderByRelevanceFieldEnum)[keyof typeof RefreshTokenOrderByRelevanceFieldEnum]


  export const PhimOrderByRelevanceFieldEnum: {
    ten_phim: 'ten_phim',
    trailer: 'trailer',
    hinh_anh: 'hinh_anh',
    mo_ta: 'mo_ta'
  };

  export type PhimOrderByRelevanceFieldEnum = (typeof PhimOrderByRelevanceFieldEnum)[keyof typeof PhimOrderByRelevanceFieldEnum]


  export const RapPhimOrderByRelevanceFieldEnum: {
    ten_rap: 'ten_rap'
  };

  export type RapPhimOrderByRelevanceFieldEnum = (typeof RapPhimOrderByRelevanceFieldEnum)[keyof typeof RapPhimOrderByRelevanceFieldEnum]


  export const HoaDonOrderByRelevanceFieldEnum: {
    phuong_thuc_thanh_toan: 'phuong_thuc_thanh_toan',
    ma_giao_dich_ngan_hang: 'ma_giao_dich_ngan_hang'
  };

  export type HoaDonOrderByRelevanceFieldEnum = (typeof HoaDonOrderByRelevanceFieldEnum)[keyof typeof HoaDonOrderByRelevanceFieldEnum]


  export const ComboOrderByRelevanceFieldEnum: {
    ten_combo: 'ten_combo',
    mo_ta: 'mo_ta',
    hinh_anh: 'hinh_anh'
  };

  export type ComboOrderByRelevanceFieldEnum = (typeof ComboOrderByRelevanceFieldEnum)[keyof typeof ComboOrderByRelevanceFieldEnum]


  export const GiaoDichWebhookOrderByRelevanceFieldEnum: {
    nguon: 'nguon',
    raw_payload: 'raw_payload',
    ma_giao_dich_ngan_hang: 'ma_giao_dich_ngan_hang',
    noi_dung: 'noi_dung',
    ket_qua_xu_ly: 'ket_qua_xu_ly',
    ghi_chu: 'ghi_chu'
  };

  export type GiaoDichWebhookOrderByRelevanceFieldEnum = (typeof GiaoDichWebhookOrderByRelevanceFieldEnum)[keyof typeof GiaoDichWebhookOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'LoaiGiuCho'
   */
  export type EnumLoaiGiuChoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LoaiGiuCho'>
    


  /**
   * Reference to a field of type 'TrangThaiThanhToan'
   */
  export type EnumTrangThaiThanhToanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TrangThaiThanhToan'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type BannerWhereInput = {
    AND?: BannerWhereInput | BannerWhereInput[]
    OR?: BannerWhereInput[]
    NOT?: BannerWhereInput | BannerWhereInput[]
    ma_banner?: IntFilter<"Banner"> | number
    ma_phim?: IntNullableFilter<"Banner"> | number | null
    hinh_anh?: StringNullableFilter<"Banner"> | string | null
    Phim?: XOR<PhimNullableScalarRelationFilter, PhimWhereInput> | null
  }

  export type BannerOrderByWithRelationInput = {
    ma_banner?: SortOrder
    ma_phim?: SortOrderInput | SortOrder
    hinh_anh?: SortOrderInput | SortOrder
    Phim?: PhimOrderByWithRelationInput
    _relevance?: BannerOrderByRelevanceInput
  }

  export type BannerWhereUniqueInput = Prisma.AtLeast<{
    ma_banner?: number
    AND?: BannerWhereInput | BannerWhereInput[]
    OR?: BannerWhereInput[]
    NOT?: BannerWhereInput | BannerWhereInput[]
    ma_phim?: IntNullableFilter<"Banner"> | number | null
    hinh_anh?: StringNullableFilter<"Banner"> | string | null
    Phim?: XOR<PhimNullableScalarRelationFilter, PhimWhereInput> | null
  }, "ma_banner">

  export type BannerOrderByWithAggregationInput = {
    ma_banner?: SortOrder
    ma_phim?: SortOrderInput | SortOrder
    hinh_anh?: SortOrderInput | SortOrder
    _count?: BannerCountOrderByAggregateInput
    _avg?: BannerAvgOrderByAggregateInput
    _max?: BannerMaxOrderByAggregateInput
    _min?: BannerMinOrderByAggregateInput
    _sum?: BannerSumOrderByAggregateInput
  }

  export type BannerScalarWhereWithAggregatesInput = {
    AND?: BannerScalarWhereWithAggregatesInput | BannerScalarWhereWithAggregatesInput[]
    OR?: BannerScalarWhereWithAggregatesInput[]
    NOT?: BannerScalarWhereWithAggregatesInput | BannerScalarWhereWithAggregatesInput[]
    ma_banner?: IntWithAggregatesFilter<"Banner"> | number
    ma_phim?: IntNullableWithAggregatesFilter<"Banner"> | number | null
    hinh_anh?: StringNullableWithAggregatesFilter<"Banner"> | string | null
  }

  export type CumRapWhereInput = {
    AND?: CumRapWhereInput | CumRapWhereInput[]
    OR?: CumRapWhereInput[]
    NOT?: CumRapWhereInput | CumRapWhereInput[]
    ma_cum_rap?: IntFilter<"CumRap"> | number
    ten_cum_rap?: StringNullableFilter<"CumRap"> | string | null
    dia_chi?: StringNullableFilter<"CumRap"> | string | null
    ma_he_thong_rap?: IntNullableFilter<"CumRap"> | number | null
    khu_vuc?: StringNullableFilter<"CumRap"> | string | null
    HeThongRap?: XOR<HeThongRapNullableScalarRelationFilter, HeThongRapWhereInput> | null
    RapPhim?: RapPhimListRelationFilter
  }

  export type CumRapOrderByWithRelationInput = {
    ma_cum_rap?: SortOrder
    ten_cum_rap?: SortOrderInput | SortOrder
    dia_chi?: SortOrderInput | SortOrder
    ma_he_thong_rap?: SortOrderInput | SortOrder
    khu_vuc?: SortOrderInput | SortOrder
    HeThongRap?: HeThongRapOrderByWithRelationInput
    RapPhim?: RapPhimOrderByRelationAggregateInput
    _relevance?: CumRapOrderByRelevanceInput
  }

  export type CumRapWhereUniqueInput = Prisma.AtLeast<{
    ma_cum_rap?: number
    AND?: CumRapWhereInput | CumRapWhereInput[]
    OR?: CumRapWhereInput[]
    NOT?: CumRapWhereInput | CumRapWhereInput[]
    ten_cum_rap?: StringNullableFilter<"CumRap"> | string | null
    dia_chi?: StringNullableFilter<"CumRap"> | string | null
    ma_he_thong_rap?: IntNullableFilter<"CumRap"> | number | null
    khu_vuc?: StringNullableFilter<"CumRap"> | string | null
    HeThongRap?: XOR<HeThongRapNullableScalarRelationFilter, HeThongRapWhereInput> | null
    RapPhim?: RapPhimListRelationFilter
  }, "ma_cum_rap">

  export type CumRapOrderByWithAggregationInput = {
    ma_cum_rap?: SortOrder
    ten_cum_rap?: SortOrderInput | SortOrder
    dia_chi?: SortOrderInput | SortOrder
    ma_he_thong_rap?: SortOrderInput | SortOrder
    khu_vuc?: SortOrderInput | SortOrder
    _count?: CumRapCountOrderByAggregateInput
    _avg?: CumRapAvgOrderByAggregateInput
    _max?: CumRapMaxOrderByAggregateInput
    _min?: CumRapMinOrderByAggregateInput
    _sum?: CumRapSumOrderByAggregateInput
  }

  export type CumRapScalarWhereWithAggregatesInput = {
    AND?: CumRapScalarWhereWithAggregatesInput | CumRapScalarWhereWithAggregatesInput[]
    OR?: CumRapScalarWhereWithAggregatesInput[]
    NOT?: CumRapScalarWhereWithAggregatesInput | CumRapScalarWhereWithAggregatesInput[]
    ma_cum_rap?: IntWithAggregatesFilter<"CumRap"> | number
    ten_cum_rap?: StringNullableWithAggregatesFilter<"CumRap"> | string | null
    dia_chi?: StringNullableWithAggregatesFilter<"CumRap"> | string | null
    ma_he_thong_rap?: IntNullableWithAggregatesFilter<"CumRap"> | number | null
    khu_vuc?: StringNullableWithAggregatesFilter<"CumRap"> | string | null
  }

  export type DatVeWhereInput = {
    AND?: DatVeWhereInput | DatVeWhereInput[]
    OR?: DatVeWhereInput[]
    NOT?: DatVeWhereInput | DatVeWhereInput[]
    tai_khoan?: IntFilter<"DatVe"> | number
    ma_lich_chieu?: IntFilter<"DatVe"> | number
    ma_ghe?: IntFilter<"DatVe"> | number
    gia_ve?: IntFilter<"DatVe"> | number
    ma_hoa_don?: IntNullableFilter<"DatVe"> | number | null
    created_at?: DateTimeNullableFilter<"DatVe"> | Date | string | null
    NguoiDung?: XOR<NguoiDungScalarRelationFilter, NguoiDungWhereInput>
    LichChieu?: XOR<LichChieuScalarRelationFilter, LichChieuWhereInput>
    Ghe?: XOR<GheScalarRelationFilter, GheWhereInput>
    HoaDon?: XOR<HoaDonNullableScalarRelationFilter, HoaDonWhereInput> | null
  }

  export type DatVeOrderByWithRelationInput = {
    tai_khoan?: SortOrder
    ma_lich_chieu?: SortOrder
    ma_ghe?: SortOrder
    gia_ve?: SortOrder
    ma_hoa_don?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    NguoiDung?: NguoiDungOrderByWithRelationInput
    LichChieu?: LichChieuOrderByWithRelationInput
    Ghe?: GheOrderByWithRelationInput
    HoaDon?: HoaDonOrderByWithRelationInput
  }

  export type DatVeWhereUniqueInput = Prisma.AtLeast<{
    ma_lich_chieu_ma_ghe?: DatVeMa_lich_chieuMa_gheCompoundUniqueInput
    tai_khoan_ma_lich_chieu_ma_ghe?: DatVeTai_khoanMa_lich_chieuMa_gheCompoundUniqueInput
    AND?: DatVeWhereInput | DatVeWhereInput[]
    OR?: DatVeWhereInput[]
    NOT?: DatVeWhereInput | DatVeWhereInput[]
    tai_khoan?: IntFilter<"DatVe"> | number
    ma_lich_chieu?: IntFilter<"DatVe"> | number
    ma_ghe?: IntFilter<"DatVe"> | number
    gia_ve?: IntFilter<"DatVe"> | number
    ma_hoa_don?: IntNullableFilter<"DatVe"> | number | null
    created_at?: DateTimeNullableFilter<"DatVe"> | Date | string | null
    NguoiDung?: XOR<NguoiDungScalarRelationFilter, NguoiDungWhereInput>
    LichChieu?: XOR<LichChieuScalarRelationFilter, LichChieuWhereInput>
    Ghe?: XOR<GheScalarRelationFilter, GheWhereInput>
    HoaDon?: XOR<HoaDonNullableScalarRelationFilter, HoaDonWhereInput> | null
  }, "tai_khoan_ma_lich_chieu_ma_ghe" | "ma_lich_chieu_ma_ghe">

  export type DatVeOrderByWithAggregationInput = {
    tai_khoan?: SortOrder
    ma_lich_chieu?: SortOrder
    ma_ghe?: SortOrder
    gia_ve?: SortOrder
    ma_hoa_don?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: DatVeCountOrderByAggregateInput
    _avg?: DatVeAvgOrderByAggregateInput
    _max?: DatVeMaxOrderByAggregateInput
    _min?: DatVeMinOrderByAggregateInput
    _sum?: DatVeSumOrderByAggregateInput
  }

  export type DatVeScalarWhereWithAggregatesInput = {
    AND?: DatVeScalarWhereWithAggregatesInput | DatVeScalarWhereWithAggregatesInput[]
    OR?: DatVeScalarWhereWithAggregatesInput[]
    NOT?: DatVeScalarWhereWithAggregatesInput | DatVeScalarWhereWithAggregatesInput[]
    tai_khoan?: IntWithAggregatesFilter<"DatVe"> | number
    ma_lich_chieu?: IntWithAggregatesFilter<"DatVe"> | number
    ma_ghe?: IntWithAggregatesFilter<"DatVe"> | number
    gia_ve?: IntWithAggregatesFilter<"DatVe"> | number
    ma_hoa_don?: IntNullableWithAggregatesFilter<"DatVe"> | number | null
    created_at?: DateTimeNullableWithAggregatesFilter<"DatVe"> | Date | string | null
  }

  export type GheWhereInput = {
    AND?: GheWhereInput | GheWhereInput[]
    OR?: GheWhereInput[]
    NOT?: GheWhereInput | GheWhereInput[]
    ma_ghe?: IntFilter<"Ghe"> | number
    ten_ghe?: StringNullableFilter<"Ghe"> | string | null
    loai_ghe?: StringNullableFilter<"Ghe"> | string | null
    ma_rap?: IntNullableFilter<"Ghe"> | number | null
    DatVe?: DatVeListRelationFilter
    RapPhim?: XOR<RapPhimNullableScalarRelationFilter, RapPhimWhereInput> | null
    GiuCho?: GiuChoListRelationFilter
  }

  export type GheOrderByWithRelationInput = {
    ma_ghe?: SortOrder
    ten_ghe?: SortOrderInput | SortOrder
    loai_ghe?: SortOrderInput | SortOrder
    ma_rap?: SortOrderInput | SortOrder
    DatVe?: DatVeOrderByRelationAggregateInput
    RapPhim?: RapPhimOrderByWithRelationInput
    GiuCho?: GiuChoOrderByRelationAggregateInput
    _relevance?: GheOrderByRelevanceInput
  }

  export type GheWhereUniqueInput = Prisma.AtLeast<{
    ma_ghe?: number
    AND?: GheWhereInput | GheWhereInput[]
    OR?: GheWhereInput[]
    NOT?: GheWhereInput | GheWhereInput[]
    ten_ghe?: StringNullableFilter<"Ghe"> | string | null
    loai_ghe?: StringNullableFilter<"Ghe"> | string | null
    ma_rap?: IntNullableFilter<"Ghe"> | number | null
    DatVe?: DatVeListRelationFilter
    RapPhim?: XOR<RapPhimNullableScalarRelationFilter, RapPhimWhereInput> | null
    GiuCho?: GiuChoListRelationFilter
  }, "ma_ghe">

  export type GheOrderByWithAggregationInput = {
    ma_ghe?: SortOrder
    ten_ghe?: SortOrderInput | SortOrder
    loai_ghe?: SortOrderInput | SortOrder
    ma_rap?: SortOrderInput | SortOrder
    _count?: GheCountOrderByAggregateInput
    _avg?: GheAvgOrderByAggregateInput
    _max?: GheMaxOrderByAggregateInput
    _min?: GheMinOrderByAggregateInput
    _sum?: GheSumOrderByAggregateInput
  }

  export type GheScalarWhereWithAggregatesInput = {
    AND?: GheScalarWhereWithAggregatesInput | GheScalarWhereWithAggregatesInput[]
    OR?: GheScalarWhereWithAggregatesInput[]
    NOT?: GheScalarWhereWithAggregatesInput | GheScalarWhereWithAggregatesInput[]
    ma_ghe?: IntWithAggregatesFilter<"Ghe"> | number
    ten_ghe?: StringNullableWithAggregatesFilter<"Ghe"> | string | null
    loai_ghe?: StringNullableWithAggregatesFilter<"Ghe"> | string | null
    ma_rap?: IntNullableWithAggregatesFilter<"Ghe"> | number | null
  }

  export type HeThongRapWhereInput = {
    AND?: HeThongRapWhereInput | HeThongRapWhereInput[]
    OR?: HeThongRapWhereInput[]
    NOT?: HeThongRapWhereInput | HeThongRapWhereInput[]
    ma_he_thong_rap?: IntFilter<"HeThongRap"> | number
    ten_he_thong_rap?: StringNullableFilter<"HeThongRap"> | string | null
    logo?: StringNullableFilter<"HeThongRap"> | string | null
    CumRap?: CumRapListRelationFilter
  }

  export type HeThongRapOrderByWithRelationInput = {
    ma_he_thong_rap?: SortOrder
    ten_he_thong_rap?: SortOrderInput | SortOrder
    logo?: SortOrderInput | SortOrder
    CumRap?: CumRapOrderByRelationAggregateInput
    _relevance?: HeThongRapOrderByRelevanceInput
  }

  export type HeThongRapWhereUniqueInput = Prisma.AtLeast<{
    ma_he_thong_rap?: number
    AND?: HeThongRapWhereInput | HeThongRapWhereInput[]
    OR?: HeThongRapWhereInput[]
    NOT?: HeThongRapWhereInput | HeThongRapWhereInput[]
    ten_he_thong_rap?: StringNullableFilter<"HeThongRap"> | string | null
    logo?: StringNullableFilter<"HeThongRap"> | string | null
    CumRap?: CumRapListRelationFilter
  }, "ma_he_thong_rap">

  export type HeThongRapOrderByWithAggregationInput = {
    ma_he_thong_rap?: SortOrder
    ten_he_thong_rap?: SortOrderInput | SortOrder
    logo?: SortOrderInput | SortOrder
    _count?: HeThongRapCountOrderByAggregateInput
    _avg?: HeThongRapAvgOrderByAggregateInput
    _max?: HeThongRapMaxOrderByAggregateInput
    _min?: HeThongRapMinOrderByAggregateInput
    _sum?: HeThongRapSumOrderByAggregateInput
  }

  export type HeThongRapScalarWhereWithAggregatesInput = {
    AND?: HeThongRapScalarWhereWithAggregatesInput | HeThongRapScalarWhereWithAggregatesInput[]
    OR?: HeThongRapScalarWhereWithAggregatesInput[]
    NOT?: HeThongRapScalarWhereWithAggregatesInput | HeThongRapScalarWhereWithAggregatesInput[]
    ma_he_thong_rap?: IntWithAggregatesFilter<"HeThongRap"> | number
    ten_he_thong_rap?: StringNullableWithAggregatesFilter<"HeThongRap"> | string | null
    logo?: StringNullableWithAggregatesFilter<"HeThongRap"> | string | null
  }

  export type LichChieuWhereInput = {
    AND?: LichChieuWhereInput | LichChieuWhereInput[]
    OR?: LichChieuWhereInput[]
    NOT?: LichChieuWhereInput | LichChieuWhereInput[]
    ma_lich_chieu?: IntFilter<"LichChieu"> | number
    ma_rap?: IntNullableFilter<"LichChieu"> | number | null
    ma_phim?: IntNullableFilter<"LichChieu"> | number | null
    ngay_gio_chieu?: DateTimeNullableFilter<"LichChieu"> | Date | string | null
    gia_ve?: IntNullableFilter<"LichChieu"> | number | null
    DatVe?: DatVeListRelationFilter
    GiuCho?: GiuChoListRelationFilter
    HoaDon?: HoaDonListRelationFilter
    RapPhim?: XOR<RapPhimNullableScalarRelationFilter, RapPhimWhereInput> | null
    Phim?: XOR<PhimNullableScalarRelationFilter, PhimWhereInput> | null
  }

  export type LichChieuOrderByWithRelationInput = {
    ma_lich_chieu?: SortOrder
    ma_rap?: SortOrderInput | SortOrder
    ma_phim?: SortOrderInput | SortOrder
    ngay_gio_chieu?: SortOrderInput | SortOrder
    gia_ve?: SortOrderInput | SortOrder
    DatVe?: DatVeOrderByRelationAggregateInput
    GiuCho?: GiuChoOrderByRelationAggregateInput
    HoaDon?: HoaDonOrderByRelationAggregateInput
    RapPhim?: RapPhimOrderByWithRelationInput
    Phim?: PhimOrderByWithRelationInput
  }

  export type LichChieuWhereUniqueInput = Prisma.AtLeast<{
    ma_lich_chieu?: number
    AND?: LichChieuWhereInput | LichChieuWhereInput[]
    OR?: LichChieuWhereInput[]
    NOT?: LichChieuWhereInput | LichChieuWhereInput[]
    ma_rap?: IntNullableFilter<"LichChieu"> | number | null
    ma_phim?: IntNullableFilter<"LichChieu"> | number | null
    ngay_gio_chieu?: DateTimeNullableFilter<"LichChieu"> | Date | string | null
    gia_ve?: IntNullableFilter<"LichChieu"> | number | null
    DatVe?: DatVeListRelationFilter
    GiuCho?: GiuChoListRelationFilter
    HoaDon?: HoaDonListRelationFilter
    RapPhim?: XOR<RapPhimNullableScalarRelationFilter, RapPhimWhereInput> | null
    Phim?: XOR<PhimNullableScalarRelationFilter, PhimWhereInput> | null
  }, "ma_lich_chieu">

  export type LichChieuOrderByWithAggregationInput = {
    ma_lich_chieu?: SortOrder
    ma_rap?: SortOrderInput | SortOrder
    ma_phim?: SortOrderInput | SortOrder
    ngay_gio_chieu?: SortOrderInput | SortOrder
    gia_ve?: SortOrderInput | SortOrder
    _count?: LichChieuCountOrderByAggregateInput
    _avg?: LichChieuAvgOrderByAggregateInput
    _max?: LichChieuMaxOrderByAggregateInput
    _min?: LichChieuMinOrderByAggregateInput
    _sum?: LichChieuSumOrderByAggregateInput
  }

  export type LichChieuScalarWhereWithAggregatesInput = {
    AND?: LichChieuScalarWhereWithAggregatesInput | LichChieuScalarWhereWithAggregatesInput[]
    OR?: LichChieuScalarWhereWithAggregatesInput[]
    NOT?: LichChieuScalarWhereWithAggregatesInput | LichChieuScalarWhereWithAggregatesInput[]
    ma_lich_chieu?: IntWithAggregatesFilter<"LichChieu"> | number
    ma_rap?: IntNullableWithAggregatesFilter<"LichChieu"> | number | null
    ma_phim?: IntNullableWithAggregatesFilter<"LichChieu"> | number | null
    ngay_gio_chieu?: DateTimeNullableWithAggregatesFilter<"LichChieu"> | Date | string | null
    gia_ve?: IntNullableWithAggregatesFilter<"LichChieu"> | number | null
  }

  export type NguoiDungWhereInput = {
    AND?: NguoiDungWhereInput | NguoiDungWhereInput[]
    OR?: NguoiDungWhereInput[]
    NOT?: NguoiDungWhereInput | NguoiDungWhereInput[]
    tai_khoan?: IntFilter<"NguoiDung"> | number
    ho_ten?: StringNullableFilter<"NguoiDung"> | string | null
    email?: StringNullableFilter<"NguoiDung"> | string | null
    so_dt?: StringNullableFilter<"NguoiDung"> | string | null
    mat_khau?: StringNullableFilter<"NguoiDung"> | string | null
    loai_nguoi_dung?: StringNullableFilter<"NguoiDung"> | string | null
    isDeleted?: BoolNullableFilter<"NguoiDung"> | boolean | null
    DatVe?: DatVeListRelationFilter
    GiuCho?: GiuChoListRelationFilter
    HoaDon?: HoaDonListRelationFilter
    RefreshToken?: RefreshTokenListRelationFilter
  }

  export type NguoiDungOrderByWithRelationInput = {
    tai_khoan?: SortOrder
    ho_ten?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    so_dt?: SortOrderInput | SortOrder
    mat_khau?: SortOrderInput | SortOrder
    loai_nguoi_dung?: SortOrderInput | SortOrder
    isDeleted?: SortOrderInput | SortOrder
    DatVe?: DatVeOrderByRelationAggregateInput
    GiuCho?: GiuChoOrderByRelationAggregateInput
    HoaDon?: HoaDonOrderByRelationAggregateInput
    RefreshToken?: RefreshTokenOrderByRelationAggregateInput
    _relevance?: NguoiDungOrderByRelevanceInput
  }

  export type NguoiDungWhereUniqueInput = Prisma.AtLeast<{
    tai_khoan?: number
    email?: string
    AND?: NguoiDungWhereInput | NguoiDungWhereInput[]
    OR?: NguoiDungWhereInput[]
    NOT?: NguoiDungWhereInput | NguoiDungWhereInput[]
    ho_ten?: StringNullableFilter<"NguoiDung"> | string | null
    so_dt?: StringNullableFilter<"NguoiDung"> | string | null
    mat_khau?: StringNullableFilter<"NguoiDung"> | string | null
    loai_nguoi_dung?: StringNullableFilter<"NguoiDung"> | string | null
    isDeleted?: BoolNullableFilter<"NguoiDung"> | boolean | null
    DatVe?: DatVeListRelationFilter
    GiuCho?: GiuChoListRelationFilter
    HoaDon?: HoaDonListRelationFilter
    RefreshToken?: RefreshTokenListRelationFilter
  }, "tai_khoan" | "email">

  export type NguoiDungOrderByWithAggregationInput = {
    tai_khoan?: SortOrder
    ho_ten?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    so_dt?: SortOrderInput | SortOrder
    mat_khau?: SortOrderInput | SortOrder
    loai_nguoi_dung?: SortOrderInput | SortOrder
    isDeleted?: SortOrderInput | SortOrder
    _count?: NguoiDungCountOrderByAggregateInput
    _avg?: NguoiDungAvgOrderByAggregateInput
    _max?: NguoiDungMaxOrderByAggregateInput
    _min?: NguoiDungMinOrderByAggregateInput
    _sum?: NguoiDungSumOrderByAggregateInput
  }

  export type NguoiDungScalarWhereWithAggregatesInput = {
    AND?: NguoiDungScalarWhereWithAggregatesInput | NguoiDungScalarWhereWithAggregatesInput[]
    OR?: NguoiDungScalarWhereWithAggregatesInput[]
    NOT?: NguoiDungScalarWhereWithAggregatesInput | NguoiDungScalarWhereWithAggregatesInput[]
    tai_khoan?: IntWithAggregatesFilter<"NguoiDung"> | number
    ho_ten?: StringNullableWithAggregatesFilter<"NguoiDung"> | string | null
    email?: StringNullableWithAggregatesFilter<"NguoiDung"> | string | null
    so_dt?: StringNullableWithAggregatesFilter<"NguoiDung"> | string | null
    mat_khau?: StringNullableWithAggregatesFilter<"NguoiDung"> | string | null
    loai_nguoi_dung?: StringNullableWithAggregatesFilter<"NguoiDung"> | string | null
    isDeleted?: BoolNullableWithAggregatesFilter<"NguoiDung"> | boolean | null
  }

  export type RefreshTokenWhereInput = {
    AND?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    OR?: RefreshTokenWhereInput[]
    NOT?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    id?: IntFilter<"RefreshToken"> | number
    token?: StringFilter<"RefreshToken"> | string
    tai_khoan?: IntFilter<"RefreshToken"> | number
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
    NguoiDung?: XOR<NguoiDungScalarRelationFilter, NguoiDungWhereInput>
  }

  export type RefreshTokenOrderByWithRelationInput = {
    id?: SortOrder
    token?: SortOrder
    tai_khoan?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    NguoiDung?: NguoiDungOrderByWithRelationInput
    _relevance?: RefreshTokenOrderByRelevanceInput
  }

  export type RefreshTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    token?: string
    AND?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    OR?: RefreshTokenWhereInput[]
    NOT?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    tai_khoan?: IntFilter<"RefreshToken"> | number
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
    NguoiDung?: XOR<NguoiDungScalarRelationFilter, NguoiDungWhereInput>
  }, "id" | "token">

  export type RefreshTokenOrderByWithAggregationInput = {
    id?: SortOrder
    token?: SortOrder
    tai_khoan?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    _count?: RefreshTokenCountOrderByAggregateInput
    _avg?: RefreshTokenAvgOrderByAggregateInput
    _max?: RefreshTokenMaxOrderByAggregateInput
    _min?: RefreshTokenMinOrderByAggregateInput
    _sum?: RefreshTokenSumOrderByAggregateInput
  }

  export type RefreshTokenScalarWhereWithAggregatesInput = {
    AND?: RefreshTokenScalarWhereWithAggregatesInput | RefreshTokenScalarWhereWithAggregatesInput[]
    OR?: RefreshTokenScalarWhereWithAggregatesInput[]
    NOT?: RefreshTokenScalarWhereWithAggregatesInput | RefreshTokenScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RefreshToken"> | number
    token?: StringWithAggregatesFilter<"RefreshToken"> | string
    tai_khoan?: IntWithAggregatesFilter<"RefreshToken"> | number
    expiresAt?: DateTimeWithAggregatesFilter<"RefreshToken"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"RefreshToken"> | Date | string
  }

  export type PhimWhereInput = {
    AND?: PhimWhereInput | PhimWhereInput[]
    OR?: PhimWhereInput[]
    NOT?: PhimWhereInput | PhimWhereInput[]
    ma_phim?: IntFilter<"Phim"> | number
    ten_phim?: StringNullableFilter<"Phim"> | string | null
    trailer?: StringNullableFilter<"Phim"> | string | null
    hinh_anh?: StringNullableFilter<"Phim"> | string | null
    mo_ta?: StringNullableFilter<"Phim"> | string | null
    ngay_khoi_chieu?: DateTimeNullableFilter<"Phim"> | Date | string | null
    danh_gia?: IntNullableFilter<"Phim"> | number | null
    hot?: BoolNullableFilter<"Phim"> | boolean | null
    dang_chieu?: BoolNullableFilter<"Phim"> | boolean | null
    sap_chieu?: BoolNullableFilter<"Phim"> | boolean | null
    isDeleted?: BoolNullableFilter<"Phim"> | boolean | null
    Banner?: BannerListRelationFilter
    LichChieu?: LichChieuListRelationFilter
  }

  export type PhimOrderByWithRelationInput = {
    ma_phim?: SortOrder
    ten_phim?: SortOrderInput | SortOrder
    trailer?: SortOrderInput | SortOrder
    hinh_anh?: SortOrderInput | SortOrder
    mo_ta?: SortOrderInput | SortOrder
    ngay_khoi_chieu?: SortOrderInput | SortOrder
    danh_gia?: SortOrderInput | SortOrder
    hot?: SortOrderInput | SortOrder
    dang_chieu?: SortOrderInput | SortOrder
    sap_chieu?: SortOrderInput | SortOrder
    isDeleted?: SortOrderInput | SortOrder
    Banner?: BannerOrderByRelationAggregateInput
    LichChieu?: LichChieuOrderByRelationAggregateInput
    _relevance?: PhimOrderByRelevanceInput
  }

  export type PhimWhereUniqueInput = Prisma.AtLeast<{
    ma_phim?: number
    AND?: PhimWhereInput | PhimWhereInput[]
    OR?: PhimWhereInput[]
    NOT?: PhimWhereInput | PhimWhereInput[]
    ten_phim?: StringNullableFilter<"Phim"> | string | null
    trailer?: StringNullableFilter<"Phim"> | string | null
    hinh_anh?: StringNullableFilter<"Phim"> | string | null
    mo_ta?: StringNullableFilter<"Phim"> | string | null
    ngay_khoi_chieu?: DateTimeNullableFilter<"Phim"> | Date | string | null
    danh_gia?: IntNullableFilter<"Phim"> | number | null
    hot?: BoolNullableFilter<"Phim"> | boolean | null
    dang_chieu?: BoolNullableFilter<"Phim"> | boolean | null
    sap_chieu?: BoolNullableFilter<"Phim"> | boolean | null
    isDeleted?: BoolNullableFilter<"Phim"> | boolean | null
    Banner?: BannerListRelationFilter
    LichChieu?: LichChieuListRelationFilter
  }, "ma_phim">

  export type PhimOrderByWithAggregationInput = {
    ma_phim?: SortOrder
    ten_phim?: SortOrderInput | SortOrder
    trailer?: SortOrderInput | SortOrder
    hinh_anh?: SortOrderInput | SortOrder
    mo_ta?: SortOrderInput | SortOrder
    ngay_khoi_chieu?: SortOrderInput | SortOrder
    danh_gia?: SortOrderInput | SortOrder
    hot?: SortOrderInput | SortOrder
    dang_chieu?: SortOrderInput | SortOrder
    sap_chieu?: SortOrderInput | SortOrder
    isDeleted?: SortOrderInput | SortOrder
    _count?: PhimCountOrderByAggregateInput
    _avg?: PhimAvgOrderByAggregateInput
    _max?: PhimMaxOrderByAggregateInput
    _min?: PhimMinOrderByAggregateInput
    _sum?: PhimSumOrderByAggregateInput
  }

  export type PhimScalarWhereWithAggregatesInput = {
    AND?: PhimScalarWhereWithAggregatesInput | PhimScalarWhereWithAggregatesInput[]
    OR?: PhimScalarWhereWithAggregatesInput[]
    NOT?: PhimScalarWhereWithAggregatesInput | PhimScalarWhereWithAggregatesInput[]
    ma_phim?: IntWithAggregatesFilter<"Phim"> | number
    ten_phim?: StringNullableWithAggregatesFilter<"Phim"> | string | null
    trailer?: StringNullableWithAggregatesFilter<"Phim"> | string | null
    hinh_anh?: StringNullableWithAggregatesFilter<"Phim"> | string | null
    mo_ta?: StringNullableWithAggregatesFilter<"Phim"> | string | null
    ngay_khoi_chieu?: DateTimeNullableWithAggregatesFilter<"Phim"> | Date | string | null
    danh_gia?: IntNullableWithAggregatesFilter<"Phim"> | number | null
    hot?: BoolNullableWithAggregatesFilter<"Phim"> | boolean | null
    dang_chieu?: BoolNullableWithAggregatesFilter<"Phim"> | boolean | null
    sap_chieu?: BoolNullableWithAggregatesFilter<"Phim"> | boolean | null
    isDeleted?: BoolNullableWithAggregatesFilter<"Phim"> | boolean | null
  }

  export type RapPhimWhereInput = {
    AND?: RapPhimWhereInput | RapPhimWhereInput[]
    OR?: RapPhimWhereInput[]
    NOT?: RapPhimWhereInput | RapPhimWhereInput[]
    ma_rap?: IntFilter<"RapPhim"> | number
    ten_rap?: StringNullableFilter<"RapPhim"> | string | null
    ma_cum_rap?: IntNullableFilter<"RapPhim"> | number | null
    Ghe?: GheListRelationFilter
    LichChieu?: LichChieuListRelationFilter
    CumRap?: XOR<CumRapNullableScalarRelationFilter, CumRapWhereInput> | null
  }

  export type RapPhimOrderByWithRelationInput = {
    ma_rap?: SortOrder
    ten_rap?: SortOrderInput | SortOrder
    ma_cum_rap?: SortOrderInput | SortOrder
    Ghe?: GheOrderByRelationAggregateInput
    LichChieu?: LichChieuOrderByRelationAggregateInput
    CumRap?: CumRapOrderByWithRelationInput
    _relevance?: RapPhimOrderByRelevanceInput
  }

  export type RapPhimWhereUniqueInput = Prisma.AtLeast<{
    ma_rap?: number
    AND?: RapPhimWhereInput | RapPhimWhereInput[]
    OR?: RapPhimWhereInput[]
    NOT?: RapPhimWhereInput | RapPhimWhereInput[]
    ten_rap?: StringNullableFilter<"RapPhim"> | string | null
    ma_cum_rap?: IntNullableFilter<"RapPhim"> | number | null
    Ghe?: GheListRelationFilter
    LichChieu?: LichChieuListRelationFilter
    CumRap?: XOR<CumRapNullableScalarRelationFilter, CumRapWhereInput> | null
  }, "ma_rap">

  export type RapPhimOrderByWithAggregationInput = {
    ma_rap?: SortOrder
    ten_rap?: SortOrderInput | SortOrder
    ma_cum_rap?: SortOrderInput | SortOrder
    _count?: RapPhimCountOrderByAggregateInput
    _avg?: RapPhimAvgOrderByAggregateInput
    _max?: RapPhimMaxOrderByAggregateInput
    _min?: RapPhimMinOrderByAggregateInput
    _sum?: RapPhimSumOrderByAggregateInput
  }

  export type RapPhimScalarWhereWithAggregatesInput = {
    AND?: RapPhimScalarWhereWithAggregatesInput | RapPhimScalarWhereWithAggregatesInput[]
    OR?: RapPhimScalarWhereWithAggregatesInput[]
    NOT?: RapPhimScalarWhereWithAggregatesInput | RapPhimScalarWhereWithAggregatesInput[]
    ma_rap?: IntWithAggregatesFilter<"RapPhim"> | number
    ten_rap?: StringNullableWithAggregatesFilter<"RapPhim"> | string | null
    ma_cum_rap?: IntNullableWithAggregatesFilter<"RapPhim"> | number | null
  }

  export type GiuChoWhereInput = {
    AND?: GiuChoWhereInput | GiuChoWhereInput[]
    OR?: GiuChoWhereInput[]
    NOT?: GiuChoWhereInput | GiuChoWhereInput[]
    ma_giu_cho?: IntFilter<"GiuCho"> | number
    tai_khoan?: IntFilter<"GiuCho"> | number
    ma_lich_chieu?: IntFilter<"GiuCho"> | number
    ma_ghe?: IntFilter<"GiuCho"> | number
    loai?: EnumLoaiGiuChoFilter<"GiuCho"> | $Enums.LoaiGiuCho
    ma_hoa_don?: IntNullableFilter<"GiuCho"> | number | null
    gia_ve?: IntNullableFilter<"GiuCho"> | number | null
    expire_at?: DateTimeFilter<"GiuCho"> | Date | string
    created_at?: DateTimeNullableFilter<"GiuCho"> | Date | string | null
    Ghe?: XOR<GheScalarRelationFilter, GheWhereInput>
    LichChieu?: XOR<LichChieuScalarRelationFilter, LichChieuWhereInput>
    NguoiDung?: XOR<NguoiDungScalarRelationFilter, NguoiDungWhereInput>
    HoaDon?: XOR<HoaDonNullableScalarRelationFilter, HoaDonWhereInput> | null
  }

  export type GiuChoOrderByWithRelationInput = {
    ma_giu_cho?: SortOrder
    tai_khoan?: SortOrder
    ma_lich_chieu?: SortOrder
    ma_ghe?: SortOrder
    loai?: SortOrder
    ma_hoa_don?: SortOrderInput | SortOrder
    gia_ve?: SortOrderInput | SortOrder
    expire_at?: SortOrder
    created_at?: SortOrderInput | SortOrder
    Ghe?: GheOrderByWithRelationInput
    LichChieu?: LichChieuOrderByWithRelationInput
    NguoiDung?: NguoiDungOrderByWithRelationInput
    HoaDon?: HoaDonOrderByWithRelationInput
  }

  export type GiuChoWhereUniqueInput = Prisma.AtLeast<{
    ma_giu_cho?: number
    ma_lich_chieu_ma_ghe?: GiuChoMa_lich_chieuMa_gheCompoundUniqueInput
    AND?: GiuChoWhereInput | GiuChoWhereInput[]
    OR?: GiuChoWhereInput[]
    NOT?: GiuChoWhereInput | GiuChoWhereInput[]
    tai_khoan?: IntFilter<"GiuCho"> | number
    ma_lich_chieu?: IntFilter<"GiuCho"> | number
    ma_ghe?: IntFilter<"GiuCho"> | number
    loai?: EnumLoaiGiuChoFilter<"GiuCho"> | $Enums.LoaiGiuCho
    ma_hoa_don?: IntNullableFilter<"GiuCho"> | number | null
    gia_ve?: IntNullableFilter<"GiuCho"> | number | null
    expire_at?: DateTimeFilter<"GiuCho"> | Date | string
    created_at?: DateTimeNullableFilter<"GiuCho"> | Date | string | null
    Ghe?: XOR<GheScalarRelationFilter, GheWhereInput>
    LichChieu?: XOR<LichChieuScalarRelationFilter, LichChieuWhereInput>
    NguoiDung?: XOR<NguoiDungScalarRelationFilter, NguoiDungWhereInput>
    HoaDon?: XOR<HoaDonNullableScalarRelationFilter, HoaDonWhereInput> | null
  }, "ma_giu_cho" | "ma_lich_chieu_ma_ghe">

  export type GiuChoOrderByWithAggregationInput = {
    ma_giu_cho?: SortOrder
    tai_khoan?: SortOrder
    ma_lich_chieu?: SortOrder
    ma_ghe?: SortOrder
    loai?: SortOrder
    ma_hoa_don?: SortOrderInput | SortOrder
    gia_ve?: SortOrderInput | SortOrder
    expire_at?: SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: GiuChoCountOrderByAggregateInput
    _avg?: GiuChoAvgOrderByAggregateInput
    _max?: GiuChoMaxOrderByAggregateInput
    _min?: GiuChoMinOrderByAggregateInput
    _sum?: GiuChoSumOrderByAggregateInput
  }

  export type GiuChoScalarWhereWithAggregatesInput = {
    AND?: GiuChoScalarWhereWithAggregatesInput | GiuChoScalarWhereWithAggregatesInput[]
    OR?: GiuChoScalarWhereWithAggregatesInput[]
    NOT?: GiuChoScalarWhereWithAggregatesInput | GiuChoScalarWhereWithAggregatesInput[]
    ma_giu_cho?: IntWithAggregatesFilter<"GiuCho"> | number
    tai_khoan?: IntWithAggregatesFilter<"GiuCho"> | number
    ma_lich_chieu?: IntWithAggregatesFilter<"GiuCho"> | number
    ma_ghe?: IntWithAggregatesFilter<"GiuCho"> | number
    loai?: EnumLoaiGiuChoWithAggregatesFilter<"GiuCho"> | $Enums.LoaiGiuCho
    ma_hoa_don?: IntNullableWithAggregatesFilter<"GiuCho"> | number | null
    gia_ve?: IntNullableWithAggregatesFilter<"GiuCho"> | number | null
    expire_at?: DateTimeWithAggregatesFilter<"GiuCho"> | Date | string
    created_at?: DateTimeNullableWithAggregatesFilter<"GiuCho"> | Date | string | null
  }

  export type HoaDonWhereInput = {
    AND?: HoaDonWhereInput | HoaDonWhereInput[]
    OR?: HoaDonWhereInput[]
    NOT?: HoaDonWhereInput | HoaDonWhereInput[]
    ma_hoa_don?: IntFilter<"HoaDon"> | number
    tai_khoan?: IntFilter<"HoaDon"> | number
    ma_lich_chieu?: IntFilter<"HoaDon"> | number
    tong_tien?: IntFilter<"HoaDon"> | number
    created_at?: DateTimeNullableFilter<"HoaDon"> | Date | string | null
    checked_in_at?: DateTimeNullableFilter<"HoaDon"> | Date | string | null
    trang_thai_thanh_toan?: EnumTrangThaiThanhToanFilter<"HoaDon"> | $Enums.TrangThaiThanhToan
    phuong_thuc_thanh_toan?: StringNullableFilter<"HoaDon"> | string | null
    ma_giao_dich_ngan_hang?: StringNullableFilter<"HoaDon"> | string | null
    so_tien_da_nhan?: IntNullableFilter<"HoaDon"> | number | null
    thanh_toan_luc?: DateTimeNullableFilter<"HoaDon"> | Date | string | null
    het_han_luc?: DateTimeNullableFilter<"HoaDon"> | Date | string | null
    NguoiDung?: XOR<NguoiDungScalarRelationFilter, NguoiDungWhereInput>
    LichChieu?: XOR<LichChieuScalarRelationFilter, LichChieuWhereInput>
    DatVe?: DatVeListRelationFilter
    HoaDonCombo?: HoaDonComboListRelationFilter
    GiuCho?: GiuChoListRelationFilter
  }

  export type HoaDonOrderByWithRelationInput = {
    ma_hoa_don?: SortOrder
    tai_khoan?: SortOrder
    ma_lich_chieu?: SortOrder
    tong_tien?: SortOrder
    created_at?: SortOrderInput | SortOrder
    checked_in_at?: SortOrderInput | SortOrder
    trang_thai_thanh_toan?: SortOrder
    phuong_thuc_thanh_toan?: SortOrderInput | SortOrder
    ma_giao_dich_ngan_hang?: SortOrderInput | SortOrder
    so_tien_da_nhan?: SortOrderInput | SortOrder
    thanh_toan_luc?: SortOrderInput | SortOrder
    het_han_luc?: SortOrderInput | SortOrder
    NguoiDung?: NguoiDungOrderByWithRelationInput
    LichChieu?: LichChieuOrderByWithRelationInput
    DatVe?: DatVeOrderByRelationAggregateInput
    HoaDonCombo?: HoaDonComboOrderByRelationAggregateInput
    GiuCho?: GiuChoOrderByRelationAggregateInput
    _relevance?: HoaDonOrderByRelevanceInput
  }

  export type HoaDonWhereUniqueInput = Prisma.AtLeast<{
    ma_hoa_don?: number
    ma_giao_dich_ngan_hang?: string
    AND?: HoaDonWhereInput | HoaDonWhereInput[]
    OR?: HoaDonWhereInput[]
    NOT?: HoaDonWhereInput | HoaDonWhereInput[]
    tai_khoan?: IntFilter<"HoaDon"> | number
    ma_lich_chieu?: IntFilter<"HoaDon"> | number
    tong_tien?: IntFilter<"HoaDon"> | number
    created_at?: DateTimeNullableFilter<"HoaDon"> | Date | string | null
    checked_in_at?: DateTimeNullableFilter<"HoaDon"> | Date | string | null
    trang_thai_thanh_toan?: EnumTrangThaiThanhToanFilter<"HoaDon"> | $Enums.TrangThaiThanhToan
    phuong_thuc_thanh_toan?: StringNullableFilter<"HoaDon"> | string | null
    so_tien_da_nhan?: IntNullableFilter<"HoaDon"> | number | null
    thanh_toan_luc?: DateTimeNullableFilter<"HoaDon"> | Date | string | null
    het_han_luc?: DateTimeNullableFilter<"HoaDon"> | Date | string | null
    NguoiDung?: XOR<NguoiDungScalarRelationFilter, NguoiDungWhereInput>
    LichChieu?: XOR<LichChieuScalarRelationFilter, LichChieuWhereInput>
    DatVe?: DatVeListRelationFilter
    HoaDonCombo?: HoaDonComboListRelationFilter
    GiuCho?: GiuChoListRelationFilter
  }, "ma_hoa_don" | "ma_giao_dich_ngan_hang">

  export type HoaDonOrderByWithAggregationInput = {
    ma_hoa_don?: SortOrder
    tai_khoan?: SortOrder
    ma_lich_chieu?: SortOrder
    tong_tien?: SortOrder
    created_at?: SortOrderInput | SortOrder
    checked_in_at?: SortOrderInput | SortOrder
    trang_thai_thanh_toan?: SortOrder
    phuong_thuc_thanh_toan?: SortOrderInput | SortOrder
    ma_giao_dich_ngan_hang?: SortOrderInput | SortOrder
    so_tien_da_nhan?: SortOrderInput | SortOrder
    thanh_toan_luc?: SortOrderInput | SortOrder
    het_han_luc?: SortOrderInput | SortOrder
    _count?: HoaDonCountOrderByAggregateInput
    _avg?: HoaDonAvgOrderByAggregateInput
    _max?: HoaDonMaxOrderByAggregateInput
    _min?: HoaDonMinOrderByAggregateInput
    _sum?: HoaDonSumOrderByAggregateInput
  }

  export type HoaDonScalarWhereWithAggregatesInput = {
    AND?: HoaDonScalarWhereWithAggregatesInput | HoaDonScalarWhereWithAggregatesInput[]
    OR?: HoaDonScalarWhereWithAggregatesInput[]
    NOT?: HoaDonScalarWhereWithAggregatesInput | HoaDonScalarWhereWithAggregatesInput[]
    ma_hoa_don?: IntWithAggregatesFilter<"HoaDon"> | number
    tai_khoan?: IntWithAggregatesFilter<"HoaDon"> | number
    ma_lich_chieu?: IntWithAggregatesFilter<"HoaDon"> | number
    tong_tien?: IntWithAggregatesFilter<"HoaDon"> | number
    created_at?: DateTimeNullableWithAggregatesFilter<"HoaDon"> | Date | string | null
    checked_in_at?: DateTimeNullableWithAggregatesFilter<"HoaDon"> | Date | string | null
    trang_thai_thanh_toan?: EnumTrangThaiThanhToanWithAggregatesFilter<"HoaDon"> | $Enums.TrangThaiThanhToan
    phuong_thuc_thanh_toan?: StringNullableWithAggregatesFilter<"HoaDon"> | string | null
    ma_giao_dich_ngan_hang?: StringNullableWithAggregatesFilter<"HoaDon"> | string | null
    so_tien_da_nhan?: IntNullableWithAggregatesFilter<"HoaDon"> | number | null
    thanh_toan_luc?: DateTimeNullableWithAggregatesFilter<"HoaDon"> | Date | string | null
    het_han_luc?: DateTimeNullableWithAggregatesFilter<"HoaDon"> | Date | string | null
  }

  export type ComboWhereInput = {
    AND?: ComboWhereInput | ComboWhereInput[]
    OR?: ComboWhereInput[]
    NOT?: ComboWhereInput | ComboWhereInput[]
    ma_combo?: IntFilter<"Combo"> | number
    ten_combo?: StringFilter<"Combo"> | string
    mo_ta?: StringNullableFilter<"Combo"> | string | null
    gia?: IntFilter<"Combo"> | number
    hinh_anh?: StringNullableFilter<"Combo"> | string | null
    isDeleted?: BoolNullableFilter<"Combo"> | boolean | null
    HoaDonCombo?: HoaDonComboListRelationFilter
  }

  export type ComboOrderByWithRelationInput = {
    ma_combo?: SortOrder
    ten_combo?: SortOrder
    mo_ta?: SortOrderInput | SortOrder
    gia?: SortOrder
    hinh_anh?: SortOrderInput | SortOrder
    isDeleted?: SortOrderInput | SortOrder
    HoaDonCombo?: HoaDonComboOrderByRelationAggregateInput
    _relevance?: ComboOrderByRelevanceInput
  }

  export type ComboWhereUniqueInput = Prisma.AtLeast<{
    ma_combo?: number
    AND?: ComboWhereInput | ComboWhereInput[]
    OR?: ComboWhereInput[]
    NOT?: ComboWhereInput | ComboWhereInput[]
    ten_combo?: StringFilter<"Combo"> | string
    mo_ta?: StringNullableFilter<"Combo"> | string | null
    gia?: IntFilter<"Combo"> | number
    hinh_anh?: StringNullableFilter<"Combo"> | string | null
    isDeleted?: BoolNullableFilter<"Combo"> | boolean | null
    HoaDonCombo?: HoaDonComboListRelationFilter
  }, "ma_combo">

  export type ComboOrderByWithAggregationInput = {
    ma_combo?: SortOrder
    ten_combo?: SortOrder
    mo_ta?: SortOrderInput | SortOrder
    gia?: SortOrder
    hinh_anh?: SortOrderInput | SortOrder
    isDeleted?: SortOrderInput | SortOrder
    _count?: ComboCountOrderByAggregateInput
    _avg?: ComboAvgOrderByAggregateInput
    _max?: ComboMaxOrderByAggregateInput
    _min?: ComboMinOrderByAggregateInput
    _sum?: ComboSumOrderByAggregateInput
  }

  export type ComboScalarWhereWithAggregatesInput = {
    AND?: ComboScalarWhereWithAggregatesInput | ComboScalarWhereWithAggregatesInput[]
    OR?: ComboScalarWhereWithAggregatesInput[]
    NOT?: ComboScalarWhereWithAggregatesInput | ComboScalarWhereWithAggregatesInput[]
    ma_combo?: IntWithAggregatesFilter<"Combo"> | number
    ten_combo?: StringWithAggregatesFilter<"Combo"> | string
    mo_ta?: StringNullableWithAggregatesFilter<"Combo"> | string | null
    gia?: IntWithAggregatesFilter<"Combo"> | number
    hinh_anh?: StringNullableWithAggregatesFilter<"Combo"> | string | null
    isDeleted?: BoolNullableWithAggregatesFilter<"Combo"> | boolean | null
  }

  export type HoaDonComboWhereInput = {
    AND?: HoaDonComboWhereInput | HoaDonComboWhereInput[]
    OR?: HoaDonComboWhereInput[]
    NOT?: HoaDonComboWhereInput | HoaDonComboWhereInput[]
    ma_hoa_don?: IntFilter<"HoaDonCombo"> | number
    ma_combo?: IntFilter<"HoaDonCombo"> | number
    so_luong?: IntFilter<"HoaDonCombo"> | number
    don_gia?: IntFilter<"HoaDonCombo"> | number
    HoaDon?: XOR<HoaDonScalarRelationFilter, HoaDonWhereInput>
    Combo?: XOR<ComboScalarRelationFilter, ComboWhereInput>
  }

  export type HoaDonComboOrderByWithRelationInput = {
    ma_hoa_don?: SortOrder
    ma_combo?: SortOrder
    so_luong?: SortOrder
    don_gia?: SortOrder
    HoaDon?: HoaDonOrderByWithRelationInput
    Combo?: ComboOrderByWithRelationInput
  }

  export type HoaDonComboWhereUniqueInput = Prisma.AtLeast<{
    ma_hoa_don_ma_combo?: HoaDonComboMa_hoa_donMa_comboCompoundUniqueInput
    AND?: HoaDonComboWhereInput | HoaDonComboWhereInput[]
    OR?: HoaDonComboWhereInput[]
    NOT?: HoaDonComboWhereInput | HoaDonComboWhereInput[]
    ma_hoa_don?: IntFilter<"HoaDonCombo"> | number
    ma_combo?: IntFilter<"HoaDonCombo"> | number
    so_luong?: IntFilter<"HoaDonCombo"> | number
    don_gia?: IntFilter<"HoaDonCombo"> | number
    HoaDon?: XOR<HoaDonScalarRelationFilter, HoaDonWhereInput>
    Combo?: XOR<ComboScalarRelationFilter, ComboWhereInput>
  }, "ma_hoa_don_ma_combo">

  export type HoaDonComboOrderByWithAggregationInput = {
    ma_hoa_don?: SortOrder
    ma_combo?: SortOrder
    so_luong?: SortOrder
    don_gia?: SortOrder
    _count?: HoaDonComboCountOrderByAggregateInput
    _avg?: HoaDonComboAvgOrderByAggregateInput
    _max?: HoaDonComboMaxOrderByAggregateInput
    _min?: HoaDonComboMinOrderByAggregateInput
    _sum?: HoaDonComboSumOrderByAggregateInput
  }

  export type HoaDonComboScalarWhereWithAggregatesInput = {
    AND?: HoaDonComboScalarWhereWithAggregatesInput | HoaDonComboScalarWhereWithAggregatesInput[]
    OR?: HoaDonComboScalarWhereWithAggregatesInput[]
    NOT?: HoaDonComboScalarWhereWithAggregatesInput | HoaDonComboScalarWhereWithAggregatesInput[]
    ma_hoa_don?: IntWithAggregatesFilter<"HoaDonCombo"> | number
    ma_combo?: IntWithAggregatesFilter<"HoaDonCombo"> | number
    so_luong?: IntWithAggregatesFilter<"HoaDonCombo"> | number
    don_gia?: IntWithAggregatesFilter<"HoaDonCombo"> | number
  }

  export type GiaoDichWebhookWhereInput = {
    AND?: GiaoDichWebhookWhereInput | GiaoDichWebhookWhereInput[]
    OR?: GiaoDichWebhookWhereInput[]
    NOT?: GiaoDichWebhookWhereInput | GiaoDichWebhookWhereInput[]
    ma_giao_dich_webhook?: IntFilter<"GiaoDichWebhook"> | number
    nguon?: StringFilter<"GiaoDichWebhook"> | string
    raw_payload?: StringFilter<"GiaoDichWebhook"> | string
    ma_giao_dich_ngan_hang?: StringNullableFilter<"GiaoDichWebhook"> | string | null
    so_tien?: IntNullableFilter<"GiaoDichWebhook"> | number | null
    noi_dung?: StringNullableFilter<"GiaoDichWebhook"> | string | null
    ma_hoa_don_parse?: IntNullableFilter<"GiaoDichWebhook"> | number | null
    ket_qua_xu_ly?: StringFilter<"GiaoDichWebhook"> | string
    ghi_chu?: StringNullableFilter<"GiaoDichWebhook"> | string | null
    created_at?: DateTimeNullableFilter<"GiaoDichWebhook"> | Date | string | null
  }

  export type GiaoDichWebhookOrderByWithRelationInput = {
    ma_giao_dich_webhook?: SortOrder
    nguon?: SortOrder
    raw_payload?: SortOrder
    ma_giao_dich_ngan_hang?: SortOrderInput | SortOrder
    so_tien?: SortOrderInput | SortOrder
    noi_dung?: SortOrderInput | SortOrder
    ma_hoa_don_parse?: SortOrderInput | SortOrder
    ket_qua_xu_ly?: SortOrder
    ghi_chu?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _relevance?: GiaoDichWebhookOrderByRelevanceInput
  }

  export type GiaoDichWebhookWhereUniqueInput = Prisma.AtLeast<{
    ma_giao_dich_webhook?: number
    AND?: GiaoDichWebhookWhereInput | GiaoDichWebhookWhereInput[]
    OR?: GiaoDichWebhookWhereInput[]
    NOT?: GiaoDichWebhookWhereInput | GiaoDichWebhookWhereInput[]
    nguon?: StringFilter<"GiaoDichWebhook"> | string
    raw_payload?: StringFilter<"GiaoDichWebhook"> | string
    ma_giao_dich_ngan_hang?: StringNullableFilter<"GiaoDichWebhook"> | string | null
    so_tien?: IntNullableFilter<"GiaoDichWebhook"> | number | null
    noi_dung?: StringNullableFilter<"GiaoDichWebhook"> | string | null
    ma_hoa_don_parse?: IntNullableFilter<"GiaoDichWebhook"> | number | null
    ket_qua_xu_ly?: StringFilter<"GiaoDichWebhook"> | string
    ghi_chu?: StringNullableFilter<"GiaoDichWebhook"> | string | null
    created_at?: DateTimeNullableFilter<"GiaoDichWebhook"> | Date | string | null
  }, "ma_giao_dich_webhook">

  export type GiaoDichWebhookOrderByWithAggregationInput = {
    ma_giao_dich_webhook?: SortOrder
    nguon?: SortOrder
    raw_payload?: SortOrder
    ma_giao_dich_ngan_hang?: SortOrderInput | SortOrder
    so_tien?: SortOrderInput | SortOrder
    noi_dung?: SortOrderInput | SortOrder
    ma_hoa_don_parse?: SortOrderInput | SortOrder
    ket_qua_xu_ly?: SortOrder
    ghi_chu?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: GiaoDichWebhookCountOrderByAggregateInput
    _avg?: GiaoDichWebhookAvgOrderByAggregateInput
    _max?: GiaoDichWebhookMaxOrderByAggregateInput
    _min?: GiaoDichWebhookMinOrderByAggregateInput
    _sum?: GiaoDichWebhookSumOrderByAggregateInput
  }

  export type GiaoDichWebhookScalarWhereWithAggregatesInput = {
    AND?: GiaoDichWebhookScalarWhereWithAggregatesInput | GiaoDichWebhookScalarWhereWithAggregatesInput[]
    OR?: GiaoDichWebhookScalarWhereWithAggregatesInput[]
    NOT?: GiaoDichWebhookScalarWhereWithAggregatesInput | GiaoDichWebhookScalarWhereWithAggregatesInput[]
    ma_giao_dich_webhook?: IntWithAggregatesFilter<"GiaoDichWebhook"> | number
    nguon?: StringWithAggregatesFilter<"GiaoDichWebhook"> | string
    raw_payload?: StringWithAggregatesFilter<"GiaoDichWebhook"> | string
    ma_giao_dich_ngan_hang?: StringNullableWithAggregatesFilter<"GiaoDichWebhook"> | string | null
    so_tien?: IntNullableWithAggregatesFilter<"GiaoDichWebhook"> | number | null
    noi_dung?: StringNullableWithAggregatesFilter<"GiaoDichWebhook"> | string | null
    ma_hoa_don_parse?: IntNullableWithAggregatesFilter<"GiaoDichWebhook"> | number | null
    ket_qua_xu_ly?: StringWithAggregatesFilter<"GiaoDichWebhook"> | string
    ghi_chu?: StringNullableWithAggregatesFilter<"GiaoDichWebhook"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"GiaoDichWebhook"> | Date | string | null
  }

  export type BannerCreateInput = {
    hinh_anh?: string | null
    Phim?: PhimCreateNestedOneWithoutBannerInput
  }

  export type BannerUncheckedCreateInput = {
    ma_banner?: number
    ma_phim?: number | null
    hinh_anh?: string | null
  }

  export type BannerUpdateInput = {
    hinh_anh?: NullableStringFieldUpdateOperationsInput | string | null
    Phim?: PhimUpdateOneWithoutBannerNestedInput
  }

  export type BannerUncheckedUpdateInput = {
    ma_banner?: IntFieldUpdateOperationsInput | number
    ma_phim?: NullableIntFieldUpdateOperationsInput | number | null
    hinh_anh?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BannerCreateManyInput = {
    ma_banner?: number
    ma_phim?: number | null
    hinh_anh?: string | null
  }

  export type BannerUpdateManyMutationInput = {
    hinh_anh?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BannerUncheckedUpdateManyInput = {
    ma_banner?: IntFieldUpdateOperationsInput | number
    ma_phim?: NullableIntFieldUpdateOperationsInput | number | null
    hinh_anh?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CumRapCreateInput = {
    ten_cum_rap?: string | null
    dia_chi?: string | null
    khu_vuc?: string | null
    HeThongRap?: HeThongRapCreateNestedOneWithoutCumRapInput
    RapPhim?: RapPhimCreateNestedManyWithoutCumRapInput
  }

  export type CumRapUncheckedCreateInput = {
    ma_cum_rap?: number
    ten_cum_rap?: string | null
    dia_chi?: string | null
    ma_he_thong_rap?: number | null
    khu_vuc?: string | null
    RapPhim?: RapPhimUncheckedCreateNestedManyWithoutCumRapInput
  }

  export type CumRapUpdateInput = {
    ten_cum_rap?: NullableStringFieldUpdateOperationsInput | string | null
    dia_chi?: NullableStringFieldUpdateOperationsInput | string | null
    khu_vuc?: NullableStringFieldUpdateOperationsInput | string | null
    HeThongRap?: HeThongRapUpdateOneWithoutCumRapNestedInput
    RapPhim?: RapPhimUpdateManyWithoutCumRapNestedInput
  }

  export type CumRapUncheckedUpdateInput = {
    ma_cum_rap?: IntFieldUpdateOperationsInput | number
    ten_cum_rap?: NullableStringFieldUpdateOperationsInput | string | null
    dia_chi?: NullableStringFieldUpdateOperationsInput | string | null
    ma_he_thong_rap?: NullableIntFieldUpdateOperationsInput | number | null
    khu_vuc?: NullableStringFieldUpdateOperationsInput | string | null
    RapPhim?: RapPhimUncheckedUpdateManyWithoutCumRapNestedInput
  }

  export type CumRapCreateManyInput = {
    ma_cum_rap?: number
    ten_cum_rap?: string | null
    dia_chi?: string | null
    ma_he_thong_rap?: number | null
    khu_vuc?: string | null
  }

  export type CumRapUpdateManyMutationInput = {
    ten_cum_rap?: NullableStringFieldUpdateOperationsInput | string | null
    dia_chi?: NullableStringFieldUpdateOperationsInput | string | null
    khu_vuc?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CumRapUncheckedUpdateManyInput = {
    ma_cum_rap?: IntFieldUpdateOperationsInput | number
    ten_cum_rap?: NullableStringFieldUpdateOperationsInput | string | null
    dia_chi?: NullableStringFieldUpdateOperationsInput | string | null
    ma_he_thong_rap?: NullableIntFieldUpdateOperationsInput | number | null
    khu_vuc?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DatVeCreateInput = {
    gia_ve: number
    created_at?: Date | string | null
    NguoiDung: NguoiDungCreateNestedOneWithoutDatVeInput
    LichChieu: LichChieuCreateNestedOneWithoutDatVeInput
    Ghe: GheCreateNestedOneWithoutDatVeInput
    HoaDon?: HoaDonCreateNestedOneWithoutDatVeInput
  }

  export type DatVeUncheckedCreateInput = {
    tai_khoan: number
    ma_lich_chieu: number
    ma_ghe: number
    gia_ve: number
    ma_hoa_don?: number | null
    created_at?: Date | string | null
  }

  export type DatVeUpdateInput = {
    gia_ve?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    NguoiDung?: NguoiDungUpdateOneRequiredWithoutDatVeNestedInput
    LichChieu?: LichChieuUpdateOneRequiredWithoutDatVeNestedInput
    Ghe?: GheUpdateOneRequiredWithoutDatVeNestedInput
    HoaDon?: HoaDonUpdateOneWithoutDatVeNestedInput
  }

  export type DatVeUncheckedUpdateInput = {
    tai_khoan?: IntFieldUpdateOperationsInput | number
    ma_lich_chieu?: IntFieldUpdateOperationsInput | number
    ma_ghe?: IntFieldUpdateOperationsInput | number
    gia_ve?: IntFieldUpdateOperationsInput | number
    ma_hoa_don?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DatVeCreateManyInput = {
    tai_khoan: number
    ma_lich_chieu: number
    ma_ghe: number
    gia_ve: number
    ma_hoa_don?: number | null
    created_at?: Date | string | null
  }

  export type DatVeUpdateManyMutationInput = {
    gia_ve?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DatVeUncheckedUpdateManyInput = {
    tai_khoan?: IntFieldUpdateOperationsInput | number
    ma_lich_chieu?: IntFieldUpdateOperationsInput | number
    ma_ghe?: IntFieldUpdateOperationsInput | number
    gia_ve?: IntFieldUpdateOperationsInput | number
    ma_hoa_don?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GheCreateInput = {
    ten_ghe?: string | null
    loai_ghe?: string | null
    DatVe?: DatVeCreateNestedManyWithoutGheInput
    RapPhim?: RapPhimCreateNestedOneWithoutGheInput
    GiuCho?: GiuChoCreateNestedManyWithoutGheInput
  }

  export type GheUncheckedCreateInput = {
    ma_ghe?: number
    ten_ghe?: string | null
    loai_ghe?: string | null
    ma_rap?: number | null
    DatVe?: DatVeUncheckedCreateNestedManyWithoutGheInput
    GiuCho?: GiuChoUncheckedCreateNestedManyWithoutGheInput
  }

  export type GheUpdateInput = {
    ten_ghe?: NullableStringFieldUpdateOperationsInput | string | null
    loai_ghe?: NullableStringFieldUpdateOperationsInput | string | null
    DatVe?: DatVeUpdateManyWithoutGheNestedInput
    RapPhim?: RapPhimUpdateOneWithoutGheNestedInput
    GiuCho?: GiuChoUpdateManyWithoutGheNestedInput
  }

  export type GheUncheckedUpdateInput = {
    ma_ghe?: IntFieldUpdateOperationsInput | number
    ten_ghe?: NullableStringFieldUpdateOperationsInput | string | null
    loai_ghe?: NullableStringFieldUpdateOperationsInput | string | null
    ma_rap?: NullableIntFieldUpdateOperationsInput | number | null
    DatVe?: DatVeUncheckedUpdateManyWithoutGheNestedInput
    GiuCho?: GiuChoUncheckedUpdateManyWithoutGheNestedInput
  }

  export type GheCreateManyInput = {
    ma_ghe?: number
    ten_ghe?: string | null
    loai_ghe?: string | null
    ma_rap?: number | null
  }

  export type GheUpdateManyMutationInput = {
    ten_ghe?: NullableStringFieldUpdateOperationsInput | string | null
    loai_ghe?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GheUncheckedUpdateManyInput = {
    ma_ghe?: IntFieldUpdateOperationsInput | number
    ten_ghe?: NullableStringFieldUpdateOperationsInput | string | null
    loai_ghe?: NullableStringFieldUpdateOperationsInput | string | null
    ma_rap?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type HeThongRapCreateInput = {
    ten_he_thong_rap?: string | null
    logo?: string | null
    CumRap?: CumRapCreateNestedManyWithoutHeThongRapInput
  }

  export type HeThongRapUncheckedCreateInput = {
    ma_he_thong_rap?: number
    ten_he_thong_rap?: string | null
    logo?: string | null
    CumRap?: CumRapUncheckedCreateNestedManyWithoutHeThongRapInput
  }

  export type HeThongRapUpdateInput = {
    ten_he_thong_rap?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    CumRap?: CumRapUpdateManyWithoutHeThongRapNestedInput
  }

  export type HeThongRapUncheckedUpdateInput = {
    ma_he_thong_rap?: IntFieldUpdateOperationsInput | number
    ten_he_thong_rap?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    CumRap?: CumRapUncheckedUpdateManyWithoutHeThongRapNestedInput
  }

  export type HeThongRapCreateManyInput = {
    ma_he_thong_rap?: number
    ten_he_thong_rap?: string | null
    logo?: string | null
  }

  export type HeThongRapUpdateManyMutationInput = {
    ten_he_thong_rap?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HeThongRapUncheckedUpdateManyInput = {
    ma_he_thong_rap?: IntFieldUpdateOperationsInput | number
    ten_he_thong_rap?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LichChieuCreateInput = {
    ngay_gio_chieu?: Date | string | null
    gia_ve?: number | null
    DatVe?: DatVeCreateNestedManyWithoutLichChieuInput
    GiuCho?: GiuChoCreateNestedManyWithoutLichChieuInput
    HoaDon?: HoaDonCreateNestedManyWithoutLichChieuInput
    RapPhim?: RapPhimCreateNestedOneWithoutLichChieuInput
    Phim?: PhimCreateNestedOneWithoutLichChieuInput
  }

  export type LichChieuUncheckedCreateInput = {
    ma_lich_chieu?: number
    ma_rap?: number | null
    ma_phim?: number | null
    ngay_gio_chieu?: Date | string | null
    gia_ve?: number | null
    DatVe?: DatVeUncheckedCreateNestedManyWithoutLichChieuInput
    GiuCho?: GiuChoUncheckedCreateNestedManyWithoutLichChieuInput
    HoaDon?: HoaDonUncheckedCreateNestedManyWithoutLichChieuInput
  }

  export type LichChieuUpdateInput = {
    ngay_gio_chieu?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gia_ve?: NullableIntFieldUpdateOperationsInput | number | null
    DatVe?: DatVeUpdateManyWithoutLichChieuNestedInput
    GiuCho?: GiuChoUpdateManyWithoutLichChieuNestedInput
    HoaDon?: HoaDonUpdateManyWithoutLichChieuNestedInput
    RapPhim?: RapPhimUpdateOneWithoutLichChieuNestedInput
    Phim?: PhimUpdateOneWithoutLichChieuNestedInput
  }

  export type LichChieuUncheckedUpdateInput = {
    ma_lich_chieu?: IntFieldUpdateOperationsInput | number
    ma_rap?: NullableIntFieldUpdateOperationsInput | number | null
    ma_phim?: NullableIntFieldUpdateOperationsInput | number | null
    ngay_gio_chieu?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gia_ve?: NullableIntFieldUpdateOperationsInput | number | null
    DatVe?: DatVeUncheckedUpdateManyWithoutLichChieuNestedInput
    GiuCho?: GiuChoUncheckedUpdateManyWithoutLichChieuNestedInput
    HoaDon?: HoaDonUncheckedUpdateManyWithoutLichChieuNestedInput
  }

  export type LichChieuCreateManyInput = {
    ma_lich_chieu?: number
    ma_rap?: number | null
    ma_phim?: number | null
    ngay_gio_chieu?: Date | string | null
    gia_ve?: number | null
  }

  export type LichChieuUpdateManyMutationInput = {
    ngay_gio_chieu?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gia_ve?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type LichChieuUncheckedUpdateManyInput = {
    ma_lich_chieu?: IntFieldUpdateOperationsInput | number
    ma_rap?: NullableIntFieldUpdateOperationsInput | number | null
    ma_phim?: NullableIntFieldUpdateOperationsInput | number | null
    ngay_gio_chieu?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gia_ve?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type NguoiDungCreateInput = {
    ho_ten?: string | null
    email?: string | null
    so_dt?: string | null
    mat_khau?: string | null
    loai_nguoi_dung?: string | null
    isDeleted?: boolean | null
    DatVe?: DatVeCreateNestedManyWithoutNguoiDungInput
    GiuCho?: GiuChoCreateNestedManyWithoutNguoiDungInput
    HoaDon?: HoaDonCreateNestedManyWithoutNguoiDungInput
    RefreshToken?: RefreshTokenCreateNestedManyWithoutNguoiDungInput
  }

  export type NguoiDungUncheckedCreateInput = {
    tai_khoan?: number
    ho_ten?: string | null
    email?: string | null
    so_dt?: string | null
    mat_khau?: string | null
    loai_nguoi_dung?: string | null
    isDeleted?: boolean | null
    DatVe?: DatVeUncheckedCreateNestedManyWithoutNguoiDungInput
    GiuCho?: GiuChoUncheckedCreateNestedManyWithoutNguoiDungInput
    HoaDon?: HoaDonUncheckedCreateNestedManyWithoutNguoiDungInput
    RefreshToken?: RefreshTokenUncheckedCreateNestedManyWithoutNguoiDungInput
  }

  export type NguoiDungUpdateInput = {
    ho_ten?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    so_dt?: NullableStringFieldUpdateOperationsInput | string | null
    mat_khau?: NullableStringFieldUpdateOperationsInput | string | null
    loai_nguoi_dung?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    DatVe?: DatVeUpdateManyWithoutNguoiDungNestedInput
    GiuCho?: GiuChoUpdateManyWithoutNguoiDungNestedInput
    HoaDon?: HoaDonUpdateManyWithoutNguoiDungNestedInput
    RefreshToken?: RefreshTokenUpdateManyWithoutNguoiDungNestedInput
  }

  export type NguoiDungUncheckedUpdateInput = {
    tai_khoan?: IntFieldUpdateOperationsInput | number
    ho_ten?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    so_dt?: NullableStringFieldUpdateOperationsInput | string | null
    mat_khau?: NullableStringFieldUpdateOperationsInput | string | null
    loai_nguoi_dung?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    DatVe?: DatVeUncheckedUpdateManyWithoutNguoiDungNestedInput
    GiuCho?: GiuChoUncheckedUpdateManyWithoutNguoiDungNestedInput
    HoaDon?: HoaDonUncheckedUpdateManyWithoutNguoiDungNestedInput
    RefreshToken?: RefreshTokenUncheckedUpdateManyWithoutNguoiDungNestedInput
  }

  export type NguoiDungCreateManyInput = {
    tai_khoan?: number
    ho_ten?: string | null
    email?: string | null
    so_dt?: string | null
    mat_khau?: string | null
    loai_nguoi_dung?: string | null
    isDeleted?: boolean | null
  }

  export type NguoiDungUpdateManyMutationInput = {
    ho_ten?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    so_dt?: NullableStringFieldUpdateOperationsInput | string | null
    mat_khau?: NullableStringFieldUpdateOperationsInput | string | null
    loai_nguoi_dung?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type NguoiDungUncheckedUpdateManyInput = {
    tai_khoan?: IntFieldUpdateOperationsInput | number
    ho_ten?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    so_dt?: NullableStringFieldUpdateOperationsInput | string | null
    mat_khau?: NullableStringFieldUpdateOperationsInput | string | null
    loai_nguoi_dung?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type RefreshTokenCreateInput = {
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
    NguoiDung: NguoiDungCreateNestedOneWithoutRefreshTokenInput
  }

  export type RefreshTokenUncheckedCreateInput = {
    id?: number
    token: string
    tai_khoan: number
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type RefreshTokenUpdateInput = {
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    NguoiDung?: NguoiDungUpdateOneRequiredWithoutRefreshTokenNestedInput
  }

  export type RefreshTokenUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    tai_khoan?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenCreateManyInput = {
    id?: number
    token: string
    tai_khoan: number
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type RefreshTokenUpdateManyMutationInput = {
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    tai_khoan?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhimCreateInput = {
    ten_phim?: string | null
    trailer?: string | null
    hinh_anh?: string | null
    mo_ta?: string | null
    ngay_khoi_chieu?: Date | string | null
    danh_gia?: number | null
    hot?: boolean | null
    dang_chieu?: boolean | null
    sap_chieu?: boolean | null
    isDeleted?: boolean | null
    Banner?: BannerCreateNestedManyWithoutPhimInput
    LichChieu?: LichChieuCreateNestedManyWithoutPhimInput
  }

  export type PhimUncheckedCreateInput = {
    ma_phim?: number
    ten_phim?: string | null
    trailer?: string | null
    hinh_anh?: string | null
    mo_ta?: string | null
    ngay_khoi_chieu?: Date | string | null
    danh_gia?: number | null
    hot?: boolean | null
    dang_chieu?: boolean | null
    sap_chieu?: boolean | null
    isDeleted?: boolean | null
    Banner?: BannerUncheckedCreateNestedManyWithoutPhimInput
    LichChieu?: LichChieuUncheckedCreateNestedManyWithoutPhimInput
  }

  export type PhimUpdateInput = {
    ten_phim?: NullableStringFieldUpdateOperationsInput | string | null
    trailer?: NullableStringFieldUpdateOperationsInput | string | null
    hinh_anh?: NullableStringFieldUpdateOperationsInput | string | null
    mo_ta?: NullableStringFieldUpdateOperationsInput | string | null
    ngay_khoi_chieu?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    danh_gia?: NullableIntFieldUpdateOperationsInput | number | null
    hot?: NullableBoolFieldUpdateOperationsInput | boolean | null
    dang_chieu?: NullableBoolFieldUpdateOperationsInput | boolean | null
    sap_chieu?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Banner?: BannerUpdateManyWithoutPhimNestedInput
    LichChieu?: LichChieuUpdateManyWithoutPhimNestedInput
  }

  export type PhimUncheckedUpdateInput = {
    ma_phim?: IntFieldUpdateOperationsInput | number
    ten_phim?: NullableStringFieldUpdateOperationsInput | string | null
    trailer?: NullableStringFieldUpdateOperationsInput | string | null
    hinh_anh?: NullableStringFieldUpdateOperationsInput | string | null
    mo_ta?: NullableStringFieldUpdateOperationsInput | string | null
    ngay_khoi_chieu?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    danh_gia?: NullableIntFieldUpdateOperationsInput | number | null
    hot?: NullableBoolFieldUpdateOperationsInput | boolean | null
    dang_chieu?: NullableBoolFieldUpdateOperationsInput | boolean | null
    sap_chieu?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Banner?: BannerUncheckedUpdateManyWithoutPhimNestedInput
    LichChieu?: LichChieuUncheckedUpdateManyWithoutPhimNestedInput
  }

  export type PhimCreateManyInput = {
    ma_phim?: number
    ten_phim?: string | null
    trailer?: string | null
    hinh_anh?: string | null
    mo_ta?: string | null
    ngay_khoi_chieu?: Date | string | null
    danh_gia?: number | null
    hot?: boolean | null
    dang_chieu?: boolean | null
    sap_chieu?: boolean | null
    isDeleted?: boolean | null
  }

  export type PhimUpdateManyMutationInput = {
    ten_phim?: NullableStringFieldUpdateOperationsInput | string | null
    trailer?: NullableStringFieldUpdateOperationsInput | string | null
    hinh_anh?: NullableStringFieldUpdateOperationsInput | string | null
    mo_ta?: NullableStringFieldUpdateOperationsInput | string | null
    ngay_khoi_chieu?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    danh_gia?: NullableIntFieldUpdateOperationsInput | number | null
    hot?: NullableBoolFieldUpdateOperationsInput | boolean | null
    dang_chieu?: NullableBoolFieldUpdateOperationsInput | boolean | null
    sap_chieu?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type PhimUncheckedUpdateManyInput = {
    ma_phim?: IntFieldUpdateOperationsInput | number
    ten_phim?: NullableStringFieldUpdateOperationsInput | string | null
    trailer?: NullableStringFieldUpdateOperationsInput | string | null
    hinh_anh?: NullableStringFieldUpdateOperationsInput | string | null
    mo_ta?: NullableStringFieldUpdateOperationsInput | string | null
    ngay_khoi_chieu?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    danh_gia?: NullableIntFieldUpdateOperationsInput | number | null
    hot?: NullableBoolFieldUpdateOperationsInput | boolean | null
    dang_chieu?: NullableBoolFieldUpdateOperationsInput | boolean | null
    sap_chieu?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type RapPhimCreateInput = {
    ten_rap?: string | null
    Ghe?: GheCreateNestedManyWithoutRapPhimInput
    LichChieu?: LichChieuCreateNestedManyWithoutRapPhimInput
    CumRap?: CumRapCreateNestedOneWithoutRapPhimInput
  }

  export type RapPhimUncheckedCreateInput = {
    ma_rap?: number
    ten_rap?: string | null
    ma_cum_rap?: number | null
    Ghe?: GheUncheckedCreateNestedManyWithoutRapPhimInput
    LichChieu?: LichChieuUncheckedCreateNestedManyWithoutRapPhimInput
  }

  export type RapPhimUpdateInput = {
    ten_rap?: NullableStringFieldUpdateOperationsInput | string | null
    Ghe?: GheUpdateManyWithoutRapPhimNestedInput
    LichChieu?: LichChieuUpdateManyWithoutRapPhimNestedInput
    CumRap?: CumRapUpdateOneWithoutRapPhimNestedInput
  }

  export type RapPhimUncheckedUpdateInput = {
    ma_rap?: IntFieldUpdateOperationsInput | number
    ten_rap?: NullableStringFieldUpdateOperationsInput | string | null
    ma_cum_rap?: NullableIntFieldUpdateOperationsInput | number | null
    Ghe?: GheUncheckedUpdateManyWithoutRapPhimNestedInput
    LichChieu?: LichChieuUncheckedUpdateManyWithoutRapPhimNestedInput
  }

  export type RapPhimCreateManyInput = {
    ma_rap?: number
    ten_rap?: string | null
    ma_cum_rap?: number | null
  }

  export type RapPhimUpdateManyMutationInput = {
    ten_rap?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RapPhimUncheckedUpdateManyInput = {
    ma_rap?: IntFieldUpdateOperationsInput | number
    ten_rap?: NullableStringFieldUpdateOperationsInput | string | null
    ma_cum_rap?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type GiuChoCreateInput = {
    loai?: $Enums.LoaiGiuCho
    gia_ve?: number | null
    expire_at: Date | string
    created_at?: Date | string | null
    Ghe: GheCreateNestedOneWithoutGiuChoInput
    LichChieu: LichChieuCreateNestedOneWithoutGiuChoInput
    NguoiDung: NguoiDungCreateNestedOneWithoutGiuChoInput
    HoaDon?: HoaDonCreateNestedOneWithoutGiuChoInput
  }

  export type GiuChoUncheckedCreateInput = {
    ma_giu_cho?: number
    tai_khoan: number
    ma_lich_chieu: number
    ma_ghe: number
    loai?: $Enums.LoaiGiuCho
    ma_hoa_don?: number | null
    gia_ve?: number | null
    expire_at: Date | string
    created_at?: Date | string | null
  }

  export type GiuChoUpdateInput = {
    loai?: EnumLoaiGiuChoFieldUpdateOperationsInput | $Enums.LoaiGiuCho
    gia_ve?: NullableIntFieldUpdateOperationsInput | number | null
    expire_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Ghe?: GheUpdateOneRequiredWithoutGiuChoNestedInput
    LichChieu?: LichChieuUpdateOneRequiredWithoutGiuChoNestedInput
    NguoiDung?: NguoiDungUpdateOneRequiredWithoutGiuChoNestedInput
    HoaDon?: HoaDonUpdateOneWithoutGiuChoNestedInput
  }

  export type GiuChoUncheckedUpdateInput = {
    ma_giu_cho?: IntFieldUpdateOperationsInput | number
    tai_khoan?: IntFieldUpdateOperationsInput | number
    ma_lich_chieu?: IntFieldUpdateOperationsInput | number
    ma_ghe?: IntFieldUpdateOperationsInput | number
    loai?: EnumLoaiGiuChoFieldUpdateOperationsInput | $Enums.LoaiGiuCho
    ma_hoa_don?: NullableIntFieldUpdateOperationsInput | number | null
    gia_ve?: NullableIntFieldUpdateOperationsInput | number | null
    expire_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GiuChoCreateManyInput = {
    ma_giu_cho?: number
    tai_khoan: number
    ma_lich_chieu: number
    ma_ghe: number
    loai?: $Enums.LoaiGiuCho
    ma_hoa_don?: number | null
    gia_ve?: number | null
    expire_at: Date | string
    created_at?: Date | string | null
  }

  export type GiuChoUpdateManyMutationInput = {
    loai?: EnumLoaiGiuChoFieldUpdateOperationsInput | $Enums.LoaiGiuCho
    gia_ve?: NullableIntFieldUpdateOperationsInput | number | null
    expire_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GiuChoUncheckedUpdateManyInput = {
    ma_giu_cho?: IntFieldUpdateOperationsInput | number
    tai_khoan?: IntFieldUpdateOperationsInput | number
    ma_lich_chieu?: IntFieldUpdateOperationsInput | number
    ma_ghe?: IntFieldUpdateOperationsInput | number
    loai?: EnumLoaiGiuChoFieldUpdateOperationsInput | $Enums.LoaiGiuCho
    ma_hoa_don?: NullableIntFieldUpdateOperationsInput | number | null
    gia_ve?: NullableIntFieldUpdateOperationsInput | number | null
    expire_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type HoaDonCreateInput = {
    tong_tien: number
    created_at?: Date | string | null
    checked_in_at?: Date | string | null
    trang_thai_thanh_toan?: $Enums.TrangThaiThanhToan
    phuong_thuc_thanh_toan?: string | null
    ma_giao_dich_ngan_hang?: string | null
    so_tien_da_nhan?: number | null
    thanh_toan_luc?: Date | string | null
    het_han_luc?: Date | string | null
    NguoiDung: NguoiDungCreateNestedOneWithoutHoaDonInput
    LichChieu: LichChieuCreateNestedOneWithoutHoaDonInput
    DatVe?: DatVeCreateNestedManyWithoutHoaDonInput
    HoaDonCombo?: HoaDonComboCreateNestedManyWithoutHoaDonInput
    GiuCho?: GiuChoCreateNestedManyWithoutHoaDonInput
  }

  export type HoaDonUncheckedCreateInput = {
    ma_hoa_don?: number
    tai_khoan: number
    ma_lich_chieu: number
    tong_tien: number
    created_at?: Date | string | null
    checked_in_at?: Date | string | null
    trang_thai_thanh_toan?: $Enums.TrangThaiThanhToan
    phuong_thuc_thanh_toan?: string | null
    ma_giao_dich_ngan_hang?: string | null
    so_tien_da_nhan?: number | null
    thanh_toan_luc?: Date | string | null
    het_han_luc?: Date | string | null
    DatVe?: DatVeUncheckedCreateNestedManyWithoutHoaDonInput
    HoaDonCombo?: HoaDonComboUncheckedCreateNestedManyWithoutHoaDonInput
    GiuCho?: GiuChoUncheckedCreateNestedManyWithoutHoaDonInput
  }

  export type HoaDonUpdateInput = {
    tong_tien?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checked_in_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trang_thai_thanh_toan?: EnumTrangThaiThanhToanFieldUpdateOperationsInput | $Enums.TrangThaiThanhToan
    phuong_thuc_thanh_toan?: NullableStringFieldUpdateOperationsInput | string | null
    ma_giao_dich_ngan_hang?: NullableStringFieldUpdateOperationsInput | string | null
    so_tien_da_nhan?: NullableIntFieldUpdateOperationsInput | number | null
    thanh_toan_luc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    het_han_luc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    NguoiDung?: NguoiDungUpdateOneRequiredWithoutHoaDonNestedInput
    LichChieu?: LichChieuUpdateOneRequiredWithoutHoaDonNestedInput
    DatVe?: DatVeUpdateManyWithoutHoaDonNestedInput
    HoaDonCombo?: HoaDonComboUpdateManyWithoutHoaDonNestedInput
    GiuCho?: GiuChoUpdateManyWithoutHoaDonNestedInput
  }

  export type HoaDonUncheckedUpdateInput = {
    ma_hoa_don?: IntFieldUpdateOperationsInput | number
    tai_khoan?: IntFieldUpdateOperationsInput | number
    ma_lich_chieu?: IntFieldUpdateOperationsInput | number
    tong_tien?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checked_in_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trang_thai_thanh_toan?: EnumTrangThaiThanhToanFieldUpdateOperationsInput | $Enums.TrangThaiThanhToan
    phuong_thuc_thanh_toan?: NullableStringFieldUpdateOperationsInput | string | null
    ma_giao_dich_ngan_hang?: NullableStringFieldUpdateOperationsInput | string | null
    so_tien_da_nhan?: NullableIntFieldUpdateOperationsInput | number | null
    thanh_toan_luc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    het_han_luc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DatVe?: DatVeUncheckedUpdateManyWithoutHoaDonNestedInput
    HoaDonCombo?: HoaDonComboUncheckedUpdateManyWithoutHoaDonNestedInput
    GiuCho?: GiuChoUncheckedUpdateManyWithoutHoaDonNestedInput
  }

  export type HoaDonCreateManyInput = {
    ma_hoa_don?: number
    tai_khoan: number
    ma_lich_chieu: number
    tong_tien: number
    created_at?: Date | string | null
    checked_in_at?: Date | string | null
    trang_thai_thanh_toan?: $Enums.TrangThaiThanhToan
    phuong_thuc_thanh_toan?: string | null
    ma_giao_dich_ngan_hang?: string | null
    so_tien_da_nhan?: number | null
    thanh_toan_luc?: Date | string | null
    het_han_luc?: Date | string | null
  }

  export type HoaDonUpdateManyMutationInput = {
    tong_tien?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checked_in_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trang_thai_thanh_toan?: EnumTrangThaiThanhToanFieldUpdateOperationsInput | $Enums.TrangThaiThanhToan
    phuong_thuc_thanh_toan?: NullableStringFieldUpdateOperationsInput | string | null
    ma_giao_dich_ngan_hang?: NullableStringFieldUpdateOperationsInput | string | null
    so_tien_da_nhan?: NullableIntFieldUpdateOperationsInput | number | null
    thanh_toan_luc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    het_han_luc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type HoaDonUncheckedUpdateManyInput = {
    ma_hoa_don?: IntFieldUpdateOperationsInput | number
    tai_khoan?: IntFieldUpdateOperationsInput | number
    ma_lich_chieu?: IntFieldUpdateOperationsInput | number
    tong_tien?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checked_in_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trang_thai_thanh_toan?: EnumTrangThaiThanhToanFieldUpdateOperationsInput | $Enums.TrangThaiThanhToan
    phuong_thuc_thanh_toan?: NullableStringFieldUpdateOperationsInput | string | null
    ma_giao_dich_ngan_hang?: NullableStringFieldUpdateOperationsInput | string | null
    so_tien_da_nhan?: NullableIntFieldUpdateOperationsInput | number | null
    thanh_toan_luc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    het_han_luc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ComboCreateInput = {
    ten_combo: string
    mo_ta?: string | null
    gia: number
    hinh_anh?: string | null
    isDeleted?: boolean | null
    HoaDonCombo?: HoaDonComboCreateNestedManyWithoutComboInput
  }

  export type ComboUncheckedCreateInput = {
    ma_combo?: number
    ten_combo: string
    mo_ta?: string | null
    gia: number
    hinh_anh?: string | null
    isDeleted?: boolean | null
    HoaDonCombo?: HoaDonComboUncheckedCreateNestedManyWithoutComboInput
  }

  export type ComboUpdateInput = {
    ten_combo?: StringFieldUpdateOperationsInput | string
    mo_ta?: NullableStringFieldUpdateOperationsInput | string | null
    gia?: IntFieldUpdateOperationsInput | number
    hinh_anh?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    HoaDonCombo?: HoaDonComboUpdateManyWithoutComboNestedInput
  }

  export type ComboUncheckedUpdateInput = {
    ma_combo?: IntFieldUpdateOperationsInput | number
    ten_combo?: StringFieldUpdateOperationsInput | string
    mo_ta?: NullableStringFieldUpdateOperationsInput | string | null
    gia?: IntFieldUpdateOperationsInput | number
    hinh_anh?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    HoaDonCombo?: HoaDonComboUncheckedUpdateManyWithoutComboNestedInput
  }

  export type ComboCreateManyInput = {
    ma_combo?: number
    ten_combo: string
    mo_ta?: string | null
    gia: number
    hinh_anh?: string | null
    isDeleted?: boolean | null
  }

  export type ComboUpdateManyMutationInput = {
    ten_combo?: StringFieldUpdateOperationsInput | string
    mo_ta?: NullableStringFieldUpdateOperationsInput | string | null
    gia?: IntFieldUpdateOperationsInput | number
    hinh_anh?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ComboUncheckedUpdateManyInput = {
    ma_combo?: IntFieldUpdateOperationsInput | number
    ten_combo?: StringFieldUpdateOperationsInput | string
    mo_ta?: NullableStringFieldUpdateOperationsInput | string | null
    gia?: IntFieldUpdateOperationsInput | number
    hinh_anh?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type HoaDonComboCreateInput = {
    so_luong: number
    don_gia: number
    HoaDon: HoaDonCreateNestedOneWithoutHoaDonComboInput
    Combo: ComboCreateNestedOneWithoutHoaDonComboInput
  }

  export type HoaDonComboUncheckedCreateInput = {
    ma_hoa_don: number
    ma_combo: number
    so_luong: number
    don_gia: number
  }

  export type HoaDonComboUpdateInput = {
    so_luong?: IntFieldUpdateOperationsInput | number
    don_gia?: IntFieldUpdateOperationsInput | number
    HoaDon?: HoaDonUpdateOneRequiredWithoutHoaDonComboNestedInput
    Combo?: ComboUpdateOneRequiredWithoutHoaDonComboNestedInput
  }

  export type HoaDonComboUncheckedUpdateInput = {
    ma_hoa_don?: IntFieldUpdateOperationsInput | number
    ma_combo?: IntFieldUpdateOperationsInput | number
    so_luong?: IntFieldUpdateOperationsInput | number
    don_gia?: IntFieldUpdateOperationsInput | number
  }

  export type HoaDonComboCreateManyInput = {
    ma_hoa_don: number
    ma_combo: number
    so_luong: number
    don_gia: number
  }

  export type HoaDonComboUpdateManyMutationInput = {
    so_luong?: IntFieldUpdateOperationsInput | number
    don_gia?: IntFieldUpdateOperationsInput | number
  }

  export type HoaDonComboUncheckedUpdateManyInput = {
    ma_hoa_don?: IntFieldUpdateOperationsInput | number
    ma_combo?: IntFieldUpdateOperationsInput | number
    so_luong?: IntFieldUpdateOperationsInput | number
    don_gia?: IntFieldUpdateOperationsInput | number
  }

  export type GiaoDichWebhookCreateInput = {
    nguon: string
    raw_payload: string
    ma_giao_dich_ngan_hang?: string | null
    so_tien?: number | null
    noi_dung?: string | null
    ma_hoa_don_parse?: number | null
    ket_qua_xu_ly: string
    ghi_chu?: string | null
    created_at?: Date | string | null
  }

  export type GiaoDichWebhookUncheckedCreateInput = {
    ma_giao_dich_webhook?: number
    nguon: string
    raw_payload: string
    ma_giao_dich_ngan_hang?: string | null
    so_tien?: number | null
    noi_dung?: string | null
    ma_hoa_don_parse?: number | null
    ket_qua_xu_ly: string
    ghi_chu?: string | null
    created_at?: Date | string | null
  }

  export type GiaoDichWebhookUpdateInput = {
    nguon?: StringFieldUpdateOperationsInput | string
    raw_payload?: StringFieldUpdateOperationsInput | string
    ma_giao_dich_ngan_hang?: NullableStringFieldUpdateOperationsInput | string | null
    so_tien?: NullableIntFieldUpdateOperationsInput | number | null
    noi_dung?: NullableStringFieldUpdateOperationsInput | string | null
    ma_hoa_don_parse?: NullableIntFieldUpdateOperationsInput | number | null
    ket_qua_xu_ly?: StringFieldUpdateOperationsInput | string
    ghi_chu?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GiaoDichWebhookUncheckedUpdateInput = {
    ma_giao_dich_webhook?: IntFieldUpdateOperationsInput | number
    nguon?: StringFieldUpdateOperationsInput | string
    raw_payload?: StringFieldUpdateOperationsInput | string
    ma_giao_dich_ngan_hang?: NullableStringFieldUpdateOperationsInput | string | null
    so_tien?: NullableIntFieldUpdateOperationsInput | number | null
    noi_dung?: NullableStringFieldUpdateOperationsInput | string | null
    ma_hoa_don_parse?: NullableIntFieldUpdateOperationsInput | number | null
    ket_qua_xu_ly?: StringFieldUpdateOperationsInput | string
    ghi_chu?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GiaoDichWebhookCreateManyInput = {
    ma_giao_dich_webhook?: number
    nguon: string
    raw_payload: string
    ma_giao_dich_ngan_hang?: string | null
    so_tien?: number | null
    noi_dung?: string | null
    ma_hoa_don_parse?: number | null
    ket_qua_xu_ly: string
    ghi_chu?: string | null
    created_at?: Date | string | null
  }

  export type GiaoDichWebhookUpdateManyMutationInput = {
    nguon?: StringFieldUpdateOperationsInput | string
    raw_payload?: StringFieldUpdateOperationsInput | string
    ma_giao_dich_ngan_hang?: NullableStringFieldUpdateOperationsInput | string | null
    so_tien?: NullableIntFieldUpdateOperationsInput | number | null
    noi_dung?: NullableStringFieldUpdateOperationsInput | string | null
    ma_hoa_don_parse?: NullableIntFieldUpdateOperationsInput | number | null
    ket_qua_xu_ly?: StringFieldUpdateOperationsInput | string
    ghi_chu?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GiaoDichWebhookUncheckedUpdateManyInput = {
    ma_giao_dich_webhook?: IntFieldUpdateOperationsInput | number
    nguon?: StringFieldUpdateOperationsInput | string
    raw_payload?: StringFieldUpdateOperationsInput | string
    ma_giao_dich_ngan_hang?: NullableStringFieldUpdateOperationsInput | string | null
    so_tien?: NullableIntFieldUpdateOperationsInput | number | null
    noi_dung?: NullableStringFieldUpdateOperationsInput | string | null
    ma_hoa_don_parse?: NullableIntFieldUpdateOperationsInput | number | null
    ket_qua_xu_ly?: StringFieldUpdateOperationsInput | string
    ghi_chu?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type PhimNullableScalarRelationFilter = {
    is?: PhimWhereInput | null
    isNot?: PhimWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BannerOrderByRelevanceInput = {
    fields: BannerOrderByRelevanceFieldEnum | BannerOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type BannerCountOrderByAggregateInput = {
    ma_banner?: SortOrder
    ma_phim?: SortOrder
    hinh_anh?: SortOrder
  }

  export type BannerAvgOrderByAggregateInput = {
    ma_banner?: SortOrder
    ma_phim?: SortOrder
  }

  export type BannerMaxOrderByAggregateInput = {
    ma_banner?: SortOrder
    ma_phim?: SortOrder
    hinh_anh?: SortOrder
  }

  export type BannerMinOrderByAggregateInput = {
    ma_banner?: SortOrder
    ma_phim?: SortOrder
    hinh_anh?: SortOrder
  }

  export type BannerSumOrderByAggregateInput = {
    ma_banner?: SortOrder
    ma_phim?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type HeThongRapNullableScalarRelationFilter = {
    is?: HeThongRapWhereInput | null
    isNot?: HeThongRapWhereInput | null
  }

  export type RapPhimListRelationFilter = {
    every?: RapPhimWhereInput
    some?: RapPhimWhereInput
    none?: RapPhimWhereInput
  }

  export type RapPhimOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CumRapOrderByRelevanceInput = {
    fields: CumRapOrderByRelevanceFieldEnum | CumRapOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CumRapCountOrderByAggregateInput = {
    ma_cum_rap?: SortOrder
    ten_cum_rap?: SortOrder
    dia_chi?: SortOrder
    ma_he_thong_rap?: SortOrder
    khu_vuc?: SortOrder
  }

  export type CumRapAvgOrderByAggregateInput = {
    ma_cum_rap?: SortOrder
    ma_he_thong_rap?: SortOrder
  }

  export type CumRapMaxOrderByAggregateInput = {
    ma_cum_rap?: SortOrder
    ten_cum_rap?: SortOrder
    dia_chi?: SortOrder
    ma_he_thong_rap?: SortOrder
    khu_vuc?: SortOrder
  }

  export type CumRapMinOrderByAggregateInput = {
    ma_cum_rap?: SortOrder
    ten_cum_rap?: SortOrder
    dia_chi?: SortOrder
    ma_he_thong_rap?: SortOrder
    khu_vuc?: SortOrder
  }

  export type CumRapSumOrderByAggregateInput = {
    ma_cum_rap?: SortOrder
    ma_he_thong_rap?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NguoiDungScalarRelationFilter = {
    is?: NguoiDungWhereInput
    isNot?: NguoiDungWhereInput
  }

  export type LichChieuScalarRelationFilter = {
    is?: LichChieuWhereInput
    isNot?: LichChieuWhereInput
  }

  export type GheScalarRelationFilter = {
    is?: GheWhereInput
    isNot?: GheWhereInput
  }

  export type HoaDonNullableScalarRelationFilter = {
    is?: HoaDonWhereInput | null
    isNot?: HoaDonWhereInput | null
  }

  export type DatVeMa_lich_chieuMa_gheCompoundUniqueInput = {
    ma_lich_chieu: number
    ma_ghe: number
  }

  export type DatVeTai_khoanMa_lich_chieuMa_gheCompoundUniqueInput = {
    tai_khoan: number
    ma_lich_chieu: number
    ma_ghe: number
  }

  export type DatVeCountOrderByAggregateInput = {
    tai_khoan?: SortOrder
    ma_lich_chieu?: SortOrder
    ma_ghe?: SortOrder
    gia_ve?: SortOrder
    ma_hoa_don?: SortOrder
    created_at?: SortOrder
  }

  export type DatVeAvgOrderByAggregateInput = {
    tai_khoan?: SortOrder
    ma_lich_chieu?: SortOrder
    ma_ghe?: SortOrder
    gia_ve?: SortOrder
    ma_hoa_don?: SortOrder
  }

  export type DatVeMaxOrderByAggregateInput = {
    tai_khoan?: SortOrder
    ma_lich_chieu?: SortOrder
    ma_ghe?: SortOrder
    gia_ve?: SortOrder
    ma_hoa_don?: SortOrder
    created_at?: SortOrder
  }

  export type DatVeMinOrderByAggregateInput = {
    tai_khoan?: SortOrder
    ma_lich_chieu?: SortOrder
    ma_ghe?: SortOrder
    gia_ve?: SortOrder
    ma_hoa_don?: SortOrder
    created_at?: SortOrder
  }

  export type DatVeSumOrderByAggregateInput = {
    tai_khoan?: SortOrder
    ma_lich_chieu?: SortOrder
    ma_ghe?: SortOrder
    gia_ve?: SortOrder
    ma_hoa_don?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DatVeListRelationFilter = {
    every?: DatVeWhereInput
    some?: DatVeWhereInput
    none?: DatVeWhereInput
  }

  export type RapPhimNullableScalarRelationFilter = {
    is?: RapPhimWhereInput | null
    isNot?: RapPhimWhereInput | null
  }

  export type GiuChoListRelationFilter = {
    every?: GiuChoWhereInput
    some?: GiuChoWhereInput
    none?: GiuChoWhereInput
  }

  export type DatVeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GiuChoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GheOrderByRelevanceInput = {
    fields: GheOrderByRelevanceFieldEnum | GheOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type GheCountOrderByAggregateInput = {
    ma_ghe?: SortOrder
    ten_ghe?: SortOrder
    loai_ghe?: SortOrder
    ma_rap?: SortOrder
  }

  export type GheAvgOrderByAggregateInput = {
    ma_ghe?: SortOrder
    ma_rap?: SortOrder
  }

  export type GheMaxOrderByAggregateInput = {
    ma_ghe?: SortOrder
    ten_ghe?: SortOrder
    loai_ghe?: SortOrder
    ma_rap?: SortOrder
  }

  export type GheMinOrderByAggregateInput = {
    ma_ghe?: SortOrder
    ten_ghe?: SortOrder
    loai_ghe?: SortOrder
    ma_rap?: SortOrder
  }

  export type GheSumOrderByAggregateInput = {
    ma_ghe?: SortOrder
    ma_rap?: SortOrder
  }

  export type CumRapListRelationFilter = {
    every?: CumRapWhereInput
    some?: CumRapWhereInput
    none?: CumRapWhereInput
  }

  export type CumRapOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HeThongRapOrderByRelevanceInput = {
    fields: HeThongRapOrderByRelevanceFieldEnum | HeThongRapOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type HeThongRapCountOrderByAggregateInput = {
    ma_he_thong_rap?: SortOrder
    ten_he_thong_rap?: SortOrder
    logo?: SortOrder
  }

  export type HeThongRapAvgOrderByAggregateInput = {
    ma_he_thong_rap?: SortOrder
  }

  export type HeThongRapMaxOrderByAggregateInput = {
    ma_he_thong_rap?: SortOrder
    ten_he_thong_rap?: SortOrder
    logo?: SortOrder
  }

  export type HeThongRapMinOrderByAggregateInput = {
    ma_he_thong_rap?: SortOrder
    ten_he_thong_rap?: SortOrder
    logo?: SortOrder
  }

  export type HeThongRapSumOrderByAggregateInput = {
    ma_he_thong_rap?: SortOrder
  }

  export type HoaDonListRelationFilter = {
    every?: HoaDonWhereInput
    some?: HoaDonWhereInput
    none?: HoaDonWhereInput
  }

  export type HoaDonOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LichChieuCountOrderByAggregateInput = {
    ma_lich_chieu?: SortOrder
    ma_rap?: SortOrder
    ma_phim?: SortOrder
    ngay_gio_chieu?: SortOrder
    gia_ve?: SortOrder
  }

  export type LichChieuAvgOrderByAggregateInput = {
    ma_lich_chieu?: SortOrder
    ma_rap?: SortOrder
    ma_phim?: SortOrder
    gia_ve?: SortOrder
  }

  export type LichChieuMaxOrderByAggregateInput = {
    ma_lich_chieu?: SortOrder
    ma_rap?: SortOrder
    ma_phim?: SortOrder
    ngay_gio_chieu?: SortOrder
    gia_ve?: SortOrder
  }

  export type LichChieuMinOrderByAggregateInput = {
    ma_lich_chieu?: SortOrder
    ma_rap?: SortOrder
    ma_phim?: SortOrder
    ngay_gio_chieu?: SortOrder
    gia_ve?: SortOrder
  }

  export type LichChieuSumOrderByAggregateInput = {
    ma_lich_chieu?: SortOrder
    ma_rap?: SortOrder
    ma_phim?: SortOrder
    gia_ve?: SortOrder
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type RefreshTokenListRelationFilter = {
    every?: RefreshTokenWhereInput
    some?: RefreshTokenWhereInput
    none?: RefreshTokenWhereInput
  }

  export type RefreshTokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NguoiDungOrderByRelevanceInput = {
    fields: NguoiDungOrderByRelevanceFieldEnum | NguoiDungOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type NguoiDungCountOrderByAggregateInput = {
    tai_khoan?: SortOrder
    ho_ten?: SortOrder
    email?: SortOrder
    so_dt?: SortOrder
    mat_khau?: SortOrder
    loai_nguoi_dung?: SortOrder
    isDeleted?: SortOrder
  }

  export type NguoiDungAvgOrderByAggregateInput = {
    tai_khoan?: SortOrder
  }

  export type NguoiDungMaxOrderByAggregateInput = {
    tai_khoan?: SortOrder
    ho_ten?: SortOrder
    email?: SortOrder
    so_dt?: SortOrder
    mat_khau?: SortOrder
    loai_nguoi_dung?: SortOrder
    isDeleted?: SortOrder
  }

  export type NguoiDungMinOrderByAggregateInput = {
    tai_khoan?: SortOrder
    ho_ten?: SortOrder
    email?: SortOrder
    so_dt?: SortOrder
    mat_khau?: SortOrder
    loai_nguoi_dung?: SortOrder
    isDeleted?: SortOrder
  }

  export type NguoiDungSumOrderByAggregateInput = {
    tai_khoan?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type RefreshTokenOrderByRelevanceInput = {
    fields: RefreshTokenOrderByRelevanceFieldEnum | RefreshTokenOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RefreshTokenCountOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    tai_khoan?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type RefreshTokenAvgOrderByAggregateInput = {
    id?: SortOrder
    tai_khoan?: SortOrder
  }

  export type RefreshTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    tai_khoan?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type RefreshTokenMinOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    tai_khoan?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type RefreshTokenSumOrderByAggregateInput = {
    id?: SortOrder
    tai_khoan?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BannerListRelationFilter = {
    every?: BannerWhereInput
    some?: BannerWhereInput
    none?: BannerWhereInput
  }

  export type LichChieuListRelationFilter = {
    every?: LichChieuWhereInput
    some?: LichChieuWhereInput
    none?: LichChieuWhereInput
  }

  export type BannerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LichChieuOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PhimOrderByRelevanceInput = {
    fields: PhimOrderByRelevanceFieldEnum | PhimOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PhimCountOrderByAggregateInput = {
    ma_phim?: SortOrder
    ten_phim?: SortOrder
    trailer?: SortOrder
    hinh_anh?: SortOrder
    mo_ta?: SortOrder
    ngay_khoi_chieu?: SortOrder
    danh_gia?: SortOrder
    hot?: SortOrder
    dang_chieu?: SortOrder
    sap_chieu?: SortOrder
    isDeleted?: SortOrder
  }

  export type PhimAvgOrderByAggregateInput = {
    ma_phim?: SortOrder
    danh_gia?: SortOrder
  }

  export type PhimMaxOrderByAggregateInput = {
    ma_phim?: SortOrder
    ten_phim?: SortOrder
    trailer?: SortOrder
    hinh_anh?: SortOrder
    mo_ta?: SortOrder
    ngay_khoi_chieu?: SortOrder
    danh_gia?: SortOrder
    hot?: SortOrder
    dang_chieu?: SortOrder
    sap_chieu?: SortOrder
    isDeleted?: SortOrder
  }

  export type PhimMinOrderByAggregateInput = {
    ma_phim?: SortOrder
    ten_phim?: SortOrder
    trailer?: SortOrder
    hinh_anh?: SortOrder
    mo_ta?: SortOrder
    ngay_khoi_chieu?: SortOrder
    danh_gia?: SortOrder
    hot?: SortOrder
    dang_chieu?: SortOrder
    sap_chieu?: SortOrder
    isDeleted?: SortOrder
  }

  export type PhimSumOrderByAggregateInput = {
    ma_phim?: SortOrder
    danh_gia?: SortOrder
  }

  export type GheListRelationFilter = {
    every?: GheWhereInput
    some?: GheWhereInput
    none?: GheWhereInput
  }

  export type CumRapNullableScalarRelationFilter = {
    is?: CumRapWhereInput | null
    isNot?: CumRapWhereInput | null
  }

  export type GheOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RapPhimOrderByRelevanceInput = {
    fields: RapPhimOrderByRelevanceFieldEnum | RapPhimOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RapPhimCountOrderByAggregateInput = {
    ma_rap?: SortOrder
    ten_rap?: SortOrder
    ma_cum_rap?: SortOrder
  }

  export type RapPhimAvgOrderByAggregateInput = {
    ma_rap?: SortOrder
    ma_cum_rap?: SortOrder
  }

  export type RapPhimMaxOrderByAggregateInput = {
    ma_rap?: SortOrder
    ten_rap?: SortOrder
    ma_cum_rap?: SortOrder
  }

  export type RapPhimMinOrderByAggregateInput = {
    ma_rap?: SortOrder
    ten_rap?: SortOrder
    ma_cum_rap?: SortOrder
  }

  export type RapPhimSumOrderByAggregateInput = {
    ma_rap?: SortOrder
    ma_cum_rap?: SortOrder
  }

  export type EnumLoaiGiuChoFilter<$PrismaModel = never> = {
    equals?: $Enums.LoaiGiuCho | EnumLoaiGiuChoFieldRefInput<$PrismaModel>
    in?: $Enums.LoaiGiuCho[]
    notIn?: $Enums.LoaiGiuCho[]
    not?: NestedEnumLoaiGiuChoFilter<$PrismaModel> | $Enums.LoaiGiuCho
  }

  export type GiuChoMa_lich_chieuMa_gheCompoundUniqueInput = {
    ma_lich_chieu: number
    ma_ghe: number
  }

  export type GiuChoCountOrderByAggregateInput = {
    ma_giu_cho?: SortOrder
    tai_khoan?: SortOrder
    ma_lich_chieu?: SortOrder
    ma_ghe?: SortOrder
    loai?: SortOrder
    ma_hoa_don?: SortOrder
    gia_ve?: SortOrder
    expire_at?: SortOrder
    created_at?: SortOrder
  }

  export type GiuChoAvgOrderByAggregateInput = {
    ma_giu_cho?: SortOrder
    tai_khoan?: SortOrder
    ma_lich_chieu?: SortOrder
    ma_ghe?: SortOrder
    ma_hoa_don?: SortOrder
    gia_ve?: SortOrder
  }

  export type GiuChoMaxOrderByAggregateInput = {
    ma_giu_cho?: SortOrder
    tai_khoan?: SortOrder
    ma_lich_chieu?: SortOrder
    ma_ghe?: SortOrder
    loai?: SortOrder
    ma_hoa_don?: SortOrder
    gia_ve?: SortOrder
    expire_at?: SortOrder
    created_at?: SortOrder
  }

  export type GiuChoMinOrderByAggregateInput = {
    ma_giu_cho?: SortOrder
    tai_khoan?: SortOrder
    ma_lich_chieu?: SortOrder
    ma_ghe?: SortOrder
    loai?: SortOrder
    ma_hoa_don?: SortOrder
    gia_ve?: SortOrder
    expire_at?: SortOrder
    created_at?: SortOrder
  }

  export type GiuChoSumOrderByAggregateInput = {
    ma_giu_cho?: SortOrder
    tai_khoan?: SortOrder
    ma_lich_chieu?: SortOrder
    ma_ghe?: SortOrder
    ma_hoa_don?: SortOrder
    gia_ve?: SortOrder
  }

  export type EnumLoaiGiuChoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LoaiGiuCho | EnumLoaiGiuChoFieldRefInput<$PrismaModel>
    in?: $Enums.LoaiGiuCho[]
    notIn?: $Enums.LoaiGiuCho[]
    not?: NestedEnumLoaiGiuChoWithAggregatesFilter<$PrismaModel> | $Enums.LoaiGiuCho
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLoaiGiuChoFilter<$PrismaModel>
    _max?: NestedEnumLoaiGiuChoFilter<$PrismaModel>
  }

  export type EnumTrangThaiThanhToanFilter<$PrismaModel = never> = {
    equals?: $Enums.TrangThaiThanhToan | EnumTrangThaiThanhToanFieldRefInput<$PrismaModel>
    in?: $Enums.TrangThaiThanhToan[]
    notIn?: $Enums.TrangThaiThanhToan[]
    not?: NestedEnumTrangThaiThanhToanFilter<$PrismaModel> | $Enums.TrangThaiThanhToan
  }

  export type HoaDonComboListRelationFilter = {
    every?: HoaDonComboWhereInput
    some?: HoaDonComboWhereInput
    none?: HoaDonComboWhereInput
  }

  export type HoaDonComboOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HoaDonOrderByRelevanceInput = {
    fields: HoaDonOrderByRelevanceFieldEnum | HoaDonOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type HoaDonCountOrderByAggregateInput = {
    ma_hoa_don?: SortOrder
    tai_khoan?: SortOrder
    ma_lich_chieu?: SortOrder
    tong_tien?: SortOrder
    created_at?: SortOrder
    checked_in_at?: SortOrder
    trang_thai_thanh_toan?: SortOrder
    phuong_thuc_thanh_toan?: SortOrder
    ma_giao_dich_ngan_hang?: SortOrder
    so_tien_da_nhan?: SortOrder
    thanh_toan_luc?: SortOrder
    het_han_luc?: SortOrder
  }

  export type HoaDonAvgOrderByAggregateInput = {
    ma_hoa_don?: SortOrder
    tai_khoan?: SortOrder
    ma_lich_chieu?: SortOrder
    tong_tien?: SortOrder
    so_tien_da_nhan?: SortOrder
  }

  export type HoaDonMaxOrderByAggregateInput = {
    ma_hoa_don?: SortOrder
    tai_khoan?: SortOrder
    ma_lich_chieu?: SortOrder
    tong_tien?: SortOrder
    created_at?: SortOrder
    checked_in_at?: SortOrder
    trang_thai_thanh_toan?: SortOrder
    phuong_thuc_thanh_toan?: SortOrder
    ma_giao_dich_ngan_hang?: SortOrder
    so_tien_da_nhan?: SortOrder
    thanh_toan_luc?: SortOrder
    het_han_luc?: SortOrder
  }

  export type HoaDonMinOrderByAggregateInput = {
    ma_hoa_don?: SortOrder
    tai_khoan?: SortOrder
    ma_lich_chieu?: SortOrder
    tong_tien?: SortOrder
    created_at?: SortOrder
    checked_in_at?: SortOrder
    trang_thai_thanh_toan?: SortOrder
    phuong_thuc_thanh_toan?: SortOrder
    ma_giao_dich_ngan_hang?: SortOrder
    so_tien_da_nhan?: SortOrder
    thanh_toan_luc?: SortOrder
    het_han_luc?: SortOrder
  }

  export type HoaDonSumOrderByAggregateInput = {
    ma_hoa_don?: SortOrder
    tai_khoan?: SortOrder
    ma_lich_chieu?: SortOrder
    tong_tien?: SortOrder
    so_tien_da_nhan?: SortOrder
  }

  export type EnumTrangThaiThanhToanWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TrangThaiThanhToan | EnumTrangThaiThanhToanFieldRefInput<$PrismaModel>
    in?: $Enums.TrangThaiThanhToan[]
    notIn?: $Enums.TrangThaiThanhToan[]
    not?: NestedEnumTrangThaiThanhToanWithAggregatesFilter<$PrismaModel> | $Enums.TrangThaiThanhToan
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTrangThaiThanhToanFilter<$PrismaModel>
    _max?: NestedEnumTrangThaiThanhToanFilter<$PrismaModel>
  }

  export type ComboOrderByRelevanceInput = {
    fields: ComboOrderByRelevanceFieldEnum | ComboOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ComboCountOrderByAggregateInput = {
    ma_combo?: SortOrder
    ten_combo?: SortOrder
    mo_ta?: SortOrder
    gia?: SortOrder
    hinh_anh?: SortOrder
    isDeleted?: SortOrder
  }

  export type ComboAvgOrderByAggregateInput = {
    ma_combo?: SortOrder
    gia?: SortOrder
  }

  export type ComboMaxOrderByAggregateInput = {
    ma_combo?: SortOrder
    ten_combo?: SortOrder
    mo_ta?: SortOrder
    gia?: SortOrder
    hinh_anh?: SortOrder
    isDeleted?: SortOrder
  }

  export type ComboMinOrderByAggregateInput = {
    ma_combo?: SortOrder
    ten_combo?: SortOrder
    mo_ta?: SortOrder
    gia?: SortOrder
    hinh_anh?: SortOrder
    isDeleted?: SortOrder
  }

  export type ComboSumOrderByAggregateInput = {
    ma_combo?: SortOrder
    gia?: SortOrder
  }

  export type HoaDonScalarRelationFilter = {
    is?: HoaDonWhereInput
    isNot?: HoaDonWhereInput
  }

  export type ComboScalarRelationFilter = {
    is?: ComboWhereInput
    isNot?: ComboWhereInput
  }

  export type HoaDonComboMa_hoa_donMa_comboCompoundUniqueInput = {
    ma_hoa_don: number
    ma_combo: number
  }

  export type HoaDonComboCountOrderByAggregateInput = {
    ma_hoa_don?: SortOrder
    ma_combo?: SortOrder
    so_luong?: SortOrder
    don_gia?: SortOrder
  }

  export type HoaDonComboAvgOrderByAggregateInput = {
    ma_hoa_don?: SortOrder
    ma_combo?: SortOrder
    so_luong?: SortOrder
    don_gia?: SortOrder
  }

  export type HoaDonComboMaxOrderByAggregateInput = {
    ma_hoa_don?: SortOrder
    ma_combo?: SortOrder
    so_luong?: SortOrder
    don_gia?: SortOrder
  }

  export type HoaDonComboMinOrderByAggregateInput = {
    ma_hoa_don?: SortOrder
    ma_combo?: SortOrder
    so_luong?: SortOrder
    don_gia?: SortOrder
  }

  export type HoaDonComboSumOrderByAggregateInput = {
    ma_hoa_don?: SortOrder
    ma_combo?: SortOrder
    so_luong?: SortOrder
    don_gia?: SortOrder
  }

  export type GiaoDichWebhookOrderByRelevanceInput = {
    fields: GiaoDichWebhookOrderByRelevanceFieldEnum | GiaoDichWebhookOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type GiaoDichWebhookCountOrderByAggregateInput = {
    ma_giao_dich_webhook?: SortOrder
    nguon?: SortOrder
    raw_payload?: SortOrder
    ma_giao_dich_ngan_hang?: SortOrder
    so_tien?: SortOrder
    noi_dung?: SortOrder
    ma_hoa_don_parse?: SortOrder
    ket_qua_xu_ly?: SortOrder
    ghi_chu?: SortOrder
    created_at?: SortOrder
  }

  export type GiaoDichWebhookAvgOrderByAggregateInput = {
    ma_giao_dich_webhook?: SortOrder
    so_tien?: SortOrder
    ma_hoa_don_parse?: SortOrder
  }

  export type GiaoDichWebhookMaxOrderByAggregateInput = {
    ma_giao_dich_webhook?: SortOrder
    nguon?: SortOrder
    raw_payload?: SortOrder
    ma_giao_dich_ngan_hang?: SortOrder
    so_tien?: SortOrder
    noi_dung?: SortOrder
    ma_hoa_don_parse?: SortOrder
    ket_qua_xu_ly?: SortOrder
    ghi_chu?: SortOrder
    created_at?: SortOrder
  }

  export type GiaoDichWebhookMinOrderByAggregateInput = {
    ma_giao_dich_webhook?: SortOrder
    nguon?: SortOrder
    raw_payload?: SortOrder
    ma_giao_dich_ngan_hang?: SortOrder
    so_tien?: SortOrder
    noi_dung?: SortOrder
    ma_hoa_don_parse?: SortOrder
    ket_qua_xu_ly?: SortOrder
    ghi_chu?: SortOrder
    created_at?: SortOrder
  }

  export type GiaoDichWebhookSumOrderByAggregateInput = {
    ma_giao_dich_webhook?: SortOrder
    so_tien?: SortOrder
    ma_hoa_don_parse?: SortOrder
  }

  export type PhimCreateNestedOneWithoutBannerInput = {
    create?: XOR<PhimCreateWithoutBannerInput, PhimUncheckedCreateWithoutBannerInput>
    connectOrCreate?: PhimCreateOrConnectWithoutBannerInput
    connect?: PhimWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type PhimUpdateOneWithoutBannerNestedInput = {
    create?: XOR<PhimCreateWithoutBannerInput, PhimUncheckedCreateWithoutBannerInput>
    connectOrCreate?: PhimCreateOrConnectWithoutBannerInput
    upsert?: PhimUpsertWithoutBannerInput
    disconnect?: PhimWhereInput | boolean
    delete?: PhimWhereInput | boolean
    connect?: PhimWhereUniqueInput
    update?: XOR<XOR<PhimUpdateToOneWithWhereWithoutBannerInput, PhimUpdateWithoutBannerInput>, PhimUncheckedUpdateWithoutBannerInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type HeThongRapCreateNestedOneWithoutCumRapInput = {
    create?: XOR<HeThongRapCreateWithoutCumRapInput, HeThongRapUncheckedCreateWithoutCumRapInput>
    connectOrCreate?: HeThongRapCreateOrConnectWithoutCumRapInput
    connect?: HeThongRapWhereUniqueInput
  }

  export type RapPhimCreateNestedManyWithoutCumRapInput = {
    create?: XOR<RapPhimCreateWithoutCumRapInput, RapPhimUncheckedCreateWithoutCumRapInput> | RapPhimCreateWithoutCumRapInput[] | RapPhimUncheckedCreateWithoutCumRapInput[]
    connectOrCreate?: RapPhimCreateOrConnectWithoutCumRapInput | RapPhimCreateOrConnectWithoutCumRapInput[]
    createMany?: RapPhimCreateManyCumRapInputEnvelope
    connect?: RapPhimWhereUniqueInput | RapPhimWhereUniqueInput[]
  }

  export type RapPhimUncheckedCreateNestedManyWithoutCumRapInput = {
    create?: XOR<RapPhimCreateWithoutCumRapInput, RapPhimUncheckedCreateWithoutCumRapInput> | RapPhimCreateWithoutCumRapInput[] | RapPhimUncheckedCreateWithoutCumRapInput[]
    connectOrCreate?: RapPhimCreateOrConnectWithoutCumRapInput | RapPhimCreateOrConnectWithoutCumRapInput[]
    createMany?: RapPhimCreateManyCumRapInputEnvelope
    connect?: RapPhimWhereUniqueInput | RapPhimWhereUniqueInput[]
  }

  export type HeThongRapUpdateOneWithoutCumRapNestedInput = {
    create?: XOR<HeThongRapCreateWithoutCumRapInput, HeThongRapUncheckedCreateWithoutCumRapInput>
    connectOrCreate?: HeThongRapCreateOrConnectWithoutCumRapInput
    upsert?: HeThongRapUpsertWithoutCumRapInput
    disconnect?: HeThongRapWhereInput | boolean
    delete?: HeThongRapWhereInput | boolean
    connect?: HeThongRapWhereUniqueInput
    update?: XOR<XOR<HeThongRapUpdateToOneWithWhereWithoutCumRapInput, HeThongRapUpdateWithoutCumRapInput>, HeThongRapUncheckedUpdateWithoutCumRapInput>
  }

  export type RapPhimUpdateManyWithoutCumRapNestedInput = {
    create?: XOR<RapPhimCreateWithoutCumRapInput, RapPhimUncheckedCreateWithoutCumRapInput> | RapPhimCreateWithoutCumRapInput[] | RapPhimUncheckedCreateWithoutCumRapInput[]
    connectOrCreate?: RapPhimCreateOrConnectWithoutCumRapInput | RapPhimCreateOrConnectWithoutCumRapInput[]
    upsert?: RapPhimUpsertWithWhereUniqueWithoutCumRapInput | RapPhimUpsertWithWhereUniqueWithoutCumRapInput[]
    createMany?: RapPhimCreateManyCumRapInputEnvelope
    set?: RapPhimWhereUniqueInput | RapPhimWhereUniqueInput[]
    disconnect?: RapPhimWhereUniqueInput | RapPhimWhereUniqueInput[]
    delete?: RapPhimWhereUniqueInput | RapPhimWhereUniqueInput[]
    connect?: RapPhimWhereUniqueInput | RapPhimWhereUniqueInput[]
    update?: RapPhimUpdateWithWhereUniqueWithoutCumRapInput | RapPhimUpdateWithWhereUniqueWithoutCumRapInput[]
    updateMany?: RapPhimUpdateManyWithWhereWithoutCumRapInput | RapPhimUpdateManyWithWhereWithoutCumRapInput[]
    deleteMany?: RapPhimScalarWhereInput | RapPhimScalarWhereInput[]
  }

  export type RapPhimUncheckedUpdateManyWithoutCumRapNestedInput = {
    create?: XOR<RapPhimCreateWithoutCumRapInput, RapPhimUncheckedCreateWithoutCumRapInput> | RapPhimCreateWithoutCumRapInput[] | RapPhimUncheckedCreateWithoutCumRapInput[]
    connectOrCreate?: RapPhimCreateOrConnectWithoutCumRapInput | RapPhimCreateOrConnectWithoutCumRapInput[]
    upsert?: RapPhimUpsertWithWhereUniqueWithoutCumRapInput | RapPhimUpsertWithWhereUniqueWithoutCumRapInput[]
    createMany?: RapPhimCreateManyCumRapInputEnvelope
    set?: RapPhimWhereUniqueInput | RapPhimWhereUniqueInput[]
    disconnect?: RapPhimWhereUniqueInput | RapPhimWhereUniqueInput[]
    delete?: RapPhimWhereUniqueInput | RapPhimWhereUniqueInput[]
    connect?: RapPhimWhereUniqueInput | RapPhimWhereUniqueInput[]
    update?: RapPhimUpdateWithWhereUniqueWithoutCumRapInput | RapPhimUpdateWithWhereUniqueWithoutCumRapInput[]
    updateMany?: RapPhimUpdateManyWithWhereWithoutCumRapInput | RapPhimUpdateManyWithWhereWithoutCumRapInput[]
    deleteMany?: RapPhimScalarWhereInput | RapPhimScalarWhereInput[]
  }

  export type NguoiDungCreateNestedOneWithoutDatVeInput = {
    create?: XOR<NguoiDungCreateWithoutDatVeInput, NguoiDungUncheckedCreateWithoutDatVeInput>
    connectOrCreate?: NguoiDungCreateOrConnectWithoutDatVeInput
    connect?: NguoiDungWhereUniqueInput
  }

  export type LichChieuCreateNestedOneWithoutDatVeInput = {
    create?: XOR<LichChieuCreateWithoutDatVeInput, LichChieuUncheckedCreateWithoutDatVeInput>
    connectOrCreate?: LichChieuCreateOrConnectWithoutDatVeInput
    connect?: LichChieuWhereUniqueInput
  }

  export type GheCreateNestedOneWithoutDatVeInput = {
    create?: XOR<GheCreateWithoutDatVeInput, GheUncheckedCreateWithoutDatVeInput>
    connectOrCreate?: GheCreateOrConnectWithoutDatVeInput
    connect?: GheWhereUniqueInput
  }

  export type HoaDonCreateNestedOneWithoutDatVeInput = {
    create?: XOR<HoaDonCreateWithoutDatVeInput, HoaDonUncheckedCreateWithoutDatVeInput>
    connectOrCreate?: HoaDonCreateOrConnectWithoutDatVeInput
    connect?: HoaDonWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NguoiDungUpdateOneRequiredWithoutDatVeNestedInput = {
    create?: XOR<NguoiDungCreateWithoutDatVeInput, NguoiDungUncheckedCreateWithoutDatVeInput>
    connectOrCreate?: NguoiDungCreateOrConnectWithoutDatVeInput
    upsert?: NguoiDungUpsertWithoutDatVeInput
    connect?: NguoiDungWhereUniqueInput
    update?: XOR<XOR<NguoiDungUpdateToOneWithWhereWithoutDatVeInput, NguoiDungUpdateWithoutDatVeInput>, NguoiDungUncheckedUpdateWithoutDatVeInput>
  }

  export type LichChieuUpdateOneRequiredWithoutDatVeNestedInput = {
    create?: XOR<LichChieuCreateWithoutDatVeInput, LichChieuUncheckedCreateWithoutDatVeInput>
    connectOrCreate?: LichChieuCreateOrConnectWithoutDatVeInput
    upsert?: LichChieuUpsertWithoutDatVeInput
    connect?: LichChieuWhereUniqueInput
    update?: XOR<XOR<LichChieuUpdateToOneWithWhereWithoutDatVeInput, LichChieuUpdateWithoutDatVeInput>, LichChieuUncheckedUpdateWithoutDatVeInput>
  }

  export type GheUpdateOneRequiredWithoutDatVeNestedInput = {
    create?: XOR<GheCreateWithoutDatVeInput, GheUncheckedCreateWithoutDatVeInput>
    connectOrCreate?: GheCreateOrConnectWithoutDatVeInput
    upsert?: GheUpsertWithoutDatVeInput
    connect?: GheWhereUniqueInput
    update?: XOR<XOR<GheUpdateToOneWithWhereWithoutDatVeInput, GheUpdateWithoutDatVeInput>, GheUncheckedUpdateWithoutDatVeInput>
  }

  export type HoaDonUpdateOneWithoutDatVeNestedInput = {
    create?: XOR<HoaDonCreateWithoutDatVeInput, HoaDonUncheckedCreateWithoutDatVeInput>
    connectOrCreate?: HoaDonCreateOrConnectWithoutDatVeInput
    upsert?: HoaDonUpsertWithoutDatVeInput
    disconnect?: HoaDonWhereInput | boolean
    delete?: HoaDonWhereInput | boolean
    connect?: HoaDonWhereUniqueInput
    update?: XOR<XOR<HoaDonUpdateToOneWithWhereWithoutDatVeInput, HoaDonUpdateWithoutDatVeInput>, HoaDonUncheckedUpdateWithoutDatVeInput>
  }

  export type DatVeCreateNestedManyWithoutGheInput = {
    create?: XOR<DatVeCreateWithoutGheInput, DatVeUncheckedCreateWithoutGheInput> | DatVeCreateWithoutGheInput[] | DatVeUncheckedCreateWithoutGheInput[]
    connectOrCreate?: DatVeCreateOrConnectWithoutGheInput | DatVeCreateOrConnectWithoutGheInput[]
    createMany?: DatVeCreateManyGheInputEnvelope
    connect?: DatVeWhereUniqueInput | DatVeWhereUniqueInput[]
  }

  export type RapPhimCreateNestedOneWithoutGheInput = {
    create?: XOR<RapPhimCreateWithoutGheInput, RapPhimUncheckedCreateWithoutGheInput>
    connectOrCreate?: RapPhimCreateOrConnectWithoutGheInput
    connect?: RapPhimWhereUniqueInput
  }

  export type GiuChoCreateNestedManyWithoutGheInput = {
    create?: XOR<GiuChoCreateWithoutGheInput, GiuChoUncheckedCreateWithoutGheInput> | GiuChoCreateWithoutGheInput[] | GiuChoUncheckedCreateWithoutGheInput[]
    connectOrCreate?: GiuChoCreateOrConnectWithoutGheInput | GiuChoCreateOrConnectWithoutGheInput[]
    createMany?: GiuChoCreateManyGheInputEnvelope
    connect?: GiuChoWhereUniqueInput | GiuChoWhereUniqueInput[]
  }

  export type DatVeUncheckedCreateNestedManyWithoutGheInput = {
    create?: XOR<DatVeCreateWithoutGheInput, DatVeUncheckedCreateWithoutGheInput> | DatVeCreateWithoutGheInput[] | DatVeUncheckedCreateWithoutGheInput[]
    connectOrCreate?: DatVeCreateOrConnectWithoutGheInput | DatVeCreateOrConnectWithoutGheInput[]
    createMany?: DatVeCreateManyGheInputEnvelope
    connect?: DatVeWhereUniqueInput | DatVeWhereUniqueInput[]
  }

  export type GiuChoUncheckedCreateNestedManyWithoutGheInput = {
    create?: XOR<GiuChoCreateWithoutGheInput, GiuChoUncheckedCreateWithoutGheInput> | GiuChoCreateWithoutGheInput[] | GiuChoUncheckedCreateWithoutGheInput[]
    connectOrCreate?: GiuChoCreateOrConnectWithoutGheInput | GiuChoCreateOrConnectWithoutGheInput[]
    createMany?: GiuChoCreateManyGheInputEnvelope
    connect?: GiuChoWhereUniqueInput | GiuChoWhereUniqueInput[]
  }

  export type DatVeUpdateManyWithoutGheNestedInput = {
    create?: XOR<DatVeCreateWithoutGheInput, DatVeUncheckedCreateWithoutGheInput> | DatVeCreateWithoutGheInput[] | DatVeUncheckedCreateWithoutGheInput[]
    connectOrCreate?: DatVeCreateOrConnectWithoutGheInput | DatVeCreateOrConnectWithoutGheInput[]
    upsert?: DatVeUpsertWithWhereUniqueWithoutGheInput | DatVeUpsertWithWhereUniqueWithoutGheInput[]
    createMany?: DatVeCreateManyGheInputEnvelope
    set?: DatVeWhereUniqueInput | DatVeWhereUniqueInput[]
    disconnect?: DatVeWhereUniqueInput | DatVeWhereUniqueInput[]
    delete?: DatVeWhereUniqueInput | DatVeWhereUniqueInput[]
    connect?: DatVeWhereUniqueInput | DatVeWhereUniqueInput[]
    update?: DatVeUpdateWithWhereUniqueWithoutGheInput | DatVeUpdateWithWhereUniqueWithoutGheInput[]
    updateMany?: DatVeUpdateManyWithWhereWithoutGheInput | DatVeUpdateManyWithWhereWithoutGheInput[]
    deleteMany?: DatVeScalarWhereInput | DatVeScalarWhereInput[]
  }

  export type RapPhimUpdateOneWithoutGheNestedInput = {
    create?: XOR<RapPhimCreateWithoutGheInput, RapPhimUncheckedCreateWithoutGheInput>
    connectOrCreate?: RapPhimCreateOrConnectWithoutGheInput
    upsert?: RapPhimUpsertWithoutGheInput
    disconnect?: RapPhimWhereInput | boolean
    delete?: RapPhimWhereInput | boolean
    connect?: RapPhimWhereUniqueInput
    update?: XOR<XOR<RapPhimUpdateToOneWithWhereWithoutGheInput, RapPhimUpdateWithoutGheInput>, RapPhimUncheckedUpdateWithoutGheInput>
  }

  export type GiuChoUpdateManyWithoutGheNestedInput = {
    create?: XOR<GiuChoCreateWithoutGheInput, GiuChoUncheckedCreateWithoutGheInput> | GiuChoCreateWithoutGheInput[] | GiuChoUncheckedCreateWithoutGheInput[]
    connectOrCreate?: GiuChoCreateOrConnectWithoutGheInput | GiuChoCreateOrConnectWithoutGheInput[]
    upsert?: GiuChoUpsertWithWhereUniqueWithoutGheInput | GiuChoUpsertWithWhereUniqueWithoutGheInput[]
    createMany?: GiuChoCreateManyGheInputEnvelope
    set?: GiuChoWhereUniqueInput | GiuChoWhereUniqueInput[]
    disconnect?: GiuChoWhereUniqueInput | GiuChoWhereUniqueInput[]
    delete?: GiuChoWhereUniqueInput | GiuChoWhereUniqueInput[]
    connect?: GiuChoWhereUniqueInput | GiuChoWhereUniqueInput[]
    update?: GiuChoUpdateWithWhereUniqueWithoutGheInput | GiuChoUpdateWithWhereUniqueWithoutGheInput[]
    updateMany?: GiuChoUpdateManyWithWhereWithoutGheInput | GiuChoUpdateManyWithWhereWithoutGheInput[]
    deleteMany?: GiuChoScalarWhereInput | GiuChoScalarWhereInput[]
  }

  export type DatVeUncheckedUpdateManyWithoutGheNestedInput = {
    create?: XOR<DatVeCreateWithoutGheInput, DatVeUncheckedCreateWithoutGheInput> | DatVeCreateWithoutGheInput[] | DatVeUncheckedCreateWithoutGheInput[]
    connectOrCreate?: DatVeCreateOrConnectWithoutGheInput | DatVeCreateOrConnectWithoutGheInput[]
    upsert?: DatVeUpsertWithWhereUniqueWithoutGheInput | DatVeUpsertWithWhereUniqueWithoutGheInput[]
    createMany?: DatVeCreateManyGheInputEnvelope
    set?: DatVeWhereUniqueInput | DatVeWhereUniqueInput[]
    disconnect?: DatVeWhereUniqueInput | DatVeWhereUniqueInput[]
    delete?: DatVeWhereUniqueInput | DatVeWhereUniqueInput[]
    connect?: DatVeWhereUniqueInput | DatVeWhereUniqueInput[]
    update?: DatVeUpdateWithWhereUniqueWithoutGheInput | DatVeUpdateWithWhereUniqueWithoutGheInput[]
    updateMany?: DatVeUpdateManyWithWhereWithoutGheInput | DatVeUpdateManyWithWhereWithoutGheInput[]
    deleteMany?: DatVeScalarWhereInput | DatVeScalarWhereInput[]
  }

  export type GiuChoUncheckedUpdateManyWithoutGheNestedInput = {
    create?: XOR<GiuChoCreateWithoutGheInput, GiuChoUncheckedCreateWithoutGheInput> | GiuChoCreateWithoutGheInput[] | GiuChoUncheckedCreateWithoutGheInput[]
    connectOrCreate?: GiuChoCreateOrConnectWithoutGheInput | GiuChoCreateOrConnectWithoutGheInput[]
    upsert?: GiuChoUpsertWithWhereUniqueWithoutGheInput | GiuChoUpsertWithWhereUniqueWithoutGheInput[]
    createMany?: GiuChoCreateManyGheInputEnvelope
    set?: GiuChoWhereUniqueInput | GiuChoWhereUniqueInput[]
    disconnect?: GiuChoWhereUniqueInput | GiuChoWhereUniqueInput[]
    delete?: GiuChoWhereUniqueInput | GiuChoWhereUniqueInput[]
    connect?: GiuChoWhereUniqueInput | GiuChoWhereUniqueInput[]
    update?: GiuChoUpdateWithWhereUniqueWithoutGheInput | GiuChoUpdateWithWhereUniqueWithoutGheInput[]
    updateMany?: GiuChoUpdateManyWithWhereWithoutGheInput | GiuChoUpdateManyWithWhereWithoutGheInput[]
    deleteMany?: GiuChoScalarWhereInput | GiuChoScalarWhereInput[]
  }

  export type CumRapCreateNestedManyWithoutHeThongRapInput = {
    create?: XOR<CumRapCreateWithoutHeThongRapInput, CumRapUncheckedCreateWithoutHeThongRapInput> | CumRapCreateWithoutHeThongRapInput[] | CumRapUncheckedCreateWithoutHeThongRapInput[]
    connectOrCreate?: CumRapCreateOrConnectWithoutHeThongRapInput | CumRapCreateOrConnectWithoutHeThongRapInput[]
    createMany?: CumRapCreateManyHeThongRapInputEnvelope
    connect?: CumRapWhereUniqueInput | CumRapWhereUniqueInput[]
  }

  export type CumRapUncheckedCreateNestedManyWithoutHeThongRapInput = {
    create?: XOR<CumRapCreateWithoutHeThongRapInput, CumRapUncheckedCreateWithoutHeThongRapInput> | CumRapCreateWithoutHeThongRapInput[] | CumRapUncheckedCreateWithoutHeThongRapInput[]
    connectOrCreate?: CumRapCreateOrConnectWithoutHeThongRapInput | CumRapCreateOrConnectWithoutHeThongRapInput[]
    createMany?: CumRapCreateManyHeThongRapInputEnvelope
    connect?: CumRapWhereUniqueInput | CumRapWhereUniqueInput[]
  }

  export type CumRapUpdateManyWithoutHeThongRapNestedInput = {
    create?: XOR<CumRapCreateWithoutHeThongRapInput, CumRapUncheckedCreateWithoutHeThongRapInput> | CumRapCreateWithoutHeThongRapInput[] | CumRapUncheckedCreateWithoutHeThongRapInput[]
    connectOrCreate?: CumRapCreateOrConnectWithoutHeThongRapInput | CumRapCreateOrConnectWithoutHeThongRapInput[]
    upsert?: CumRapUpsertWithWhereUniqueWithoutHeThongRapInput | CumRapUpsertWithWhereUniqueWithoutHeThongRapInput[]
    createMany?: CumRapCreateManyHeThongRapInputEnvelope
    set?: CumRapWhereUniqueInput | CumRapWhereUniqueInput[]
    disconnect?: CumRapWhereUniqueInput | CumRapWhereUniqueInput[]
    delete?: CumRapWhereUniqueInput | CumRapWhereUniqueInput[]
    connect?: CumRapWhereUniqueInput | CumRapWhereUniqueInput[]
    update?: CumRapUpdateWithWhereUniqueWithoutHeThongRapInput | CumRapUpdateWithWhereUniqueWithoutHeThongRapInput[]
    updateMany?: CumRapUpdateManyWithWhereWithoutHeThongRapInput | CumRapUpdateManyWithWhereWithoutHeThongRapInput[]
    deleteMany?: CumRapScalarWhereInput | CumRapScalarWhereInput[]
  }

  export type CumRapUncheckedUpdateManyWithoutHeThongRapNestedInput = {
    create?: XOR<CumRapCreateWithoutHeThongRapInput, CumRapUncheckedCreateWithoutHeThongRapInput> | CumRapCreateWithoutHeThongRapInput[] | CumRapUncheckedCreateWithoutHeThongRapInput[]
    connectOrCreate?: CumRapCreateOrConnectWithoutHeThongRapInput | CumRapCreateOrConnectWithoutHeThongRapInput[]
    upsert?: CumRapUpsertWithWhereUniqueWithoutHeThongRapInput | CumRapUpsertWithWhereUniqueWithoutHeThongRapInput[]
    createMany?: CumRapCreateManyHeThongRapInputEnvelope
    set?: CumRapWhereUniqueInput | CumRapWhereUniqueInput[]
    disconnect?: CumRapWhereUniqueInput | CumRapWhereUniqueInput[]
    delete?: CumRapWhereUniqueInput | CumRapWhereUniqueInput[]
    connect?: CumRapWhereUniqueInput | CumRapWhereUniqueInput[]
    update?: CumRapUpdateWithWhereUniqueWithoutHeThongRapInput | CumRapUpdateWithWhereUniqueWithoutHeThongRapInput[]
    updateMany?: CumRapUpdateManyWithWhereWithoutHeThongRapInput | CumRapUpdateManyWithWhereWithoutHeThongRapInput[]
    deleteMany?: CumRapScalarWhereInput | CumRapScalarWhereInput[]
  }

  export type DatVeCreateNestedManyWithoutLichChieuInput = {
    create?: XOR<DatVeCreateWithoutLichChieuInput, DatVeUncheckedCreateWithoutLichChieuInput> | DatVeCreateWithoutLichChieuInput[] | DatVeUncheckedCreateWithoutLichChieuInput[]
    connectOrCreate?: DatVeCreateOrConnectWithoutLichChieuInput | DatVeCreateOrConnectWithoutLichChieuInput[]
    createMany?: DatVeCreateManyLichChieuInputEnvelope
    connect?: DatVeWhereUniqueInput | DatVeWhereUniqueInput[]
  }

  export type GiuChoCreateNestedManyWithoutLichChieuInput = {
    create?: XOR<GiuChoCreateWithoutLichChieuInput, GiuChoUncheckedCreateWithoutLichChieuInput> | GiuChoCreateWithoutLichChieuInput[] | GiuChoUncheckedCreateWithoutLichChieuInput[]
    connectOrCreate?: GiuChoCreateOrConnectWithoutLichChieuInput | GiuChoCreateOrConnectWithoutLichChieuInput[]
    createMany?: GiuChoCreateManyLichChieuInputEnvelope
    connect?: GiuChoWhereUniqueInput | GiuChoWhereUniqueInput[]
  }

  export type HoaDonCreateNestedManyWithoutLichChieuInput = {
    create?: XOR<HoaDonCreateWithoutLichChieuInput, HoaDonUncheckedCreateWithoutLichChieuInput> | HoaDonCreateWithoutLichChieuInput[] | HoaDonUncheckedCreateWithoutLichChieuInput[]
    connectOrCreate?: HoaDonCreateOrConnectWithoutLichChieuInput | HoaDonCreateOrConnectWithoutLichChieuInput[]
    createMany?: HoaDonCreateManyLichChieuInputEnvelope
    connect?: HoaDonWhereUniqueInput | HoaDonWhereUniqueInput[]
  }

  export type RapPhimCreateNestedOneWithoutLichChieuInput = {
    create?: XOR<RapPhimCreateWithoutLichChieuInput, RapPhimUncheckedCreateWithoutLichChieuInput>
    connectOrCreate?: RapPhimCreateOrConnectWithoutLichChieuInput
    connect?: RapPhimWhereUniqueInput
  }

  export type PhimCreateNestedOneWithoutLichChieuInput = {
    create?: XOR<PhimCreateWithoutLichChieuInput, PhimUncheckedCreateWithoutLichChieuInput>
    connectOrCreate?: PhimCreateOrConnectWithoutLichChieuInput
    connect?: PhimWhereUniqueInput
  }

  export type DatVeUncheckedCreateNestedManyWithoutLichChieuInput = {
    create?: XOR<DatVeCreateWithoutLichChieuInput, DatVeUncheckedCreateWithoutLichChieuInput> | DatVeCreateWithoutLichChieuInput[] | DatVeUncheckedCreateWithoutLichChieuInput[]
    connectOrCreate?: DatVeCreateOrConnectWithoutLichChieuInput | DatVeCreateOrConnectWithoutLichChieuInput[]
    createMany?: DatVeCreateManyLichChieuInputEnvelope
    connect?: DatVeWhereUniqueInput | DatVeWhereUniqueInput[]
  }

  export type GiuChoUncheckedCreateNestedManyWithoutLichChieuInput = {
    create?: XOR<GiuChoCreateWithoutLichChieuInput, GiuChoUncheckedCreateWithoutLichChieuInput> | GiuChoCreateWithoutLichChieuInput[] | GiuChoUncheckedCreateWithoutLichChieuInput[]
    connectOrCreate?: GiuChoCreateOrConnectWithoutLichChieuInput | GiuChoCreateOrConnectWithoutLichChieuInput[]
    createMany?: GiuChoCreateManyLichChieuInputEnvelope
    connect?: GiuChoWhereUniqueInput | GiuChoWhereUniqueInput[]
  }

  export type HoaDonUncheckedCreateNestedManyWithoutLichChieuInput = {
    create?: XOR<HoaDonCreateWithoutLichChieuInput, HoaDonUncheckedCreateWithoutLichChieuInput> | HoaDonCreateWithoutLichChieuInput[] | HoaDonUncheckedCreateWithoutLichChieuInput[]
    connectOrCreate?: HoaDonCreateOrConnectWithoutLichChieuInput | HoaDonCreateOrConnectWithoutLichChieuInput[]
    createMany?: HoaDonCreateManyLichChieuInputEnvelope
    connect?: HoaDonWhereUniqueInput | HoaDonWhereUniqueInput[]
  }

  export type DatVeUpdateManyWithoutLichChieuNestedInput = {
    create?: XOR<DatVeCreateWithoutLichChieuInput, DatVeUncheckedCreateWithoutLichChieuInput> | DatVeCreateWithoutLichChieuInput[] | DatVeUncheckedCreateWithoutLichChieuInput[]
    connectOrCreate?: DatVeCreateOrConnectWithoutLichChieuInput | DatVeCreateOrConnectWithoutLichChieuInput[]
    upsert?: DatVeUpsertWithWhereUniqueWithoutLichChieuInput | DatVeUpsertWithWhereUniqueWithoutLichChieuInput[]
    createMany?: DatVeCreateManyLichChieuInputEnvelope
    set?: DatVeWhereUniqueInput | DatVeWhereUniqueInput[]
    disconnect?: DatVeWhereUniqueInput | DatVeWhereUniqueInput[]
    delete?: DatVeWhereUniqueInput | DatVeWhereUniqueInput[]
    connect?: DatVeWhereUniqueInput | DatVeWhereUniqueInput[]
    update?: DatVeUpdateWithWhereUniqueWithoutLichChieuInput | DatVeUpdateWithWhereUniqueWithoutLichChieuInput[]
    updateMany?: DatVeUpdateManyWithWhereWithoutLichChieuInput | DatVeUpdateManyWithWhereWithoutLichChieuInput[]
    deleteMany?: DatVeScalarWhereInput | DatVeScalarWhereInput[]
  }

  export type GiuChoUpdateManyWithoutLichChieuNestedInput = {
    create?: XOR<GiuChoCreateWithoutLichChieuInput, GiuChoUncheckedCreateWithoutLichChieuInput> | GiuChoCreateWithoutLichChieuInput[] | GiuChoUncheckedCreateWithoutLichChieuInput[]
    connectOrCreate?: GiuChoCreateOrConnectWithoutLichChieuInput | GiuChoCreateOrConnectWithoutLichChieuInput[]
    upsert?: GiuChoUpsertWithWhereUniqueWithoutLichChieuInput | GiuChoUpsertWithWhereUniqueWithoutLichChieuInput[]
    createMany?: GiuChoCreateManyLichChieuInputEnvelope
    set?: GiuChoWhereUniqueInput | GiuChoWhereUniqueInput[]
    disconnect?: GiuChoWhereUniqueInput | GiuChoWhereUniqueInput[]
    delete?: GiuChoWhereUniqueInput | GiuChoWhereUniqueInput[]
    connect?: GiuChoWhereUniqueInput | GiuChoWhereUniqueInput[]
    update?: GiuChoUpdateWithWhereUniqueWithoutLichChieuInput | GiuChoUpdateWithWhereUniqueWithoutLichChieuInput[]
    updateMany?: GiuChoUpdateManyWithWhereWithoutLichChieuInput | GiuChoUpdateManyWithWhereWithoutLichChieuInput[]
    deleteMany?: GiuChoScalarWhereInput | GiuChoScalarWhereInput[]
  }

  export type HoaDonUpdateManyWithoutLichChieuNestedInput = {
    create?: XOR<HoaDonCreateWithoutLichChieuInput, HoaDonUncheckedCreateWithoutLichChieuInput> | HoaDonCreateWithoutLichChieuInput[] | HoaDonUncheckedCreateWithoutLichChieuInput[]
    connectOrCreate?: HoaDonCreateOrConnectWithoutLichChieuInput | HoaDonCreateOrConnectWithoutLichChieuInput[]
    upsert?: HoaDonUpsertWithWhereUniqueWithoutLichChieuInput | HoaDonUpsertWithWhereUniqueWithoutLichChieuInput[]
    createMany?: HoaDonCreateManyLichChieuInputEnvelope
    set?: HoaDonWhereUniqueInput | HoaDonWhereUniqueInput[]
    disconnect?: HoaDonWhereUniqueInput | HoaDonWhereUniqueInput[]
    delete?: HoaDonWhereUniqueInput | HoaDonWhereUniqueInput[]
    connect?: HoaDonWhereUniqueInput | HoaDonWhereUniqueInput[]
    update?: HoaDonUpdateWithWhereUniqueWithoutLichChieuInput | HoaDonUpdateWithWhereUniqueWithoutLichChieuInput[]
    updateMany?: HoaDonUpdateManyWithWhereWithoutLichChieuInput | HoaDonUpdateManyWithWhereWithoutLichChieuInput[]
    deleteMany?: HoaDonScalarWhereInput | HoaDonScalarWhereInput[]
  }

  export type RapPhimUpdateOneWithoutLichChieuNestedInput = {
    create?: XOR<RapPhimCreateWithoutLichChieuInput, RapPhimUncheckedCreateWithoutLichChieuInput>
    connectOrCreate?: RapPhimCreateOrConnectWithoutLichChieuInput
    upsert?: RapPhimUpsertWithoutLichChieuInput
    disconnect?: RapPhimWhereInput | boolean
    delete?: RapPhimWhereInput | boolean
    connect?: RapPhimWhereUniqueInput
    update?: XOR<XOR<RapPhimUpdateToOneWithWhereWithoutLichChieuInput, RapPhimUpdateWithoutLichChieuInput>, RapPhimUncheckedUpdateWithoutLichChieuInput>
  }

  export type PhimUpdateOneWithoutLichChieuNestedInput = {
    create?: XOR<PhimCreateWithoutLichChieuInput, PhimUncheckedCreateWithoutLichChieuInput>
    connectOrCreate?: PhimCreateOrConnectWithoutLichChieuInput
    upsert?: PhimUpsertWithoutLichChieuInput
    disconnect?: PhimWhereInput | boolean
    delete?: PhimWhereInput | boolean
    connect?: PhimWhereUniqueInput
    update?: XOR<XOR<PhimUpdateToOneWithWhereWithoutLichChieuInput, PhimUpdateWithoutLichChieuInput>, PhimUncheckedUpdateWithoutLichChieuInput>
  }

  export type DatVeUncheckedUpdateManyWithoutLichChieuNestedInput = {
    create?: XOR<DatVeCreateWithoutLichChieuInput, DatVeUncheckedCreateWithoutLichChieuInput> | DatVeCreateWithoutLichChieuInput[] | DatVeUncheckedCreateWithoutLichChieuInput[]
    connectOrCreate?: DatVeCreateOrConnectWithoutLichChieuInput | DatVeCreateOrConnectWithoutLichChieuInput[]
    upsert?: DatVeUpsertWithWhereUniqueWithoutLichChieuInput | DatVeUpsertWithWhereUniqueWithoutLichChieuInput[]
    createMany?: DatVeCreateManyLichChieuInputEnvelope
    set?: DatVeWhereUniqueInput | DatVeWhereUniqueInput[]
    disconnect?: DatVeWhereUniqueInput | DatVeWhereUniqueInput[]
    delete?: DatVeWhereUniqueInput | DatVeWhereUniqueInput[]
    connect?: DatVeWhereUniqueInput | DatVeWhereUniqueInput[]
    update?: DatVeUpdateWithWhereUniqueWithoutLichChieuInput | DatVeUpdateWithWhereUniqueWithoutLichChieuInput[]
    updateMany?: DatVeUpdateManyWithWhereWithoutLichChieuInput | DatVeUpdateManyWithWhereWithoutLichChieuInput[]
    deleteMany?: DatVeScalarWhereInput | DatVeScalarWhereInput[]
  }

  export type GiuChoUncheckedUpdateManyWithoutLichChieuNestedInput = {
    create?: XOR<GiuChoCreateWithoutLichChieuInput, GiuChoUncheckedCreateWithoutLichChieuInput> | GiuChoCreateWithoutLichChieuInput[] | GiuChoUncheckedCreateWithoutLichChieuInput[]
    connectOrCreate?: GiuChoCreateOrConnectWithoutLichChieuInput | GiuChoCreateOrConnectWithoutLichChieuInput[]
    upsert?: GiuChoUpsertWithWhereUniqueWithoutLichChieuInput | GiuChoUpsertWithWhereUniqueWithoutLichChieuInput[]
    createMany?: GiuChoCreateManyLichChieuInputEnvelope
    set?: GiuChoWhereUniqueInput | GiuChoWhereUniqueInput[]
    disconnect?: GiuChoWhereUniqueInput | GiuChoWhereUniqueInput[]
    delete?: GiuChoWhereUniqueInput | GiuChoWhereUniqueInput[]
    connect?: GiuChoWhereUniqueInput | GiuChoWhereUniqueInput[]
    update?: GiuChoUpdateWithWhereUniqueWithoutLichChieuInput | GiuChoUpdateWithWhereUniqueWithoutLichChieuInput[]
    updateMany?: GiuChoUpdateManyWithWhereWithoutLichChieuInput | GiuChoUpdateManyWithWhereWithoutLichChieuInput[]
    deleteMany?: GiuChoScalarWhereInput | GiuChoScalarWhereInput[]
  }

  export type HoaDonUncheckedUpdateManyWithoutLichChieuNestedInput = {
    create?: XOR<HoaDonCreateWithoutLichChieuInput, HoaDonUncheckedCreateWithoutLichChieuInput> | HoaDonCreateWithoutLichChieuInput[] | HoaDonUncheckedCreateWithoutLichChieuInput[]
    connectOrCreate?: HoaDonCreateOrConnectWithoutLichChieuInput | HoaDonCreateOrConnectWithoutLichChieuInput[]
    upsert?: HoaDonUpsertWithWhereUniqueWithoutLichChieuInput | HoaDonUpsertWithWhereUniqueWithoutLichChieuInput[]
    createMany?: HoaDonCreateManyLichChieuInputEnvelope
    set?: HoaDonWhereUniqueInput | HoaDonWhereUniqueInput[]
    disconnect?: HoaDonWhereUniqueInput | HoaDonWhereUniqueInput[]
    delete?: HoaDonWhereUniqueInput | HoaDonWhereUniqueInput[]
    connect?: HoaDonWhereUniqueInput | HoaDonWhereUniqueInput[]
    update?: HoaDonUpdateWithWhereUniqueWithoutLichChieuInput | HoaDonUpdateWithWhereUniqueWithoutLichChieuInput[]
    updateMany?: HoaDonUpdateManyWithWhereWithoutLichChieuInput | HoaDonUpdateManyWithWhereWithoutLichChieuInput[]
    deleteMany?: HoaDonScalarWhereInput | HoaDonScalarWhereInput[]
  }

  export type DatVeCreateNestedManyWithoutNguoiDungInput = {
    create?: XOR<DatVeCreateWithoutNguoiDungInput, DatVeUncheckedCreateWithoutNguoiDungInput> | DatVeCreateWithoutNguoiDungInput[] | DatVeUncheckedCreateWithoutNguoiDungInput[]
    connectOrCreate?: DatVeCreateOrConnectWithoutNguoiDungInput | DatVeCreateOrConnectWithoutNguoiDungInput[]
    createMany?: DatVeCreateManyNguoiDungInputEnvelope
    connect?: DatVeWhereUniqueInput | DatVeWhereUniqueInput[]
  }

  export type GiuChoCreateNestedManyWithoutNguoiDungInput = {
    create?: XOR<GiuChoCreateWithoutNguoiDungInput, GiuChoUncheckedCreateWithoutNguoiDungInput> | GiuChoCreateWithoutNguoiDungInput[] | GiuChoUncheckedCreateWithoutNguoiDungInput[]
    connectOrCreate?: GiuChoCreateOrConnectWithoutNguoiDungInput | GiuChoCreateOrConnectWithoutNguoiDungInput[]
    createMany?: GiuChoCreateManyNguoiDungInputEnvelope
    connect?: GiuChoWhereUniqueInput | GiuChoWhereUniqueInput[]
  }

  export type HoaDonCreateNestedManyWithoutNguoiDungInput = {
    create?: XOR<HoaDonCreateWithoutNguoiDungInput, HoaDonUncheckedCreateWithoutNguoiDungInput> | HoaDonCreateWithoutNguoiDungInput[] | HoaDonUncheckedCreateWithoutNguoiDungInput[]
    connectOrCreate?: HoaDonCreateOrConnectWithoutNguoiDungInput | HoaDonCreateOrConnectWithoutNguoiDungInput[]
    createMany?: HoaDonCreateManyNguoiDungInputEnvelope
    connect?: HoaDonWhereUniqueInput | HoaDonWhereUniqueInput[]
  }

  export type RefreshTokenCreateNestedManyWithoutNguoiDungInput = {
    create?: XOR<RefreshTokenCreateWithoutNguoiDungInput, RefreshTokenUncheckedCreateWithoutNguoiDungInput> | RefreshTokenCreateWithoutNguoiDungInput[] | RefreshTokenUncheckedCreateWithoutNguoiDungInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutNguoiDungInput | RefreshTokenCreateOrConnectWithoutNguoiDungInput[]
    createMany?: RefreshTokenCreateManyNguoiDungInputEnvelope
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
  }

  export type DatVeUncheckedCreateNestedManyWithoutNguoiDungInput = {
    create?: XOR<DatVeCreateWithoutNguoiDungInput, DatVeUncheckedCreateWithoutNguoiDungInput> | DatVeCreateWithoutNguoiDungInput[] | DatVeUncheckedCreateWithoutNguoiDungInput[]
    connectOrCreate?: DatVeCreateOrConnectWithoutNguoiDungInput | DatVeCreateOrConnectWithoutNguoiDungInput[]
    createMany?: DatVeCreateManyNguoiDungInputEnvelope
    connect?: DatVeWhereUniqueInput | DatVeWhereUniqueInput[]
  }

  export type GiuChoUncheckedCreateNestedManyWithoutNguoiDungInput = {
    create?: XOR<GiuChoCreateWithoutNguoiDungInput, GiuChoUncheckedCreateWithoutNguoiDungInput> | GiuChoCreateWithoutNguoiDungInput[] | GiuChoUncheckedCreateWithoutNguoiDungInput[]
    connectOrCreate?: GiuChoCreateOrConnectWithoutNguoiDungInput | GiuChoCreateOrConnectWithoutNguoiDungInput[]
    createMany?: GiuChoCreateManyNguoiDungInputEnvelope
    connect?: GiuChoWhereUniqueInput | GiuChoWhereUniqueInput[]
  }

  export type HoaDonUncheckedCreateNestedManyWithoutNguoiDungInput = {
    create?: XOR<HoaDonCreateWithoutNguoiDungInput, HoaDonUncheckedCreateWithoutNguoiDungInput> | HoaDonCreateWithoutNguoiDungInput[] | HoaDonUncheckedCreateWithoutNguoiDungInput[]
    connectOrCreate?: HoaDonCreateOrConnectWithoutNguoiDungInput | HoaDonCreateOrConnectWithoutNguoiDungInput[]
    createMany?: HoaDonCreateManyNguoiDungInputEnvelope
    connect?: HoaDonWhereUniqueInput | HoaDonWhereUniqueInput[]
  }

  export type RefreshTokenUncheckedCreateNestedManyWithoutNguoiDungInput = {
    create?: XOR<RefreshTokenCreateWithoutNguoiDungInput, RefreshTokenUncheckedCreateWithoutNguoiDungInput> | RefreshTokenCreateWithoutNguoiDungInput[] | RefreshTokenUncheckedCreateWithoutNguoiDungInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutNguoiDungInput | RefreshTokenCreateOrConnectWithoutNguoiDungInput[]
    createMany?: RefreshTokenCreateManyNguoiDungInputEnvelope
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type DatVeUpdateManyWithoutNguoiDungNestedInput = {
    create?: XOR<DatVeCreateWithoutNguoiDungInput, DatVeUncheckedCreateWithoutNguoiDungInput> | DatVeCreateWithoutNguoiDungInput[] | DatVeUncheckedCreateWithoutNguoiDungInput[]
    connectOrCreate?: DatVeCreateOrConnectWithoutNguoiDungInput | DatVeCreateOrConnectWithoutNguoiDungInput[]
    upsert?: DatVeUpsertWithWhereUniqueWithoutNguoiDungInput | DatVeUpsertWithWhereUniqueWithoutNguoiDungInput[]
    createMany?: DatVeCreateManyNguoiDungInputEnvelope
    set?: DatVeWhereUniqueInput | DatVeWhereUniqueInput[]
    disconnect?: DatVeWhereUniqueInput | DatVeWhereUniqueInput[]
    delete?: DatVeWhereUniqueInput | DatVeWhereUniqueInput[]
    connect?: DatVeWhereUniqueInput | DatVeWhereUniqueInput[]
    update?: DatVeUpdateWithWhereUniqueWithoutNguoiDungInput | DatVeUpdateWithWhereUniqueWithoutNguoiDungInput[]
    updateMany?: DatVeUpdateManyWithWhereWithoutNguoiDungInput | DatVeUpdateManyWithWhereWithoutNguoiDungInput[]
    deleteMany?: DatVeScalarWhereInput | DatVeScalarWhereInput[]
  }

  export type GiuChoUpdateManyWithoutNguoiDungNestedInput = {
    create?: XOR<GiuChoCreateWithoutNguoiDungInput, GiuChoUncheckedCreateWithoutNguoiDungInput> | GiuChoCreateWithoutNguoiDungInput[] | GiuChoUncheckedCreateWithoutNguoiDungInput[]
    connectOrCreate?: GiuChoCreateOrConnectWithoutNguoiDungInput | GiuChoCreateOrConnectWithoutNguoiDungInput[]
    upsert?: GiuChoUpsertWithWhereUniqueWithoutNguoiDungInput | GiuChoUpsertWithWhereUniqueWithoutNguoiDungInput[]
    createMany?: GiuChoCreateManyNguoiDungInputEnvelope
    set?: GiuChoWhereUniqueInput | GiuChoWhereUniqueInput[]
    disconnect?: GiuChoWhereUniqueInput | GiuChoWhereUniqueInput[]
    delete?: GiuChoWhereUniqueInput | GiuChoWhereUniqueInput[]
    connect?: GiuChoWhereUniqueInput | GiuChoWhereUniqueInput[]
    update?: GiuChoUpdateWithWhereUniqueWithoutNguoiDungInput | GiuChoUpdateWithWhereUniqueWithoutNguoiDungInput[]
    updateMany?: GiuChoUpdateManyWithWhereWithoutNguoiDungInput | GiuChoUpdateManyWithWhereWithoutNguoiDungInput[]
    deleteMany?: GiuChoScalarWhereInput | GiuChoScalarWhereInput[]
  }

  export type HoaDonUpdateManyWithoutNguoiDungNestedInput = {
    create?: XOR<HoaDonCreateWithoutNguoiDungInput, HoaDonUncheckedCreateWithoutNguoiDungInput> | HoaDonCreateWithoutNguoiDungInput[] | HoaDonUncheckedCreateWithoutNguoiDungInput[]
    connectOrCreate?: HoaDonCreateOrConnectWithoutNguoiDungInput | HoaDonCreateOrConnectWithoutNguoiDungInput[]
    upsert?: HoaDonUpsertWithWhereUniqueWithoutNguoiDungInput | HoaDonUpsertWithWhereUniqueWithoutNguoiDungInput[]
    createMany?: HoaDonCreateManyNguoiDungInputEnvelope
    set?: HoaDonWhereUniqueInput | HoaDonWhereUniqueInput[]
    disconnect?: HoaDonWhereUniqueInput | HoaDonWhereUniqueInput[]
    delete?: HoaDonWhereUniqueInput | HoaDonWhereUniqueInput[]
    connect?: HoaDonWhereUniqueInput | HoaDonWhereUniqueInput[]
    update?: HoaDonUpdateWithWhereUniqueWithoutNguoiDungInput | HoaDonUpdateWithWhereUniqueWithoutNguoiDungInput[]
    updateMany?: HoaDonUpdateManyWithWhereWithoutNguoiDungInput | HoaDonUpdateManyWithWhereWithoutNguoiDungInput[]
    deleteMany?: HoaDonScalarWhereInput | HoaDonScalarWhereInput[]
  }

  export type RefreshTokenUpdateManyWithoutNguoiDungNestedInput = {
    create?: XOR<RefreshTokenCreateWithoutNguoiDungInput, RefreshTokenUncheckedCreateWithoutNguoiDungInput> | RefreshTokenCreateWithoutNguoiDungInput[] | RefreshTokenUncheckedCreateWithoutNguoiDungInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutNguoiDungInput | RefreshTokenCreateOrConnectWithoutNguoiDungInput[]
    upsert?: RefreshTokenUpsertWithWhereUniqueWithoutNguoiDungInput | RefreshTokenUpsertWithWhereUniqueWithoutNguoiDungInput[]
    createMany?: RefreshTokenCreateManyNguoiDungInputEnvelope
    set?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    disconnect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    delete?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    update?: RefreshTokenUpdateWithWhereUniqueWithoutNguoiDungInput | RefreshTokenUpdateWithWhereUniqueWithoutNguoiDungInput[]
    updateMany?: RefreshTokenUpdateManyWithWhereWithoutNguoiDungInput | RefreshTokenUpdateManyWithWhereWithoutNguoiDungInput[]
    deleteMany?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
  }

  export type DatVeUncheckedUpdateManyWithoutNguoiDungNestedInput = {
    create?: XOR<DatVeCreateWithoutNguoiDungInput, DatVeUncheckedCreateWithoutNguoiDungInput> | DatVeCreateWithoutNguoiDungInput[] | DatVeUncheckedCreateWithoutNguoiDungInput[]
    connectOrCreate?: DatVeCreateOrConnectWithoutNguoiDungInput | DatVeCreateOrConnectWithoutNguoiDungInput[]
    upsert?: DatVeUpsertWithWhereUniqueWithoutNguoiDungInput | DatVeUpsertWithWhereUniqueWithoutNguoiDungInput[]
    createMany?: DatVeCreateManyNguoiDungInputEnvelope
    set?: DatVeWhereUniqueInput | DatVeWhereUniqueInput[]
    disconnect?: DatVeWhereUniqueInput | DatVeWhereUniqueInput[]
    delete?: DatVeWhereUniqueInput | DatVeWhereUniqueInput[]
    connect?: DatVeWhereUniqueInput | DatVeWhereUniqueInput[]
    update?: DatVeUpdateWithWhereUniqueWithoutNguoiDungInput | DatVeUpdateWithWhereUniqueWithoutNguoiDungInput[]
    updateMany?: DatVeUpdateManyWithWhereWithoutNguoiDungInput | DatVeUpdateManyWithWhereWithoutNguoiDungInput[]
    deleteMany?: DatVeScalarWhereInput | DatVeScalarWhereInput[]
  }

  export type GiuChoUncheckedUpdateManyWithoutNguoiDungNestedInput = {
    create?: XOR<GiuChoCreateWithoutNguoiDungInput, GiuChoUncheckedCreateWithoutNguoiDungInput> | GiuChoCreateWithoutNguoiDungInput[] | GiuChoUncheckedCreateWithoutNguoiDungInput[]
    connectOrCreate?: GiuChoCreateOrConnectWithoutNguoiDungInput | GiuChoCreateOrConnectWithoutNguoiDungInput[]
    upsert?: GiuChoUpsertWithWhereUniqueWithoutNguoiDungInput | GiuChoUpsertWithWhereUniqueWithoutNguoiDungInput[]
    createMany?: GiuChoCreateManyNguoiDungInputEnvelope
    set?: GiuChoWhereUniqueInput | GiuChoWhereUniqueInput[]
    disconnect?: GiuChoWhereUniqueInput | GiuChoWhereUniqueInput[]
    delete?: GiuChoWhereUniqueInput | GiuChoWhereUniqueInput[]
    connect?: GiuChoWhereUniqueInput | GiuChoWhereUniqueInput[]
    update?: GiuChoUpdateWithWhereUniqueWithoutNguoiDungInput | GiuChoUpdateWithWhereUniqueWithoutNguoiDungInput[]
    updateMany?: GiuChoUpdateManyWithWhereWithoutNguoiDungInput | GiuChoUpdateManyWithWhereWithoutNguoiDungInput[]
    deleteMany?: GiuChoScalarWhereInput | GiuChoScalarWhereInput[]
  }

  export type HoaDonUncheckedUpdateManyWithoutNguoiDungNestedInput = {
    create?: XOR<HoaDonCreateWithoutNguoiDungInput, HoaDonUncheckedCreateWithoutNguoiDungInput> | HoaDonCreateWithoutNguoiDungInput[] | HoaDonUncheckedCreateWithoutNguoiDungInput[]
    connectOrCreate?: HoaDonCreateOrConnectWithoutNguoiDungInput | HoaDonCreateOrConnectWithoutNguoiDungInput[]
    upsert?: HoaDonUpsertWithWhereUniqueWithoutNguoiDungInput | HoaDonUpsertWithWhereUniqueWithoutNguoiDungInput[]
    createMany?: HoaDonCreateManyNguoiDungInputEnvelope
    set?: HoaDonWhereUniqueInput | HoaDonWhereUniqueInput[]
    disconnect?: HoaDonWhereUniqueInput | HoaDonWhereUniqueInput[]
    delete?: HoaDonWhereUniqueInput | HoaDonWhereUniqueInput[]
    connect?: HoaDonWhereUniqueInput | HoaDonWhereUniqueInput[]
    update?: HoaDonUpdateWithWhereUniqueWithoutNguoiDungInput | HoaDonUpdateWithWhereUniqueWithoutNguoiDungInput[]
    updateMany?: HoaDonUpdateManyWithWhereWithoutNguoiDungInput | HoaDonUpdateManyWithWhereWithoutNguoiDungInput[]
    deleteMany?: HoaDonScalarWhereInput | HoaDonScalarWhereInput[]
  }

  export type RefreshTokenUncheckedUpdateManyWithoutNguoiDungNestedInput = {
    create?: XOR<RefreshTokenCreateWithoutNguoiDungInput, RefreshTokenUncheckedCreateWithoutNguoiDungInput> | RefreshTokenCreateWithoutNguoiDungInput[] | RefreshTokenUncheckedCreateWithoutNguoiDungInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutNguoiDungInput | RefreshTokenCreateOrConnectWithoutNguoiDungInput[]
    upsert?: RefreshTokenUpsertWithWhereUniqueWithoutNguoiDungInput | RefreshTokenUpsertWithWhereUniqueWithoutNguoiDungInput[]
    createMany?: RefreshTokenCreateManyNguoiDungInputEnvelope
    set?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    disconnect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    delete?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    update?: RefreshTokenUpdateWithWhereUniqueWithoutNguoiDungInput | RefreshTokenUpdateWithWhereUniqueWithoutNguoiDungInput[]
    updateMany?: RefreshTokenUpdateManyWithWhereWithoutNguoiDungInput | RefreshTokenUpdateManyWithWhereWithoutNguoiDungInput[]
    deleteMany?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
  }

  export type NguoiDungCreateNestedOneWithoutRefreshTokenInput = {
    create?: XOR<NguoiDungCreateWithoutRefreshTokenInput, NguoiDungUncheckedCreateWithoutRefreshTokenInput>
    connectOrCreate?: NguoiDungCreateOrConnectWithoutRefreshTokenInput
    connect?: NguoiDungWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NguoiDungUpdateOneRequiredWithoutRefreshTokenNestedInput = {
    create?: XOR<NguoiDungCreateWithoutRefreshTokenInput, NguoiDungUncheckedCreateWithoutRefreshTokenInput>
    connectOrCreate?: NguoiDungCreateOrConnectWithoutRefreshTokenInput
    upsert?: NguoiDungUpsertWithoutRefreshTokenInput
    connect?: NguoiDungWhereUniqueInput
    update?: XOR<XOR<NguoiDungUpdateToOneWithWhereWithoutRefreshTokenInput, NguoiDungUpdateWithoutRefreshTokenInput>, NguoiDungUncheckedUpdateWithoutRefreshTokenInput>
  }

  export type BannerCreateNestedManyWithoutPhimInput = {
    create?: XOR<BannerCreateWithoutPhimInput, BannerUncheckedCreateWithoutPhimInput> | BannerCreateWithoutPhimInput[] | BannerUncheckedCreateWithoutPhimInput[]
    connectOrCreate?: BannerCreateOrConnectWithoutPhimInput | BannerCreateOrConnectWithoutPhimInput[]
    createMany?: BannerCreateManyPhimInputEnvelope
    connect?: BannerWhereUniqueInput | BannerWhereUniqueInput[]
  }

  export type LichChieuCreateNestedManyWithoutPhimInput = {
    create?: XOR<LichChieuCreateWithoutPhimInput, LichChieuUncheckedCreateWithoutPhimInput> | LichChieuCreateWithoutPhimInput[] | LichChieuUncheckedCreateWithoutPhimInput[]
    connectOrCreate?: LichChieuCreateOrConnectWithoutPhimInput | LichChieuCreateOrConnectWithoutPhimInput[]
    createMany?: LichChieuCreateManyPhimInputEnvelope
    connect?: LichChieuWhereUniqueInput | LichChieuWhereUniqueInput[]
  }

  export type BannerUncheckedCreateNestedManyWithoutPhimInput = {
    create?: XOR<BannerCreateWithoutPhimInput, BannerUncheckedCreateWithoutPhimInput> | BannerCreateWithoutPhimInput[] | BannerUncheckedCreateWithoutPhimInput[]
    connectOrCreate?: BannerCreateOrConnectWithoutPhimInput | BannerCreateOrConnectWithoutPhimInput[]
    createMany?: BannerCreateManyPhimInputEnvelope
    connect?: BannerWhereUniqueInput | BannerWhereUniqueInput[]
  }

  export type LichChieuUncheckedCreateNestedManyWithoutPhimInput = {
    create?: XOR<LichChieuCreateWithoutPhimInput, LichChieuUncheckedCreateWithoutPhimInput> | LichChieuCreateWithoutPhimInput[] | LichChieuUncheckedCreateWithoutPhimInput[]
    connectOrCreate?: LichChieuCreateOrConnectWithoutPhimInput | LichChieuCreateOrConnectWithoutPhimInput[]
    createMany?: LichChieuCreateManyPhimInputEnvelope
    connect?: LichChieuWhereUniqueInput | LichChieuWhereUniqueInput[]
  }

  export type BannerUpdateManyWithoutPhimNestedInput = {
    create?: XOR<BannerCreateWithoutPhimInput, BannerUncheckedCreateWithoutPhimInput> | BannerCreateWithoutPhimInput[] | BannerUncheckedCreateWithoutPhimInput[]
    connectOrCreate?: BannerCreateOrConnectWithoutPhimInput | BannerCreateOrConnectWithoutPhimInput[]
    upsert?: BannerUpsertWithWhereUniqueWithoutPhimInput | BannerUpsertWithWhereUniqueWithoutPhimInput[]
    createMany?: BannerCreateManyPhimInputEnvelope
    set?: BannerWhereUniqueInput | BannerWhereUniqueInput[]
    disconnect?: BannerWhereUniqueInput | BannerWhereUniqueInput[]
    delete?: BannerWhereUniqueInput | BannerWhereUniqueInput[]
    connect?: BannerWhereUniqueInput | BannerWhereUniqueInput[]
    update?: BannerUpdateWithWhereUniqueWithoutPhimInput | BannerUpdateWithWhereUniqueWithoutPhimInput[]
    updateMany?: BannerUpdateManyWithWhereWithoutPhimInput | BannerUpdateManyWithWhereWithoutPhimInput[]
    deleteMany?: BannerScalarWhereInput | BannerScalarWhereInput[]
  }

  export type LichChieuUpdateManyWithoutPhimNestedInput = {
    create?: XOR<LichChieuCreateWithoutPhimInput, LichChieuUncheckedCreateWithoutPhimInput> | LichChieuCreateWithoutPhimInput[] | LichChieuUncheckedCreateWithoutPhimInput[]
    connectOrCreate?: LichChieuCreateOrConnectWithoutPhimInput | LichChieuCreateOrConnectWithoutPhimInput[]
    upsert?: LichChieuUpsertWithWhereUniqueWithoutPhimInput | LichChieuUpsertWithWhereUniqueWithoutPhimInput[]
    createMany?: LichChieuCreateManyPhimInputEnvelope
    set?: LichChieuWhereUniqueInput | LichChieuWhereUniqueInput[]
    disconnect?: LichChieuWhereUniqueInput | LichChieuWhereUniqueInput[]
    delete?: LichChieuWhereUniqueInput | LichChieuWhereUniqueInput[]
    connect?: LichChieuWhereUniqueInput | LichChieuWhereUniqueInput[]
    update?: LichChieuUpdateWithWhereUniqueWithoutPhimInput | LichChieuUpdateWithWhereUniqueWithoutPhimInput[]
    updateMany?: LichChieuUpdateManyWithWhereWithoutPhimInput | LichChieuUpdateManyWithWhereWithoutPhimInput[]
    deleteMany?: LichChieuScalarWhereInput | LichChieuScalarWhereInput[]
  }

  export type BannerUncheckedUpdateManyWithoutPhimNestedInput = {
    create?: XOR<BannerCreateWithoutPhimInput, BannerUncheckedCreateWithoutPhimInput> | BannerCreateWithoutPhimInput[] | BannerUncheckedCreateWithoutPhimInput[]
    connectOrCreate?: BannerCreateOrConnectWithoutPhimInput | BannerCreateOrConnectWithoutPhimInput[]
    upsert?: BannerUpsertWithWhereUniqueWithoutPhimInput | BannerUpsertWithWhereUniqueWithoutPhimInput[]
    createMany?: BannerCreateManyPhimInputEnvelope
    set?: BannerWhereUniqueInput | BannerWhereUniqueInput[]
    disconnect?: BannerWhereUniqueInput | BannerWhereUniqueInput[]
    delete?: BannerWhereUniqueInput | BannerWhereUniqueInput[]
    connect?: BannerWhereUniqueInput | BannerWhereUniqueInput[]
    update?: BannerUpdateWithWhereUniqueWithoutPhimInput | BannerUpdateWithWhereUniqueWithoutPhimInput[]
    updateMany?: BannerUpdateManyWithWhereWithoutPhimInput | BannerUpdateManyWithWhereWithoutPhimInput[]
    deleteMany?: BannerScalarWhereInput | BannerScalarWhereInput[]
  }

  export type LichChieuUncheckedUpdateManyWithoutPhimNestedInput = {
    create?: XOR<LichChieuCreateWithoutPhimInput, LichChieuUncheckedCreateWithoutPhimInput> | LichChieuCreateWithoutPhimInput[] | LichChieuUncheckedCreateWithoutPhimInput[]
    connectOrCreate?: LichChieuCreateOrConnectWithoutPhimInput | LichChieuCreateOrConnectWithoutPhimInput[]
    upsert?: LichChieuUpsertWithWhereUniqueWithoutPhimInput | LichChieuUpsertWithWhereUniqueWithoutPhimInput[]
    createMany?: LichChieuCreateManyPhimInputEnvelope
    set?: LichChieuWhereUniqueInput | LichChieuWhereUniqueInput[]
    disconnect?: LichChieuWhereUniqueInput | LichChieuWhereUniqueInput[]
    delete?: LichChieuWhereUniqueInput | LichChieuWhereUniqueInput[]
    connect?: LichChieuWhereUniqueInput | LichChieuWhereUniqueInput[]
    update?: LichChieuUpdateWithWhereUniqueWithoutPhimInput | LichChieuUpdateWithWhereUniqueWithoutPhimInput[]
    updateMany?: LichChieuUpdateManyWithWhereWithoutPhimInput | LichChieuUpdateManyWithWhereWithoutPhimInput[]
    deleteMany?: LichChieuScalarWhereInput | LichChieuScalarWhereInput[]
  }

  export type GheCreateNestedManyWithoutRapPhimInput = {
    create?: XOR<GheCreateWithoutRapPhimInput, GheUncheckedCreateWithoutRapPhimInput> | GheCreateWithoutRapPhimInput[] | GheUncheckedCreateWithoutRapPhimInput[]
    connectOrCreate?: GheCreateOrConnectWithoutRapPhimInput | GheCreateOrConnectWithoutRapPhimInput[]
    createMany?: GheCreateManyRapPhimInputEnvelope
    connect?: GheWhereUniqueInput | GheWhereUniqueInput[]
  }

  export type LichChieuCreateNestedManyWithoutRapPhimInput = {
    create?: XOR<LichChieuCreateWithoutRapPhimInput, LichChieuUncheckedCreateWithoutRapPhimInput> | LichChieuCreateWithoutRapPhimInput[] | LichChieuUncheckedCreateWithoutRapPhimInput[]
    connectOrCreate?: LichChieuCreateOrConnectWithoutRapPhimInput | LichChieuCreateOrConnectWithoutRapPhimInput[]
    createMany?: LichChieuCreateManyRapPhimInputEnvelope
    connect?: LichChieuWhereUniqueInput | LichChieuWhereUniqueInput[]
  }

  export type CumRapCreateNestedOneWithoutRapPhimInput = {
    create?: XOR<CumRapCreateWithoutRapPhimInput, CumRapUncheckedCreateWithoutRapPhimInput>
    connectOrCreate?: CumRapCreateOrConnectWithoutRapPhimInput
    connect?: CumRapWhereUniqueInput
  }

  export type GheUncheckedCreateNestedManyWithoutRapPhimInput = {
    create?: XOR<GheCreateWithoutRapPhimInput, GheUncheckedCreateWithoutRapPhimInput> | GheCreateWithoutRapPhimInput[] | GheUncheckedCreateWithoutRapPhimInput[]
    connectOrCreate?: GheCreateOrConnectWithoutRapPhimInput | GheCreateOrConnectWithoutRapPhimInput[]
    createMany?: GheCreateManyRapPhimInputEnvelope
    connect?: GheWhereUniqueInput | GheWhereUniqueInput[]
  }

  export type LichChieuUncheckedCreateNestedManyWithoutRapPhimInput = {
    create?: XOR<LichChieuCreateWithoutRapPhimInput, LichChieuUncheckedCreateWithoutRapPhimInput> | LichChieuCreateWithoutRapPhimInput[] | LichChieuUncheckedCreateWithoutRapPhimInput[]
    connectOrCreate?: LichChieuCreateOrConnectWithoutRapPhimInput | LichChieuCreateOrConnectWithoutRapPhimInput[]
    createMany?: LichChieuCreateManyRapPhimInputEnvelope
    connect?: LichChieuWhereUniqueInput | LichChieuWhereUniqueInput[]
  }

  export type GheUpdateManyWithoutRapPhimNestedInput = {
    create?: XOR<GheCreateWithoutRapPhimInput, GheUncheckedCreateWithoutRapPhimInput> | GheCreateWithoutRapPhimInput[] | GheUncheckedCreateWithoutRapPhimInput[]
    connectOrCreate?: GheCreateOrConnectWithoutRapPhimInput | GheCreateOrConnectWithoutRapPhimInput[]
    upsert?: GheUpsertWithWhereUniqueWithoutRapPhimInput | GheUpsertWithWhereUniqueWithoutRapPhimInput[]
    createMany?: GheCreateManyRapPhimInputEnvelope
    set?: GheWhereUniqueInput | GheWhereUniqueInput[]
    disconnect?: GheWhereUniqueInput | GheWhereUniqueInput[]
    delete?: GheWhereUniqueInput | GheWhereUniqueInput[]
    connect?: GheWhereUniqueInput | GheWhereUniqueInput[]
    update?: GheUpdateWithWhereUniqueWithoutRapPhimInput | GheUpdateWithWhereUniqueWithoutRapPhimInput[]
    updateMany?: GheUpdateManyWithWhereWithoutRapPhimInput | GheUpdateManyWithWhereWithoutRapPhimInput[]
    deleteMany?: GheScalarWhereInput | GheScalarWhereInput[]
  }

  export type LichChieuUpdateManyWithoutRapPhimNestedInput = {
    create?: XOR<LichChieuCreateWithoutRapPhimInput, LichChieuUncheckedCreateWithoutRapPhimInput> | LichChieuCreateWithoutRapPhimInput[] | LichChieuUncheckedCreateWithoutRapPhimInput[]
    connectOrCreate?: LichChieuCreateOrConnectWithoutRapPhimInput | LichChieuCreateOrConnectWithoutRapPhimInput[]
    upsert?: LichChieuUpsertWithWhereUniqueWithoutRapPhimInput | LichChieuUpsertWithWhereUniqueWithoutRapPhimInput[]
    createMany?: LichChieuCreateManyRapPhimInputEnvelope
    set?: LichChieuWhereUniqueInput | LichChieuWhereUniqueInput[]
    disconnect?: LichChieuWhereUniqueInput | LichChieuWhereUniqueInput[]
    delete?: LichChieuWhereUniqueInput | LichChieuWhereUniqueInput[]
    connect?: LichChieuWhereUniqueInput | LichChieuWhereUniqueInput[]
    update?: LichChieuUpdateWithWhereUniqueWithoutRapPhimInput | LichChieuUpdateWithWhereUniqueWithoutRapPhimInput[]
    updateMany?: LichChieuUpdateManyWithWhereWithoutRapPhimInput | LichChieuUpdateManyWithWhereWithoutRapPhimInput[]
    deleteMany?: LichChieuScalarWhereInput | LichChieuScalarWhereInput[]
  }

  export type CumRapUpdateOneWithoutRapPhimNestedInput = {
    create?: XOR<CumRapCreateWithoutRapPhimInput, CumRapUncheckedCreateWithoutRapPhimInput>
    connectOrCreate?: CumRapCreateOrConnectWithoutRapPhimInput
    upsert?: CumRapUpsertWithoutRapPhimInput
    disconnect?: CumRapWhereInput | boolean
    delete?: CumRapWhereInput | boolean
    connect?: CumRapWhereUniqueInput
    update?: XOR<XOR<CumRapUpdateToOneWithWhereWithoutRapPhimInput, CumRapUpdateWithoutRapPhimInput>, CumRapUncheckedUpdateWithoutRapPhimInput>
  }

  export type GheUncheckedUpdateManyWithoutRapPhimNestedInput = {
    create?: XOR<GheCreateWithoutRapPhimInput, GheUncheckedCreateWithoutRapPhimInput> | GheCreateWithoutRapPhimInput[] | GheUncheckedCreateWithoutRapPhimInput[]
    connectOrCreate?: GheCreateOrConnectWithoutRapPhimInput | GheCreateOrConnectWithoutRapPhimInput[]
    upsert?: GheUpsertWithWhereUniqueWithoutRapPhimInput | GheUpsertWithWhereUniqueWithoutRapPhimInput[]
    createMany?: GheCreateManyRapPhimInputEnvelope
    set?: GheWhereUniqueInput | GheWhereUniqueInput[]
    disconnect?: GheWhereUniqueInput | GheWhereUniqueInput[]
    delete?: GheWhereUniqueInput | GheWhereUniqueInput[]
    connect?: GheWhereUniqueInput | GheWhereUniqueInput[]
    update?: GheUpdateWithWhereUniqueWithoutRapPhimInput | GheUpdateWithWhereUniqueWithoutRapPhimInput[]
    updateMany?: GheUpdateManyWithWhereWithoutRapPhimInput | GheUpdateManyWithWhereWithoutRapPhimInput[]
    deleteMany?: GheScalarWhereInput | GheScalarWhereInput[]
  }

  export type LichChieuUncheckedUpdateManyWithoutRapPhimNestedInput = {
    create?: XOR<LichChieuCreateWithoutRapPhimInput, LichChieuUncheckedCreateWithoutRapPhimInput> | LichChieuCreateWithoutRapPhimInput[] | LichChieuUncheckedCreateWithoutRapPhimInput[]
    connectOrCreate?: LichChieuCreateOrConnectWithoutRapPhimInput | LichChieuCreateOrConnectWithoutRapPhimInput[]
    upsert?: LichChieuUpsertWithWhereUniqueWithoutRapPhimInput | LichChieuUpsertWithWhereUniqueWithoutRapPhimInput[]
    createMany?: LichChieuCreateManyRapPhimInputEnvelope
    set?: LichChieuWhereUniqueInput | LichChieuWhereUniqueInput[]
    disconnect?: LichChieuWhereUniqueInput | LichChieuWhereUniqueInput[]
    delete?: LichChieuWhereUniqueInput | LichChieuWhereUniqueInput[]
    connect?: LichChieuWhereUniqueInput | LichChieuWhereUniqueInput[]
    update?: LichChieuUpdateWithWhereUniqueWithoutRapPhimInput | LichChieuUpdateWithWhereUniqueWithoutRapPhimInput[]
    updateMany?: LichChieuUpdateManyWithWhereWithoutRapPhimInput | LichChieuUpdateManyWithWhereWithoutRapPhimInput[]
    deleteMany?: LichChieuScalarWhereInput | LichChieuScalarWhereInput[]
  }

  export type GheCreateNestedOneWithoutGiuChoInput = {
    create?: XOR<GheCreateWithoutGiuChoInput, GheUncheckedCreateWithoutGiuChoInput>
    connectOrCreate?: GheCreateOrConnectWithoutGiuChoInput
    connect?: GheWhereUniqueInput
  }

  export type LichChieuCreateNestedOneWithoutGiuChoInput = {
    create?: XOR<LichChieuCreateWithoutGiuChoInput, LichChieuUncheckedCreateWithoutGiuChoInput>
    connectOrCreate?: LichChieuCreateOrConnectWithoutGiuChoInput
    connect?: LichChieuWhereUniqueInput
  }

  export type NguoiDungCreateNestedOneWithoutGiuChoInput = {
    create?: XOR<NguoiDungCreateWithoutGiuChoInput, NguoiDungUncheckedCreateWithoutGiuChoInput>
    connectOrCreate?: NguoiDungCreateOrConnectWithoutGiuChoInput
    connect?: NguoiDungWhereUniqueInput
  }

  export type HoaDonCreateNestedOneWithoutGiuChoInput = {
    create?: XOR<HoaDonCreateWithoutGiuChoInput, HoaDonUncheckedCreateWithoutGiuChoInput>
    connectOrCreate?: HoaDonCreateOrConnectWithoutGiuChoInput
    connect?: HoaDonWhereUniqueInput
  }

  export type EnumLoaiGiuChoFieldUpdateOperationsInput = {
    set?: $Enums.LoaiGiuCho
  }

  export type GheUpdateOneRequiredWithoutGiuChoNestedInput = {
    create?: XOR<GheCreateWithoutGiuChoInput, GheUncheckedCreateWithoutGiuChoInput>
    connectOrCreate?: GheCreateOrConnectWithoutGiuChoInput
    upsert?: GheUpsertWithoutGiuChoInput
    connect?: GheWhereUniqueInput
    update?: XOR<XOR<GheUpdateToOneWithWhereWithoutGiuChoInput, GheUpdateWithoutGiuChoInput>, GheUncheckedUpdateWithoutGiuChoInput>
  }

  export type LichChieuUpdateOneRequiredWithoutGiuChoNestedInput = {
    create?: XOR<LichChieuCreateWithoutGiuChoInput, LichChieuUncheckedCreateWithoutGiuChoInput>
    connectOrCreate?: LichChieuCreateOrConnectWithoutGiuChoInput
    upsert?: LichChieuUpsertWithoutGiuChoInput
    connect?: LichChieuWhereUniqueInput
    update?: XOR<XOR<LichChieuUpdateToOneWithWhereWithoutGiuChoInput, LichChieuUpdateWithoutGiuChoInput>, LichChieuUncheckedUpdateWithoutGiuChoInput>
  }

  export type NguoiDungUpdateOneRequiredWithoutGiuChoNestedInput = {
    create?: XOR<NguoiDungCreateWithoutGiuChoInput, NguoiDungUncheckedCreateWithoutGiuChoInput>
    connectOrCreate?: NguoiDungCreateOrConnectWithoutGiuChoInput
    upsert?: NguoiDungUpsertWithoutGiuChoInput
    connect?: NguoiDungWhereUniqueInput
    update?: XOR<XOR<NguoiDungUpdateToOneWithWhereWithoutGiuChoInput, NguoiDungUpdateWithoutGiuChoInput>, NguoiDungUncheckedUpdateWithoutGiuChoInput>
  }

  export type HoaDonUpdateOneWithoutGiuChoNestedInput = {
    create?: XOR<HoaDonCreateWithoutGiuChoInput, HoaDonUncheckedCreateWithoutGiuChoInput>
    connectOrCreate?: HoaDonCreateOrConnectWithoutGiuChoInput
    upsert?: HoaDonUpsertWithoutGiuChoInput
    disconnect?: HoaDonWhereInput | boolean
    delete?: HoaDonWhereInput | boolean
    connect?: HoaDonWhereUniqueInput
    update?: XOR<XOR<HoaDonUpdateToOneWithWhereWithoutGiuChoInput, HoaDonUpdateWithoutGiuChoInput>, HoaDonUncheckedUpdateWithoutGiuChoInput>
  }

  export type NguoiDungCreateNestedOneWithoutHoaDonInput = {
    create?: XOR<NguoiDungCreateWithoutHoaDonInput, NguoiDungUncheckedCreateWithoutHoaDonInput>
    connectOrCreate?: NguoiDungCreateOrConnectWithoutHoaDonInput
    connect?: NguoiDungWhereUniqueInput
  }

  export type LichChieuCreateNestedOneWithoutHoaDonInput = {
    create?: XOR<LichChieuCreateWithoutHoaDonInput, LichChieuUncheckedCreateWithoutHoaDonInput>
    connectOrCreate?: LichChieuCreateOrConnectWithoutHoaDonInput
    connect?: LichChieuWhereUniqueInput
  }

  export type DatVeCreateNestedManyWithoutHoaDonInput = {
    create?: XOR<DatVeCreateWithoutHoaDonInput, DatVeUncheckedCreateWithoutHoaDonInput> | DatVeCreateWithoutHoaDonInput[] | DatVeUncheckedCreateWithoutHoaDonInput[]
    connectOrCreate?: DatVeCreateOrConnectWithoutHoaDonInput | DatVeCreateOrConnectWithoutHoaDonInput[]
    createMany?: DatVeCreateManyHoaDonInputEnvelope
    connect?: DatVeWhereUniqueInput | DatVeWhereUniqueInput[]
  }

  export type HoaDonComboCreateNestedManyWithoutHoaDonInput = {
    create?: XOR<HoaDonComboCreateWithoutHoaDonInput, HoaDonComboUncheckedCreateWithoutHoaDonInput> | HoaDonComboCreateWithoutHoaDonInput[] | HoaDonComboUncheckedCreateWithoutHoaDonInput[]
    connectOrCreate?: HoaDonComboCreateOrConnectWithoutHoaDonInput | HoaDonComboCreateOrConnectWithoutHoaDonInput[]
    createMany?: HoaDonComboCreateManyHoaDonInputEnvelope
    connect?: HoaDonComboWhereUniqueInput | HoaDonComboWhereUniqueInput[]
  }

  export type GiuChoCreateNestedManyWithoutHoaDonInput = {
    create?: XOR<GiuChoCreateWithoutHoaDonInput, GiuChoUncheckedCreateWithoutHoaDonInput> | GiuChoCreateWithoutHoaDonInput[] | GiuChoUncheckedCreateWithoutHoaDonInput[]
    connectOrCreate?: GiuChoCreateOrConnectWithoutHoaDonInput | GiuChoCreateOrConnectWithoutHoaDonInput[]
    createMany?: GiuChoCreateManyHoaDonInputEnvelope
    connect?: GiuChoWhereUniqueInput | GiuChoWhereUniqueInput[]
  }

  export type DatVeUncheckedCreateNestedManyWithoutHoaDonInput = {
    create?: XOR<DatVeCreateWithoutHoaDonInput, DatVeUncheckedCreateWithoutHoaDonInput> | DatVeCreateWithoutHoaDonInput[] | DatVeUncheckedCreateWithoutHoaDonInput[]
    connectOrCreate?: DatVeCreateOrConnectWithoutHoaDonInput | DatVeCreateOrConnectWithoutHoaDonInput[]
    createMany?: DatVeCreateManyHoaDonInputEnvelope
    connect?: DatVeWhereUniqueInput | DatVeWhereUniqueInput[]
  }

  export type HoaDonComboUncheckedCreateNestedManyWithoutHoaDonInput = {
    create?: XOR<HoaDonComboCreateWithoutHoaDonInput, HoaDonComboUncheckedCreateWithoutHoaDonInput> | HoaDonComboCreateWithoutHoaDonInput[] | HoaDonComboUncheckedCreateWithoutHoaDonInput[]
    connectOrCreate?: HoaDonComboCreateOrConnectWithoutHoaDonInput | HoaDonComboCreateOrConnectWithoutHoaDonInput[]
    createMany?: HoaDonComboCreateManyHoaDonInputEnvelope
    connect?: HoaDonComboWhereUniqueInput | HoaDonComboWhereUniqueInput[]
  }

  export type GiuChoUncheckedCreateNestedManyWithoutHoaDonInput = {
    create?: XOR<GiuChoCreateWithoutHoaDonInput, GiuChoUncheckedCreateWithoutHoaDonInput> | GiuChoCreateWithoutHoaDonInput[] | GiuChoUncheckedCreateWithoutHoaDonInput[]
    connectOrCreate?: GiuChoCreateOrConnectWithoutHoaDonInput | GiuChoCreateOrConnectWithoutHoaDonInput[]
    createMany?: GiuChoCreateManyHoaDonInputEnvelope
    connect?: GiuChoWhereUniqueInput | GiuChoWhereUniqueInput[]
  }

  export type EnumTrangThaiThanhToanFieldUpdateOperationsInput = {
    set?: $Enums.TrangThaiThanhToan
  }

  export type NguoiDungUpdateOneRequiredWithoutHoaDonNestedInput = {
    create?: XOR<NguoiDungCreateWithoutHoaDonInput, NguoiDungUncheckedCreateWithoutHoaDonInput>
    connectOrCreate?: NguoiDungCreateOrConnectWithoutHoaDonInput
    upsert?: NguoiDungUpsertWithoutHoaDonInput
    connect?: NguoiDungWhereUniqueInput
    update?: XOR<XOR<NguoiDungUpdateToOneWithWhereWithoutHoaDonInput, NguoiDungUpdateWithoutHoaDonInput>, NguoiDungUncheckedUpdateWithoutHoaDonInput>
  }

  export type LichChieuUpdateOneRequiredWithoutHoaDonNestedInput = {
    create?: XOR<LichChieuCreateWithoutHoaDonInput, LichChieuUncheckedCreateWithoutHoaDonInput>
    connectOrCreate?: LichChieuCreateOrConnectWithoutHoaDonInput
    upsert?: LichChieuUpsertWithoutHoaDonInput
    connect?: LichChieuWhereUniqueInput
    update?: XOR<XOR<LichChieuUpdateToOneWithWhereWithoutHoaDonInput, LichChieuUpdateWithoutHoaDonInput>, LichChieuUncheckedUpdateWithoutHoaDonInput>
  }

  export type DatVeUpdateManyWithoutHoaDonNestedInput = {
    create?: XOR<DatVeCreateWithoutHoaDonInput, DatVeUncheckedCreateWithoutHoaDonInput> | DatVeCreateWithoutHoaDonInput[] | DatVeUncheckedCreateWithoutHoaDonInput[]
    connectOrCreate?: DatVeCreateOrConnectWithoutHoaDonInput | DatVeCreateOrConnectWithoutHoaDonInput[]
    upsert?: DatVeUpsertWithWhereUniqueWithoutHoaDonInput | DatVeUpsertWithWhereUniqueWithoutHoaDonInput[]
    createMany?: DatVeCreateManyHoaDonInputEnvelope
    set?: DatVeWhereUniqueInput | DatVeWhereUniqueInput[]
    disconnect?: DatVeWhereUniqueInput | DatVeWhereUniqueInput[]
    delete?: DatVeWhereUniqueInput | DatVeWhereUniqueInput[]
    connect?: DatVeWhereUniqueInput | DatVeWhereUniqueInput[]
    update?: DatVeUpdateWithWhereUniqueWithoutHoaDonInput | DatVeUpdateWithWhereUniqueWithoutHoaDonInput[]
    updateMany?: DatVeUpdateManyWithWhereWithoutHoaDonInput | DatVeUpdateManyWithWhereWithoutHoaDonInput[]
    deleteMany?: DatVeScalarWhereInput | DatVeScalarWhereInput[]
  }

  export type HoaDonComboUpdateManyWithoutHoaDonNestedInput = {
    create?: XOR<HoaDonComboCreateWithoutHoaDonInput, HoaDonComboUncheckedCreateWithoutHoaDonInput> | HoaDonComboCreateWithoutHoaDonInput[] | HoaDonComboUncheckedCreateWithoutHoaDonInput[]
    connectOrCreate?: HoaDonComboCreateOrConnectWithoutHoaDonInput | HoaDonComboCreateOrConnectWithoutHoaDonInput[]
    upsert?: HoaDonComboUpsertWithWhereUniqueWithoutHoaDonInput | HoaDonComboUpsertWithWhereUniqueWithoutHoaDonInput[]
    createMany?: HoaDonComboCreateManyHoaDonInputEnvelope
    set?: HoaDonComboWhereUniqueInput | HoaDonComboWhereUniqueInput[]
    disconnect?: HoaDonComboWhereUniqueInput | HoaDonComboWhereUniqueInput[]
    delete?: HoaDonComboWhereUniqueInput | HoaDonComboWhereUniqueInput[]
    connect?: HoaDonComboWhereUniqueInput | HoaDonComboWhereUniqueInput[]
    update?: HoaDonComboUpdateWithWhereUniqueWithoutHoaDonInput | HoaDonComboUpdateWithWhereUniqueWithoutHoaDonInput[]
    updateMany?: HoaDonComboUpdateManyWithWhereWithoutHoaDonInput | HoaDonComboUpdateManyWithWhereWithoutHoaDonInput[]
    deleteMany?: HoaDonComboScalarWhereInput | HoaDonComboScalarWhereInput[]
  }

  export type GiuChoUpdateManyWithoutHoaDonNestedInput = {
    create?: XOR<GiuChoCreateWithoutHoaDonInput, GiuChoUncheckedCreateWithoutHoaDonInput> | GiuChoCreateWithoutHoaDonInput[] | GiuChoUncheckedCreateWithoutHoaDonInput[]
    connectOrCreate?: GiuChoCreateOrConnectWithoutHoaDonInput | GiuChoCreateOrConnectWithoutHoaDonInput[]
    upsert?: GiuChoUpsertWithWhereUniqueWithoutHoaDonInput | GiuChoUpsertWithWhereUniqueWithoutHoaDonInput[]
    createMany?: GiuChoCreateManyHoaDonInputEnvelope
    set?: GiuChoWhereUniqueInput | GiuChoWhereUniqueInput[]
    disconnect?: GiuChoWhereUniqueInput | GiuChoWhereUniqueInput[]
    delete?: GiuChoWhereUniqueInput | GiuChoWhereUniqueInput[]
    connect?: GiuChoWhereUniqueInput | GiuChoWhereUniqueInput[]
    update?: GiuChoUpdateWithWhereUniqueWithoutHoaDonInput | GiuChoUpdateWithWhereUniqueWithoutHoaDonInput[]
    updateMany?: GiuChoUpdateManyWithWhereWithoutHoaDonInput | GiuChoUpdateManyWithWhereWithoutHoaDonInput[]
    deleteMany?: GiuChoScalarWhereInput | GiuChoScalarWhereInput[]
  }

  export type DatVeUncheckedUpdateManyWithoutHoaDonNestedInput = {
    create?: XOR<DatVeCreateWithoutHoaDonInput, DatVeUncheckedCreateWithoutHoaDonInput> | DatVeCreateWithoutHoaDonInput[] | DatVeUncheckedCreateWithoutHoaDonInput[]
    connectOrCreate?: DatVeCreateOrConnectWithoutHoaDonInput | DatVeCreateOrConnectWithoutHoaDonInput[]
    upsert?: DatVeUpsertWithWhereUniqueWithoutHoaDonInput | DatVeUpsertWithWhereUniqueWithoutHoaDonInput[]
    createMany?: DatVeCreateManyHoaDonInputEnvelope
    set?: DatVeWhereUniqueInput | DatVeWhereUniqueInput[]
    disconnect?: DatVeWhereUniqueInput | DatVeWhereUniqueInput[]
    delete?: DatVeWhereUniqueInput | DatVeWhereUniqueInput[]
    connect?: DatVeWhereUniqueInput | DatVeWhereUniqueInput[]
    update?: DatVeUpdateWithWhereUniqueWithoutHoaDonInput | DatVeUpdateWithWhereUniqueWithoutHoaDonInput[]
    updateMany?: DatVeUpdateManyWithWhereWithoutHoaDonInput | DatVeUpdateManyWithWhereWithoutHoaDonInput[]
    deleteMany?: DatVeScalarWhereInput | DatVeScalarWhereInput[]
  }

  export type HoaDonComboUncheckedUpdateManyWithoutHoaDonNestedInput = {
    create?: XOR<HoaDonComboCreateWithoutHoaDonInput, HoaDonComboUncheckedCreateWithoutHoaDonInput> | HoaDonComboCreateWithoutHoaDonInput[] | HoaDonComboUncheckedCreateWithoutHoaDonInput[]
    connectOrCreate?: HoaDonComboCreateOrConnectWithoutHoaDonInput | HoaDonComboCreateOrConnectWithoutHoaDonInput[]
    upsert?: HoaDonComboUpsertWithWhereUniqueWithoutHoaDonInput | HoaDonComboUpsertWithWhereUniqueWithoutHoaDonInput[]
    createMany?: HoaDonComboCreateManyHoaDonInputEnvelope
    set?: HoaDonComboWhereUniqueInput | HoaDonComboWhereUniqueInput[]
    disconnect?: HoaDonComboWhereUniqueInput | HoaDonComboWhereUniqueInput[]
    delete?: HoaDonComboWhereUniqueInput | HoaDonComboWhereUniqueInput[]
    connect?: HoaDonComboWhereUniqueInput | HoaDonComboWhereUniqueInput[]
    update?: HoaDonComboUpdateWithWhereUniqueWithoutHoaDonInput | HoaDonComboUpdateWithWhereUniqueWithoutHoaDonInput[]
    updateMany?: HoaDonComboUpdateManyWithWhereWithoutHoaDonInput | HoaDonComboUpdateManyWithWhereWithoutHoaDonInput[]
    deleteMany?: HoaDonComboScalarWhereInput | HoaDonComboScalarWhereInput[]
  }

  export type GiuChoUncheckedUpdateManyWithoutHoaDonNestedInput = {
    create?: XOR<GiuChoCreateWithoutHoaDonInput, GiuChoUncheckedCreateWithoutHoaDonInput> | GiuChoCreateWithoutHoaDonInput[] | GiuChoUncheckedCreateWithoutHoaDonInput[]
    connectOrCreate?: GiuChoCreateOrConnectWithoutHoaDonInput | GiuChoCreateOrConnectWithoutHoaDonInput[]
    upsert?: GiuChoUpsertWithWhereUniqueWithoutHoaDonInput | GiuChoUpsertWithWhereUniqueWithoutHoaDonInput[]
    createMany?: GiuChoCreateManyHoaDonInputEnvelope
    set?: GiuChoWhereUniqueInput | GiuChoWhereUniqueInput[]
    disconnect?: GiuChoWhereUniqueInput | GiuChoWhereUniqueInput[]
    delete?: GiuChoWhereUniqueInput | GiuChoWhereUniqueInput[]
    connect?: GiuChoWhereUniqueInput | GiuChoWhereUniqueInput[]
    update?: GiuChoUpdateWithWhereUniqueWithoutHoaDonInput | GiuChoUpdateWithWhereUniqueWithoutHoaDonInput[]
    updateMany?: GiuChoUpdateManyWithWhereWithoutHoaDonInput | GiuChoUpdateManyWithWhereWithoutHoaDonInput[]
    deleteMany?: GiuChoScalarWhereInput | GiuChoScalarWhereInput[]
  }

  export type HoaDonComboCreateNestedManyWithoutComboInput = {
    create?: XOR<HoaDonComboCreateWithoutComboInput, HoaDonComboUncheckedCreateWithoutComboInput> | HoaDonComboCreateWithoutComboInput[] | HoaDonComboUncheckedCreateWithoutComboInput[]
    connectOrCreate?: HoaDonComboCreateOrConnectWithoutComboInput | HoaDonComboCreateOrConnectWithoutComboInput[]
    createMany?: HoaDonComboCreateManyComboInputEnvelope
    connect?: HoaDonComboWhereUniqueInput | HoaDonComboWhereUniqueInput[]
  }

  export type HoaDonComboUncheckedCreateNestedManyWithoutComboInput = {
    create?: XOR<HoaDonComboCreateWithoutComboInput, HoaDonComboUncheckedCreateWithoutComboInput> | HoaDonComboCreateWithoutComboInput[] | HoaDonComboUncheckedCreateWithoutComboInput[]
    connectOrCreate?: HoaDonComboCreateOrConnectWithoutComboInput | HoaDonComboCreateOrConnectWithoutComboInput[]
    createMany?: HoaDonComboCreateManyComboInputEnvelope
    connect?: HoaDonComboWhereUniqueInput | HoaDonComboWhereUniqueInput[]
  }

  export type HoaDonComboUpdateManyWithoutComboNestedInput = {
    create?: XOR<HoaDonComboCreateWithoutComboInput, HoaDonComboUncheckedCreateWithoutComboInput> | HoaDonComboCreateWithoutComboInput[] | HoaDonComboUncheckedCreateWithoutComboInput[]
    connectOrCreate?: HoaDonComboCreateOrConnectWithoutComboInput | HoaDonComboCreateOrConnectWithoutComboInput[]
    upsert?: HoaDonComboUpsertWithWhereUniqueWithoutComboInput | HoaDonComboUpsertWithWhereUniqueWithoutComboInput[]
    createMany?: HoaDonComboCreateManyComboInputEnvelope
    set?: HoaDonComboWhereUniqueInput | HoaDonComboWhereUniqueInput[]
    disconnect?: HoaDonComboWhereUniqueInput | HoaDonComboWhereUniqueInput[]
    delete?: HoaDonComboWhereUniqueInput | HoaDonComboWhereUniqueInput[]
    connect?: HoaDonComboWhereUniqueInput | HoaDonComboWhereUniqueInput[]
    update?: HoaDonComboUpdateWithWhereUniqueWithoutComboInput | HoaDonComboUpdateWithWhereUniqueWithoutComboInput[]
    updateMany?: HoaDonComboUpdateManyWithWhereWithoutComboInput | HoaDonComboUpdateManyWithWhereWithoutComboInput[]
    deleteMany?: HoaDonComboScalarWhereInput | HoaDonComboScalarWhereInput[]
  }

  export type HoaDonComboUncheckedUpdateManyWithoutComboNestedInput = {
    create?: XOR<HoaDonComboCreateWithoutComboInput, HoaDonComboUncheckedCreateWithoutComboInput> | HoaDonComboCreateWithoutComboInput[] | HoaDonComboUncheckedCreateWithoutComboInput[]
    connectOrCreate?: HoaDonComboCreateOrConnectWithoutComboInput | HoaDonComboCreateOrConnectWithoutComboInput[]
    upsert?: HoaDonComboUpsertWithWhereUniqueWithoutComboInput | HoaDonComboUpsertWithWhereUniqueWithoutComboInput[]
    createMany?: HoaDonComboCreateManyComboInputEnvelope
    set?: HoaDonComboWhereUniqueInput | HoaDonComboWhereUniqueInput[]
    disconnect?: HoaDonComboWhereUniqueInput | HoaDonComboWhereUniqueInput[]
    delete?: HoaDonComboWhereUniqueInput | HoaDonComboWhereUniqueInput[]
    connect?: HoaDonComboWhereUniqueInput | HoaDonComboWhereUniqueInput[]
    update?: HoaDonComboUpdateWithWhereUniqueWithoutComboInput | HoaDonComboUpdateWithWhereUniqueWithoutComboInput[]
    updateMany?: HoaDonComboUpdateManyWithWhereWithoutComboInput | HoaDonComboUpdateManyWithWhereWithoutComboInput[]
    deleteMany?: HoaDonComboScalarWhereInput | HoaDonComboScalarWhereInput[]
  }

  export type HoaDonCreateNestedOneWithoutHoaDonComboInput = {
    create?: XOR<HoaDonCreateWithoutHoaDonComboInput, HoaDonUncheckedCreateWithoutHoaDonComboInput>
    connectOrCreate?: HoaDonCreateOrConnectWithoutHoaDonComboInput
    connect?: HoaDonWhereUniqueInput
  }

  export type ComboCreateNestedOneWithoutHoaDonComboInput = {
    create?: XOR<ComboCreateWithoutHoaDonComboInput, ComboUncheckedCreateWithoutHoaDonComboInput>
    connectOrCreate?: ComboCreateOrConnectWithoutHoaDonComboInput
    connect?: ComboWhereUniqueInput
  }

  export type HoaDonUpdateOneRequiredWithoutHoaDonComboNestedInput = {
    create?: XOR<HoaDonCreateWithoutHoaDonComboInput, HoaDonUncheckedCreateWithoutHoaDonComboInput>
    connectOrCreate?: HoaDonCreateOrConnectWithoutHoaDonComboInput
    upsert?: HoaDonUpsertWithoutHoaDonComboInput
    connect?: HoaDonWhereUniqueInput
    update?: XOR<XOR<HoaDonUpdateToOneWithWhereWithoutHoaDonComboInput, HoaDonUpdateWithoutHoaDonComboInput>, HoaDonUncheckedUpdateWithoutHoaDonComboInput>
  }

  export type ComboUpdateOneRequiredWithoutHoaDonComboNestedInput = {
    create?: XOR<ComboCreateWithoutHoaDonComboInput, ComboUncheckedCreateWithoutHoaDonComboInput>
    connectOrCreate?: ComboCreateOrConnectWithoutHoaDonComboInput
    upsert?: ComboUpsertWithoutHoaDonComboInput
    connect?: ComboWhereUniqueInput
    update?: XOR<XOR<ComboUpdateToOneWithWhereWithoutHoaDonComboInput, ComboUpdateWithoutHoaDonComboInput>, ComboUncheckedUpdateWithoutHoaDonComboInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumLoaiGiuChoFilter<$PrismaModel = never> = {
    equals?: $Enums.LoaiGiuCho | EnumLoaiGiuChoFieldRefInput<$PrismaModel>
    in?: $Enums.LoaiGiuCho[]
    notIn?: $Enums.LoaiGiuCho[]
    not?: NestedEnumLoaiGiuChoFilter<$PrismaModel> | $Enums.LoaiGiuCho
  }

  export type NestedEnumLoaiGiuChoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LoaiGiuCho | EnumLoaiGiuChoFieldRefInput<$PrismaModel>
    in?: $Enums.LoaiGiuCho[]
    notIn?: $Enums.LoaiGiuCho[]
    not?: NestedEnumLoaiGiuChoWithAggregatesFilter<$PrismaModel> | $Enums.LoaiGiuCho
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLoaiGiuChoFilter<$PrismaModel>
    _max?: NestedEnumLoaiGiuChoFilter<$PrismaModel>
  }

  export type NestedEnumTrangThaiThanhToanFilter<$PrismaModel = never> = {
    equals?: $Enums.TrangThaiThanhToan | EnumTrangThaiThanhToanFieldRefInput<$PrismaModel>
    in?: $Enums.TrangThaiThanhToan[]
    notIn?: $Enums.TrangThaiThanhToan[]
    not?: NestedEnumTrangThaiThanhToanFilter<$PrismaModel> | $Enums.TrangThaiThanhToan
  }

  export type NestedEnumTrangThaiThanhToanWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TrangThaiThanhToan | EnumTrangThaiThanhToanFieldRefInput<$PrismaModel>
    in?: $Enums.TrangThaiThanhToan[]
    notIn?: $Enums.TrangThaiThanhToan[]
    not?: NestedEnumTrangThaiThanhToanWithAggregatesFilter<$PrismaModel> | $Enums.TrangThaiThanhToan
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTrangThaiThanhToanFilter<$PrismaModel>
    _max?: NestedEnumTrangThaiThanhToanFilter<$PrismaModel>
  }

  export type PhimCreateWithoutBannerInput = {
    ten_phim?: string | null
    trailer?: string | null
    hinh_anh?: string | null
    mo_ta?: string | null
    ngay_khoi_chieu?: Date | string | null
    danh_gia?: number | null
    hot?: boolean | null
    dang_chieu?: boolean | null
    sap_chieu?: boolean | null
    isDeleted?: boolean | null
    LichChieu?: LichChieuCreateNestedManyWithoutPhimInput
  }

  export type PhimUncheckedCreateWithoutBannerInput = {
    ma_phim?: number
    ten_phim?: string | null
    trailer?: string | null
    hinh_anh?: string | null
    mo_ta?: string | null
    ngay_khoi_chieu?: Date | string | null
    danh_gia?: number | null
    hot?: boolean | null
    dang_chieu?: boolean | null
    sap_chieu?: boolean | null
    isDeleted?: boolean | null
    LichChieu?: LichChieuUncheckedCreateNestedManyWithoutPhimInput
  }

  export type PhimCreateOrConnectWithoutBannerInput = {
    where: PhimWhereUniqueInput
    create: XOR<PhimCreateWithoutBannerInput, PhimUncheckedCreateWithoutBannerInput>
  }

  export type PhimUpsertWithoutBannerInput = {
    update: XOR<PhimUpdateWithoutBannerInput, PhimUncheckedUpdateWithoutBannerInput>
    create: XOR<PhimCreateWithoutBannerInput, PhimUncheckedCreateWithoutBannerInput>
    where?: PhimWhereInput
  }

  export type PhimUpdateToOneWithWhereWithoutBannerInput = {
    where?: PhimWhereInput
    data: XOR<PhimUpdateWithoutBannerInput, PhimUncheckedUpdateWithoutBannerInput>
  }

  export type PhimUpdateWithoutBannerInput = {
    ten_phim?: NullableStringFieldUpdateOperationsInput | string | null
    trailer?: NullableStringFieldUpdateOperationsInput | string | null
    hinh_anh?: NullableStringFieldUpdateOperationsInput | string | null
    mo_ta?: NullableStringFieldUpdateOperationsInput | string | null
    ngay_khoi_chieu?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    danh_gia?: NullableIntFieldUpdateOperationsInput | number | null
    hot?: NullableBoolFieldUpdateOperationsInput | boolean | null
    dang_chieu?: NullableBoolFieldUpdateOperationsInput | boolean | null
    sap_chieu?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    LichChieu?: LichChieuUpdateManyWithoutPhimNestedInput
  }

  export type PhimUncheckedUpdateWithoutBannerInput = {
    ma_phim?: IntFieldUpdateOperationsInput | number
    ten_phim?: NullableStringFieldUpdateOperationsInput | string | null
    trailer?: NullableStringFieldUpdateOperationsInput | string | null
    hinh_anh?: NullableStringFieldUpdateOperationsInput | string | null
    mo_ta?: NullableStringFieldUpdateOperationsInput | string | null
    ngay_khoi_chieu?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    danh_gia?: NullableIntFieldUpdateOperationsInput | number | null
    hot?: NullableBoolFieldUpdateOperationsInput | boolean | null
    dang_chieu?: NullableBoolFieldUpdateOperationsInput | boolean | null
    sap_chieu?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    LichChieu?: LichChieuUncheckedUpdateManyWithoutPhimNestedInput
  }

  export type HeThongRapCreateWithoutCumRapInput = {
    ten_he_thong_rap?: string | null
    logo?: string | null
  }

  export type HeThongRapUncheckedCreateWithoutCumRapInput = {
    ma_he_thong_rap?: number
    ten_he_thong_rap?: string | null
    logo?: string | null
  }

  export type HeThongRapCreateOrConnectWithoutCumRapInput = {
    where: HeThongRapWhereUniqueInput
    create: XOR<HeThongRapCreateWithoutCumRapInput, HeThongRapUncheckedCreateWithoutCumRapInput>
  }

  export type RapPhimCreateWithoutCumRapInput = {
    ten_rap?: string | null
    Ghe?: GheCreateNestedManyWithoutRapPhimInput
    LichChieu?: LichChieuCreateNestedManyWithoutRapPhimInput
  }

  export type RapPhimUncheckedCreateWithoutCumRapInput = {
    ma_rap?: number
    ten_rap?: string | null
    Ghe?: GheUncheckedCreateNestedManyWithoutRapPhimInput
    LichChieu?: LichChieuUncheckedCreateNestedManyWithoutRapPhimInput
  }

  export type RapPhimCreateOrConnectWithoutCumRapInput = {
    where: RapPhimWhereUniqueInput
    create: XOR<RapPhimCreateWithoutCumRapInput, RapPhimUncheckedCreateWithoutCumRapInput>
  }

  export type RapPhimCreateManyCumRapInputEnvelope = {
    data: RapPhimCreateManyCumRapInput | RapPhimCreateManyCumRapInput[]
    skipDuplicates?: boolean
  }

  export type HeThongRapUpsertWithoutCumRapInput = {
    update: XOR<HeThongRapUpdateWithoutCumRapInput, HeThongRapUncheckedUpdateWithoutCumRapInput>
    create: XOR<HeThongRapCreateWithoutCumRapInput, HeThongRapUncheckedCreateWithoutCumRapInput>
    where?: HeThongRapWhereInput
  }

  export type HeThongRapUpdateToOneWithWhereWithoutCumRapInput = {
    where?: HeThongRapWhereInput
    data: XOR<HeThongRapUpdateWithoutCumRapInput, HeThongRapUncheckedUpdateWithoutCumRapInput>
  }

  export type HeThongRapUpdateWithoutCumRapInput = {
    ten_he_thong_rap?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HeThongRapUncheckedUpdateWithoutCumRapInput = {
    ma_he_thong_rap?: IntFieldUpdateOperationsInput | number
    ten_he_thong_rap?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RapPhimUpsertWithWhereUniqueWithoutCumRapInput = {
    where: RapPhimWhereUniqueInput
    update: XOR<RapPhimUpdateWithoutCumRapInput, RapPhimUncheckedUpdateWithoutCumRapInput>
    create: XOR<RapPhimCreateWithoutCumRapInput, RapPhimUncheckedCreateWithoutCumRapInput>
  }

  export type RapPhimUpdateWithWhereUniqueWithoutCumRapInput = {
    where: RapPhimWhereUniqueInput
    data: XOR<RapPhimUpdateWithoutCumRapInput, RapPhimUncheckedUpdateWithoutCumRapInput>
  }

  export type RapPhimUpdateManyWithWhereWithoutCumRapInput = {
    where: RapPhimScalarWhereInput
    data: XOR<RapPhimUpdateManyMutationInput, RapPhimUncheckedUpdateManyWithoutCumRapInput>
  }

  export type RapPhimScalarWhereInput = {
    AND?: RapPhimScalarWhereInput | RapPhimScalarWhereInput[]
    OR?: RapPhimScalarWhereInput[]
    NOT?: RapPhimScalarWhereInput | RapPhimScalarWhereInput[]
    ma_rap?: IntFilter<"RapPhim"> | number
    ten_rap?: StringNullableFilter<"RapPhim"> | string | null
    ma_cum_rap?: IntNullableFilter<"RapPhim"> | number | null
  }

  export type NguoiDungCreateWithoutDatVeInput = {
    ho_ten?: string | null
    email?: string | null
    so_dt?: string | null
    mat_khau?: string | null
    loai_nguoi_dung?: string | null
    isDeleted?: boolean | null
    GiuCho?: GiuChoCreateNestedManyWithoutNguoiDungInput
    HoaDon?: HoaDonCreateNestedManyWithoutNguoiDungInput
    RefreshToken?: RefreshTokenCreateNestedManyWithoutNguoiDungInput
  }

  export type NguoiDungUncheckedCreateWithoutDatVeInput = {
    tai_khoan?: number
    ho_ten?: string | null
    email?: string | null
    so_dt?: string | null
    mat_khau?: string | null
    loai_nguoi_dung?: string | null
    isDeleted?: boolean | null
    GiuCho?: GiuChoUncheckedCreateNestedManyWithoutNguoiDungInput
    HoaDon?: HoaDonUncheckedCreateNestedManyWithoutNguoiDungInput
    RefreshToken?: RefreshTokenUncheckedCreateNestedManyWithoutNguoiDungInput
  }

  export type NguoiDungCreateOrConnectWithoutDatVeInput = {
    where: NguoiDungWhereUniqueInput
    create: XOR<NguoiDungCreateWithoutDatVeInput, NguoiDungUncheckedCreateWithoutDatVeInput>
  }

  export type LichChieuCreateWithoutDatVeInput = {
    ngay_gio_chieu?: Date | string | null
    gia_ve?: number | null
    GiuCho?: GiuChoCreateNestedManyWithoutLichChieuInput
    HoaDon?: HoaDonCreateNestedManyWithoutLichChieuInput
    RapPhim?: RapPhimCreateNestedOneWithoutLichChieuInput
    Phim?: PhimCreateNestedOneWithoutLichChieuInput
  }

  export type LichChieuUncheckedCreateWithoutDatVeInput = {
    ma_lich_chieu?: number
    ma_rap?: number | null
    ma_phim?: number | null
    ngay_gio_chieu?: Date | string | null
    gia_ve?: number | null
    GiuCho?: GiuChoUncheckedCreateNestedManyWithoutLichChieuInput
    HoaDon?: HoaDonUncheckedCreateNestedManyWithoutLichChieuInput
  }

  export type LichChieuCreateOrConnectWithoutDatVeInput = {
    where: LichChieuWhereUniqueInput
    create: XOR<LichChieuCreateWithoutDatVeInput, LichChieuUncheckedCreateWithoutDatVeInput>
  }

  export type GheCreateWithoutDatVeInput = {
    ten_ghe?: string | null
    loai_ghe?: string | null
    RapPhim?: RapPhimCreateNestedOneWithoutGheInput
    GiuCho?: GiuChoCreateNestedManyWithoutGheInput
  }

  export type GheUncheckedCreateWithoutDatVeInput = {
    ma_ghe?: number
    ten_ghe?: string | null
    loai_ghe?: string | null
    ma_rap?: number | null
    GiuCho?: GiuChoUncheckedCreateNestedManyWithoutGheInput
  }

  export type GheCreateOrConnectWithoutDatVeInput = {
    where: GheWhereUniqueInput
    create: XOR<GheCreateWithoutDatVeInput, GheUncheckedCreateWithoutDatVeInput>
  }

  export type HoaDonCreateWithoutDatVeInput = {
    tong_tien: number
    created_at?: Date | string | null
    checked_in_at?: Date | string | null
    trang_thai_thanh_toan?: $Enums.TrangThaiThanhToan
    phuong_thuc_thanh_toan?: string | null
    ma_giao_dich_ngan_hang?: string | null
    so_tien_da_nhan?: number | null
    thanh_toan_luc?: Date | string | null
    het_han_luc?: Date | string | null
    NguoiDung: NguoiDungCreateNestedOneWithoutHoaDonInput
    LichChieu: LichChieuCreateNestedOneWithoutHoaDonInput
    HoaDonCombo?: HoaDonComboCreateNestedManyWithoutHoaDonInput
    GiuCho?: GiuChoCreateNestedManyWithoutHoaDonInput
  }

  export type HoaDonUncheckedCreateWithoutDatVeInput = {
    ma_hoa_don?: number
    tai_khoan: number
    ma_lich_chieu: number
    tong_tien: number
    created_at?: Date | string | null
    checked_in_at?: Date | string | null
    trang_thai_thanh_toan?: $Enums.TrangThaiThanhToan
    phuong_thuc_thanh_toan?: string | null
    ma_giao_dich_ngan_hang?: string | null
    so_tien_da_nhan?: number | null
    thanh_toan_luc?: Date | string | null
    het_han_luc?: Date | string | null
    HoaDonCombo?: HoaDonComboUncheckedCreateNestedManyWithoutHoaDonInput
    GiuCho?: GiuChoUncheckedCreateNestedManyWithoutHoaDonInput
  }

  export type HoaDonCreateOrConnectWithoutDatVeInput = {
    where: HoaDonWhereUniqueInput
    create: XOR<HoaDonCreateWithoutDatVeInput, HoaDonUncheckedCreateWithoutDatVeInput>
  }

  export type NguoiDungUpsertWithoutDatVeInput = {
    update: XOR<NguoiDungUpdateWithoutDatVeInput, NguoiDungUncheckedUpdateWithoutDatVeInput>
    create: XOR<NguoiDungCreateWithoutDatVeInput, NguoiDungUncheckedCreateWithoutDatVeInput>
    where?: NguoiDungWhereInput
  }

  export type NguoiDungUpdateToOneWithWhereWithoutDatVeInput = {
    where?: NguoiDungWhereInput
    data: XOR<NguoiDungUpdateWithoutDatVeInput, NguoiDungUncheckedUpdateWithoutDatVeInput>
  }

  export type NguoiDungUpdateWithoutDatVeInput = {
    ho_ten?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    so_dt?: NullableStringFieldUpdateOperationsInput | string | null
    mat_khau?: NullableStringFieldUpdateOperationsInput | string | null
    loai_nguoi_dung?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    GiuCho?: GiuChoUpdateManyWithoutNguoiDungNestedInput
    HoaDon?: HoaDonUpdateManyWithoutNguoiDungNestedInput
    RefreshToken?: RefreshTokenUpdateManyWithoutNguoiDungNestedInput
  }

  export type NguoiDungUncheckedUpdateWithoutDatVeInput = {
    tai_khoan?: IntFieldUpdateOperationsInput | number
    ho_ten?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    so_dt?: NullableStringFieldUpdateOperationsInput | string | null
    mat_khau?: NullableStringFieldUpdateOperationsInput | string | null
    loai_nguoi_dung?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    GiuCho?: GiuChoUncheckedUpdateManyWithoutNguoiDungNestedInput
    HoaDon?: HoaDonUncheckedUpdateManyWithoutNguoiDungNestedInput
    RefreshToken?: RefreshTokenUncheckedUpdateManyWithoutNguoiDungNestedInput
  }

  export type LichChieuUpsertWithoutDatVeInput = {
    update: XOR<LichChieuUpdateWithoutDatVeInput, LichChieuUncheckedUpdateWithoutDatVeInput>
    create: XOR<LichChieuCreateWithoutDatVeInput, LichChieuUncheckedCreateWithoutDatVeInput>
    where?: LichChieuWhereInput
  }

  export type LichChieuUpdateToOneWithWhereWithoutDatVeInput = {
    where?: LichChieuWhereInput
    data: XOR<LichChieuUpdateWithoutDatVeInput, LichChieuUncheckedUpdateWithoutDatVeInput>
  }

  export type LichChieuUpdateWithoutDatVeInput = {
    ngay_gio_chieu?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gia_ve?: NullableIntFieldUpdateOperationsInput | number | null
    GiuCho?: GiuChoUpdateManyWithoutLichChieuNestedInput
    HoaDon?: HoaDonUpdateManyWithoutLichChieuNestedInput
    RapPhim?: RapPhimUpdateOneWithoutLichChieuNestedInput
    Phim?: PhimUpdateOneWithoutLichChieuNestedInput
  }

  export type LichChieuUncheckedUpdateWithoutDatVeInput = {
    ma_lich_chieu?: IntFieldUpdateOperationsInput | number
    ma_rap?: NullableIntFieldUpdateOperationsInput | number | null
    ma_phim?: NullableIntFieldUpdateOperationsInput | number | null
    ngay_gio_chieu?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gia_ve?: NullableIntFieldUpdateOperationsInput | number | null
    GiuCho?: GiuChoUncheckedUpdateManyWithoutLichChieuNestedInput
    HoaDon?: HoaDonUncheckedUpdateManyWithoutLichChieuNestedInput
  }

  export type GheUpsertWithoutDatVeInput = {
    update: XOR<GheUpdateWithoutDatVeInput, GheUncheckedUpdateWithoutDatVeInput>
    create: XOR<GheCreateWithoutDatVeInput, GheUncheckedCreateWithoutDatVeInput>
    where?: GheWhereInput
  }

  export type GheUpdateToOneWithWhereWithoutDatVeInput = {
    where?: GheWhereInput
    data: XOR<GheUpdateWithoutDatVeInput, GheUncheckedUpdateWithoutDatVeInput>
  }

  export type GheUpdateWithoutDatVeInput = {
    ten_ghe?: NullableStringFieldUpdateOperationsInput | string | null
    loai_ghe?: NullableStringFieldUpdateOperationsInput | string | null
    RapPhim?: RapPhimUpdateOneWithoutGheNestedInput
    GiuCho?: GiuChoUpdateManyWithoutGheNestedInput
  }

  export type GheUncheckedUpdateWithoutDatVeInput = {
    ma_ghe?: IntFieldUpdateOperationsInput | number
    ten_ghe?: NullableStringFieldUpdateOperationsInput | string | null
    loai_ghe?: NullableStringFieldUpdateOperationsInput | string | null
    ma_rap?: NullableIntFieldUpdateOperationsInput | number | null
    GiuCho?: GiuChoUncheckedUpdateManyWithoutGheNestedInput
  }

  export type HoaDonUpsertWithoutDatVeInput = {
    update: XOR<HoaDonUpdateWithoutDatVeInput, HoaDonUncheckedUpdateWithoutDatVeInput>
    create: XOR<HoaDonCreateWithoutDatVeInput, HoaDonUncheckedCreateWithoutDatVeInput>
    where?: HoaDonWhereInput
  }

  export type HoaDonUpdateToOneWithWhereWithoutDatVeInput = {
    where?: HoaDonWhereInput
    data: XOR<HoaDonUpdateWithoutDatVeInput, HoaDonUncheckedUpdateWithoutDatVeInput>
  }

  export type HoaDonUpdateWithoutDatVeInput = {
    tong_tien?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checked_in_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trang_thai_thanh_toan?: EnumTrangThaiThanhToanFieldUpdateOperationsInput | $Enums.TrangThaiThanhToan
    phuong_thuc_thanh_toan?: NullableStringFieldUpdateOperationsInput | string | null
    ma_giao_dich_ngan_hang?: NullableStringFieldUpdateOperationsInput | string | null
    so_tien_da_nhan?: NullableIntFieldUpdateOperationsInput | number | null
    thanh_toan_luc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    het_han_luc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    NguoiDung?: NguoiDungUpdateOneRequiredWithoutHoaDonNestedInput
    LichChieu?: LichChieuUpdateOneRequiredWithoutHoaDonNestedInput
    HoaDonCombo?: HoaDonComboUpdateManyWithoutHoaDonNestedInput
    GiuCho?: GiuChoUpdateManyWithoutHoaDonNestedInput
  }

  export type HoaDonUncheckedUpdateWithoutDatVeInput = {
    ma_hoa_don?: IntFieldUpdateOperationsInput | number
    tai_khoan?: IntFieldUpdateOperationsInput | number
    ma_lich_chieu?: IntFieldUpdateOperationsInput | number
    tong_tien?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checked_in_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trang_thai_thanh_toan?: EnumTrangThaiThanhToanFieldUpdateOperationsInput | $Enums.TrangThaiThanhToan
    phuong_thuc_thanh_toan?: NullableStringFieldUpdateOperationsInput | string | null
    ma_giao_dich_ngan_hang?: NullableStringFieldUpdateOperationsInput | string | null
    so_tien_da_nhan?: NullableIntFieldUpdateOperationsInput | number | null
    thanh_toan_luc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    het_han_luc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    HoaDonCombo?: HoaDonComboUncheckedUpdateManyWithoutHoaDonNestedInput
    GiuCho?: GiuChoUncheckedUpdateManyWithoutHoaDonNestedInput
  }

  export type DatVeCreateWithoutGheInput = {
    gia_ve: number
    created_at?: Date | string | null
    NguoiDung: NguoiDungCreateNestedOneWithoutDatVeInput
    LichChieu: LichChieuCreateNestedOneWithoutDatVeInput
    HoaDon?: HoaDonCreateNestedOneWithoutDatVeInput
  }

  export type DatVeUncheckedCreateWithoutGheInput = {
    tai_khoan: number
    ma_lich_chieu: number
    gia_ve: number
    ma_hoa_don?: number | null
    created_at?: Date | string | null
  }

  export type DatVeCreateOrConnectWithoutGheInput = {
    where: DatVeWhereUniqueInput
    create: XOR<DatVeCreateWithoutGheInput, DatVeUncheckedCreateWithoutGheInput>
  }

  export type DatVeCreateManyGheInputEnvelope = {
    data: DatVeCreateManyGheInput | DatVeCreateManyGheInput[]
    skipDuplicates?: boolean
  }

  export type RapPhimCreateWithoutGheInput = {
    ten_rap?: string | null
    LichChieu?: LichChieuCreateNestedManyWithoutRapPhimInput
    CumRap?: CumRapCreateNestedOneWithoutRapPhimInput
  }

  export type RapPhimUncheckedCreateWithoutGheInput = {
    ma_rap?: number
    ten_rap?: string | null
    ma_cum_rap?: number | null
    LichChieu?: LichChieuUncheckedCreateNestedManyWithoutRapPhimInput
  }

  export type RapPhimCreateOrConnectWithoutGheInput = {
    where: RapPhimWhereUniqueInput
    create: XOR<RapPhimCreateWithoutGheInput, RapPhimUncheckedCreateWithoutGheInput>
  }

  export type GiuChoCreateWithoutGheInput = {
    loai?: $Enums.LoaiGiuCho
    gia_ve?: number | null
    expire_at: Date | string
    created_at?: Date | string | null
    LichChieu: LichChieuCreateNestedOneWithoutGiuChoInput
    NguoiDung: NguoiDungCreateNestedOneWithoutGiuChoInput
    HoaDon?: HoaDonCreateNestedOneWithoutGiuChoInput
  }

  export type GiuChoUncheckedCreateWithoutGheInput = {
    ma_giu_cho?: number
    tai_khoan: number
    ma_lich_chieu: number
    loai?: $Enums.LoaiGiuCho
    ma_hoa_don?: number | null
    gia_ve?: number | null
    expire_at: Date | string
    created_at?: Date | string | null
  }

  export type GiuChoCreateOrConnectWithoutGheInput = {
    where: GiuChoWhereUniqueInput
    create: XOR<GiuChoCreateWithoutGheInput, GiuChoUncheckedCreateWithoutGheInput>
  }

  export type GiuChoCreateManyGheInputEnvelope = {
    data: GiuChoCreateManyGheInput | GiuChoCreateManyGheInput[]
    skipDuplicates?: boolean
  }

  export type DatVeUpsertWithWhereUniqueWithoutGheInput = {
    where: DatVeWhereUniqueInput
    update: XOR<DatVeUpdateWithoutGheInput, DatVeUncheckedUpdateWithoutGheInput>
    create: XOR<DatVeCreateWithoutGheInput, DatVeUncheckedCreateWithoutGheInput>
  }

  export type DatVeUpdateWithWhereUniqueWithoutGheInput = {
    where: DatVeWhereUniqueInput
    data: XOR<DatVeUpdateWithoutGheInput, DatVeUncheckedUpdateWithoutGheInput>
  }

  export type DatVeUpdateManyWithWhereWithoutGheInput = {
    where: DatVeScalarWhereInput
    data: XOR<DatVeUpdateManyMutationInput, DatVeUncheckedUpdateManyWithoutGheInput>
  }

  export type DatVeScalarWhereInput = {
    AND?: DatVeScalarWhereInput | DatVeScalarWhereInput[]
    OR?: DatVeScalarWhereInput[]
    NOT?: DatVeScalarWhereInput | DatVeScalarWhereInput[]
    tai_khoan?: IntFilter<"DatVe"> | number
    ma_lich_chieu?: IntFilter<"DatVe"> | number
    ma_ghe?: IntFilter<"DatVe"> | number
    gia_ve?: IntFilter<"DatVe"> | number
    ma_hoa_don?: IntNullableFilter<"DatVe"> | number | null
    created_at?: DateTimeNullableFilter<"DatVe"> | Date | string | null
  }

  export type RapPhimUpsertWithoutGheInput = {
    update: XOR<RapPhimUpdateWithoutGheInput, RapPhimUncheckedUpdateWithoutGheInput>
    create: XOR<RapPhimCreateWithoutGheInput, RapPhimUncheckedCreateWithoutGheInput>
    where?: RapPhimWhereInput
  }

  export type RapPhimUpdateToOneWithWhereWithoutGheInput = {
    where?: RapPhimWhereInput
    data: XOR<RapPhimUpdateWithoutGheInput, RapPhimUncheckedUpdateWithoutGheInput>
  }

  export type RapPhimUpdateWithoutGheInput = {
    ten_rap?: NullableStringFieldUpdateOperationsInput | string | null
    LichChieu?: LichChieuUpdateManyWithoutRapPhimNestedInput
    CumRap?: CumRapUpdateOneWithoutRapPhimNestedInput
  }

  export type RapPhimUncheckedUpdateWithoutGheInput = {
    ma_rap?: IntFieldUpdateOperationsInput | number
    ten_rap?: NullableStringFieldUpdateOperationsInput | string | null
    ma_cum_rap?: NullableIntFieldUpdateOperationsInput | number | null
    LichChieu?: LichChieuUncheckedUpdateManyWithoutRapPhimNestedInput
  }

  export type GiuChoUpsertWithWhereUniqueWithoutGheInput = {
    where: GiuChoWhereUniqueInput
    update: XOR<GiuChoUpdateWithoutGheInput, GiuChoUncheckedUpdateWithoutGheInput>
    create: XOR<GiuChoCreateWithoutGheInput, GiuChoUncheckedCreateWithoutGheInput>
  }

  export type GiuChoUpdateWithWhereUniqueWithoutGheInput = {
    where: GiuChoWhereUniqueInput
    data: XOR<GiuChoUpdateWithoutGheInput, GiuChoUncheckedUpdateWithoutGheInput>
  }

  export type GiuChoUpdateManyWithWhereWithoutGheInput = {
    where: GiuChoScalarWhereInput
    data: XOR<GiuChoUpdateManyMutationInput, GiuChoUncheckedUpdateManyWithoutGheInput>
  }

  export type GiuChoScalarWhereInput = {
    AND?: GiuChoScalarWhereInput | GiuChoScalarWhereInput[]
    OR?: GiuChoScalarWhereInput[]
    NOT?: GiuChoScalarWhereInput | GiuChoScalarWhereInput[]
    ma_giu_cho?: IntFilter<"GiuCho"> | number
    tai_khoan?: IntFilter<"GiuCho"> | number
    ma_lich_chieu?: IntFilter<"GiuCho"> | number
    ma_ghe?: IntFilter<"GiuCho"> | number
    loai?: EnumLoaiGiuChoFilter<"GiuCho"> | $Enums.LoaiGiuCho
    ma_hoa_don?: IntNullableFilter<"GiuCho"> | number | null
    gia_ve?: IntNullableFilter<"GiuCho"> | number | null
    expire_at?: DateTimeFilter<"GiuCho"> | Date | string
    created_at?: DateTimeNullableFilter<"GiuCho"> | Date | string | null
  }

  export type CumRapCreateWithoutHeThongRapInput = {
    ten_cum_rap?: string | null
    dia_chi?: string | null
    khu_vuc?: string | null
    RapPhim?: RapPhimCreateNestedManyWithoutCumRapInput
  }

  export type CumRapUncheckedCreateWithoutHeThongRapInput = {
    ma_cum_rap?: number
    ten_cum_rap?: string | null
    dia_chi?: string | null
    khu_vuc?: string | null
    RapPhim?: RapPhimUncheckedCreateNestedManyWithoutCumRapInput
  }

  export type CumRapCreateOrConnectWithoutHeThongRapInput = {
    where: CumRapWhereUniqueInput
    create: XOR<CumRapCreateWithoutHeThongRapInput, CumRapUncheckedCreateWithoutHeThongRapInput>
  }

  export type CumRapCreateManyHeThongRapInputEnvelope = {
    data: CumRapCreateManyHeThongRapInput | CumRapCreateManyHeThongRapInput[]
    skipDuplicates?: boolean
  }

  export type CumRapUpsertWithWhereUniqueWithoutHeThongRapInput = {
    where: CumRapWhereUniqueInput
    update: XOR<CumRapUpdateWithoutHeThongRapInput, CumRapUncheckedUpdateWithoutHeThongRapInput>
    create: XOR<CumRapCreateWithoutHeThongRapInput, CumRapUncheckedCreateWithoutHeThongRapInput>
  }

  export type CumRapUpdateWithWhereUniqueWithoutHeThongRapInput = {
    where: CumRapWhereUniqueInput
    data: XOR<CumRapUpdateWithoutHeThongRapInput, CumRapUncheckedUpdateWithoutHeThongRapInput>
  }

  export type CumRapUpdateManyWithWhereWithoutHeThongRapInput = {
    where: CumRapScalarWhereInput
    data: XOR<CumRapUpdateManyMutationInput, CumRapUncheckedUpdateManyWithoutHeThongRapInput>
  }

  export type CumRapScalarWhereInput = {
    AND?: CumRapScalarWhereInput | CumRapScalarWhereInput[]
    OR?: CumRapScalarWhereInput[]
    NOT?: CumRapScalarWhereInput | CumRapScalarWhereInput[]
    ma_cum_rap?: IntFilter<"CumRap"> | number
    ten_cum_rap?: StringNullableFilter<"CumRap"> | string | null
    dia_chi?: StringNullableFilter<"CumRap"> | string | null
    ma_he_thong_rap?: IntNullableFilter<"CumRap"> | number | null
    khu_vuc?: StringNullableFilter<"CumRap"> | string | null
  }

  export type DatVeCreateWithoutLichChieuInput = {
    gia_ve: number
    created_at?: Date | string | null
    NguoiDung: NguoiDungCreateNestedOneWithoutDatVeInput
    Ghe: GheCreateNestedOneWithoutDatVeInput
    HoaDon?: HoaDonCreateNestedOneWithoutDatVeInput
  }

  export type DatVeUncheckedCreateWithoutLichChieuInput = {
    tai_khoan: number
    ma_ghe: number
    gia_ve: number
    ma_hoa_don?: number | null
    created_at?: Date | string | null
  }

  export type DatVeCreateOrConnectWithoutLichChieuInput = {
    where: DatVeWhereUniqueInput
    create: XOR<DatVeCreateWithoutLichChieuInput, DatVeUncheckedCreateWithoutLichChieuInput>
  }

  export type DatVeCreateManyLichChieuInputEnvelope = {
    data: DatVeCreateManyLichChieuInput | DatVeCreateManyLichChieuInput[]
    skipDuplicates?: boolean
  }

  export type GiuChoCreateWithoutLichChieuInput = {
    loai?: $Enums.LoaiGiuCho
    gia_ve?: number | null
    expire_at: Date | string
    created_at?: Date | string | null
    Ghe: GheCreateNestedOneWithoutGiuChoInput
    NguoiDung: NguoiDungCreateNestedOneWithoutGiuChoInput
    HoaDon?: HoaDonCreateNestedOneWithoutGiuChoInput
  }

  export type GiuChoUncheckedCreateWithoutLichChieuInput = {
    ma_giu_cho?: number
    tai_khoan: number
    ma_ghe: number
    loai?: $Enums.LoaiGiuCho
    ma_hoa_don?: number | null
    gia_ve?: number | null
    expire_at: Date | string
    created_at?: Date | string | null
  }

  export type GiuChoCreateOrConnectWithoutLichChieuInput = {
    where: GiuChoWhereUniqueInput
    create: XOR<GiuChoCreateWithoutLichChieuInput, GiuChoUncheckedCreateWithoutLichChieuInput>
  }

  export type GiuChoCreateManyLichChieuInputEnvelope = {
    data: GiuChoCreateManyLichChieuInput | GiuChoCreateManyLichChieuInput[]
    skipDuplicates?: boolean
  }

  export type HoaDonCreateWithoutLichChieuInput = {
    tong_tien: number
    created_at?: Date | string | null
    checked_in_at?: Date | string | null
    trang_thai_thanh_toan?: $Enums.TrangThaiThanhToan
    phuong_thuc_thanh_toan?: string | null
    ma_giao_dich_ngan_hang?: string | null
    so_tien_da_nhan?: number | null
    thanh_toan_luc?: Date | string | null
    het_han_luc?: Date | string | null
    NguoiDung: NguoiDungCreateNestedOneWithoutHoaDonInput
    DatVe?: DatVeCreateNestedManyWithoutHoaDonInput
    HoaDonCombo?: HoaDonComboCreateNestedManyWithoutHoaDonInput
    GiuCho?: GiuChoCreateNestedManyWithoutHoaDonInput
  }

  export type HoaDonUncheckedCreateWithoutLichChieuInput = {
    ma_hoa_don?: number
    tai_khoan: number
    tong_tien: number
    created_at?: Date | string | null
    checked_in_at?: Date | string | null
    trang_thai_thanh_toan?: $Enums.TrangThaiThanhToan
    phuong_thuc_thanh_toan?: string | null
    ma_giao_dich_ngan_hang?: string | null
    so_tien_da_nhan?: number | null
    thanh_toan_luc?: Date | string | null
    het_han_luc?: Date | string | null
    DatVe?: DatVeUncheckedCreateNestedManyWithoutHoaDonInput
    HoaDonCombo?: HoaDonComboUncheckedCreateNestedManyWithoutHoaDonInput
    GiuCho?: GiuChoUncheckedCreateNestedManyWithoutHoaDonInput
  }

  export type HoaDonCreateOrConnectWithoutLichChieuInput = {
    where: HoaDonWhereUniqueInput
    create: XOR<HoaDonCreateWithoutLichChieuInput, HoaDonUncheckedCreateWithoutLichChieuInput>
  }

  export type HoaDonCreateManyLichChieuInputEnvelope = {
    data: HoaDonCreateManyLichChieuInput | HoaDonCreateManyLichChieuInput[]
    skipDuplicates?: boolean
  }

  export type RapPhimCreateWithoutLichChieuInput = {
    ten_rap?: string | null
    Ghe?: GheCreateNestedManyWithoutRapPhimInput
    CumRap?: CumRapCreateNestedOneWithoutRapPhimInput
  }

  export type RapPhimUncheckedCreateWithoutLichChieuInput = {
    ma_rap?: number
    ten_rap?: string | null
    ma_cum_rap?: number | null
    Ghe?: GheUncheckedCreateNestedManyWithoutRapPhimInput
  }

  export type RapPhimCreateOrConnectWithoutLichChieuInput = {
    where: RapPhimWhereUniqueInput
    create: XOR<RapPhimCreateWithoutLichChieuInput, RapPhimUncheckedCreateWithoutLichChieuInput>
  }

  export type PhimCreateWithoutLichChieuInput = {
    ten_phim?: string | null
    trailer?: string | null
    hinh_anh?: string | null
    mo_ta?: string | null
    ngay_khoi_chieu?: Date | string | null
    danh_gia?: number | null
    hot?: boolean | null
    dang_chieu?: boolean | null
    sap_chieu?: boolean | null
    isDeleted?: boolean | null
    Banner?: BannerCreateNestedManyWithoutPhimInput
  }

  export type PhimUncheckedCreateWithoutLichChieuInput = {
    ma_phim?: number
    ten_phim?: string | null
    trailer?: string | null
    hinh_anh?: string | null
    mo_ta?: string | null
    ngay_khoi_chieu?: Date | string | null
    danh_gia?: number | null
    hot?: boolean | null
    dang_chieu?: boolean | null
    sap_chieu?: boolean | null
    isDeleted?: boolean | null
    Banner?: BannerUncheckedCreateNestedManyWithoutPhimInput
  }

  export type PhimCreateOrConnectWithoutLichChieuInput = {
    where: PhimWhereUniqueInput
    create: XOR<PhimCreateWithoutLichChieuInput, PhimUncheckedCreateWithoutLichChieuInput>
  }

  export type DatVeUpsertWithWhereUniqueWithoutLichChieuInput = {
    where: DatVeWhereUniqueInput
    update: XOR<DatVeUpdateWithoutLichChieuInput, DatVeUncheckedUpdateWithoutLichChieuInput>
    create: XOR<DatVeCreateWithoutLichChieuInput, DatVeUncheckedCreateWithoutLichChieuInput>
  }

  export type DatVeUpdateWithWhereUniqueWithoutLichChieuInput = {
    where: DatVeWhereUniqueInput
    data: XOR<DatVeUpdateWithoutLichChieuInput, DatVeUncheckedUpdateWithoutLichChieuInput>
  }

  export type DatVeUpdateManyWithWhereWithoutLichChieuInput = {
    where: DatVeScalarWhereInput
    data: XOR<DatVeUpdateManyMutationInput, DatVeUncheckedUpdateManyWithoutLichChieuInput>
  }

  export type GiuChoUpsertWithWhereUniqueWithoutLichChieuInput = {
    where: GiuChoWhereUniqueInput
    update: XOR<GiuChoUpdateWithoutLichChieuInput, GiuChoUncheckedUpdateWithoutLichChieuInput>
    create: XOR<GiuChoCreateWithoutLichChieuInput, GiuChoUncheckedCreateWithoutLichChieuInput>
  }

  export type GiuChoUpdateWithWhereUniqueWithoutLichChieuInput = {
    where: GiuChoWhereUniqueInput
    data: XOR<GiuChoUpdateWithoutLichChieuInput, GiuChoUncheckedUpdateWithoutLichChieuInput>
  }

  export type GiuChoUpdateManyWithWhereWithoutLichChieuInput = {
    where: GiuChoScalarWhereInput
    data: XOR<GiuChoUpdateManyMutationInput, GiuChoUncheckedUpdateManyWithoutLichChieuInput>
  }

  export type HoaDonUpsertWithWhereUniqueWithoutLichChieuInput = {
    where: HoaDonWhereUniqueInput
    update: XOR<HoaDonUpdateWithoutLichChieuInput, HoaDonUncheckedUpdateWithoutLichChieuInput>
    create: XOR<HoaDonCreateWithoutLichChieuInput, HoaDonUncheckedCreateWithoutLichChieuInput>
  }

  export type HoaDonUpdateWithWhereUniqueWithoutLichChieuInput = {
    where: HoaDonWhereUniqueInput
    data: XOR<HoaDonUpdateWithoutLichChieuInput, HoaDonUncheckedUpdateWithoutLichChieuInput>
  }

  export type HoaDonUpdateManyWithWhereWithoutLichChieuInput = {
    where: HoaDonScalarWhereInput
    data: XOR<HoaDonUpdateManyMutationInput, HoaDonUncheckedUpdateManyWithoutLichChieuInput>
  }

  export type HoaDonScalarWhereInput = {
    AND?: HoaDonScalarWhereInput | HoaDonScalarWhereInput[]
    OR?: HoaDonScalarWhereInput[]
    NOT?: HoaDonScalarWhereInput | HoaDonScalarWhereInput[]
    ma_hoa_don?: IntFilter<"HoaDon"> | number
    tai_khoan?: IntFilter<"HoaDon"> | number
    ma_lich_chieu?: IntFilter<"HoaDon"> | number
    tong_tien?: IntFilter<"HoaDon"> | number
    created_at?: DateTimeNullableFilter<"HoaDon"> | Date | string | null
    checked_in_at?: DateTimeNullableFilter<"HoaDon"> | Date | string | null
    trang_thai_thanh_toan?: EnumTrangThaiThanhToanFilter<"HoaDon"> | $Enums.TrangThaiThanhToan
    phuong_thuc_thanh_toan?: StringNullableFilter<"HoaDon"> | string | null
    ma_giao_dich_ngan_hang?: StringNullableFilter<"HoaDon"> | string | null
    so_tien_da_nhan?: IntNullableFilter<"HoaDon"> | number | null
    thanh_toan_luc?: DateTimeNullableFilter<"HoaDon"> | Date | string | null
    het_han_luc?: DateTimeNullableFilter<"HoaDon"> | Date | string | null
  }

  export type RapPhimUpsertWithoutLichChieuInput = {
    update: XOR<RapPhimUpdateWithoutLichChieuInput, RapPhimUncheckedUpdateWithoutLichChieuInput>
    create: XOR<RapPhimCreateWithoutLichChieuInput, RapPhimUncheckedCreateWithoutLichChieuInput>
    where?: RapPhimWhereInput
  }

  export type RapPhimUpdateToOneWithWhereWithoutLichChieuInput = {
    where?: RapPhimWhereInput
    data: XOR<RapPhimUpdateWithoutLichChieuInput, RapPhimUncheckedUpdateWithoutLichChieuInput>
  }

  export type RapPhimUpdateWithoutLichChieuInput = {
    ten_rap?: NullableStringFieldUpdateOperationsInput | string | null
    Ghe?: GheUpdateManyWithoutRapPhimNestedInput
    CumRap?: CumRapUpdateOneWithoutRapPhimNestedInput
  }

  export type RapPhimUncheckedUpdateWithoutLichChieuInput = {
    ma_rap?: IntFieldUpdateOperationsInput | number
    ten_rap?: NullableStringFieldUpdateOperationsInput | string | null
    ma_cum_rap?: NullableIntFieldUpdateOperationsInput | number | null
    Ghe?: GheUncheckedUpdateManyWithoutRapPhimNestedInput
  }

  export type PhimUpsertWithoutLichChieuInput = {
    update: XOR<PhimUpdateWithoutLichChieuInput, PhimUncheckedUpdateWithoutLichChieuInput>
    create: XOR<PhimCreateWithoutLichChieuInput, PhimUncheckedCreateWithoutLichChieuInput>
    where?: PhimWhereInput
  }

  export type PhimUpdateToOneWithWhereWithoutLichChieuInput = {
    where?: PhimWhereInput
    data: XOR<PhimUpdateWithoutLichChieuInput, PhimUncheckedUpdateWithoutLichChieuInput>
  }

  export type PhimUpdateWithoutLichChieuInput = {
    ten_phim?: NullableStringFieldUpdateOperationsInput | string | null
    trailer?: NullableStringFieldUpdateOperationsInput | string | null
    hinh_anh?: NullableStringFieldUpdateOperationsInput | string | null
    mo_ta?: NullableStringFieldUpdateOperationsInput | string | null
    ngay_khoi_chieu?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    danh_gia?: NullableIntFieldUpdateOperationsInput | number | null
    hot?: NullableBoolFieldUpdateOperationsInput | boolean | null
    dang_chieu?: NullableBoolFieldUpdateOperationsInput | boolean | null
    sap_chieu?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Banner?: BannerUpdateManyWithoutPhimNestedInput
  }

  export type PhimUncheckedUpdateWithoutLichChieuInput = {
    ma_phim?: IntFieldUpdateOperationsInput | number
    ten_phim?: NullableStringFieldUpdateOperationsInput | string | null
    trailer?: NullableStringFieldUpdateOperationsInput | string | null
    hinh_anh?: NullableStringFieldUpdateOperationsInput | string | null
    mo_ta?: NullableStringFieldUpdateOperationsInput | string | null
    ngay_khoi_chieu?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    danh_gia?: NullableIntFieldUpdateOperationsInput | number | null
    hot?: NullableBoolFieldUpdateOperationsInput | boolean | null
    dang_chieu?: NullableBoolFieldUpdateOperationsInput | boolean | null
    sap_chieu?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Banner?: BannerUncheckedUpdateManyWithoutPhimNestedInput
  }

  export type DatVeCreateWithoutNguoiDungInput = {
    gia_ve: number
    created_at?: Date | string | null
    LichChieu: LichChieuCreateNestedOneWithoutDatVeInput
    Ghe: GheCreateNestedOneWithoutDatVeInput
    HoaDon?: HoaDonCreateNestedOneWithoutDatVeInput
  }

  export type DatVeUncheckedCreateWithoutNguoiDungInput = {
    ma_lich_chieu: number
    ma_ghe: number
    gia_ve: number
    ma_hoa_don?: number | null
    created_at?: Date | string | null
  }

  export type DatVeCreateOrConnectWithoutNguoiDungInput = {
    where: DatVeWhereUniqueInput
    create: XOR<DatVeCreateWithoutNguoiDungInput, DatVeUncheckedCreateWithoutNguoiDungInput>
  }

  export type DatVeCreateManyNguoiDungInputEnvelope = {
    data: DatVeCreateManyNguoiDungInput | DatVeCreateManyNguoiDungInput[]
    skipDuplicates?: boolean
  }

  export type GiuChoCreateWithoutNguoiDungInput = {
    loai?: $Enums.LoaiGiuCho
    gia_ve?: number | null
    expire_at: Date | string
    created_at?: Date | string | null
    Ghe: GheCreateNestedOneWithoutGiuChoInput
    LichChieu: LichChieuCreateNestedOneWithoutGiuChoInput
    HoaDon?: HoaDonCreateNestedOneWithoutGiuChoInput
  }

  export type GiuChoUncheckedCreateWithoutNguoiDungInput = {
    ma_giu_cho?: number
    ma_lich_chieu: number
    ma_ghe: number
    loai?: $Enums.LoaiGiuCho
    ma_hoa_don?: number | null
    gia_ve?: number | null
    expire_at: Date | string
    created_at?: Date | string | null
  }

  export type GiuChoCreateOrConnectWithoutNguoiDungInput = {
    where: GiuChoWhereUniqueInput
    create: XOR<GiuChoCreateWithoutNguoiDungInput, GiuChoUncheckedCreateWithoutNguoiDungInput>
  }

  export type GiuChoCreateManyNguoiDungInputEnvelope = {
    data: GiuChoCreateManyNguoiDungInput | GiuChoCreateManyNguoiDungInput[]
    skipDuplicates?: boolean
  }

  export type HoaDonCreateWithoutNguoiDungInput = {
    tong_tien: number
    created_at?: Date | string | null
    checked_in_at?: Date | string | null
    trang_thai_thanh_toan?: $Enums.TrangThaiThanhToan
    phuong_thuc_thanh_toan?: string | null
    ma_giao_dich_ngan_hang?: string | null
    so_tien_da_nhan?: number | null
    thanh_toan_luc?: Date | string | null
    het_han_luc?: Date | string | null
    LichChieu: LichChieuCreateNestedOneWithoutHoaDonInput
    DatVe?: DatVeCreateNestedManyWithoutHoaDonInput
    HoaDonCombo?: HoaDonComboCreateNestedManyWithoutHoaDonInput
    GiuCho?: GiuChoCreateNestedManyWithoutHoaDonInput
  }

  export type HoaDonUncheckedCreateWithoutNguoiDungInput = {
    ma_hoa_don?: number
    ma_lich_chieu: number
    tong_tien: number
    created_at?: Date | string | null
    checked_in_at?: Date | string | null
    trang_thai_thanh_toan?: $Enums.TrangThaiThanhToan
    phuong_thuc_thanh_toan?: string | null
    ma_giao_dich_ngan_hang?: string | null
    so_tien_da_nhan?: number | null
    thanh_toan_luc?: Date | string | null
    het_han_luc?: Date | string | null
    DatVe?: DatVeUncheckedCreateNestedManyWithoutHoaDonInput
    HoaDonCombo?: HoaDonComboUncheckedCreateNestedManyWithoutHoaDonInput
    GiuCho?: GiuChoUncheckedCreateNestedManyWithoutHoaDonInput
  }

  export type HoaDonCreateOrConnectWithoutNguoiDungInput = {
    where: HoaDonWhereUniqueInput
    create: XOR<HoaDonCreateWithoutNguoiDungInput, HoaDonUncheckedCreateWithoutNguoiDungInput>
  }

  export type HoaDonCreateManyNguoiDungInputEnvelope = {
    data: HoaDonCreateManyNguoiDungInput | HoaDonCreateManyNguoiDungInput[]
    skipDuplicates?: boolean
  }

  export type RefreshTokenCreateWithoutNguoiDungInput = {
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type RefreshTokenUncheckedCreateWithoutNguoiDungInput = {
    id?: number
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type RefreshTokenCreateOrConnectWithoutNguoiDungInput = {
    where: RefreshTokenWhereUniqueInput
    create: XOR<RefreshTokenCreateWithoutNguoiDungInput, RefreshTokenUncheckedCreateWithoutNguoiDungInput>
  }

  export type RefreshTokenCreateManyNguoiDungInputEnvelope = {
    data: RefreshTokenCreateManyNguoiDungInput | RefreshTokenCreateManyNguoiDungInput[]
    skipDuplicates?: boolean
  }

  export type DatVeUpsertWithWhereUniqueWithoutNguoiDungInput = {
    where: DatVeWhereUniqueInput
    update: XOR<DatVeUpdateWithoutNguoiDungInput, DatVeUncheckedUpdateWithoutNguoiDungInput>
    create: XOR<DatVeCreateWithoutNguoiDungInput, DatVeUncheckedCreateWithoutNguoiDungInput>
  }

  export type DatVeUpdateWithWhereUniqueWithoutNguoiDungInput = {
    where: DatVeWhereUniqueInput
    data: XOR<DatVeUpdateWithoutNguoiDungInput, DatVeUncheckedUpdateWithoutNguoiDungInput>
  }

  export type DatVeUpdateManyWithWhereWithoutNguoiDungInput = {
    where: DatVeScalarWhereInput
    data: XOR<DatVeUpdateManyMutationInput, DatVeUncheckedUpdateManyWithoutNguoiDungInput>
  }

  export type GiuChoUpsertWithWhereUniqueWithoutNguoiDungInput = {
    where: GiuChoWhereUniqueInput
    update: XOR<GiuChoUpdateWithoutNguoiDungInput, GiuChoUncheckedUpdateWithoutNguoiDungInput>
    create: XOR<GiuChoCreateWithoutNguoiDungInput, GiuChoUncheckedCreateWithoutNguoiDungInput>
  }

  export type GiuChoUpdateWithWhereUniqueWithoutNguoiDungInput = {
    where: GiuChoWhereUniqueInput
    data: XOR<GiuChoUpdateWithoutNguoiDungInput, GiuChoUncheckedUpdateWithoutNguoiDungInput>
  }

  export type GiuChoUpdateManyWithWhereWithoutNguoiDungInput = {
    where: GiuChoScalarWhereInput
    data: XOR<GiuChoUpdateManyMutationInput, GiuChoUncheckedUpdateManyWithoutNguoiDungInput>
  }

  export type HoaDonUpsertWithWhereUniqueWithoutNguoiDungInput = {
    where: HoaDonWhereUniqueInput
    update: XOR<HoaDonUpdateWithoutNguoiDungInput, HoaDonUncheckedUpdateWithoutNguoiDungInput>
    create: XOR<HoaDonCreateWithoutNguoiDungInput, HoaDonUncheckedCreateWithoutNguoiDungInput>
  }

  export type HoaDonUpdateWithWhereUniqueWithoutNguoiDungInput = {
    where: HoaDonWhereUniqueInput
    data: XOR<HoaDonUpdateWithoutNguoiDungInput, HoaDonUncheckedUpdateWithoutNguoiDungInput>
  }

  export type HoaDonUpdateManyWithWhereWithoutNguoiDungInput = {
    where: HoaDonScalarWhereInput
    data: XOR<HoaDonUpdateManyMutationInput, HoaDonUncheckedUpdateManyWithoutNguoiDungInput>
  }

  export type RefreshTokenUpsertWithWhereUniqueWithoutNguoiDungInput = {
    where: RefreshTokenWhereUniqueInput
    update: XOR<RefreshTokenUpdateWithoutNguoiDungInput, RefreshTokenUncheckedUpdateWithoutNguoiDungInput>
    create: XOR<RefreshTokenCreateWithoutNguoiDungInput, RefreshTokenUncheckedCreateWithoutNguoiDungInput>
  }

  export type RefreshTokenUpdateWithWhereUniqueWithoutNguoiDungInput = {
    where: RefreshTokenWhereUniqueInput
    data: XOR<RefreshTokenUpdateWithoutNguoiDungInput, RefreshTokenUncheckedUpdateWithoutNguoiDungInput>
  }

  export type RefreshTokenUpdateManyWithWhereWithoutNguoiDungInput = {
    where: RefreshTokenScalarWhereInput
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyWithoutNguoiDungInput>
  }

  export type RefreshTokenScalarWhereInput = {
    AND?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
    OR?: RefreshTokenScalarWhereInput[]
    NOT?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
    id?: IntFilter<"RefreshToken"> | number
    token?: StringFilter<"RefreshToken"> | string
    tai_khoan?: IntFilter<"RefreshToken"> | number
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
  }

  export type NguoiDungCreateWithoutRefreshTokenInput = {
    ho_ten?: string | null
    email?: string | null
    so_dt?: string | null
    mat_khau?: string | null
    loai_nguoi_dung?: string | null
    isDeleted?: boolean | null
    DatVe?: DatVeCreateNestedManyWithoutNguoiDungInput
    GiuCho?: GiuChoCreateNestedManyWithoutNguoiDungInput
    HoaDon?: HoaDonCreateNestedManyWithoutNguoiDungInput
  }

  export type NguoiDungUncheckedCreateWithoutRefreshTokenInput = {
    tai_khoan?: number
    ho_ten?: string | null
    email?: string | null
    so_dt?: string | null
    mat_khau?: string | null
    loai_nguoi_dung?: string | null
    isDeleted?: boolean | null
    DatVe?: DatVeUncheckedCreateNestedManyWithoutNguoiDungInput
    GiuCho?: GiuChoUncheckedCreateNestedManyWithoutNguoiDungInput
    HoaDon?: HoaDonUncheckedCreateNestedManyWithoutNguoiDungInput
  }

  export type NguoiDungCreateOrConnectWithoutRefreshTokenInput = {
    where: NguoiDungWhereUniqueInput
    create: XOR<NguoiDungCreateWithoutRefreshTokenInput, NguoiDungUncheckedCreateWithoutRefreshTokenInput>
  }

  export type NguoiDungUpsertWithoutRefreshTokenInput = {
    update: XOR<NguoiDungUpdateWithoutRefreshTokenInput, NguoiDungUncheckedUpdateWithoutRefreshTokenInput>
    create: XOR<NguoiDungCreateWithoutRefreshTokenInput, NguoiDungUncheckedCreateWithoutRefreshTokenInput>
    where?: NguoiDungWhereInput
  }

  export type NguoiDungUpdateToOneWithWhereWithoutRefreshTokenInput = {
    where?: NguoiDungWhereInput
    data: XOR<NguoiDungUpdateWithoutRefreshTokenInput, NguoiDungUncheckedUpdateWithoutRefreshTokenInput>
  }

  export type NguoiDungUpdateWithoutRefreshTokenInput = {
    ho_ten?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    so_dt?: NullableStringFieldUpdateOperationsInput | string | null
    mat_khau?: NullableStringFieldUpdateOperationsInput | string | null
    loai_nguoi_dung?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    DatVe?: DatVeUpdateManyWithoutNguoiDungNestedInput
    GiuCho?: GiuChoUpdateManyWithoutNguoiDungNestedInput
    HoaDon?: HoaDonUpdateManyWithoutNguoiDungNestedInput
  }

  export type NguoiDungUncheckedUpdateWithoutRefreshTokenInput = {
    tai_khoan?: IntFieldUpdateOperationsInput | number
    ho_ten?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    so_dt?: NullableStringFieldUpdateOperationsInput | string | null
    mat_khau?: NullableStringFieldUpdateOperationsInput | string | null
    loai_nguoi_dung?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    DatVe?: DatVeUncheckedUpdateManyWithoutNguoiDungNestedInput
    GiuCho?: GiuChoUncheckedUpdateManyWithoutNguoiDungNestedInput
    HoaDon?: HoaDonUncheckedUpdateManyWithoutNguoiDungNestedInput
  }

  export type BannerCreateWithoutPhimInput = {
    hinh_anh?: string | null
  }

  export type BannerUncheckedCreateWithoutPhimInput = {
    ma_banner?: number
    hinh_anh?: string | null
  }

  export type BannerCreateOrConnectWithoutPhimInput = {
    where: BannerWhereUniqueInput
    create: XOR<BannerCreateWithoutPhimInput, BannerUncheckedCreateWithoutPhimInput>
  }

  export type BannerCreateManyPhimInputEnvelope = {
    data: BannerCreateManyPhimInput | BannerCreateManyPhimInput[]
    skipDuplicates?: boolean
  }

  export type LichChieuCreateWithoutPhimInput = {
    ngay_gio_chieu?: Date | string | null
    gia_ve?: number | null
    DatVe?: DatVeCreateNestedManyWithoutLichChieuInput
    GiuCho?: GiuChoCreateNestedManyWithoutLichChieuInput
    HoaDon?: HoaDonCreateNestedManyWithoutLichChieuInput
    RapPhim?: RapPhimCreateNestedOneWithoutLichChieuInput
  }

  export type LichChieuUncheckedCreateWithoutPhimInput = {
    ma_lich_chieu?: number
    ma_rap?: number | null
    ngay_gio_chieu?: Date | string | null
    gia_ve?: number | null
    DatVe?: DatVeUncheckedCreateNestedManyWithoutLichChieuInput
    GiuCho?: GiuChoUncheckedCreateNestedManyWithoutLichChieuInput
    HoaDon?: HoaDonUncheckedCreateNestedManyWithoutLichChieuInput
  }

  export type LichChieuCreateOrConnectWithoutPhimInput = {
    where: LichChieuWhereUniqueInput
    create: XOR<LichChieuCreateWithoutPhimInput, LichChieuUncheckedCreateWithoutPhimInput>
  }

  export type LichChieuCreateManyPhimInputEnvelope = {
    data: LichChieuCreateManyPhimInput | LichChieuCreateManyPhimInput[]
    skipDuplicates?: boolean
  }

  export type BannerUpsertWithWhereUniqueWithoutPhimInput = {
    where: BannerWhereUniqueInput
    update: XOR<BannerUpdateWithoutPhimInput, BannerUncheckedUpdateWithoutPhimInput>
    create: XOR<BannerCreateWithoutPhimInput, BannerUncheckedCreateWithoutPhimInput>
  }

  export type BannerUpdateWithWhereUniqueWithoutPhimInput = {
    where: BannerWhereUniqueInput
    data: XOR<BannerUpdateWithoutPhimInput, BannerUncheckedUpdateWithoutPhimInput>
  }

  export type BannerUpdateManyWithWhereWithoutPhimInput = {
    where: BannerScalarWhereInput
    data: XOR<BannerUpdateManyMutationInput, BannerUncheckedUpdateManyWithoutPhimInput>
  }

  export type BannerScalarWhereInput = {
    AND?: BannerScalarWhereInput | BannerScalarWhereInput[]
    OR?: BannerScalarWhereInput[]
    NOT?: BannerScalarWhereInput | BannerScalarWhereInput[]
    ma_banner?: IntFilter<"Banner"> | number
    ma_phim?: IntNullableFilter<"Banner"> | number | null
    hinh_anh?: StringNullableFilter<"Banner"> | string | null
  }

  export type LichChieuUpsertWithWhereUniqueWithoutPhimInput = {
    where: LichChieuWhereUniqueInput
    update: XOR<LichChieuUpdateWithoutPhimInput, LichChieuUncheckedUpdateWithoutPhimInput>
    create: XOR<LichChieuCreateWithoutPhimInput, LichChieuUncheckedCreateWithoutPhimInput>
  }

  export type LichChieuUpdateWithWhereUniqueWithoutPhimInput = {
    where: LichChieuWhereUniqueInput
    data: XOR<LichChieuUpdateWithoutPhimInput, LichChieuUncheckedUpdateWithoutPhimInput>
  }

  export type LichChieuUpdateManyWithWhereWithoutPhimInput = {
    where: LichChieuScalarWhereInput
    data: XOR<LichChieuUpdateManyMutationInput, LichChieuUncheckedUpdateManyWithoutPhimInput>
  }

  export type LichChieuScalarWhereInput = {
    AND?: LichChieuScalarWhereInput | LichChieuScalarWhereInput[]
    OR?: LichChieuScalarWhereInput[]
    NOT?: LichChieuScalarWhereInput | LichChieuScalarWhereInput[]
    ma_lich_chieu?: IntFilter<"LichChieu"> | number
    ma_rap?: IntNullableFilter<"LichChieu"> | number | null
    ma_phim?: IntNullableFilter<"LichChieu"> | number | null
    ngay_gio_chieu?: DateTimeNullableFilter<"LichChieu"> | Date | string | null
    gia_ve?: IntNullableFilter<"LichChieu"> | number | null
  }

  export type GheCreateWithoutRapPhimInput = {
    ten_ghe?: string | null
    loai_ghe?: string | null
    DatVe?: DatVeCreateNestedManyWithoutGheInput
    GiuCho?: GiuChoCreateNestedManyWithoutGheInput
  }

  export type GheUncheckedCreateWithoutRapPhimInput = {
    ma_ghe?: number
    ten_ghe?: string | null
    loai_ghe?: string | null
    DatVe?: DatVeUncheckedCreateNestedManyWithoutGheInput
    GiuCho?: GiuChoUncheckedCreateNestedManyWithoutGheInput
  }

  export type GheCreateOrConnectWithoutRapPhimInput = {
    where: GheWhereUniqueInput
    create: XOR<GheCreateWithoutRapPhimInput, GheUncheckedCreateWithoutRapPhimInput>
  }

  export type GheCreateManyRapPhimInputEnvelope = {
    data: GheCreateManyRapPhimInput | GheCreateManyRapPhimInput[]
    skipDuplicates?: boolean
  }

  export type LichChieuCreateWithoutRapPhimInput = {
    ngay_gio_chieu?: Date | string | null
    gia_ve?: number | null
    DatVe?: DatVeCreateNestedManyWithoutLichChieuInput
    GiuCho?: GiuChoCreateNestedManyWithoutLichChieuInput
    HoaDon?: HoaDonCreateNestedManyWithoutLichChieuInput
    Phim?: PhimCreateNestedOneWithoutLichChieuInput
  }

  export type LichChieuUncheckedCreateWithoutRapPhimInput = {
    ma_lich_chieu?: number
    ma_phim?: number | null
    ngay_gio_chieu?: Date | string | null
    gia_ve?: number | null
    DatVe?: DatVeUncheckedCreateNestedManyWithoutLichChieuInput
    GiuCho?: GiuChoUncheckedCreateNestedManyWithoutLichChieuInput
    HoaDon?: HoaDonUncheckedCreateNestedManyWithoutLichChieuInput
  }

  export type LichChieuCreateOrConnectWithoutRapPhimInput = {
    where: LichChieuWhereUniqueInput
    create: XOR<LichChieuCreateWithoutRapPhimInput, LichChieuUncheckedCreateWithoutRapPhimInput>
  }

  export type LichChieuCreateManyRapPhimInputEnvelope = {
    data: LichChieuCreateManyRapPhimInput | LichChieuCreateManyRapPhimInput[]
    skipDuplicates?: boolean
  }

  export type CumRapCreateWithoutRapPhimInput = {
    ten_cum_rap?: string | null
    dia_chi?: string | null
    khu_vuc?: string | null
    HeThongRap?: HeThongRapCreateNestedOneWithoutCumRapInput
  }

  export type CumRapUncheckedCreateWithoutRapPhimInput = {
    ma_cum_rap?: number
    ten_cum_rap?: string | null
    dia_chi?: string | null
    ma_he_thong_rap?: number | null
    khu_vuc?: string | null
  }

  export type CumRapCreateOrConnectWithoutRapPhimInput = {
    where: CumRapWhereUniqueInput
    create: XOR<CumRapCreateWithoutRapPhimInput, CumRapUncheckedCreateWithoutRapPhimInput>
  }

  export type GheUpsertWithWhereUniqueWithoutRapPhimInput = {
    where: GheWhereUniqueInput
    update: XOR<GheUpdateWithoutRapPhimInput, GheUncheckedUpdateWithoutRapPhimInput>
    create: XOR<GheCreateWithoutRapPhimInput, GheUncheckedCreateWithoutRapPhimInput>
  }

  export type GheUpdateWithWhereUniqueWithoutRapPhimInput = {
    where: GheWhereUniqueInput
    data: XOR<GheUpdateWithoutRapPhimInput, GheUncheckedUpdateWithoutRapPhimInput>
  }

  export type GheUpdateManyWithWhereWithoutRapPhimInput = {
    where: GheScalarWhereInput
    data: XOR<GheUpdateManyMutationInput, GheUncheckedUpdateManyWithoutRapPhimInput>
  }

  export type GheScalarWhereInput = {
    AND?: GheScalarWhereInput | GheScalarWhereInput[]
    OR?: GheScalarWhereInput[]
    NOT?: GheScalarWhereInput | GheScalarWhereInput[]
    ma_ghe?: IntFilter<"Ghe"> | number
    ten_ghe?: StringNullableFilter<"Ghe"> | string | null
    loai_ghe?: StringNullableFilter<"Ghe"> | string | null
    ma_rap?: IntNullableFilter<"Ghe"> | number | null
  }

  export type LichChieuUpsertWithWhereUniqueWithoutRapPhimInput = {
    where: LichChieuWhereUniqueInput
    update: XOR<LichChieuUpdateWithoutRapPhimInput, LichChieuUncheckedUpdateWithoutRapPhimInput>
    create: XOR<LichChieuCreateWithoutRapPhimInput, LichChieuUncheckedCreateWithoutRapPhimInput>
  }

  export type LichChieuUpdateWithWhereUniqueWithoutRapPhimInput = {
    where: LichChieuWhereUniqueInput
    data: XOR<LichChieuUpdateWithoutRapPhimInput, LichChieuUncheckedUpdateWithoutRapPhimInput>
  }

  export type LichChieuUpdateManyWithWhereWithoutRapPhimInput = {
    where: LichChieuScalarWhereInput
    data: XOR<LichChieuUpdateManyMutationInput, LichChieuUncheckedUpdateManyWithoutRapPhimInput>
  }

  export type CumRapUpsertWithoutRapPhimInput = {
    update: XOR<CumRapUpdateWithoutRapPhimInput, CumRapUncheckedUpdateWithoutRapPhimInput>
    create: XOR<CumRapCreateWithoutRapPhimInput, CumRapUncheckedCreateWithoutRapPhimInput>
    where?: CumRapWhereInput
  }

  export type CumRapUpdateToOneWithWhereWithoutRapPhimInput = {
    where?: CumRapWhereInput
    data: XOR<CumRapUpdateWithoutRapPhimInput, CumRapUncheckedUpdateWithoutRapPhimInput>
  }

  export type CumRapUpdateWithoutRapPhimInput = {
    ten_cum_rap?: NullableStringFieldUpdateOperationsInput | string | null
    dia_chi?: NullableStringFieldUpdateOperationsInput | string | null
    khu_vuc?: NullableStringFieldUpdateOperationsInput | string | null
    HeThongRap?: HeThongRapUpdateOneWithoutCumRapNestedInput
  }

  export type CumRapUncheckedUpdateWithoutRapPhimInput = {
    ma_cum_rap?: IntFieldUpdateOperationsInput | number
    ten_cum_rap?: NullableStringFieldUpdateOperationsInput | string | null
    dia_chi?: NullableStringFieldUpdateOperationsInput | string | null
    ma_he_thong_rap?: NullableIntFieldUpdateOperationsInput | number | null
    khu_vuc?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GheCreateWithoutGiuChoInput = {
    ten_ghe?: string | null
    loai_ghe?: string | null
    DatVe?: DatVeCreateNestedManyWithoutGheInput
    RapPhim?: RapPhimCreateNestedOneWithoutGheInput
  }

  export type GheUncheckedCreateWithoutGiuChoInput = {
    ma_ghe?: number
    ten_ghe?: string | null
    loai_ghe?: string | null
    ma_rap?: number | null
    DatVe?: DatVeUncheckedCreateNestedManyWithoutGheInput
  }

  export type GheCreateOrConnectWithoutGiuChoInput = {
    where: GheWhereUniqueInput
    create: XOR<GheCreateWithoutGiuChoInput, GheUncheckedCreateWithoutGiuChoInput>
  }

  export type LichChieuCreateWithoutGiuChoInput = {
    ngay_gio_chieu?: Date | string | null
    gia_ve?: number | null
    DatVe?: DatVeCreateNestedManyWithoutLichChieuInput
    HoaDon?: HoaDonCreateNestedManyWithoutLichChieuInput
    RapPhim?: RapPhimCreateNestedOneWithoutLichChieuInput
    Phim?: PhimCreateNestedOneWithoutLichChieuInput
  }

  export type LichChieuUncheckedCreateWithoutGiuChoInput = {
    ma_lich_chieu?: number
    ma_rap?: number | null
    ma_phim?: number | null
    ngay_gio_chieu?: Date | string | null
    gia_ve?: number | null
    DatVe?: DatVeUncheckedCreateNestedManyWithoutLichChieuInput
    HoaDon?: HoaDonUncheckedCreateNestedManyWithoutLichChieuInput
  }

  export type LichChieuCreateOrConnectWithoutGiuChoInput = {
    where: LichChieuWhereUniqueInput
    create: XOR<LichChieuCreateWithoutGiuChoInput, LichChieuUncheckedCreateWithoutGiuChoInput>
  }

  export type NguoiDungCreateWithoutGiuChoInput = {
    ho_ten?: string | null
    email?: string | null
    so_dt?: string | null
    mat_khau?: string | null
    loai_nguoi_dung?: string | null
    isDeleted?: boolean | null
    DatVe?: DatVeCreateNestedManyWithoutNguoiDungInput
    HoaDon?: HoaDonCreateNestedManyWithoutNguoiDungInput
    RefreshToken?: RefreshTokenCreateNestedManyWithoutNguoiDungInput
  }

  export type NguoiDungUncheckedCreateWithoutGiuChoInput = {
    tai_khoan?: number
    ho_ten?: string | null
    email?: string | null
    so_dt?: string | null
    mat_khau?: string | null
    loai_nguoi_dung?: string | null
    isDeleted?: boolean | null
    DatVe?: DatVeUncheckedCreateNestedManyWithoutNguoiDungInput
    HoaDon?: HoaDonUncheckedCreateNestedManyWithoutNguoiDungInput
    RefreshToken?: RefreshTokenUncheckedCreateNestedManyWithoutNguoiDungInput
  }

  export type NguoiDungCreateOrConnectWithoutGiuChoInput = {
    where: NguoiDungWhereUniqueInput
    create: XOR<NguoiDungCreateWithoutGiuChoInput, NguoiDungUncheckedCreateWithoutGiuChoInput>
  }

  export type HoaDonCreateWithoutGiuChoInput = {
    tong_tien: number
    created_at?: Date | string | null
    checked_in_at?: Date | string | null
    trang_thai_thanh_toan?: $Enums.TrangThaiThanhToan
    phuong_thuc_thanh_toan?: string | null
    ma_giao_dich_ngan_hang?: string | null
    so_tien_da_nhan?: number | null
    thanh_toan_luc?: Date | string | null
    het_han_luc?: Date | string | null
    NguoiDung: NguoiDungCreateNestedOneWithoutHoaDonInput
    LichChieu: LichChieuCreateNestedOneWithoutHoaDonInput
    DatVe?: DatVeCreateNestedManyWithoutHoaDonInput
    HoaDonCombo?: HoaDonComboCreateNestedManyWithoutHoaDonInput
  }

  export type HoaDonUncheckedCreateWithoutGiuChoInput = {
    ma_hoa_don?: number
    tai_khoan: number
    ma_lich_chieu: number
    tong_tien: number
    created_at?: Date | string | null
    checked_in_at?: Date | string | null
    trang_thai_thanh_toan?: $Enums.TrangThaiThanhToan
    phuong_thuc_thanh_toan?: string | null
    ma_giao_dich_ngan_hang?: string | null
    so_tien_da_nhan?: number | null
    thanh_toan_luc?: Date | string | null
    het_han_luc?: Date | string | null
    DatVe?: DatVeUncheckedCreateNestedManyWithoutHoaDonInput
    HoaDonCombo?: HoaDonComboUncheckedCreateNestedManyWithoutHoaDonInput
  }

  export type HoaDonCreateOrConnectWithoutGiuChoInput = {
    where: HoaDonWhereUniqueInput
    create: XOR<HoaDonCreateWithoutGiuChoInput, HoaDonUncheckedCreateWithoutGiuChoInput>
  }

  export type GheUpsertWithoutGiuChoInput = {
    update: XOR<GheUpdateWithoutGiuChoInput, GheUncheckedUpdateWithoutGiuChoInput>
    create: XOR<GheCreateWithoutGiuChoInput, GheUncheckedCreateWithoutGiuChoInput>
    where?: GheWhereInput
  }

  export type GheUpdateToOneWithWhereWithoutGiuChoInput = {
    where?: GheWhereInput
    data: XOR<GheUpdateWithoutGiuChoInput, GheUncheckedUpdateWithoutGiuChoInput>
  }

  export type GheUpdateWithoutGiuChoInput = {
    ten_ghe?: NullableStringFieldUpdateOperationsInput | string | null
    loai_ghe?: NullableStringFieldUpdateOperationsInput | string | null
    DatVe?: DatVeUpdateManyWithoutGheNestedInput
    RapPhim?: RapPhimUpdateOneWithoutGheNestedInput
  }

  export type GheUncheckedUpdateWithoutGiuChoInput = {
    ma_ghe?: IntFieldUpdateOperationsInput | number
    ten_ghe?: NullableStringFieldUpdateOperationsInput | string | null
    loai_ghe?: NullableStringFieldUpdateOperationsInput | string | null
    ma_rap?: NullableIntFieldUpdateOperationsInput | number | null
    DatVe?: DatVeUncheckedUpdateManyWithoutGheNestedInput
  }

  export type LichChieuUpsertWithoutGiuChoInput = {
    update: XOR<LichChieuUpdateWithoutGiuChoInput, LichChieuUncheckedUpdateWithoutGiuChoInput>
    create: XOR<LichChieuCreateWithoutGiuChoInput, LichChieuUncheckedCreateWithoutGiuChoInput>
    where?: LichChieuWhereInput
  }

  export type LichChieuUpdateToOneWithWhereWithoutGiuChoInput = {
    where?: LichChieuWhereInput
    data: XOR<LichChieuUpdateWithoutGiuChoInput, LichChieuUncheckedUpdateWithoutGiuChoInput>
  }

  export type LichChieuUpdateWithoutGiuChoInput = {
    ngay_gio_chieu?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gia_ve?: NullableIntFieldUpdateOperationsInput | number | null
    DatVe?: DatVeUpdateManyWithoutLichChieuNestedInput
    HoaDon?: HoaDonUpdateManyWithoutLichChieuNestedInput
    RapPhim?: RapPhimUpdateOneWithoutLichChieuNestedInput
    Phim?: PhimUpdateOneWithoutLichChieuNestedInput
  }

  export type LichChieuUncheckedUpdateWithoutGiuChoInput = {
    ma_lich_chieu?: IntFieldUpdateOperationsInput | number
    ma_rap?: NullableIntFieldUpdateOperationsInput | number | null
    ma_phim?: NullableIntFieldUpdateOperationsInput | number | null
    ngay_gio_chieu?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gia_ve?: NullableIntFieldUpdateOperationsInput | number | null
    DatVe?: DatVeUncheckedUpdateManyWithoutLichChieuNestedInput
    HoaDon?: HoaDonUncheckedUpdateManyWithoutLichChieuNestedInput
  }

  export type NguoiDungUpsertWithoutGiuChoInput = {
    update: XOR<NguoiDungUpdateWithoutGiuChoInput, NguoiDungUncheckedUpdateWithoutGiuChoInput>
    create: XOR<NguoiDungCreateWithoutGiuChoInput, NguoiDungUncheckedCreateWithoutGiuChoInput>
    where?: NguoiDungWhereInput
  }

  export type NguoiDungUpdateToOneWithWhereWithoutGiuChoInput = {
    where?: NguoiDungWhereInput
    data: XOR<NguoiDungUpdateWithoutGiuChoInput, NguoiDungUncheckedUpdateWithoutGiuChoInput>
  }

  export type NguoiDungUpdateWithoutGiuChoInput = {
    ho_ten?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    so_dt?: NullableStringFieldUpdateOperationsInput | string | null
    mat_khau?: NullableStringFieldUpdateOperationsInput | string | null
    loai_nguoi_dung?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    DatVe?: DatVeUpdateManyWithoutNguoiDungNestedInput
    HoaDon?: HoaDonUpdateManyWithoutNguoiDungNestedInput
    RefreshToken?: RefreshTokenUpdateManyWithoutNguoiDungNestedInput
  }

  export type NguoiDungUncheckedUpdateWithoutGiuChoInput = {
    tai_khoan?: IntFieldUpdateOperationsInput | number
    ho_ten?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    so_dt?: NullableStringFieldUpdateOperationsInput | string | null
    mat_khau?: NullableStringFieldUpdateOperationsInput | string | null
    loai_nguoi_dung?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    DatVe?: DatVeUncheckedUpdateManyWithoutNguoiDungNestedInput
    HoaDon?: HoaDonUncheckedUpdateManyWithoutNguoiDungNestedInput
    RefreshToken?: RefreshTokenUncheckedUpdateManyWithoutNguoiDungNestedInput
  }

  export type HoaDonUpsertWithoutGiuChoInput = {
    update: XOR<HoaDonUpdateWithoutGiuChoInput, HoaDonUncheckedUpdateWithoutGiuChoInput>
    create: XOR<HoaDonCreateWithoutGiuChoInput, HoaDonUncheckedCreateWithoutGiuChoInput>
    where?: HoaDonWhereInput
  }

  export type HoaDonUpdateToOneWithWhereWithoutGiuChoInput = {
    where?: HoaDonWhereInput
    data: XOR<HoaDonUpdateWithoutGiuChoInput, HoaDonUncheckedUpdateWithoutGiuChoInput>
  }

  export type HoaDonUpdateWithoutGiuChoInput = {
    tong_tien?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checked_in_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trang_thai_thanh_toan?: EnumTrangThaiThanhToanFieldUpdateOperationsInput | $Enums.TrangThaiThanhToan
    phuong_thuc_thanh_toan?: NullableStringFieldUpdateOperationsInput | string | null
    ma_giao_dich_ngan_hang?: NullableStringFieldUpdateOperationsInput | string | null
    so_tien_da_nhan?: NullableIntFieldUpdateOperationsInput | number | null
    thanh_toan_luc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    het_han_luc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    NguoiDung?: NguoiDungUpdateOneRequiredWithoutHoaDonNestedInput
    LichChieu?: LichChieuUpdateOneRequiredWithoutHoaDonNestedInput
    DatVe?: DatVeUpdateManyWithoutHoaDonNestedInput
    HoaDonCombo?: HoaDonComboUpdateManyWithoutHoaDonNestedInput
  }

  export type HoaDonUncheckedUpdateWithoutGiuChoInput = {
    ma_hoa_don?: IntFieldUpdateOperationsInput | number
    tai_khoan?: IntFieldUpdateOperationsInput | number
    ma_lich_chieu?: IntFieldUpdateOperationsInput | number
    tong_tien?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checked_in_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trang_thai_thanh_toan?: EnumTrangThaiThanhToanFieldUpdateOperationsInput | $Enums.TrangThaiThanhToan
    phuong_thuc_thanh_toan?: NullableStringFieldUpdateOperationsInput | string | null
    ma_giao_dich_ngan_hang?: NullableStringFieldUpdateOperationsInput | string | null
    so_tien_da_nhan?: NullableIntFieldUpdateOperationsInput | number | null
    thanh_toan_luc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    het_han_luc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DatVe?: DatVeUncheckedUpdateManyWithoutHoaDonNestedInput
    HoaDonCombo?: HoaDonComboUncheckedUpdateManyWithoutHoaDonNestedInput
  }

  export type NguoiDungCreateWithoutHoaDonInput = {
    ho_ten?: string | null
    email?: string | null
    so_dt?: string | null
    mat_khau?: string | null
    loai_nguoi_dung?: string | null
    isDeleted?: boolean | null
    DatVe?: DatVeCreateNestedManyWithoutNguoiDungInput
    GiuCho?: GiuChoCreateNestedManyWithoutNguoiDungInput
    RefreshToken?: RefreshTokenCreateNestedManyWithoutNguoiDungInput
  }

  export type NguoiDungUncheckedCreateWithoutHoaDonInput = {
    tai_khoan?: number
    ho_ten?: string | null
    email?: string | null
    so_dt?: string | null
    mat_khau?: string | null
    loai_nguoi_dung?: string | null
    isDeleted?: boolean | null
    DatVe?: DatVeUncheckedCreateNestedManyWithoutNguoiDungInput
    GiuCho?: GiuChoUncheckedCreateNestedManyWithoutNguoiDungInput
    RefreshToken?: RefreshTokenUncheckedCreateNestedManyWithoutNguoiDungInput
  }

  export type NguoiDungCreateOrConnectWithoutHoaDonInput = {
    where: NguoiDungWhereUniqueInput
    create: XOR<NguoiDungCreateWithoutHoaDonInput, NguoiDungUncheckedCreateWithoutHoaDonInput>
  }

  export type LichChieuCreateWithoutHoaDonInput = {
    ngay_gio_chieu?: Date | string | null
    gia_ve?: number | null
    DatVe?: DatVeCreateNestedManyWithoutLichChieuInput
    GiuCho?: GiuChoCreateNestedManyWithoutLichChieuInput
    RapPhim?: RapPhimCreateNestedOneWithoutLichChieuInput
    Phim?: PhimCreateNestedOneWithoutLichChieuInput
  }

  export type LichChieuUncheckedCreateWithoutHoaDonInput = {
    ma_lich_chieu?: number
    ma_rap?: number | null
    ma_phim?: number | null
    ngay_gio_chieu?: Date | string | null
    gia_ve?: number | null
    DatVe?: DatVeUncheckedCreateNestedManyWithoutLichChieuInput
    GiuCho?: GiuChoUncheckedCreateNestedManyWithoutLichChieuInput
  }

  export type LichChieuCreateOrConnectWithoutHoaDonInput = {
    where: LichChieuWhereUniqueInput
    create: XOR<LichChieuCreateWithoutHoaDonInput, LichChieuUncheckedCreateWithoutHoaDonInput>
  }

  export type DatVeCreateWithoutHoaDonInput = {
    gia_ve: number
    created_at?: Date | string | null
    NguoiDung: NguoiDungCreateNestedOneWithoutDatVeInput
    LichChieu: LichChieuCreateNestedOneWithoutDatVeInput
    Ghe: GheCreateNestedOneWithoutDatVeInput
  }

  export type DatVeUncheckedCreateWithoutHoaDonInput = {
    tai_khoan: number
    ma_lich_chieu: number
    ma_ghe: number
    gia_ve: number
    created_at?: Date | string | null
  }

  export type DatVeCreateOrConnectWithoutHoaDonInput = {
    where: DatVeWhereUniqueInput
    create: XOR<DatVeCreateWithoutHoaDonInput, DatVeUncheckedCreateWithoutHoaDonInput>
  }

  export type DatVeCreateManyHoaDonInputEnvelope = {
    data: DatVeCreateManyHoaDonInput | DatVeCreateManyHoaDonInput[]
    skipDuplicates?: boolean
  }

  export type HoaDonComboCreateWithoutHoaDonInput = {
    so_luong: number
    don_gia: number
    Combo: ComboCreateNestedOneWithoutHoaDonComboInput
  }

  export type HoaDonComboUncheckedCreateWithoutHoaDonInput = {
    ma_combo: number
    so_luong: number
    don_gia: number
  }

  export type HoaDonComboCreateOrConnectWithoutHoaDonInput = {
    where: HoaDonComboWhereUniqueInput
    create: XOR<HoaDonComboCreateWithoutHoaDonInput, HoaDonComboUncheckedCreateWithoutHoaDonInput>
  }

  export type HoaDonComboCreateManyHoaDonInputEnvelope = {
    data: HoaDonComboCreateManyHoaDonInput | HoaDonComboCreateManyHoaDonInput[]
    skipDuplicates?: boolean
  }

  export type GiuChoCreateWithoutHoaDonInput = {
    loai?: $Enums.LoaiGiuCho
    gia_ve?: number | null
    expire_at: Date | string
    created_at?: Date | string | null
    Ghe: GheCreateNestedOneWithoutGiuChoInput
    LichChieu: LichChieuCreateNestedOneWithoutGiuChoInput
    NguoiDung: NguoiDungCreateNestedOneWithoutGiuChoInput
  }

  export type GiuChoUncheckedCreateWithoutHoaDonInput = {
    ma_giu_cho?: number
    tai_khoan: number
    ma_lich_chieu: number
    ma_ghe: number
    loai?: $Enums.LoaiGiuCho
    gia_ve?: number | null
    expire_at: Date | string
    created_at?: Date | string | null
  }

  export type GiuChoCreateOrConnectWithoutHoaDonInput = {
    where: GiuChoWhereUniqueInput
    create: XOR<GiuChoCreateWithoutHoaDonInput, GiuChoUncheckedCreateWithoutHoaDonInput>
  }

  export type GiuChoCreateManyHoaDonInputEnvelope = {
    data: GiuChoCreateManyHoaDonInput | GiuChoCreateManyHoaDonInput[]
    skipDuplicates?: boolean
  }

  export type NguoiDungUpsertWithoutHoaDonInput = {
    update: XOR<NguoiDungUpdateWithoutHoaDonInput, NguoiDungUncheckedUpdateWithoutHoaDonInput>
    create: XOR<NguoiDungCreateWithoutHoaDonInput, NguoiDungUncheckedCreateWithoutHoaDonInput>
    where?: NguoiDungWhereInput
  }

  export type NguoiDungUpdateToOneWithWhereWithoutHoaDonInput = {
    where?: NguoiDungWhereInput
    data: XOR<NguoiDungUpdateWithoutHoaDonInput, NguoiDungUncheckedUpdateWithoutHoaDonInput>
  }

  export type NguoiDungUpdateWithoutHoaDonInput = {
    ho_ten?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    so_dt?: NullableStringFieldUpdateOperationsInput | string | null
    mat_khau?: NullableStringFieldUpdateOperationsInput | string | null
    loai_nguoi_dung?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    DatVe?: DatVeUpdateManyWithoutNguoiDungNestedInput
    GiuCho?: GiuChoUpdateManyWithoutNguoiDungNestedInput
    RefreshToken?: RefreshTokenUpdateManyWithoutNguoiDungNestedInput
  }

  export type NguoiDungUncheckedUpdateWithoutHoaDonInput = {
    tai_khoan?: IntFieldUpdateOperationsInput | number
    ho_ten?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    so_dt?: NullableStringFieldUpdateOperationsInput | string | null
    mat_khau?: NullableStringFieldUpdateOperationsInput | string | null
    loai_nguoi_dung?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    DatVe?: DatVeUncheckedUpdateManyWithoutNguoiDungNestedInput
    GiuCho?: GiuChoUncheckedUpdateManyWithoutNguoiDungNestedInput
    RefreshToken?: RefreshTokenUncheckedUpdateManyWithoutNguoiDungNestedInput
  }

  export type LichChieuUpsertWithoutHoaDonInput = {
    update: XOR<LichChieuUpdateWithoutHoaDonInput, LichChieuUncheckedUpdateWithoutHoaDonInput>
    create: XOR<LichChieuCreateWithoutHoaDonInput, LichChieuUncheckedCreateWithoutHoaDonInput>
    where?: LichChieuWhereInput
  }

  export type LichChieuUpdateToOneWithWhereWithoutHoaDonInput = {
    where?: LichChieuWhereInput
    data: XOR<LichChieuUpdateWithoutHoaDonInput, LichChieuUncheckedUpdateWithoutHoaDonInput>
  }

  export type LichChieuUpdateWithoutHoaDonInput = {
    ngay_gio_chieu?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gia_ve?: NullableIntFieldUpdateOperationsInput | number | null
    DatVe?: DatVeUpdateManyWithoutLichChieuNestedInput
    GiuCho?: GiuChoUpdateManyWithoutLichChieuNestedInput
    RapPhim?: RapPhimUpdateOneWithoutLichChieuNestedInput
    Phim?: PhimUpdateOneWithoutLichChieuNestedInput
  }

  export type LichChieuUncheckedUpdateWithoutHoaDonInput = {
    ma_lich_chieu?: IntFieldUpdateOperationsInput | number
    ma_rap?: NullableIntFieldUpdateOperationsInput | number | null
    ma_phim?: NullableIntFieldUpdateOperationsInput | number | null
    ngay_gio_chieu?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gia_ve?: NullableIntFieldUpdateOperationsInput | number | null
    DatVe?: DatVeUncheckedUpdateManyWithoutLichChieuNestedInput
    GiuCho?: GiuChoUncheckedUpdateManyWithoutLichChieuNestedInput
  }

  export type DatVeUpsertWithWhereUniqueWithoutHoaDonInput = {
    where: DatVeWhereUniqueInput
    update: XOR<DatVeUpdateWithoutHoaDonInput, DatVeUncheckedUpdateWithoutHoaDonInput>
    create: XOR<DatVeCreateWithoutHoaDonInput, DatVeUncheckedCreateWithoutHoaDonInput>
  }

  export type DatVeUpdateWithWhereUniqueWithoutHoaDonInput = {
    where: DatVeWhereUniqueInput
    data: XOR<DatVeUpdateWithoutHoaDonInput, DatVeUncheckedUpdateWithoutHoaDonInput>
  }

  export type DatVeUpdateManyWithWhereWithoutHoaDonInput = {
    where: DatVeScalarWhereInput
    data: XOR<DatVeUpdateManyMutationInput, DatVeUncheckedUpdateManyWithoutHoaDonInput>
  }

  export type HoaDonComboUpsertWithWhereUniqueWithoutHoaDonInput = {
    where: HoaDonComboWhereUniqueInput
    update: XOR<HoaDonComboUpdateWithoutHoaDonInput, HoaDonComboUncheckedUpdateWithoutHoaDonInput>
    create: XOR<HoaDonComboCreateWithoutHoaDonInput, HoaDonComboUncheckedCreateWithoutHoaDonInput>
  }

  export type HoaDonComboUpdateWithWhereUniqueWithoutHoaDonInput = {
    where: HoaDonComboWhereUniqueInput
    data: XOR<HoaDonComboUpdateWithoutHoaDonInput, HoaDonComboUncheckedUpdateWithoutHoaDonInput>
  }

  export type HoaDonComboUpdateManyWithWhereWithoutHoaDonInput = {
    where: HoaDonComboScalarWhereInput
    data: XOR<HoaDonComboUpdateManyMutationInput, HoaDonComboUncheckedUpdateManyWithoutHoaDonInput>
  }

  export type HoaDonComboScalarWhereInput = {
    AND?: HoaDonComboScalarWhereInput | HoaDonComboScalarWhereInput[]
    OR?: HoaDonComboScalarWhereInput[]
    NOT?: HoaDonComboScalarWhereInput | HoaDonComboScalarWhereInput[]
    ma_hoa_don?: IntFilter<"HoaDonCombo"> | number
    ma_combo?: IntFilter<"HoaDonCombo"> | number
    so_luong?: IntFilter<"HoaDonCombo"> | number
    don_gia?: IntFilter<"HoaDonCombo"> | number
  }

  export type GiuChoUpsertWithWhereUniqueWithoutHoaDonInput = {
    where: GiuChoWhereUniqueInput
    update: XOR<GiuChoUpdateWithoutHoaDonInput, GiuChoUncheckedUpdateWithoutHoaDonInput>
    create: XOR<GiuChoCreateWithoutHoaDonInput, GiuChoUncheckedCreateWithoutHoaDonInput>
  }

  export type GiuChoUpdateWithWhereUniqueWithoutHoaDonInput = {
    where: GiuChoWhereUniqueInput
    data: XOR<GiuChoUpdateWithoutHoaDonInput, GiuChoUncheckedUpdateWithoutHoaDonInput>
  }

  export type GiuChoUpdateManyWithWhereWithoutHoaDonInput = {
    where: GiuChoScalarWhereInput
    data: XOR<GiuChoUpdateManyMutationInput, GiuChoUncheckedUpdateManyWithoutHoaDonInput>
  }

  export type HoaDonComboCreateWithoutComboInput = {
    so_luong: number
    don_gia: number
    HoaDon: HoaDonCreateNestedOneWithoutHoaDonComboInput
  }

  export type HoaDonComboUncheckedCreateWithoutComboInput = {
    ma_hoa_don: number
    so_luong: number
    don_gia: number
  }

  export type HoaDonComboCreateOrConnectWithoutComboInput = {
    where: HoaDonComboWhereUniqueInput
    create: XOR<HoaDonComboCreateWithoutComboInput, HoaDonComboUncheckedCreateWithoutComboInput>
  }

  export type HoaDonComboCreateManyComboInputEnvelope = {
    data: HoaDonComboCreateManyComboInput | HoaDonComboCreateManyComboInput[]
    skipDuplicates?: boolean
  }

  export type HoaDonComboUpsertWithWhereUniqueWithoutComboInput = {
    where: HoaDonComboWhereUniqueInput
    update: XOR<HoaDonComboUpdateWithoutComboInput, HoaDonComboUncheckedUpdateWithoutComboInput>
    create: XOR<HoaDonComboCreateWithoutComboInput, HoaDonComboUncheckedCreateWithoutComboInput>
  }

  export type HoaDonComboUpdateWithWhereUniqueWithoutComboInput = {
    where: HoaDonComboWhereUniqueInput
    data: XOR<HoaDonComboUpdateWithoutComboInput, HoaDonComboUncheckedUpdateWithoutComboInput>
  }

  export type HoaDonComboUpdateManyWithWhereWithoutComboInput = {
    where: HoaDonComboScalarWhereInput
    data: XOR<HoaDonComboUpdateManyMutationInput, HoaDonComboUncheckedUpdateManyWithoutComboInput>
  }

  export type HoaDonCreateWithoutHoaDonComboInput = {
    tong_tien: number
    created_at?: Date | string | null
    checked_in_at?: Date | string | null
    trang_thai_thanh_toan?: $Enums.TrangThaiThanhToan
    phuong_thuc_thanh_toan?: string | null
    ma_giao_dich_ngan_hang?: string | null
    so_tien_da_nhan?: number | null
    thanh_toan_luc?: Date | string | null
    het_han_luc?: Date | string | null
    NguoiDung: NguoiDungCreateNestedOneWithoutHoaDonInput
    LichChieu: LichChieuCreateNestedOneWithoutHoaDonInput
    DatVe?: DatVeCreateNestedManyWithoutHoaDonInput
    GiuCho?: GiuChoCreateNestedManyWithoutHoaDonInput
  }

  export type HoaDonUncheckedCreateWithoutHoaDonComboInput = {
    ma_hoa_don?: number
    tai_khoan: number
    ma_lich_chieu: number
    tong_tien: number
    created_at?: Date | string | null
    checked_in_at?: Date | string | null
    trang_thai_thanh_toan?: $Enums.TrangThaiThanhToan
    phuong_thuc_thanh_toan?: string | null
    ma_giao_dich_ngan_hang?: string | null
    so_tien_da_nhan?: number | null
    thanh_toan_luc?: Date | string | null
    het_han_luc?: Date | string | null
    DatVe?: DatVeUncheckedCreateNestedManyWithoutHoaDonInput
    GiuCho?: GiuChoUncheckedCreateNestedManyWithoutHoaDonInput
  }

  export type HoaDonCreateOrConnectWithoutHoaDonComboInput = {
    where: HoaDonWhereUniqueInput
    create: XOR<HoaDonCreateWithoutHoaDonComboInput, HoaDonUncheckedCreateWithoutHoaDonComboInput>
  }

  export type ComboCreateWithoutHoaDonComboInput = {
    ten_combo: string
    mo_ta?: string | null
    gia: number
    hinh_anh?: string | null
    isDeleted?: boolean | null
  }

  export type ComboUncheckedCreateWithoutHoaDonComboInput = {
    ma_combo?: number
    ten_combo: string
    mo_ta?: string | null
    gia: number
    hinh_anh?: string | null
    isDeleted?: boolean | null
  }

  export type ComboCreateOrConnectWithoutHoaDonComboInput = {
    where: ComboWhereUniqueInput
    create: XOR<ComboCreateWithoutHoaDonComboInput, ComboUncheckedCreateWithoutHoaDonComboInput>
  }

  export type HoaDonUpsertWithoutHoaDonComboInput = {
    update: XOR<HoaDonUpdateWithoutHoaDonComboInput, HoaDonUncheckedUpdateWithoutHoaDonComboInput>
    create: XOR<HoaDonCreateWithoutHoaDonComboInput, HoaDonUncheckedCreateWithoutHoaDonComboInput>
    where?: HoaDonWhereInput
  }

  export type HoaDonUpdateToOneWithWhereWithoutHoaDonComboInput = {
    where?: HoaDonWhereInput
    data: XOR<HoaDonUpdateWithoutHoaDonComboInput, HoaDonUncheckedUpdateWithoutHoaDonComboInput>
  }

  export type HoaDonUpdateWithoutHoaDonComboInput = {
    tong_tien?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checked_in_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trang_thai_thanh_toan?: EnumTrangThaiThanhToanFieldUpdateOperationsInput | $Enums.TrangThaiThanhToan
    phuong_thuc_thanh_toan?: NullableStringFieldUpdateOperationsInput | string | null
    ma_giao_dich_ngan_hang?: NullableStringFieldUpdateOperationsInput | string | null
    so_tien_da_nhan?: NullableIntFieldUpdateOperationsInput | number | null
    thanh_toan_luc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    het_han_luc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    NguoiDung?: NguoiDungUpdateOneRequiredWithoutHoaDonNestedInput
    LichChieu?: LichChieuUpdateOneRequiredWithoutHoaDonNestedInput
    DatVe?: DatVeUpdateManyWithoutHoaDonNestedInput
    GiuCho?: GiuChoUpdateManyWithoutHoaDonNestedInput
  }

  export type HoaDonUncheckedUpdateWithoutHoaDonComboInput = {
    ma_hoa_don?: IntFieldUpdateOperationsInput | number
    tai_khoan?: IntFieldUpdateOperationsInput | number
    ma_lich_chieu?: IntFieldUpdateOperationsInput | number
    tong_tien?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checked_in_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trang_thai_thanh_toan?: EnumTrangThaiThanhToanFieldUpdateOperationsInput | $Enums.TrangThaiThanhToan
    phuong_thuc_thanh_toan?: NullableStringFieldUpdateOperationsInput | string | null
    ma_giao_dich_ngan_hang?: NullableStringFieldUpdateOperationsInput | string | null
    so_tien_da_nhan?: NullableIntFieldUpdateOperationsInput | number | null
    thanh_toan_luc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    het_han_luc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DatVe?: DatVeUncheckedUpdateManyWithoutHoaDonNestedInput
    GiuCho?: GiuChoUncheckedUpdateManyWithoutHoaDonNestedInput
  }

  export type ComboUpsertWithoutHoaDonComboInput = {
    update: XOR<ComboUpdateWithoutHoaDonComboInput, ComboUncheckedUpdateWithoutHoaDonComboInput>
    create: XOR<ComboCreateWithoutHoaDonComboInput, ComboUncheckedCreateWithoutHoaDonComboInput>
    where?: ComboWhereInput
  }

  export type ComboUpdateToOneWithWhereWithoutHoaDonComboInput = {
    where?: ComboWhereInput
    data: XOR<ComboUpdateWithoutHoaDonComboInput, ComboUncheckedUpdateWithoutHoaDonComboInput>
  }

  export type ComboUpdateWithoutHoaDonComboInput = {
    ten_combo?: StringFieldUpdateOperationsInput | string
    mo_ta?: NullableStringFieldUpdateOperationsInput | string | null
    gia?: IntFieldUpdateOperationsInput | number
    hinh_anh?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ComboUncheckedUpdateWithoutHoaDonComboInput = {
    ma_combo?: IntFieldUpdateOperationsInput | number
    ten_combo?: StringFieldUpdateOperationsInput | string
    mo_ta?: NullableStringFieldUpdateOperationsInput | string | null
    gia?: IntFieldUpdateOperationsInput | number
    hinh_anh?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type RapPhimCreateManyCumRapInput = {
    ma_rap?: number
    ten_rap?: string | null
  }

  export type RapPhimUpdateWithoutCumRapInput = {
    ten_rap?: NullableStringFieldUpdateOperationsInput | string | null
    Ghe?: GheUpdateManyWithoutRapPhimNestedInput
    LichChieu?: LichChieuUpdateManyWithoutRapPhimNestedInput
  }

  export type RapPhimUncheckedUpdateWithoutCumRapInput = {
    ma_rap?: IntFieldUpdateOperationsInput | number
    ten_rap?: NullableStringFieldUpdateOperationsInput | string | null
    Ghe?: GheUncheckedUpdateManyWithoutRapPhimNestedInput
    LichChieu?: LichChieuUncheckedUpdateManyWithoutRapPhimNestedInput
  }

  export type RapPhimUncheckedUpdateManyWithoutCumRapInput = {
    ma_rap?: IntFieldUpdateOperationsInput | number
    ten_rap?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DatVeCreateManyGheInput = {
    tai_khoan: number
    ma_lich_chieu: number
    gia_ve: number
    ma_hoa_don?: number | null
    created_at?: Date | string | null
  }

  export type GiuChoCreateManyGheInput = {
    ma_giu_cho?: number
    tai_khoan: number
    ma_lich_chieu: number
    loai?: $Enums.LoaiGiuCho
    ma_hoa_don?: number | null
    gia_ve?: number | null
    expire_at: Date | string
    created_at?: Date | string | null
  }

  export type DatVeUpdateWithoutGheInput = {
    gia_ve?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    NguoiDung?: NguoiDungUpdateOneRequiredWithoutDatVeNestedInput
    LichChieu?: LichChieuUpdateOneRequiredWithoutDatVeNestedInput
    HoaDon?: HoaDonUpdateOneWithoutDatVeNestedInput
  }

  export type DatVeUncheckedUpdateWithoutGheInput = {
    tai_khoan?: IntFieldUpdateOperationsInput | number
    ma_lich_chieu?: IntFieldUpdateOperationsInput | number
    gia_ve?: IntFieldUpdateOperationsInput | number
    ma_hoa_don?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DatVeUncheckedUpdateManyWithoutGheInput = {
    tai_khoan?: IntFieldUpdateOperationsInput | number
    ma_lich_chieu?: IntFieldUpdateOperationsInput | number
    gia_ve?: IntFieldUpdateOperationsInput | number
    ma_hoa_don?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GiuChoUpdateWithoutGheInput = {
    loai?: EnumLoaiGiuChoFieldUpdateOperationsInput | $Enums.LoaiGiuCho
    gia_ve?: NullableIntFieldUpdateOperationsInput | number | null
    expire_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LichChieu?: LichChieuUpdateOneRequiredWithoutGiuChoNestedInput
    NguoiDung?: NguoiDungUpdateOneRequiredWithoutGiuChoNestedInput
    HoaDon?: HoaDonUpdateOneWithoutGiuChoNestedInput
  }

  export type GiuChoUncheckedUpdateWithoutGheInput = {
    ma_giu_cho?: IntFieldUpdateOperationsInput | number
    tai_khoan?: IntFieldUpdateOperationsInput | number
    ma_lich_chieu?: IntFieldUpdateOperationsInput | number
    loai?: EnumLoaiGiuChoFieldUpdateOperationsInput | $Enums.LoaiGiuCho
    ma_hoa_don?: NullableIntFieldUpdateOperationsInput | number | null
    gia_ve?: NullableIntFieldUpdateOperationsInput | number | null
    expire_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GiuChoUncheckedUpdateManyWithoutGheInput = {
    ma_giu_cho?: IntFieldUpdateOperationsInput | number
    tai_khoan?: IntFieldUpdateOperationsInput | number
    ma_lich_chieu?: IntFieldUpdateOperationsInput | number
    loai?: EnumLoaiGiuChoFieldUpdateOperationsInput | $Enums.LoaiGiuCho
    ma_hoa_don?: NullableIntFieldUpdateOperationsInput | number | null
    gia_ve?: NullableIntFieldUpdateOperationsInput | number | null
    expire_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CumRapCreateManyHeThongRapInput = {
    ma_cum_rap?: number
    ten_cum_rap?: string | null
    dia_chi?: string | null
    khu_vuc?: string | null
  }

  export type CumRapUpdateWithoutHeThongRapInput = {
    ten_cum_rap?: NullableStringFieldUpdateOperationsInput | string | null
    dia_chi?: NullableStringFieldUpdateOperationsInput | string | null
    khu_vuc?: NullableStringFieldUpdateOperationsInput | string | null
    RapPhim?: RapPhimUpdateManyWithoutCumRapNestedInput
  }

  export type CumRapUncheckedUpdateWithoutHeThongRapInput = {
    ma_cum_rap?: IntFieldUpdateOperationsInput | number
    ten_cum_rap?: NullableStringFieldUpdateOperationsInput | string | null
    dia_chi?: NullableStringFieldUpdateOperationsInput | string | null
    khu_vuc?: NullableStringFieldUpdateOperationsInput | string | null
    RapPhim?: RapPhimUncheckedUpdateManyWithoutCumRapNestedInput
  }

  export type CumRapUncheckedUpdateManyWithoutHeThongRapInput = {
    ma_cum_rap?: IntFieldUpdateOperationsInput | number
    ten_cum_rap?: NullableStringFieldUpdateOperationsInput | string | null
    dia_chi?: NullableStringFieldUpdateOperationsInput | string | null
    khu_vuc?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DatVeCreateManyLichChieuInput = {
    tai_khoan: number
    ma_ghe: number
    gia_ve: number
    ma_hoa_don?: number | null
    created_at?: Date | string | null
  }

  export type GiuChoCreateManyLichChieuInput = {
    ma_giu_cho?: number
    tai_khoan: number
    ma_ghe: number
    loai?: $Enums.LoaiGiuCho
    ma_hoa_don?: number | null
    gia_ve?: number | null
    expire_at: Date | string
    created_at?: Date | string | null
  }

  export type HoaDonCreateManyLichChieuInput = {
    ma_hoa_don?: number
    tai_khoan: number
    tong_tien: number
    created_at?: Date | string | null
    checked_in_at?: Date | string | null
    trang_thai_thanh_toan?: $Enums.TrangThaiThanhToan
    phuong_thuc_thanh_toan?: string | null
    ma_giao_dich_ngan_hang?: string | null
    so_tien_da_nhan?: number | null
    thanh_toan_luc?: Date | string | null
    het_han_luc?: Date | string | null
  }

  export type DatVeUpdateWithoutLichChieuInput = {
    gia_ve?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    NguoiDung?: NguoiDungUpdateOneRequiredWithoutDatVeNestedInput
    Ghe?: GheUpdateOneRequiredWithoutDatVeNestedInput
    HoaDon?: HoaDonUpdateOneWithoutDatVeNestedInput
  }

  export type DatVeUncheckedUpdateWithoutLichChieuInput = {
    tai_khoan?: IntFieldUpdateOperationsInput | number
    ma_ghe?: IntFieldUpdateOperationsInput | number
    gia_ve?: IntFieldUpdateOperationsInput | number
    ma_hoa_don?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DatVeUncheckedUpdateManyWithoutLichChieuInput = {
    tai_khoan?: IntFieldUpdateOperationsInput | number
    ma_ghe?: IntFieldUpdateOperationsInput | number
    gia_ve?: IntFieldUpdateOperationsInput | number
    ma_hoa_don?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GiuChoUpdateWithoutLichChieuInput = {
    loai?: EnumLoaiGiuChoFieldUpdateOperationsInput | $Enums.LoaiGiuCho
    gia_ve?: NullableIntFieldUpdateOperationsInput | number | null
    expire_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Ghe?: GheUpdateOneRequiredWithoutGiuChoNestedInput
    NguoiDung?: NguoiDungUpdateOneRequiredWithoutGiuChoNestedInput
    HoaDon?: HoaDonUpdateOneWithoutGiuChoNestedInput
  }

  export type GiuChoUncheckedUpdateWithoutLichChieuInput = {
    ma_giu_cho?: IntFieldUpdateOperationsInput | number
    tai_khoan?: IntFieldUpdateOperationsInput | number
    ma_ghe?: IntFieldUpdateOperationsInput | number
    loai?: EnumLoaiGiuChoFieldUpdateOperationsInput | $Enums.LoaiGiuCho
    ma_hoa_don?: NullableIntFieldUpdateOperationsInput | number | null
    gia_ve?: NullableIntFieldUpdateOperationsInput | number | null
    expire_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GiuChoUncheckedUpdateManyWithoutLichChieuInput = {
    ma_giu_cho?: IntFieldUpdateOperationsInput | number
    tai_khoan?: IntFieldUpdateOperationsInput | number
    ma_ghe?: IntFieldUpdateOperationsInput | number
    loai?: EnumLoaiGiuChoFieldUpdateOperationsInput | $Enums.LoaiGiuCho
    ma_hoa_don?: NullableIntFieldUpdateOperationsInput | number | null
    gia_ve?: NullableIntFieldUpdateOperationsInput | number | null
    expire_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type HoaDonUpdateWithoutLichChieuInput = {
    tong_tien?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checked_in_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trang_thai_thanh_toan?: EnumTrangThaiThanhToanFieldUpdateOperationsInput | $Enums.TrangThaiThanhToan
    phuong_thuc_thanh_toan?: NullableStringFieldUpdateOperationsInput | string | null
    ma_giao_dich_ngan_hang?: NullableStringFieldUpdateOperationsInput | string | null
    so_tien_da_nhan?: NullableIntFieldUpdateOperationsInput | number | null
    thanh_toan_luc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    het_han_luc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    NguoiDung?: NguoiDungUpdateOneRequiredWithoutHoaDonNestedInput
    DatVe?: DatVeUpdateManyWithoutHoaDonNestedInput
    HoaDonCombo?: HoaDonComboUpdateManyWithoutHoaDonNestedInput
    GiuCho?: GiuChoUpdateManyWithoutHoaDonNestedInput
  }

  export type HoaDonUncheckedUpdateWithoutLichChieuInput = {
    ma_hoa_don?: IntFieldUpdateOperationsInput | number
    tai_khoan?: IntFieldUpdateOperationsInput | number
    tong_tien?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checked_in_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trang_thai_thanh_toan?: EnumTrangThaiThanhToanFieldUpdateOperationsInput | $Enums.TrangThaiThanhToan
    phuong_thuc_thanh_toan?: NullableStringFieldUpdateOperationsInput | string | null
    ma_giao_dich_ngan_hang?: NullableStringFieldUpdateOperationsInput | string | null
    so_tien_da_nhan?: NullableIntFieldUpdateOperationsInput | number | null
    thanh_toan_luc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    het_han_luc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DatVe?: DatVeUncheckedUpdateManyWithoutHoaDonNestedInput
    HoaDonCombo?: HoaDonComboUncheckedUpdateManyWithoutHoaDonNestedInput
    GiuCho?: GiuChoUncheckedUpdateManyWithoutHoaDonNestedInput
  }

  export type HoaDonUncheckedUpdateManyWithoutLichChieuInput = {
    ma_hoa_don?: IntFieldUpdateOperationsInput | number
    tai_khoan?: IntFieldUpdateOperationsInput | number
    tong_tien?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checked_in_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trang_thai_thanh_toan?: EnumTrangThaiThanhToanFieldUpdateOperationsInput | $Enums.TrangThaiThanhToan
    phuong_thuc_thanh_toan?: NullableStringFieldUpdateOperationsInput | string | null
    ma_giao_dich_ngan_hang?: NullableStringFieldUpdateOperationsInput | string | null
    so_tien_da_nhan?: NullableIntFieldUpdateOperationsInput | number | null
    thanh_toan_luc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    het_han_luc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DatVeCreateManyNguoiDungInput = {
    ma_lich_chieu: number
    ma_ghe: number
    gia_ve: number
    ma_hoa_don?: number | null
    created_at?: Date | string | null
  }

  export type GiuChoCreateManyNguoiDungInput = {
    ma_giu_cho?: number
    ma_lich_chieu: number
    ma_ghe: number
    loai?: $Enums.LoaiGiuCho
    ma_hoa_don?: number | null
    gia_ve?: number | null
    expire_at: Date | string
    created_at?: Date | string | null
  }

  export type HoaDonCreateManyNguoiDungInput = {
    ma_hoa_don?: number
    ma_lich_chieu: number
    tong_tien: number
    created_at?: Date | string | null
    checked_in_at?: Date | string | null
    trang_thai_thanh_toan?: $Enums.TrangThaiThanhToan
    phuong_thuc_thanh_toan?: string | null
    ma_giao_dich_ngan_hang?: string | null
    so_tien_da_nhan?: number | null
    thanh_toan_luc?: Date | string | null
    het_han_luc?: Date | string | null
  }

  export type RefreshTokenCreateManyNguoiDungInput = {
    id?: number
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type DatVeUpdateWithoutNguoiDungInput = {
    gia_ve?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LichChieu?: LichChieuUpdateOneRequiredWithoutDatVeNestedInput
    Ghe?: GheUpdateOneRequiredWithoutDatVeNestedInput
    HoaDon?: HoaDonUpdateOneWithoutDatVeNestedInput
  }

  export type DatVeUncheckedUpdateWithoutNguoiDungInput = {
    ma_lich_chieu?: IntFieldUpdateOperationsInput | number
    ma_ghe?: IntFieldUpdateOperationsInput | number
    gia_ve?: IntFieldUpdateOperationsInput | number
    ma_hoa_don?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DatVeUncheckedUpdateManyWithoutNguoiDungInput = {
    ma_lich_chieu?: IntFieldUpdateOperationsInput | number
    ma_ghe?: IntFieldUpdateOperationsInput | number
    gia_ve?: IntFieldUpdateOperationsInput | number
    ma_hoa_don?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GiuChoUpdateWithoutNguoiDungInput = {
    loai?: EnumLoaiGiuChoFieldUpdateOperationsInput | $Enums.LoaiGiuCho
    gia_ve?: NullableIntFieldUpdateOperationsInput | number | null
    expire_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Ghe?: GheUpdateOneRequiredWithoutGiuChoNestedInput
    LichChieu?: LichChieuUpdateOneRequiredWithoutGiuChoNestedInput
    HoaDon?: HoaDonUpdateOneWithoutGiuChoNestedInput
  }

  export type GiuChoUncheckedUpdateWithoutNguoiDungInput = {
    ma_giu_cho?: IntFieldUpdateOperationsInput | number
    ma_lich_chieu?: IntFieldUpdateOperationsInput | number
    ma_ghe?: IntFieldUpdateOperationsInput | number
    loai?: EnumLoaiGiuChoFieldUpdateOperationsInput | $Enums.LoaiGiuCho
    ma_hoa_don?: NullableIntFieldUpdateOperationsInput | number | null
    gia_ve?: NullableIntFieldUpdateOperationsInput | number | null
    expire_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GiuChoUncheckedUpdateManyWithoutNguoiDungInput = {
    ma_giu_cho?: IntFieldUpdateOperationsInput | number
    ma_lich_chieu?: IntFieldUpdateOperationsInput | number
    ma_ghe?: IntFieldUpdateOperationsInput | number
    loai?: EnumLoaiGiuChoFieldUpdateOperationsInput | $Enums.LoaiGiuCho
    ma_hoa_don?: NullableIntFieldUpdateOperationsInput | number | null
    gia_ve?: NullableIntFieldUpdateOperationsInput | number | null
    expire_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type HoaDonUpdateWithoutNguoiDungInput = {
    tong_tien?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checked_in_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trang_thai_thanh_toan?: EnumTrangThaiThanhToanFieldUpdateOperationsInput | $Enums.TrangThaiThanhToan
    phuong_thuc_thanh_toan?: NullableStringFieldUpdateOperationsInput | string | null
    ma_giao_dich_ngan_hang?: NullableStringFieldUpdateOperationsInput | string | null
    so_tien_da_nhan?: NullableIntFieldUpdateOperationsInput | number | null
    thanh_toan_luc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    het_han_luc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LichChieu?: LichChieuUpdateOneRequiredWithoutHoaDonNestedInput
    DatVe?: DatVeUpdateManyWithoutHoaDonNestedInput
    HoaDonCombo?: HoaDonComboUpdateManyWithoutHoaDonNestedInput
    GiuCho?: GiuChoUpdateManyWithoutHoaDonNestedInput
  }

  export type HoaDonUncheckedUpdateWithoutNguoiDungInput = {
    ma_hoa_don?: IntFieldUpdateOperationsInput | number
    ma_lich_chieu?: IntFieldUpdateOperationsInput | number
    tong_tien?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checked_in_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trang_thai_thanh_toan?: EnumTrangThaiThanhToanFieldUpdateOperationsInput | $Enums.TrangThaiThanhToan
    phuong_thuc_thanh_toan?: NullableStringFieldUpdateOperationsInput | string | null
    ma_giao_dich_ngan_hang?: NullableStringFieldUpdateOperationsInput | string | null
    so_tien_da_nhan?: NullableIntFieldUpdateOperationsInput | number | null
    thanh_toan_luc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    het_han_luc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DatVe?: DatVeUncheckedUpdateManyWithoutHoaDonNestedInput
    HoaDonCombo?: HoaDonComboUncheckedUpdateManyWithoutHoaDonNestedInput
    GiuCho?: GiuChoUncheckedUpdateManyWithoutHoaDonNestedInput
  }

  export type HoaDonUncheckedUpdateManyWithoutNguoiDungInput = {
    ma_hoa_don?: IntFieldUpdateOperationsInput | number
    ma_lich_chieu?: IntFieldUpdateOperationsInput | number
    tong_tien?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checked_in_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trang_thai_thanh_toan?: EnumTrangThaiThanhToanFieldUpdateOperationsInput | $Enums.TrangThaiThanhToan
    phuong_thuc_thanh_toan?: NullableStringFieldUpdateOperationsInput | string | null
    ma_giao_dich_ngan_hang?: NullableStringFieldUpdateOperationsInput | string | null
    so_tien_da_nhan?: NullableIntFieldUpdateOperationsInput | number | null
    thanh_toan_luc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    het_han_luc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RefreshTokenUpdateWithoutNguoiDungInput = {
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUncheckedUpdateWithoutNguoiDungInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUncheckedUpdateManyWithoutNguoiDungInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BannerCreateManyPhimInput = {
    ma_banner?: number
    hinh_anh?: string | null
  }

  export type LichChieuCreateManyPhimInput = {
    ma_lich_chieu?: number
    ma_rap?: number | null
    ngay_gio_chieu?: Date | string | null
    gia_ve?: number | null
  }

  export type BannerUpdateWithoutPhimInput = {
    hinh_anh?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BannerUncheckedUpdateWithoutPhimInput = {
    ma_banner?: IntFieldUpdateOperationsInput | number
    hinh_anh?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BannerUncheckedUpdateManyWithoutPhimInput = {
    ma_banner?: IntFieldUpdateOperationsInput | number
    hinh_anh?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LichChieuUpdateWithoutPhimInput = {
    ngay_gio_chieu?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gia_ve?: NullableIntFieldUpdateOperationsInput | number | null
    DatVe?: DatVeUpdateManyWithoutLichChieuNestedInput
    GiuCho?: GiuChoUpdateManyWithoutLichChieuNestedInput
    HoaDon?: HoaDonUpdateManyWithoutLichChieuNestedInput
    RapPhim?: RapPhimUpdateOneWithoutLichChieuNestedInput
  }

  export type LichChieuUncheckedUpdateWithoutPhimInput = {
    ma_lich_chieu?: IntFieldUpdateOperationsInput | number
    ma_rap?: NullableIntFieldUpdateOperationsInput | number | null
    ngay_gio_chieu?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gia_ve?: NullableIntFieldUpdateOperationsInput | number | null
    DatVe?: DatVeUncheckedUpdateManyWithoutLichChieuNestedInput
    GiuCho?: GiuChoUncheckedUpdateManyWithoutLichChieuNestedInput
    HoaDon?: HoaDonUncheckedUpdateManyWithoutLichChieuNestedInput
  }

  export type LichChieuUncheckedUpdateManyWithoutPhimInput = {
    ma_lich_chieu?: IntFieldUpdateOperationsInput | number
    ma_rap?: NullableIntFieldUpdateOperationsInput | number | null
    ngay_gio_chieu?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gia_ve?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type GheCreateManyRapPhimInput = {
    ma_ghe?: number
    ten_ghe?: string | null
    loai_ghe?: string | null
  }

  export type LichChieuCreateManyRapPhimInput = {
    ma_lich_chieu?: number
    ma_phim?: number | null
    ngay_gio_chieu?: Date | string | null
    gia_ve?: number | null
  }

  export type GheUpdateWithoutRapPhimInput = {
    ten_ghe?: NullableStringFieldUpdateOperationsInput | string | null
    loai_ghe?: NullableStringFieldUpdateOperationsInput | string | null
    DatVe?: DatVeUpdateManyWithoutGheNestedInput
    GiuCho?: GiuChoUpdateManyWithoutGheNestedInput
  }

  export type GheUncheckedUpdateWithoutRapPhimInput = {
    ma_ghe?: IntFieldUpdateOperationsInput | number
    ten_ghe?: NullableStringFieldUpdateOperationsInput | string | null
    loai_ghe?: NullableStringFieldUpdateOperationsInput | string | null
    DatVe?: DatVeUncheckedUpdateManyWithoutGheNestedInput
    GiuCho?: GiuChoUncheckedUpdateManyWithoutGheNestedInput
  }

  export type GheUncheckedUpdateManyWithoutRapPhimInput = {
    ma_ghe?: IntFieldUpdateOperationsInput | number
    ten_ghe?: NullableStringFieldUpdateOperationsInput | string | null
    loai_ghe?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LichChieuUpdateWithoutRapPhimInput = {
    ngay_gio_chieu?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gia_ve?: NullableIntFieldUpdateOperationsInput | number | null
    DatVe?: DatVeUpdateManyWithoutLichChieuNestedInput
    GiuCho?: GiuChoUpdateManyWithoutLichChieuNestedInput
    HoaDon?: HoaDonUpdateManyWithoutLichChieuNestedInput
    Phim?: PhimUpdateOneWithoutLichChieuNestedInput
  }

  export type LichChieuUncheckedUpdateWithoutRapPhimInput = {
    ma_lich_chieu?: IntFieldUpdateOperationsInput | number
    ma_phim?: NullableIntFieldUpdateOperationsInput | number | null
    ngay_gio_chieu?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gia_ve?: NullableIntFieldUpdateOperationsInput | number | null
    DatVe?: DatVeUncheckedUpdateManyWithoutLichChieuNestedInput
    GiuCho?: GiuChoUncheckedUpdateManyWithoutLichChieuNestedInput
    HoaDon?: HoaDonUncheckedUpdateManyWithoutLichChieuNestedInput
  }

  export type LichChieuUncheckedUpdateManyWithoutRapPhimInput = {
    ma_lich_chieu?: IntFieldUpdateOperationsInput | number
    ma_phim?: NullableIntFieldUpdateOperationsInput | number | null
    ngay_gio_chieu?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gia_ve?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DatVeCreateManyHoaDonInput = {
    tai_khoan: number
    ma_lich_chieu: number
    ma_ghe: number
    gia_ve: number
    created_at?: Date | string | null
  }

  export type HoaDonComboCreateManyHoaDonInput = {
    ma_combo: number
    so_luong: number
    don_gia: number
  }

  export type GiuChoCreateManyHoaDonInput = {
    ma_giu_cho?: number
    tai_khoan: number
    ma_lich_chieu: number
    ma_ghe: number
    loai?: $Enums.LoaiGiuCho
    gia_ve?: number | null
    expire_at: Date | string
    created_at?: Date | string | null
  }

  export type DatVeUpdateWithoutHoaDonInput = {
    gia_ve?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    NguoiDung?: NguoiDungUpdateOneRequiredWithoutDatVeNestedInput
    LichChieu?: LichChieuUpdateOneRequiredWithoutDatVeNestedInput
    Ghe?: GheUpdateOneRequiredWithoutDatVeNestedInput
  }

  export type DatVeUncheckedUpdateWithoutHoaDonInput = {
    tai_khoan?: IntFieldUpdateOperationsInput | number
    ma_lich_chieu?: IntFieldUpdateOperationsInput | number
    ma_ghe?: IntFieldUpdateOperationsInput | number
    gia_ve?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DatVeUncheckedUpdateManyWithoutHoaDonInput = {
    tai_khoan?: IntFieldUpdateOperationsInput | number
    ma_lich_chieu?: IntFieldUpdateOperationsInput | number
    ma_ghe?: IntFieldUpdateOperationsInput | number
    gia_ve?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type HoaDonComboUpdateWithoutHoaDonInput = {
    so_luong?: IntFieldUpdateOperationsInput | number
    don_gia?: IntFieldUpdateOperationsInput | number
    Combo?: ComboUpdateOneRequiredWithoutHoaDonComboNestedInput
  }

  export type HoaDonComboUncheckedUpdateWithoutHoaDonInput = {
    ma_combo?: IntFieldUpdateOperationsInput | number
    so_luong?: IntFieldUpdateOperationsInput | number
    don_gia?: IntFieldUpdateOperationsInput | number
  }

  export type HoaDonComboUncheckedUpdateManyWithoutHoaDonInput = {
    ma_combo?: IntFieldUpdateOperationsInput | number
    so_luong?: IntFieldUpdateOperationsInput | number
    don_gia?: IntFieldUpdateOperationsInput | number
  }

  export type GiuChoUpdateWithoutHoaDonInput = {
    loai?: EnumLoaiGiuChoFieldUpdateOperationsInput | $Enums.LoaiGiuCho
    gia_ve?: NullableIntFieldUpdateOperationsInput | number | null
    expire_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Ghe?: GheUpdateOneRequiredWithoutGiuChoNestedInput
    LichChieu?: LichChieuUpdateOneRequiredWithoutGiuChoNestedInput
    NguoiDung?: NguoiDungUpdateOneRequiredWithoutGiuChoNestedInput
  }

  export type GiuChoUncheckedUpdateWithoutHoaDonInput = {
    ma_giu_cho?: IntFieldUpdateOperationsInput | number
    tai_khoan?: IntFieldUpdateOperationsInput | number
    ma_lich_chieu?: IntFieldUpdateOperationsInput | number
    ma_ghe?: IntFieldUpdateOperationsInput | number
    loai?: EnumLoaiGiuChoFieldUpdateOperationsInput | $Enums.LoaiGiuCho
    gia_ve?: NullableIntFieldUpdateOperationsInput | number | null
    expire_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GiuChoUncheckedUpdateManyWithoutHoaDonInput = {
    ma_giu_cho?: IntFieldUpdateOperationsInput | number
    tai_khoan?: IntFieldUpdateOperationsInput | number
    ma_lich_chieu?: IntFieldUpdateOperationsInput | number
    ma_ghe?: IntFieldUpdateOperationsInput | number
    loai?: EnumLoaiGiuChoFieldUpdateOperationsInput | $Enums.LoaiGiuCho
    gia_ve?: NullableIntFieldUpdateOperationsInput | number | null
    expire_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type HoaDonComboCreateManyComboInput = {
    ma_hoa_don: number
    so_luong: number
    don_gia: number
  }

  export type HoaDonComboUpdateWithoutComboInput = {
    so_luong?: IntFieldUpdateOperationsInput | number
    don_gia?: IntFieldUpdateOperationsInput | number
    HoaDon?: HoaDonUpdateOneRequiredWithoutHoaDonComboNestedInput
  }

  export type HoaDonComboUncheckedUpdateWithoutComboInput = {
    ma_hoa_don?: IntFieldUpdateOperationsInput | number
    so_luong?: IntFieldUpdateOperationsInput | number
    don_gia?: IntFieldUpdateOperationsInput | number
  }

  export type HoaDonComboUncheckedUpdateManyWithoutComboInput = {
    ma_hoa_don?: IntFieldUpdateOperationsInput | number
    so_luong?: IntFieldUpdateOperationsInput | number
    don_gia?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}