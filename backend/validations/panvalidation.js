const joi= require('joi');
const Panvalidation= joi.object({
    contactDetails: joi.string().min(10).max(10),
    documentDate:joi.date(),
    authorizedSignatory:joi.string(),
    contactB1: joi.string().min(10).max(10),
    extendToDate:joi.date(),
    DevelopmentAuthorizedSignatoryB1:joi.string(),
    DevelopmentDateB1:joi.date(),
    DevelopmentDateB2:joi.date(),
    LandOwnerB2:joi.string(),
    contactB2:joi.string().min(10).max(10),

});
module.exports = Panvalidation;