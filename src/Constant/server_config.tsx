export enum Environment {
    DEV = 'dev',
    PROD = 'prod'
}

export default async function baseUrl(environment: string, prefix: string): Promise<string> {
    console.log("Server Type", environment)
    // switch (env ) {
    //     case Environment.DEV:
    //         return `${process.env.BASE_URL_DEV}:${prefix}`;
    //     case Environment.PROD:
    //         return `${process.env.BASE_URL_PROD}/${prefix}`;
    //     default:
    //         return `${process.env.BASE_URL_LOCAL}:${prefix}`;
    // }
    if (environment === Environment.DEV) {
        return `${process.env.BASE_URL_DEV}:${prefix}`;
    } else if (environment === Environment.PROD) {
        console.log(process.env.BASE_URL_PROD + "/" + prefix)
        return `${process.env.BASE_URL_PROD}/${prefix}`;
    } else {
        return `${process.env.BASE_URL_LOCAL}:${prefix}`;
    }
}