import { ApiProperty } from "@nestjs/swagger";
import { Expose} from "class-transformer";


export class SubjectResponseDto{

    @ApiProperty()
    @Expose()
    _id: string;

    @ApiProperty()
    @Expose()
    name: string;

    @ApiProperty()
    @Expose()
    group_id:string


}