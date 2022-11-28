const mongoose = require("mongoose");
const { Schema } = mongoose;

const TransactionSchema = new Schema({
  transaction_no: { type: String },
  // vehicle_no:[
  //   {type: Schema.Types.ObjectId, ref: 'vehicle'}
  // ],
  ///required fields changes to look
  vehicle_no:{type:String, required: true},

  particulars: { type: String, },
  reference: { type: String},
  debit: { type: Number, required: true },
  credit: { type: Number,  },
  amount_due: { type: Number },


  status: { type: String, enum:["req_received","pay_received","inprocess","delivered"] },

  tr_date: {
    type: Date,
    default: Date.now,
  },
  delivered_date:{  type: Date,
    default: Date.now,}
  
});
const Transaction = mongoose.model("transaction", TransactionSchema);

module.exports = Transaction;