module.exports = mongoose => {
  const Process = mongoose.model(
    "process",
    mongoose.Schema(
      {
        id: String,
        process: String,
        value: Number,
        unitmensurement: String
      },
      { timestamps: true }
    )
  );
  return Process;
}