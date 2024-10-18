import React, { useState, useEffect } from 'react';
import { FaHome, FaBox, FaFileInvoice, FaEnvelope, FaCalendarAlt, FaCogs, FaUsers, FaChevronDown, FaChevronUp, FaBars } from 'react-icons/fa'; // React Icons for the icons
// import '../css/sidebar.css';

const SideBarComp = () => {
  const [isOpen, setIsOpen] = useState(true); // Sidebar open by default on large screens
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsOpen(false); // Close sidebar on small screens
      } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
        setIsOpen(false); // Close sidebar on tablet screens
      } else {
        setIsOpen(true); // Keep sidebar open on larger screens
      }
    };

    const handleClickOutside = (event) => {
      if (window.innerWidth < 1024 && !event.target.closest('.sidebarSection') && !event.target.closest('.hamburger-menu')) {
        setIsOpen(false); // Close sidebar if click is outside sidebar and hamburger menu
      }
    };

    // Check screen size on mount
    handleResize();

    // Add resize event listener
    window.addEventListener('resize', handleResize);

    // Add click event listener for closing sidebar on smaller screens
    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="app-container">
      {window.innerWidth < 1024 && (
        <div className="hamburger-menu">
          <FaBars onClick={toggleSidebar} />
        </div>
      )}

      <div className={`sidebarSection ${isOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-header">
          {isOpen && (
            <div className="logo">
              <img src="assets/title.jpg" alt="Logo" style={{ width: '150px' }} />
            </div>
          )}
        </div>
        <ul className="sidebar-nav">
          <li className="nav-item" onClick={toggleDropdown}>
            <FaHome className="nav-icon" />
            {isOpen && <span>Dashboard</span>}
            {isOpen && (isDropdownOpen ? <FaChevronUp className="dropdown-icon" /> : <FaChevronDown className="dropdown-icon" />)}
          </li>
          {isDropdownOpen && (
            <ul className="sideDropdown">
              <li className="nav-item dropdown-item">{isOpen && <span>Inbox</span>}</li>
              <li className="nav-item dropdown-item">{isOpen && <span>Products</span>}</li>
              <li className="nav-item dropdown-item">{isOpen && <span>Invoices</span>}</li>
            </ul>
          )}
          <li className="nav-item">
            <FaBox className="nav-icon" />
            {isOpen && <span>Products</span>}
          </li>
          <li className="nav-item">
            <FaFileInvoice className="nav-icon" />
            {isOpen && <span>Invoices</span>}
          </li>
          <li className="nav-item">
            <FaEnvelope className="nav-icon" />
            {isOpen && <span>Inbox</span>}
          </li>
          <li className="nav-item">
            <FaUsers className="nav-icon" />
            {isOpen && <span>Customers</span>}
          </li>
          <li className="nav-item">
            <FaCalendarAlt className="nav-icon" />
            {isOpen && <span>Calendar</span>}
          </li>
          <li className="nav-item">
            <FaCogs className="nav-icon" />
            {isOpen && <span>Settings</span>}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBarComp;
