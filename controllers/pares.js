import { request, response } from "express";
import Pare from "../models/pare.js";

const getPares = async (req = request, res = response) => {
  try {
    const pares = await Pare.find();

    res.status(200).json({
      pares,
    });
  } catch (error) {
    res.status(404).json({
      error,
    });
  }
};

export { getPares };
