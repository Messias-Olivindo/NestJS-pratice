
import { Injectable, OnModuleInit } from '@nestjs/common';
import * as bcrypt from 'bcrypt'
import { PrismaClient } from 'generated/prisma';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
}
