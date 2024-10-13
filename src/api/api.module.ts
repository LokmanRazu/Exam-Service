import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { IndexController } from './index/controller/index.controller';
import { CourseModule } from './course/course.module';
import { UserModule } from './user/user.module';
import { ExamModule } from './exam/exam.module';

const config:ConfigService = new ConfigService()

@Module({
  imports: [

    ConfigModule.forRoot({
      envFilePath:'.env',
      isGlobal:true,
      cache:true
    }),
    MongooseModule.forRoot(config.get('DB')),
    CourseModule,
    UserModule,
    ExamModule
  ],
  controllers: [IndexController],
  providers: [],
})
export class AppModule {}
