import { Module } from '@nestjs/common';
import { AcademicsOperationsModule } from './academics-operations/academics-operations.module';
import { AcademicsModule } from './academics/academics.module';
import { AuditModule } from './audit/audit.module';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';
import { CommonModule } from './common/common.module';
import { CommunicationModule } from './communication/communication.module';
import { ReportingModule } from './reporting/reporting.module';
import { TenantModule } from './tenant/tenant.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    CommonModule,
    AuthModule,
    TenantModule,
    UserModule,
    AcademicsModule,
    AcademicsOperationsModule,
    CommunicationModule,
    ReportingModule,
    AuditModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
