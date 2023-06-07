import { HttpException } from '@nestjs/common'
import { Document, FilterQuery, Model, UpdateQuery } from 'mongoose'

interface MyObj {
  count: any[]
  list: any[]
}
export abstract class EntityRepository<T extends Document> {
  constructor(protected readonly entityModel: Model<T>) {}

  async findOne(
    entityFilterQuery: FilterQuery<T>
    // projection?: Record<string, unknown>
  ): Promise<T | null> {
    return await this.entityModel.findOne({ ...entityFilterQuery, deleted: false }).exec()
  }

  async find(entityFilterQuery: FilterQuery<T>): Promise<T[] | null> {
    return this.entityModel.find(entityFilterQuery, { deleted: false })
  }

  arrayToObject(wordArray) {
    const obj = {}
    wordArray.forEach((word, index) => {
      if (word !== '') {
        obj[index] = word
      }
    })
    return obj
  }

  objectToArray(obj) {
    const arr = []
    for (const key in obj) {
      arr.push(obj[key])
    }
    return arr
  }

  removeEmptyItems(arr: MyObj[][]): any {
    const items = []
    const noEmptyItems = arr.filter((objArr) => {
      return objArr.some((obj) => {
        return obj.count.length > 0 || obj.list.length > 0
      })
    })

    noEmptyItems.forEach((objArr) => {
      items.push(objArr[0])
    })

    return items
  }

  async searchByField(
    field: string,
    content: string,
    limit: number,
    page: number
  ): Promise<{ count: number; list: T[] }> {
    try {
      const entityFilterQuery: FilterQuery<T> = {
        [field]: content,
        deleted: false
      }

      const result = await this.entityModel.aggregate([
        { $match: entityFilterQuery },
        {
          $facet: {
            count: [{ $count: 'count' }],
            list: [{ $limit: limit }, { $skip: limit * (page - 1) }]
          }
        }
      ])

      if (result.length === 0) {
        throw new HttpException('Not found', 404)
      }

      const count = result[0].count[0].count
      const list = result[0].list

      return { count, list }
    } catch (error) {
      throw new HttpException(error.message, error.status)
    }
  }

  async list(
    entityFilterQuery: FilterQuery<T>,
    limit: number,
    page: number
  ): Promise<{ count: number; list: T[]; filterOptions?: any }> {
    try {
      if (Object.keys(entityFilterQuery).length !== 0) {
        entityFilterQuery = Object.keys(entityFilterQuery).reduce(
          (acc, key) => ({
            ...acc,
            [key]: {
              $regex: `\\b${entityFilterQuery[key]}\\b`,
              $options: 'i'
            }
          }),
          {}
        )
        delete entityFilterQuery.search
      } else {
        entityFilterQuery = {}
      }

      const countQuery = await this.entityModel
        .find({
          ...entityFilterQuery,
          deleted: false
        })
        .countDocuments()

      const query = await this.entityModel
        .find({
          ...entityFilterQuery,
          deleted: false
        })
        .limit(limit)
        .skip(limit * (page - 1))

      const count = countQuery || 0
      const list = query || []

      return { count, list }
    } catch (error) {
      throw new HttpException(error.message, error.status)
    }
  }

  async listNames(limit: number, page: number): Promise<T[]> {
    const result = await this.entityModel
      .find({ deleted: false }, { name: 1 })
      .limit(limit)
      .skip(limit * (page - 1))
    return result
  }

  async create(createEntityData: unknown): Promise<T | null> {
    const entity = new this.entityModel(createEntityData)
    return await entity.save()
  }

  async createMany(createEntityData: unknown[]): Promise<T[]> {
    return await this.entityModel.insertMany(createEntityData)
  }

  async createManyAndReturnIds(createEntityData: unknown[]): Promise<T[]> {
    const result = await this.entityModel.insertMany(createEntityData)
    return result
  }

  async findOneAndUpdate(
    entityFilterQuery: FilterQuery<T>,
    updateEntityData: UpdateQuery<unknown>
  ): Promise<T | null> {
    return await this.entityModel.findOneAndUpdate(
      { ...entityFilterQuery, deleted: false },
      updateEntityData,
      {
        new: true
      }
    )
  }

  async delete(entityFilterQuery: FilterQuery<T>): Promise<{ deleted: boolean }> {
    const result = await this.entityModel.findOneAndUpdate(
      { ...entityFilterQuery, deleted: false },
      {
        deleted: true,
        deletedAt: new Date(),
        deletedBy: 'admin'
      }
    )
    if (!result) {
      return { deleted: false }
    }
    return { deleted: true }
  }

  async deleteMany(entityFilterQuery: FilterQuery<T>): Promise<boolean> {
    const deleteResult = await this.entityModel.deleteMany(entityFilterQuery)
    return deleteResult.deletedCount >= 1
  }

  async findByIdArray(ids: string[]) {
    const result = await this.entityModel.find({
      _id: {
        $in: ids
      }
    })
    return { count: result.length, list: result }
  }
}
