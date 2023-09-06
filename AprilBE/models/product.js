module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define(
        "Product",
        {
            ProductID: {
                type: DataTypes.STRING(50),
                primaryKey: true,
                allowNull: false,
                field: "product_id",
                autoIncrement: false,
                validate: {
                    notEmpty: true,
                },
            },
            ProductName: {
                type: DataTypes.STRING(50),
                allowNull: false,
                field: "product_name",
                validate: {
                    notEmpty: true,
                },
            },
            ProductDesc: {
                type: DataTypes.STRING(100),
                allowNull: false,
                field: "product_desc",
                validate: {
                    notEmpty: false,
                },
            },
            IsActive: {
                type: DataTypes.STRING(1),
                allowNull: false,
                field: "is_active",
                validate: {
                    notEmpty: true,
                },
            },
            CreatedBy: {
                type: DataTypes.STRING(50),
                allowNull: false,
                field: "created_by",
                validate: {
                    notEmpty: true,
                },
            },
            UpdatedBy: {
                type: DataTypes.STRING(50),
                allowNull: false,
                field: "updated_by",
                validate: {
                    notEmpty: false,
                },
            },
        },
        {
            freezeTableName: true,
            tableName: "dmsproduct",
        }
    );
    return Product;
};