// MUI Imports
import { useTheme } from '@mui/material/styles'

//Icon Imports MUI
import ArticleIcon from '@mui/icons-material/Article'
import DialpadIcon from '@mui/icons-material/Dialpad'
import SchoolIcon from '@mui/icons-material/School'

import QuizIcon from '@mui/icons-material/Quiz'
import OnlinePredictionIcon from '@mui/icons-material/OnlinePrediction'
import SensorOccupiedIcon from '@mui/icons-material/SensorOccupied'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance'

// Third-party Imports
import PerfectScrollbar from 'react-perfect-scrollbar'

// Type Imports
import type { getDictionary } from '@/utils/getDictionary'
import type { VerticalMenuContextProps } from '@menu/components/vertical-menu/Menu'

// Component Imports
import { Menu, SubMenu, MenuItem } from '@menu/vertical-menu'

// Hook Imports
import useVerticalNav from '@menu/hooks/useVerticalNav'

// Styled Component Imports
import StyledVerticalNavExpandIcon from '@menu/styles/vertical/StyledVerticalNavExpandIcon'

// Style Imports
import menuItemStyles from '@core/styles/vertical/menuItemStyles'
import menuSectionStyles from '@core/styles/vertical/menuSectionStyles'

type RenderExpandIconProps = {
  open?: boolean
  transitionDuration?: VerticalMenuContextProps['transitionDuration']
}

type Props = {
  dictionary: Awaited<ReturnType<typeof getDictionary>>
  scrollMenu: (container: any, isPerfectScrollbar: boolean) => void
}

const RenderExpandIcon = ({ open, transitionDuration }: RenderExpandIconProps) => (
  <StyledVerticalNavExpandIcon open={open} transitionDuration={transitionDuration}>
    <i className='tabler-chevron-right' />
  </StyledVerticalNavExpandIcon>
)

const VerticalMenu = ({ dictionary, scrollMenu }: Props) => {
  // Hooks
  const theme = useTheme()
  const verticalNavOptions = useVerticalNav()
  const { isBreakpointReached } = useVerticalNav()

  // Vars
  const { transitionDuration } = verticalNavOptions

  const ScrollWrapper = isBreakpointReached ? 'div' : PerfectScrollbar

  return (
    // eslint-disable-next-line lines-around-comment
    /* Custom scrollbar instead of browser scroll, remove if you want browser scroll only */
    <ScrollWrapper
      {...(isBreakpointReached
        ? {
            className: 'bs-full overflow-y-auto overflow-x-hidden',
            onScroll: container => scrollMenu(container, false)
          }
        : {
            options: { wheelPropagation: false, suppressScrollX: true },
            onScrollY: container => scrollMenu(container, true)
          })}
    >
      {/* Incase you also want to scroll NavHeader to scroll with Vertical Menu, remove NavHeader from above and paste it below this comment */}
      {/* Vertical Menu */}
      <Menu
        popoutMenuOffset={{ mainAxis: 23 }}
        menuItemStyles={menuItemStyles(verticalNavOptions, theme)}
        renderExpandIcon={({ open }) => <RenderExpandIcon open={open} transitionDuration={transitionDuration} />}
        renderExpandedMenuItemIcon={{ icon: <i className='tabler-circle text-xs' /> }}
        menuSectionStyles={menuSectionStyles(verticalNavOptions, theme)}
      >
        <MenuItem href='/home' icon={<i className='tabler-smart-home' />}>
          Home
        </MenuItem>
        <MenuItem href='/about' icon={<i className='tabler-info-circle' />}>
          About
        </MenuItem>
        <MenuItem href='/contact' icon={<DialpadIcon />}>
          Contact
        </MenuItem>
        <SubMenu label={dictionary['navigation'].adminSection} icon={<i className='tabler-brand-amigo' />}>
          <MenuItem href={'/admissionQuery'}>Admission Query</MenuItem>
          <MenuItem href={'/visitorBook'}>Visitor Book</MenuItem>
          <MenuItem href={'/complaint'}>Complaint</MenuItem>
          <MenuItem href={'/postalReceive'}>Postal Receive</MenuItem>
          <MenuItem href={'/postalDispatch'}>Postal Dispatch</MenuItem>
          <MenuItem href={'/phoneCallLog'}>Phone Call Log</MenuItem>
          <MenuItem href={'/adminSetup'}>Admin Setup</MenuItem>
          <MenuItem href={'/idCard'}>ID Card</MenuItem>
          <MenuItem href={'/certificatess'}>Certificate</MenuItem>
          <MenuItem href={'/generateCertificate'}>Generate Certificate</MenuItem>
          <MenuItem href={'/generateIdCard'}>Generate ID Card</MenuItem>
        </SubMenu>
        <SubMenu label={dictionary['navigation'].academics} icon={<i className='tabler-school' />}>
          <MenuItem href={'/optionalSubject'}>Optional Subject</MenuItem>
          <MenuItem href={'/section'}>Section</MenuItem>
          <MenuItem href={'/classGroup'}>Class</MenuItem>
          <MenuItem href={'/subjects'}>Subjects</MenuItem>
          <MenuItem href={'/assignClassTeacher'}>Assign Class Teacher</MenuItem>
          <MenuItem href={'/assignSubject'}>Assign Subject</MenuItem>
          <MenuItem href={'/classRoom'}>Class Room</MenuItem>
          <MenuItem href={'/classRoutine'}>Class Routine</MenuItem>
        </SubMenu>
        <SubMenu label={dictionary['navigation'].studyMaterial} icon={<i className='tabler-download' />}>
          <MenuItem href={'/uploadContent'}>Upload Content</MenuItem>
          <MenuItem href={'/assignment'}>Assignment</MenuItem>
          <MenuItem href={'/syllabus'}>Syllabus</MenuItem>
          <MenuItem href={'/otherDownloads'}>Other Downloads</MenuItem>
        </SubMenu>
        <SubMenu label={dictionary['navigation'].lessonPlan} icon={<i className='tabler-list-details' />}>
          <MenuItem href={'/lesson'}>Lesson</MenuItem>
          <MenuItem href={'/topic'}>Topic</MenuItem>
          <MenuItem href={'/topicOverView'}>Topic Overview</MenuItem>
          <MenuItem href={'/lessonPlan'}>Lesson Plan</MenuItem>
          <MenuItem href={'/lessonPlanOverView'}>Lesson Plan Overview</MenuItem>
        </SubMenu>
        <SubMenu label={dictionary['navigation'].bulkPrint} icon={<i className='tabler-printer' />}>
          <MenuItem href={'/idCardPrint'}>ID Card</MenuItem>
          <MenuItem href={'/certificatePrint'}>Certificate</MenuItem>
          <MenuItem href={'/payRollBulk'}>Payroll Bulk Print</MenuItem>
          <MenuItem href={'/feesInvoiceBulk'}>Fees Invoice Bulk Print</MenuItem>
          <MenuItem href={'/feesInvoiceSetting'}>Fees Invoice Bulk Print Setting</MenuItem>
        </SubMenu>
        <SubMenu label={dictionary['navigation'].downloadCenter} icon={<i className='tabler-download' />}>
          <MenuItem href={'/contentType'}>Content Type</MenuItem>
          <MenuItem href={'/contentList'}>Content List</MenuItem>
          <MenuItem href={'/sharedContentList'}>Shared Content List</MenuItem>
          <MenuItem href={'/videoList'}>Video List</MenuItem>
        </SubMenu>
        <SubMenu label={dictionary['navigation'].student} icon={<SchoolIcon />}>
          <MenuItem href={`/studentCategory`}>Student Category</MenuItem>
          <MenuItem href={`/studentAdd`}>Add Student</MenuItem>
          <MenuItem href={`/studentLi`}>Student List</MenuItem>
          <MenuItem href={`/multiClassStudent`}>Multi Class Student</MenuItem>
          <MenuItem href={`/deleteStudentRecord`}>Delete Student Record</MenuItem>
          <MenuItem href={`/unAssignedStudent`}>Unassigned Student</MenuItem>
          <MenuItem href={`/studentAttendance`}>Student Attendance</MenuItem>
          <MenuItem href={`/studentGroup`}>Student Group</MenuItem>
          <MenuItem href={`/studentPromote`}>Student Promote</MenuItem>
          <MenuItem href={`/disabledStudents`}>Disabled Students</MenuItem>
          <MenuItem href={`/subjectWiseAttendance`}>Subject Wise Attendance</MenuItem>
          <MenuItem href={`/studentExport`}>Student Export</MenuItem>
          <MenuItem href={`/smsSendingTime`}>SMS Sending Time</MenuItem>
        </SubMenu>
        <SubMenu label={dictionary['navigation'].behaviourRecords} icon={<i className='tabler-clipboard-list' />}>
          <MenuItem href={'/incidents'}>Incidents</MenuItem>
          <MenuItem href={'/assignIncident'}>Assign Incident</MenuItem>
          <MenuItem href={'/studentIncidentReport'}>Student Incident Report</MenuItem>
          <MenuItem href={'/behaviourReport'}>Behaviour Report</MenuItem>
          <MenuItem href={'/classSectionReport'}>Class Section Report</MenuItem>
          <MenuItem href={'/incidentWiseReport'}>Incident Wise Report</MenuItem>
          <MenuItem href={'/behaviourSettings'}>Settings</MenuItem>
        </SubMenu>
        <SubMenu label={dictionary['navigation'].fee} icon={<i className='tabler-cash-banknote' />}>
          <MenuItem href={'/feesGroup'}>Fees Group</MenuItem>
          <MenuItem href={'/feesType'}>Fees Type</MenuItem>
          <MenuItem href={'/feesInvoice'}>Fees Invoice</MenuItem>
          <MenuItem href={'/bankPayment'}>Bank Payment</MenuItem>
          <MenuItem href={'/feesCarryForward'}>Fees Carry Forward</MenuItem>
        </SubMenu>
        <SubMenu label={dictionary['navigation'].homework} icon={<i className='tabler-book' />}>
          <MenuItem href={'/addHomework'}>Add Homework</MenuItem>
          <MenuItem href={'/homeWorkList'}>Homework List</MenuItem>
          <MenuItem href={'/homeWorkReport'}>Homework Report</MenuItem>
        </SubMenu>
        <SubMenu label={dictionary['navigation'].library} icon={<ArticleIcon />}>
          <MenuItem href={'/libraryAdd'}>Add Books</MenuItem>
          <MenuItem href={'/libraryList'}>Booklist</MenuItem>
          <MenuItem href={'/libraryCat'}>Book Categories</MenuItem>
          <MenuItem href={'/libraryMember'}>Add Member</MenuItem>
          <MenuItem href={'/libraryIssue'}>Issue/Return Book</MenuItem>
          <MenuItem href={'/libraryIssued'}>All Issued Books</MenuItem>
          <MenuItem href={'/librarySubject'}>Subject</MenuItem>
        </SubMenu>
        <SubMenu label={dictionary['navigation'].transport} icon={<i className='tabler-bus' />}>
          <MenuItem href={'/route'}>Routes</MenuItem>
          <MenuItem href={'/vehicle'}>Vehicle</MenuItem>
          <MenuItem href={'/assignVehicle'}>Assign Vehicle</MenuItem>
        </SubMenu>
        <SubMenu label={dictionary['navigation'].dormitory} icon={<i className='tabler-bed' />}>
          <MenuItem href={'/dormitoryRooms'}>Dormitory Rooms</MenuItem>
          <MenuItem href={'/dormitory'}>Dormitory</MenuItem>
          <MenuItem href={'/roomType'}>Room Type</MenuItem>
        </SubMenu>
        <SubMenu label={dictionary['navigation'].examination} icon={<i className='tabler-map' />}>
          <MenuItem href={'/examType'}>Exam Type</MenuItem>
          <MenuItem href={'/examSetup'}>Exam Setup</MenuItem>
          <MenuItem href={'/examSchedule'}>Exam Schedule</MenuItem>
          <MenuItem href={'/examAttendance'}>Exam Attendance</MenuItem>
          <MenuItem href={'/marksRegister'}>Marks Register</MenuItem>
          <MenuItem href={'/marksGrade'}>Marks Grade</MenuItem>
          <MenuItem href={'/sendMarksBySms'}>Send Marks By SMS</MenuItem>
          <MenuItem href={'/markSheetReport'}>Marksheet Report</MenuItem>
        </SubMenu>
        <SubMenu label={dictionary['navigation'].examplan} icon={<QuizIcon />}>
          <MenuItem href={'/examAdmitCard'}>Admit Card</MenuItem>
          <MenuItem href={'/examSeatPlan'}>Seat Plan</MenuItem>
        </SubMenu>
        <SubMenu label={dictionary['navigation'].onlineexam} icon={<OnlinePredictionIcon />}>
          <MenuItem href={'/onlineQuestionGroup'}>Question Group</MenuItem>
          <MenuItem href={'/onlineQuestionBank'}>Question Bank</MenuItem>
          <MenuItem href={'/onlineExam'}>Online Exam</MenuItem>
        </SubMenu>

        <SubMenu label={dictionary['navigation'].hr} icon={<SensorOccupiedIcon />}>
          <MenuItem href={'/humanDesignation'}>Designation</MenuItem>
          <MenuItem href={'/humanDepartment'}>Department</MenuItem>
          <MenuItem href={'/humanAddStaff'}>Add Staff</MenuItem>
          <MenuItem href={'/humanStaffDir'}>Staff Directory</MenuItem>
          <MenuItem href={'/humanStaffAttend'}>Staff Attendance</MenuItem>
          <MenuItem href={'/humanPayRoll'}>Payroll</MenuItem>
        </SubMenu>

        <SubMenu label={dictionary['navigation'].teacherEvaluation} icon={<i className='tabler-star' />}>
          <MenuItem href={'/approvedEvalutaionReport'}>Approved Evaluation Report</MenuItem>
          <MenuItem href={'/pendingEvalutaionReport'}>Pending Evaluation Report</MenuItem>
          <MenuItem href={'/teacherWiseEvalutaionReport'}>Teacher Wise Evaluation Report</MenuItem>
          <MenuItem href={'/teacherSettings'}>Settings</MenuItem>
        </SubMenu>
        <SubMenu label={dictionary['navigation'].leave} icon={<i className='tabler-bed-flat' />}>
          <MenuItem href={'/applyLeave'}>Apply Leave</MenuItem>
          <MenuItem href={'/approveLeaveRequest'}>Approve Leave Request</MenuItem>
          <MenuItem href={'/pendingLeaveRequest'}>Pending Leave Request</MenuItem>
          <MenuItem href={'/leaveDefine'}>Leave Define</MenuItem>
          <MenuItem href={'/leaveType'}>Leave Type</MenuItem>
        </SubMenu>
        <SubMenu label={dictionary['navigation'].roleAndPermission} icon={<i className='tabler-user-shield' />}>
          <MenuItem href={'/loginPermission'}>Login Permission</MenuItem>
          <MenuItem href={'/role'}>Role</MenuItem>
          <MenuItem href={'/dueFeesLoginPermission'}>Due Fees Login Permission</MenuItem>
        </SubMenu>
        <SubMenu label={dictionary['navigation'].wallet} icon={<i className='tabler-wallet' />}>
          <MenuItem href={'/pendingDeposit'}>Pending Deposit</MenuItem>
          <MenuItem href={'/approveDeposit'}>Approve Deposit</MenuItem>
          <MenuItem href={'/rejectDeposit'}>Reject Deposit</MenuItem>
          <MenuItem href={'/walletTransaction'}>Wallet Transaction</MenuItem>
          <MenuItem href={'/refundRequest'}>Refund Request</MenuItem>
        </SubMenu>

        <SubMenu label={dictionary['navigation'].accounts} icon={<AccountBalanceIcon />}>
          <MenuItem href={'/placc'}>Profit & Loss</MenuItem>
          <MenuItem href={'/income'}>Income</MenuItem>
          <MenuItem href={'/expense'}>Expense</MenuItem>
          <MenuItem href={'/chartAcc'}>Chart Of Account</MenuItem>
          <MenuItem href={'/bankAcc'}>Bank Account</MenuItem>
          <MenuItem href={'fundTrans'}>Fund Transfer</MenuItem>
        </SubMenu>

        <SubMenu label={dictionary['navigation'].inventory} icon={<i className='tabler-building-warehouse' />}>
          <MenuItem href={'/itemCategory'}>Item Category</MenuItem>
          <MenuItem href={'/itemList'}>Item List</MenuItem>
          <MenuItem href={'/itemStore'}>Item Store</MenuItem>
          <MenuItem href={'/supplier'}>Supplier</MenuItem>
          <MenuItem href={'/itemReceive'}>Item Receive</MenuItem>
          <MenuItem href={'/itemReceiveList'}>Item Receive List</MenuItem>
          <MenuItem href={'/itemSell'}>Item Sell</MenuItem>
          <MenuItem href={'/itemIssue'}>Item Issue</MenuItem>
        </SubMenu>

        <SubMenu label={dictionary['navigation'].chat} icon={<i className='tabler-brand-wechat' />}>
          <MenuItem href={'/chatBox'}>Chat Box</MenuItem>
          <MenuItem href={'/invitation'}>Invitation</MenuItem>
          <MenuItem href={'/blockedUser'}>Blocked User</MenuItem>
        </SubMenu>

        <SubMenu label={dictionary['navigation'].studentReport} icon={<i className='tabler-users-group' />}>
          <MenuItem href={'/studentAttendanceReport'}>Student Attendance Report</MenuItem>
          <MenuItem href={'/subjectAttendanceReport'}>Subject Attendance Report</MenuItem>
          <MenuItem href={'/homeWorkEvaluationReport'}>Homework Evaluation Report</MenuItem>
          <MenuItem href={'/studentTransportReport'}>Student Transport Report</MenuItem>
          <MenuItem href={'/studentDormitoryReport'}>Student Dormitory Report</MenuItem>
          <MenuItem href={'/guardianReport'}>Guardian Reports</MenuItem>
          <MenuItem href={'/studentHistory'}>Student History</MenuItem>
          <MenuItem href={'/studentLoginReport'}>Student Login Report</MenuItem>
          <MenuItem href={'/classReport'}>Class Report</MenuItem>
          <MenuItem href={'/classRoutineReport'}>Class Routine</MenuItem>
          <MenuItem href={'/userLog'}>User Log</MenuItem>
          <MenuItem href={'/studentReport'}>Student Report</MenuItem>
          <MenuItem href={'/previousRecord'}>Previous Record</MenuItem>
        </SubMenu>

        <SubMenu label={dictionary['navigation'].examReport} icon={<i className='tabler-notebook' />}>
          <MenuItem href={'/examRoutine'}>Exam Routine</MenuItem>
          <MenuItem href={'/meritListReport'}>Merit List Report</MenuItem>
          <MenuItem href={'/onlineExamReport'}>Online Exam Report</MenuItem>
          <MenuItem href={'/examMarkSheetReport'}>Mark Sheet Report</MenuItem>
          <MenuItem href={'/tabulationSheetReport'}>Tabulation Sheet Report</MenuItem>
          <MenuItem href={'/progressCardReport'}>Progress Card Report</MenuItem>
          <MenuItem href={'/progressCardReportHundredPercent'}>Progress Card Report 100 Percent</MenuItem>
          <MenuItem href={'/previousResult'}>Previous Result</MenuItem>
        </SubMenu>

        <SubMenu label={dictionary['navigation'].staffReport} icon={<i className='tabler-user-star' />}>
          <MenuItem href={'/staffAttendanceReport'}>Staff Attendance Report</MenuItem>
          <MenuItem href={'/payRollReport'}>Payroll Report</MenuItem>
        </SubMenu>

        <SubMenu label={dictionary['navigation'].accountsReport} icon={<i className='tabler-cash-banknote' />}>
          <MenuItem href={'/accountPayRollReport'}>Payroll Report</MenuItem>
          <MenuItem href={'/tranasaction'}>Transaction</MenuItem>
        </SubMenu>

        <SubMenu label={dictionary['navigation'].feesReport} icon={<i className='tabler-report' />}>
          <MenuItem href={'/feesDue'}>Fees Due Report</MenuItem>
          <MenuItem href={'/fine'}>Fine Report</MenuItem>
          <MenuItem href={'/payment'}>Payment Report</MenuItem>
          <MenuItem href={'/balance'}>Balance Report</MenuItem>
          <MenuItem href={'/waiver'}>Waiver Report</MenuItem>
          <MenuItem href={'/wallet'}>Wallet Report</MenuItem>
        </SubMenu>
      </Menu>
      {/* <Menu
        popoutMenuOffset={{ mainAxis: 23 }}
        menuItemStyles={menuItemStyles(verticalNavOptions, theme)}
        renderExpandIcon={({ open }) => <RenderExpandIcon open={open} transitionDuration={transitionDuration} />}
        renderExpandedMenuItemIcon={{ icon: <i className='tabler-circle text-xs' /> }}
        menuSectionStyles={menuSectionStyles(verticalNavOptions, theme)}
      >
        <GenerateVerticalMenu menuData={menuData(dictionary)} />
      </Menu> */}
    </ScrollWrapper>
  )
}

export default VerticalMenu
