import React from 'react'
import "./Sidebar.css"

function Sidebar() {
  return (
    <div className="sidebar">
        <div className="wrapper-top">
            <div className="sidebar-header">
                <div className="sidebar-item">
                    <div className="logo"></div>
                    <h1>Employee DB</h1>
                </div>
            </div>
            <div className="sidebar-body">
                <div className="sidebar-item">
                    <div className="home-logo"></div>
                    <p className="nav-text">Home</p>
                </div>
                <div className="sidebar-item">
                    <div className="dashboard-logo"></div>
                    <p className="nav-text">Dashboard</p>
                </div>
                <div className="sidebar-item">
                    <div className="project-logo"></div>
                    <p className="nav-text">Projects</p>
                </div>
                <div className="sidebar-item">
                    <div className="tasks-logo"></div>
                    <p className="nav-text">Tasks</p>
                </div>
                <div className="sidebar-item">
                    <div className="reporting-logo"></div>
                    <p className="nav-text">Reporting</p>
                </div>
                <div className="sidebar-item">
                    <div className="customers-logo"></div>
                    <p className="nav-text">Customers</p>
                </div>
            </div>
        </div>

        <div className="wrapper-bottom">
            <div className="sidebar-footer">
                <div className="sidebar-item">
                    <div className="notifications-logo"></div>
                    <p className="nav-text">Notifications</p>
                </div>
                <div className="sidebar-item">
                    <div className="support-logo"></div>
                    <p className="nav-text">Support</p>
                </div>
                <div className="sidebar-item">
                    <div className="settings-logo"></div>
                    <p className="nav-text">Settings</p>
                </div>
                <div className="sidebar-item">
                    <div className="avatar">BE</div>
                    <p className="nav-text">Brinsil Elias</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar