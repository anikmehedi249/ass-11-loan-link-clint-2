import React from 'react';
import { Link, Outlet } from 'react-router';
import { BsDatabaseFillAdd } from 'react-icons/bs';
import DashActive from '../../Pages/Dashboard/DashActive';
import DashNav from '../../Pages/Dashboard/DashNav';
import Footer from '../Home/Footer';




const DashboardLayout = () => {


  

  return (

    
    <div className="drawer lg:drawer-open ">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Navbar */}
        <nav className="navbar sticky top-0 z-50 w-full bg-base-300 border-b border-base-content/10">

          <DashNav></DashNav>
        </nav>
        {/* Page content here */}
        {/* bg-linear-to-b from-[#bad4d2] to-[#e2eef3] */}

        <main className='flex-1 overflow-y-auto bg-linear-to-b from-[#f1f7ff] to-[#c6f2ff]'>              
          <div className='mx-auto min-h-screen w-full max-w-7xl px-6 py-8'>
            <Outlet></Outlet>
          </div>
        </main>
        <Footer></Footer>
      </div>

      <div className="drawer-side is-drawer-close:overflow-visible">
        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
        <div className="flex h-screen flex-col items-start bg-base-200 border-r border-base-content/10 is-drawer-close:w-20 is-drawer-open:w-64 transition-all duration-300">
          {/* Sidebar content here */}
          <ul className="menu w-full grow px-2 space-y-1">
            {/* List item */}
            <li>
              <Link to={"/"} className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Homepage">
                {/* Home icon */}
                 <img src='/loanlink_logo.png' className='h-8 w-8' alt="" />
                <span className="is-drawer-close:hidden custom-font text-primary text-lg">LoanLink</span>
              </Link>
            </li>

            {/* List item */}
            <li className='my-5'>
              

              
              <DashActive data-tip="AddLoan" to={'/dashboard/add-loan'}>
                <BsDatabaseFillAdd className='w-5 h-5' />
                <span className="is-drawer-close:hidden">Add Loan</span>
              </DashActive>
             

            </li>
          </ul>

        </div>

      </div>
    </div>
  );
};

export default DashboardLayout;