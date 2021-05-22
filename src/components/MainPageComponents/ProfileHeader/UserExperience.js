import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserExperienceItem from './UserExperienceItem';
import AddIcon from '@material-ui/icons/Add';
import checkIcon from '../../../images/checkIcon.png';
import CancelIcon from '@material-ui/icons/Cancel';
import './profileHeader.scss';
import { addExperience } from '../../../store/actions';

export default function UserExperience() {
  const [inputOn, setInputOn] = useState(false);
  const [error, setError] = useState(false);
  const [expInputValue, setExpInputValue] = useState('');
  const [userExpList, setUserExpList] = useState();

  const dispatch = useDispatch();

  const userExperienceList = useSelector(
    (state) => state.UserExperienceReducer.experiences
  );

  useEffect(() => {
    let array = userExperienceList.sort(
      (a, b) => parseFloat(b.duration) - parseFloat(a.duration)
    );

    setUserExpList(array);
  }, [userExperienceList]);

  const addExp = () => {
    let experiences = userExperienceList;
    let lastId = experiences[0];
    if (expInputValue?.length === 0 || expInputValue === undefined) {
      alert('empty experience');
    } else {
      dispatch(
        addExperience({
          id: lastId.id + 1,
          label: expInputValue,
        })
      );
      setExpInputValue('');
      setInputOn(false);
    }
  };

  const getInputVal = (e) => {
    var reg_expInput = /^[,a-zA-Z. \b]+$/;
    if (!reg_expInput.test(expInputValue)) {
      setError(true);
    } else {
      setError(false);
    }
    setExpInputValue(e);
  };

  return (
    <div className="userExpBox">
      {userExpList?.map((item) => {
        return <UserExperienceItem key={item.id} item={item} />;
      })}
      {inputOn ? (
        <div className="userExpInputBox">
          <input
            value={expInputValue}
            className="userExpInput"
            onChange={(e) => getInputVal(e.target.value)}
          />
          {error ? (
            <CancelIcon className="errorIcon" />
          ) : (
            <img
              src={checkIcon}
              className="checkIcon"
              alt={'simple icon...'}
              onClick={addExp}
            />
          )}
          {error ? (
            <div className="errorTextBox">
              <p className="errorText">Error Description</p>
            </div>
          ) : null}
        </div>
      ) : (
        <div className="userExpItemBox">
          <AddIcon onClick={() => setInputOn(true)} className="plusIcon" />
        </div>
      )}
    </div>
  );
}
