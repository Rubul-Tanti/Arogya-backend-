let io;
module.exports = {
  setIO: (instance) => {
    io = instance;
  },
  getIO: () => {
    if (!io) throw new Error("Socket.IO not initialized");
    return io;
  },
};
