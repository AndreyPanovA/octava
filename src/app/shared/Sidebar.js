import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import { Trans } from 'react-i18next';
import logo from "../../assets/images/logo.png"
import logoMb from "../../assets/images/logo-mb.png"
import {Collapser} from "../../componets";
const links = [
    {title:"Overview", url:"/"},
    {title:"Администрирование", url:"/"},
    {title:"Мониторинг", url:"/"},
    {title:"Логи ядра", url: "/"},
    {title:"Watchdog Log", url:"/"},
    {title:"Обновить", url:"/"},
    {title:"Пеереподключиться", url:"/"},
    {title:"Locate", url:"/"},
]
const NAV_CONFIG = {
    urls:[
        {title:"Система", nestedRoutes:links},
        {title:"Конфигурация майнера", nestedRoutes:links},
        {title:"Статус майнера", nestedRoutes:links},
        {title:"Сеть", nestedRoutes:links},
        {title:"Отчет об ошибках", nestedRoutes:links},
    ]
}

class Sidebar extends Component {
  state = {};
  toggleMenuState(menuState) {
    if (this.state[menuState]) {
      this.setState({[menuState] : false});
    } else if(Object.keys(this.state).length === 0) {
      this.setState({[menuState] : true});
    } else {
      Object.keys(this.state).forEach(i => {
        this.setState({[i]: false});
      });
      this.setState({[menuState] : true});
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }

  onRouteChanged() {
    document.querySelector('#sidebar').classList.remove('active');
    Object.keys(this.state).forEach(i => {
      this.setState({[i]: false});
    });

    const dropdownPaths = [
      {path:'/apps', state: 'appsMenuOpen'},
      {path:'/basic-ui', state: 'basicUiMenuOpen'},
      {path:'/form-elements', state: 'formElementsMenuOpen'},
      {path:'/tables', state: 'tablesMenuOpen'},
      {path:'/icons', state: 'iconsMenuOpen'},
      {path:'/charts', state: 'chartsMenuOpen'},
      {path:'/user-pages', state: 'userPagesMenuOpen'},
      {path:'/error-pages', state: 'errorPagesMenuOpen'},
    ];




    dropdownPaths.forEach((obj => {
      if (this.isPathActive(obj.path)) {
        this.setState({[obj.state] : true})
      }
    }));

  }

  render () {
      const renders = {
          navItem: (el, idx)=>{
              return (
                  <li key={idx} className={ this.isPathActive('/') ? 'nav-item menu-items active' : 'nav-item menu-items' }>
                      <Collapser Btn={({onClick})=>(
                          <div className={ this.state.formElementsMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={onClick} data-toggle="collapse">
                              <span className="menu-icon">
                                <i className="mdi mdi-playlist-play"></i>
                              </span>
                              <span className="menu-title">{el.title}</span>
                              <i className="menu-arrow"></i>
                          </div>
                      )}>
                          <div>
                              <ul className="nav flex-column sub-menu">
                                  {el.nestedRoutes.map((el, id)=>(
                                      <li className="nav-item" key={`${idx}-${id}`}>
                                          <Link className={ this.isPathActive('/form-elements/basic-elements') ? 'nav-link active' : 'nav-link' }
                                                to={el.url}>
                                              <p>{el.title}</p>
                                          </Link>
                                      </li>
                                  ))}
                              </ul>
                          </div>
                      </Collapser>
                  </li>
              )
          }
      }

    return (
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <div className="sidebar-brand-wrapper d-none d-lg-flex align-items-center justify-content-center fixed-top">
          <Link className="sidebar-brand brand-logo" to={"/"}>
              <img src={logo} alt="Octava" />
          </Link>
          <Link className="sidebar-brand brand-logo-mini" to={"/"}>
              <img src={logoMb} alt="O" />
          </Link>
        </div>
        <ul className="nav">
          <li className="nav-item nav-category">
            <span className="nav-link"><div>Навигация</div></span>
          </li>
            {NAV_CONFIG.urls.map(renders.navItem)}
        </ul>
      </nav>
    );
  }

  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }

  componentDidMount() {
    this.onRouteChanged();
    // add class 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu
    const body = document.querySelector('body');
    document.querySelectorAll('.sidebar .nav-item').forEach((el) => {

      el.addEventListener('mouseover', function() {
        if(body.classList.contains('sidebar-icon-only')) {
          el.classList.add('hover-open');
        }
      });
      el.addEventListener('mouseout', function() {
        if(body.classList.contains('sidebar-icon-only')) {
          el.classList.remove('hover-open');
        }
      });
    });
  }

}

export default withRouter(Sidebar);
// {/*<li className="nav-item profile">*/}
// {/*  <div className="profile-desc">*/}
// {/*    <div className="profile-pic">*/}
// {/*      <div className="count-indicator">*/}
// {/*        <img className="img-xs rounded-circle " src={require('../../assets/images/faces/face15.jpg')} alt="profile" />*/}
// {/*        <span className="count bg-success"></span>*/}
// {/*      </div>*/}
// {/*      <div className="profile-name">*/}
// {/*        <h5 className="mb-0 font-weight-normal"><Trans>Henry Klein</Trans></h5>*/}
// {/*        <span><Trans>Gold Member</Trans></span>*/}
// {/*      </div>*/}
// {/*    </div>*/}
// {/*    <Dropdown alignRight>*/}
// {/*      <Dropdown.Toggle as="a" className="cursor-pointer no-caret">*/}
// {/*        <i className="mdi mdi-dots-vertical"></i>*/}
// {/*      </Dropdown.Toggle>*/}
// {/*      <Dropdown.Menu className="sidebar-dropdown preview-list">*/}
// {/*        <a href="!#" className="dropdown-item preview-item" onClick={evt =>evt.preventDefault()}>*/}
// {/*          <div className="preview-thumbnail">*/}
// {/*            <div className="preview-icon bg-dark rounded-circle">*/}
// {/*              <i className="mdi mdi-settings text-primary"></i>*/}
// {/*            </div>*/}
// {/*          </div>*/}
// {/*          <div className="preview-item-content">*/}
// {/*            <p className="preview-subject ellipsis mb-1 text-small"><Trans>Account settings</Trans></p>*/}
// {/*          </div>*/}
// {/*        </a>*/}
// {/*        <div className="dropdown-divider"></div>*/}
// {/*        <a href="!#" className="dropdown-item preview-item" onClick={evt =>evt.preventDefault()}>*/}
// {/*          <div className="preview-thumbnail">*/}
// {/*            <div className="preview-icon bg-dark rounded-circle">*/}
// {/*              <i className="mdi mdi-onepassword  text-info"></i>*/}
// {/*            </div>*/}
// {/*          </div>*/}
// {/*          <div className="preview-item-content">*/}
// {/*            <p className="preview-subject ellipsis mb-1 text-small"><Trans>Change Password</Trans></p>*/}
// {/*          </div>*/}
// {/*        </a>*/}
// {/*        <div className="dropdown-divider"></div>*/}
// {/*        <a href="!#" className="dropdown-item preview-item" onClick={evt =>evt.preventDefault()}>*/}
// {/*          <div className="preview-thumbnail">*/}
// {/*            <div className="preview-icon bg-dark rounded-circle">*/}
// {/*              <i className="mdi mdi-calendar-today text-success"></i>*/}
// {/*            </div>*/}
// {/*          </div>*/}
// {/*          <div className="preview-item-content">*/}
// {/*            <p className="preview-subject ellipsis mb-1 text-small"><Trans>To-do list</Trans></p>*/}
// {/*          </div>*/}
// {/*        </a>*/}
// {/*      </Dropdown.Menu>*/}
// {/*    </Dropdown>*/}
// {/*  </div>*/}
// {/*</li>*/}
