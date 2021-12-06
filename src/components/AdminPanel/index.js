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
              <td>10</td>
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
              <th>Follows</th>
              <th colSpan="2">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Magnus</td>
              <td>10</td>
              <td>
                <EditButton>Edit</EditButton>
              </td>
              <td>
                <DeleteButton>Delete</DeleteButton>
              </td>
            </tr>
            <tr>
              <td>Magnus</td>
              <td>10</td>
              <td>
                <EditButton>Edit</EditButton>
              </td>
              <td>
                <DeleteButton>Delete</DeleteButton>
              </td>
            </tr>
            <tr>
              <td>Magnus</td>
              <td>10</td>
              <td>
                <EditButton>Edit</EditButton>
              </td>
              <td>
                <DeleteButton>Delete</DeleteButton>
              </td>
            </tr>
            <tr>
              <td>Magnus</td>
              <td>10</td>
              <td>
                <EditButton>Edit</EditButton>
              </td>
              <td>
                <DeleteButton>Delete</DeleteButton>
              </td>
            </tr>
            <tr>
              <td>Magnus</td>
              <td>10</td>
              <td>
                <EditButton>Edit</EditButton>
              </td>
              <td>
                <DeleteButton>Delete</DeleteButton>
              </td>
            </tr>
            <tr>
              <td>Magnus</td>
              <td>10</td>
              <td>
                <EditButton>Edit</EditButton>
              </td>
              <td>
                <DeleteButton>Delete</DeleteButton>
              </td>
            </tr>
            <tr>
              <td>Magnus</td>
              <td>10</td>
              <td>
                <EditButton>Edit</EditButton>
              </td>
              <td>
                <DeleteButton>Delete</DeleteButton>
              </td>
            </tr>
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
