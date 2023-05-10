import { Request, Response } from "express";
import { UserService } from "./userService";
export class UserController {
    private userService = new UserService(); // 实例化service

    // 获取用户列表的接口处理逻辑
    getUser = (req: Request, res: Response) => {
        try {
            const data = this.userService.getUserData();
            return res.status(200).json({ data, message: "get user successful" });
        } catch (e: any) {
            return res.status(500).json({ data: {}, message: e.message });
        }
    };
}

