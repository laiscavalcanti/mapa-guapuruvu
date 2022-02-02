/* eslint-disable*/
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03 (YYYY-MM-DD), compliant with ISO 8601 standard for representation of dates using the Gregorian calendar. */
  Date: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the date-timeformat outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representationof dates and times using the Gregorian calendar. */
  DateTime: any;
  Hex: any;
  /** Raw JSON value */
  Json: any;
  /** The Long scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: any;
  RGBAHue: any;
  RGBATransparency: any;
  /** Slate-compatible RichText AST */
  RichTextAST: any;
};






export type Aggregate = {
  __typename?: 'Aggregate';
  count: Scalars['Int'];
};

/** Asset system model */
export type Asset = Node & {
  __typename?: 'Asset';
  /** System stage field */
  stage: Stage;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Asset>;
  /** Get the document in other stages */
  documentInStages: Array<Asset>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** The file handle */
  handle: Scalars['String'];
  /** The file name */
  fileName: Scalars['String'];
  /** The height of the file */
  height?: Maybe<Scalars['Float']>;
  /** The file width */
  width?: Maybe<Scalars['Float']>;
  /** The file size */
  size?: Maybe<Scalars['Float']>;
  /** The mime type of the file */
  mimeType?: Maybe<Scalars['String']>;
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  linkExternalLink: Array<ExternalLink>;
  galleryPlace: Array<Place>;
  scheduledIn: Array<ScheduledOperation>;
  /** List of Asset versions */
  history: Array<Version>;
  /** Get the url for the asset with provided transformations applied. */
  url: Scalars['String'];
};


/** Asset system model */
export type AssetLocalizationsArgs = {
  locales?: Array<Locale>;
  includeCurrent?: Scalars['Boolean'];
};


/** Asset system model */
export type AssetDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


/** Asset system model */
export type AssetCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


/** Asset system model */
export type AssetUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


/** Asset system model */
export type AssetPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


/** Asset system model */
export type AssetLinkExternalLinkArgs = {
  where?: Maybe<ExternalLinkWhereInput>;
  orderBy?: Maybe<ExternalLinkOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
};


/** Asset system model */
export type AssetGalleryPlaceArgs = {
  where?: Maybe<PlaceWhereInput>;
  orderBy?: Maybe<PlaceOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
};


/** Asset system model */
export type AssetScheduledInArgs = {
  where?: Maybe<ScheduledOperationWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
};


/** Asset system model */
export type AssetHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};


/** Asset system model */
export type AssetUrlArgs = {
  transformation?: Maybe<AssetTransformationInput>;
};

export type AssetConnectInput = {
  /** Document to connect */
  where: AssetWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type AssetConnection = {
  __typename?: 'AssetConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<AssetEdge>;
  aggregate: Aggregate;
};

export type AssetCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  handle: Scalars['String'];
  fileName: Scalars['String'];
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  linkExternalLink?: Maybe<ExternalLinkCreateManyInlineInput>;
  galleryPlace?: Maybe<PlaceCreateManyInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: Maybe<AssetCreateLocalizationsInput>;
};

export type AssetCreateLocalizationDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  handle: Scalars['String'];
  fileName: Scalars['String'];
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
};

export type AssetCreateLocalizationInput = {
  /** Localization input */
  data: AssetCreateLocalizationDataInput;
  locale: Locale;
};

export type AssetCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: Maybe<Array<AssetCreateLocalizationInput>>;
};

export type AssetCreateManyInlineInput = {
  /** Create and connect multiple existing Asset documents */
  create?: Maybe<Array<AssetCreateInput>>;
  /** Connect multiple existing Asset documents */
  connect?: Maybe<Array<AssetWhereUniqueInput>>;
};

export type AssetCreateOneInlineInput = {
  /** Create and connect one Asset document */
  create?: Maybe<AssetCreateInput>;
  /** Connect one existing Asset document */
  connect?: Maybe<AssetWhereUniqueInput>;
};

/** An edge in a connection. */
export type AssetEdge = {
  __typename?: 'AssetEdge';
  /** The item at the end of the edge. */
  node: Asset;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type AssetManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<AssetWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  linkExternalLink_every?: Maybe<ExternalLinkWhereInput>;
  linkExternalLink_some?: Maybe<ExternalLinkWhereInput>;
  linkExternalLink_none?: Maybe<ExternalLinkWhereInput>;
  galleryPlace_every?: Maybe<PlaceWhereInput>;
  galleryPlace_some?: Maybe<PlaceWhereInput>;
  galleryPlace_none?: Maybe<PlaceWhereInput>;
  scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
};

export enum AssetOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  HandleAsc = 'handle_ASC',
  HandleDesc = 'handle_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC'
}

/** Transformations for Assets */
export type AssetTransformationInput = {
  image?: Maybe<ImageTransformationInput>;
  document?: Maybe<DocumentTransformationInput>;
  /** Pass true if you want to validate the passed transformation parameters */
  validateOptions?: Maybe<Scalars['Boolean']>;
};

export type AssetUpdateInput = {
  handle?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  linkExternalLink?: Maybe<ExternalLinkUpdateManyInlineInput>;
  galleryPlace?: Maybe<PlaceUpdateManyInlineInput>;
  /** Manage document localizations */
  localizations?: Maybe<AssetUpdateLocalizationsInput>;
};

export type AssetUpdateLocalizationDataInput = {
  handle?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
};

export type AssetUpdateLocalizationInput = {
  data: AssetUpdateLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: Maybe<Array<AssetCreateLocalizationInput>>;
  /** Localizations to update */
  update?: Maybe<Array<AssetUpdateLocalizationInput>>;
  upsert?: Maybe<Array<AssetUpsertLocalizationInput>>;
  /** Localizations to delete */
  delete?: Maybe<Array<Locale>>;
};

export type AssetUpdateManyInlineInput = {
  /** Create and connect multiple Asset documents */
  create?: Maybe<Array<AssetCreateInput>>;
  /** Connect multiple existing Asset documents */
  connect?: Maybe<Array<AssetConnectInput>>;
  /** Override currently-connected documents with multiple existing Asset documents */
  set?: Maybe<Array<AssetWhereUniqueInput>>;
  /** Update multiple Asset documents */
  update?: Maybe<Array<AssetUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Asset documents */
  upsert?: Maybe<Array<AssetUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Asset documents */
  disconnect?: Maybe<Array<AssetWhereUniqueInput>>;
  /** Delete multiple Asset documents */
  delete?: Maybe<Array<AssetWhereUniqueInput>>;
};

export type AssetUpdateManyInput = {
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  /** Optional updates to localizations */
  localizations?: Maybe<AssetUpdateManyLocalizationsInput>;
};

export type AssetUpdateManyLocalizationDataInput = {
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
};

export type AssetUpdateManyLocalizationInput = {
  data: AssetUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: Maybe<Array<AssetUpdateManyLocalizationInput>>;
};

export type AssetUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: AssetWhereInput;
  /** Update many input */
  data: AssetUpdateManyInput;
};

export type AssetUpdateOneInlineInput = {
  /** Create and connect one Asset document */
  create?: Maybe<AssetCreateInput>;
  /** Update single Asset document */
  update?: Maybe<AssetUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Asset document */
  upsert?: Maybe<AssetUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Asset document */
  connect?: Maybe<AssetWhereUniqueInput>;
  /** Disconnect currently connected Asset document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected Asset document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type AssetUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: AssetWhereUniqueInput;
  /** Document to update */
  data: AssetUpdateInput;
};

export type AssetUpsertInput = {
  /** Create document if it didn't exist */
  create: AssetCreateInput;
  /** Update document if it exists */
  update: AssetUpdateInput;
};

export type AssetUpsertLocalizationInput = {
  update: AssetUpdateLocalizationDataInput;
  create: AssetCreateLocalizationDataInput;
  locale: Locale;
};

export type AssetUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: AssetWhereUniqueInput;
  /** Upsert data */
  data: AssetUpsertInput;
};

/** Identifies documents */
export type AssetWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<AssetWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  handle?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  handle_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  handle_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  handle_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  handle_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  handle_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  handle_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  handle_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  handle_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  handle_not_ends_with?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  fileName_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  fileName_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  fileName_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  fileName_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  fileName_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  fileName_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  fileName_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  fileName_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  fileName_not_ends_with?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  height_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  height_in?: Maybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  height_not_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  height_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  height_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  height_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  height_gte?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  width_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  width_in?: Maybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  width_not_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  width_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  width_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  width_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  width_gte?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  size_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  size_in?: Maybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  size_not_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  size_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  size_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  size_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  size_gte?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  mimeType_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  mimeType_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  mimeType_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  mimeType_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  mimeType_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  mimeType_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  mimeType_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  mimeType_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  mimeType_not_ends_with?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  linkExternalLink_every?: Maybe<ExternalLinkWhereInput>;
  linkExternalLink_some?: Maybe<ExternalLinkWhereInput>;
  linkExternalLink_none?: Maybe<ExternalLinkWhereInput>;
  galleryPlace_every?: Maybe<PlaceWhereInput>;
  galleryPlace_some?: Maybe<PlaceWhereInput>;
  galleryPlace_none?: Maybe<PlaceWhereInput>;
  scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
};

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['Long'];
};

/** categoria que define se um Guapuruvu está em local privado ou público */
export enum Category {
  Publico = 'Publico',
  Privado = 'Privado'
}

/** Representing a color value comprising of HEX, RGBA and css color values */
export type Color = {
  __typename?: 'Color';
  hex: Scalars['Hex'];
  rgba: Rgba;
  css: Scalars['String'];
};

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type ColorInput = {
  hex?: Maybe<Scalars['Hex']>;
  rgba?: Maybe<RgbaInput>;
};

export type ConnectPositionInput = {
  /** Connect document after specified document */
  after?: Maybe<Scalars['ID']>;
  /** Connect document before specified document */
  before?: Maybe<Scalars['ID']>;
  /** Connect document at first position */
  start?: Maybe<Scalars['Boolean']>;
  /** Connect document at last position */
  end?: Maybe<Scalars['Boolean']>;
};



export enum DocumentFileTypes {
  Jpg = 'jpg',
  Odp = 'odp',
  Ods = 'ods',
  Odt = 'odt',
  Png = 'png',
  Svg = 'svg',
  Txt = 'txt',
  Webp = 'webp',
  Docx = 'docx',
  Pdf = 'pdf',
  Html = 'html',
  Doc = 'doc',
  Xlsx = 'xlsx',
  Xls = 'xls',
  Pptx = 'pptx',
  Ppt = 'ppt'
}

export type DocumentOutputInput = {
  /**
   * Transforms a document into a desired file type.
   * See this matrix for format support:
   *
   * PDF:	jpg, odp, ods, odt, png, svg, txt, and webp
   * DOC:	docx, html, jpg, odt, pdf, png, svg, txt, and webp
   * DOCX:	doc, html, jpg, odt, pdf, png, svg, txt, and webp
   * ODT:	doc, docx, html, jpg, pdf, png, svg, txt, and webp
   * XLS:	jpg, pdf, ods, png, svg, xlsx, and webp
   * XLSX:	jpg, pdf, ods, png, svg, xls, and webp
   * ODS:	jpg, pdf, png, xls, svg, xlsx, and webp
   * PPT:	jpg, odp, pdf, png, svg, pptx, and webp
   * PPTX:	jpg, odp, pdf, png, svg, ppt, and webp
   * ODP:	jpg, pdf, png, ppt, svg, pptx, and webp
   * BMP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * GIF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * JPG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * PNG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * WEBP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * TIFF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * AI:	    jpg, odp, ods, odt, pdf, png, svg, and webp
   * PSD:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * SVG:	jpg, odp, ods, odt, pdf, png, and webp
   * HTML:	jpg, odt, pdf, svg, txt, and webp
   * TXT:	jpg, html, odt, pdf, svg, and webp
   */
  format?: Maybe<DocumentFileTypes>;
};

/** Transformations for Documents */
export type DocumentTransformationInput = {
  /** Changes the output for the file. */
  output?: Maybe<DocumentOutputInput>;
};

export type DocumentVersion = {
  __typename?: 'DocumentVersion';
  id: Scalars['ID'];
  stage: Stage;
  revision: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  data?: Maybe<Scalars['Json']>;
};

export type ExternalLink = Node & {
  __typename?: 'ExternalLink';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<ExternalLink>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  link?: Maybe<Asset>;
  scheduledIn: Array<ScheduledOperation>;
  /** List of ExternalLink versions */
  history: Array<Version>;
};


export type ExternalLinkDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type ExternalLinkCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type ExternalLinkUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type ExternalLinkPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type ExternalLinkLinkArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type ExternalLinkScheduledInArgs = {
  where?: Maybe<ScheduledOperationWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
};


export type ExternalLinkHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

export type ExternalLinkConnectInput = {
  /** Document to connect */
  where: ExternalLinkWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type ExternalLinkConnection = {
  __typename?: 'ExternalLinkConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<ExternalLinkEdge>;
  aggregate: Aggregate;
};

export type ExternalLinkCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  link?: Maybe<AssetCreateOneInlineInput>;
};

export type ExternalLinkCreateManyInlineInput = {
  /** Create and connect multiple existing ExternalLink documents */
  create?: Maybe<Array<ExternalLinkCreateInput>>;
  /** Connect multiple existing ExternalLink documents */
  connect?: Maybe<Array<ExternalLinkWhereUniqueInput>>;
};

export type ExternalLinkCreateOneInlineInput = {
  /** Create and connect one ExternalLink document */
  create?: Maybe<ExternalLinkCreateInput>;
  /** Connect one existing ExternalLink document */
  connect?: Maybe<ExternalLinkWhereUniqueInput>;
};

/** An edge in a connection. */
export type ExternalLinkEdge = {
  __typename?: 'ExternalLinkEdge';
  /** The item at the end of the edge. */
  node: ExternalLink;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type ExternalLinkManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ExternalLinkWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ExternalLinkWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ExternalLinkWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  link?: Maybe<AssetWhereInput>;
  scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
};

export enum ExternalLinkOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type ExternalLinkUpdateInput = {
  title?: Maybe<Scalars['String']>;
  link?: Maybe<AssetUpdateOneInlineInput>;
};

export type ExternalLinkUpdateManyInlineInput = {
  /** Create and connect multiple ExternalLink documents */
  create?: Maybe<Array<ExternalLinkCreateInput>>;
  /** Connect multiple existing ExternalLink documents */
  connect?: Maybe<Array<ExternalLinkConnectInput>>;
  /** Override currently-connected documents with multiple existing ExternalLink documents */
  set?: Maybe<Array<ExternalLinkWhereUniqueInput>>;
  /** Update multiple ExternalLink documents */
  update?: Maybe<Array<ExternalLinkUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ExternalLink documents */
  upsert?: Maybe<Array<ExternalLinkUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple ExternalLink documents */
  disconnect?: Maybe<Array<ExternalLinkWhereUniqueInput>>;
  /** Delete multiple ExternalLink documents */
  delete?: Maybe<Array<ExternalLinkWhereUniqueInput>>;
};

export type ExternalLinkUpdateManyInput = {
  /** No fields in updateMany data input */
  _?: Maybe<Scalars['String']>;
};

export type ExternalLinkUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: ExternalLinkWhereInput;
  /** Update many input */
  data: ExternalLinkUpdateManyInput;
};

export type ExternalLinkUpdateOneInlineInput = {
  /** Create and connect one ExternalLink document */
  create?: Maybe<ExternalLinkCreateInput>;
  /** Update single ExternalLink document */
  update?: Maybe<ExternalLinkUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ExternalLink document */
  upsert?: Maybe<ExternalLinkUpsertWithNestedWhereUniqueInput>;
  /** Connect existing ExternalLink document */
  connect?: Maybe<ExternalLinkWhereUniqueInput>;
  /** Disconnect currently connected ExternalLink document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected ExternalLink document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type ExternalLinkUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: ExternalLinkWhereUniqueInput;
  /** Document to update */
  data: ExternalLinkUpdateInput;
};

export type ExternalLinkUpsertInput = {
  /** Create document if it didn't exist */
  create: ExternalLinkCreateInput;
  /** Update document if it exists */
  update: ExternalLinkUpdateInput;
};

export type ExternalLinkUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: ExternalLinkWhereUniqueInput;
  /** Upsert data */
  data: ExternalLinkUpsertInput;
};

/** Identifies documents */
export type ExternalLinkWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ExternalLinkWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ExternalLinkWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ExternalLinkWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  link?: Maybe<AssetWhereInput>;
  scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
};

/** References ExternalLink record uniquely */
export type ExternalLinkWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
};


export enum ImageFit {
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  Clip = 'clip',
  /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
  Crop = 'crop',
  /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
  Scale = 'scale',
  /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
  Max = 'max'
}

export type ImageResizeInput = {
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width?: Maybe<Scalars['Int']>;
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height?: Maybe<Scalars['Int']>;
  /** The default value for the fit parameter is fit:clip. */
  fit?: Maybe<ImageFit>;
};

/** Transformations for Images */
export type ImageTransformationInput = {
  /** Resizes the image */
  resize?: Maybe<ImageResizeInput>;
};


/** Locale system enumeration */
export enum Locale {
  /** System locale */
  En = 'en'
}

/** Representing a geolocation point with latitude and longitude */
export type Location = {
  __typename?: 'Location';
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
  distance: Scalars['Float'];
};


/** Representing a geolocation point with latitude and longitude */
export type LocationDistanceArgs = {
  from: LocationInput;
};

/** Input for a geolocation point with latitude and longitude */
export type LocationInput = {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};


export type Mutation = {
  __typename?: 'Mutation';
  /**
   * Create one asset
   * @deprecated Asset mutations will be overhauled soon
   */
  createAsset?: Maybe<Asset>;
  /** Update one asset */
  updateAsset?: Maybe<Asset>;
  /** Delete one asset from _all_ existing stages. Returns deleted document. */
  deleteAsset?: Maybe<Asset>;
  /** Upsert one asset */
  upsertAsset?: Maybe<Asset>;
  /** Publish one asset */
  publishAsset?: Maybe<Asset>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAsset?: Maybe<Asset>;
  /** Update many Asset documents */
  updateManyAssetsConnection: AssetConnection;
  /** Delete many Asset documents, return deleted documents */
  deleteManyAssetsConnection: AssetConnection;
  /** Publish many Asset documents */
  publishManyAssetsConnection: AssetConnection;
  /** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAssetsConnection: AssetConnection;
  /**
   * Update many assets
   * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
   */
  updateManyAssets: BatchPayload;
  /**
   * Delete many Asset documents
   * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
   */
  deleteManyAssets: BatchPayload;
  /**
   * Publish many Asset documents
   * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
   */
  publishManyAssets: BatchPayload;
  /**
   * Unpublish many Asset documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
   */
  unpublishManyAssets: BatchPayload;
  /** Schedule to publish one asset */
  schedulePublishAsset?: Maybe<Asset>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishAsset?: Maybe<Asset>;
  /** Delete and return scheduled operation */
  deleteScheduledOperation?: Maybe<ScheduledOperation>;
  /** Create one scheduledRelease */
  createScheduledRelease?: Maybe<ScheduledRelease>;
  /** Update one scheduledRelease */
  updateScheduledRelease?: Maybe<ScheduledRelease>;
  /** Delete one scheduledRelease from _all_ existing stages. Returns deleted document. */
  deleteScheduledRelease?: Maybe<ScheduledRelease>;
  /** Create one externalLink */
  createExternalLink?: Maybe<ExternalLink>;
  /** Update one externalLink */
  updateExternalLink?: Maybe<ExternalLink>;
  /** Delete one externalLink from _all_ existing stages. Returns deleted document. */
  deleteExternalLink?: Maybe<ExternalLink>;
  /** Upsert one externalLink */
  upsertExternalLink?: Maybe<ExternalLink>;
  /** Publish one externalLink */
  publishExternalLink?: Maybe<ExternalLink>;
  /** Unpublish one externalLink from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishExternalLink?: Maybe<ExternalLink>;
  /** Update many ExternalLink documents */
  updateManyExternalLinksConnection: ExternalLinkConnection;
  /** Delete many ExternalLink documents, return deleted documents */
  deleteManyExternalLinksConnection: ExternalLinkConnection;
  /** Publish many ExternalLink documents */
  publishManyExternalLinksConnection: ExternalLinkConnection;
  /** Find many ExternalLink documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyExternalLinksConnection: ExternalLinkConnection;
  /**
   * Update many externalLinks
   * @deprecated Please use the new paginated many mutation (updateManyExternalLinksConnection)
   */
  updateManyExternalLinks: BatchPayload;
  /**
   * Delete many ExternalLink documents
   * @deprecated Please use the new paginated many mutation (deleteManyExternalLinksConnection)
   */
  deleteManyExternalLinks: BatchPayload;
  /**
   * Publish many ExternalLink documents
   * @deprecated Please use the new paginated many mutation (publishManyExternalLinksConnection)
   */
  publishManyExternalLinks: BatchPayload;
  /**
   * Unpublish many ExternalLink documents
   * @deprecated Please use the new paginated many mutation (unpublishManyExternalLinksConnection)
   */
  unpublishManyExternalLinks: BatchPayload;
  /** Schedule to publish one externalLink */
  schedulePublishExternalLink?: Maybe<ExternalLink>;
  /** Unpublish one externalLink from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishExternalLink?: Maybe<ExternalLink>;
  /** Create one page */
  createPage?: Maybe<Page>;
  /** Update one page */
  updatePage?: Maybe<Page>;
  /** Delete one page from _all_ existing stages. Returns deleted document. */
  deletePage?: Maybe<Page>;
  /** Upsert one page */
  upsertPage?: Maybe<Page>;
  /** Publish one page */
  publishPage?: Maybe<Page>;
  /** Unpublish one page from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishPage?: Maybe<Page>;
  /** Update many Page documents */
  updateManyPagesConnection: PageConnection;
  /** Delete many Page documents, return deleted documents */
  deleteManyPagesConnection: PageConnection;
  /** Publish many Page documents */
  publishManyPagesConnection: PageConnection;
  /** Find many Page documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyPagesConnection: PageConnection;
  /**
   * Update many pages
   * @deprecated Please use the new paginated many mutation (updateManyPagesConnection)
   */
  updateManyPages: BatchPayload;
  /**
   * Delete many Page documents
   * @deprecated Please use the new paginated many mutation (deleteManyPagesConnection)
   */
  deleteManyPages: BatchPayload;
  /**
   * Publish many Page documents
   * @deprecated Please use the new paginated many mutation (publishManyPagesConnection)
   */
  publishManyPages: BatchPayload;
  /**
   * Unpublish many Page documents
   * @deprecated Please use the new paginated many mutation (unpublishManyPagesConnection)
   */
  unpublishManyPages: BatchPayload;
  /** Schedule to publish one page */
  schedulePublishPage?: Maybe<Page>;
  /** Unpublish one page from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishPage?: Maybe<Page>;
  /** Create one place */
  createPlace?: Maybe<Place>;
  /** Update one place */
  updatePlace?: Maybe<Place>;
  /** Delete one place from _all_ existing stages. Returns deleted document. */
  deletePlace?: Maybe<Place>;
  /** Upsert one place */
  upsertPlace?: Maybe<Place>;
  /** Publish one place */
  publishPlace?: Maybe<Place>;
  /** Unpublish one place from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishPlace?: Maybe<Place>;
  /** Update many Place documents */
  updateManyPlacesConnection: PlaceConnection;
  /** Delete many Place documents, return deleted documents */
  deleteManyPlacesConnection: PlaceConnection;
  /** Publish many Place documents */
  publishManyPlacesConnection: PlaceConnection;
  /** Find many Place documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyPlacesConnection: PlaceConnection;
  /**
   * Update many places
   * @deprecated Please use the new paginated many mutation (updateManyPlacesConnection)
   */
  updateManyPlaces: BatchPayload;
  /**
   * Delete many Place documents
   * @deprecated Please use the new paginated many mutation (deleteManyPlacesConnection)
   */
  deleteManyPlaces: BatchPayload;
  /**
   * Publish many Place documents
   * @deprecated Please use the new paginated many mutation (publishManyPlacesConnection)
   */
  publishManyPlaces: BatchPayload;
  /**
   * Unpublish many Place documents
   * @deprecated Please use the new paginated many mutation (unpublishManyPlacesConnection)
   */
  unpublishManyPlaces: BatchPayload;
  /** Schedule to publish one place */
  schedulePublishPlace?: Maybe<Place>;
  /** Unpublish one place from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishPlace?: Maybe<Place>;
};


export type MutationCreateAssetArgs = {
  data: AssetCreateInput;
};


export type MutationUpdateAssetArgs = {
  where: AssetWhereUniqueInput;
  data: AssetUpdateInput;
};


export type MutationDeleteAssetArgs = {
  where: AssetWhereUniqueInput;
};


export type MutationUpsertAssetArgs = {
  where: AssetWhereUniqueInput;
  upsert: AssetUpsertInput;
};


export type MutationPublishAssetArgs = {
  where: AssetWhereUniqueInput;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
  to?: Array<Stage>;
};


export type MutationUnpublishAssetArgs = {
  where: AssetWhereUniqueInput;
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationUpdateManyAssetsConnectionArgs = {
  where?: Maybe<AssetManyWhereInput>;
  data: AssetUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyAssetsConnectionArgs = {
  where?: Maybe<AssetManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManyAssetsConnectionArgs = {
  where?: Maybe<AssetManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationUnpublishManyAssetsConnectionArgs = {
  where?: Maybe<AssetManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationUpdateManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>;
  data: AssetUpdateManyInput;
};


export type MutationDeleteManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>;
};


export type MutationPublishManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>;
  to?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationUnpublishManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>;
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationSchedulePublishAssetArgs = {
  where: AssetWhereUniqueInput;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  releaseAt?: Maybe<Scalars['DateTime']>;
  releaseId?: Maybe<Scalars['String']>;
};


export type MutationScheduleUnpublishAssetArgs = {
  where: AssetWhereUniqueInput;
  from?: Array<Stage>;
  releaseAt?: Maybe<Scalars['DateTime']>;
  releaseId?: Maybe<Scalars['String']>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationDeleteScheduledOperationArgs = {
  where: ScheduledOperationWhereUniqueInput;
};


export type MutationCreateScheduledReleaseArgs = {
  data: ScheduledReleaseCreateInput;
};


export type MutationUpdateScheduledReleaseArgs = {
  where: ScheduledReleaseWhereUniqueInput;
  data: ScheduledReleaseUpdateInput;
};


export type MutationDeleteScheduledReleaseArgs = {
  where: ScheduledReleaseWhereUniqueInput;
};


export type MutationCreateExternalLinkArgs = {
  data: ExternalLinkCreateInput;
};


export type MutationUpdateExternalLinkArgs = {
  where: ExternalLinkWhereUniqueInput;
  data: ExternalLinkUpdateInput;
};


export type MutationDeleteExternalLinkArgs = {
  where: ExternalLinkWhereUniqueInput;
};


export type MutationUpsertExternalLinkArgs = {
  where: ExternalLinkWhereUniqueInput;
  upsert: ExternalLinkUpsertInput;
};


export type MutationPublishExternalLinkArgs = {
  where: ExternalLinkWhereUniqueInput;
  to?: Array<Stage>;
};


export type MutationUnpublishExternalLinkArgs = {
  where: ExternalLinkWhereUniqueInput;
  from?: Array<Stage>;
};


export type MutationUpdateManyExternalLinksConnectionArgs = {
  where?: Maybe<ExternalLinkManyWhereInput>;
  data: ExternalLinkUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyExternalLinksConnectionArgs = {
  where?: Maybe<ExternalLinkManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManyExternalLinksConnectionArgs = {
  where?: Maybe<ExternalLinkManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUnpublishManyExternalLinksConnectionArgs = {
  where?: Maybe<ExternalLinkManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUpdateManyExternalLinksArgs = {
  where?: Maybe<ExternalLinkManyWhereInput>;
  data: ExternalLinkUpdateManyInput;
};


export type MutationDeleteManyExternalLinksArgs = {
  where?: Maybe<ExternalLinkManyWhereInput>;
};


export type MutationPublishManyExternalLinksArgs = {
  where?: Maybe<ExternalLinkManyWhereInput>;
  to?: Array<Stage>;
};


export type MutationUnpublishManyExternalLinksArgs = {
  where?: Maybe<ExternalLinkManyWhereInput>;
  from?: Array<Stage>;
};


export type MutationSchedulePublishExternalLinkArgs = {
  where: ExternalLinkWhereUniqueInput;
  to?: Array<Stage>;
  releaseAt?: Maybe<Scalars['DateTime']>;
  releaseId?: Maybe<Scalars['String']>;
};


export type MutationScheduleUnpublishExternalLinkArgs = {
  where: ExternalLinkWhereUniqueInput;
  from?: Array<Stage>;
  releaseAt?: Maybe<Scalars['DateTime']>;
  releaseId?: Maybe<Scalars['String']>;
};


export type MutationCreatePageArgs = {
  data: PageCreateInput;
};


export type MutationUpdatePageArgs = {
  where: PageWhereUniqueInput;
  data: PageUpdateInput;
};


export type MutationDeletePageArgs = {
  where: PageWhereUniqueInput;
};


export type MutationUpsertPageArgs = {
  where: PageWhereUniqueInput;
  upsert: PageUpsertInput;
};


export type MutationPublishPageArgs = {
  where: PageWhereUniqueInput;
  to?: Array<Stage>;
};


export type MutationUnpublishPageArgs = {
  where: PageWhereUniqueInput;
  from?: Array<Stage>;
};


export type MutationUpdateManyPagesConnectionArgs = {
  where?: Maybe<PageManyWhereInput>;
  data: PageUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyPagesConnectionArgs = {
  where?: Maybe<PageManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManyPagesConnectionArgs = {
  where?: Maybe<PageManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUnpublishManyPagesConnectionArgs = {
  where?: Maybe<PageManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUpdateManyPagesArgs = {
  where?: Maybe<PageManyWhereInput>;
  data: PageUpdateManyInput;
};


export type MutationDeleteManyPagesArgs = {
  where?: Maybe<PageManyWhereInput>;
};


export type MutationPublishManyPagesArgs = {
  where?: Maybe<PageManyWhereInput>;
  to?: Array<Stage>;
};


export type MutationUnpublishManyPagesArgs = {
  where?: Maybe<PageManyWhereInput>;
  from?: Array<Stage>;
};


export type MutationSchedulePublishPageArgs = {
  where: PageWhereUniqueInput;
  to?: Array<Stage>;
  releaseAt?: Maybe<Scalars['DateTime']>;
  releaseId?: Maybe<Scalars['String']>;
};


export type MutationScheduleUnpublishPageArgs = {
  where: PageWhereUniqueInput;
  from?: Array<Stage>;
  releaseAt?: Maybe<Scalars['DateTime']>;
  releaseId?: Maybe<Scalars['String']>;
};


export type MutationCreatePlaceArgs = {
  data: PlaceCreateInput;
};


export type MutationUpdatePlaceArgs = {
  where: PlaceWhereUniqueInput;
  data: PlaceUpdateInput;
};


export type MutationDeletePlaceArgs = {
  where: PlaceWhereUniqueInput;
};


export type MutationUpsertPlaceArgs = {
  where: PlaceWhereUniqueInput;
  upsert: PlaceUpsertInput;
};


export type MutationPublishPlaceArgs = {
  where: PlaceWhereUniqueInput;
  to?: Array<Stage>;
};


export type MutationUnpublishPlaceArgs = {
  where: PlaceWhereUniqueInput;
  from?: Array<Stage>;
};


export type MutationUpdateManyPlacesConnectionArgs = {
  where?: Maybe<PlaceManyWhereInput>;
  data: PlaceUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyPlacesConnectionArgs = {
  where?: Maybe<PlaceManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManyPlacesConnectionArgs = {
  where?: Maybe<PlaceManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUnpublishManyPlacesConnectionArgs = {
  where?: Maybe<PlaceManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUpdateManyPlacesArgs = {
  where?: Maybe<PlaceManyWhereInput>;
  data: PlaceUpdateManyInput;
};


export type MutationDeleteManyPlacesArgs = {
  where?: Maybe<PlaceManyWhereInput>;
};


export type MutationPublishManyPlacesArgs = {
  where?: Maybe<PlaceManyWhereInput>;
  to?: Array<Stage>;
};


export type MutationUnpublishManyPlacesArgs = {
  where?: Maybe<PlaceManyWhereInput>;
  from?: Array<Stage>;
};


export type MutationSchedulePublishPlaceArgs = {
  where: PlaceWhereUniqueInput;
  to?: Array<Stage>;
  releaseAt?: Maybe<Scalars['DateTime']>;
  releaseId?: Maybe<Scalars['String']>;
};


export type MutationScheduleUnpublishPlaceArgs = {
  where: PlaceWhereUniqueInput;
  from?: Array<Stage>;
  releaseAt?: Maybe<Scalars['DateTime']>;
  releaseId?: Maybe<Scalars['String']>;
};

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID'];
  /** The Stage of an object */
  stage: Stage;
};

export type Page = Node & {
  __typename?: 'Page';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<Page>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  heading?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  body: RichText;
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** List of Page versions */
  history: Array<Version>;
};


export type PageDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type PageCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type PageUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type PagePublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type PageScheduledInArgs = {
  where?: Maybe<ScheduledOperationWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
};


export type PageHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

export type PageConnectInput = {
  /** Document to connect */
  where: PageWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type PageConnection = {
  __typename?: 'PageConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<PageEdge>;
  aggregate: Aggregate;
};

export type PageCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  heading?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  body: Scalars['RichTextAST'];
};

export type PageCreateManyInlineInput = {
  /** Create and connect multiple existing Page documents */
  create?: Maybe<Array<PageCreateInput>>;
  /** Connect multiple existing Page documents */
  connect?: Maybe<Array<PageWhereUniqueInput>>;
};

export type PageCreateOneInlineInput = {
  /** Create and connect one Page document */
  create?: Maybe<PageCreateInput>;
  /** Connect one existing Page document */
  connect?: Maybe<PageWhereUniqueInput>;
};

/** An edge in a connection. */
export type PageEdge = {
  __typename?: 'PageEdge';
  /** The item at the end of the edge. */
  node: Page;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** Number of items in the current page. */
  pageSize?: Maybe<Scalars['Int']>;
};

/** Identifies documents */
export type PageManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PageWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  heading?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  heading_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  heading_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  heading_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  heading_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  heading_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  heading_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  heading_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  heading_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  heading_not_ends_with?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  slug_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  slug_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  slug_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
};

export enum PageOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC'
}

export type PageUpdateInput = {
  heading?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['RichTextAST']>;
};

export type PageUpdateManyInlineInput = {
  /** Create and connect multiple Page documents */
  create?: Maybe<Array<PageCreateInput>>;
  /** Connect multiple existing Page documents */
  connect?: Maybe<Array<PageConnectInput>>;
  /** Override currently-connected documents with multiple existing Page documents */
  set?: Maybe<Array<PageWhereUniqueInput>>;
  /** Update multiple Page documents */
  update?: Maybe<Array<PageUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Page documents */
  upsert?: Maybe<Array<PageUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Page documents */
  disconnect?: Maybe<Array<PageWhereUniqueInput>>;
  /** Delete multiple Page documents */
  delete?: Maybe<Array<PageWhereUniqueInput>>;
};

export type PageUpdateManyInput = {
  heading?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['RichTextAST']>;
};

export type PageUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: PageWhereInput;
  /** Update many input */
  data: PageUpdateManyInput;
};

export type PageUpdateOneInlineInput = {
  /** Create and connect one Page document */
  create?: Maybe<PageCreateInput>;
  /** Update single Page document */
  update?: Maybe<PageUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Page document */
  upsert?: Maybe<PageUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Page document */
  connect?: Maybe<PageWhereUniqueInput>;
  /** Disconnect currently connected Page document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected Page document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type PageUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: PageWhereUniqueInput;
  /** Document to update */
  data: PageUpdateInput;
};

export type PageUpsertInput = {
  /** Create document if it didn't exist */
  create: PageCreateInput;
  /** Update document if it exists */
  update: PageUpdateInput;
};

export type PageUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: PageWhereUniqueInput;
  /** Upsert data */
  data: PageUpsertInput;
};

/** Identifies documents */
export type PageWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PageWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  heading?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  heading_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  heading_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  heading_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  heading_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  heading_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  heading_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  heading_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  heading_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  heading_not_ends_with?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  slug_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  slug_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  slug_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
};

/** References Page record uniquely */
export type PageWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  slug?: Maybe<Scalars['String']>;
};

export type Place = Node & {
  __typename?: 'Place';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<Place>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  slug: Scalars['String'];
  /** Localização numérica - longitude e latitude */
  location_numeric?: Maybe<Scalars['String']>;
  adress?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  age?: Maybe<Scalars['String']>;
  period?: Maybe<Scalars['String']>;
  location: Location;
  description?: Maybe<RichText>;
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  gallery: Array<Asset>;
  tag: Array<Category>;
  scheduledIn: Array<ScheduledOperation>;
  /** List of Place versions */
  history: Array<Version>;
};


export type PlaceDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type PlaceCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type PlaceUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type PlacePublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type PlaceGalleryArgs = {
  where?: Maybe<AssetWhereInput>;
  orderBy?: Maybe<AssetOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
};


export type PlaceScheduledInArgs = {
  where?: Maybe<ScheduledOperationWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
};


export type PlaceHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

export type PlaceConnectInput = {
  /** Document to connect */
  where: PlaceWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type PlaceConnection = {
  __typename?: 'PlaceConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<PlaceEdge>;
  aggregate: Aggregate;
};

export type PlaceCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  slug: Scalars['String'];
  location_numeric?: Maybe<Scalars['String']>;
  adress?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  age?: Maybe<Scalars['String']>;
  period?: Maybe<Scalars['String']>;
  location: LocationInput;
  description?: Maybe<Scalars['RichTextAST']>;
  gallery: AssetCreateManyInlineInput;
  tag?: Maybe<Array<Category>>;
};

export type PlaceCreateManyInlineInput = {
  /** Create and connect multiple existing Place documents */
  create?: Maybe<Array<PlaceCreateInput>>;
  /** Connect multiple existing Place documents */
  connect?: Maybe<Array<PlaceWhereUniqueInput>>;
};

export type PlaceCreateOneInlineInput = {
  /** Create and connect one Place document */
  create?: Maybe<PlaceCreateInput>;
  /** Connect one existing Place document */
  connect?: Maybe<PlaceWhereUniqueInput>;
};

/** An edge in a connection. */
export type PlaceEdge = {
  __typename?: 'PlaceEdge';
  /** The item at the end of the edge. */
  node: Place;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type PlaceManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PlaceWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PlaceWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PlaceWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  slug_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  slug_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  slug_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: Maybe<Scalars['String']>;
  location_numeric?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  location_numeric_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  location_numeric_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  location_numeric_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  location_numeric_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  location_numeric_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  location_numeric_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  location_numeric_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  location_numeric_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  location_numeric_not_ends_with?: Maybe<Scalars['String']>;
  adress?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  adress_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  adress_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  adress_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  adress_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  adress_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  adress_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  adress_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  adress_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  adress_not_ends_with?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  state_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  state_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  state_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  state_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  state_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  state_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  state_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  state_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  state_not_ends_with?: Maybe<Scalars['String']>;
  age?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  age_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  age_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  age_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  age_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  age_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  age_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  age_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  age_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  age_not_ends_with?: Maybe<Scalars['String']>;
  period?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  period_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  period_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  period_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  period_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  period_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  period_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  period_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  period_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  period_not_ends_with?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  gallery_every?: Maybe<AssetWhereInput>;
  gallery_some?: Maybe<AssetWhereInput>;
  gallery_none?: Maybe<AssetWhereInput>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  tag?: Maybe<Array<Category>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  tag_not?: Maybe<Array<Category>>;
  /** Matches if the field array contains *all* items provided to the filter */
  tag_contains_all?: Maybe<Array<Category>>;
  /** Matches if the field array contains at least one item provided to the filter */
  tag_contains_some?: Maybe<Array<Category>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  tag_contains_none?: Maybe<Array<Category>>;
  scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
};

export enum PlaceOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  LocationNumericAsc = 'location_numeric_ASC',
  LocationNumericDesc = 'location_numeric_DESC',
  AdressAsc = 'adress_ASC',
  AdressDesc = 'adress_DESC',
  StateAsc = 'state_ASC',
  StateDesc = 'state_DESC',
  AgeAsc = 'age_ASC',
  AgeDesc = 'age_DESC',
  PeriodAsc = 'period_ASC',
  PeriodDesc = 'period_DESC',
  TagAsc = 'tag_ASC',
  TagDesc = 'tag_DESC'
}

export type PlaceUpdateInput = {
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  location_numeric?: Maybe<Scalars['String']>;
  adress?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  age?: Maybe<Scalars['String']>;
  period?: Maybe<Scalars['String']>;
  location?: Maybe<LocationInput>;
  description?: Maybe<Scalars['RichTextAST']>;
  gallery?: Maybe<AssetUpdateManyInlineInput>;
  tag?: Maybe<Array<Category>>;
};

export type PlaceUpdateManyInlineInput = {
  /** Create and connect multiple Place documents */
  create?: Maybe<Array<PlaceCreateInput>>;
  /** Connect multiple existing Place documents */
  connect?: Maybe<Array<PlaceConnectInput>>;
  /** Override currently-connected documents with multiple existing Place documents */
  set?: Maybe<Array<PlaceWhereUniqueInput>>;
  /** Update multiple Place documents */
  update?: Maybe<Array<PlaceUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Place documents */
  upsert?: Maybe<Array<PlaceUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Place documents */
  disconnect?: Maybe<Array<PlaceWhereUniqueInput>>;
  /** Delete multiple Place documents */
  delete?: Maybe<Array<PlaceWhereUniqueInput>>;
};

export type PlaceUpdateManyInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['RichTextAST']>;
  tag?: Maybe<Array<Category>>;
};

export type PlaceUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: PlaceWhereInput;
  /** Update many input */
  data: PlaceUpdateManyInput;
};

export type PlaceUpdateOneInlineInput = {
  /** Create and connect one Place document */
  create?: Maybe<PlaceCreateInput>;
  /** Update single Place document */
  update?: Maybe<PlaceUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Place document */
  upsert?: Maybe<PlaceUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Place document */
  connect?: Maybe<PlaceWhereUniqueInput>;
  /** Disconnect currently connected Place document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected Place document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type PlaceUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: PlaceWhereUniqueInput;
  /** Document to update */
  data: PlaceUpdateInput;
};

export type PlaceUpsertInput = {
  /** Create document if it didn't exist */
  create: PlaceCreateInput;
  /** Update document if it exists */
  update: PlaceUpdateInput;
};

export type PlaceUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: PlaceWhereUniqueInput;
  /** Upsert data */
  data: PlaceUpsertInput;
};

/** Identifies documents */
export type PlaceWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PlaceWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PlaceWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PlaceWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  slug_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  slug_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  slug_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: Maybe<Scalars['String']>;
  location_numeric?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  location_numeric_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  location_numeric_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  location_numeric_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  location_numeric_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  location_numeric_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  location_numeric_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  location_numeric_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  location_numeric_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  location_numeric_not_ends_with?: Maybe<Scalars['String']>;
  adress?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  adress_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  adress_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  adress_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  adress_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  adress_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  adress_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  adress_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  adress_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  adress_not_ends_with?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  state_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  state_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  state_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  state_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  state_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  state_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  state_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  state_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  state_not_ends_with?: Maybe<Scalars['String']>;
  age?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  age_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  age_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  age_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  age_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  age_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  age_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  age_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  age_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  age_not_ends_with?: Maybe<Scalars['String']>;
  period?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  period_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  period_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  period_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  period_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  period_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  period_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  period_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  period_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  period_not_ends_with?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  gallery_every?: Maybe<AssetWhereInput>;
  gallery_some?: Maybe<AssetWhereInput>;
  gallery_none?: Maybe<AssetWhereInput>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  tag?: Maybe<Array<Category>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  tag_not?: Maybe<Array<Category>>;
  /** Matches if the field array contains *all* items provided to the filter */
  tag_contains_all?: Maybe<Array<Category>>;
  /** Matches if the field array contains at least one item provided to the filter */
  tag_contains_some?: Maybe<Array<Category>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  tag_contains_none?: Maybe<Array<Category>>;
  scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
};

/** References Place record uniquely */
export type PlaceWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  slug?: Maybe<Scalars['String']>;
  location_numeric?: Maybe<Scalars['String']>;
  adress?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  age?: Maybe<Scalars['String']>;
  period?: Maybe<Scalars['String']>;
};

export type PublishLocaleInput = {
  /** Locales to publish */
  locale: Locale;
  /** Stages to publish selected locales to */
  stages: Array<Stage>;
};

export type Query = {
  __typename?: 'Query';
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Retrieve multiple users */
  users: Array<User>;
  /** Retrieve a single user */
  user?: Maybe<User>;
  /** Retrieve multiple users using the Relay connection interface */
  usersConnection: UserConnection;
  /** Retrieve multiple assets */
  assets: Array<Asset>;
  /** Retrieve a single asset */
  asset?: Maybe<Asset>;
  /** Retrieve multiple assets using the Relay connection interface */
  assetsConnection: AssetConnection;
  /** Retrieve document version */
  assetVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple scheduledOperations */
  scheduledOperations: Array<ScheduledOperation>;
  /** Retrieve a single scheduledOperation */
  scheduledOperation?: Maybe<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations using the Relay connection interface */
  scheduledOperationsConnection: ScheduledOperationConnection;
  /** Retrieve multiple scheduledReleases */
  scheduledReleases: Array<ScheduledRelease>;
  /** Retrieve a single scheduledRelease */
  scheduledRelease?: Maybe<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases using the Relay connection interface */
  scheduledReleasesConnection: ScheduledReleaseConnection;
  /** Retrieve multiple externalLinks */
  externalLinks: Array<ExternalLink>;
  /** Retrieve a single externalLink */
  externalLink?: Maybe<ExternalLink>;
  /** Retrieve multiple externalLinks using the Relay connection interface */
  externalLinksConnection: ExternalLinkConnection;
  /** Retrieve document version */
  externalLinkVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple pages */
  pages: Array<Page>;
  /** Retrieve a single page */
  page?: Maybe<Page>;
  /** Retrieve multiple pages using the Relay connection interface */
  pagesConnection: PageConnection;
  /** Retrieve document version */
  pageVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple places */
  places: Array<Place>;
  /** Retrieve a single place */
  place?: Maybe<Place>;
  /** Retrieve multiple places using the Relay connection interface */
  placesConnection: PlaceConnection;
  /** Retrieve document version */
  placeVersion?: Maybe<DocumentVersion>;
};


export type QueryNodeArgs = {
  id: Scalars['ID'];
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryUsersArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<UserOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryUsersConnectionArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<UserOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryAssetsArgs = {
  where?: Maybe<AssetWhereInput>;
  orderBy?: Maybe<AssetOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryAssetArgs = {
  where: AssetWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryAssetsConnectionArgs = {
  where?: Maybe<AssetWhereInput>;
  orderBy?: Maybe<AssetOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryAssetVersionArgs = {
  where: VersionWhereInput;
};


export type QueryScheduledOperationsArgs = {
  where?: Maybe<ScheduledOperationWhereInput>;
  orderBy?: Maybe<ScheduledOperationOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryScheduledOperationArgs = {
  where: ScheduledOperationWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryScheduledOperationsConnectionArgs = {
  where?: Maybe<ScheduledOperationWhereInput>;
  orderBy?: Maybe<ScheduledOperationOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryScheduledReleasesArgs = {
  where?: Maybe<ScheduledReleaseWhereInput>;
  orderBy?: Maybe<ScheduledReleaseOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryScheduledReleaseArgs = {
  where: ScheduledReleaseWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryScheduledReleasesConnectionArgs = {
  where?: Maybe<ScheduledReleaseWhereInput>;
  orderBy?: Maybe<ScheduledReleaseOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryExternalLinksArgs = {
  where?: Maybe<ExternalLinkWhereInput>;
  orderBy?: Maybe<ExternalLinkOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryExternalLinkArgs = {
  where: ExternalLinkWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryExternalLinksConnectionArgs = {
  where?: Maybe<ExternalLinkWhereInput>;
  orderBy?: Maybe<ExternalLinkOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryExternalLinkVersionArgs = {
  where: VersionWhereInput;
};


export type QueryPagesArgs = {
  where?: Maybe<PageWhereInput>;
  orderBy?: Maybe<PageOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryPageArgs = {
  where: PageWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryPagesConnectionArgs = {
  where?: Maybe<PageWhereInput>;
  orderBy?: Maybe<PageOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryPageVersionArgs = {
  where: VersionWhereInput;
};


export type QueryPlacesArgs = {
  where?: Maybe<PlaceWhereInput>;
  orderBy?: Maybe<PlaceOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryPlaceArgs = {
  where: PlaceWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryPlacesConnectionArgs = {
  where?: Maybe<PlaceWhereInput>;
  orderBy?: Maybe<PlaceOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryPlaceVersionArgs = {
  where: VersionWhereInput;
};

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type Rgba = {
  __typename?: 'RGBA';
  r: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  b: Scalars['RGBAHue'];
  a: Scalars['RGBATransparency'];
};


/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RgbaInput = {
  r: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  b: Scalars['RGBAHue'];
  a: Scalars['RGBATransparency'];
};


/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type RichText = {
  __typename?: 'RichText';
  /** Returns AST representation */
  raw: Scalars['RichTextAST'];
  /** Returns HTMl representation */
  html: Scalars['String'];
  /** Returns Markdown representation */
  markdown: Scalars['String'];
  /** Returns plain-text contents of RichText */
  text: Scalars['String'];
};


/** Scheduled Operation system model */
export type ScheduledOperation = Node & {
  __typename?: 'ScheduledOperation';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledOperation>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** Operation description */
  description?: Maybe<Scalars['String']>;
  /** Operation error message */
  errorMessage?: Maybe<Scalars['String']>;
  /** Raw operation payload including all details, this field is subject to change */
  rawPayload: Scalars['Json'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** The release this operation is scheduled for */
  release?: Maybe<ScheduledRelease>;
  /** operation Status */
  status: ScheduledOperationStatus;
  affectedDocuments: Array<ScheduledOperationAffectedDocument>;
};


/** Scheduled Operation system model */
export type ScheduledOperationDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


/** Scheduled Operation system model */
export type ScheduledOperationCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationReleaseArgs = {
  locales?: Maybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationAffectedDocumentsArgs = {
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
};

export type ScheduledOperationAffectedDocument = Asset | ExternalLink | Page | Place;

export type ScheduledOperationConnectInput = {
  /** Document to connect */
  where: ScheduledOperationWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type ScheduledOperationConnection = {
  __typename?: 'ScheduledOperationConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<ScheduledOperationEdge>;
  aggregate: Aggregate;
};

export type ScheduledOperationCreateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: Maybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationCreateOneInlineInput = {
  /** Connect one existing ScheduledOperation document */
  connect?: Maybe<ScheduledOperationWhereUniqueInput>;
};

/** An edge in a connection. */
export type ScheduledOperationEdge = {
  __typename?: 'ScheduledOperationEdge';
  /** The item at the end of the edge. */
  node: ScheduledOperation;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type ScheduledOperationManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ScheduledOperationWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  description_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  description_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  description_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  description_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: Maybe<Scalars['String']>;
  errorMessage?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  errorMessage_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  errorMessage_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  release?: Maybe<ScheduledReleaseWhereInput>;
  status?: Maybe<ScheduledOperationStatus>;
  /** All values that are not equal to given value. */
  status_not?: Maybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: Maybe<Array<ScheduledOperationStatus>>;
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<Array<ScheduledOperationStatus>>;
};

export enum ScheduledOperationOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC'
}

/** System Scheduled Operation Status */
export enum ScheduledOperationStatus {
  Pending = 'PENDING',
  InProgress = 'IN_PROGRESS',
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  Canceled = 'CANCELED'
}

export type ScheduledOperationUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: Maybe<Array<ScheduledOperationConnectInput>>;
  /** Override currently-connected documents with multiple existing ScheduledOperation documents */
  set?: Maybe<Array<ScheduledOperationWhereUniqueInput>>;
  /** Disconnect multiple ScheduledOperation documents */
  disconnect?: Maybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationUpdateOneInlineInput = {
  /** Connect existing ScheduledOperation document */
  connect?: Maybe<ScheduledOperationWhereUniqueInput>;
  /** Disconnect currently connected ScheduledOperation document */
  disconnect?: Maybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type ScheduledOperationWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ScheduledOperationWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  description_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  description_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  description_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  description_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: Maybe<Scalars['String']>;
  errorMessage?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  errorMessage_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  errorMessage_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  release?: Maybe<ScheduledReleaseWhereInput>;
  status?: Maybe<ScheduledOperationStatus>;
  /** All values that are not equal to given value. */
  status_not?: Maybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: Maybe<Array<ScheduledOperationStatus>>;
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<Array<ScheduledOperationStatus>>;
};

/** References ScheduledOperation record uniquely */
export type ScheduledOperationWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

/** Scheduled Release system model */
export type ScheduledRelease = Node & {
  __typename?: 'ScheduledRelease';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledRelease>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** Release Title */
  title?: Maybe<Scalars['String']>;
  /** Release description */
  description?: Maybe<Scalars['String']>;
  /** Release error message */
  errorMessage?: Maybe<Scalars['String']>;
  /** Whether scheduled release should be run */
  isActive: Scalars['Boolean'];
  /** Whether scheduled release is implicit */
  isImplicit: Scalars['Boolean'];
  /** Release date and time */
  releaseAt?: Maybe<Scalars['DateTime']>;
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** Operations to run with this release */
  operations: Array<ScheduledOperation>;
  /** Release Status */
  status: ScheduledReleaseStatus;
};


/** Scheduled Release system model */
export type ScheduledReleaseDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


/** Scheduled Release system model */
export type ScheduledReleaseCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


/** Scheduled Release system model */
export type ScheduledReleaseUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


/** Scheduled Release system model */
export type ScheduledReleasePublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


/** Scheduled Release system model */
export type ScheduledReleaseOperationsArgs = {
  where?: Maybe<ScheduledOperationWhereInput>;
  orderBy?: Maybe<ScheduledOperationOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
};

export type ScheduledReleaseConnectInput = {
  /** Document to connect */
  where: ScheduledReleaseWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type ScheduledReleaseConnection = {
  __typename?: 'ScheduledReleaseConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<ScheduledReleaseEdge>;
  aggregate: Aggregate;
};

export type ScheduledReleaseCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  errorMessage?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  releaseAt?: Maybe<Scalars['DateTime']>;
};

export type ScheduledReleaseCreateManyInlineInput = {
  /** Create and connect multiple existing ScheduledRelease documents */
  create?: Maybe<Array<ScheduledReleaseCreateInput>>;
  /** Connect multiple existing ScheduledRelease documents */
  connect?: Maybe<Array<ScheduledReleaseWhereUniqueInput>>;
};

export type ScheduledReleaseCreateOneInlineInput = {
  /** Create and connect one ScheduledRelease document */
  create?: Maybe<ScheduledReleaseCreateInput>;
  /** Connect one existing ScheduledRelease document */
  connect?: Maybe<ScheduledReleaseWhereUniqueInput>;
};

/** An edge in a connection. */
export type ScheduledReleaseEdge = {
  __typename?: 'ScheduledReleaseEdge';
  /** The item at the end of the edge. */
  node: ScheduledRelease;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type ScheduledReleaseManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ScheduledReleaseWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  description_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  description_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  description_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  description_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: Maybe<Scalars['String']>;
  errorMessage?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  errorMessage_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  errorMessage_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: Maybe<Scalars['Boolean']>;
  isImplicit?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isImplicit_not?: Maybe<Scalars['Boolean']>;
  releaseAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  releaseAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  releaseAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  releaseAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  releaseAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  operations_every?: Maybe<ScheduledOperationWhereInput>;
  operations_some?: Maybe<ScheduledOperationWhereInput>;
  operations_none?: Maybe<ScheduledOperationWhereInput>;
  status?: Maybe<ScheduledReleaseStatus>;
  /** All values that are not equal to given value. */
  status_not?: Maybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: Maybe<Array<ScheduledReleaseStatus>>;
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<Array<ScheduledReleaseStatus>>;
};

export enum ScheduledReleaseOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  IsImplicitAsc = 'isImplicit_ASC',
  IsImplicitDesc = 'isImplicit_DESC',
  ReleaseAtAsc = 'releaseAt_ASC',
  ReleaseAtDesc = 'releaseAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC'
}

/** System Scheduled Release Status */
export enum ScheduledReleaseStatus {
  Pending = 'PENDING',
  InProgress = 'IN_PROGRESS',
  Completed = 'COMPLETED',
  Failed = 'FAILED'
}

export type ScheduledReleaseUpdateInput = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  errorMessage?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  releaseAt?: Maybe<Scalars['DateTime']>;
};

export type ScheduledReleaseUpdateManyInlineInput = {
  /** Create and connect multiple ScheduledRelease documents */
  create?: Maybe<Array<ScheduledReleaseCreateInput>>;
  /** Connect multiple existing ScheduledRelease documents */
  connect?: Maybe<Array<ScheduledReleaseConnectInput>>;
  /** Override currently-connected documents with multiple existing ScheduledRelease documents */
  set?: Maybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Update multiple ScheduledRelease documents */
  update?: Maybe<Array<ScheduledReleaseUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ScheduledRelease documents */
  upsert?: Maybe<Array<ScheduledReleaseUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple ScheduledRelease documents */
  disconnect?: Maybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Delete multiple ScheduledRelease documents */
  delete?: Maybe<Array<ScheduledReleaseWhereUniqueInput>>;
};

export type ScheduledReleaseUpdateManyInput = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  errorMessage?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  releaseAt?: Maybe<Scalars['DateTime']>;
};

export type ScheduledReleaseUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: ScheduledReleaseWhereInput;
  /** Update many input */
  data: ScheduledReleaseUpdateManyInput;
};

export type ScheduledReleaseUpdateOneInlineInput = {
  /** Create and connect one ScheduledRelease document */
  create?: Maybe<ScheduledReleaseCreateInput>;
  /** Update single ScheduledRelease document */
  update?: Maybe<ScheduledReleaseUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ScheduledRelease document */
  upsert?: Maybe<ScheduledReleaseUpsertWithNestedWhereUniqueInput>;
  /** Connect existing ScheduledRelease document */
  connect?: Maybe<ScheduledReleaseWhereUniqueInput>;
  /** Disconnect currently connected ScheduledRelease document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected ScheduledRelease document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type ScheduledReleaseUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
  /** Document to update */
  data: ScheduledReleaseUpdateInput;
};

export type ScheduledReleaseUpsertInput = {
  /** Create document if it didn't exist */
  create: ScheduledReleaseCreateInput;
  /** Update document if it exists */
  update: ScheduledReleaseUpdateInput;
};

export type ScheduledReleaseUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
  /** Upsert data */
  data: ScheduledReleaseUpsertInput;
};

/** Identifies documents */
export type ScheduledReleaseWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ScheduledReleaseWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  description_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  description_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  description_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  description_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: Maybe<Scalars['String']>;
  errorMessage?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  errorMessage_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  errorMessage_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: Maybe<Scalars['Boolean']>;
  isImplicit?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isImplicit_not?: Maybe<Scalars['Boolean']>;
  releaseAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  releaseAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  releaseAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  releaseAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  releaseAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  operations_every?: Maybe<ScheduledOperationWhereInput>;
  operations_some?: Maybe<ScheduledOperationWhereInput>;
  operations_none?: Maybe<ScheduledOperationWhereInput>;
  status?: Maybe<ScheduledReleaseStatus>;
  /** All values that are not equal to given value. */
  status_not?: Maybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: Maybe<Array<ScheduledReleaseStatus>>;
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<Array<ScheduledReleaseStatus>>;
};

/** References ScheduledRelease record uniquely */
export type ScheduledReleaseWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

/** Stage system enumeration */
export enum Stage {
  /** The Draft is the default stage for all your content. */
  Draft = 'DRAFT',
  /** The Published stage is where you can publish your content to. */
  Published = 'PUBLISHED'
}

export enum SystemDateTimeFieldVariation {
  Base = 'BASE',
  Localization = 'LOCALIZATION',
  Combined = 'COMBINED'
}

export type UnpublishLocaleInput = {
  /** Locales to unpublish */
  locale: Locale;
  /** Stages to unpublish selected locales from */
  stages: Array<Stage>;
};

/** User system model */
export type User = Node & {
  __typename?: 'User';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<User>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** The username */
  name: Scalars['String'];
  /** Profile Picture url */
  picture?: Maybe<Scalars['String']>;
  /** Flag to determine if user is active or not */
  isActive: Scalars['Boolean'];
  /** User Kind. Can be either MEMBER, PAT or PUBLIC */
  kind: UserKind;
};


/** User system model */
export type UserDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};

export type UserConnectInput = {
  /** Document to connect */
  where: UserWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type UserConnection = {
  __typename?: 'UserConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<UserEdge>;
  aggregate: Aggregate;
};

export type UserCreateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: Maybe<Array<UserWhereUniqueInput>>;
};

export type UserCreateOneInlineInput = {
  /** Connect one existing User document */
  connect?: Maybe<UserWhereUniqueInput>;
};

/** An edge in a connection. */
export type UserEdge = {
  __typename?: 'UserEdge';
  /** The item at the end of the edge. */
  node: User;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** System User Kind */
export enum UserKind {
  Member = 'MEMBER',
  Pat = 'PAT',
  Public = 'PUBLIC',
  Webhook = 'WEBHOOK'
}

/** Identifies documents */
export type UserManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<UserWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  picture_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  picture_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  picture_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  picture_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  picture_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  picture_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  picture_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: Maybe<Scalars['Boolean']>;
  kind?: Maybe<UserKind>;
  /** All values that are not equal to given value. */
  kind_not?: Maybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: Maybe<Array<UserKind>>;
  /** All values that are not contained in given list. */
  kind_not_in?: Maybe<Array<UserKind>>;
};

export enum UserOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PictureAsc = 'picture_ASC',
  PictureDesc = 'picture_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  KindAsc = 'kind_ASC',
  KindDesc = 'kind_DESC'
}

export type UserUpdateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: Maybe<Array<UserConnectInput>>;
  /** Override currently-connected documents with multiple existing User documents */
  set?: Maybe<Array<UserWhereUniqueInput>>;
  /** Disconnect multiple User documents */
  disconnect?: Maybe<Array<UserWhereUniqueInput>>;
};

export type UserUpdateOneInlineInput = {
  /** Connect existing User document */
  connect?: Maybe<UserWhereUniqueInput>;
  /** Disconnect currently connected User document */
  disconnect?: Maybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type UserWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<UserWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  picture_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  picture_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  picture_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  picture_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  picture_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  picture_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  picture_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: Maybe<Scalars['Boolean']>;
  kind?: Maybe<UserKind>;
  /** All values that are not equal to given value. */
  kind_not?: Maybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: Maybe<Array<UserKind>>;
  /** All values that are not contained in given list. */
  kind_not_in?: Maybe<Array<UserKind>>;
};

/** References User record uniquely */
export type UserWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type Version = {
  __typename?: 'Version';
  id: Scalars['ID'];
  stage: Stage;
  revision: Scalars['Int'];
  createdAt: Scalars['DateTime'];
};

export type VersionWhereInput = {
  id: Scalars['ID'];
  stage: Stage;
  revision: Scalars['Int'];
};

export enum _FilterKind {
  Search = 'search',
  And = 'AND',
  Or = 'OR',
  Not = 'NOT',
  Eq = 'eq',
  EqNot = 'eq_not',
  In = 'in',
  NotIn = 'not_in',
  Lt = 'lt',
  Lte = 'lte',
  Gt = 'gt',
  Gte = 'gte',
  Contains = 'contains',
  NotContains = 'not_contains',
  StartsWith = 'starts_with',
  NotStartsWith = 'not_starts_with',
  EndsWith = 'ends_with',
  NotEndsWith = 'not_ends_with',
  ContainsAll = 'contains_all',
  ContainsSome = 'contains_some',
  ContainsNone = 'contains_none',
  RelationalSingle = 'relational_single',
  RelationalEvery = 'relational_every',
  RelationalSome = 'relational_some',
  RelationalNone = 'relational_none'
}

export enum _MutationInputFieldKind {
  Scalar = 'scalar',
  RichText = 'richText',
  RichTextWithEmbeds = 'richTextWithEmbeds',
  Enum = 'enum',
  Relation = 'relation',
  Union = 'union',
  Virtual = 'virtual'
}

export enum _MutationKind {
  Create = 'create',
  Publish = 'publish',
  Unpublish = 'unpublish',
  Update = 'update',
  Upsert = 'upsert',
  Delete = 'delete',
  UpdateMany = 'updateMany',
  PublishMany = 'publishMany',
  UnpublishMany = 'unpublishMany',
  DeleteMany = 'deleteMany'
}

export enum _OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export enum _RelationInputCardinality {
  One = 'one',
  Many = 'many'
}

export enum _RelationInputKind {
  Create = 'create',
  Update = 'update'
}

export enum _RelationKind {
  Regular = 'regular',
  Union = 'union'
}

export enum _SystemDateTimeFieldVariation {
  Base = 'base',
  Localization = 'localization',
  Combined = 'combined'
}

export type GetPagesQueryVariables = Exact<{
  first?: Maybe<Scalars['Int']>;
}>;


export type GetPagesQuery = (
  { __typename?: 'Query' }
  & { pages: Array<(
    { __typename?: 'Page' }
    & Pick<Page, 'id' | 'slug'>
    & { body: (
      { __typename?: 'RichText' }
      & Pick<RichText, 'html'>
    ) }
  )> }
);

export type GetPageBySlugQueryVariables = Exact<{
  slug?: Maybe<Scalars['String']>;
}>;


export type GetPageBySlugQuery = (
  { __typename?: 'Query' }
  & { page?: Maybe<(
    { __typename?: 'Page' }
    & Pick<Page, 'id' | 'slug' | 'heading'>
    & { body: (
      { __typename?: 'RichText' }
      & Pick<RichText, 'html'>
    ) }
  )> }
);

export type GetPlacesQueryVariables = Exact<{
  first?: Maybe<Scalars['Int']>;
}>;


export type GetPlacesQuery = (
  { __typename?: 'Query' }
  & { places: Array<(
    { __typename?: 'Place' }
    & Pick<Place, 'id' | 'slug' | 'name' | 'location_numeric' | 'adress' | 'tag' | 'state' | 'age' | 'period'>
    & { location: (
      { __typename?: 'Location' }
      & Pick<Location, 'longitude' | 'latitude'>
    ), description?: Maybe<(
      { __typename?: 'RichText' }
      & Pick<RichText, 'html'>
    )>, gallery: Array<(
      { __typename?: 'Asset' }
      & Pick<Asset, 'url' | 'height' | 'width'>
    )> }
  )> }
);

export type GetPlaceBySlugQueryVariables = Exact<{
  slug?: Maybe<Scalars['String']>;
}>;


export type GetPlaceBySlugQuery = (
  { __typename?: 'Query' }
  & { place?: Maybe<(
    { __typename?: 'Place' }
    & Pick<Place, 'id' | 'slug' | 'name' | 'location_numeric' | 'adress' | 'tag' | 'state' | 'age' | 'period'>
    & { location: (
      { __typename?: 'Location' }
      & Pick<Location, 'longitude' | 'latitude'>
    ), description?: Maybe<(
      { __typename?: 'RichText' }
      & Pick<RichText, 'html'>
    )>, gallery: Array<(
      { __typename?: 'Asset' }
      & Pick<Asset, 'url' | 'height' | 'width'>
    )> }
  )> }
);
