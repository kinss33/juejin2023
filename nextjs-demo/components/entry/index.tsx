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

export const Entry:FC<{}> =({
}) =>{
    
  const DisLikeMenu:FC<{}> = ({})=>{

    const [tagVisible, setTagVisible] = useState(false);
    return(
      <div className={styles.dislikeMenu} >

        <div className={styles.menuItem}>
          <span className={styles.menuIcon} ></span>
          <span className={styles.menuText} >不感兴趣</span>
        </div>
        <div className={styles.menuItem}>
          <span className={styles.menuIcon} ></span>
          <span className={styles.menuText} >屏蔽作者未完成</span>
        </div>
        <div className={styles.menuItem}>
          <span className={styles.menuIcon} ></span>
          <span className={styles.menuText} >屏蔽标签</span>
        </div>
        <div className={styles.tagsRow}>
          <div className={styles.tagList}> 
          <span className={styles.tagItem}>数据注入
          </span>
          </div>
          <div className={styles.btnBlockTag} >
            确定屏蔽：数据注入
          </div>
        </div>
        <div className={styles.menuItem}>
          <span className={styles.menuIcon} ></span>
          <span className={styles.menuText} >举报</span>
        </div>
        <div className={styles.menuItem}>
          <span className={styles.menuIcon} ></span>
          <span className={styles.menuText} >举报</span>
        </div>
      </div>
    );
  }

  const UserMessageMenu:FC<{}> = ({})=>{

    const [tagVisible, setTagVisible] = useState(false);
    return(
      <div className={styles.popoverContent} >
        <div className={styles.infoRow}>
          <a href="xx">
            <img src="" alt="" className={styles.avatar} />
          </a>
          <div className={styles.userInfo} >
            <a href="" className={styles.userName}>
              <span className={styles.name}>
                名字
              </span>
              <span className={styles.rank}>
                等级
              </span>
            </a>
            <div className={styles.position}>
              描述
            </div>
          </div>
        </div>
        <div  className={styles.operateButton}>
          <button className={styles.followButton}>
            关注
          </button>
          <a href="" className={styles.imButton}>
            私信
          </a>
        </div>
        <div  className={styles.metaRow}>
          <ul className={styles.metaList}>
            <li className={styles.metaItem}>
              <div className={styles.count}>2</div>
              <div className={styles.title}>title</div>
            </li>
            <li  className={styles.divider}></li>
            <li className={styles.metaItem}>
              <div className={styles.count}>2</div>
              <div className={styles.title}>title</div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
  const popoverDislikeRef = useRef<IPopOverProps>(null);
  const popoverUserMessageRef = useRef<IPopOverProps>(null);
  return (
    <div className ={styles.item}>
        <div className ={styles.entry} >
          <div className={styles.metaContainer}>
            <div className={styles.userMessage} 
              onMouseEnter={(Event):void=>{
                popoverUserMessageRef.current?.onMouseEnter(Event);
              }}
              onMouseLeave={(Event):void=>{
                popoverUserMessageRef.current?.onMouseLeave(Event);
              }}>用户名
              <div>
              <PopOver ref={popoverUserMessageRef} fadeTime={500} >
              <UserMessageMenu/>
              </PopOver>
              </div>
            </div>
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
            popoverDislikeRef.current?.onMouseEnter(Event);
          }}
          onMouseLeave={(Event):void=>{
            popoverDislikeRef.current?.onMouseLeave(Event);
          }}
           >
          <PopOver ref={popoverDislikeRef} fadeTime={500} >
              <DisLikeMenu/>
              </PopOver>
          </div>
        </div>
      </div>
  );
}
