import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { Friends } from './Friends/Friends';

import user from '../user.json';
import data from '../data.json';

export const App = () => {
  return (
    <div className="container">
      React homework template
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Uploud stats" stats={data} />;
       <FriendList friends={friends} />
      
    </div>
  );
};
