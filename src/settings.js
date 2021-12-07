//Base URL

const urlDroplet = 'https://oliverstaehr.com/tomcat/security-start';
const urlLocal = 'http://localhost:8080/security-start';

export const myUrl = urlLocal;

export const fetchCategories = `${myUrl}/api/spotify/browse`;

export const fetchByCategory = `${myUrl}/api/spotify/browse/`;

export const fetchPlayList = `${myUrl}/api/spotify`;

export const signup = `${myUrl}/api/login/create`;

export const login = `${myUrl}/api/login`;

export const followUrl = `${myUrl}/api/spotify/follow`;

export const unFollowUrl = `${myUrl}/api/spotify/unfollow`;

export const userPlaylistsDB = `${myUrl}/api/spotify/myplaylists/`;

export const popularPlaylists = `${myUrl}/api/spotify/popular`;

export const userCountURL = `${myUrl}/api/spotify/usercount`;

export const usersUrl = `${myUrl}/api/spotify/users`;

export const deleteUserUrl = `${myUrl}/api/login/delete`;

export const updateUserUrl = `${myUrl}/api/login/update`;
