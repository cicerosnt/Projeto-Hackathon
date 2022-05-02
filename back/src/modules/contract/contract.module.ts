import { forwardRef, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DocumentService } from "../document/document.service";
import { ContractController } from "./contract.controller";
import { ContractService } from "./contract.service";
import { Contract } from "./entities/contract.entity";
import { Document } from "../document/entities/document.entities";
import { FormField } from "../form-field/entities/form-field.entity";
import { Employee } from "../employee/entities/employee.entity";
import { AuthModule } from "src/tools/auth/auth.module";
import { EmployeeMovementModule } from "../employee-movement/employee-movement.module";

@Module({
	imports: [
		TypeOrmModule.forFeature([Contract]),
		TypeOrmModule.forFeature([Document]),
		TypeOrmModule.forFeature([FormField]),
		TypeOrmModule.forFeature([Employee]),
		forwardRef(() => AuthModule),
		EmployeeMovementModule,
	],
	controllers: [ContractController],
	providers: [ContractService, DocumentService],
	exports: [TypeOrmModule, ContractService, DocumentService],
})
export class ContractModule {}
