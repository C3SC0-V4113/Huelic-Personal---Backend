import jwt, { Secret } from "jsonwebtoken";

const generarJWT = async (uid: string, name: string) => {
  let tokenGenerado;
  const SECRET_KEY: Secret = process.env.SECRET_JWT_SEED!;
  await new Promise((resolve, reject) => {
    const payload = { uid, name };

    jwt.sign(
      payload,
      SECRET_KEY,
      {
        expiresIn: "2h",
      },
      (err, token) => {
        if (err) {
          console.error(err);
          reject("No se pudo generar el token");
        }

        resolve(token);
      }
    );
  }).then((token) => {
    tokenGenerado = token;
  });

  return tokenGenerado;
};

export default generarJWT;
