import { useQuery } from '@tanstack/react-query';
import { LastFMUser, type LastFMUserParams } from 'lastfm-ts-api';
import { useParams } from 'react-router';
import MediaSection from '@/components/MediaSection/MediaSection';
import MediaSectionSkeleton from '@/components/MediaSection/MediaSectionSkeleton';
import Profile from '@/components/Profile/Profile';
import ProfileSkeleton from '@/components/Profile/ProfileSkeleton';
import Error from '@/components/ui/Error/Error';

const userClient = new LastFMUser(import.meta.env.VITE_API_KEY, import.meta.env.VITE_API_SECRET);

export default function UserPage() {
  const { username } = useParams();

  const apiOptions: LastFMUserParams = {
    user: username,
    limit: 3,
  };

  const userInfo = useQuery({
    queryKey: ['user', username, 'info'],
    queryFn: () => userClient.getInfo(apiOptions),
    select: (data) => data.user,
    enabled: !!username,
  });
  const topArtists = useQuery({
    queryKey: ['user', username, 'topArtists'],
    queryFn: () => userClient.getTopArtists(apiOptions),
    select: (data) => data.topartists.artist,
    enabled: !!username,
  });
  const topAlbums = useQuery({
    queryKey: ['user', username, 'topAlbums'],
    queryFn: () => userClient.getTopAlbums(apiOptions),
    select: (data) => data.topalbums.album,
    enabled: !!username,
  });

  if (!username) {
    return <Error message="Username is undefined" />;
  }

  return (
    <>
      {userInfo.isSuccess && <Profile kind="user" profile={userInfo.data} />}
      {userInfo.isLoading && <ProfileSkeleton />}
      {userInfo.isError && <Error />}

      {topArtists.isSuccess && <MediaSection list={topArtists.data} title="Top Artists" />}
      {topArtists.isLoading && <MediaSectionSkeleton kind="artist" title="Top Artists" />}
      {topArtists.isError && <Error />}

      {topAlbums.isSuccess && <MediaSection list={topAlbums.data} title="Top Albums" />}
      {topAlbums.isLoading && <MediaSectionSkeleton kind="album" title="Top Albums" />}
      {topAlbums.isError && <Error />}
    </>
  );
}
