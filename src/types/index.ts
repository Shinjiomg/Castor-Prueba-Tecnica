export interface User {
  id: number;
  username: string;
  email: string;
  created_at: string;
  updated_at: string;
}

export interface UserCreate {
  username: string;
  email: string;
  password: string;
}

export interface UserLogin {
  email: string;
  password: string;
}

export interface UserFavorite {
  id: number;
  user_id: number;
  spotify_id: string;
  type: 'track' | 'album' | 'artist';
  name: string;
  image_url?: string;
  external_url?: string;
  created_at: string;
}

export interface SpotifyTrack {
  id: string;
  name: string;
  artists: SpotifyArtist[];
  album: SpotifyAlbum;
  external_urls: { spotify: string };
  preview_url?: string;
}

export interface SpotifyAlbum {
  id: string;
  name: string;
  images: SpotifyImage[];
  external_urls: { spotify: string };
  release_date: string;
}

export interface SpotifyArtist {
  id: string;
  name: string;
  images?: SpotifyImage[];
  external_urls: { spotify: string };
  followers?: { total: number };
}

export interface SpotifyImage {
  url: string;
  height: number;
  width: number;
}

export interface SpotifySearchResponse {
  tracks?: {
    items: SpotifyTrack[];
    total: number;
  };
  albums?: {
    items: SpotifyAlbum[];
    total: number;
  };
  artists?: {
    items: SpotifyArtist[];
    total: number;
  };
}

export interface AuthResponse {
  user: User;
  token: string;
}

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface UserPlaylist {
  id: number;
  user_id: number;
  name: string;
  description?: string;
  is_public: boolean;
  created_at: string;
  updated_at: string;
  tracks: PlaylistTrack[];
}

export interface PlaylistTrack {
  id: number;
  playlist_id: number;
  spotify_track_id: string;
  track_name: string;
  artist_name: string;
  album_name: string;
  image_url?: string;
  added_at: string;
  position: number;
}

export interface CreatePlaylistRequest {
  name: string;
  description?: string;
  is_public?: boolean;
}

export interface AddTrackToPlaylistRequest {
  spotify_track_id: string;
  track_name: string;
  artist_name: string;
  album_name: string;
  image_url?: string;
} 