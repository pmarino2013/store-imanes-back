import { request, response } from "express";
import Kit from "../models/kit.js";

const getKits = async (req = request, res = response) => {
  try {
    const kits = await Kit.find();

    res.status(200).json({
      kits,
    });
  } catch (error) {
    res.status(404).json({
      error,
    });
  }
};

export { getKits };
