import * as featureRepo from "../repo/featureRepo.js";

export const changeFeatureKey = async(id, feature_key)=>{

    if(!feature_key){
        throw new Error("Feature key required");
    }
    return await featureRepo.changeFeatureKey(id, feature_key);
}

export const toggleFeature = async(id)=>{
    return await featureRepo.toggleFeature(id);
}

export const deleteFeature = async(id) =>{
    return await featureRepo.deleteFeature(id);
}

export const getAllFeatures = async() =>{
    return await featureRepo.getAllFeatures();
}

export const createFeature = async(data)=>{

    const {
        feature_key,
        enabled,
        organization_id
    } = data;

    if(!feature_key){

        throw new Error("Feature key required");

    }

    return await featureRepo.createFeature(data);

};