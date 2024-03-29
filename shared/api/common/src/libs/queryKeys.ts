export const authQueryKeys = {
  patchReissue: () => ['auth', 'reissue'],
  postLogin: () => ['auth', 'login'],
  deleteLogout: () => ['auth', 'logout'],
  deleteWithDraw: () => ['auth', 'withDraw'],
  postSignUpStudent: () => ['auth', 'signUp'],
  postSignUpTeacher: () => ['auth', 'signUp'],
  postSignUpBbozzak: () => ['auth', 'signUp'],
  postSignUpProfessor: () => ['auth', 'signUp'],
  postSignUpGoverment: () => ['auth', 'signUp'],
  postSignUpCompanyInstructor: () => ['auth', 'signUp'],
} as const

export const lectureQueryKeys = {
  postLectureCreate: () => ['lecture', 'create'],
  getLectureList: () => ['lecture', 'list'],
  getLectureDetail: (id: string) => ['lecture', 'detail', id],
  postLectureApplication: (id: string) => ['lecture', 'application', id],
  patchLectureApprove: (id: string) => ['lecture', 'approve', id],
  deleteLectureReject: (id: string) => ['lecture', 'reject', id],
  getProfessor: () => ['lecture', 'professor'],
  getLine: () => ['lecture', 'line'],
  getDepartment: () => ['lecture', 'department'],
} as const

export const activityQueryKeys = {
  postActivityInformation: () => ['activity', 'information'],
  patchActivityModifyInformation: (activity_id: string) => [
    'activity',
    'correction',
    activity_id,
  ],
  deleteActivityInformationRemove: (activity_id: string) => [
    'activity',
    'remove',
    activity_id,
  ],
  getActivityMyselfList: () => ['activity', 'myselfList'],
  getActivityList: (student_id: string) => ['activity', 'list', student_id],
  getActivityInformationDetail: (activity_id: string) => [
    'activity',
    'detail',
    activity_id,
  ],
} as const

export const myQueryKeys = {
  getMy: () => ['my', 'myData'],
  patchPw: () => ['my', 'changePw'],
} as const

export const postQueryKeys = {
  postBoardCreate: () => ['post', 'create'],
  getBoardList: () => ['post', 'list'],
  getBoardDetail: (id: string) => ['post', 'detail', id],
  patchBoardModify: (id: string) => ['post', 'modify', id],
  deleteBoardDelete: (id: string) => ['post', 'delete', id],
} as const

export const certificateQueryKeys = {
  getCertificateListTeacher: (student_id: string) => [
    'get',
    'listTeacher',
    student_id,
  ],
  getCertificateListStudent: () => ['get', 'list'],
  postCertificateCreate: () => ['post', 'create'],
  patchCertificateModify: (certificate_id: string) => [
    'patch',
    'modify',
    certificate_id,
  ],
}

export const clubQueryKeys = {
  getSchoolClub: () => ['club', 'schoolClub'],
  getClub: () => ['club', 'clubList'],
  getClubDetail: () => ['club', 'detail'],
  getMyClub: () => ['club', 'myClub'],
  getStudentDetail: () => ['club', 'studentDetail'],
} as const

export const inquiryQueryKeys = {
  postInquiry: () => ['inquiry', 'create'],
  getMyInquiry: () => ['inquiry', 'myInquiry'],
  getInquiryDetail: (id: string) => ['inquiry', 'detail', id],
  deleteMyInquiry: (id: string) => ['inquiry', 'myDelete', id],
  patchInquiry: (id: string) => ['inquiry', 'correction', id],
  postAnswer: (id: string) => ['inquiry', 'answer', id],
  getInquiry: () => ['inquiry', 'inquiryList'],
  deleteInquiry: (id: string) => ['inquiry', 'reject', id],
} as const

export const adminQueryKeys = {
  getUserList: () => ['admin', 'list'],
  getWithdrawUserList: () => ['admin', 'quitList'],
  patchUserApprove: (userIds: string[]) => ['admin', 'approve', userIds],
  deleteUserReject: (userIds: string[]) => ['admin', 'reject', userIds],
  deleteUserWithout: (userIds: string[]) => ['admin', 'without', userIds],
} as const

export const emailQueryKeys = {
  postEmail: () => ['email', 'send'],
  getEmail: () => ['email', 'check'],
}

export const faqQueryKeys = {
  getQuestions: () => ['FAQ', 'create'],
  postQuestion: () => ['FAQ', 'list'],
}
