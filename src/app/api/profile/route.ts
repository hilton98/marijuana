const jwt = require("jsonwebtoken")
const SECRET_KEY = process.env.JWT_SECRET_KEY;

export async function GET(req: Request) {
    const authorization = req.headers.get("authorization") 
    const token = authorization?.slice('Bearer '.length)
    if (token){
        const tokenDecoded = await decodeToken(token)
        return Response.json({"data": tokenDecoded})
    }
    return Response.json({"message": "token has expired or is invalid!"})
}

async function decodeToken(token: String){
    try{
        return jwt.verify(token, SECRET_KEY);
    } catch (error: any) {
        return error.message;
    }
}