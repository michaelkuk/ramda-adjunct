declare var RA: RamdaAdjunct.Static;

declare namespace RamdaAdjunct {

    interface Functor<T> {
        map<U>(fn: (t: T) => U): Functor<U>;
    }

    interface Apply<T> extends Functor<T> {
        ap<U>(fn: Apply<(t: T) => U>): Apply<U>;
    }

    interface Catamorphism<T> {
        cata<T1>(leftFn: (v: T1) => T, rightFn: (v: T1) => T): T;
    }

    interface Variadic<T1, T2> {
        (...args: T1[]): T2;
    }

    export interface Static {
        /**
         * Checks if input value is `Array`.
         */
        isArray(val: any): val is Array<any>;

        /**
         * Checks if input value is `Boolean.
         */
        isBoolean(val: any): val is Boolean;

        /**
         * Returns `true` if the given value is its type's empty value, `null` or `undefined`.
         */
        isNilOrEmpty(val: any): boolean;

        /**
         * Checks if input value is complement of `Array`.
         */
        isNotArray(val: any): boolean;

        /**
         * Checks if input value is complement of `Boolean`.
         */
        isNotBoolean(val: any): boolean;

        /**
         * Returns true if the given value is not its type's empty value; `false` otherwise.
         */
        isNotEmpty(val: any): boolean;

        /**
         * Checks if input value is complement of `null` or `undefined`.
         */
        isNotNil(val: any): boolean;

        /**
         * Checks if input value is complement of `null`.
         */
        isNotNull(val: any): boolean;

        /**
         * Checks if input value is complement of `String`.
         */
        isNotString(val: any): boolean;

        /**
         * Checks if input value is complement `undefined`.
         */
        isNotUndefined(val: any): boolean;

        /**
         * Checks if input value is `null`.
         */
        isNull(val: any): val is null;

        /**
         * Checks if input value is `String`.
         */
        isString(val: any): val is String;

        /**
         * Checks if input value is `undefined`.
         */
        isUndefined(val: any): val is undefined;

        /**
         * Tests whether or not an object is similar to an array.
         */
        isArrayLike(val: any): boolean


        /**
         * Tests whether or not an object is similar to an array.
         */
        isNotArrayLike(val: any): boolean;

        /**
         * Checks if input value is `Generator Function`.
         */
        isGeneratorFunction(val: any): boolean;

        /**
         * Checks if input value is complement of `Generator Function`.
         */
        isNotGeneratorFunction(val: any): boolean;

        /**
         * Checks if input value is `Async Function`.
         */
        isAsyncFunction(val: any): boolean;

        /**
         * Checks if input value is complement of `Async Function`.
         */
        isNotAsyncFunction(val: any): boolean;

        /**
         * Checks if input value is `Function`.
         */
        isFunction(val: any): boolean;

        /**
         * Checks if input value is complement of `Function`.
         */
        isNotFunction(val: any): boolean;

        /**
         * Checks if input value is language type of `Object`.
         */
        isObj(val: any): val is Object;
        isObject(val: any): val is Object;

        /**
         * Checks if input value is complement of language type of `Object`.
         */
        isNotObj(val: any): boolean;
        isNotObject(val: any): boolean; // alias

        /**
         * Checks if value is object-like. A value is object-like if it's not null and has a typeof result of "object".
         */
        isObjLike(val: any): boolean;
        isObjectLike(val: any): boolean; // alias

        /**
         * Checks if value is not object-like. A value is object-like if it's not null and has a typeof result of "object".
         */
        isNotObjLike(val: any): boolean;
        isNotObjectLike(val: any): boolean; // alias

        /**
         * Check to see if an object is a plain object (created using `{}`, `new Object()` or `Object.create(null)`).
         */
        isPlainObj(val: any): boolean;
        isPlainObject(val: any): boolean; // alias

        /**
         * Check to see if an object is not a plain object (created using `{}`, `new Object()` or `Object.create(null)`).
         */
        isNotPlainObj(val: any): boolean;
        isNotPlainObject(val: any): boolean; // alias

        /**
         * Checks if value is `Date` object.
         */
        isDate(val: any): val is Date;

        /**
         * Checks if value is complement of `Date` object.
         */
        isNotDate(val: any): boolean;

        /**
         * Checks if value is valid `Date` object.
         */
        isValidDate(val: any): val is Date;

        /**
         * Checks if value is complement of valid `Date` object.
         */
        isNotValidDate(val: any): boolean;

        /**
         * Checks if value is complement of valid `Date` object.
         */
        isInvalidDate(val: any): boolean; // alias of isNotValidDate

        /**
         * Checks whether the passed value is `NaN` and its type is `Number`.
         * It is a more robust version of the original, global isNaN().
         */
        isNaN(val: any): boolean;

        /**
         * Checks whether the passed value is complement of `NaN` and its type is not `Number`.
         */
        isNotNaN(val: any): boolean;

        /**
         * Checks if value is a `Number` primitive or object.
         */
        isNumber(val: any): val is Number;

        /**
         * Checks if value is a complement of `Number` primitive or object.
         */
        isNotNumber(val: any): boolean;

        /**
         * Checks whether the passed value is a finite `Number`.
         */
        isFinite(val: any): boolean;

        /**
         * Checks whether the passed value is complement of finite `Number`.
         */
        isNotFinite(val: any): boolean;

        /**
         * Checks whether the passed value is a an `integer`.
         */
        isInteger(val: any): boolean;

        /**
         * Checks whether the passed value is complement of `integer`.
         */
        isNotInteger(val: any): boolean;

        /**
         * A function that returns `undefined`.
         */
        stubUndefined(): undefined;

        /**
         * A function that returns `null`.
         */
        stubNull():  null;

        /**
         * A function that performs no operations.
         */
        noop(): undefined;

        /**
         * Picks values from list by indexes.
         */
        pickIndexes<T>(indexes: Array<number>, list: Array<T>): Array<T>;
        pickIndexes(indexes: Array<number>): <T>(list: Array<T>) => Array<T>;

        /**
         * Creates a list from from arguments.
         */
        list(...items: any[]): Array<any>;

        /**
         * Returns the result of concatenating the given lists or strings.
         */
        concatRight<T extends Array<any>|String>(firstList: T, secondList: T): T;

        /**
         * Acts as multiple path: arrays of paths in, array of values out. Preserves order.
         */
        paths(ps: Array<Array<string | number>>, obj: Object): Array<any>;
        paths(ps: Array<Array<string | number>>): (obj: Object) => Array<any>;

        /**
         * "lifts" a function to be the specified arity, so that it may "map over" objects that satisfy
         * the Apply spec of fantasy land.
         */
        liftFN<T>(arity: number, fn: Variadic<Apply<T>, T>): Apply<T>;

        /**
         * "lifts" a function of arity > 1 so that it may "map over" objects that satisfy
         * the Apply spec of fantasy land.
         */
        liftF<T>(fn: Variadic<Apply<T>, T>): Apply<T>;

        /**
         * The catamorphism for either. If the either is right than the right function will be executed with
         * the right value and the value of the function returned. Otherwise the left function
         * will be called with the left value.
         */
        cata<V1, V2, T1, T2>(leftFn: (leftValue: V1) => T1, rightFn: (rightValue: V2) => T2, either: Catamorphism<V1|V2>): T1|T2;
        cata<V1, V2, T1, T2>(leftFn: (leftValue: V1) => T1, rightFn: (rightValue: V2) => T2): {
            (either: Catamorphism<V1|V2>): T1|T2;
        };
        cata<V1, V2, T1, T2>(leftFn: (leftValue: V1) => T1): {
            (rightFn: (rightValue: V2) => T1, either: Catamorphism<V1|V2>): T1|T2;
            (rightFn: (rightValue: V2) => T1): {
                (either: Catamorphism<V1|V2>): T1|T2;
            }
        };

        /**
         * Creates a new object with the own properties of the provided object, but the
         * keys renamed according to the keysMap object as `{oldKey: newKey}`.
         * When some key is not found in the keysMap, then it's passed as-is.
         */
        renameKeys(keysMap: Object, obj: Object): Object;
        renameKeys(keysMap: Object): (obj: Object) => Object;

        /**
         * Creates a new object with the own properties of the provided object, but the
         * keys renamed according to logic of renaming function.
         */
        renameKeysWith(renameFn: (key: any) => any, obj: Object): Object;
        renameKeysWith(renameFn: (key: any) => any): (obj: Object) => Object;

        /**
         * Create a new object with the own properties of the second object merged with
         * the own properties of the first object. If a key exists in both objects,
         * the value from the first object will be used. *
         * Putting it simply: it sets properties only if they don't exist.
         */
        mergeRight(source: Object, destination: Object): Object;
        mergeRight(source: Object): (destination: Object) => Object;

        /**
         * Reset properties of the object to their default values.
         * Alias of {@link http://ramdajs.com/docs/#merge|mergeRight}.
         */
        resetToDefault(defaultOptions: Object, options: Object): Object; // alias of mergeRight
        resetToDefault(defaultOptions: Object): (options: Object) => Object; // alias of mergeRight

        /**
         * Set properties only if they don't exist. Useful for passing defaults.
         * Alias of {@link http://ramdajs.com/docs/#merge|mergeRight}.
         */
        defaults(defaultOptions: Object, options: Object): Object;
        defaults(defaultOptions: Object): (options: Object) => Object;


        /**
         * Weave a configuration into function returning the runnable monad like `Reader` or `Free`.
         */
        weave(fn: Function, config: any): Function;
        weave(fn: Function): (config: any) => Function;

        /**
         * Weave a configuration into function returning the runnable monad like `Reader` or `Free`.
         */
        weaveLazy(fn: Function, configAccessor: Function): Function;
        weaveLazy(fn: Function): (configAccessor: Function) => Function;

        /**
         * Returns a curried equivalent of the provided function, with the specified arity.
         * This function is like curryN, except that the provided arguments order is reversed.
         */
        curryRightN(arity: number, fn: Function): Function
        curryRightN(arity: number): (fn: Function) => Function

        /**
         * Returns a curried equivalent of the provided function.
         * This function is like curry, except that the provided arguments order is reversed.
         */
        curryRight(fn: Function): Function

        /**
         *
         */
        reduceP<T, TResult, R extends T[]>(fn: (acc: TResult, elem: T) => TResult, acc: TResult, list: R): TResult;
        reduceP<T, TResult, R extends T[]>(fn: (acc: TResult, elem: T) => TResult, acc: TResult): {
            (list: R): TResult
        };
        reduceP<T, TResult, R extends T[]>(fn: (acc: TResult, elem: T) => TResult): {
            (acc: TResult, list: R): TResult;
            (acc: TResult): {
                (list: R): TResult
            }
        }

        /**
         * Identity type.
         */
        Identity: Function;
    }

}

export = RA;
