/* eslint-disable */
import ClassRoom from './0-classroom.js';

export default function initializeRooms() {
  const rooms = [];
  rooms.push(new ClassRoom(10));
  rooms.push(new ClassRoom(20));
  rooms.push(new ClassRoom(34));

  return rooms;
}
