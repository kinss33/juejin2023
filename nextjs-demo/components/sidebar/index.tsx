
import { FC, useContext} from "react";
import styles from './styles.module.scss';
import { Environment } from '@/constants/enum';
import { UserAgentContext } from "@/stores/userAgent";
// export const Test:FC<{children:JSX.Element}> =({children}) =>{
//   return (
//     <div >
//       <h1>下面是children </h1>
//       <main>{children}</main>
//     </div>
//   );
// }
export interface ISideBarProps {}

export const SideBar:FC<ISideBarProps &{children:JSX.Element[]|JSX.Element}> =({children}) =>{

  const { userAgent } = useContext(UserAgentContext);
  const Content:JSX.Element = userAgent!==Environment.mobile?(
  <aside  className={styles.indexAside}>{children}
             </aside>
              ):(<></>)
  return (
    Content
  );
}
