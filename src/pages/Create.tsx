import * as React from 'react';
import { Link } from 'react-router-dom';

import firebase, { db } from '../config/firebase'

import { useState } from 'react';


export const Create: React.FC = () => {
  const [content,setContent] = useState('')

  const demo = () => {
    db.collection('users').add({
      first: "ooki",
      last: "kotaro"
    })
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id)
      })
      .catch((error) => {
        console.log("Error adding document: ", error);
      })
  }

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    db.collection('messages').add({
      content: content
    })
    .then(()=>{
      console.log('setOK')
    })
    .catch((error) => {
      console.log(error)
    })
  }

  return (
    <div>
      新規作成
      <br />
      <Link to='/'>TOPへ</Link>
      <br />
      <button onClick={() => demo()}>add</button>
      <form onSubmit={(e:React.FormEvent<HTMLFormElement>) => handleSubmit(e)} >
        <label htmlFor='content'>投稿する</label>
        <textarea id='content' value={content} onChange={(e) => setContent(e.target.value)} />
        <input type='submit'/>
      </form>
    </div>
  )
}
