import {
  Injectable, UnauthorizedException, ConflictException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { AdminUser, AdminUserDocument } from './schemas/admin-user.schema';
import { LoginDto, CreateAdminDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(AdminUser.name)
    private adminModel: Model<AdminUserDocument>,
    private jwtService: JwtService,
  ) {}

  async login(dto: LoginDto) {
    const user = await this.adminModel.findOne({ email: dto.email });
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const isPasswordValid = await bcrypt.compare(dto.password, user.password_hash);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    await this.adminModel.updateOne({ _id: user._id }, { last_login: new Date() });

    const payload = { sub: user._id, email: user.email, role: user.role };
    return {
      access_token: this.jwtService.sign(payload),
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    };
  }

  async createAdmin(dto: CreateAdminDto) {
    const exists = await this.adminModel.findOne({ email: dto.email });
    if (exists) throw new ConflictException('Email already in use');

    const hashedPassword = await bcrypt.hash(dto.password, 12);
    const admin = new this.adminModel({
      name: dto.name,
      email: dto.email,
      password_hash: hashedPassword,
    });

    const saved = await admin.save();
    const result = saved.toObject();
    delete (result as any).password_hash;
    return result;
  }

  async findAll() {
    return this.adminModel.find({}, { password_hash: 0 }).exec();
  }
}
