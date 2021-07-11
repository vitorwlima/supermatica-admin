import { IAlternative } from '../IAlternative'

export interface IQuestion {
  _id: string
  questionText: string
  resolution: string
  subjectId: string
  alternatives: IAlternative[]
}
