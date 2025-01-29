export class BankAccount {
  async create(res, req) {
    try {

      res.status(200)
    } catch {
      res.status(500).json({ message: 'erro ao criar conta bancária.' })
    }
  }
}
