interface StudentType {
  id: string
  userId: string
  name: string
}

export interface ClubDetailResponseTypes {
  clubId: number
  clubName: string
  highSchoolName: string
  headCount: number
  students: StudentType[]
  teacher: { id: string; name: string }
}
