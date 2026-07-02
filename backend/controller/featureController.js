import * as featureServices from "../services/featureServices.js";

export const changeFeatureKey = async (req, res) => {
    try {
        const { id } = req.params;
        const { feature_key } = req.body;

        const feature = await featureServices.changeFeatureKey(id, feature_key);

        if (!feature) {
            return res.status(404).json({
                message: "Feature not found"
            });
        }

        res.status(200).json({
            message: "Feature key updated successfully",
            data: feature
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

export const toggleFeature = async (req, res) => {
    try {
        const { id } = req.params;

        const feature = await featureServices.toggleFeature(id);

        if (!feature) {
            return res.status(404).json({
                message: "Feature not found"
            });
        }

        res.status(200).json({
            message: "Feature's enable change successfully",
            data: feature
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

export const deleteFeature = async (req, res) => {
    try {
        const { id } = req.params;

        const feature = await featureServices.deleteFeature(id);

        if (!feature) {
            return res.status(404).json({
                message: "Feature not found"
            });
        }

        res.status(200).json({
            message: "Feature deleted successfully",
            data: feature
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

export const getAllFeatures = async(req, res) => {
    try{
        const feature = await featureServices.getAllFeatures(req.body);
        res.status(201).json(feature);
    }
    catch(err){

        res.status(500).json({
            message:err.message
        });

    }
}

export const createFeature = async(req,res)=>{

    try{

        const feature = await featureServices.createFeature(req.body);

        res.status(201).json(feature);

    }
    catch(err){

        res.status(500).json({
            message:err.message
        });

    }

};