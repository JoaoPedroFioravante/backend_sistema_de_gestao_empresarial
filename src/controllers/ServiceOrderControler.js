export default class ServiceOrderController {
  constructor() {}

  getAll = async (req, res, next) => {
    try {
      let serviceOrders; //.... vem do banco
      res
        .status(200)
        .json({ message: "sucess", serviceOrders: "service orders" });
    } catch (e) {
      next(e);
    }
  };

  getOne = async (req, res, next) => {
    let idServiceOrder = req.params.id;
    try {
      let serviceOrder; // vem do banco
      res.status(200).json({
        message: "sucess",
        serviceOrder: `service order id: ${idServiceOrder}`,
      });
    } catch (e) {
      next(e);
    }
  };

  post = async (req, res, next) => {
    try {
      res.status(200).json({ message: "sucess", body: req.body });
    } catch (e) {
      next(e);
    }
  };

  patch = async (req, res, next) => {
    const serviceOrder = req.body;
    const serviceOrderId = req.params.id;
    try {
      res.status(200).json({
        message: "sucess",
        serviceOrder: serviceOrder,
        idServiceOrder: serviceOrderId,
      });
    } catch (e) {
      next(e);
    }
  };

  delete = async (req, res, next) => {
    const idServiceOrder = req.params.id;
    try {
      res.status(200).json({
        message: `delete sucessful of service Order with id ${idServiceOrder}`,
      });
    } catch (e) {
      next(e);
    }
  };
}
