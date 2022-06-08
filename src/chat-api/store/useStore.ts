import useAccount from "./useAccount";
import useChannels from "./useChannels";
import useFriends from "./useFriends";
import useInbox from "./useInbox";
import useMessages from "./useMessages";
import useServerMembers from "./useServerMembers";
import useServers from "./useServers";
import useTabs from "./useTabs";
import useUsers from "./useUsers";

export default function useStore() {
  const account = useAccount();
  const serverMembers = useServerMembers();
  const servers = useServers();
  const users = useUsers();
  const channels = useChannels();
  const tabs = useTabs();
  const messages = useMessages();
  const friends = useFriends();
  const inbox = useInbox();

  return {
    account,
    servers,
    users,
    channels,
    tabs,
    messages,
    serverMembers,
    friends,
    inbox
  }
}