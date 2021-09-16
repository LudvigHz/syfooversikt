import { CHANGELOG_ROOT } from '@/utils/apiUrlUtil';
import { useQuery } from 'react-query';
import { Changelog } from '@/api/types/changelogTypes';
import { get } from '@/api/axios';

export const changelogsQueryKeys = {
  changelogs: 'changelogs',
};

export const useChangelogsQuery = () => {
  const fetchChangelogs = () => get<Changelog[]>(CHANGELOG_ROOT);

  return useQuery(changelogsQueryKeys.changelogs, fetchChangelogs);
};