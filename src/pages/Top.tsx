import * as React from 'react';
import { Link } from 'react-router-dom';

import firebase, { db } from '../config/firebase';

export const Top: React.FC = () => {
  return(
    <div>
      TOP
      <br/>
      <Link to='/create'>新規登録</Link>
      <Link to='/timeline'>タイムラインへ</Link>
    </div>
  )
}
