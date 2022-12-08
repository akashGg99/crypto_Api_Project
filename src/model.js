import { model, Schema } from "mongoose";

const cryptoCoinSchema = new Schema({
    symbol: {
        type: String,
        unique: true,
        required:true
    },
    name: {
        type: String,
        unique: true
    },
    marketCapUsd: String,
    priceUsd: String,
    id:  String 
})

const crypto_Model = new model("crypto-coins", cryptoCoinSchema)
export default crypto_Model