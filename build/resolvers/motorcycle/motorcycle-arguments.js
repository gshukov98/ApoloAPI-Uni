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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MotorcycleInput = exports.EditMotorcycleInput = void 0;
const class_validator_1 = require("class-validator");
const mongodb_1 = require("mongodb");
const type_graphql_1 = require("type-graphql");
let EditMotorcycleInput = class EditMotorcycleInput {
};
__decorate([
    (0, type_graphql_1.Field)(),
    (0, class_validator_1.Length)(1, 30),
    __metadata("design:type", String)
], EditMotorcycleInput.prototype, "make", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, class_validator_1.Length)(1, 30),
    __metadata("design:type", String)
], EditMotorcycleInput.prototype, "model", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, class_validator_1.Length)(1, 30),
    __metadata("design:type", String)
], EditMotorcycleInput.prototype, "category", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, class_validator_1.MinLength)(5),
    __metadata("design:type", String)
], EditMotorcycleInput.prototype, "image", void 0);
EditMotorcycleInput = __decorate([
    (0, type_graphql_1.InputType)()
], EditMotorcycleInput);
exports.EditMotorcycleInput = EditMotorcycleInput;
let MotorcycleInput = class MotorcycleInput {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", mongodb_1.ObjectId)
], MotorcycleInput.prototype, "_id", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], MotorcycleInput.prototype, "make", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], MotorcycleInput.prototype, "model", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], MotorcycleInput.prototype, "category", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], MotorcycleInput.prototype, "image", void 0);
MotorcycleInput = __decorate([
    (0, type_graphql_1.InputType)()
], MotorcycleInput);
exports.MotorcycleInput = MotorcycleInput;
