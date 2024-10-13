import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Exam, ExamSchema } from "./schema/exam.schema";
import { Question, QuestionSchema } from "./schema/question.schema";
import { ExamController } from "./controller/exam.controller";
import { QuestionController } from "./controller/question.controller";
import { ExamService } from "./service/exam.service";
import { ExamRepository } from "./repository/exam.repository";
import { QuestionService } from "./service/question.service";
import { QuestionRepository } from "./repository/question.repository";
import { Option, OptionSchema } from "./schema/option.schema";
import { OptionController } from "./controller/option.controller";
import { OptionRepository } from "./repository/option.repository";
import { Submission, SubmissionSchema } from "./schema/submission.schema";
import { OptionService } from "./service/option.service";
import { SubmissionService } from "./service/submission.service";
import { SubmissionRepository } from "./repository/submission.repository";
import { SubmissionController } from "./controller/submission.controller";

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Exam.name, schema: ExamSchema },
            { name: Question.name, schema: QuestionSchema },
            { name: Option.name, schema: OptionSchema },
            { name: Submission.name, schema: SubmissionSchema }

        ])
    ],
    controllers: [ExamController, QuestionController, OptionController,SubmissionController],
    providers: [
        ExamService, ExamRepository,
        QuestionService, QuestionRepository,
        OptionService, OptionRepository,
        SubmissionService,SubmissionRepository
    ]
})
export class ExamModule { }