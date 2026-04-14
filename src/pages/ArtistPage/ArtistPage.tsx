import { useQuery } from '@tanstack/react-query';
import { LastFMArtist, type LastFMArtistParams } from 'lastfm-ts-api';
import { useParams } from 'react-router';
import Profile from '@/components/Profile/Profile';
import ProfileSkeleton from '@/components/Profile/ProfileSkeleton';
import MediaSectionSkeleton from '@/components/MediaSection/MediaSectionSkeleton';
import MediaSection from '@/components/MediaSection/MediaSection';
import Error from '@/components/ui/Error/Error';

const artistClient = new LastFMArtist(import.meta.env.VITE_API_KEY, import.meta.env.VITE_API_SECRET);

export default function ArtistPage() {
  const { username } = useParams();

  const apiOptions: LastFMArtistParams = {
    artist: username!,
  };

  const artistInfo = useQuery({
    queryKey: ['artist', username, 'info'],
    queryFn: () => artistClient.getInfo(apiOptions),
    select: (data) => data.artist,
    enabled: !!username,
  });
  const topAlbums = useQuery({
    queryKey: ['artist', username, 'topAlbums'],
    queryFn: () => artistClient.getTopAlbums({ ...apiOptions, limit: 3 }),
    select: (data) => data.topalbums.album,
    enabled: !!username,
  });

  if (!username) {
    return <Error message="Username is undefined" />;
  }

  return (
    <>
      {artistInfo.isSuccess && <Profile kind="artist" profile={artistInfo.data} />}
      {artistInfo.isLoading && <ProfileSkeleton />}
      {artistInfo.isError && <Error />}

      {topAlbums.isSuccess && <MediaSection list={topAlbums.data} title="Top Albums" />}
      {topAlbums.isLoading && <MediaSectionSkeleton kind="album" title="Top Albums" />}
      {topAlbums.isError && <Error />}
    </>
  );
}
