enum StatusCodes {
    OK = 200,
    CREATED = 201,
    ACCEPTED = 202,
    NO_CONTENT = 204,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    SERVER_ERROR = 500
}
export default StatusCodes;

/*
Example Usage :
    async function getData() {
        let env = UrlConfig.baseUrl(Environment.DEV);
        await axios.get(`${env}/api/GetAllUsers`, {}).then((res) {
            if (res.status === StatusCodes.OK) {
                // Do something
            }
        }).catch((err) {
            if (err.response.status === StatusCodes.BAD_REQUEST) {
                // Do something
            }
        })
    }
*/