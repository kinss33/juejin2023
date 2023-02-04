import { LOCALDOMAIN } from '@/utils';
import axios from 'axios';
import { FC, useContext, useRef} from "react";
import React from 'react';
import type { GetServerSideProps, GetStaticPaths, GetStaticProps, NextPage } from 'next';
import styles from './styles.module.scss';
import {Entry } from '@/components/entry';
import { UserAgentContext } from "@/stores/userAgent";
import { Environment } from '@/constants/enum';
const Home: NextPage<{}> = ({ }) => {
  const { userAgent } = useContext(UserAgentContext);

  return (
    <div className={styles.timelineContainer} >
      <div className={styles.tagNav}>这是次要选项 会隐藏</div>
       <div className={styles.timelineContent}>
         <div className={styles.entryList} style={userAgent===Environment.mobile?{marginRight:"0rem"}:{marginRight:"21.667rem"}}>
           <header className={styles.listHeader}>
             <nav className={styles.listNav}>
               <ul  className={styles.navList}>
                 <li className={styles.navItem}>推荐</li>
                 <li className={styles.navItem}>最新</li>
                 <li className={styles.navItem}>热门</li>
               </ul>  
             </nav>
           </header>
           <div className={styles.entryListWrap}>
            <Entry></Entry>
            <Entry></Entry>
            <Entry></Entry>
            <Entry></Entry>
            <Entry></Entry>
            <Entry></Entry>
            <Entry></Entry>
           </div>
         </div>
         {userAgent!==Environment.mobile&&<aside  className={styles.indexAside}>
           这是右边的广告</aside>}
         {/* <aside  className={styles.indexAside}>
           这是右边的广告</aside> */}
       </div>
    </div>
  );
};
export default Home;
