import axios from 'axios';
import { useState } from 'react';
import { updateUserUrl } from '../../settings';
import {
  Wrapper,
  StyledFormWrapper,
  StyledForm,
  StyledInput,
  StyledButton,
  StyledError,
  StyledSuccess,
} from './UserProfile.styles';

const UserProfile = () => {
  const [newPasswordOne, setNewPasswordOne] = useState('');
  const [newPasswordTwo, setNewPasswordTwo] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const onChangeOne = (e) => {
    e.preventDefault();
    setNewPasswordOne(e.target.value);
  };

  const onChanceTwo = (e) => {
    e.preventDefault();
    setNewPasswordTwo(e.target.value);
  };

  const updateUser = async (userName, password) => {
    const updateUserObject = {
      username: userName,
      password: password ?? `${userName}123`,
    };
    try {
      await axios(`${updateUserUrl}/${userName}`, {
        method: 'PUT',
        headers: {
          'x-access-token': sessionStorage.getItem('jwtToken'),
        },
        data: updateUserObject,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (newPasswordOne === newPasswordTwo) {
      setError('');
      await updateUser(sessionStorage.getItem('username'), newPasswordOne);
      setNewPasswordOne('');
      setNewPasswordTwo('');
      setSuccess('Password changed!');
    } else {
      setSuccess('');
      setError('Passwords does not match');

      setNewPasswordOne('');
      setNewPasswordTwo('');
    }
  };
  return (
    <Wrapper>
      <StyledFormWrapper>
        <StyledForm>
          <div>
            <h1>User: {sessionStorage.getItem('username')}</h1>
          </div>

          <h3>Change your password here</h3>

          <h4>Type new Password:</h4>
          <StyledInput
            type="password"
            id="passwordOne"
            onChange={onChangeOne}
            value={newPasswordOne}
          />
          <h4>Confirm Password:</h4>
          <StyledInput
            type="password"
            id="passwordTwo"
            onChange={onChanceTwo}
            value={newPasswordTwo}
          />

          {error && <StyledError>{error}</StyledError>}
          {success && <StyledSuccess>{success}</StyledSuccess>}
          <StyledButton
            onClick={(e) => {
              onSubmit(e);
            }}
          >
            Save
          </StyledButton>
        </StyledForm>
      </StyledFormWrapper>
    </Wrapper>
  );
};

export default UserProfile;
