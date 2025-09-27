export type SearchParamsProp = {
  searchParams: Promise<{
    [key: string]: string | string[] | undefined;
  }>;
};
