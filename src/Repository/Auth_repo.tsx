
interface SignIn {
    username: string;
    password: string;
}
export class AuthRepo {
    public async signIn(form: SignIn) {
        try {} catch (e) {
        }
    }
}


/*
 Example Usage :
 
    useEffect(() => {
        AuthRepo.signIn(username, password).then((res) => {}).catch((err) => {})
    })

    // Mau Cek 200 
    console.log()
    // Mau Cek != 200
    console.error()


*/