import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDatumDto } from './dto/create-datum.dto';
import { UpdateDatumDto } from './dto/update-datum.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId, Types } from 'mongoose';
import { Data, DataDocument } from './schema/data.schema';
import { NotFoundError } from 'rxjs';
import { urlToHttpOptions } from 'url';

export interface DataPagination {
  items: Data[];
  totalItems: number;
  currentPage: number;
  totalPages: number;
}

@Injectable()
export class DataService {
  constructor(@InjectModel(Data.name) private DataModel: Model<DataDocument> ){}

  async create(createDatumDto: CreateDatumDto): Promise<Data> {
  const data = new this.DataModel(createDatumDto);
  return data.save();
  }

  async findAll( page: number = 1, limit: number = 3): Promise<DataPagination> {
    const skip = (page - 1) * limit;
    const items = this.DataModel.find().skip(skip).limit(limit).exec();
    const totalItems = this.DataModel.countDocuments().exec();
    const totalPages = Math.ceil((await totalItems) / limit);
    return {
      items: await items,
      totalItems: await totalItems,
      currentPage: page,
      totalPages: totalPages,
    };
  }

  async findOne(id: string): Promise<Data> {
    const data = await this.DataModel.findById(id).exec()
    if(!data)
      throw new NotFoundException(`Запись с id: ${id} не найдена`)
    return data;
  }

   async update(id: number, updateDatumDto: UpdateDatumDto): Promise<Data> {
    const data = await this.DataModel.findByIdAndUpdate(id, updateDatumDto,{new: true}).exec()
    if (!data) {
    throw new NotFoundException(`Не удалось обновить: запись с id ${id} не найдена`);
    }
    return data;

  }

  async remove(id: number): Promise<Types.ObjectId> {
    const data = await this.DataModel.findByIdAndDelete(id)
    if (!data) {
    throw new NotFoundException(`Запись с id ${id} не найдена, удаление невозможно`);
    }
    return data?._id as Types.ObjectId;
  }
}
