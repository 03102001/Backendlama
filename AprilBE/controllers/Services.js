const servicesObj = {
	audit: require('../services/AuditServices'),
	role: require('../services/RoleServices'),
	hrbusinessunit: require('../services/HrBusinessUnitServices'),
	hremployee: require('../services/HrEmployeeServices'),
	emplrole: require('../services/EmplRoleServices'),
	appusage: require('../services/AppUsageServices'),
	product: require('../services/productService'),
	department: require('../services/departmentService'),
	gatepass: require('../services/gatepassService'),
	gatepassdetail: require('../services/gatepassdetailService'),
}

module.exports = {
    servicesObj
}