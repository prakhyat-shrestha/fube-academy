'use client'

// Third-party Imports
import classnames from 'classnames'

// Component Imports
import NavToggle from './NavToggle'
import ModeDropdown from '@components/layout/shared/ModeDropdown'
import UserDropdown from '@components/layout/shared/UserDropdown'

// Util Imports
import { verticalLayoutClasses } from '@layouts/utils/layoutClasses'
import AcademicYearDropdown from '../shared/AcademicYearDropdown'

const NavbarContent = () => {
  return (
    <div className={classnames(verticalLayoutClasses.navbarContent, 'relative flex items-center is-full')}>
      <div className='flex items-center'>
        <NavToggle />
        <ModeDropdown />
      </div>
      <div className='mx-auto flex items-center'>
        <AcademicYearDropdown />
      </div>

      <div className='ml-auto flex items-center'>
        <UserDropdown />
      </div>
    </div>
  )
}

export default NavbarContent
