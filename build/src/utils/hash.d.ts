export declare function hashData(dataTypes: any, dataValues: any): string;
export declare function hashString(string: string): string;
export declare function hashDataMap<R extends Record<string, [dataTypes: string[], dataValues: (string | number | bigint | boolean)[]] | undefined>>(map: R): {
    [K in keyof R]: string;
};
