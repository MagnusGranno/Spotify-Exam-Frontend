import axios from 'axios';
import React, { useState, useEffect } from 'react';

// url
import {
  userCountURL,
  usersUrl,
  deleteUserUrl,
  updateUserUrl,
} from '../../settings';
// Styles
import {
  AdminTable,
  AdminWrapper,
  AdminStatsContent,
  AdminStatistics,
  AdminMisc,
  DeleteButton,
  EditButton,
  AdminUserContent,
  AdminList,
} from './AdminPanel.styles';

const AdminPanel = () => {
  const [userCount, setUserCount] = useState(0);
  const [users, setUsers] = useState([]);
  let keyID = 1;
  const getUserCount = () => {
    try {
      axios(userCountURL, {
        method: 'GET',
        headers: {
          'x-access-token': sessionStorage.getItem('jwtToken'),
        },
      }).then((response) => {
        setUserCount(response.data.userCount);
      });
    } catch (error) {
      console.error('shit');
    }
  };
  const getUsers = () => {
    try {
      axios(usersUrl, {
        method: 'GET',
        headers: {
          'x-access-token': sessionStorage.getItem('jwtToken'),
        },
      }).then((response) => {
        setUsers(response.data);
      });
    } catch (error) {
      console.error('shit');
    }
  };

  const deleteUser = async (userName) => {
    let answer = prompt(`Type delete to delete ${userName}`);
    if (answer !== 'delete') return;
    if (answer === 'delete') {
      try {
        await axios(`${deleteUserUrl}/${userName}`, {
          method: 'DELETE',
          headers: {
            'x-access-token': sessionStorage.getItem('jwtToken'),
          },
        });
      } catch (error) {
        console.error(error);
      }
    }
    setUserCount(userCount - 1);
  };

  const updateUser = async (userName) => {
    let newPassword = prompt(`Give ${userName} a new password!`);
    const updateUserObject = {
      username: userName,
      password: newPassword ?? `${userName}123`,
    };
    try {
      await axios(`${updateUserUrl}/${userName}`, {
        method: 'PUT',
        headers: {
          'x-access-token': sessionStorage.getItem('jwtToken'),
        },
        data: updateUserObject,
      });
      alert('Success!');
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUserCount();
    getUsers();
  }, [userCount]);

  return (
    <AdminWrapper>
      {/* STATISTICS */}
      <AdminStatsContent>
        <AdminStatistics>
          <thead>
            <tr>
              <th colSpan="2">
                <h2>Statistics</h2>
              </th>
            </tr>
            <tr>
              <th>Users</th>
              <th>Admins</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{userCount}</td>
              <td>2</td>
            </tr>
          </tbody>
        </AdminStatistics>
      </AdminStatsContent>

      {/* USER LIST */}
      <AdminUserContent>
        <AdminTable>
          <thead>
            <tr>
              <th colSpan="4">
                <h2>USERS</h2>
              </th>
            </tr>
            <tr>
              <th>Username</th>
              <th>PL Count</th>
              <th colSpan="2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={keyID++}>
                <td>{user.userName}</td>
                <td>{user.playlistCount}</td>
                <td>
                  <EditButton
                    onClick={() => {
                      updateUser(user.userName);
                    }}
                  >
                    Edit
                  </EditButton>
                </td>
                <td>
                  <DeleteButton
                    onClick={() => {
                      deleteUser(user.userName);
                    }}
                  >
                    Delete
                  </DeleteButton>
                </td>
              </tr>
            ))}
          </tbody>
        </AdminTable>
      </AdminUserContent>
      {/* MISC */}
      <AdminMisc>
        <AdminList>
          <h2>TODOS:</h2>
          <li>Contact Spotify about refresh tokens.</li>
          <li>Run diagnostics on front page.</li>
          <li>Renew hosting licens.</li>
          <li>Create 3 themes for the website.</li>
        </AdminList>
      </AdminMisc>
    </AdminWrapper>
  );
};

export default AdminPanel;
