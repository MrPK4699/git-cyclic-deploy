const PetrolLog = require('../models/petrolLog');

exports.createPetrolLog = async (req, res) => {
  try {
    const { date, odometer_reading, petrol_price, petrol_volume, station } = req.body;
    const userId = req.user; 

    const newPetrolLog = new PetrolLog({
      user: userId,
      date,
      odometer_reading,
      petrol_price,
      petrol_volume,
      station
    });

    await newPetrolLog.save();
    res.status(201).json({ message: "Petrol log created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.getPetrolLogs = async (req, res) => {
  try {
    const userId = req.user;
    const logs = await PetrolLog.find({ user: userId });
    res.status(200).json(logs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.updatePetrolLog = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user; 
    const updatedLog = req.body;

 
    const existingLog = await PetrolLog.findOne({ _id: id, user: userId });
    if (!existingLog) {
      return res.status(404).json({ message: "Petrol log not found" });
    }


    await PetrolLog.findByIdAndUpdate(id, updatedLog);
    res.status(200).json({ message: "Petrol log updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.deletePetrolLog = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user;

   
    const existingLog = await PetrolLog.findOne({ _id: id, user: userId });
    if (!existingLog) {
      return res.status(404).json({ message: "Petrol log not found" });
    }


    await PetrolLog.findByIdAndDelete(id);
    res.status(200).json({ message: "Petrol log deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
