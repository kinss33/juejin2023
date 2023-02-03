import { FC } from "react";
import Image from "next/image";
import publicLogo from "@/public/public_logo.png";
import styles from "./styles.module.scss";
import cName from "classnames";
import { IPopOverProps, PopOver } from "../popover/index"
import React, {
  forwardRef,
  useRef,
  useState,
  useEffect,
  useImperativeHandle,
  useContext,
  useMemo,
} from "react";
import { time } from "console";

const DisLikePop:FC<{}> = ({})=>{

  return(
    <div className={styles.dislikeMenu} >hello</div>
  );
}
export const Entry:FC<{}> =({
}) =>{
  const [dislikeVisible, setDislikeVisible] = useState(false);
  let interp:Boolean = false;
  const [dislikeLeave, setDislikeLeave] = useState(false);
  const [userInfo, setUserInfo] = useState(false);
  const popoverRef = useRef<IPopOverProps>(null);

  useEffect(() => {
   if(dislikeLeave==true){
    setTimeout(() => {
      setDislikeVisible(false);
    }, 100);
   }
  }, [dislikeLeave]);
  const disLkieMenu = dislikeVisible?(
    <div className={dislikeLeave?styles.dislikeMenuLeave:styles.dislikeMenuEnter} 
    onMouseLeave={():void=>{
      interp=false;
      setTimeout(() => {
        if(interp==false){
          setDislikeLeave(true);
        }
      }, 800);
    }}
    onMouseEnter={():void=>{
      if(dislikeVisible==true){
        interp=true;
      }
    }}>
    hello</div>
  ):(<></>);
  return (
    <div className ={styles.item}>
        <div className ={styles.entry} >
          <div className={styles.metaContainer}>
            <div className={styles.userMessage} >用户名</div>
            <div className={styles.date}  >时间</div>
            <div className={styles.tagList}  >
              <a className={styles.tag} href="xx">tag</a>
              <a  className={styles.tag} href="xx">tag</a>
              </div>
          </div>
          <div className={styles.cotentWrapper}>
            <div className={styles.contentMain} >
              <div className={styles.titleRow}  >
                <a href="xx" className={styles.title}>我是一个标题我是一个标题我是一个标题我是一个标题</a></div>
              <div className={styles.abstract} ><a href=""> 内容巴拉巴拉把啦啦啦啦发生的浪费内容巴拉巴拉把啦啦啦啦发生的浪费内容巴拉巴拉把啦啦啦啦发生的浪费</a>
               </div>
              <ul className={styles.actionList} >
                <li className ={styles.item} >view</li>
                <li className ={styles.item} >like</li>
              </ul>
              </div>
          </div>

          <div className={styles.dislike} 
          onMouseEnter={(Event):void=>{
            popoverRef.current?.onMouseEnter(Event);
          }}
          onMouseLeave={(Event):void=>{
            popoverRef.current?.onMouseLeave(Event);
          }}
           >
          <PopOver ref={popoverRef} fadeTime={500} ><div className={styles.dislikeMenu} >hello</div></PopOver>
            {/* {dislike&&<div  className={styles.dislikeMenu}
              onMouseLeave={():void=>{
              setTimeout((): void => {
                setDislike(false);
              }, 1000);
          }} > <DisLikePop  /></div>}    */}
          {disLkieMenu}
          </div>
        </div>
      </div>
  );
}
