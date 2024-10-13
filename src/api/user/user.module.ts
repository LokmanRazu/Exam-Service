import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Student, StudentsSchema } from "./schema/students.schema";
import { StudentController } from "./controller/student.controller";
import { StudentService } from "./service/student.service";
import { StudentRepository } from "./repository/student.repository";
import { Parant, ParantsSchema } from "./schema/parants.schema";
import { ParantController } from "./controller/parant.controller";
import { ParantService } from "./service/parant.service";
import { ParantRepository } from "./repository/parant.repository";
import { Teacher, TeacherSchema } from "./schema/teachers.schema";
import { TeacherService } from "./service/teacher.service";
import { TeacherRepository } from "./repository/teacher.repository";

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Student.name, schema: StudentsSchema },
            { name: Parant.name, schema: ParantsSchema },
            { name: Teacher.name, schema: TeacherSchema },
        ])
    ],
    controllers: [StudentController, ParantController],
    providers: [
        StudentService, StudentRepository,
        ParantService, ParantRepository,
        TeacherService, TeacherRepository,
    ]
})
export class UserModule { }