import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Group, GroupSchema } from "./schema/group.schema";
import { GroupController } from "./controller/group.controller";
import { GroupService } from "./service/group.service";
import { GroupRepository } from "./repository/group.repository";
import { Subject, SubjectSchema } from "./schema/subject.schema";
import { SubjectService } from "./service/subject.service";
import { SubjectRepository } from "./repository/subject.repository";
import { SubjectController } from "./controller/subject.controller";
import { Course, CourseSchema } from "./schema/course.schema";
import { CourseService } from "./service/course.service";
import { CourseRepository } from "./repository/course.repository";
import { CourseController } from "./controller/course.controller";
import { Courese_map, Courese_mapSchema } from "./schema/course_map.Schema";
import { Course_mapService } from "./service/course_map.service";
import { CourseMapRepository } from "./repository/course-map.repository";
import { Course_mapController } from "./controller/course_map.controller";
@Module({
    imports: [
        MongooseModule.forFeature([

            { name: Group.name, schema: GroupSchema },
            { name: Subject.name, schema: SubjectSchema },
            { name: Course.name, schema: CourseSchema },
            { name: Courese_map.name, schema: Courese_mapSchema }

        ])
    ],
    controllers: [GroupController, SubjectController, CourseController, Course_mapController],
    providers: [
        GroupService, GroupRepository,
        SubjectService, SubjectRepository,
        CourseService, CourseRepository,
        Course_mapService, CourseMapRepository

    ],

    exports: []
})
export class CourseModule { }