import React, { useRef } from 'react';
import './profileHeader.scss';
import PrintIcon from '@material-ui/icons/Print';
import userPhoto from '../../../images/userPhoto.png';
import UserName from './UserName';
import UserLocation from './UserLocation';
import UserExperience from './UserExperience';
import { useDispatch, useSelector } from 'react-redux';
import SyncIcon from '@material-ui/icons/Sync';
import { changePhoto } from '../../../store/actions';

export default function ProfileHeader({ print }) {
  const avatar = useSelector((state) => state.UserAvatarReducer.avatar);

  const dispatch = useDispatch();

  const inputFile = useRef(null);

  const openGallery = () => {
    // `current` points to the mounted file input element
    inputFile.current.click();
  };

  const changeFile = (e) => {
    var file = e[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => dispatch(changePhoto(reader.result));
  };

  return (
    <div className="mainProfileBox">
      <div className="profileLeftSide">
        <div className="userAvatarBox">
          <div onClick={openGallery} className="changeAvatarIconBox">
            <SyncIcon className="changeAvatarIcon" />
          </div>
          <img className="userAvatar" src={avatar} alt={'user avatar...'} />
          <input
            type="file"
            id="file"
            ref={inputFile}
            style={{ display: 'none' }}
            onChange={(e) => changeFile(e.target.files)}
          />
        </div>
        <div className="profileInfoBox">
          <div className="profileNameBox">
            <UserName />
          </div>
          <div className="profileAddressBox">
            <UserLocation />
          </div>
          <div>
            <UserExperience />
          </div>
        </div>
      </div>
      <div className="profileRightSide">
        <div onClick={print} className="profilePrintButton">
          <PrintIcon className="profilePrintButtonIcon" />
          <p className="profilePrintButtonText">Print this page</p>
        </div>
      </div>
    </div>
  );
}
