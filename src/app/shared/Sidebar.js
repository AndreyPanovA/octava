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
        {title:"Сеть", nestedRoutes:[
                {title:"Настройки", url: "/network/settings"},
                {title:"Диагностика", url:"/network/diagnostic/"}
            ]
        },
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
