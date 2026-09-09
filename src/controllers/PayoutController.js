export default class PayoutController {
  constructor() {}

  getAll = async (req, res, next) => {
    try {
      let allPayouts; //... vai vir do banco
      res.status(200).json({ message: "sucess", payouts: "payouts 123" });
    } catch (e) {
      next(e);
    }
  };
  getOne = async (req, res, next) => {
    const payoutId = req.params.id;
    try {
      let client; //vai vir do banco
      res
        .status(200)
        .json({ message: "sucess", payout: `payout de id ${payoutId}` });
    } catch (e) {
      next(e);
    }
  };
  post = async (req, res, next) => {
    const body = req.body;
    try {
      res.status(200).json({ message: "sucess", body: { body } });
    } catch (e) {
      next(e);
    }
  };
  patch = async (req, res, next) => {
    const body = req.body;
    const idPayout = req.params.id;
    try {
      res
        .status(200)
        .json({ message: "sucess", body: { body }, idPayout: idPayout });
    } catch (e) {
      next(e);
    }
  };
  delete = async (req, res, next) => {
    const idPayout = req.params.id;
    try {
        res.status(200).json({message:`payout of id ${idPayout} was deleted with sucess`});
    } catch (e) {
      next(e);
    }
  };
}
