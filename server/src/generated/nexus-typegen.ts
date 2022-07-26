/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */

import type * as User from "./../models/user/index"
import type { AuthenticatedContext } from "./../../common/context/index"
import type { core } from "nexus"
declare global {
  interface NexusGenCustomInputMethods<TypeName extends string> {
    /**
     * A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    date<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "Date";
    /**
     * A time string at UTC, such as 10:15:30Z, compliant with the `full-time` format outlined in section 5.6 of the RFC 3339profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    time<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "Time";
    /**
     * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    datetime<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "DateTime";
  }
}
declare global {
  interface NexusGenCustomOutputMethods<TypeName extends string> {
    /**
     * A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    date<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "Date";
    /**
     * A time string at UTC, such as 10:15:30Z, compliant with the `full-time` format outlined in section 5.6 of the RFC 3339profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    time<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "Time";
    /**
     * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    datetime<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "DateTime";
  }
}


declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  UserInput: { // input type
    about?: string | null; // String
    address?: string | null; // String
    email?: string | null; // String
    imageURL?: string | null; // String
    receiveNotifications?: boolean | null; // Boolean
    registered?: boolean | null; // Boolean
    username?: string | null; // String
  }
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
  Date: any
  DateTime: any
  JSON: any
  Time: any
}

export interface NexusGenObjects {
  LoginObject: { // root type
    authToken?: string | null; // String
    user?: NexusGenRootTypes['User'] | null; // User
  }
  Mutation: {};
  NonceObject: { // root type
    nonce?: string | null; // String
  }
  Query: {};
  User: User.User;
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars

export interface NexusGenFieldTypes {
  LoginObject: { // field return type
    authToken: string | null; // String
    user: NexusGenRootTypes['User'] | null; // User
  }
  Mutation: { // field return type
    getOrCreateUserNonce: NexusGenRootTypes['NonceObject'] | null; // NonceObject
    updateUser: NexusGenRootTypes['User'] | null; // User
  }
  NonceObject: { // field return type
    nonce: string | null; // String
  }
  Query: { // field return type
    loginUser: NexusGenRootTypes['LoginObject'] | null; // LoginObject
    user: NexusGenRootTypes['User'] | null; // User
  }
  User: { // field return type
    _id: string | null; // String
    about: string | null; // String
    address: string | null; // String
    email: string | null; // String
    imageURL: string | null; // String
    nonce: string | null; // String
    receiveNotifications: boolean | null; // Boolean
    registered: boolean | null; // Boolean
    username: string | null; // String
  }
}

export interface NexusGenFieldTypeNames {
  LoginObject: { // field return type name
    authToken: 'String'
    user: 'User'
  }
  Mutation: { // field return type name
    getOrCreateUserNonce: 'NonceObject'
    updateUser: 'User'
  }
  NonceObject: { // field return type name
    nonce: 'String'
  }
  Query: { // field return type name
    loginUser: 'LoginObject'
    user: 'User'
  }
  User: { // field return type name
    _id: 'String'
    about: 'String'
    address: 'String'
    email: 'String'
    imageURL: 'String'
    nonce: 'String'
    receiveNotifications: 'Boolean'
    registered: 'Boolean'
    username: 'String'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    getOrCreateUserNonce: { // args
      address?: string | null; // String
    }
    updateUser: { // args
      user: NexusGenInputs['UserInput']; // UserInput!
    }
  }
  Query: {
    loginUser: { // args
      address?: string | null; // String
    }
    user: { // args
      authToken?: string | null; // String
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = keyof NexusGenInputs;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: AuthenticatedContext;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}