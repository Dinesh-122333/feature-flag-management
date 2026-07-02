import express from "express";
import {
    changeFeatureKey,
    createFeature,
    deleteFeature,
    getAllFeatures,
    toggleFeature,
} from "../controller/featureController.js";

const router = express.Router();

router.post("/", createFeature);

router.get("/getAll", getAllFeatures);

router.patch("/toggleEnable/:id", toggleFeature);

router.patch("/changeFeature/:id/key", changeFeatureKey);

router.delete("/delete/:id", deleteFeature);

export default router;