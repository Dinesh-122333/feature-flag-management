import pool from "../config/db.js";

export const changeFeatureKey = async (id, feature_key) => {
    const result = await pool.query(
        `UPDATE feature_flags
         SET feature_key = $1
         WHERE id = $2
         RETURNING *`,
        [feature_key, id]
    );

    return result.rows[0];
};

export const toggleFeature = async(id) => {
    const result = await pool.query(
        `UPDATE feature_flags 
        SET enabled = NOT enabled
        WHERE id = $1
        RETURNING *`,
        [id]
    );
    return result.rows[0];
}

export const deleteFeature = async (id) => {
    const result = await pool.query(
        `DELETE FROM feature_flags
         WHERE id = $1
         RETURNING *`,
        [id]
    );

    return result.rows[0];
};


export const getAllFeatures = async()=>{
    const result  = await pool.query(
        'SELECT * FROM feature_flags'
    );

    return result.rows;
}

export const createFeature = async(feature)=>{

    const {
        feature_key,
        enabled,
        organization_id
    } = feature;

    const result = await pool.query(

        `INSERT INTO feature_flags
        (
            feature_key,
            enabled,
            organization_id
        )

        VALUES($1,$2,$3)

        RETURNING *`,

        [
            feature_key,
            enabled,
            organization_id
        ]

    );

    return result.rows[0];

};

