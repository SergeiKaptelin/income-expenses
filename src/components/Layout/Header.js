import React, {PureComponent} from "react";
import {Link} from "react-router";
import SVG from "react-inlinesvg";
import classNames from "classnames";

import Logo from "../../assets/header/logo.svg";
import ArrowRight from "../../assets/header/arrow-right.svg";
import TransactionsImage from "../../assets/header/transactions.svg";
import OverviewImage from "../../assets/header/overview.svg";
import styles from "./Header.module.scss";

class Header extends PureComponent {
  render() {
    return (
      <div className={styles.HeaderWrapper}>
        <header className={styles.HeaderContent}>
          <div className={styles.LogoWrapper}>
            <a
              href="/"
              className={styles.LogoItem}
            >
              <SVG src={Logo}>
                <img src={Logo} alt="Logo"/>
              </SVG>
            </a>
            <SVG
              src={ArrowRight}
              className={classNames(styles.LogoItem, styles.ArrowRight)}
            >
              <img src={ArrowRight} alt="ArrowRight"/>
            </SVG>
            <div className={classNames(styles.LogoItem, styles.WalletName)}>
              Wallet
            </div>
          </div>
          <div className={styles.MenuWrapper}>
            <nav>
              <ul className={styles.ListBlock}>
                <li>
                  <Link
                    to="/transactions"
                    className={styles.NavItem}
                    activeClassName={styles.NavItemActive}
                    onlyActiveOnIndex
                  >
                    <SVG
                      src={TransactionsImage}
                      className={styles.NavItemImage}
                    >
                      <img src={TransactionsImage} alt="transactions"/>
                    </SVG>
                    <span className={styles.NavItemText}>
                      Операции
                    </span>
                  </Link>
                </li>
                <li/>
                <li>
                  <Link
                    to="/overview"
                    className={styles.NavItem}
                    activeClassName={styles.NavItemActive}
                    onlyActiveOnIndex
                  >
                    <SVG
                      src={OverviewImage}
                      className={styles.NavItemImage}
                    >
                      <img src={OverviewImage} alt="transactions"/>
                    </SVG>
                    <span className={styles.NavItemText}>
                      Обзор
                    </span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className={styles.AccountWrapper}>
            <div className={styles.Circle}>
              SK
            </div>
            <div className={styles.AccountName}>
              Sergei Kaptelin
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;

