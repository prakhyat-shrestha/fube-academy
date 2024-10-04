// MUI Imports
import { useTheme } from '@mui/material/styles'

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
        <MenuItem href='/contact' icon={<i className='tabler-info-circle' />}>
          Contact
        </MenuItem>
        <SubMenu label={dictionary['navigation'].adminsection} icon={<i className='tabler-brand-amigo' />}>
          <MenuItem href={'/admissionquery'}>Admission Query</MenuItem>
          <MenuItem href={'/visitorbook'}>Visitor Book</MenuItem>
          <MenuItem href={'/complaint'}>Complaint</MenuItem>
          <MenuItem href={'/postalreceive'}>Postal Receive</MenuItem>
          <MenuItem href={'/postaldispatch'}>Postal Dispatch</MenuItem>
          <MenuItem href={'/phonecalllog'}>Phone Call Log</MenuItem>
          <MenuItem href={'/adminsetup'}>Admin Setup</MenuItem>
          <MenuItem href={'/idcard'}>ID Card</MenuItem>
          <MenuItem href={'/certificatess'}>Certificate</MenuItem>
          <MenuItem href={'/generatecertificate'}>Generate Certificate</MenuItem>
          <MenuItem href={'/generateidcard'}>Generate ID Card</MenuItem>
        </SubMenu>
        <SubMenu label={dictionary['navigation'].academics} icon={<i className='tabler-school' />}>
          <MenuItem href={'/optionalsubject'}>Optional Subject</MenuItem>
          <MenuItem href={'/section'}>Section</MenuItem>
          <MenuItem href={'/classGroup'}>Class</MenuItem>
          <MenuItem href={'/subjects'}>Subjects</MenuItem>
          <MenuItem href={'/assignclassteacher'}>Assign Class Teacher</MenuItem>
          <MenuItem href={'/assignsubject'}>Assign Subject</MenuItem>
          <MenuItem href={'/classroom'}>Class Room</MenuItem>
          <MenuItem href={'/classroutine'}>Class Routine</MenuItem>
        </SubMenu>
        <SubMenu label={dictionary['navigation'].studymaterial} icon={<i className='tabler-download' />}>
          <MenuItem href={'/uploadcontent'}>Upload Content</MenuItem>
          <MenuItem href={'/assignment'}>Assignment</MenuItem>
          <MenuItem href={'/syllabus'}>Syllabus</MenuItem>
          <MenuItem href={'/otherdownloads'}>Other Downloads</MenuItem>
        </SubMenu>
        <SubMenu label={dictionary['navigation'].lessonplan} icon={<i className='tabler-list-details' />}>
          <MenuItem href={'/lesson'}>Lesson</MenuItem>
          <MenuItem href={'/topic'}>Topic</MenuItem>
          <MenuItem href={'/topicoverview'}>Topic Overview</MenuItem>
          <MenuItem href={'/lessonplan'}>Lesson Plan</MenuItem>
          <MenuItem href={'/lessonplanoverview'}>Lesson Plan Overview</MenuItem>
        </SubMenu>
        <SubMenu label={dictionary['navigation'].bulkprint} icon={<i className='tabler-printer' />}>
          <MenuItem href={'/idcardprint'}>ID Card</MenuItem>
          <MenuItem href={'/certificateprint'}>Certificate</MenuItem>
          <MenuItem href={'/payrollbulk'}>Payroll Bulk Print</MenuItem>
          <MenuItem href={'/feesinvoicebulk'}>Fees Invoice Bulk Print</MenuItem>
          <MenuItem href={'/feesinvoicesetting'}>Fees Invoice Bulk Print Setting</MenuItem>
        </SubMenu>
        <SubMenu label={dictionary['navigation'].downloadcenter} icon={<i className='tabler-download' />}>
          <MenuItem href={'/contenttype'}>Content Type</MenuItem>
          <MenuItem href={'/contentlist'}>Content List</MenuItem>
          <MenuItem href={'/sharedcontentlist'}>Shared Content List</MenuItem>
          <MenuItem href={'/videolist'}>Video List</MenuItem>
        </SubMenu>
        <SubMenu label={dictionary['navigation'].student} icon={<i className='tabler-user-square' />}>
          <MenuItem href={`/studentadd`}>Add Student</MenuItem>
          <MenuItem href={`/studentli`}>Student List</MenuItem>
        </SubMenu>
        <SubMenu label={dictionary['navigation'].behaviourrecords} icon={<i className='tabler-clipboard-list' />}>
          <MenuItem href={'/incidents'}>Incidents</MenuItem>
          <MenuItem href={'/assignincident'}>Assign Incident</MenuItem>
          <MenuItem href={'/studentincidentreport'}>Student Incident Report</MenuItem>
          <MenuItem href={'/behaviourreport'}>Behaviour Report</MenuItem>
          <MenuItem href={'/classsectionreport'}>Class Section Report</MenuItem>
          <MenuItem href={'/incidentwisereport'}>Incident Wise Report</MenuItem>
          <MenuItem href={'/behavioursettings'}>Settings</MenuItem>
        </SubMenu>
        <SubMenu label={dictionary['navigation'].fee} icon={<i className='tabler-cash-banknote' />}>
          <MenuItem href={'/feesgroup'}>Fees Group</MenuItem>
          <MenuItem href={'/feestype'}>Fees Type</MenuItem>
          <MenuItem href={'/feesinvoice'}>Fees Invoice</MenuItem>
          <MenuItem href={'/bankpayment'}>Bank Payment</MenuItem>
          <MenuItem href={'/feescarryforward'}>Fees Carry Forward</MenuItem>
        </SubMenu>
        <SubMenu label={dictionary['navigation'].homework} icon={<i className='tabler-book' />}>
          <MenuItem href={'/addHomework'}>Add Homework</MenuItem>
          <MenuItem href={'/homeworkList'}>Homework List</MenuItem>
          <MenuItem href={'/homeworkReport'}>Homework Report</MenuItem>
        </SubMenu>
        <SubMenu label={dictionary['navigation'].library} icon={<i className='tabler-books' />}>
          <MenuItem href={'/librarylist'}>Booklist</MenuItem>
          <MenuItem href={'/libraryadd'}>Add Books</MenuItem>
        </SubMenu>
        <SubMenu label={dictionary['navigation'].transport} icon={<i className='tabler-bus' />}>
          <MenuItem href={'/route'}>Routes</MenuItem>
          <MenuItem href={'/vehicle'}>Vehicle</MenuItem>
          <MenuItem href={'/assignVehicle'}>Assign Vehicle</MenuItem>
        </SubMenu>
        <SubMenu label={dictionary['navigation'].dormitory} icon={<i className='tabler-bed' />}>
          <MenuItem href={'/dormitoryrooms'}>Dormitory Rooms</MenuItem>
          <MenuItem href={'/dormitory'}>Dormitory</MenuItem>
          <MenuItem href={'/roomtype'}>Room Type</MenuItem>
        </SubMenu>
        <SubMenu label={dictionary['navigation'].examination} icon={<i className='tabler-map' />}>
          <MenuItem href={'/examtype'}>Exam Type</MenuItem>
          <MenuItem href={'/examsetup'}>Exam Setup</MenuItem>
          <MenuItem href={'/examschedule'}>Exam Schedule</MenuItem>
          <MenuItem href={'/examattendance'}>Exam Attendance</MenuItem>
          <MenuItem href={'/marksregister'}>Marks Register</MenuItem>
          <MenuItem href={'/marksgrade'}>Marks Grade</MenuItem>
          <MenuItem href={'/sendmarksbysms'}>Send Marks By SMS</MenuItem>
          <MenuItem href={'/marksheetreport'}>Marksheet Report</MenuItem>
        </SubMenu>
        <SubMenu label={dictionary['navigation'].teacherevaluation} icon={<i className='tabler-star' />}>
          <MenuItem href={'/approvedevalutaionreport'}>Approved Evaluation Report</MenuItem>
          <MenuItem href={'/pendingevalutaionreport'}>Pending Evaluation Report</MenuItem>
          <MenuItem href={'/teacherwisevalutaionreport'}>Teacher Wise Evaluation Report</MenuItem>
          <MenuItem href={'/teachersettings'}>Settings</MenuItem>
        </SubMenu>
        <SubMenu label={dictionary['navigation'].leave} icon={<i className='tabler-bed-flat' />}>
          <MenuItem href={'/applyleave'}>AppLy Leave</MenuItem>
          <MenuItem href={'/approveleaverequest'}>Approve Leave Request</MenuItem>
          <MenuItem href={'/pendingleaverequest'}>Pending Leave Request</MenuItem>
          <MenuItem href={'/leavedefine'}>Leave Define</MenuItem>
          <MenuItem href={'/leavetype'}>Leave Type</MenuItem>
        </SubMenu>
        <SubMenu label={dictionary['navigation'].roleandpermission} icon={<i className='tabler-user-shield' />}>
          <MenuItem href={'/loginpermission'}>Login Permission</MenuItem>
          <MenuItem href={'/role'}>Role</MenuItem>
          <MenuItem href={'/duefeesloginpermission'}>Due Fees Login Permission</MenuItem>
        </SubMenu>
        <SubMenu label={dictionary['navigation'].feesreport} icon={<i className='tabler-report' />}>
          <MenuItem href={'/feesdue'}>Fees Due Report</MenuItem>
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
