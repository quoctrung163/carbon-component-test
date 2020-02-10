import React from "react";
import {
  Header,
  SkipToContent,
  HeaderMenuButton,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  HeaderMenu,
  HeaderContainer,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SideNav,
  HeaderSideNavItems,
  SideNavItems
} from "carbon-components-react";
import { Link } from "react-router-dom";

function AppHeader() {
  return (
    <HeaderContainer
      render={({ isSideNavExpanded, onClickSideNavExpand }) => (
        // Right Page
        <Header aria-label="Coders.X Platform Name">
          <SkipToContent />

          <HeaderMenuButton
            aria-label="Open menu"
            onClick={onClickSideNavExpand}
            isActive={isSideNavExpanded}
          />

          <HeaderName prefix="Coders.X" href="/" />

          <HeaderNavigation aria-label="Coders.X [Platform]">
            <HeaderMenuItem>
              {/* Style Link  */}
              <Link to="/" style={{ textDecoration: "none", color: "#FFF" }}>
                Trang chủ
              </Link>
            </HeaderMenuItem>
            <HeaderMenuItem>
              <Link
                to="/introduce"
                style={{ textDecoration: "none", color: "#FFF" }}
              >
                Giới thiệu
              </Link>
            </HeaderMenuItem>
            <HeaderMenu aria-label="Liên hệ" menuLinkName="Liên hệ">
              <HeaderMenuItem href="#">quoctrung163@outlook.com</HeaderMenuItem>
              <HeaderMenuItem href="#">1710289@dlu.edu.vn</HeaderMenuItem>
              <HeaderMenuItem href="#">miyucoder@gmail.com</HeaderMenuItem>
            </HeaderMenu>
          </HeaderNavigation>

          <SideNav
            aria-label="Side navigation"
            expanded={isSideNavExpanded}
            isPersistent={false}
          >
            <SideNavItems>
              <HeaderSideNavItems>
                <HeaderMenuItem linkRole="link">
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "#393939" }}
                  >
                    Trang chủ
                  </Link>
                </HeaderMenuItem>
                <HeaderMenuItem linkRole="link">
                  <Link
                    to="/introduce"
                    style={{ textDecoration: "none", color: "#393939" }}
                  >
                    Giới thiệu
                  </Link>
                </HeaderMenuItem>
                <HeaderMenu
                  linkRole="link"
                  aria-label="Liên hệ"
                  menuLinkName="Liên hệ"
                >
                  <HeaderMenuItem href="#">
                    quoctrung163@outlook.com
                  </HeaderMenuItem>
                  <HeaderMenuItem href="#">1710289@dlu.edu.vn</HeaderMenuItem>
                  <HeaderMenuItem href="#">miyucoder@gmail.com</HeaderMenuItem>
                </HeaderMenu>
              </HeaderSideNavItems>
            </SideNavItems>
          </SideNav>
        </Header>
      )}
    />
  );
}

export default AppHeader;
