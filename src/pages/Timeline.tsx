import * as React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import firebase, { db } from '../config/firebase';
import { nanoid } from 'nanoid';


type ItemsProps = {
  first:string
  last:string
}

export const Timeline: React.FC = () => {
  const [items, setItems] = useState<ItemsProps[]>([])

  useEffect(() => {
    db.collection('users')
      .onSnapshot((snapshot) => {
        const allData = snapshot.docs.map((doc) => {
          // 型を指定
          return doc.data() as ItemsProps
        })
        console.log(allData)
        setItems(allData)
      })
  },[])

  return (
    <div>
      タイムライン
      <Link to='/'>TOPへ</Link>
      {
        items.map((item) => {
          return (
            <div key={nanoid()}>{item.first}:{item.last}</div>
          )
        })
      }
    </div>
  )
}
