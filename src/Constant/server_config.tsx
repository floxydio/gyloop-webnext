enum Environment {
    DEV,
    PROD
}

export class urlConfig {
    public async baseUrl(env: Environment) {
        if (env === Environment.DEV) {
            return `${process.env.REACT_DEV_URL}`;
        } else if (env === Environment.PROD) {
            return `${process.env.REACT_PROD_URL}`
        }
    }
}



/*
Example : 
 async function getData() {
    let env = UrlConfig.baseUrl(Environment.DEV);
    await axios.get(`${env}/api/GetAllUsers`, {})
 }
*/