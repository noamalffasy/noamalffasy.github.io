import * as React from "react";
import { Component } from "react";

import Scrollspy from "react-scrollspy";

import scrollTo from "utils/scrollTo";

interface State {
  open: boolean;
  active: string;
}

class Navbar extends Component<{}, State> {
  state = { open: false, active: "top" };

  toggle = () => {
    this.setState(prevState => ({
      ...prevState,
      open: !prevState.open
    }));
  };

  onUpdate = (item: HTMLDivElement) => {
    const id = item.getAttribute("id");

    this.setState(prevState => ({
      ...prevState,
      active: id
    }));
  };

  scrollTo = e => {
    e.preventDefault();

    const elem: HTMLAnchorElement = e.target;
    const id = elem.getAttribute("href");

    scrollTo(id);

    this.setState(prevState => ({
      ...prevState,
      open: false
    }));
  };

  render() {
    const { open, active } = this.state;

    return (
      <div className={`Navbar fixed-top ${open ? "open" : ""}`}>
        <div className="navbar-inner container">
          <div className="navbar-top">
            <a className="brand">Noam Alffasy</a>
            <button className="menu-btn" onClick={this.toggle}>
              <span className="bar" />
              <span className="bar" />
            </button>
          </div>
          <Scrollspy
            items={["top", "about", "projects"]}
            className="menu"
            currentClassName=""
            componentTag="div"
            onUpdate={this.onUpdate}
          >
            <a
              className={`brand ${active === "top" ? "active" : ""}`}
              href="#top"
              onClick={this.scrollTo}
            >
              Noam Alffasy
            </a>
            <a
              className={`home ${active === "top" ? "active" : ""}`}
              href="#top"
              onClick={this.scrollTo}
            >
              Home
            </a>
            <a
              className={active === "about" ? "active" : ""}
              href="#about"
              onClick={this.scrollTo}
            >
              About me
            </a>
            <a
              className={active === "projects" ? "active" : ""}
              href="#projects"
              onClick={this.scrollTo}
            >
              Projects
            </a>
          </Scrollspy>
        </div>
        <style jsx>{`
          .Navbar {
            display: flex;
            padding: 0;
            border-bottom: 1px solid rgba(0, 0, 0, 0.1);
            background: #fff;
            height: 100%;
            max-height: 3.25rem;
            overflow: hidden;
            flex-wrap: wrap;
            /* align-items: center; */
            justify-content: space-between;
            transition: all 0.3s;
          }

          .Navbar.open {
            max-height: 100%;
          }

          .Navbar.fixed-top {
            position: fixed;
            top: 0;
            right: 0;
            left: 0;
            z-index: 1030;
          }

          .Navbar > .navbar-inner {
            /* display: flex; */
            width: 100%;
            padding: 0;
            margin: 0;
            max-width: unset;
            /* flex-wrap: nowrap;
            align-items: center; */
          }

          .Navbar .navbar-top {
            display: flex;
            padding: 0 0.5rem;
            border-bottom: 1px solid rgba(0, 0, 0, 0.05);
            align-items: center;
            justify-content: center;
          }

          .Navbar .navbar-top a.brand {
            color: #212529;
            padding: 0.5rem 1rem;
            padding: 0.5rem calc(env(safe-area-inset-left) + 1rem) 0.5rem
              calc(env(safe-area-inset-right) + 1rem);
            border: 0;
          }

          .Navbar .navbar-top .menu-btn {
            display: flex;
            border: 0;
            width: 2.5rem;
            height: 100%;
            margin-left: auto;
            padding: 0 0.5rem;
            padding: 0 calc(env(safe-area-inset-left) + 0.5rem) 0
              calc(env(safe-area-inset-right) + 0.5rem);
            background: none;
            vertical-align: middle;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          .Navbar .navbar-top .menu-btn span.bar {
            display: block;
            width: 1.5rem;
            height: 2px;
            border-radius: 0.3rem;
            background: #212529;
            transition: all 0.3s;
          }

          .Navbar.open .navbar-top .menu-btn span.bar {
            transform: rotate(45deg) translateY(4px) translateX(3px);
          }

          .Navbar.open .navbar-top .menu-btn span.bar:last-child {
            transform: rotate(-45deg) translateY(-4px) translateX(3px);
          }

          .Navbar .navbar-top .menu-btn span.bar:last-child {
            margin: 0.5rem 0 0;
          }

          .Navbar a {
            display: block;
            color: #8e9397;
            width: 100%;
            font-size: 1.5rem;
            font-weight: 300;
            margin: 0;
            padding: 0.5rem 1.5rem;
            padding: 0.5rem calc(env(safe-area-inset-left) + 1.5rem) 0.5rem
              calc(env(safe-area-inset-right) + 1.5rem);
            border-bottom: 1px solid rgba(0, 0, 0, 0.05);
            text-decoration: none;
            transition: all 0.15s;
          }

          .Navbar a.active,
          .Navbar a:hover {
            color: #212529;
          }

          .Navbar .brand {
            display: inline-block;
            /* padding: 0.3125rem 0;
            margin-right: 1rem; 
            font-size: 1.25rem; */
            line-height: inherit;
            white-space: nowrap;
          }

          @media (min-width: 768px),
            @media (min-width: 768px) and (-webkit-min-device-pixel-ratio: 1) {
            .Navbar.open {
              max-height: 3.25rem;
            }

            .Navbar .navbar-top {
              display: none;
            }

            .Navbar .container {
              padding-right: 15px;
              padding-left: 15px;
              margin-right: auto;
              margin-left: auto;
              max-width: 720px;
            }

            .Navbar a {
              font-size: 1rem;
              padding: 0.5rem 0;
              margin-right: 1rem;
              border: 0;
              width: unset;
            }

            .Navbar a.brand {
              display: inline-block !important;
              font-size: 1.25rem;
              padding: 0.3125rem 0;
              margin: 0 1rem;
              border: 0;
            }

            .Navbar a.home {
              display: none;
            }
          }

          @media (min-width: 992px),
            @media (min-width: 992px) and (-webkit-min-device-pixel-ratio: 1) {
            .Navbar {
              padding: 0.5rem 0;
              flex-flow: row nowrap;
              justify-content: flex-start;
            }

            .Navbar .container {
              max-width: 960px;
            }

            .Navbar button.menu-btn {
              display: none;
            }
          }

          @media (min-width: 1200px),
            @media (min-width: 1200px) and (-webkit-min-device-pixel-ratio: 1) {
            .Navbar .container {
              max-width: 1140px;
            }
          }
        `}</style>
        <style jsx global>{`
          .Navbar .menu a.brand {
            display: none !important;
          }

          @media (min-width: 768px),
            @media (min-width: 768px) and (-webkit-min-device-pixel-ratio: 1) {
            .Navbar .menu {
              display: flex;
              height: 100%;
              padding: 0 env(safe-area-inset-left) 0 env(safe-area-inset-right);
              align-items: center;
            }
          }
        `}</style>
      </div>
    );
  }
}

export default Navbar;
