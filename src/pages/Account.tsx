import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import AccountBasicInfo from "../components/account/AccountBasicInfo";
import AccountBiography from "../components/account/AccountBiography";
import AccountAchievements from "../components/account/AccountAchievements";
import AccountGameList from "../components/account/AccountGameList";
import User from "../models/User";

export default function Account(props: { user: User; }) {

  const user = props.user;
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 200)
  }, []);
  
  return (
    <Box>
      <Box display={loading === false ? 'block' : 'none'}>
        <Box padding={8} textAlign='left'>
          <AccountBasicInfo user={user} />
          <AccountBiography user={user}/>
          <AccountAchievements />
        </Box>
        <AccountGameList user={user} />
      </Box>
    </Box>
  )
}