import { logger } from '../logger'

export interface PipelineProps<T> {
  execFunc: () => Promise<PipelineResult<T>>
  authenFunc?: () => Promise<PipelineResult<T>>
}

export interface PipelineResult<T> {
  message: string
  status: number
  data: T
}

export const pipeline = async <T>({
  execFunc,
  authenFunc,
}: PipelineProps<T>): Promise<PipelineResult<T>> => {
  if (typeof authenFunc !== 'undefined') {
    try {
      const resultAuthen = await authenFunc()
      if (resultAuthen.status !== 200) {
        return resultAuthen
      }
    } catch (err: any) {
      logger({ message: 'error-auth', data: JSON.stringify(err) })
      return {
        status: 500,
        message: err.message,
        data: err,
      }
    }
  }
  try {
    return await execFunc()
  } catch (err: any) {
    logger({ message: 'error-system', data: err })
    return {
      status: 500,
      message: err.message,
      data: err,
    }
  }
}
