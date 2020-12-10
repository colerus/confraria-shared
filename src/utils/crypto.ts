import * as bcrypt from "bcrypt";

export async function encriptar(
  valor: string,
  rounds: number,
  callback: (err: Error, hash: string) => void
) {
  return await bcrypt.hash(valor, rounds, (err, hash) => {
    callback(err, hash);
  });
}

export async function comparar(
  valorOriginal: string,
  hash: string,
  callback: (error: string | null, match: boolean) => void
) {
  await bcrypt.compare(valorOriginal, hash, (_error, match) => {
    if (match) return callback(null, true);
    callback("Senha inválida.", false);
  });
}
