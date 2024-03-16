"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function insertUser(username, password, firstName, lastName) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.user.create({
            data: {
                email: username,
                password,
                firstName,
                lastName
            },
            select: {
                id: true,
                password: true,
                firstName: true,
                lastName: true
            }
        });
        console.log(res);
    });
}
function updateUser(username, { firstName, lastName }) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.user.update({
            where: {
                email: username
            },
            data: {
                firstName: firstName,
                lastName: lastName
            },
            select: {
                id: true,
                firstName: true,
                lastName: true
            }
        });
        console.log(res);
    });
}
function selectUser(username) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.user.findFirst({
            where: {
                email: username
            },
            select: {
                firstName: true,
                lastName: true
            }
        });
        console.log(res);
    });
}
//insertUser("srivignesh24@gmail.com", "viki@20203", "Sri Viki", "S");
//updateUser("srivignesh24@gmail.com", {firstName: 'Viki',lastName: 'S'});
selectUser('srivignesh24@gmail.com');