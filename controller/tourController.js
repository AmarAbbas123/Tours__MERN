const Tour = require("../models/tourModel");

exports.getAllTours = async(req, res) => {
    try {
        const findallTour = await Tour.find();
        res.status(200).json({
          status: "success",
          data: {
            findallTour,
          },
        });
      } catch (error) {
        console.log(error);
        res.status(400).json({
          status: "fail",
          message: "tour not found",
        });
      }
  };

exports.getTour = async(req, res) => {
    try {
        const findTour = await Tour.findById(req.params.id);
        res.status(200).json({
          status: "success",
          data: {
            findTour,
          },
        });
      } catch (error) {
        console.log(error);
        res.status(400).json({
          status: "fail",
          message: "tour not found",
        });
      }
};

exports.createTour = async (req, res) => {
  try {
    const newTour = await Tour.create(req.body);
    res.status(200).json({
      status: "success",
      data: {
        tour: newTour,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: "fail",
      message: "Error creating user",
    });
  }
};

exports.updateTour =async (req, res) => {
    try {
        const updateTour = await Tour.findByIdAndUpdate(req.params.id,req.body,{
            new:true,
            runValidators:true
        });
        res.status(200).json({
          status: "success",
          data: {
            updateTour,
          },
        });
      } catch (error) {
        console.log(error);
        res.status(400).json({
          status: "fail",
          message: "tour not found",
        });
      }
};

exports.deleteTour =async (req, res) => {
    try {
        const deleteTour = await Tour.findByIdAndDelete(req.params.id);
        res.status(204).json({
          status: "success",
          data: null
        });
      } catch (error) { 
        console.log(error);
        res.status(404).json({
          status: "fail",
          message: "Error creating user",
        });
      }
};
