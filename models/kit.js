import mongoose from "mongoose";
const { Schema, model } = mongoose;

const kitSchema = new Schema({
  nombre: {
    type: String,
    require: true,
  },
  precio: {
    type: Number,
    default: 0,
  },
  items: [{ cantidad: Number, tipo: String, gauss: Number }],
});

export default model("Kit", kitSchema);
