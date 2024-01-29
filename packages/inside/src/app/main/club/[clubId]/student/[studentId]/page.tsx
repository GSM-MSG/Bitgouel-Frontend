import React from 'react'
import { StudentPage } from '@bitgouel/common/src/pages'

const Student = ({ params }: { params: { studentId; clubId: string } }) => {
  return <StudentPage studentId={params.studentId} clubId={params.clubId} />
}

export default Student
