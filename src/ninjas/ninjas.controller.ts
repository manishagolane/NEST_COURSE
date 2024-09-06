import { Body, Controller, Delete, Get, NotFoundException, Param, ParseIntPipe, Post, Put, Query, ValidationPipe } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';
import { NinjasService } from './ninjas.service';
import { retry } from 'rxjs';

@Controller('ninjas')
export class NinjasController {

    constructor(private readonly ninjasService: NinjasService) {}
    
    @Get()
    getNinjas(@Query('weapon') weapon: 'stars' | 'nunchucks'){
        // const service = new NinjasService();
        // return service.getNinjas(weapon);
        return this.ninjasService.getNinjas(weapon);
    }

    @Get(':id')
    getOneNinja(@Param('id', ParseIntPipe) id: number){
        // return {
        //     id: id,
        //     "someKey": "value"
        // };
        try{
            return this.ninjasService.getNinja(id);
        }catch(err){
            throw new NotFoundException();
        }
    }

    @Post()
    createNinja(@Body(new ValidationPipe) createNinjaDto: CreateNinjaDto){
        // return {
        //     name: createNinjaDto.name
        // };
        return this.ninjasService.createNinja(createNinjaDto);
    }

    @Put(':id') 
    updateNinja(@Param('id') id: string, @Body() updateNinjaDto: UpdateNinjaDto){
        // return {
        //     id,
        //     name: updateNinjaDto.name
        // };
        return this.ninjasService.updateNinja(+id, updateNinjaDto);
    }

    @Delete(':id')
    removeNinja(@Param('id') id: string){
        // return {
        //     id
        // };
        return this.ninjasService.deleteNinja(+id);
    }
}


// GET ninjas --> []
// GET /ninjas/:id ---> { ... }
// POST /ninjas
// PUT /ninjas/:id ---> { ... }
// DELETE /ninjas/:id