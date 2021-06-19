module.exports = mongoose => {
  const Process = mongoose.model(
    "process",
    mongoose.Schema(
      {
        name: String,
        value: Number,
        unitmensurement: String
      },
      { timestamps: true }
    )
  );
  return Process;
}