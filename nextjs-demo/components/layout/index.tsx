import { FC } from "react";
import { IFooterProps, Footer } from "../footer/index";
import { INavBarProps, NavBar } from "../navbar/index";
import styles from "./styles.module.scss";
import {Test} from "../test-layout/index"

import Head from 'next/head'
import Link from 'next/link'

export interface ILayoutProps {
  navbarData: INavBarProps;
  footerData: IFooterProps;
}

export const Layout: FC<ILayoutProps & { children: JSX.Element }> = ({
  navbarData,
  footerData,
  children,
}) => {
  return (
    <div className={styles.layout}>
      {/* <Test >{<h1>我是儿子</h1>}</Test> */}
      <NavBar {...navbarData} />
      <main className={styles.main}>{children}</main>
      {/* <Footer {...footerData} /> */}
    </div>
  );
};
