import express from "express";
import expressAsyncHandler from "express-async-handler";
import Order from "../models/orderModel.js";
import { isAuth } from "../utils.js";

const orderRouter = express.Router();

orderRouter.get(
    "/all",
    isAuth,
    expressAsyncHandler(async (req, res) => {
      const orders = await Order.find();
      res.send(orders);
    })
  );

orderRouter.get(
    "/:id",
    isAuth,
    expressAsyncHandler(async (req, res) => {
      const order = await Order.findById(req.params.id);
      if (order) {
        res.send(order);
      } else {
        res.status(404).send({ message: "Order Not Found" });
      }
    })
  );

  export default orderRouter;