export default class StockController {
  constructor() {}
  getAll = async (req, res, next) => {
    try {
      let products; //vem do banco
      res.status(200).json({ message: "sucesso", products: "produtos" });
    } catch (e) {
      next(e);
    }
  };

  getOne = async (req, res, next) => {
    const productId = req.params.id;
    try {
      let product; //vem do banco
      res
        .status(200)
        .json({ message: "sucesso", product: `id do produto ${productId}` });
    } catch (e) {
      next(e);
    }
  };

  patch = async (req, res, next) => {
    const productId = req.params.id;
    const productModification = req.body;
    try {
      res.status(200).json({
        message: "sucess",
        product: productModification,
        productId: productId,
      });
    } catch (e) {
      next(e);
    }
  };

  post = async (req, res, next) => {
    const product = req.body;
    try {
      res.status(201).json({
        message: "sucess",
        product: product,
      });
    } catch (e) {
      next(e);
    }
  };

  remove = async (req, res, next) => {
    const productId = req.params.id;
    try {
      res.status(200).json({
        message: "sucess",
        product_id: `id do produto deletado ${productId}`,
      });
    } catch (e) {
      next(e);
    }
  };
}
