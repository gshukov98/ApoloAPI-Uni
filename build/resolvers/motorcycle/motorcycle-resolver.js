"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MotorcycleResolver = void 0;
const type_graphql_1 = require("type-graphql");
const motorcycle_arguments_1 = require("./motorcycle-arguments");
const motorcycle_entity_1 = require("../../entities/motorcycle-entity");
const user_role_1 = require("../user/user-role");
let MotorcycleResolver = class MotorcycleResolver {
    async motorcycles() {
        return await motorcycle_entity_1.MotorcycleModel.find({});
    }
    async motorcycleById(_id) {
        return await motorcycle_entity_1.MotorcycleModel.findById(_id);
    }
    async createMotorcycle(data) {
        const newUser = new motorcycle_entity_1.MotorcycleModel(data);
        return newUser.save();
    }
    async editMotorcycle(_id, data) {
        return await motorcycle_entity_1.MotorcycleModel.findByIdAndUpdate(_id, data, { new: true });
    }
    async deleteMotorcycle(_id) {
        return await motorcycle_entity_1.MotorcycleModel.findByIdAndRemove(_id);
    }
};
__decorate([
    (0, type_graphql_1.Query)(returns => [motorcycle_entity_1.Motorcycle]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MotorcycleResolver.prototype, "motorcycles", null);
__decorate([
    (0, type_graphql_1.Query)(returns => motorcycle_entity_1.Motorcycle),
    __param(0, (0, type_graphql_1.Arg)("_id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MotorcycleResolver.prototype, "motorcycleById", null);
__decorate([
    (0, type_graphql_1.Mutation)(returns => motorcycle_entity_1.Motorcycle),
    __param(0, (0, type_graphql_1.Arg)("data")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [motorcycle_arguments_1.EditMotorcycleInput]),
    __metadata("design:returntype", Promise)
], MotorcycleResolver.prototype, "createMotorcycle", null);
__decorate([
    (0, type_graphql_1.Authorized)([user_role_1.UserRoles.ADMIN, user_role_1.UserRoles.SUPER_ADMIN]),
    (0, type_graphql_1.Mutation)(returns => motorcycle_entity_1.Motorcycle),
    __param(0, (0, type_graphql_1.Arg)("_id")),
    __param(1, (0, type_graphql_1.Arg)("data")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, motorcycle_arguments_1.EditMotorcycleInput]),
    __metadata("design:returntype", Promise)
], MotorcycleResolver.prototype, "editMotorcycle", null);
__decorate([
    (0, type_graphql_1.Authorized)([user_role_1.UserRoles.ADMIN, user_role_1.UserRoles.SUPER_ADMIN]),
    (0, type_graphql_1.Mutation)(returns => motorcycle_entity_1.Motorcycle),
    __param(0, (0, type_graphql_1.Arg)("_id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MotorcycleResolver.prototype, "deleteMotorcycle", null);
MotorcycleResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], MotorcycleResolver);
exports.MotorcycleResolver = MotorcycleResolver;
