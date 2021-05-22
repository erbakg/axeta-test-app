import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import UserExperienceListItem from './UserExperienceListItem';

export default function UserExperienceList() {
  const [userExpList, setUserExpList] = useState();

  const userExperienceList = useSelector(
    (state) => state.UserExperienceReducer.experiences
  );

  useEffect(() => {
    let array = userExperienceList.sort(
      (a, b) => parseFloat(b.duration) - parseFloat(a.duration)
    );
    setUserExpList(array);
  }, [userExperienceList]);

  return (
    <div className="userExpListBox">
      <div className="userExpListMainTxt">
        <p className="userListsMainTxt">Experience</p>
      </div>
      {userExpList?.map((item) => (
        <UserExperienceListItem key={item.id} item={item} />
      ))}
    </div>
  );
}
