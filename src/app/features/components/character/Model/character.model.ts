import { Thumbnail } from "./thumbnail.model";

export interface Character {
  id?: number;
  name: string;
  description: string;
  thumbnail: Thumbnail;
}
