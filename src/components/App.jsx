import user from "../components/user/user.json";
import data from "../components/statistic/statistic.json";
import friends from "../components/friendlist/friends.json"
import transactions from "../components/Transaction/Transaction.json"


import User from "../components/user/user";
import Statist from "../components/statistic/statistic";
import FriendList from "../components/friendlist/FriendList"
import TransactionHistory from "../components/Transaction/Transaction"



export function App() {
  return (
    <>
      <User
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statist title="Uploads stats" stats={data} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </>
  );
}
















// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
