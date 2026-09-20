import { IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { UserStatus } from '@starter/shared';

export class UpdateStatusDto {
  @ApiProperty({
    enum: ['ACTIVE', 'INACTIVE', 'SUSPENDED', 'PENDING_VERIFICATION'],
    example: UserStatus.ACTIVE,
    description: 'User status',
  })
  @IsEnum(UserStatus, { message: 'Invalid user status' })
  status: UserStatus;
}
