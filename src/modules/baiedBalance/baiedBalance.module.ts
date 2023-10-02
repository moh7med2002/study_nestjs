import { Module } from '@nestjs/common';
import { baiedBalanceRepositry } from 'src/constants/entityRepositry';
import { BaiedBalance } from './baiedBalance.entity';

@Module({
  controllers: [],
  providers: [
    {
      provide: baiedBalanceRepositry,
      useValue: BaiedBalance,
    },
  ],
})
export class BaiedBalanceModule {}
