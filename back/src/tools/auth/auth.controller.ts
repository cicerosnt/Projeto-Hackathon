import {
	Controller,
	Request,
	Post,
	UseGuards,
	Body,
	HttpCode,
	HttpException,
	HttpStatus,
	Res,
} from "@nestjs/common";
import { Response } from "express";
import { AuthService } from "src/tools/auth/auth.service";
import { Public } from "src/tools/auth/constants";
import { IForgotPassoword, ILogin } from "./auth.interface";

@Controller("authentication")
export class AuthController {
	constructor(private authService: AuthService) {}

	@Public()
	@HttpCode(200)
	@Post("login")
	async login(@Body() user: ILogin): Promise<Object> {
		const result = await this.authService.login(user);
		if (!result) throw new HttpException("UNAUTHORIZED", HttpStatus.UNAUTHORIZED);
		return result;
	}

	@Public()
	@HttpCode(200)
	@Post("forgot-passoword")
	async forgotPassoword(@Body() email: string, @Res() res: Response): Promise<void> {
		return await this.authService.forgotPassoword(email, res);
	}

	@Public()
	@HttpCode(200)
	@Post("reset-password")
	async resetPassword(@Body() data: IForgotPassoword): Promise<void> {
		return await this.authService.resetPassword(data);
	}
}
